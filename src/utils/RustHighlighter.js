/**
 * RustHighlighter.js
 *
 * Zero-dependency Rust tokenizer for Rust-chan.
 * Returns an HTML string with <span class="token-*"> wrappers.
 * Used by CodeBlock.jsx.
 *
 * Token classes:
 *   token-keyword     → blue    (fn, let, match, impl, etc.)
 *   token-type        → teal    (i32, String, Vec, Option, etc.)
 *   token-string      → green   (quoted strings, raw strings, char/byte literals)
 *   token-comment      → gray    (//, ///, //!, and block comments)
 *   token-number      → orange  (integers, floats, hex, octal, binary, suffixed)
 *   token-method      → pink    (identifier immediately followed by '(')
 *   token-macro       → violet  (identifier immediately followed by '!', e.g. println!)
 *   token-lifetime    → cyan    ('a, 'static, '_)
 *   token-preprocessor→ purple  (#[derive(...)], #![allow(...)], attributes)
 *   token-class-name  → yellow  (PascalCase identifiers — structs, enums, traits)
 *   token-operator    → red     (::, ->, =>, .., ..=, &&, ||, etc.)
 */

// --- Rust strict + reserved keywords ---
const KEYWORDS = new Set([
  'as', 'async', 'await', 'break',
  'const', 'continue', 'crate',
  'dyn',
  'else', 'enum', 'extern',
  'false', 'fn', 'for',
  'if', 'impl', 'in',
  'let', 'loop',
  'match', 'mod', 'move', 'mut',
  'pub',
  'ref', 'return',
  'self', 'Self', 'static', 'struct', 'super',
  'trait', 'true', 'type',
  'union', 'unsafe', 'use',
  'where', 'while',
  // reserved for future use — still keywords in the grammar
  'abstract', 'become', 'box', 'do', 'final',
  'macro', 'override', 'priv', 'try', 'typeof', 'unsized', 'virtual', 'yield',
]);

// --- Rust built-in / common std types ---
const TYPES = new Set([
  // Primitives
  'i8', 'i16', 'i32', 'i64', 'i128', 'isize',
  'u8', 'u16', 'u32', 'u64', 'u128', 'usize',
  'f32', 'f64', 'bool', 'char', 'str',
  // Common std types
  'String', 'Vec', 'Option', 'Result', 'Box',
  'Rc', 'Arc', 'RefCell', 'Cell', 'Mutex', 'RwLock',
  'HashMap', 'HashSet', 'BTreeMap', 'BTreeSet', 'VecDeque', 'BinaryHeap',
  'Cow', 'PhantomData', 'Weak',
  'Ordering', 'Duration', 'Instant',
  'Path', 'PathBuf', 'OsString', 'OsStr',
]);

// --- Numeric suffixes Rust allows directly on literals ---
const NUMERIC_SUFFIXES = new Set([
  'i8', 'i16', 'i32', 'i64', 'i128', 'isize',
  'u8', 'u16', 'u32', 'u64', 'u128', 'usize',
  'f32', 'f64',
]);

// --- Multi-character operators (longest match first within each length) ---
const MULTI_OP_REGEX = /^(\.\.=|\.\.|::|->|=>|<<=|>>=|&&|\|\||==|!=|<=|>=|\+=|-=|\*=|\/=|%=|&=|\|=|\^=|<<|>>)/;
const SINGLE_OP_REGEX = /^[+\-*/%&|^!<>=?@]/;

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Consumes a "..."-style body starting right after the opening delimiter,
// honoring backslash escapes. Returns the index right after the closing quote
// (or line length, if unterminated — this tokenizer is line-scoped).
function consumeEscapedBody(line, start, quoteChar, len) {
  let end = start;
  while (end < len) {
    if (line[end] === '\\') { end += 2; continue; }
    if (line[end] === quoteChar) { end++; break; }
    end++;
  }
  return end;
}

// Consumes a raw string body: r#*"..."#* (or br#*"..."#*).
// `bodyStart` points just after the opening quote; `hashCount` is how many
// '#' preceded that quote, which must be matched on close.
function consumeRawStringBody(line, bodyStart, hashCount, len) {
  let j = bodyStart;
  while (j < len) {
    if (line[j] === '"') {
      let k = 1;
      while (k <= hashCount && line[j + k] === '#') k++;
      if (k === hashCount + 1) return j + 1 + hashCount;
    }
    j++;
  }
  return len;
}

export function tokenize(line) {
  let result = '';
  let i = 0;
  const len = line.length;

  while (i < len) {
    const rest = line.slice(i);

    // ── Block comment /* ... */ ──
    if (line[i] === '/' && line[i + 1] === '*') {
      let end = i + 2;
      while (end < len - 1 && !(line[end] === '*' && line[end + 1] === '/')) end++;
      end = Math.min(end + 2, len);
      result += `<span class="token-comment">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Line comment //, doc comments ///, //! ──
    if (line[i] === '/' && line[i + 1] === '/') {
      result += `<span class="token-comment">${escapeHtml(line.slice(i))}</span>`;
      break;
    }

    // ── Attribute: #[...] or inner attribute #![...] ──
    if (line[i] === '#' && (i === 0 || /\s/.test(line[i - 1]))) {
      let j = i + 1;
      if (line[j] === '!') j++;
      if (line[j] === '[') {
        let depth = 0;
        let end = j;
        do {
          if (line[end] === '[') depth++;
          else if (line[end] === ']') depth--;
          end++;
        } while (end < len && depth > 0);
        result += `<span class="token-preprocessor">${escapeHtml(line.slice(i, end))}</span>`;
        i = end;
        continue;
      }
      // Stray '#' (e.g. inside a macro body) — just emit it as punctuation.
      result += escapeHtml(line[i]);
      i++;
      continue;
    }

    // ── Raw byte string br"..."  /  br#"..."#  ──
    {
      const m = rest.match(/^br(#*)"/);
      if (m) {
        const hashCount = m[1].length;
        const bodyStart = i + 3 + hashCount; // 'b' + 'r' + hashes + opening quote
        const end = consumeRawStringBody(line, bodyStart, hashCount, len);
        result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
        i = end;
        continue;
      }
    }

    // ── Raw string r"..."  /  r#"..."#  ──
    {
      const m = rest.match(/^r(#*)"/);
      if (m && (i === 0 || !/\w/.test(line[i - 1]))) {
        const hashCount = m[1].length;
        const bodyStart = i + 2 + hashCount; // 'r' + hashes + opening quote
        const end = consumeRawStringBody(line, bodyStart, hashCount, len);
        result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
        i = end;
        continue;
      }
    }

    // ── Byte string b"..." ──
    if (line[i] === 'b' && line[i + 1] === '"' && (i === 0 || !/\w/.test(line[i - 1]))) {
      const end = consumeEscapedBody(line, i + 2, '"', len);
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Byte char literal b'x' ──
    if (line[i] === 'b' && line[i + 1] === "'" && (i === 0 || !/\w/.test(line[i - 1]))) {
      const end = consumeEscapedBody(line, i + 2, "'", len);
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── String literal "..." ──
    if (line[i] === '"') {
      const end = consumeEscapedBody(line, i + 1, '"', len);
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Char literal 'x' / '\n' / '\u{...}'  vs. lifetime 'a / 'static / '_ ──
    if (line[i] === "'") {
      // Escaped char literal: '\n', '\t', '\\', '\'', '\0', '\xNN', '\u{...}'
      if (line[i + 1] === '\\') {
        let j = i + 2;
        if (line[j] === 'u' && line[j + 1] === '{') {
          j += 2;
          while (j < len && line[j] !== '}') j++;
          if (line[j] === '}') j++;
        } else if (line[j] === 'x') {
          j += 3; // \xNN
        } else {
          j += 1; // simple 2-char escape (already past the backslash)
        }
        if (line[j] === "'") {
          const end = j + 1;
          result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
          i = end;
          continue;
        }
      }
      // Plain single-char literal: 'x', ' ', '+'
      if (line[i + 1] !== undefined && line[i + 2] === "'") {
        const end = i + 3;
        result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
        i = end;
        continue;
      }
      // Otherwise: a lifetime — 'a, 'static, '_
      if (/[a-zA-Z_]/.test(line[i + 1])) {
        let end = i + 1;
        while (end < len && /\w/.test(line[end])) end++;
        result += `<span class="token-lifetime">${escapeHtml(line.slice(i, end))}</span>`;
        i = end;
        continue;
      }
      // Lone/malformed apostrophe — just emit it.
      result += escapeHtml(line[i]);
      i++;
      continue;
    }

    // ── Number literal (int, float, hex, octal, binary, underscores, suffixes) ──
    if (/[0-9]/.test(line[i]) && (i === 0 || !/\w/.test(line[i - 1]))) {
      let end = i;
      if (line[i] === '0' && (line[i + 1] === 'x' || line[i + 1] === 'X')) {
        end += 2;
        while (end < len && /[0-9a-fA-F_]/.test(line[end])) end++;
      } else if (line[i] === '0' && (line[i + 1] === 'o' || line[i + 1] === 'O')) {
        end += 2;
        while (end < len && /[0-7_]/.test(line[end])) end++;
      } else if (line[i] === '0' && (line[i + 1] === 'b' || line[i + 1] === 'B')) {
        end += 2;
        while (end < len && /[01_]/.test(line[end])) end++;
      } else {
        while (end < len && /[0-9_]/.test(line[end])) end++;
        // Only claim a '.' as a decimal point if a digit follows — otherwise
        // it's a range operator (0..10, 0..=10) or a method call on a
        // number literal (5.to_string()), neither of which belong here.
        if (line[end] === '.' && /[0-9]/.test(line[end + 1] || '')) {
          end++;
          while (end < len && /[0-9_]/.test(line[end])) end++;
        }
        // Exponent: e/E followed by an optional sign and digits.
        if (
          (line[end] === 'e' || line[end] === 'E') &&
          /[0-9+-]/.test(line[end + 1] || '')
        ) {
          end++;
          if (line[end] === '+' || line[end] === '-') end++;
          while (end < len && /[0-9_]/.test(line[end])) end++;
        }
      }
      // Consume a known numeric suffix (i32, u8, usize, f64, ...) if present.
      let sufEnd = end;
      while (sufEnd < len && /[a-zA-Z0-9]/.test(line[sufEnd])) sufEnd++;
      if (NUMERIC_SUFFIXES.has(line.slice(end, sufEnd))) end = sufEnd;

      result += `<span class="token-number">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Word: keyword / type / macro / method / class-name / identifier ──
    if (/[a-zA-Z_]/.test(line[i])) {
      let end = i;
      while (end < len && /\w/.test(line[end])) end++;
      const word = line.slice(i, end);

      // Macro invocation: identifier directly followed by '!' (but not '!=').
      if (line[end] === '!' && line[end + 1] !== '=') {
        const macroEnd = end + 1;
        result += `<span class="token-macro">${escapeHtml(line.slice(i, macroEnd))}</span>`;
        i = macroEnd;
        continue;
      }

      // Peek past whitespace to detect a function/method call.
      let j = end;
      while (j < len && line[j] === ' ') j++;
      const isCall = line[j] === '(';

      let cls = '';
      if (KEYWORDS.has(word)) cls = 'token-keyword';
      else if (TYPES.has(word)) cls = 'token-type';
      else if (isCall) cls = 'token-method';
      else if (/^[A-Z]/.test(word)) cls = 'token-class-name';

      result += cls
        ? `<span class="${cls}">${escapeHtml(word)}</span>`
        : escapeHtml(word);

      i = end;
      continue;
    }

    // ── Multi-char operators: ::, ->, =>, .., ..=, &&, ||, etc. ──
    {
      const match = rest.match(MULTI_OP_REGEX);
      if (match) {
        result += `<span class="token-operator">${escapeHtml(match[0])}</span>`;
        i += match[0].length;
        continue;
      }
    }

    // ── Single-char operators: + - * / % & | ^ ! < > = ? @ ──
    if (SINGLE_OP_REGEX.test(line[i])) {
      result += `<span class="token-operator">${escapeHtml(line[i])}</span>`;
      i++;
      continue;
    }

    // ── Everything else (punctuation, braces, semicolons, whitespace) ──
    result += escapeHtml(line[i]);
    i++;
  }

  return result;
}
