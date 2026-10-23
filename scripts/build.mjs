// Builds data/games.json and README.md from the two source lists in sources/.
// Run with: node scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
const ANGLE = /<(https?:\/\/[^>\s]+)>/;

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export const CATEGORIES = [
  { id: "shooters", name: "FPS & Shooters", blurb: "Doom-likes, Quake, Half-Life and everything that goes bang.", color: "#ff3d5a" },
  { id: "action", name: "Action & Platformers", blurb: "Jump, dash, punch and rage your way across the browser.", color: "#ff9f1c" },
  { id: "adventure", name: "Adventure & Story", blurb: "Point-and-click classics, visual novels and narrative trips.", color: "#2ec4b6" },
  { id: "rpg", name: "RPG & Roguelikes", blurb: "Stats, dungeons, loot tables and one more run.", color: "#9b5de5" },
  { id: "strategy", name: "Strategy & Tycoon", blurb: "RTS, 4X, city builders and tower defence.", color: "#00bbf9" },
  { id: "racing", name: "Racing & Sports", blurb: "Pedal to the metal, or to the goal.", color: "#fee440" },
  { id: "arcade", name: "Puzzle & Arcade", blurb: "Pinball, shmups, puzzlers and rhythm games.", color: "#f15bb5" },
  { id: "horror", name: "Horror & Mystery", blurb: "Lights off. Volume up. Good luck.", color: "#9ef01a" },
  { id: "sandbox", name: "Sandbox & Sim", blurb: "Build, farm, fly and break things.", color: "#4cc9f0" },
  { id: "indie", name: "Indie & Experimental", blurb: "Small, weird and wonderful.", color: "#ff70a6" },
  { id: "tools", name: "Engines, Emulators & Tools", blurb: "The machinery behind the ports. Not games, but useful.", color: "#94a3b8" },
  { id: "libraries", name: "Game Libraries & Portals", blurb: "Archives and creator pages where whole collections play.", color: "#c3f584" },
];

// Genre lists use human-readable titles; they are normalised with normKey().
const GENRES = {
  shooters: [
    "GoldenEye 007 (GoldenWeb64)",
    "Halo: Combat Evolved Mobile",
    "OpenTyrian",
    "Tyrian (OpenTyrian)",
    "Superflight",
    "S.T.A.L.K.E.R.: Call of Pripyat (ZoneVM)",
    "Raptor - Call of the Shadows",
    "OpenFodder",
    "Doom", "Doom 3", "Doom 3 Demo", "Doom Engine", "DOOM I & II", "Doom Multiplayer", "Brutal Doom", "NBlood",
    "Duke Nukem 3D", "Duke Nukem 3D TG", "Duke Nukem II", "Duke Caribbean: Life's a Beach", "Duke It Out in D.C.",
    "Duke: Nuclear Winter", "Redneck Rampage", "Redneck Rampage: Rides Again", "Redneck Rampage: Route 66", "Blood",
    "Shadow Warrior", "Shadow Warrior: Twin Dragon", "Shadow Warrior: Wanton Destruction", "Quake", "Quake 2", "Quake 3",
    "Quake II", "Quake III Arena", "Quake TG", "QuakeWorld", "NetQuake.io", "Hexen II", "HERETIC / HEXEN",
    "Rise of the Triad", "Wolfenstein 3D", "Wolfenstein 3D TG", "Return to Castle Wolfenstein", "Half Life", "Half Life 2",
    "Half Life: Opposing Force", "Half-Life and Counter-Strike 1.6 (WebXash)", "Counter Strike & Half Life",
    "Counter Strike 1.6", "Counter Strike 2019", "Counter-Strike (GStrike)", "Counter-Strike: Source Bunnyhop",
    "Counter-Strike: Source Surf", "Team Fortress 2", "Halo: Combat Evolved", "No One Lives Forever",
    "Star Wars Jedi Knight Dark Forces 2", "Star Wars Jedi Knight: Dark Forces II", "Star Wars Jedi Knight: Jedi Academy",
    "Perfect Dark", "Urban Terror", "Tremulous", "Unreal Gold", "Unreal Tournament (SurrealEngine Web)", "Ravenfield",
    "Mini DayZ", "Powerslave", "Descent", "Descent I", "ULTRAKILL", "ULTRAKILL Prelude", "Starfighter", "Defblade",
    "Command & Conquer: Renegade (Open Commando)", "Call of Duty Web Collection", "Call of Duty: Black Ops Zombies",
    "Call of Duty: Modern Warfare 2", "Call of Mini: Dino Hunter (Revival)", "Claude of Duty: Vibe Slops II",
    "Moon (Zombies)", "Kino der Toten", "Nacht der Untoten", "KisakCOD", "WW2 GI: Platoon Leader", "WWII GI",
    "NAM / Napalm", "Witchaven", "Witchaven II", "Silent Space Marine", "WadCMD", "Chasm: The Rift", "C-Dogs SDL",
    "Q3JS", "WebXash", "Dwasm", "wasm-doom", "Cloudflare doom-wasm", "Freedoom", "Doom Engine",
  ],
  action: [
    "Grand Theft Auto 2",
    "Grand Theft Auto III",
    "Grand Theft Auto III Online",
    "Grand Theft Auto: Chinatown Wars",
    "Grand Theft Auto: Vice City",
    "GTA 3",
    "GTA V",
    "GTA Vice City",
    "Hotline Miami",
    "Cyberpunk 2077",
    "Commander Keen",
    "Pizza Tower 1.1.0",
    "Apotheon",
    "Arco",
    "Liquidator 3D",
    "Rabbids Go Home",
    "Trees Hate You",
    "Happy Wheels",
    "Untitled Goose Game",
    "Untitled Goose Game (2)",
    "Kill the Ice Age Baby Adventure 2",
    "Milkman Karlson",
    "Genital Jousting",
    "BLOODMONEY!",
    "Abuse", "Anton Blast Demo", "Antonblast", "Bat to Bed Demo", "Bat to the Heavens", "Bubble Bobble", "Battle City",
    "Bombermaaan", "Brawlhalla", "Castle Crashers", "Cave Story", "Celeste", "Celeste 3D", "Celeste 64", "Clustertruck",
    "Cuphead", "Cruelty Squad", "Crazy Cattle 3D", "Fez", "Flashback", "Gang Beasts", "Gorilla Tag", "Getting Over It",
    "Getting Over It with Bennett Foddy", "Geometry Dash", "Hollow Knight", "Hollow Knight: Silksong",
    "I Wanna Be The Guy", "Jazz Jackrabbit", "Jazz Jackrabbit 2", "Jump 'n Bump", "Jumbo Mario", "Karlson", "Karlson 2D",
    "Klifur", "Kirby ~ Soft & Wet", "Limbo", "Lugaru", "Mega Mario", "MiniSlug", "Super Mario 64", "Super Mario 64 FPS",
    "Super Mario 64 Multiplayer", "Super Mario Bros. Remastered", "Super Mario Galaxy", "Super Mario Sunshine",
    "Super Mario War", "Super Mario Zombies", "New Super Mario Bros. Wii", "Pikmin", "Pizza Tower", "Pizza Tower: Scoutdigo",
    "PizzaTower April2021 WebPort", "PT Scoutdigo", "Scoutdingo", "Pepsiman", "Prince of Persia", "Rain World",
    "Ratchet & Clank", "Rockbot", "Sonic CD", "Sonic Mania", "Sonic Robo Blast 2", "Sonic the Hedgehog (2013)",
    "Sonic the Hedgehog 2", "Sonic the Hedgehog 4: Episode I", "Sonic GDevelop", "Sonic2 Community Cut WebPort",
    "sonic3air webport", "SonicManiaPlusWebPort", "Sonic the Fighters", "Spelunky Classic HD", "Super Bo Noise",
    "Super Choppy Orc", "Super Monkey Ball", "Super Smash Bros. (smash.fun)", "SuperTux", "Suicide Guy Deluxe",
    "Sugary Spire", "sm64plus webport PoC", "Tekken 5: Dark Resurrection (Recomp)", "Tomb Raider", "Touhou Mother",
    "Virtua Fighter", "Virtual On: Cyber Troopers", "VVVVVV", "xrick", "Dragon Ball Z: Budokai Tenkaichi 3",
    "Paint the Town Red", "God of War II / Gran Turismo 4 (PS2 Web Recomp)",
    "God of War: Chains of Olympus / Ghost of Sparta (PSP Web Recomp)", "Phineas and Ferb in the Transport-inators of Doooom",
    "Medabots AX", "Dungeon Rush", "Subway Surfers: Las Vegas", "Cat Goes Fishing", "Crash Bash Online", "Lethal Ape",
    "Peaks of Yore", "Cheesed Up 1.3.1", "Biolab Disaster", "Feed the Pit", "Atomiks", "Bloboats",
    "Azimuth", "Prototype", "PEAK (VERY wip)", "A Difficult Game About Climbing",
    "Overburden",
  ],
  adventure: [
    "Arthur's Nightmare",
    "LEGOLAND",
    "Beneath a Steel Sky", "Beneath a Steel Sky (ScummWeb)", "Day of the Tentacle", "The Secret of Monkey Island",
    "Drascula: The Vampire Strikes Back (ScummWeb)", "Flight of the Amazon Queen (ScummWeb)", "Broken Sword: Shadow of the Templars",
    "The Legend of Zelda - A Link to the Past", "The Legend of Zelda: Twilight Princess (Dusklight)",
    "Zelda II: The Adventure of Link (z2rs)", "Heart of Darkness", "Toonstruck", "LEGO Island", "Undertale",
    "Undertale Yellow", "Doki Doki Literature Club", "Doki Doki Literature Club Plus!", "Yume Nikki", "Deltarune",
    "Deltatraveler", "Deltarune Chapters 1-4", "Gabriel's Awesome Schoolhouse", "Gabriel's Awesome Schoolhouse (GASH)",
    "Atlantis: The Lost Tales", "Amanda The Adventurer", "Star Fox Adventures", "Little Big Adventure 2",
    "Tsukihime (TsukiWeb)", "Minecraft Story Mode", "William Shatner's TekWar", "Oneshot (Legacy)",
    "Oneshot: World Machine Edition", "Oneshot", "Class of '09", "Class of '09: The Flip Side", "Class of '09: The Re-Up",
    "Night in the Woods", "Schoolboy Runaway", "Saihate Station (さいはて駅)", "The Seven Games of the Soul", "Witch's Heart",
    "Harry Potter and the Chamber of Secrets", "Sunky's Schoolhouse", "Look Outside", "Fundamental Paper Novel",
    "Chasing Tails ~A Promise in the Snow~", "OMORI", "The Message From Deep Space",
  ],
  rpg: [
    "Albion",
    "Angband", "Brogue", "Daggerfall (DaggerfallJS)", "The Elder Scrolls III: Morrowind (OpenMW)", "Fallout", "Fallout 2",
    "Fallout: Nevada / Sonora", "Legend of Legaia", "Golden Sun", "Kingdom Hearts: Chain of Memories (RepliCoM)",
    "The Legend of Sword and Fairy (SDLPAL)", "Pokémon Emerald (pokeemerald-wasm)",
    "Pokémon Mystery Dungeon (Web Mystery Dungeon)", "Haxima", "Silkroad Online (OpenSRO)",
    "Phantasy Star Online (PSO Reborn)", "Phantasy Star Online Episode I & II (PSO Reborn)", "RuneScape Classic",
    "Slay the Spire", "Inscryption", "One Potion Please!", "Diablo", "Diablo (diablo_web)", "Dawnfolk",
    "Space Rangers: Quests", "Angry Birds Epic v3.0.1", "Balatro", "The Binding of Isaac: Repentance",
    "Ultima Underworld: The Stygian Abyss", "Betrayal at Krondor", "Veloren", "Brotato",
    "Weltendämmerung (weltendaemmerung (spec-driven RE + web port))",
  ],
  strategy: [
    "Faster Than Light: Demo",
    "Master of Defence",
    "Command & Conquer", "Command & Conquer: Generals (wasm.com.br)", "Command & Conquer: Generals Zero Hour",
    "Command & Conquer: Red Alert 2", "Warcraft II (Wargus)", "Warcraft II: Tides of Darkness",
    "Warcraft III: Reign of Chaos / The Frozen Throne (wc3-wasm)", "Homeworld", "Heroes of Might and magic 3 for Web",
    "Heroes of Might and Magic II", "Heroes of Might and Magic II (fheroes2, rgc.zone)",
    "Free Heroes of Might and Magic II (web)", "Hedgewars (WebWars)", "Perimeter", "XCOM", "Freeciv (Freeciv-web)",
    "Master of Orion", "Syndicate", "RollerCoaster Tycoon 2 (OpenRCT2)", "SimCity (micropolisJS)", "Mindustry", "Rimworld", "Simutrans",
    "Jagged Alliance 2", "Dungeon Keeper", "Plague Inc", "Plague Inc.", "Plague Inc: Evolved",
    "Plants vs Zombies: Fusion", "Plants vs Zombies: GOTY Edition", "Plants vs. Zombies", "Freeserf", "Caesar II",
    "Caesar III", "Cultures: 8th Wonder of the World / Northland (cultures-saga-wasm)", "Ballerburg SDL",
    "Dictators:No Peace Countryballs", "Der Clou!", "Bowerwhelm", "Ages of Conflict", "Dewdrop Dynasty", "60 Seconds!",
    "OpenTTD", "OpenTTD (OpenTTD Online)", "Endless Sky", "Battle for Wesnoth", "OpenRA", "Dune II", "DUNE II TG",
    "Dune II: The Building of a Dynasty", "Meteor 60 Seconds", "Dictators",
  ],
  racing: [
    "Hard Truck / Hard Truck 2 (Дальнобойщики 1 и 2)",
    "The Simpsons: Hit & Run",
    "The Simpsons: Hit & Run (rgc.zone)",
    "Daytona USA", "Crash Team Racing (High Octane)", "Crash Team Racing Turbocharged", "Cro-Mag Rally",
    "Need for Speed: Most Wanted (2005) (dezm0n web port)", "Need for Speed: Most Wanted (2005) (NFSMW Online web)",
    "Need for Speed: Underground 2", "Gran Turismo 2", "Hill Climb Racing", "Jelly Drift", "Fatal Racing", "Traffic Racer",
    "Road Rash (Three.js)", "SM Kart ZX", "Mario Kart Wii (WebCompiled)", "Sonic Robo Blast 2 Kart", "SRB2 Kart",
    "Speed Stars", "Samogonki (Moonshine Racers)", "Stunts (PlayStunts)", "WipEout", "LEGO Racers",
    "Diddy Kong Racing (Golden Balloon)", "Carmageddon", "Skate 3", "Skate × Rust (Global Terror)", "Crashout Crew",
    "NHL '94", "MVP Baseball 2005", "Backyard Baseball '97", "FIFA Street 2", "Pro Evolution Soccer 2011",
    "Pro Evolution Soccer 6", "NCAA Football 10 (PSP Recomp)", "Hot Shots Tennis (OpenTennis)", "Open Golf",
    "Duck Life 8", "Duck Life Adventure", "Duck Life Adventure (2)", "Blobby Volley 2", "SimGolf", "Cheese Rolling",
    "Cheese Rollers", "Marble Blast Gold & Marble Blast Platinum", "SuperTuxKart",
  ],
  arcade: [
    "Portal",
    "Neverball",
    "Just Shapes & Beats",
    "WASM Arcade",
    "Gilbert and the doors",
    "Your Only Move is Hustle",
    "Violetland",
    "3D Pinball for Windows - Space Cadet", "Space Cadet", "SDL-Ball", "SDL Sopwith", "LBreakoutHD", "Chromium B.S.U.",
    "Bumpy's Arcade Fantasy", "Candy Crisis", "Catchaware", "Click to Ten", "Cuyo", "Cut the Rope (H5DX)",
    "Cut the Rope DX", "Dice a Million", "Gambonanza", "Gamble with Your Friends", "Helltaker", "Helltaker (2)",
    "Keep Talking and Nobody Explodes", "Luigi's Picture Poker", "Magic Sushi", "Meowdoku!", "Minesweeper Plus",
    "Mindwave", "Nubby's Number Factory", "Numpty Physics", "Pacman", "Rocks'n'Diamonds", "Running Fred", "Shiromino",
    "Sokoban", "SNAPTIC", "Supaplex", "T Cubed", "t³ (T cubed)", "Taiko no Tatsujin", "TriZon", "Torus Trooper",
    "Vectoroids", "XGalaga", "Beat Banger", "Beatblock", "A Dance of Fire and Ice", "Patrick's Parabox",
    "The Math Is Leaking", "While True: learn()", "Dumb Ways to Die", "Bad Piggies", "Angry Birds 2", "Block Blast",
    "Freegemas", "Freegish", "Cheese Cube", "Egg Fried Rice", "Empty Clip",
    "Wizards in Shorts", "Power Hover", "Ultrapool", "Gravity Circuit", "Plunder & Pillage",
    "Trombone Champ", "Powermanga",
  ],
  horror: [
    "Granny",
    "Granny 2",
    "Granny 3",
    "Resident Evil Outbreak File #1 & #2 (Outbreak Web)",
    "MiSide",
    "MiSide (2)",
    "-3", "-b", "Baldi Balds The Universe", "Baldi's Basics Birthday Bash", "Baldi's Basics Classic Remastered",
    "Baldi's Basics Plus", "Baldi's Basics: Minus 3", "Bendy and The Ink Machine", "Bendy and the Ink Machine: ALL CHAPTERS",
    "Bendy and The Ink Machine (2)", "A Bite at Freddy's", "Buckshot Roulette", "Christmas Massacre", "Dead Plate",
    "Deadseat", "The Deadseat", "Endoparasitic", "Endoparasitic 2", "Fear & Hunger", "Fear and Hunger",
    "Fear & Hunger 2: Termina", "Fear and Hunger 2: Termina", "Fears To Fathom", "Fears to Fathom: Home Alone",
    "Five Nights at Candy's", "Five Nights at Candy's 1", "Five Nights at Candy's 2", "Five Nights at Epstein's",
    "Five Nighs at Epstein's", "Five Nights at Freddy's", "Five Nights at Freddy's 1", "Five Nights at Freddy's 2",
    "Five Nights at Freddy's 3", "Five Nights at Freddy's 4", "Five Nights at Freddy's 4: Halloween",
    "Five Nights at Freddy's 4: Halloween Edition", "Five Nights at Freddy's World: Refreshed",
    "Five Nights at Freddy's: Pizza Simulator", "Five Nights at Freddy's: Pizzeria Simulator",
    "Five Nights at Freddy's: Sister Location", "Five Nights at Freddy's: Ultimate Custom Night",
    "Five Nights at Freddy's: World", "Five Nights at Frickbear's 3", "Five Nights at Last Breath",
    "Five Nights in Anime 3D", "FNAF", "FNAF: Blood & Gears (Demo)", "Iron Lung", "Kindergarten", "Kindergarten 1 & 2",
    "Kindergarten 2", "Kindergarten 3", "Lethal Company", "Lobotomy Corporation", "Midnight Shift", "Night of the Consumers",
    "Silent Hill: Origins", "Slender: The 8 Pages", "Slender: The Eight Pages", "Slenderina The Cellar", "Slendytubbies",
    "Slendytubbies 1", "Slendytubbies 2", "Slendytubbies 2D", "SCP: Containment Breach", "Tattletail",
    "That's Not My Neighbor", "There's a Butcher Around", "The Man From the Window", "The Man From the Window 2",
    "The Man In The Window", "Raldi's Crackhouse", "Yandere Simulator", "Do NOT Take This Cat Home", "Shift at Midnight",
    "SONIC.EXE", "Sonic.EXE (ORIGINAL)",
  ],
  sandbox: [
    "Animal Crossing",
    "Animal Crossing (GAMECUBE)",
    "Andy's Apple Farm",
    "Minecraft 0.6.1", "Minecraft 1.8.8 (EaglercraftX)", "Minecraft 4k", "Minecraft LCE", "Minecraft Pocket Edition",
    "Eaglercraft", "Terraria", "Terraria (2)", "Stardew Valley", "Slime Rancher", "Slime Ranchers", "Slime Ranchers (2)",
    "Kerbal Space Program", "Digital Logic Simulator", "Dude Simulator", "Dude Simulator 2", "Spaceflight Simulator",
    "Very Realistic Game Dev Simulator", "Potion Craft: Alchemist Simulator", "Youtubers Life OMG!", "Dressing Room",
    "How to Fish", "Webfishing", "People Playground", "People Playground (2)", "Worldbox",
    "Totally Accurate Battle Simulator", "Totally Accurate Battle Simulator (2)", "Totally Accurate Battle Simulator (TABS)",
    "Rec Room", "RAFT", "Project Zomboid", "Createrria", "Muddy Heights", "Luanti (Minetest)", "Muck (WIP)", "Feed & Grow Fish",
    
  ],
  indie: [],
};

// Special-cased entries that are not games at all. Keys are normKey() outputs.
const SPECIAL = {
  // engines, emulators and launchers
  "ioquake3": "tools", "xash3d fwgs": "tools", "xash3d": "tools", "alephweb": "tools", "aleph one": "tools",
  "chocolate doom": "tools", "devilutionx": "tools", "openjk": "tools", "openmw": "tools", "scummvm": "tools",
  "js dos": "tools", "v86": "tools", "copy sh v86": "tools", "ruffle": "tools", "cheerpj": "tools",
  "emulatorjs": "tools", "retroarch web player": "tools", "webretro": "tools", "webяcade": "tools",
  "emscripten": "tools", "godot web export": "tools", "unity webgl": "tools", "unreal html5 community": "tools",
  "playcanvas": "tools", "proxified ports": "tools", "pt html launcher": "tools", "ptweblauncher": "tools",
  "doom engine": "tools", "xash3d": "tools",
  // archives, portals and creator pages
  "dos zone": "libraries", "classicreload": "libraries", "playclassic games": "libraries",
  "internet archive ms dos": "libraries", "emupedia emuos": "libraries", "flashpoint archive": "libraries",
  "scummweb": "libraries", "scummvm freeware games": "libraries", "bog aukak": "libraries",
  "breadbb genizy": "libraries", "gays dot studio": "libraries", "gmh code": "libraries", "koi flixel": "libraries",
  "webport ing": "libraries", "wasm rip": "libraries", "ultimate catalog": "libraries",
};

// Alternative names that should land in the same game group.
const ALIASES = {
  "fear and hunger": "fear hunger",
  "fear and hunger 2 termina": "fear hunger 2 termina",
  "five nighs at epsteins": "five nights at epsteins",
  "fnaf": "five nights at freddys",
  "five nights at freddys 1": "five nights at freddys",
  "five nights at candys 1": "five nights at candys",
  "morrowind": "elder scrolls iii morrowind",
  "warcraft ii tides of darkness": "warcraft ii",
  "dune ii building of a dynasty": "dune ii",
  "freeciv web": "freeciv",
  "transport tycoon": "openttd",
  "cloudflare doom wasm": "doom",
  "wasm doom": "doom",
  "dwasm": "doom",
  "freedoom": "doom",
  "half life and counter strike 1 6": "counter strike 1 6",
  "kirby soft and wet": "kirby soft wet",
};

// Used when a game has no genre entry: the section it was listed under in the Awesome list.
const SECTION_FALLBACK = {
  "FPS Games": "shooters",
  "Adventure Games": "adventure",
  "RPGs": "rpg",
  "RTS / Strategy": "strategy",
  "Action / Platformers": "action",
  "DOS Game Libraries": "libraries",
  "Windows Game Libraries": "libraries",
  "Console & Arcade Libraries": "tools",
  "Emulators": "tools",
  "Source Ports": "tools",
  "Game Engines": "tools",
  "Flash & Java Preservation": "tools",
  "Open Source Games": "indie",
  "Native Browser Ports": "indie",
};

const AWESOME_HEADERS = new Set(["Game", "Engine", "Library", "Project", "Category", "Game / Project", "Icon", "⭐"]);
const REPO = /^https?:\/\/(www\.)?(github\.com|gitlab\.com|gitea\.com|codeberg\.org)\//i;

const SKIP_SECTIONS = new Set([
  "Contents", "Recommended Starting Points", "Related Awesome Lists", "Coming Soon", "Contributing", "License",
  "Disclaimer", "Legend",
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function normKey(title) {
  const key = title
    .replace(/\(.*?\)/g, " ")
    .replace(/⭐/g, "")
    .replace(/['’`]/g, "")
    .toLowerCase()
    .replace(/^the\s+/, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
  return ALIASES[key] ?? key;
}

function cleanTitle(title) {
  return title.replace(/⭐/g, "").replace(/\s+/g, " ").trim();
}

function normUrl(url) {
  return url.toLowerCase().replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "");
}

function firstLinks(cell) {
  const links = [...cell.matchAll(LINK)].map((m) => ({ label: m[1], url: m[2] }));
  return links;
}

// ---------------------------------------------------------------------------
// Parsing
// ---------------------------------------------------------------------------

export function parseUltimate(md) {
  const items = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ") || line.startsWith("| Game ") || line.startsWith("| ---")) continue;
    const cells = line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
    if (cells.length !== 3) continue;
    const [name, play, source] = cells;
    const playLink = firstLinks(play)[0];
    const sourceLink = firstLinks(source)[0];
    items.push({
      origin: "ultimate",
      section: null,
      title: cleanTitle(name),
      featured: name.includes("⭐"),
      play: playLink?.url ?? null,
      source: sourceLink?.url ?? null,
    });
  }
  return items;
}

export function parseAwesome(md) {
  const items = [];
  let section = null;
  for (const line of md.split("\n")) {
    if (line.startsWith("## ")) {
      section = line.slice(3).replace(/📚/g, "").trim();
      continue;
    }
    if (!section || SKIP_SECTIONS.has(section) || line.startsWith("### ")) continue;

    if (line.startsWith("- [") && line.includes("](")) {
      const m = line.match(/^- \[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/);
      if (m) items.push({ origin: "awesome", section, title: m[1], play: null, source: null, url: m[2], featured: false });
      continue;
    }
    if (!line.startsWith("|") || /^\|[\s:-]+\|/.test(line)) continue;

    const cells = line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
    if (cells.length < 2 || AWESOME_HEADERS.has(cells[0])) continue;

    // Category rows such as "| **DOS** | [js-dos](...) · [DOSBox](...) |"
    if (cells[0].startsWith("**")) {
      for (const link of firstLinks(cells.slice(1).join(" | "))) {
        items.push({ origin: "awesome", section, title: link.label, play: null, source: null, url: link.url, featured: false });
      }
      continue;
    }
    // Game rows put the name in column one and the link in column one or later; the
    // Link column may hold a bare <url> instead of a markdown link.
    const rest = cells.slice(1).join(" | ");
    const link = firstLinks(cells[0])[0] ?? firstLinks(rest)[0];
    const angle = `${cells[0]} ${rest}`.match(ANGLE);
    const url = link?.url ?? angle?.[1];
    if (!url || url.startsWith("#")) continue;
    const title = cells[0].replace(LINK, "$1").replace(/\*/g, "").trim();
    items.push({ origin: "awesome", section, title, play: null, source: null, url, featured: false });
  }
  return items;
}

// ---------------------------------------------------------------------------
// Grouping
// ---------------------------------------------------------------------------

function genreLookup() {
  const map = new Map();
  for (const [category, titles] of Object.entries(GENRES)) {
    for (const t of titles) map.set(normKey(t), category);
  }
  return map;
}

export function build(ultimateMd, awesomeMd) {
  const items = [...parseUltimate(ultimateMd), ...parseAwesome(awesomeMd)];
  const genres = genreLookup();

  // Union-find: items that share a normalised title or an exact URL are the same game.
  const parent = items.map((_, i) => i);
  const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const union = (a, b) => {
    parent[find(a)] = find(b);
  };
  const byKey = new Map();
  const byUrl = new Map();
  items.forEach((item, i) => {
    const key = normKey(item.title);
    item.key = key;
    if (byKey.has(key)) union(i, byKey.get(key));
    else byKey.set(key, i);
    for (const url of [item.play, item.source, item.url].filter(Boolean)) {
      const u = normUrl(url);
      if (byUrl.has(u)) union(i, byUrl.get(u));
      else byUrl.set(u, i);
    }
  });

  const groups = new Map();
  items.forEach((item, i) => {
    const root = find(i);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(item);
  });

  const games = [];
  for (const members of groups.values()) {
    const keyCounts = new Map();
    for (const m of members) keyCounts.set(m.key, (keyCounts.get(m.key) ?? 0) + 1);
    const repKey = [...keyCounts.entries()].sort((a, b) => b[1] - a[1])[0][0];
    const repItem = members
      .filter((m) => m.key === repKey)
      .sort((a, b) => cleanTitle(a.title.replace(/\(.*?\)/g, "")).length - cleanTitle(b.title.replace(/\(.*?\)/g, "")).length)[0];
    const title = cleanTitle(repItem.title.replace(/\s*\(.*?\)\s*$/, "")) || cleanTitle(repItem.title);

    let category = null;
    for (const m of members) {
      category = SPECIAL[m.key] ?? genres.get(m.key) ?? null;
      if (category) break;
    }
    if (!category) {
      const fallback = members.find((m) => SECTION_FALLBACK[m.section]);
      category = fallback ? SECTION_FALLBACK[fallback.section] : "indie";
    }
    // Prefer a specific genre over the catch-all when members disagree.
    if (category === "indie") {
      for (const m of members) {
        const c = genres.get(m.key);
        if (c) {
          category = c;
          break;
        }
      }
    }

    const isSite = category === "tools" || category === "libraries";
    const ports = [];
    const seen = new Set();
    for (const m of members) {
      let play = m.play;
      let source = m.source;
      let site = null;
      if (m.url) {
        if (REPO.test(m.url)) source = m.url;
        else if (isSite) site = m.url;
        else play = m.url;
      }
      const urls = [play, source, site].filter(Boolean).map(normUrl);
      const id = urls.length ? urls.join("|") : `label:${m.title}`;
      if (seen.has(id)) continue;
      seen.add(id);
      ports.push({ label: cleanTitle(m.title), play, source, site, origin: m.origin });
    }
    ports.sort((a, b) => (b.play ? 1 : 0) - (a.play ? 1 : 0) || (b.source ? 1 : 0) - (a.source ? 1 : 0));

    const letterChar = title.charAt(0).toUpperCase();
    games.push({
      title,
      letter: /[A-Z]/.test(letterChar) ? letterChar : "#",
      category,
      featured: members.some((m) => m.featured),
      sources: [...new Set(members.map((m) => m.origin))].sort(),
      playable: ports.some((p) => p.play),
      hasSource: ports.some((p) => p.source),
      ports,
    });
  }

  games.sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }));
  const used = new Set();
  for (const g of games) {
    let id = g.title.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "") || "game";
    let candidate = id;
    for (let n = 2; used.has(candidate); n++) candidate = `${id}-${n}`;
    used.add(candidate);
    g.id = candidate;
  }

  return games;
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

function mdCell(ports, kind) {
  const parts = [];
  for (const p of ports) {
    const label = p.label.replace(/[[\]|]/g, "");
    if (kind === "source" && p.source) parts.push(`[📦 ${label}](${p.source})`);
    if (kind === "play" && p.play) parts.push(`[▶ ${label}](${p.play})`);
    else if (kind === "play" && p.site) parts.push(`[🌐 ${label}](${p.site})`);
  }
  return parts.join("<br>");
}

function readmeFor(games, tailMd) {
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, 0]));
  for (const g of games) counts[g.category]++;
  const playable = games.filter((g) => g.playable).length;
  const withSource = games.filter((g) => g.hasSource).length;

  const out = [];
  out.push(`<div align="center">`, ``, `# 🎮 Ultimate Catalog of Web Game Ports`, ``);
  out.push(`**${games.length} games, organised by genre — playable in the browser, WebAssembly, WebGL, Emscripten, Unity, Godot, Flash/Ruffle and JavaScript ports.**`, ``);
  out.push(`![games](https://img.shields.io/badge/games-${games.length}-8A2BE2?style=for-the-badge) ![playable](https://img.shields.io/badge/playable-${playable}-2ea44f?style=for-the-badge) ![with source](https://img.shields.io/badge/with%20source-${withSource}-1f6feb?style=for-the-badge)`);
  out.push(``, `</div>`, ``);
  out.push(`This list merges [Carter54git's Ultimate Catalog](https://github.com/Carter54git/Ultimate-Catalog-Of-Web-Game-Ports) with the games from [bitburner's Awesome Browser Game Ports](https://github.com/bitburner/Awesome-Browser-Game-Ports). Duplicates are merged into one entry with every known port listed. Engines, emulators and archives are kept in their own sections at the end.`, ``);
  out.push(`## Categories`, ``);
  out.push(`| Category | Games | About |`, `| --- | ---: | --- |`);
  for (const c of CATEGORIES) {
    out.push(`| [${c.name}](#${c.id}) | ${counts[c.id]} | ${c.blurb} |`);
  }
  out.push(``, `| Icon | Meaning |`, `| :---: | --- |`, `| ▶ | Opens a playable build in your browser |`, `| 📦 | Source code repository |`, `| 🌐 | Official website or archive (not a playable build) |`, ``);
  out.push(`Many ports need your own game files. Links point to third-party projects.`, ``);
  out.push(`## Website`, ``);
  out.push(`The same catalog is browsable as a site in [\`docs/\`](docs/). It is static, so serve the folder over HTTP, for example \`python3 -m http.server -d docs 8000\`, then open http://localhost:8000. Run \`node scripts/build.mjs\` after changing the sources to refresh \`docs/data/games.json\`.`, ``);

  for (const c of CATEGORIES) {
    const list = games.filter((g) => g.category === c.id);
    if (!list.length) continue;
    out.push(`<a id="${c.id}"></a>`, ``, `## ${c.name} <sub>· ${list.length}</sub>`, ``, c.blurb, ``);
    out.push(`| Game | Play | Source |`, `| --- | --- | --- |`);
    for (const g of list) {
      const star = g.featured ? "⭐ " : "";
      const play = mdCell(g.ports, "play");
      const source = mdCell(g.ports, "source");
      out.push(`| ${star}${g.title.replace(/\|/g, "\\|")} | ${play} | ${source} |`);
    }
    out.push(``, `<p align="right"><a href="#categories">↑ back to top</a></p>`, ``);
  }

  out.push(tailMd.trimEnd(), ``);
  return out.join("\n");
}

function main() {
  const ultimate = readFileSync(join(ROOT, "sources/ultimate-catalog-readme.md"), "utf8");
  const awesome = readFileSync(join(ROOT, "sources/awesome-browser-game-ports-readme.md"), "utf8");
  const games = build(ultimate, awesome);

  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, 0]));
  for (const g of games) counts[g.category]++;
  const data = {
    generatedFrom: [
      "https://github.com/Carter54git/Ultimate-Catalog-Of-Web-Game-Ports",
      "https://github.com/bitburner/Awesome-Browser-Game-Ports",
    ],
    total: games.length,
    playable: games.filter((g) => g.playable).length,
    categories: CATEGORIES.map((c) => ({ ...c, count: counts[c.id] })),
    games,
  };

  mkdirSync(join(ROOT, "data"), { recursive: true });
  mkdirSync(join(ROOT, "docs/data"), { recursive: true });
  const json = JSON.stringify(data, null, 1) + "\n";
  writeFileSync(join(ROOT, "data/games.json"), json);
  writeFileSync(join(ROOT, "docs/data/games.json"), json);

  const tailStart = ultimate.indexOf("## License");
  const tail = tailStart >= 0 ? ultimate.slice(tailStart) : "";
  writeFileSync(join(ROOT, "README.md"), readmeFor(games, tail));

  console.log(`games: ${games.length}  playable: ${data.playable}`);
  for (const c of CATEGORIES) console.log(`  ${c.id.padEnd(10)} ${counts[c.id]}`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
