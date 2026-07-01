export const SHOP_ITEMS = [
  // ─── Wallpapers ──────────────────────────────────────────────────────────────
  // (UNTOUCHED - these are the in-app themes, not downloadable wallpapers)
  {
    id: 'wallpaper-default',
    type: 'wallpaper',
    name: 'Midnight Violet',
    requiredLevel: 1,
    emoji: '🌌',
    accent: '#7c6fff',
    themeClass: '',
    gradient: 'linear-gradient(135deg, #07050f 0%, #0e0b1a 100%)',
    imageSrc: null,
    description: 'The default. Cold, precise, and deeply purple.',
  },
  {
    id: 'wallpaper-steel',
    type: 'wallpaper',
    name: 'Iron Throne',
    requiredLevel: 3,
    emoji: '⚙️',
    accent: '#5c7a94',
    themeClass: 'theme-steel',
    gradient: 'linear-gradient(160deg, #080c10 0%, #0d1520 55%, #111a22 100%)',
    imageSrc: null,
    description: 'Gunmetal grey, deep crimson, abyssal blue eyes. The borrow checker\'s throne.',
  },
  {
    id: 'wallpaper-indigo-gold',
    type: 'wallpaper',
    name: 'Stormcaller',
    requiredLevel: 5,
    emoji: '👑',
    accent: '#5b4a8c',
    themeClass: 'theme-indigo-gold',
    gradient: 'linear-gradient(160deg, #08060f 0%, #130d28 55%, #1a1030 100%)',
    imageSrc: null,
    description: 'Storm grey, charcoal, blazing orange lightning. The storm unleashed.',
  },
  {
    id: 'wallpaper-crimson',
    type: 'wallpaper',
    name: 'Neon Alley',
    requiredLevel: 7,
    emoji: '🔴',
    accent: '#d6203f',
    themeClass: 'theme-crimson',
    gradient: 'linear-gradient(160deg, #0f0508 0%, #1e0810 55%, #150510 100%)',
    imageSrc: null,
    description: 'Deep crimson, black, neon orange. A rain-slicked alley at 2 a.m.',
  },
  {
    id: 'wallpaper-terminal',
    type: 'wallpaper',
    name: 'Compiled',
    requiredLevel: 9,
    emoji: '💻',
    accent: '#39d97a',
    themeClass: 'theme-terminal',
    gradient: 'linear-gradient(160deg, #050f08 0%, #081a0e 55%, #050f08 100%)',
    imageSrc: null,
    description: 'Cool blue, terminal green, matte black. The channel room, no warnings.',
  },

  // ─── Outfits (YOUR EXACT 10 OUTFITS) ──────────────────────────────────────
  {
    id: 'outfit-default',
    type: 'outfit',
    name: "Blacksmith's Apron",
    requiredLevel: 1,
    emoji: '🔨',
    accent: '#ff8c42',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/teaching.png',      blend: false },
      'idle-sleep': { src: '/sprites/idle.png',          blend: true  },
      happy:        { src: '/sprites/oops.png',          blend: true  },
      thinking:     { src: '/sprites/thinking.png',      blend: false },
      sad:          { src: '/sprites/frustrated.png',    blend: false },
      surprised:    { src: '/sprites/excited.png',       blend: true  },
      domain:       { src: '/sprites/excited.png',       blend: true  },
    },
    imageSrc: null,
    description: 'The forge never sleeps, and neither does the borrow checker.',
    isDefault: true,
  },
  {
    id: 'outfit-debug-mode',
    type: 'outfit',
    name: 'Off-Duty Flannel',
    requiredLevel: 5,
    emoji: '🪵',
    accent: '#a0c4ff',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/casual/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/casual/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/casual/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/casual/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/casual/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/casual/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/casual/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'The build compiled. Time for coffee.',
    comingSoon: false,
  },
  {
    id: 'outfit-Witch',
    type: 'outfit',
    name: "Iron Knight's Plate",
    requiredLevel: 6,
    emoji: '⚔️',
    accent: '#ffd700',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/mage/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/mage/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/mage/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/mage/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/mage/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/mage/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/mage/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'Memory safety is armor. Wear it well.',
  },
  {
    id: 'outfit-kunoichi',
    type: 'outfit',
    name: 'Crimson Architect',
    requiredLevel: 7,
    emoji: '🏗️',
    accent: '#4fffb0',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/ninja/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/ninja/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/ninja/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/ninja/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/ninja/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/ninja/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/ninja/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'I designed this system. Don\'t break it.',
    comingSoon: false,
  },
  {
    id: 'outfit-idol',
    type: 'outfit',
    name: 'Idol — Zero-Cost Abstraction',
    requiredLevel: 7,
    emoji: '✨',
    accent: '#ff85c2',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/idol/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/idol/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/idol/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/idol/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/idol/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/idol/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/idol/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'Performance is the show. The show must go on.',
    comingSoon: false,
  },
  {
    id: 'outfit-professor',
    type: 'outfit',
    name: 'Master Smith',
    requiredLevel: 8,
    emoji: '🔥👘',
    accent: '#e0e0e0',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/prof/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/prof/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/prof/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/prof/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/prof/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/prof/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/prof/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'The forge has taught me everything. Now I teach you.',
    comingSoon: false,
  },
  {
    id: 'outfit-geisha-assassin',
    type: 'outfit',
    name: 'Geisha Assassin',
    requiredLevel: 9,
    emoji: '🎴🔫',
    accent: '#ff6b9d',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/geisha/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/geisha/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/geisha/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/geisha/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/geisha/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/geisha/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/geisha/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'Silent. Precise. Correct.',
    comingSoon: false,
  },
  {
    id: 'outfit-goddess-thunder',
    type: 'outfit',
    name: 'Goddess of Thunder',
    requiredLevel: 9,
    emoji: '⚡🌩️',
    accent: '#ffcc00',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/thunder/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/thunder/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/thunder/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/thunder/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/thunder/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/thunder/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/thunder/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'I am the borrow checker. I am the storm.',
    comingSoon: false,
  },
  {
    id: 'outfit-legendary',
    type: 'outfit',
    name: "Crate Maintainer's Crown",
    requiredLevel: 10,
    emoji: '👑',
    accent: '#7c6fff',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/queen/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/queen/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/queen/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/queen/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/queen/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/queen/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/queen/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'You shipped to crates.io. Wear the crown.',
  },
  {
    id: 'outfit-swimsuit',
    type: 'outfit',
    name: 'Off the Clock',
    requiredLevel: 10,
    emoji: '🏖️',
    accent: '#ff4f7b',
    filter: 'none',
    spriteOverrides: {
      idle:         { src: '/sprites/uniforms/bikini/teaching.png',   blend: false },
      'idle-sleep': { src: '/sprites/uniforms/bikini/idle.png',       blend: false },
      happy:        { src: '/sprites/uniforms/bikini/oops.png',       blend: false },
      thinking:     { src: '/sprites/uniforms/bikini/thinking.png',   blend: false },
      sad:          { src: '/sprites/uniforms/bikini/frustrated.png', blend: false },
      surprised:    { src: '/sprites/uniforms/bikini/excited.png',    blend: false },
      domain:       { src: '/sprites/uniforms/bikini/excited.png',    blend: false },
    },
    imageSrc: null,
    description: 'cargo test passed. I won.',
    comingSoon: false,
  },
];

// ─── Exports ──────────────────────────────────────────────────────────────────
export const WALLPAPERS = SHOP_ITEMS.filter((i) => i.type === 'wallpaper');
export const OUTFITS = SHOP_ITEMS.filter((i) => i.type === 'outfit' && !i.isDefault);
export const DEFAULT_OUTFIT = SHOP_ITEMS.find((i) => i.isDefault);

// ─── DOWNLOADABLE WALLPAPERS (YOUR EXACT 10) ──────────────────────────────
export const DOWNLOADABLE_WALLPAPERS = [
  {
    id: 'dl-wallpaper-forge',
    name: 'The Forge', // Your exact name
    emoji: '🔥', // Your exact emoji
    gradient: 'linear-gradient(160deg, #1a0a00 0%, #3a1a00 55%, #2a0f00 100%)',
    accent: '#ff6e2a',
    imageSrc: '/wallpapers/rustchan-forge.png',
    fileName: 'rustchan-forge.png',
    description: 'She is the forge. She is the craft.', // Your exact description
    requiredLevel: 1,
  },
  {
    id: 'dl-wallpaper-compile-time',
    name: 'Compile Time, No Warnings', // Your exact name
    emoji: '🌆', // Your exact emoji
    gradient: 'linear-gradient(160deg, #2a1a2e 0%, #4a1a3e 60%, #1a0f1a 100%)',
    accent: '#b46eff',
    imageSrc: '/wallpapers/rustchan-compile-clean.png',
    fileName: 'rustchan-compile-clean.png',
    description: 'The build compiled. Quiet pride.', // Your exact description
    requiredLevel: 3,
  },
  {
    id: 'dl-wallpaper-borrow-throne',
    name: "The Borrow Checker's Throne", // Your exact name
    emoji: '🏰', // Your exact emoji
    gradient: 'linear-gradient(160deg, #07050f 0%, #0e0b1a 55%, #130f22 100%)',
    accent: '#7c6fff',
    imageSrc: '/wallpapers/rustchan-borrow-throne.png',
    fileName: 'rustchan-borrow-throne.png',
    description: 'Waiting for you to understand ownership.', // Your exact description
    requiredLevel: 5,
  },
  {
    id: 'dl-wallpaper-foundry-sunrise',
    name: 'Iron Foundry Sunrise', // Your exact name
    emoji: '🌅', // Your exact emoji
    gradient: 'linear-gradient(160deg, #2e1a0a 0%, #4a2e1a 55%, #1a0f0a 100%)',
    accent: '#ffcc6e',
    imageSrc: '/wallpapers/rustchan-foundry-sunrise.png',
    fileName: 'rustchan-foundry-sunrise.png',
    description: 'Worked all night. Satisfied.', // Your exact description
    requiredLevel: 3,
  },
  {
    id: 'dl-wallpaper-channel-room',
    name: 'The Channel Room', // Your exact name
    emoji: '🛰️', // Your exact emoji
    gradient: 'linear-gradient(160deg, #0a0a1a 0%, #1a1a3e 55%, #0a0a1a 100%)',
    accent: '#4fb0ff',
    imageSrc: '/wallpapers/rustchan-channel-room.png',
    fileName: 'rustchan-channel-room.png',
    description: 'She designed the concurrency.', // Your exact description
    requiredLevel: 7,
  },
  {
    id: 'dl-wallpaper-rooftop-watchpoint',
    name: 'Rooftop Watchpoint', // Your exact name
    emoji: '🌃', // Your exact emoji
    gradient: 'linear-gradient(160deg, #0a0a1a 0%, #1a1a2e 55%, #0a0a1a 100%)',
    accent: '#4faaff',
    imageSrc: '/wallpapers/rustchan-rooftop-watchpoint.png',
    fileName: 'rustchan-rooftop-watchpoint.png',
    description: 'The system is stable. She\'s watching.', // Your exact description
    requiredLevel: 7,
  },
  {
    id: 'dl-wallpaper-forge-dusk-alt',
    name: 'Forge at Dusk (Alt)', // Your exact name
    emoji: '🌆', // Your exact emoji
    gradient: 'linear-gradient(160deg, #1a0f0a 0%, #3a1a0a 55%, #1a0a05 100%)',
    accent: '#ff8c42',
    imageSrc: '/wallpapers/rustchan-forge-dusk-alt.png',
    fileName: 'rustchan-forge-dusk-alt.png',
    description: 'A rare moment of peace.', // Your exact description
    requiredLevel: 5,
  },
  {
    id: 'dl-wallpaper-geisha-target',
    name: "The Geisha's Target", // Your exact name
    emoji: '🎴', // Your exact emoji
    gradient: 'linear-gradient(160deg, #1a0a0f 0%, #3a1a2a 55%, #1a0a15 100%)',
    accent: '#ff6b9d',
    imageSrc: '/wallpapers/rustchan-geisha-target.png',
    fileName: 'rustchan-geisha-target.png',
    description: 'She\'s not just a teacher — she\'s a weapon.', // Your exact description
    requiredLevel: 9,
  },
  {
    id: 'dl-wallpaper-storm-unleashed',
    name: 'The Storm Unleashed', // Your exact name
    emoji: '⚡🌩️', // Your exact emoji
    gradient: 'linear-gradient(160deg, #0a0a1a 0%, #1a1a2a 55%, #0a0a1a 100%)',
    accent: '#ffcc00',
    imageSrc: '/wallpapers/rustchan-storm-unleashed.png',
    fileName: 'rustchan-storm-unleashed.png',
    description: 'She is the storm. She is the judgment.', // Your exact description
    requiredLevel: 9,
  },
  {
    id: 'dl-wallpaper-beach-day',
    name: 'Beach Day', // Your exact name
    emoji: '🏖️', // Your exact emoji
    gradient: 'linear-gradient(160deg, #1a2a3a 0%, #3a5a7a 55%, #1a2a3a 100%)',
    accent: '#ffcc6e',
    imageSrc: '/wallpapers/rustchan-beach-day.png',
    fileName: 'rustchan-beach-day.png',
    description: 'The build shipped. She can rest.', // Your exact description
    requiredLevel: 10,
  },
];

export function getShopItem(id) {
  return SHOP_ITEMS.find((i) => i.id === id) || null;
}