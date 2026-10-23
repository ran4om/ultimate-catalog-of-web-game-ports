<div align="center">

# 🎮 Ultimate Catalog of Web Game Ports

**709 games, organised by genre — playable in the browser, WebAssembly, WebGL, Emscripten, Unity, Godot, Flash/Ruffle and JavaScript ports.**

![games](https://img.shields.io/badge/games-709-8A2BE2?style=for-the-badge) ![playable](https://img.shields.io/badge/playable-413-2ea44f?style=for-the-badge) ![with source](https://img.shields.io/badge/with%20source-457-1f6feb?style=for-the-badge)

</div>

This list merges [Carter54git's Ultimate Catalog](https://github.com/Carter54git/Ultimate-Catalog-Of-Web-Game-Ports) with the games from [bitburner's Awesome Browser Game Ports](https://github.com/bitburner/Awesome-Browser-Game-Ports). Duplicates are merged into one entry with every known port listed. Engines, emulators and archives are kept in their own sections at the end.

## Categories

| Category | Games | About |
| --- | ---: | --- |
| [FPS & Shooters](#shooters) | 89 | Doom-likes, Quake, Half-Life and everything that goes bang. |
| [Action & Platformers](#action) | 132 | Jump, dash, punch and rage your way across the browser. |
| [Adventure & Story](#adventure) | 47 | Point-and-click classics, visual novels and narrative trips. |
| [RPG & Roguelikes](#rpg) | 33 | Stats, dungeons, loot tables and one more run. |
| [Strategy & Tycoon](#strategy) | 49 | RTS, 4X, city builders and tower defence. |
| [Racing & Sports](#racing) | 45 | Pedal to the metal, or to the goal. |
| [Puzzle & Arcade](#arcade) | 67 | Pinball, shmups, puzzlers and rhythm games. |
| [Horror & Mystery](#horror) | 72 | Lights off. Volume up. Good luck. |
| [Sandbox & Sim](#sandbox) | 34 | Build, farm, fly and break things. |
| [Indie & Experimental](#indie) | 101 | Small, weird and wonderful. |
| [Engines, Emulators & Tools](#tools) | 26 | The machinery behind the ports. Not games, but useful. |
| [Game Libraries & Portals](#libraries) | 14 | Archives and creator pages where whole collections play. |

| Icon | Meaning |
| :---: | --- |
| ▶ | Opens a playable build in your browser |
| 📦 | Source code repository |
| 🌐 | Official website or archive (not a playable build) |

Many ports need your own game files. Links point to third-party projects.

## Website

The same catalog is browsable as a site in [`docs/`](docs/). It is static, so serve the folder over HTTP, for example `python3 -m http.server -d docs 8000`, then open http://localhost:8000. Run `node scripts/build.mjs` after changing the sources to refresh `docs/data/games.json`.

<a id="shooters"></a>

## FPS & Shooters <sub>· 89</sub>

Doom-likes, Quake, Half-Life and everything that goes bang.

| Game | Play | Source |
| --- | --- | --- |
| Blood | [▶ Blood](https://dos.zone/blood-may-31-1997/) |  |
| Brutal Doom | [▶ Brutal Doom](https://rgc.zone/ports/brutaldoom/index.html) |  |
| C-Dogs SDL |  | [📦 C-Dogs SDL](https://github.com/midzer/cdogs-sdl) |
| Call of Duty Web Collection | [▶ Call of Duty Web Collection](https://cod-webports.pages.dev/) |  |
| Call of Duty: Black Ops Zombies | [▶ Call of Duty: Black Ops Zombies](http://vel.gg/bo1z) |  |
| Call of Duty: Modern Warfare 2 | [▶ Call of Duty: Modern Warfare 2](https://ovz-game-production.up.railway.app) |  |
| Call of Mini: Dino Hunter | [▶ Call of Mini: Dino Hunter (Revival)](https://comdh.krig.games/) |  |
| Chasm: The Rift | [▶ Chasm: The Rift](https://rgc.zone/ports/chasmweb/run.html) |  |
| ⭐ Claude of Duty: Vibe Slops II | [▶ Claude of Duty: Vibe Slops II](https://froydinger.github.io/claude-of-duty/)<br>[▶ Claude of Duty: Vibe Slops II (GoofyAhhBro69420 mirror)](https://goofyahhbro69420.github.io/Black-Ops-2/) | [📦 Claude of Duty: Vibe Slops II](https://github.com/froydinger/claude-of-duty) |
| ⭐ Command & Conquer: Renegade | [▶ Command & Conquer: Renegade (Open Commando)](https://open-commando.netanelgilad.workers.dev) | [📦 Command & Conquer: Renegade (Open Commando)](https://github.com/netanelgilad/open-commando) |
| ⭐ Counter Strike & Half Life | [▶ Counter Strike & Half Life (2)](https://pixelsuft.github.io/hl/) | [📦 Counter Strike & Half Life (2)](https://github.com/Pixelsuft/hl)<br>[📦 Counter Strike & Half Life](https://github.com/yohimik/webxash3d-fwgs)<br>[📦 Counter Strike & Half Life frontend (2)](https://github.com/Pixelsuft/hl) |
| ⭐ Counter Strike 1.6 | [▶ Half-Life and Counter-Strike 1.6 (WebXash)](https://x8bitrain.github.io/webXash/)<br>[▶ Counter Strike 1.6 (2)](https://csjs.live)<br>[▶ WebXash (Half-Life / Counter-Strike)](https://x8bitrain.github.io/webXash/) | [📦 Half-Life and Counter-Strike 1.6 (WebXash)](https://github.com/x8bitrain/webXash)<br>[📦 Counter Strike 1.6](https://github.com/woahhcrackers/Global-Strike) |
| Counter Strike 2019 | [▶ Counter Strike 2019](https://webstrike.me) |  |
| Counter-Strike | [▶ Counter-Strike (GStrike)](https://wasm.rip/files/gstrike/index.html) |  |
| Counter-Strike: Source Bunnyhop | [▶ Counter-Strike: Source Bunnyhop](https://bunnyhop.lol) |  |
| Counter-Strike: Source Surf | [▶ Counter-Strike: Source Surf](http://surfd.net) |  |
| Defblade |  | [📦 Defblade](https://github.com/midzer/paper-world) |
| Descent | [▶ Descent](https://rgc.zone/ports/descentweb/index.html)<br>[▶ Descent (DXX-Rebirth)](https://midzer.de/wasm/descent1/) |  |
| Descent I |  | [📦 Descent I](https://github.com/midzer/dxx-rebirth) |
| ⭐ Doom | [▶ Doom](https://raz0red.github.io/webprboom/)<br>[▶ Freedoom](https://freedoom.github.io/) | [📦 Doom](https://github.com/midzer/chocolate-doom)<br>[📦 Doom (doom-wasm)](https://github.com/cloudflare/doom-wasm)<br>[📦 Doom (doom.wasm)](https://github.com/jacobenget/doom.wasm)<br>[📦 Doom Engine](https://github.com/GMH-Code/Dwasm)<br>[📦 wasm-doom](https://github.com/lazarv/wasm-doom) |
| ⭐ Doom 3 | [▶ Doom 3](https://gn-math.dev/?id=626)<br>[▶ Doom 3 (D3Wasm)](https://recompiledgames.com/doom-3-recompiled) | [📦 Doom 3](https://github.com/web-ports/doom-3) |
| Doom 3 Demo | [▶ Doom 3 Demo](https://wasm.continuation-labs.com/d3demo/) |  |
| DOOM I & II | [▶ DOOM I & II](https://rgc.zone/ports/truedoom/index.html) |  |
| Doom Multiplayer | [▶ Doom Multiplayer](https://silentspacemarine.com/) |  |
| Duke Caribbean: Life's a Beach | [▶ Duke Caribbean: Life's a Beach](https://rgc.zone/ports/8779-duke-vacation/run.html) |  |
| Duke It Out in D.C. | [▶ Duke It Out in D.C.](https://rgc.zone/ports/8780-duke-dc/run.html) |  |
| ⭐ Duke Nukem 3D | [▶ Duke Nukem 3D](https://midzer.de/wasm/duke3d/)<br>[▶ Duke Nukem 3D](https://dos.zone/duke-nukem-3d-1996/) | [📦 Duke Nukem 3D](https://github.com/midzer/BelgianChocolateDuke3D) |
| Duke Nukem 3D TG | [▶ Duke Nukem 3D TG](https://rgc.zone/ports/duke3dtg/index.html) |  |
| Duke Nukem II |  | [📦 Duke Nukem II](https://github.com/lethal-guitar/RigelEngine) |
| Duke: Nuclear Winter | [▶ Duke: Nuclear Winter](https://rgc.zone/ports/8781-duke-nwinter/run.html) |  |
| GoldenEye 007 | [▶ GoldenEye 007 (GoldenWeb64)](https://goldenweb64.com/) |  |
| Half Life | [▶ Half Life](https://gn-math.dev/?id=262) |  |
| ⭐ Half Life 2 | [▶ Half Life 2](https://hl2.slqnt.dev/)<br>[▶ Half-Life 2](https://hl2.slqnt.dev/) | [📦 Half Life 2](https://github.com/AlexBoops/half-life-2-port) |
| Half Life: Opposing Force | [▶ Half Life: Opposing Force](https://gn-math.dev/?id=693) |  |
| Halo: Combat Evolved | [▶ Halo: Combat Evolved](https://mitchellhynes.com/halo/halo.html)<br>[▶ Halo: Combat Evolved (Combat Lab)](https://mitchellhynes.com/combat-lab/) |  |
| Halo: Combat Evolved Mobile | [▶ Halo: Combat Evolved Mobile](https://hcemobile.com/) |  |
| HERETIC / HEXEN | [▶ HERETIC / HEXEN](https://rgc.zone/ports/heretichex/index.html) |  |
| Hexen II | [▶ Hexen II](https://dos.zone/hexen-2-fteqw/)<br>[▶ Hexen II (Hexenwail)](https://hexenwail.github.io/hexenwail/) |  |
| ⭐ Kino der Toten | [▶ Kino der Toten](http://kino-der-toten.pages.dev)<br>[▶ Kino der Toten (GoofyAhhBro69420 mirror)](https://goofyahhbro69420.github.io/COD-ZOMBIES/)<br>[▶ Kino der Toten (theeagler1234 mirror)](https://theeagler1234-alt.github.io/kino-der-toten/) | [📦 Kino der Toten](https://github.com/GoofyAhhBro69420/COD-ZOMBIES) |
| KisakCOD |  | [📦 KisakCOD](https://github.com/slqntdevss/kisakcod-port) |
| Mini DayZ | [▶ Mini DayZ](https://rgc.zone/ports/minidayz/index.html) |  |
| Moon | [▶ Moon (Black Ops Zombies, vel.gg)](https://vel.gg/bo1z/moon)<br>[▶ Moon (Zombies)](http://moon-zombies.pages.dev) |  |
| Nacht der Untoten | [▶ Nacht der Untoten](https://zombies.bitcoinsapi.com/) |  |
| NAM / Napalm | [▶ NAM / Napalm](https://rgc.zone/ports/namweb/run.html) |  |
| NBlood | [▶ NBlood](https://rgc.zone/ports/nbloodweb/run.html) |  |
| NetQuake.io | [▶ NetQuake.io](https://www.netquake.io/) |  |
| No One Lives Forever | [▶ No One Lives Forever](https://playnolf.com/) |  |
| OpenFodder |  | [📦 OpenFodder](https://github.com/OpenFodder/openfodder) |
| OpenTyrian |  | [📦 OpenTyrian](https://github.com/midzer/opentyrian) |
| Perfect Dark | [▶ Perfect Dark](https://perfectdark.royal-cake-5abc.workers.dev/) |  |
| Powerslave | [▶ Powerslave](https://rgc.zone/ports/8774-powerslave/run.html) |  |
| ⭐ Quake | [▶ Quake](https://qwasm.m-h.org.uk/) | [📦 Quake](https://github.com/GMH-Code/Qwasm) |
| Quake 2 |  | [📦 Quake 2](https://github.com/GMH-Code/Qwasm2) |
| Quake 3 |  | [📦 Quake 3](https://github.com/lrusso/Quake3) |
| Quake II | [▶ Quake II](https://rgc.zone/ports/Q2web/index.html)<br>[▶ Quake II (q2.pieter.com)](http://q2.pieter.com)<br>[▶ Quake II (Quake WASM2)](https://qwasm2.m-h.org.uk/) |  |
| ⭐ Quake III Arena | [▶ Quake III Arena (q3js)](https://q3js.com/)<br>[▶ Quake III Arena](https://gn-math.dev/?id=263)<br>[▶ Quake III Arena (q3.pieter.com)](https://q3.pieter.com)<br>[▶ Q3JS](https://q3js.com/) | [📦 Quake III Arena (q3js)](https://github.com/lklacar/q3js) |
| Quake TG | [▶ Quake TG](https://rgc.zone/ports/quaketg/index.html) |  |
| QuakeWorld | [▶ QuakeWorld](http://q1.pieter.com) |  |
| Raptor - Call of the Shadows |  | [📦 Raptor - Call of the Shadows](https://github.com/midzer/raptor) |
| Ravenfield |  | [📦 Ravenfield](https://github.com/degloved-net/Ravenfield) |
| Redneck Rampage | [▶ Redneck Rampage](https://rgc.zone/ports/redneckrweb/run.html)<br>[▶ Redneck Rampage](https://dos.zone/redneck-rampage-1997/) |  |
| Redneck Rampage: Rides Again | [▶ Redneck Rampage: Rides Again](https://rgc.zone/ports/rrridesagain/run.html) |  |
| Redneck Rampage: Route 66 | [▶ Redneck Rampage: Route 66](https://rgc.zone/ports/rrroute66/run.html) |  |
| Return to Castle Wolfenstein | [▶ Return to Castle Wolfenstein](https://rgc.zone/ports/castlewolf/index.html)<br>[▶ Return to Castle Wolfenstein](https://wwasm.m-h.org.uk/)<br>[▶ Return to Castle Wolfenstein (rtcw.pieter.com)](http://rtcw.pieter.com) |  |
| Rise of the Triad |  | [📦 Rise of the Triad](https://github.com/midzer/rottexpr) |
| ⭐ S.T.A.L.K.E.R.: Call of Pripyat | [▶ S.T.A.L.K.E.R.: Call of Pripyat (ZoneVM)](https://zonevm.btr.pm/) | [📦 S.T.A.L.K.E.R.: Call of Pripyat (ZoneVM)](https://github.com/x8BitRain/zone-vm) |
| ⭐ Shadow Warrior | [▶ Shadow Warrior](https://rgc.zone/ports/8775-swarrior/run.html)<br>[▶ Shadow Warrior](https://dos.zone/shadow-warrior/) | [📦 Shadow Warrior](https://github.com/midzer/jfsw) |
| Shadow Warrior: Twin Dragon | [▶ Shadow Warrior: Twin Dragon](https://rgc.zone/ports/8787-sw-twindragon/run.html) |  |
| Shadow Warrior: Wanton Destruction | [▶ Shadow Warrior: Wanton Destruction](https://rgc.zone/ports/8788-sw-wanton/run.html) |  |
| Star Wars Jedi Knight Dark Forces 2 | [▶ Star Wars Jedi Knight Dark Forces 2](https://rgc.zone/ports/oswjkdf2/index.html) |  |
| Star Wars Jedi Knight: Dark Forces II |  | [📦 Star Wars Jedi Knight: Dark Forces II](https://github.com/shinyquagsire23/OpenJKDF2) |
| Star Wars Jedi Knight: Jedi Academy | [▶ Star Wars Jedi Knight: Jedi Academy](https://jk.q3js.com)<br>[▶ Star Wars Jedi Knight: Jedi Academy (OpenJK, rgc.zone)](https://rgc.zone/ports/openjkspweb/index.html) |  |
| Starfighter |  | [📦 Starfighter](https://github.com/midzer/starfighter) |
| Superflight |  | [📦 Superflight](https://github.com/squidward5/superflight-webport) |
| Team Fortress 2 | [▶ Team Fortress 2](https://tf2.riddy.workers.dev/) |  |
| Tremulous | [▶ Tremulous](https://webnova360.com/play-tremulous/) |  |
| Tyrian | [▶ Tyrian (OpenTyrian)](https://midzer.de/wasm/opentyrian/) |  |
| ULTRAKILL | [▶ ULTRAKILL](https://gn-math.dev/?id=196)<br>[▶ ULTRAKILL](https://monoxide.dev/ultrakill) |  |
| ⭐ Ultrakill Prelude | [▶ Ultrakill Prelude](https://gn-math.github.io/web-port/ultrakill/) | [📦 Ultrakill Prelude](https://github.com/genizy/web-port/tree/main/ultrakill) |
| Unreal Gold |  | [📦 Unreal Gold](https://github.com/National-Porting-Association/unrealgold-emscripten) |
| Unreal Tournament | [▶ Unreal Tournament (SurrealEngine Web)](https://demensdeum.com/demos/SurrealEngine/) |  |
| ⭐ Urban Terror | [▶ Urban Terror](http://ut.pieter.com) | [📦 Urban Terror](https://github.com/FrozenSand/ioq3-for-UrbanTerror-4) |
| WadCMD | [▶ WadCMD](https://wadcmd.com/) |  |
| Witchaven | [▶ Witchaven](https://rgc.zone/ports/8783-witchaven/run.html) |  |
| Witchaven II | [▶ Witchaven II](https://rgc.zone/ports/8784-witchaven2/run.html) |  |
| Wolfenstein 3D | [▶ Wolfenstein 3D](https://dos.zone/wolfenstein-3d-may-05-1992/) | [📦 Wolfenstein 3D](https://github.com/midzer/wolf4sdl) |
| Wolfenstein 3D TG | [▶ Wolfenstein 3D TG](https://rgc.zone/ports/wolf3dtg/index.html) |  |
| WW2 GI: Platoon Leader | [▶ WW2 GI: Platoon Leader](https://rgc.zone/ports/8791-ww2-platoon/run.html) |  |
| WWII GI | [▶ WWII GI](https://rgc.zone/ports/ww2giweb/run.html) |  |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="action"></a>

## Action & Platformers <sub>· 132</sub>

Jump, dash, punch and rage your way across the browser.

| Game | Play | Source |
| --- | --- | --- |
| ⭐ A Difficult Game About Climbing | [▶ A Difficult Game About Climbing](https://gn-math.dev/?id=672) | [📦 A Difficult Game About Climbing](https://github.com/web-ports/adgac) |
| Abuse |  | [📦 Abuse](https://github.com/midzer/abuse) |
| Anton Blast Demo |  | [📦 Anton Blast Demo](https://github.com/burnedpopcorn/Anton-Blast-Demo-Web-Port) |
| ⭐ Antonblast | [▶ Antonblast](https://gn-math.dev/?id=711) | [📦 Antonblast](https://github.com/web-ports/antonblast) |
| Apotheon |  | [📦 Apotheon](https://github.com/degloved-net/Apotheon) |
| Arco |  | [📦 Arco](https://github.com/degloved-net/arco) |
| Atomiks |  | [📦 Atomiks](https://github.com/midzer/atomiks) |
| Azimuth |  | [📦 Azimuth](https://github.com/midzer/azimuth) |
| Bat to Bed Demo |  | [📦 Bat to Bed Demo](https://github.com/gays-studio/BatToBed-DEMO-webport) |
| Bat to the Heavens |  | [📦 Bat to the Heavens](https://github.com/gays-studio/bat-to-the-heavens) |
| ⭐ Battle City | [▶ Battle City](https://battle-city.berrry.app) | [📦 Battle City](https://github.com/vgrichina/battlecity) |
| Biolab Disaster |  | [📦 Biolab Disaster](https://github.com/phoboslab/high_biolab) |
| Bloboats |  | [📦 Bloboats](https://github.com/midzer/bloboats) |
| ⭐ BLOODMONEY! | [▶ BLOODMONEY!](https://gn-math.github.io/web-port/bloodmoney/) | [📦 BLOODMONEY!](https://github.com/genizy/web-port/tree/main/bloodmoney) |
| Bombermaaan |  | [📦 Bombermaaan](https://github.com/midzer/Bombermaaan) |
| Brawlhalla | [▶ Brawlhalla](https://truffled.lol/games/brawlhalla/index.html) |  |
| Bubble Bobble |  | [📦 Bubble Bobble](https://github.com/cookertron/BubbleBobble) |
| Castle Crashers | [▶ Castle Crashers](https://truffled.lol/games/castle/index.html) |  |
| Cat Goes Fishing |  | [📦 Cat Goes Fishing](https://github.com/Reeyuki/CatFish) |
| ⭐ Cave Story | [▶ Cave Story](https://rgc.zone/ports/cavestory/index.html)<br>[▶ Cave Story](https://midzer.de/wasm/cavestory/) | [📦 Cave Story](https://github.com/midzer/nxengine-evo) |
| ⭐ Celeste | [▶ Celeste](https://gn-math.dev/?id=623)<br>[▶ Celeste (2)](https://celeste.r58playz.dev/) | [📦 Celeste](https://github.com/MercuryWorkshop/celeste-wasm)<br>[📦 Celeste (2)](https://github.com/web-ports/celeste) |
| Celeste 3D |  | [📦 Celeste 3D](https://github.com/gays-studio/celeste3d) |
| Celeste 64 |  | [📦 Celeste 64](https://github.com/MercuryWorkshop/Celeste64) |
| Cheesed Up 1.3.1 |  | [📦 Cheesed Up 1.3.1](https://github.com/burnedpopcorn/Cheesed-Up-1.3.1-Web-Port) |
| ⭐ Clustertruck | [▶ Clustertruck](https://wasm.rip/files/ClusterTruck/clustertruck.html) | [📦 Clustertruck](https://github.com/wasmdotrip/Clustertruck-Port) |
| ⭐ Commander Keen | [▶ Commander Keen](https://www.jamesfmackenzie.com/chocolatekeen/) | [📦 Commander Keen](https://github.com/jamesfmackenzie/chocolatekeen) |
| Crash Bash Online | [▶ Crash Bash Online](https://crashbash.app/) |  |
| Crazy Cattle 3D | [▶ Crazy Cattle 3D](https://gn-math.dev/?id=164) |  |
| ⭐ Cruelty Squad | [▶ Cruelty Squad](https://gn-math.dev/?id=825) | [📦 Cruelty Squad](https://github.com/imt00dizzy/cruelty-squad)<br>[📦 Cruelty Squad (2)](https://github.com/web-ports/cruelty-squad) |
| ⭐ Cuphead | [▶ Cuphead](https://gn-math.github.io/web-port/cuphead/) | [📦 Cuphead](https://github.com/genizy/web-port/tree/main/cuphead)<br>[📦 Cuphead (2)](https://github.com/woahhcrackers/CupheadWeb)<br>[📦 Cuphead (3)](https://github.com/web-ports/cuphead) |
| Cyberpunk 2077 | [▶ Cyberpunk 2077](https://cyberpunk2077.lol/) |  |
| Dragon Ball Z: Budokai Tenkaichi 3 | [▶ Dragon Ball Z: Budokai Tenkaichi 3](https://dragonballbt3.online/) |  |
| Dungeon Rush |  | [📦 Dungeon Rush](https://github.com/midzer/DungeonRush) |
| Feed the Pit |  | [📦 Feed the Pit](https://github.com/idkdl/feedthepit-src) |
| ⭐ FEZ | [▶ FEZ](https://wasm.rip/files/FEZ/fez.html) | [📦 FEZ](https://github.com/degloved-net/FEZ) |
| Flashback |  | [📦 Flashback](https://github.com/midzer/reminiscence) |
| Gang Beasts |  | [📦 Gang Beasts](https://github.com/jmhq20120212-cmd/GangBeast-WebPort) |
| Genital Jousting |  | [📦 Genital Jousting](https://github.com/degloved-net/genital-jousting) |
| ⭐ Geometry Dash | [▶ Geometry Dash](https://gn-math.dev/?id=785)<br>[▶ Geometry Dash (Web Dashers)](https://web-dashers.github.io/) | [📦 Geometry Dash](https://github.com/AlexBoops/geometry-dash-webport)<br>[📦 Geometry Dash (Web Dashers)](https://github.com/web-dashers/web-dashers.github.io) |
| ⭐ Getting Over It | [▶ Getting Over It](https://gn-math.github.io/web-port/getting-over-it/) | [📦 Getting Over It](https://github.com/genizy/web-port/tree/main/getting-over-it) |
| Getting Over It with Bennett Foddy | [▶ Getting Over It with Bennett Foddy](https://gn-math.dev/?id=557) |  |
| God of War II / Gran Turismo 4 |  | [📦 God of War II / Gran Turismo 4 (PS2 Web Recomp)](https://github.com/snuri00/ps2-web-recomp) |
| God of War: Chains of Olympus / Ghost of Sparta |  | [📦 God of War: Chains of Olympus / Ghost of Sparta (PSP Web Recomp)](https://github.com/snuri00/psp-web-recomp) |
| ⭐ Gorilla Tag | [▶ Gorilla Tag](https://gn-math.dev/?id=668) | [📦 Gorilla Tag](https://github.com/web-ports/gorilla-tag)<br>[📦 Gorilla Tag (2)](https://github.com/aukak/gorrila-tag) |
| Grand Theft Auto 2 | [▶ Grand Theft Auto 2](https://m1stermo.github.io/gta2/) |  |
| Grand Theft Auto III | [▶ Grand Theft Auto III (wasm.rip)](https://wasm.rip/files/gta3/index.html) |  |
| Grand Theft Auto III Online | [▶ Grand Theft Auto III Online (quenq)](https://iii.quenq.com/) |  |
| ⭐ Grand Theft Auto: Chinatown Wars | [▶ Grand Theft Auto: Chinatown Wars (PPSSPP Web)](https://gta-chinatown-wars.pages.dev/) | [📦 Grand Theft Auto: Chinatown Wars (PPSSPP Web)](https://github.com/root-hunter/ppsspp-web) |
| Grand Theft Auto: Vice City | [▶ Grand Theft Auto: Vice City (quenq)](https://vc.quenq.com/)<br>[▶ Grand Theft Auto: Vice City (revc.wasm.ltd)](https://revc.wasm.ltd/) |  |
| GTA 3 | [▶ GTA 3 (3)](https://wasmarcade.com/gta3) | [📦 GTA 3](https://github.com/larpinguser/HelloWorldScriptBasicFunctionCSharpIsCool/)<br>[📦 GTA 3 (2)](https://github.com/woahhcrackers/GTA3Web) |
| GTA V | [▶ GTA V](https://web.archive.org/web/20261006055917/https://playgta5.com/) |  |
| ⭐ GTA Vice City | [▶ GTA Vice City (2)](https://joncodeofficial.github.io/gta-vice-city-wasm/) | [📦 GTA Vice City (2)](https://github.com/joncodeofficial/gta-vice-city-wasm)<br>[📦 GTA Vice City](https://github.com/Lolendor/reVCDOS) |
| Happy Wheels |  | [📦 Happy Wheels](https://github.com/Nawsif/host/tree/main/HappyWheels) |
| ⭐ Hollow Knight | [▶ Hollow Knight](https://gn-math.dev/?id=468) | [📦 Hollow Knight](https://github.com/aukak/hollow-knight)<br>[📦 Hollow Knight (2)](https://github.com/NOTAHACKER9999/Hollow-Knight-Port) |
| ⭐ Hollow Knight: Silksong | [▶ Hollow Knight: Silksong](https://gn-math.dev/?id=771) | [📦 Hollow Knight: Silksong](https://github.com/web-ports/hollow-knight-silksong)<br>[📦 Hollow Knight: Silksong (2)](https://github.com/webporting/Hollow-Knight-Silksong) |
| ⭐ Hotline Miami | [▶ Hotline Miami](https://gn-math.github.io/web-port/hotline-miami/) | [📦 Hotline Miami](https://github.com/genizy/web-port/tree/main/hotline-miami) |
| I Wanna Be The Guy | [▶ I Wanna Be The Guy](https://gn-math.dev/?id=834) |  |
| Jazz Jackrabbit |  | [📦 Jazz Jackrabbit](https://github.com/midzer/openjazz) |
| Jazz Jackrabbit 2 |  | [📦 Jazz Jackrabbit 2](https://github.com/deathkiller/jazz2-native) |
| Jumbo Mario | [▶ Jumbo Mario](https://gn-math.dev/?id=712) |  |
| Jump 'n Bump |  | [📦 Jump 'n Bump](https://github.com/midzer/jumpnbump) |
| ⭐ Karlson | [▶ Karlson](https://gn-math.github.io/web-port/karlson/) | [📦 Karlson](https://github.com/genizy/web-port/tree/main/karlson)<br>[📦 Karlson (2)](https://github.com/thecheetoman/KarlsonWebPort) |
| Karlson 2D | [▶ Karlson 2D](https://truffled.lol/games/karlson2d/truffledkarlson2d/index.html) |  |
| Kill the Ice Age Baby Adventure 2 |  | [📦 Kill the Ice Age Baby Adventure 2](https://github.com/SomeRandomFella/kill-ice-age-baby-adventure-2-) |
| Kirby ~ Soft & Wet | [▶ Kirby ~ Soft & Wet](https://gn-math.dev/?id=692) | [📦 Kirby ~ Soft and Wet](https://github.com/web-ports/soft-and-wet) |
| Klifur |  | [📦 Klifur](https://github.com/aukak/klifur) |
| ⭐ Lethal Ape | [▶ Lethal Ape](https://gn-math.dev/?id=793) | [📦 Lethal Ape](https://github.com/web-ports/lethal-ape) |
| Limbo | [▶ Limbo](https://truffled.lol/games/limbo/index.html) |  |
| Liquidator 3D | [▶ Liquidator 3D](https://rgc.zone/ports/8778-liquidator/run.html) |  |
| ⭐ Lugaru | [▶ Lugaru](https://loganwalkerdev.github.io/lugaru-web/) | [📦 Lugaru](https://github.com/loganwalkerdev/lugaru-web) |
| Medabots AX | [▶ Medabots AX](https://medabots-ax.meme.ar/) |  |
| Mega Mario |  | [📦 Mega Mario](https://github.com/midzer/megamario) |
| ⭐ Milkman Karlson | [▶ Milkman Karlson](https://gn-math.github.io/web-port/milkman-karlson/) | [📦 Milkman Karlson](https://github.com/genizy/web-port/tree/main/milkman-karlson)<br>[📦 Milkman Karlson (2)](https://github.com/aukak/gameports/tree/main/milkman%20karlson) |
| MiniSlug |  | [📦 MiniSlug](https://github.com/midzer/minislug) |
| New Super Mario Bros. Wii |  | [📦 New Super Mario Bros. Wii](https://github.com/teaserlua/nsmbw-web-port) |
| Overburden | [▶ Overburden](https://gn-math.dev/?id=760) |  |
| Paint the Town Red |  | [📦 Paint the Town Red](https://github.com/Reeyuki/PttrWebport) |
| ⭐ PEAK | [▶ PEAK (VERY wip)](https://wasm.rip/files/peak/PEAK.html) | [📦 PEAK (VERY wip)](https://github.com/wasmdotrip/Peak-Port) |
| ⭐ Peaks of Yore | [▶ Peaks of Yore](https://gn-math.dev/?id=717) | [📦 Peaks of Yore](https://github.com/web-ports/peaks-of-yore) |
| Pepsiman | [▶ Pepsiman](https://pepsiman.ol.mr/) |  |
| Phineas and Ferb in the Transport-inators of Doooom | [▶ Phineas and Ferb in the Transport-inators of Doooom](https://stelight.games/play/webports/stellite.games/stellite/doom/index.html) |  |
| Pikmin | [▶ Pikmin](https://truffled.lol/games/pikmin/index.html) |  |
| ⭐ Pizza Tower | [▶ Pizza Tower](https://gn-math.github.io/web-port/pizza-tower/) | [📦 Pizza Tower](https://github.com/genizy/web-port/tree/main/pizza-tower) |
| Pizza Tower 1.1.0 |  | [📦 Pizza Tower 1.1.0](https://github.com/burnedpopcorn/Pizza-Tower-1.1.0-Web-Port) |
| Pizza Tower: Scoutdigo | [▶ Pizza Tower: Scoutdigo](https://gn-math.dev/?id=628) |  |
| PizzaTower April2021 WebPort |  | [📦 PizzaTower April2021 WebPort](https://github.com/burnedpopcorn/PizzaTower-April2021-WebPort) |
| ⭐ Prince of Persia | [▶ Prince of Persia](https://princejs.com/)<br>[▶ Prince of Persia](https://dos.zone/prince-of-persia-1990/) | [📦 Prince of Persia](https://github.com/midzer/SDLPoP) |
| Prototype |  | [📦 Prototype](https://github.com/midzer/prototype) |
| PT Scoutdigo |  | [📦 PT Scoutdigo](https://github.com/burnedpopcorn/PT-Scoutdigo-Web-Port) |
| Rabbids Go Home |  | [📦 Rabbids Go Home](https://github.com/teaserlua/rabbids-go-home-web-port) |
| Rain World | [▶ Rain World](https://stelight.games/play/webports/stellite.games/stellite/rain-world/) |  |
| ⭐ Ratchet & Clank | [▶ Ratchet & Clank](https://re-rac.github.io/) | [📦 Ratchet & Clank](https://github.com/re-rac/rerac) |
| Rockbot |  | [📦 Rockbot](https://github.com/midzer/rockbot) |
| Scoutdingo |  | [📦 Scoutdingo](https://github.com/web-ports/scoutdingo) |
| sm64plus webport PoC |  | [📦 sm64plus webport PoC](https://github.com/burnedpopcorn/sm64plus-webport-PoC) |
| ⭐ Sonic CD | [▶ Sonic CD](https://gn-math.dev/?id=589)<br>[▶ Sonic CD (Sonic-CD-WASM)](https://tws2401.github.io/Sonic-CD-WASM/) | [📦 Sonic CD](https://github.com/TWS2401/Sonic-CD-WASM) |
| Sonic GDevelop |  | [📦 Sonic GDevelop](https://github.com/burnedpopcorn/Sonic-GDevelop-Web-Port) |
| ⭐ Sonic Mania | [▶ Sonic Mania](https://gn-math.dev/?id=590) | [📦 Sonic Mania](https://github.com/VinMannie/SonicManiaWeb) |
| ⭐ Sonic Robo Blast 2 | [▶ Sonic Robo Blast 2](https://afd2025.srb2.org/) | [📦 Sonic Robo Blast 2](https://github.com/chromaticpipe/SRB2-WASM)<br>[📦 Sonic Robo Blast 2 (2)](https://github.com/web-ports/srb2) |
| Sonic the Fighters | [▶ Sonic the Fighters](https://play.sonicthefighte.rs/) |  |
| ⭐ Sonic the Hedgehog | [▶ Sonic the Hedgehog (2013)](https://vinmannie.github.io/Sonic-1-WASM/) | [📦 Sonic the Hedgehog (2013)](https://github.com/VinMannie/Sonic-1-WASM) |
| Sonic the Hedgehog 2 |  | [📦 Sonic the Hedgehog 2](https://github.com/VinMannie/Sonic-2-WASM) |
| Sonic the Hedgehog 4: Episode I | [▶ Sonic the Hedgehog 4: Episode I](https://wamwoowam.co.uk/sonic4/) |  |
| Sonic2 Community Cut WebPort |  | [📦 Sonic2 Community Cut WebPort](https://github.com/burnedpopcorn/Sonic2-Community-Cut-WebPort) |
| sonic3air webport |  | [📦 sonic3air webport](https://github.com/burnedpopcorn/sonic3air-webport) |
| SonicManiaPlusWebPort |  | [📦 SonicManiaPlusWebPort](https://github.com/burnedpopcorn/SonicManiaPlusWebPort) |
| Spelunky Classic HD | [▶ Spelunky Classic HD](https://yancharkin.itch.io/spelunky-classic-hd) |  |
| Subway Surfers: Las Vegas |  | [📦 Subway Surfers: Las Vegas](https://github.com/Toastiest64/Las-Vegas) |
| Sugary Spire |  | [📦 Sugary Spire](https://github.com/burnedpopcorn/Sugary-Spire-Web-Port) |
| Suicide Guy Deluxe |  | [📦 Suicide Guy Deluxe](https://github.com/Reeyuki/SuicideGuyDeluxe) |
| Super Bo Noise |  | [📦 Super Bo Noise](https://github.com/burnedpopcorn/Super-Bo-Noise-Web-Port) |
| Super Choppy Orc |  | [📦 Super Choppy Orc](https://github.com/gays-studio/super-choppy-orc) |
| Super Mario 64 | [▶ Super Mario 64](https://gn-math.dev/?id=588)<br>[▶ Super Mario 64](https://recompiledgames.com/super-mario-64-recompiled)<br>[▶ Super Mario 64 (multiplayer, olivers.tools)](https://olivers.tools/?play)<br>[▶ Super Mario 64 (rgc.zone)](https://rgc.zone/ports/sm64-main/index.html)<br>[▶ Super Mario 64 (sm3das)](https://heyitsheart.github.io/sm3das/64/) |  |
| Super Mario 64 FPS |  | [📦 Super Mario 64 FPS](https://github.com/gays-studio/sm64fps-port) |
| Super Mario 64 Multiplayer | [▶ Super Mario 64 Multiplayer](https://olivers.tools/play/) |  |
| ⭐ Super Mario Bros. Remastered | [▶ Super Mario Bros. Remastered](https://gn-math.dev/?id=736) | [📦 Super Mario Bros. Remastered](https://github.com/bubbls/ports/blob/main/smb-remastered) |
| Super Mario Galaxy |  | [📦 Super Mario Galaxy](https://github.com/T4ctica1YT/SMGwebport) |
| Super Mario Sunshine | [▶ Super Mario Sunshine](https://truffled.lol/games/sms/index.html) |  |
| Super Mario War |  | [📦 Super Mario War](https://github.com/mmatyas/supermariowar) |
| Super Mario Zombies | [▶ Super Mario Zombies](https://smz.fun/) |  |
| Super Monkey Ball | [▶ Super Monkey Ball](https://monkeyball-online.pages.dev/) |  |
| Super Smash Bros. | [▶ Super Smash Bros. (smash.fun)](https://smash.fun/) |  |
| SuperTux |  | [📦 SuperTux](https://github.com/SuperTux/supertux) |
| Tekken 5: Dark Resurrection | [▶ Tekken 5: Dark Resurrection (Recomp)](https://tkdr-recomp.pages.dev/) |  |
| ⭐ Tomb Raider | [▶ Tomb Raider](http://xproger.info/projects/OpenLara/)<br>[▶ OpenLara](http://xproger.info/projects/OpenLara/) | [📦 Tomb Raider](https://github.com/XProger/OpenLara)<br>[📦 OpenLara](https://github.com/XProger/OpenLara) |
| ⭐ Touhou Mother | [▶ Touhou Mother](https://gn-math.dev/?id=523) | [📦 Touhou Mother](https://github.com/aukak/gameports/tree/main/touhou%20mother) |
| Trees Hate You |  | [📦 Trees Hate You](https://github.com/thirstygithub/fugglelatougin) |
| ⭐ Untitled Goose Game | [▶ Untitled Goose Game](https://gn-math.dev/?id=718) | [📦 Untitled Goose Game](https://github.com/web-ports/untitled-goose-game)<br>[📦 Untitled Goose Game (2)](https://github.com/webporting/Untitled-Goose-Game) |
| ⭐ Virtua Fighter | [▶ Virtua Fighter](https://vf1-recomp.pages.dev/) | [📦 Virtua Fighter](https://github.com/mr-finster/vf1-recomp) |
| Virtual On: Cyber Troopers | [▶ Virtual On: Cyber Troopers](https://solid7s.github.io/Virtual-On-Web/) |  |
| ⭐ VVVVVV | [▶ VVVVVV](https://stelight.games/play/webports/stellite.games/stellite/vvvvvv/) | [📦 VVVVVV](https://github.com/midzer/vvvvvv) |
| xrick | [▶ xrick](https://www.xrick.net/) |  |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="adventure"></a>

## Adventure & Story <sub>· 47</sub>

Point-and-click classics, visual novels and narrative trips.

| Game | Play | Source |
| --- | --- | --- |
| ⭐ Amanda The Adventurer | [▶ Amanda The Adventurer](https://gn-math.github.io/web-port/amanda-the-adventurer/) | [📦 Amanda The Adventurer](https://github.com/genizy/web-port/tree/main/amanda-the-adventurer) |
| Arthur's Nightmare | [▶ Arthur's Nightmare](https://gn-math.dev/?id=645) |  |
| ⭐ Atlantis: The Lost Tales | [▶ Atlantis: The Lost Tales](https://ripleyxlr8.github.io/atlantis-native/) | [📦 Atlantis: The Lost Tales](https://github.com/ripleyXLR8/atlantis-native) |
| Beneath a Steel Sky | [▶ Beneath a Steel Sky (ScummWeb)](https://scummweb.tsilva.eu/beneath-a-steel-sky/play)<br>[▶ Beneath a Steel Sky (freeware)](https://scummweb.tsilva.eu/) |  |
| Broken Sword: Shadow of the Templars | [▶ Broken Sword: Shadow of the Templars](https://playclassic.games/games/point-n-click-adventure-dos-games-online/play-broken-sword-the-shadow-of-the-templars-online/) |  |
| Chasing Tails ~A Promise in the Snow~ |  | [📦 Chasing Tails ~A Promise in the Snow~](https://github.com/gays-studio/chasingtails) |
| ⭐ Class of '09 | [▶ Class of '09](https://gn-math.github.io/web-port/class-of-09/) | [📦 Class of '09](https://github.com/genizy/web-port/tree/main/class-of-09) |
| Class of '09: The Flip Side |  | [📦 Class of '09: The Flip Side](https://github.com/AlexBoops/TFS) |
| Class of '09: The Re-Up |  | [📦 Class of '09: The Re-Up](https://github.com/AlexBoops/tru) |
| Day of the Tentacle | [▶ Day of the Tentacle](https://classicreload.com/day-of-the-tentacle.html) |  |
| ⭐ Deltarune | [▶ Deltarune](https://gn-math.github.io/web-port/deltatraveler/) | [📦 Deltarune](https://github.com/genizy/web-port/tree/main/deltatraveler)<br>[📦 Deltarune](https://github.com/Mollomm1/test) |
| Deltarune Chapters 1-4 | [▶ Deltarune Chapters 1-4](https://aukak.itch.io/deltarune) |  |
| Deltatraveler | [▶ Deltatraveler](https://gn-math.dev/?id=560) |  |
| Doki Doki Literature Club |  | [📦 Doki Doki Literature Club](https://github.com/EmeraldGreenR/EmeraldGreenR.github.io) |
| Doki Doki Literature Club Plus! | [▶ Doki Doki Literature Club Plus!](https://selenite.cc/resources/semag/ddlcplus/index.html) |  |
| Drascula: The Vampire Strikes Back | [▶ Drascula: The Vampire Strikes Back (ScummWeb)](https://scummweb.tsilva.eu/drascula-the-vampire-strikes-back) |  |
| Flight of the Amazon Queen | [▶ Flight of the Amazon Queen (ScummWeb)](https://scummweb.tsilva.eu/#game-flight-of-the-amazon-queen) |  |
| ⭐ Fundamental Paper Novel | [▶ Fundamental Paper Novel](https://gn-math.dev/?id=746) | [📦 Fundamental Paper Novel](https://github.com/bubbls/ports/tree/main/fpn-FULLY_RECRAFTED-web) |
| Gabriel's Awesome Schoolhouse | [▶ Gabriel's Awesome Schoolhouse (GASH)](https://gn-math.dev/?id=784) | [📦 Gabriel's Awesome Schoolhouse](https://github.com/web-ports/gash) |
| Harry Potter and the Chamber of Secrets | [▶ Harry Potter and the Chamber of Secrets](https://hp2.mihaimateias.com/) |  |
| Heart of Darkness |  | [📦 Heart of Darkness](https://github.com/midzer/hode) |
| ⭐ LEGO Island | [▶ LEGO Island](https://isle.pizza/) | [📦 LEGO Island](https://github.com/isledecomp/isle.pizza) |
| LEGOLAND |  | [📦 LEGOLAND (1999)](https://github.com/facundosterzerforino/legoland-port) |
| Little Big Adventure 2 |  | [📦 Little Big Adventure 2](https://github.com/LBALab/lba2remake) |
| ⭐ Look Outside | [▶ Look Outside](https://gn-math.dev/?id=649) | [📦 Look Outside](https://github.com/web-ports/look-outside) |
| Minecraft Story Mode | [▶ Minecraft Story Mode](https://mcsm-web.pages.dev/) |  |
| Night in the Woods |  | [📦 Night in the Woods](https://github.com/reeyuki/NightInTheWoods/) |
| ⭐ OMORI | [▶ OMORI](https://gn-math.github.io/web-port/omori-fixed/) | [📦 OMORI](https://github.com/genizy/web-port/tree/main/omori-fixed) |
| ⭐ Oneshot | [▶ Oneshot (Legacy)](https://gn-math.dev/?id=622) | [📦 Oneshot (Legacy)](https://github.com/67-Factory/oneshotthing) |
| ⭐ Oneshot: World Machine Edition | [▶ Oneshot: World Machine Edition](https://wasm.rip/files/oneshot-wme/index.html) | [📦 Oneshot: World Machine Edition](https://github.com/MercuryWorkshop/webshot) |
| ⭐ Saihate Station | [▶ Saihate Station (さいはて駅)](https://gn-math.dev/?id=737) | [📦 Saihate Station (さいはて駅)](https://github.com/web-ports/saihate-station) |
| ⭐ Schoolboy Runaway | [▶ Schoolboy Runaway](https://gn-math.github.io/web-port/schoolboy-runaway/) | [📦 Schoolboy Runaway](https://github.com/genizy/web-port/tree/main/schoolboy-runaway) |
| Star Fox Adventures | [▶ Star Fox Adventures](https://foxhollow.dev/) |  |
| Sunky's Schoolhouse |  | [📦 Sunky's Schoolhouse](https://github.com/gays-studio/sunkys-schoolhouse-webport) |
| The Legend of Zelda - A Link to the Past |  | [📦 The Legend of Zelda - A Link to the Past](https://github.com/midzer/zelda3) |
| ⭐ The Legend of Zelda: Twilight Princess | [▶ The Legend of Zelda: Twilight Princess (Dusklight)](https://dusklight.pages.dev/) | [📦 The Legend of Zelda: Twilight Princess (Dusklight)](https://github.com/caribbeansc/dusklight) |
| The Message From Deep Space |  | [📦 The Message From Deep Space](https://github.com/dashiellbenton/ports/tree/main/tmfds) |
| The Secret of Monkey Island | [▶ The Secret of Monkey Island](https://dos.zone/the-secret-of-monkey-island/) |  |
| ⭐ The Seven Games of the Soul | [▶ The Seven Games of the Soul](https://omnium-games.github.io/faust/) | [📦 The Seven Games of the Soul](https://github.com/Omnium-Games/faust) |
| Toonstruck | [▶ Toonstruck](https://rgc.zone/ports/toonstruckweb/index.html#toonstruck-fargus) |  |
| Tsukihime | [▶ Tsukihime (TsukiWeb)](https://tsukiweb.holofield.fr/) |  |
| ⭐ Undertale | [▶ Undertale](https://gn-math.github.io/web-port/undertale/) | [📦 Undertale](https://github.com/genizy/web-port/tree/main/undertale) |
| ⭐ Undertale Yellow | [▶ Undertale Yellow](https://gn-math.github.io/web-port/undertale-yellow/) | [📦 Undertale Yellow](https://github.com/genizy/web-port/tree/main/undertale-yellow) |
| William Shatner's TekWar | [▶ William Shatner's TekWar](https://rgc.zone/ports/8777-tekwar/run.html) |  |
| ⭐ Witch's Heart | [▶ Witch's Heart](https://gn-math.github.io/web-port/witch-heart/) | [📦 Witch's Heart](https://github.com/genizy/web-port/tree/main/witch-heart) |
| ⭐ Yume Nikki | [▶ Yume Nikki](https://gn-math.github.io/web-port/yume-nikki/) | [📦 Yume Nikki](https://github.com/genizy/web-port/tree/main/yume-nikki) |
| Zelda II: The Adventure of Link | [▶ Zelda II: The Adventure of Link (z2rs)](https://z2rs.com/) |  |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="rpg"></a>

## RPG & Roguelikes <sub>· 33</sub>

Stats, dungeons, loot tables and one more run.

| Game | Play | Source |
| --- | --- | --- |
| Albion |  | [📦 Albion](https://github.com/IS4Code/Albion) |
| Angband |  | [📦 Angband](https://github.com/angband/angband) |
| Angry Birds Epic v3.0.1 |  | [📦 Angry Birds Epic v3.0.1](https://github.com/DarkTerraYT/EpicWeb) |
| Balatro |  | [📦 Balatro](https://github.com/W0W53R/web-balatro) |
| Betrayal at Krondor | [▶ Betrayal at Krondor](https://playclassic.games/games/role-playing-dos-games-online/) |  |
| Brogue |  | [📦 Brogue](https://github.com/midzer/BrogueCE) |
| ⭐ Brotato | [▶ Brotato](https://gn-math.dev/?id=723)<br>[▶ Brotato (2)](https://wasm.rip/files/bpac/index.html) | [📦 Brotato](https://github.com/BlueGameMC/BrotatoWeb)<br>[📦 Brotato (2)](https://github.com/gays-studio/brotato-webport/)<br>[📦 Brotato (3)](https://github.com/wowdabug/s1/tree/main/brotato)<br>[📦 Brotato (4)](https://github.com/degloved-net/brotato-web) |
| Daggerfall | [▶ Daggerfall (DaggerfallJS)](https://daggerfalljs.dev/) |  |
| Dawnfolk |  | [📦 Dawnfolk](https://github.com/degloved-net/dawnfolk) |
| ⭐ Diablo | [▶ Diablo](https://d07riv.github.io/diabloweb/)<br>[▶ Diablo (diablo_web)](https://johnimril.github.io/diablo_web/)<br>[▶ DiabloWeb](https://d07riv.github.io/diabloweb/) | [📦 Diablo](https://github.com/d07RiV/diabloweb)<br>[📦 Diablo (diablo_web)](https://github.com/johnimril/diablo_web) |
| ⭐ Fallout | [▶ Fallout](https://gn-math.dev/?id=585) | [📦 Fallout](https://github.com/midzer/fallout1-ce) |
| Fallout 2 |  | [📦 Fallout 2](https://github.com/roginvs/fallout2-ce) |
| Fallout: Nevada / Sonora | [▶ Fallout: Nevada / Sonora](https://fallout-nevada.ru/#/en) |  |
| ⭐ Golden Sun | [▶ Golden Sun](https://shmargus.github.io/GSRecomp/) | [📦 Golden Sun](https://github.com/shmargus/GSRecomp) |
| Haxima |  | [📦 Haxima](https://github.com/midzer/nazghul) |
| ⭐ Inscryption | [▶ Inscryption](https://wasm.rip/files/inscryption/index.html) | [📦 Inscryption](https://github.com/Reeyuki/InscryptionWebport) |
| Kingdom Hearts: Chain of Memories | [▶ Kingdom Hearts: Chain of Memories (RepliCoM)](https://replicom.dev/) |  |
| ⭐ Legend of Legaia | [▶ Legend of Legaia](https://andrewaltimit.github.io/legend-of-legaia-re/play.html) | [📦 Legend of Legaia](https://github.com/AndrewAltimit/legend-of-legaia-re) |
| Morrowind | [▶ The Elder Scrolls III: Morrowind (OpenMW)](https://morrowind.virtastic.app/)<br>[▶ Morrowind](https://openmw.org/) |  |
| One Potion Please! |  | [📦 One Potion Please!](https://github.com/ajtabjs/onepotionplease) |
| Phantasy Star Online | [▶ Phantasy Star Online (PSO Reborn)](https://recompiledgames.com/phantasy-star-online-recompiled) |  |
| Phantasy Star Online Episode I & II | [▶ Phantasy Star Online Episode I & II (PSO Reborn)](https://psoreborn.com/) |  |
| Pokémon Emerald |  | [📦 Pokémon Emerald (pokeemerald-wasm)](https://github.com/tripplyons/pokeemerald-wasm) |
| Pokémon Mystery Dungeon | [▶ Pokémon Mystery Dungeon (Web Mystery Dungeon)](https://frequentgamer.itch.io/pmdweb) |  |
| RuneScape Classic | [▶ RuneScape Classic](https://runescapeclassic.gold/) |  |
| Silkroad Online | [▶ Silkroad Online (OpenSRO)](https://opensro.online/) |  |
| Slay the Spire | [▶ Slay the Spire](https://truffled.lol/games/sts/index.html) |  |
| Space Rangers: Quests | [▶ Space Rangers: Quests](https://spacerangers.gitlab.io/) |  |
| ⭐ The Binding of Isaac: Repentance | [▶ The Binding of Isaac: Repentance](https://tboi.online/) | [📦 The Binding of Isaac: Repentance](https://github.com/chiikabu/the-browsing-of-isaac) |
| The Legend of Sword and Fairy |  | [📦 The Legend of Sword and Fairy (SDLPAL)](https://github.com/sdlpal/sdlpal) |
| Ultima Underworld: The Stygian Abyss | [▶ Ultima Underworld: The Stygian Abyss](https://dos.zone/ultima-underworld-the-stygian-abyss-1992/) |  |
| Veloren | [▶ Veloren](https://veloren.net/) |  |
| Weltendämmerung |  | [📦 Weltendämmerung (weltendaemmerung (spec-driven RE + web port))](https://github.com/s-macke/weltendaemmerung) |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="strategy"></a>

## Strategy & Tycoon <sub>· 49</sub>

RTS, 4X, city builders and tower defence.

| Game | Play | Source |
| --- | --- | --- |
| 60 Seconds! |  | [📦 60 Seconds!](https://github.com/usheje883-maker/60-Seconds-Webport) |
| Ages of Conflict | [▶ Ages of Conflict](https://wasm.rip/files/aoc/index.html) |  |
| Ballerburg SDL | [▶ Ballerburg SDL](https://baller.tuxfamily.org/) |  |
| Battle for Wesnoth | [▶ Battle for Wesnoth](https://www.wesnoth.org/) |  |
| Bowerwhelm |  |  |
| C&C / Red Alert / Dune 2000 | [▶ C&C / Red Alert / Dune 2000](https://www.openra.net/) |  |
| Caesar II | [▶ Caesar II](https://second-impressions.github.io/caesar2-port/) |  |
| Caesar III |  | [📦 Caesar III](https://github.com/bvschaik/julius) |
| Command & Conquer |  | [📦 Command & Conquer](https://github.com/midzer/Vanilla-Conquer) |
| Command & Conquer: Generals | [▶ Command & Conquer: Generals (wasm.com.br)](https://generals.wasm.com.br/) |  |
| Command & Conquer: Generals Zero Hour | [▶ Command & Conquer: Generals Zero Hour](https://generals.wasm.ltd) |  |
| Command & Conquer: Red Alert 2 | [▶ Command & Conquer: Red Alert 2](https://chronodivide.com/) |  |
| Cultures: 8th Wonder of the World / Northland |  | [📦 Cultures: 8th Wonder of the World / Northland (cultures-saga-wasm)](https://github.com/cyberneticangel/cultures-saga-wasm) |
| Der Clou! |  | [📦 Der Clou!](https://github.com/midzer/derclou) |
| Dewdrop Dynasty |  | [📦 Dewdrop Dynasty](https://github.com/obsidian-ports/Dewdrop-Dynasty) |
| Dictators:No Peace Countryballs |  | [📦 Dictators:No Peace Countryballs](https://github.com/web-ports/countryballsdictator) |
| ⭐ Dune II | [▶ Dune II](https://dune2js.com/) | [📦 Dune II](https://github.com/midzer/OpenDUNE) |
| DUNE II TG | [▶ DUNE II TG](https://rgc.zone/ports/dune2tg/index.html) |  |
| Dune II: The Building of a Dynasty | [▶ Dune II: The Building of a Dynasty](https://dos.zone/dune-ii-the-building-of-a-dynasty-dec-1992/) |  |
| Dungeon Keeper | [▶ Dungeon Keeper](https://dk-browser.tiiny.site/) |  |
| Endless Sky | [▶ Endless Sky](https://endless-sky.github.io/) |  |
| Faster Than Light: Demo | [▶ Faster Than Light: Demo](https://rgc.zone/ports/ftldemo/index.html) |  |
| Free Heroes of Might and Magic II |  | [📦 Free Heroes of Might and Magic II (web)](https://github.com/Carter54git/fheroes-1.1.17-ported-to-web) |
| Freeciv | [▶ Freeciv (Freeciv-web)](https://webciv.org/webclient/?action=new&type=singleplayer)<br>[▶ Freeciv (Civilization-like)](http://play.freeciv.org/) |  |
| Freeserf |  | [📦 Freeserf](https://github.com/midzer/freeserf) |
| Hedgewars |  | [📦 Hedgewars (WebWars)](https://github.com/apmlabs/webwars) |
| Heroes of Might and magic 3 for Web |  | [📦 Heroes of Might and magic 3 for Web](https://github.com/caiiiycuk/vcmi-wasm) |
| ⭐ Heroes of Might and Magic II | [▶ Heroes of Might and Magic II](https://midzer.de/wasm/heroes2/)<br>[▶ Heroes of Might and Magic II (fheroes2, rgc.zone)](https://rgc.zone/ports/fheroes2weblast/index.html) | [📦 Heroes of Might and Magic II](https://github.com/midzer/fheroes2) |
| ⭐ Homeworld | [▶ Homeworld](https://gardens-of-kadesh.gitlab.io/gardens-of-kadesh/) | [📦 Homeworld](https://github.com/GardensOfKadesh/Homeworld) |
| Jagged Alliance 2 |  | [📦 Jagged Alliance 2](https://github.com/midzer/ja2-stracciatella) |
| Master of Defence | [▶ Master of Defence](https://nomadic-ua.itch.io/master-of-defence) |  |
| Master of Orion |  | [📦 Master of Orion](https://github.com/midzer/1oom) |
| Meteor 60 Seconds |  | [📦 Meteor 60 Seconds](https://github.com/ThatWirdGuy/Meteor-60-Seconds-Web) |
| Mindustry |  | [📦 Mindustry](https://github.com/khoichon/mindustry-web) |
| ⭐ OpenTTD | [▶ OpenTTD](https://openttdonline.com/play/)<br>[▶ Transport Tycoon](https://openttd.org/) | [📦 OpenTTD](https://github.com/OpenTTD/OpenTTD)<br>[📦 OpenTTD (OpenTTD Online)](https://github.com/swords02/openttd-online) |
| Perimeter |  | [📦 Perimeter](https://github.com/KD-lab-Open-Source/Perimeter) |
| Plague Inc | [▶ Plague Inc](https://gn-math.dev/?id=805)<br>[▶ Plague Inc.](https://wasm.rip/files/plauge/index.html) |  |
| Plague Inc: Evolved |  | [📦 Plague Inc: Evolved](https://github.com/Reeyuki/PlagueIncEvolved) |
| Plants vs Zombies: Fusion |  | [📦 Plants vs Zombies: Fusion](https://github.com/gays-studio/pvzfusion) |
| ⭐ Plants vs Zombies: GOTY Edition | [▶ Plants vs Zombies: GOTY Edition](https://gn-math.dev/?id=842) | [📦 Plants vs Zombies: GOTY Edition](https://github.com/wszqkzqk/PvZ-Portable)<br>[📦 Plants vs Zombies: GOTY Edition (2)](https://github.com/web-ports/pvz)<br>[📦 Plants vs Zombies: GOTY Edition (3)](https://github.com/ajtabjs/pvzdeploy) |
| Plants vs. Zombies | [▶ Plants vs. Zombies](https://rgc.zone/ports/pvzweb/index.html) |  |
| ⭐ Rimworld | [▶ Rimworld](https://wasm.rip/files/rimworld/index.html) | [📦 Rimworld](https://github.com/SomeRandomFella/portsandrips/tree/master/rimworld) |
| RollerCoaster Tycoon 2 | [▶ RollerCoaster Tycoon 2 (OpenRCT2)](https://rgc.zone/ports/openrct2/index.html) |  |
| ⭐ SimCity | [▶ SimCity (micropolisJS)](https://www.graememcc.co.uk/micropolisJS/) | [📦 SimCity (micropolisJS)](https://github.com/graememcc/micropolisJS) |
| Simutrans |  | [📦 Simutrans](https://github.com/midzer/simutrans) |
| ⭐ Syndicate | [▶ Syndicate](https://rgc.zone/ports/syndweb/index.html) | [📦 Syndicate](https://github.com/midzer/freesynd) |
| Warcraft II | [▶ Warcraft II (Wargus)](https://rgc.zone/ports/Warcraft2web/index.html)<br>[▶ Warcraft II: Tides of Darkness](https://dos.zone/warcraft-ii-tides-of-darkness/) |  |
| Warcraft III: Reign of Chaos / The Frozen Throne |  | [📦 Warcraft III: Reign of Chaos / The Frozen Throne (wc3-wasm)](https://github.com/rgnv/wc3-wasm) |
| XCOM |  | [📦 XCOM](https://github.com/midzer/OpenXcom) |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="racing"></a>

## Racing & Sports <sub>· 45</sub>

Pedal to the metal, or to the goal.

| Game | Play | Source |
| --- | --- | --- |
| Backyard Baseball '97 |  | [📦 Backyard Baseball '97](https://github.com/degloved-net/backyard-baseball-97) |
| Blobby Volley 2 |  | [📦 Blobby Volley 2](https://github.com/danielknobe/blobbyvolley2) |
| ⭐ Carmageddon | [▶ Carmageddon](https://rgc.zone/ports/carmaweb/index.html) | [📦 Carmageddon](https://github.com/Carter54git/dethrace-ported-to-web) |
| Cheese Rollers |  | [📦 Cheese Rollers](https://github.com/SomeRandomFella/portsandrips/tree/master/CheeseRollingWeb) |
| Cheese Rolling | [▶ Cheese Rolling](https://gn-math.dev/?id=762)<br>[▶ Cheese Rolling](https://wasm.rip/files/cheese-rolling/index.html) |  |
| Crash Team Racing | [▶ Crash Team Racing (High Octane)](https://rinnegatamante.github.io/Crash-Team-Racing-High-Octane/) |  |
| Crash Team Racing Turbocharged | [▶ Crash Team Racing Turbocharged](https://ctr.cmzi.uk/) |  |
| Crashout Crew | [▶ Crashout Crew](https://wasm.rip/files/cc/index.html) |  |
| ⭐ Cro-Mag Rally | [▶ Cro-Mag Rally](https://midzer.de/wasm/cromagrally/) | [📦 Cro-Mag Rally](https://github.com/midzer/CroMagRally) |
| Daytona USA | [▶ Daytona USA](https://johannruiz.github.io/Daytona-USA-Web/) |  |
| Diddy Kong Racing | [▶ Diddy Kong Racing (Golden Balloon)](https://akratch.github.io/golden-balloon/) |  |
| Duck Life 8 | [▶ Duck Life 8](https://gn-math.dev/?id=695) |  |
| Duck Life Adventure |  | [📦 Duck Life Adventure](https://github.com/aukak/duck-life-adventure)<br>[📦 Duck Life Adventure (2)](https://github.com/web-ports/duck-8) |
| Fatal Racing | [▶ Fatal Racing](https://play.fatal.racing/) |  |
| FIFA Street 2 | [▶ FIFA Street 2](https://fifastreet2.fun/) |  |
| Gran Turismo 2 | [▶ Gran Turismo 2](https://ydubr-gt2.surge.sh/) |  |
| Hard Truck / Hard Truck 2 | [▶ Hard Truck / Hard Truck 2 (Дальнобойщики 1 и 2)](https://rgc.zone/ports/hardtruck/index.html) |  |
| Hill Climb Racing |  | [📦 Hill Climb Racing](https://github.com/NotRexed/HillClimbRacingPort) |
| ⭐ Hot Shots Tennis | [▶ Hot Shots Tennis (OpenTennis)](https://opentennis.dev/) | [📦 Hot Shots Tennis (OpenTennis)](https://github.com/FIZL0/opentennis) |
| ⭐ Jelly Drift | [▶ Jelly Drift](https://gn-math.github.io/web-port/jelly-drift/) | [📦 Jelly Drift](https://github.com/genizy/web-port/tree/main/jelly-drift) |
| LEGO Racers | [▶ LEGO Racers](https://steponit.online/) |  |
| Marble Blast Gold & Marble Blast Platinum |  | [📦 Marble Blast Gold & Marble Blast Platinum](https://github.com/Vanilagy/MarbleBlast) |
| Mario Kart Wii |  | [📦 Mario Kart Wii (WebCompiled)](https://github.com/dynamiteswag81/webcompiled) |
| MVP Baseball 2005 |  | [📦 MVP Baseball 2005](https://github.com/ptitty12/mvp2005-decomp) |
| ⭐ NCAA Football 10 | [▶ NCAA Football 10 (PSP Recomp)](https://awest813.github.io/NCAA-10-PSP-Recomp/) | [📦 NCAA Football 10 (PSP Recomp)](https://github.com/awest813/NCAA-10-PSP-Recomp) |
| Need for Speed: Most Wanted | [▶ Need for Speed: Most Wanted (2005) (dezm0n web port)](https://dezm0n.itch.io/nfs-most-wanted-web-port)<br>[▶ Need for Speed: Most Wanted (2005) (NFSMW Online web)](https://web.nfsmwo.com/) |  |
| Need for Speed: Underground 2 | [▶ Need for Speed: Underground 2](https://nfsu2.xyz/) |  |
| NHL '94 | [▶ NHL '94](https://kingof94.web.app/) |  |
| Open Golf |  | [📦 Open Golf](https://github.com/mgerdes/Open-Golf) |
| Pro Evolution Soccer 2011 | [▶ Pro Evolution Soccer 2011](https://pes11.optijuegos.net/) |  |
| Pro Evolution Soccer 6 | [▶ Pro Evolution Soccer 6](http://pes6.optijuegos.net) |  |
| Road Rash | [▶ Road Rash (Three.js)](https://roadrash.pages.dev/) |  |
| Samogonki |  | [📦 Samogonki (Moonshine Racers)](https://github.com/KD-lab-Open-Source/Samogonki) |
| SimGolf | [▶ SimGolf](https://richardatct.github.io/simgolf-web/) |  |
| Skate × Rust | [▶ Skate × Rust (Global Terror)](https://global-terror.net/) |  |
| Skate 3 | [▶ Skate 3](http://skate.aaddpp.lol) |  |
| SM Kart ZX |  | [📦 SM Kart ZX](https://github.com/burnedpopcorn/SM-Kart-ZX-Web-Port) |
| Sonic Robo Blast 2 Kart | [▶ Sonic Robo Blast 2 Kart](https://skyleite.github.io/Kart-Public-WASM/) |  |
| ⭐ Speed Stars | [▶ Speed Stars](https://gn-math.github.io/web-port/speed-stars/) | [📦 Speed Stars](https://github.com/genizy/web-port/tree/main/speed-stars) |
| SRB2 Kart |  | [📦 SRB2 Kart](https://github.com/skyleite/Kart-Public-WASM/) |
| Stunts | [▶ Stunts (PlayStunts)](https://playstunts.com/) |  |
| SuperTuxKart | [▶ SuperTuxKart](https://supertuxkart.net/) |  |
| ⭐ The Simpsons: Hit & Run | [▶ The Simpsons: Hit & Run (Web Port)](https://vheissu.github.io/hit-and-run-web/)<br>[▶ The Simpsons: Hit & Run](http://shar-wasm.cjoseph.workers.dev/?skipmovie)<br>[▶ The Simpsons: Hit & Run (rgc.zone)](https://rgc.zone/ports/simphnr/index.html)<br>[▶ The Simpsons: Hit & Run (shar-wasm)](https://shar-wasm.cjoseph.workers.dev/)<br>[▶ The Simpsons: Hit & Run (with mod support)](https://shar.harshvirdhaliwal.com/) | [📦 The Simpsons: Hit & Run (Web Port)](https://github.com/Vheissu/hit-and-run-web) |
| Traffic Racer |  | [📦 Traffic Racer](https://github.com/genizy/traffic-racer) |
| ⭐ WipEout | [▶ WipEout](https://phoboslab.org/wipegame/) | [📦 WipEout](https://github.com/phoboslab/wipeout-rewrite) |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="arcade"></a>

## Puzzle & Arcade <sub>· 67</sub>

Pinball, shmups, puzzlers and rhythm games.

| Game | Play | Source |
| --- | --- | --- |
| ⭐ 3D Pinball for Windows - Space Cadet | [▶ 3D Pinball for Windows - Space Cadet](https://ksylvestre.itch.io/space-cadet-pinball) | [📦 3D Pinball for Windows - Space Cadet](https://github.com/k4zmu2a/SpaceCadetPinball)<br>[📦 Space Cadet](https://github.com/k4zmu2a/SpaceCadetPinball) |
| A Dance of Fire and Ice |  | [📦 A Dance of Fire and Ice](https://github.com/Nawsif/host/tree/main/ADOFAI) |
| Angry Birds 2 |  | [📦 Angry Birds 2](https://github.com/Reeyuki/angry2) |
| Bad Piggies | [▶ Bad Piggies](https://gn-math.dev/?id=752) |  |
| Beat Banger |  | [📦 Beat Banger](https://github.com/ajtabjs/bbport) |
| Beatblock | [▶ Beatblock](https://gn-math.dev/?id=787)<br>[▶ Beatblock](https://wasm.rip/files/beatblock/index.html) |  |
| Block Blast |  | [📦 Block Blast](https://github.com/SomeRandomFella/portsandrips/tree/master/blockblast-port) |
| Bumpy's Arcade Fantasy | [▶ Bumpy's Arcade Fantasy](https://rgc.zone/ports/bumpyweb/openbumpy.html) |  |
| Candy Crisis |  | [📦 Candy Crisis](https://github.com/midzer/CandyCrisis) |
| Catchaware |  | [📦 Catchaware](https://github.com/barnicalstuff/captchaware) |
| Cheese Cube | [▶ Cheese Cube](http://cheese-cube.pages.dev) |  |
| Chromium B.S.U. |  | [📦 Chromium B.S.U.](https://github.com/midzer/chromium-bsu) |
| Click to Ten |  | [📦 Click to Ten](https://github.com/BestSpark687090/bestspark-web-ports/tree/main/click-to-ten) |
| Cut the Rope | [▶ Cut the Rope (H5DX)](https://yell0wsuit.github.io/cuttherope-h5dx/index.html) |  |
| Cut the Rope DX | [▶ Cut the Rope DX](https://yell0wsuit.github.io/cuttherope-dx/) |  |
| Cuyo |  | [📦 Cuyo](https://github.com/midzer/cuyo) |
| ⭐ Dice a Million | [▶ Dice a Million](https://gn-math.dev/?id=759) | [📦 Dice a Million](https://github.com/NotRexed/Unblocked-Games/tree/main/diceamillion) |
| Dumb Ways to Die |  | [📦 Dumb Ways to Die (v1.6)](https://github.com/web-ports/dumb-ways-to-die) |
| Egg Fried Rice |  |  |
| Empty Clip |  | [📦 Empty Clip](https://github.com/midzer/empty-clip) |
| Freegemas |  | [📦 Freegemas](https://github.com/midzer/freegemas) |
| Freegish |  | [📦 Freegish](https://github.com/midzer/freegish) |
| Gamble with Your Friends |  | [📦 Gamble with Your Friends](https://github.com/Camzzz-vrgt/gamble-with-your-friends-web/tree/main/game) |
| Gambonanza |  | [📦 Gambonanza](https://github.com/AlexBoops/Gambonanza-Port) |
| Gilbert and the doors |  | [📦 Gilbert and the doors](https://github.com/midzer/gilbert) |
| Gravity Circuit |  | [📦 Gravity Circuit](https://github.com/TheChillVideoGameNerd/Gravity-Circuit-Web-Port) |
| ⭐ Helltaker | [▶ Helltaker](https://gn-math.dev/?id=790)<br>[▶ Helltaker (2)](https://wasm.rip/files/Helltaker/helltaker.html) | [📦 Helltaker](https://github.com/larpinguser/Helltaker-Web/tree/main/helltakerweb)<br>[📦 Helltaker (2)](https://github.com/reeyuki/Helltaker-Webport) |
| ⭐ Just Shapes & Beats | [▶ Just Shapes & Beats](https://gn-math.dev/?id=826) | [📦 Just Shapes & Beats](https://github.com/web-ports/jsab) |
| Keep Talking and Nobody Explodes |  | [📦 Keep Talking and Nobody Explodes](https://github.com/squidward5/ktane-webport) |
| LBreakoutHD |  | [📦 LBreakoutHD](https://github.com/midzer/lbreakouthd) |
| Luigi's Picture Poker | [▶ Luigi's Picture Poker](https://marcy4000.itch.io/luigis-picture-poker) |  |
| Magic Sushi |  | [📦 Magic Sushi](https://github.com/EXL/Magic-Sushi) |
| Meowdoku! |  | [📦 Meowdoku!](https://github.com/c00lkiddtech/md-) |
| Mindwave | [▶ Mindwave](https://gn-math.dev/?id=648) |  |
| ⭐ Minesweeper Plus | [▶ Minesweeper Plus](https://gn-math.github.io/web-port/minesweeperplus/) | [📦 Minesweeper Plus](https://github.com/genizy/web-port/tree/main/minesweeperplus) |
| Neverball |  | [📦 Neverball](https://github.com/Neverball/neverball) |
| ⭐ Nubby's Number Factory | [▶ Nubby's Number Factory](https://gn-math.dev/?id=517) | [📦 Nubby's Number Factory](https://github.com/genizy/biologyexams/tree/main/nubbys-number-factory) |
| Numpty Physics |  | [📦 Numpty Physics](https://github.com/midzer/numptyphysics) |
| Pacman |  | [📦 Pacman](https://github.com/midzer/pacman) |
| Patrick’s Parabox |  | [📦 Patrick’s Parabox](https://github.com/puffrs/patrickparaboxweb) |
| Plunder & Pillage | [▶ Plunder & Pillage](https://rgc.zone/ports/8786-plunder/run.html) |  |
| ⭐ Portal | [▶ Portal](https://yikes.pw/portal/) | [📦 Portal](https://github.com/weliveinhell/source-engine)<br>[📦 Portal](https://github.com/AlexBoops/portal-1-port) |
| ⭐ Power Hover | [▶ Power Hover](https://gn-math.dev/?id=743) | [📦 Power Hover](https://github.com/web-ports/power-hover) |
| Powermanga |  | [📦 Powermanga](https://github.com/midzer/Powermanga) |
| Rocks'n'Diamonds | [▶ Rocks'n'Diamonds](https://www.artsoft.org/rocksndiamonds/) |  |
| Running Fred |  | [📦 Running Fred](https://github.com/aukak/running-fred) |
| SDL Sopwith |  | [📦 SDL Sopwith](https://github.com/fragglet/sdl-sopwith) |
| SDL-Ball |  | [📦 SDL-Ball](https://github.com/midzer/sdl-ball) |
| Shiromino |  | [📦 Shiromino](https://github.com/midzer/shiromino) |
| SNAPTIC |  | [📦 SNAPTIC](https://github.com/degloved-net/snaptic-web) |
| Sokoban |  | [📦 Sokoban](https://github.com/midzer/simple-sokoban) |
| Supaplex |  | [📦 Supaplex](https://github.com/midzer/open-supaplex) |
| T Cubed |  | [📦 T Cubed](https://github.com/web-ports/baldi-mods/tree/main/t3)<br>[📦 T Cubed (2)](https://github.com/GlaceonFan77/T-Cubed-Web) |
| t³ | [▶ t³ (T cubed)](https://gn-math.dev/?id=818) |  |
| Taiko no Tatsujin | [▶ Taiko no Tatsujin](https://cjdgrevival.com/) |  |
| The Math Is Leaking |  | [📦 The Math Is Leaking](https://github.com/reeyuki/themathisleaking) |
| Torus Trooper |  | [📦 Torus Trooper](https://github.com/speps/tt) |
| TriZon |  | [📦 TriZon](https://github.com/degloved-net/trizon) |
| ⭐ Trombone Champ | [▶ Trombone Champ](https://wasm.rip/files/tchamp/index.html) | [📦 Trombone Champ](https://github.com/degloved-net/trombone-champ) |
| ⭐ Ultrapool | [▶ Ultrapool](https://gn-math.dev/?id=757) | [📦 Ultrapool](https://github.com/ParrrotVR/ultrapoolwebport)<br>[📦 Ultrapool (bread fork)](https://github.com/genizy/ultrapoolwebport-nothreads) |
| Vectoroids |  | [📦 Vectoroids](https://github.com/midzer/vectoroids) |
| Violetland |  | [📦 Violetland](https://github.com/midzer/violetland) |
| WASM Arcade | [▶ WASM Arcade](https://wasmarcade.com/) |  |
| while True: learn |  | [📦 while True: learn()](https://github.com/dashiellbenton/ports/tree/main/while-true-learn) |
| Wizards in Shorts |  | [📦 Wizards in Shorts](https://github.com/Reeyuki/WizardsInShorts) |
| XGalaga |  | [📦 XGalaga](https://github.com/midzer/xgalaga-sdl) |
| ⭐ Your Only Move is Hustle | [▶ Your Only Move is Hustle](https://gn-math.dev/?id=776) | [📦 Your Only Move is Hustle](https://github.com/webporting/Your-Only-Move-Is-HUSTLE)<br>[📦 yomih hustle](https://github.com/web-ports/yomi-hustle) |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="horror"></a>

## Horror & Mystery <sub>· 72</sub>

Lights off. Volume up. Good luck.

| Game | Play | Source |
| --- | --- | --- |
| ⭐ -3 | [▶ -3](https://gn-math.dev/?id=816) | [📦 -3](https://github.com/aukak/-3)<br>[📦 Baldi's Basics: Minus 3](https://github.com/aukak/-3) |
| -b |  | [📦 -b](https://github.com/web-ports/baldi-mods/tree/main/-b) |
| ⭐ A Bite at Freddy's | [▶ A Bite at Freddy's](https://gn-math.dev/?id=258) | [📦 A Bite at Freddy's](https://github.com/freebuisness/assets/tree/main/258) |
| Baldi Balds The Universe |  | [📦 Baldi Balds The Universe](https://github.com/reeyuki/baldiBaldsTheUniverse) |
| ⭐ Baldi's Basics Birthday Bash | [▶ Baldi's Basics Birthday Bash](https://wasm.rip/files/birthdaybash/index.html) | [📦 Baldi's Basics Birthday Bash](https://github.com/woahhcrackers/BirthdayBashWeb) |
| ⭐ Baldi's Basics Classic Remastered | [▶ Baldi's Basics Classic Remastered](https://gn-math.github.io/web-port/baldi-remaster/) | [📦 Baldi's Basics Classic Remastered](https://github.com/genizy/web-port/tree/main/baldi-remaster) |
| ⭐ Baldi's Basics Plus | [▶ Baldi's Basics Plus](https://gn-math.github.io/web-port/baldi-plus/) | [📦 Baldi's Basics Plus](https://github.com/genizy/web-port/tree/main/baldi-plus) |
| ⭐ Bendy and The Ink Machine | [▶ Bendy and The Ink Machine](https://gn-math.github.io/web-port/bendy/)<br>[▶ Bendy and The Ink Machine (2)](https://wasm.rip/files/BATIM/index.html) | [📦 Bendy and The Ink Machine](https://github.com/genizy/web-port/tree/main/bendy)<br>[📦 Bendy and The Ink Machine (2)](https://github.com/slqntdevss/BATIMFullPort)<br>[📦 Bendy and The Ink Machine (4)](https://github.com/web-ports/bendy-and-the-ink-machine)<br>[📦 Bendy and The Ink Machine (5)](https://github.com/woahhcrackers/BATIMWeb) |
| Bendy and the Ink Machine: ALL CHAPTERS | [▶ Bendy and the Ink Machine: ALL CHAPTERS](https://gn-math.dev/?id=803) |  |
| ⭐ Buckshot Roulette | [▶ Buckshot Roulette](https://gn-math.github.io/web-port/buckshot-roulette/) | [📦 Buckshot Roulette](https://github.com/genizy/web-port/tree/main/buckshot-roulette)<br>[📦 Buckshot Roulette (2)](https://github.com/Stratus-Games/Buckshot-NEWEST-Port)<br>[📦 Buckshot Roulette (3)](https://github.com/degloved-net/buckshot-roulette-web) |
| ⭐ Christmas Massacre | [▶ Christmas Massacre](https://gn-math.dev/?id=734) | [📦 Christmas Massacre](https://github.com/web-ports/christmas-massacre) |
| ⭐ Dead Plate | [▶ Dead Plate](https://gn-math.github.io/web-port/dead-plate/) | [📦 Dead Plate](https://github.com/genizy/web-port/tree/main/dead-plate) |
| ⭐ Deadseat | [▶ Deadseat](https://gn-math.github.io/web-port/deadseat/) | [📦 Deadseat](https://github.com/genizy/web-port/tree/main/deadseat)<br>[📦 The Deadseat](https://github.com/TheBlehLollipop/The-Deadseat-Webport) |
| ⭐ Do NOT Take This Cat Home | [▶ Do NOT Take This Cat Home](https://gn-math.github.io/web-port/donottakethiscathome/) | [📦 Do NOT Take This Cat Home](https://github.com/genizy/web-port/tree/main/donottakethiscathome) |
| Endoparasitic | [▶ Endoparasitic](https://gn-math.dev/?id=286) |  |
| Endoparasitic 2 | [▶ Endoparasitic 2](https://gn-math.dev/?id=724) |  |
| Fear & Hunger | [▶ Fear & Hunger](https://gn-math.dev/?id=706) | [📦 Fear and Hunger](https://github.com/web-ports/fear-and-hunger) |
| Fear & Hunger 2: Termina | [▶ Fear & Hunger 2: Termina](https://gn-math.dev/?id=794) | [📦 Fear and Hunger 2: Termina](https://github.com/web-ports/fear-and-hunger-2) |
| ⭐ Fears To Fathom | [▶ Fears To Fathom](https://gn-math.github.io/web-port/fears-to-fathom/) | [📦 Fears To Fathom](https://github.com/genizy/web-port/tree/main/fears-to-fathom) |
| ⭐ Fears to Fathom: Home Alone | [▶ Fears to Fathom: Home Alone](https://gn-math.dev/?id=460) | [📦 Fears to Fathom: Home Alone](https://github.com/slqntdevss/FTFHAPort) |
| ⭐ Five Nighs at Epstein's | [▶ Five Nights at Epstein's](https://gn-math.dev/?id=710) | [📦 Five Nights at Epstein's](https://github.com/web-ports/fnae)<br>[📦 Five Nighs at Epstein's](https://github.com/web-ports/fnae) |
| Five Nights at Candy's | [▶ Five Nights at Candy's](https://gn-math.dev/?id=503) | [📦 Five Nights at Candy's 1](https://github.com/web-ports/fnac/tree/main/1) |
| ⭐ Five Nights at Candy's 2 | [▶ Five Nights at Candy's 2](https://gn-math.dev/?id=504) | [📦 Five Nights at Candy's 2](https://github.com/web-ports/fnac/tree/main/2) |
| ⭐ Five Nights at Freddy's 2 | [▶ Five Nights at Freddy's 2](https://gn-math.dev/?id=39) | [📦 Five Nights at Freddy's 2](https://github.com/irv77/hd_fnaf/tree/main/2) |
| ⭐ Five Nights at Freddy's 3 | [▶ Five Nights at Freddy's 3](https://gn-math.dev/?id=40) | [📦 Five Nights at Freddy's 3](https://github.com/irv77/hd_fnaf/tree/main/3) |
| ⭐ Five Nights at Freddy's 4 | [▶ Five Nights at Freddy's 4](https://gn-math.dev/?id=41) | [📦 Five Nights at Freddy's 4](https://github.com/irv77/hd_fnaf/tree/main/4) |
| Five Nights at Freddy's 4: Halloween | [▶ Five Nights at Freddy's 4: Halloween](https://gn-math.dev/?id=428) |  |
| Five Nights at Freddy's 4: Halloween Edition |  | [📦 Five Nights at Freddy's 4: Halloween Edition](https://github.com/genizy/fnaf/tree/main/4-halloween) |
| ⭐ Five Nights at Freddy's World: Refreshed | [▶ Five Nights at Freddy's World: Refreshed](https://gn-math.dev/?id=704) | [📦 Five Nights at Freddy's World: Refreshed](https://github.com/web-ports/fnaf-world-refreshed) |
| Five Nights at Freddy's: Pizza Simulator | [▶ Five Nights at Freddy's: Pizza Simulator](https://gn-math.dev/?id=191) |  |
| Five Nights at Freddy's: Pizzeria Simulator |  | [📦 Five Nights at Freddy's: Pizzeria Simulator](https://github.com/irv77/hd_fnaf/tree/main/ps) |
| ⭐ Five Nights at Freddy's: Sister Location | [▶ Five Nights at Freddy's: Sister Location](https://gn-math.dev/?id=185) | [📦 Five Nights at Freddy's: Sister Location](https://github.com/irv77/hd_fnaf/tree/main/sl) |
| ⭐ Five Nights at Freddy's: Ultimate Custom Night | [▶ Five Nights at Freddy's: Ultimate Custom Night](https://gn-math.dev/?id=192) | [📦 Five Nights at Freddy's: Ultimate Custom Night](https://github.com/irv77/hd_fnaf/tree/main/ucn) |
| ⭐ Five Nights at Freddy's: World | [▶ Five Nights at Freddy's: World](https://gn-math.dev/?id=190) | [📦 Five Nights at Freddy's: World](https://github.com/irv77/hd_fnaf/tree/main/w) |
| ⭐ Five Nights at Frickbear's 3 | [▶ Five Nights at Frickbear's 3](https://gn-math.dev/?id=813) | [📦 Five Nights at Frickbear's 3](https://github.com/Reeyuki/frickbears3port/) |
| Five Nights at Last Breath | [▶ Five Nights at Last Breath](https://gn-math.dev/?id=750) |  |
| Five Nights in Anime 3D |  | [📦 Five Nights in Anime 3D](https://github.com/Reeyuki/fivenightsanime3dport) |
| ⭐ FNAF | [▶ FNAF](https://gn-math.github.io/web-port/fnaf/)<br>[▶ Five Nights at Freddy's](https://gn-math.dev/?id=38) | [📦 FNAF](https://github.com/genizy/web-port/tree/main/fnaf)<br>[📦 Five Nights at Freddy's 1](https://github.com/irv77/hd_fnaf/tree/main/1)<br>[📦 FNAF](https://github.com/genizy/fnaf/tree/main/1) |
| FNAF: Blood & Gears |  | [📦 FNAF: Blood & Gears (Demo)](https://github.com/UMMMM-GUYSSS/Five-Nights-at-Freddy-s-Blood---Gears) |
| ⭐ Granny | [▶ Granny](https://gn-math.dev/?id=90) | [📦 Granny](https://github.com/web-ports/granny)<br>[📦 Granny (2)](https://github.com/aukak/Granny)<br>[📦 Granny (3)](https://github.com/woahhcrackers/GrannyWeb) |
| Granny 2 |  | [📦 Granny 2](https://github.com/web-ports/granny-2) |
| Granny 3 |  | [📦 Granny 3](https://github.com/mynamescrax/gamesforaetheris/tree/main/granny3) |
| ⭐ Iron Lung | [▶ Iron Lung](https://gn-math.dev/?id=705) | [📦 Iron Lung](https://github.com/web-ports/iron-lung) |
| Kindergarten | [▶ Kindergarten](https://gn-math.dev/?id=445) |  |
| ⭐ Kindergarten 1 & 2 | [▶ Kindergarten 1 & 2](https://gn-math.github.io/web-port/kindergarten/) | [📦 Kindergarten 1 & 2](https://github.com/genizy/web-port/tree/main/kindergarten) |
| Kindergarten 2 | [▶ Kindergarten 2](https://gn-math.dev/?id=446) |  |
| ⭐ Kindergarten 3 | [▶ Kindergarten 3](https://gn-math.dev/?id=501) | [📦 Kindergarten 3](https://github.com/slqntdevss/Kindergarten3Port) |
| Lethal Company | [▶ Lethal Company](https://wasm.rip/files/lethal/index.html) |  |
| ⭐ Lobotomy Corporation | [▶ Lobotomy Corporation](https://wasm.rip/files/lob-corp/index.html) | [📦 Lobotomy Corporation](https://github.com/Reeyuki/lobcorp) |
| Midnight Shift | [▶ Midnight Shift](https://gn-math.dev/?id=658) |  |
| ⭐ MiSide | [▶ MiSide](https://gn-math.dev/?id=814)<br>[▶ MiSide (2)](https://wasm.rip/files/miside/miside.html) | [📦 MiSide](https://github.com/web-ports/miside/)<br>[📦 MiSide (2)](https://github.com/woahhcrackers/MiSideWeb) |
| Night of the Consumers |  | [📦 Night of the Consumers](https://github.com/linkawaken1979-alt/night-of-the-consumers-web-port) |
| ⭐ Raldi's Crackhouse | [▶ Raldi's Crackhouse](https://gn-math.dev/?id=670) | [📦 Raldi's Crackhouse](https://github.com/woahhcrackers/RaldiWeb-LEGACY) |
| Resident Evil Outbreak File #1 & #2 | [▶ Resident Evil Outbreak File #1 & #2 (Outbreak Web)](https://outbreakweb.com/) |  |
| ⭐ SCP: Containment Breach | [▶ SCP: Containment Breach](https://wasm.rip/files/scp/index.html) | [📦 SCP: Containment Breach](https://github.com/larpinguser/q8j) |
| ⭐ Shift at Midnight | [▶ Shift at Midnight](https://gn-math.dev/?id=721) | [📦 Shift at Midnight](https://github.com/webporting/Shift-At-Midnight)<br>[📦 Shift at Midnight](https://github.com/slqntdevss/ShiftAtMidnightPort) |
| Silent Hill: Origins | [▶ Silent Hill: Origins](https://silenthillorigins.zeliaopen.space/) |  |
| Slender: The 8 Pages | [▶ Slender: The 8 Pages](https://gn-math.dev/?id=451) |  |
| ⭐ Slender: The Eight Pages | [▶ Slender: The Eight Pages](https://gn-math.github.io/web-port/slender/) | [📦 Slender: The Eight Pages](https://github.com/genizy/web-port/tree/main/slender) |
| Slenderina The Cellar |  | [📦 Slenderina The Cellar](https://github.com/Reeyuki/slenderina) |
| Slendytubbies |  | [📦 Slendytubbies](https://github.com/web-ports/slendytubbies) |
| Slendytubbies 1 | [▶ Slendytubbies 1](https://gn-math.dev/?id=796) |  |
| ⭐ Slendytubbies 2 | [▶ Slendytubbies 2](https://gn-math.dev/?id=806) | [📦 Slendytubbies 2](https://github.com/web-ports/slendytubbies/tree/main/2) |
| ⭐ Slendytubbies 2D | [▶ Slendytubbies 2D](https://gn-math.dev/?id=807) | [📦 Slendytubbies 2D](https://github.com/web-ports/slendytubbies/tree/main/2d) |
| ⭐ SONIC.EXE | [▶ SONIC.EXE](https://gn-math.github.io/web-port/sonic.exe/)<br>[▶ Sonic.EXE (ORIGINAL)](https://gn-math.dev/?id=606) | [📦 SONIC.EXE](https://github.com/genizy/web-port/tree/main/sonic.exe) |
| ⭐ Tattletail | [▶ Tattletail](https://gn-math.github.io/web-port/tattletail/) | [📦 Tattletail](https://github.com/genizy/web-port/tree/main/tattletail) |
| ⭐ That's Not My Neighbor | [▶ That's Not My Neighbor](https://gn-math.github.io/web-port/thats-not-my-neighbor/) | [📦 That's Not My Neighbor](https://github.com/genizy/web-port/tree/main/thats-not-my-neighbor) |
| ⭐ The Man From the Window | [▶ The Man From the Window](https://gn-math.github.io/web-port/the-man-in-the-window/) | [📦 The Man From the Window](https://github.com/genizy/web-port/tree/main/the-man-in-the-window) |
| ⭐ The Man From the Window 2 | [▶ The Man From the Window 2](https://wasm.rip/files/MFDW2/index.html) | [📦 The Man From the Window 2](https://github.com/wasm-rip/the-man-from-the-window-2-web) |
| The Man In The Window | [▶ The Man In The Window](https://gn-math.dev/?id=459) |  |
| There's a Butcher Around |  | [📦 There's a Butcher Around](https://github.com/usheje883-maker/There-s-A-Butcher-Around-Webport) |
| ⭐ Yandere Simulator | [▶ Yandere Simulator](https://gn-math.github.io/web-port/yandere-simulator/) | [📦 Yandere Simulator](https://github.com/genizy/web-port/tree/main/yandere-simulator) |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="sandbox"></a>

## Sandbox & Sim <sub>· 34</sub>

Build, farm, fly and break things.

| Game | Play | Source |
| --- | --- | --- |
| ⭐ Andy's Apple Farm | [▶ Andy's Apple Farm](https://gn-math.github.io/web-port/andys-apple-farm/) | [📦 Andy's Apple Farm](https://github.com/genizy/web-port/tree/main/andys-apple-farm) |
| ⭐ Animal Crossing | [▶ Animal Crossing](https://rgc.zone/ports/ac-webport-main/index.html)<br>[▶ Animal Crossing (GAMECUBE)](https://gn-math.dev/?id=828) | [📦 Animal Crossing](https://github.com/web-ports/ac-gamecube) |
| Createrria | [▶ Createrria](https://nomadic-ua.itch.io/createrria) |  |
| Digital Logic Simulator |  | [📦 Digital Logic Simulator](https://github.com/thecheetoman/DLSWebPort) |
| Dressing Room |  |  |
| Dude Simulator | [▶ Dude Simulator](https://dude-simulator-webgl.netlify.app/) |  |
| Dude Simulator 2 | [▶ Dude Simulator 2](https://dude-sim-2-webgl-ported-by-carteryes.netlify.app/) |  |
| Eaglercraft | [▶ Eaglercraft](https://rgc.zone/ports/eaglecarftg/index.html) |  |
| ⭐ Feed & Grow Fish | [▶ Feed & Grow Fish](https://reeyukifish.pages.dev/) | [📦 Feed & Grow Fish](https://github.com/Reeyuki/FeedAndGrowFishPort) |
| ⭐ How to Fish | [▶ How to Fish](https://wasm.rip/files/HowToFish/HowToFish.html) | [📦 How to Fish](https://github.com/NotRexed/HowToFishPort) |
| Kerbal Space Program |  | [📦 Kerbal Space Program](https://github.com/woahhcrackers/KSPWeb) |
| Luanti | [▶ Luanti (Minetest)](https://www.luanti.org/) |  |
| Minecraft 0.6.1 | [▶ Minecraft 0.6.1](https://rgc.zone/ports/minecraft061/index.html) |  |
| Minecraft 1.8.8 | [▶ Minecraft 1.8.8 (EaglercraftX)](https://wasmarcade.com/minecraft) |  |
| Minecraft 4k |  | [📦 Minecraft 4k](https://github.com/midzer/m4kc) |
| Minecraft LCE |  |  |
| Minecraft Pocket Edition | [▶ Minecraft Pocket Edition](https://gn-math.dev/?id=754) |  |
| Muck |  | [📦 Muck (WIP)](https://github.com/gays-studio/muck-webport) |
| Muddy Heights |  | [📦 Muddy Heights](https://github.com/gabadagabadgoo/morbidy-obese-chickens) |
| ⭐ People Playground | [▶ People Playground](https://gn-math.github.io/web-port/people-playground/) | [📦 People Playground](https://github.com/genizy/web-port/tree/main/people-playground)<br>[📦 People Playground (2)](https://github.com/bubbls/ugss/tree/main/people-playground) |
| Potion Craft: Alchemist Simulator |  | [📦 Potion Craft: Alchemist Simulator](https://github.com/GrassPorts/Potion-Craft-Alchemy-Simulator) |
| Project Zomboid |  |  |
| ⭐ RAFT | [▶ RAFT](https://gn-math.github.io/web-port/raft/) | [📦 RAFT](https://github.com/genizy/web-port/tree/main/raft) |
| Rec Room |  | [📦 Rec Room](https://github.com/98corbins) |
| Slime Rancher | [▶ Slime Rancher](https://gn-math.dev/?id=591) |  |
| Slime Ranchers |  | [📦 Slime Ranchers](https://github.com/web-ports/slime-ranchers)<br>[📦 Slime Ranchers (2)](https://github.com/Reeyuki/SlimeRanch) |
| ⭐ Spaceflight Simulator | [▶ Spaceflight Simulator](https://gn-math.dev/?id=808) | [📦 Spaceflight Simulator](https://github.com/web-ports/spaceflight-simulator) |
| ⭐ Stardew Valley | [▶ Stardew Valley](https://gn-math.dev/?id=789)<br>[▶ Stardew Valley](https://wasm.rip/files/stardewvalley/index.html) | [📦 Stardew Valley](https://github.com/degloved-net/stardew-wasm) |
| ⭐ Terraria | [▶ Terraria](https://gn-math.dev/?id=669)<br>[▶ Terraria (2)](https://terraria.mercurywork.shop/) | [📦 Terraria](http://github.com/mercuryWorkshop/terraria-wasm)<br>[📦 Terraria (2)](https://github.com/web-ports/terraria) |
| Totally Accurate Battle Simulator | [▶ Totally Accurate Battle Simulator (TABS)](https://gn-math.dev/?id=827) | [📦 Totally Accurate Battle Simulator](https://github.com/web-ports/tabs)<br>[📦 Totally Accurate Battle Simulator (2)](https://github.com/Reeyuki/Tabs) |
| Very Realistic Game Dev Simulator |  | [📦 Very Realistic Game Dev Simulator](https://github.com/UMMMM-GUYSSS/Very-Realistic-Game-Dev-Simulator) |
| ⭐ Webfishing | [▶ Webfishing](https://gn-math.github.io/web-port/web-fishing/) | [📦 Webfishing](https://github.com/genizy/web-port/tree/main/web-fishing) |
| Worldbox |  | [📦 Worldbox](https://gitlab.com/Shindo957-Official/worldfox) |
| Youtubers Life OMG! |  | [📦 Youtubers Life OMG!](https://github.com/Reeyuki/ytlifeomg) |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="indie"></a>

## Indie & Experimental <sub>· 101</sub>

Small, weird and wonderful.

| Game | Play | Source |
| --- | --- | --- |
| ⭐ 20 Minutes Till Dawn | [▶ 20 Minutes Till Dawn](https://gn-math.dev/?id=819) | [📦 20 Minutes Till Dawn](https://github.com/web-ports/20-minutes) |
| A Game about Feeding a Black Hole |  | [📦 A Game about Feeding a Black Hole](https://github.com/GrassPorts/A-Game-About-Feeding-A-Black-Hole)<br>[📦 A Game about Feeding a Black Hole](https://git.gay/portmirrors/agafabh) |
| ⭐ Alley Cat | [▶ Alley Cat](https://petarov.github.io/alleycat.exe/) | [📦 Alley Cat](https://github.com/petarov/alleycat.exe) |
| Amazing Alex | [▶ Amazing Alex](https://nomadic-ua.itch.io/amazing-alex) |  |
| Ambidextro |  | [📦 Ambidextro](https://github.com/chromecrash/Ambidextro-browser-port) |
| ⭐ Among Us | [▶ Among Us](https://wasm.rip/files/amongus/index.html) | [📦 Among Us](https://github.com/wasmdotrip/AmongUsPort) |
| Anarch |  | [📦 Anarch](https://gitlab.com/drummyfish/anarch) |
| ⭐ Apes vs Helium | [▶ Apes vs Helium](https://gn-math.dev/?id=783) | [📦 Apes vs Helium](https://github.com/bubbls/UGS-Assets/tree/main/apesvshelium) |
| Apotris |  | [📦 Apotris](https://gitea.com/akouzoukos/apotris) |
| Arx Fatalis | [▶ Arx Fatalis (Arxwasm Demo)](https://wasm.continuation-labs.com/arxdemo/)<br>[▶ Arx Fatalis (rgc.zone)](https://rgc.zone/ports/arxweb/index.html) |  |
| AstroMenace |  | [📦 AstroMenace](https://github.com/midzer/astromenace) |
| Asylum |  | [📦 Asylum](https://github.com/GMH-Code/Asylum) |
| Bad Parenting 1 | [▶ Bad Parenting 1](https://gn-math.dev/?id=166) |  |
| Before Close |  | [📦 Before Close](https://github.com/xxuep/before-close-webport) |
| ⭐ BERGENTRUCK 201x | [▶ BERGENTRUCK 201x](https://gn-math.github.io/web-port/bergentruck/) | [📦 BERGENTRUCK 201x](https://github.com/genizy/web-port/tree/main/bergentruck) |
| Black Hole Fishing |  | [📦 Black Hole Fishing](https://github.com/mynamescrax/gamesforaetheris/tree/main/blackholefishing) |
| ⭐ boil Noodles at Night | [▶ boil Noodles at Night](https://wasm.rip/files/boilnoodles/index.html) | [📦 boil Noodles at Night](https://github.com/SomeRandomFella/portsandrips/tree/master/boilnoodles) |
| BreakHack |  | [📦 BreakHack](https://github.com/midzer/breakhack) |
| burnedwebsite |  | [📦 burnedwebsite](https://github.com/burnedpopcorn/burnedwebsite) |
| Buster Jam | [▶ Buster Jam](https://gn-math.dev/?id=646) |  |
| Capuchin |  | [📦 Capuchin](https://github.com/aukak/Capuchin) |
| CaseOh's Basics in Eating and Fast Food | [▶ CaseOh's Basics in Eating and Fast Food](https://gn-math.dev/?id=758) |  |
| Chain-Chillas |  | [📦 Chain-Chillas](https://github.com/Camzzz-vrgt/chain-chillas-web) |
| Claw |  | [📦 Claw](https://github.com/midzer/OpenClaw) |
| ⭐ Clover Pit | [▶ Clover Pit](https://gn-math.dev/?id=716) | [📦 Clover Pit](https://github.com/web-ports/clover-pit) |
| Don't Bite Me Bro |  | [📦 Don't Bite Me Bro](https://github.com/usheje883-maker/Dont-Bite-Me-Bro-Web) |
| Don't Sleep With The Fishes |  | [📦 Don't Sleep With The Fishes](https://github.com/AlexBoops/DSWTF-Port) |
| Endacopia |  | [📦 Endacopia](https://github.com/linkawaken1979-alt/endacopia-) |
| Fade To Black |  | [📦 Fade To Black](https://github.com/midzer/f2bgl) |
| ⭐ Fih | [▶ Fih](https://gn-math.dev/?id=797) | [📦 Fih](https://github.com/InsayneBoko/fih-port/tree/main/port) |
| ⭐ FISH | [▶ FISH](https://gn-math.dev/?id=761) | [📦 FISH](https://github.com/web-ports/fish) |
| Flare |  | [📦 Flare](https://github.com/midzer/flare-engine) |
| ⭐ Flying Gorilla | [▶ Flying Gorilla 3D](https://gn-math.dev/?id=763) | [📦 Flying Gorilla 3D](https://github.com/web-ports/flying-gorilla)<br>[📦 Flying Gorilla](https://github.com/web-ports/flying-gorilla) |
| FreeSiege |  | [📦 FreeSiege](https://github.com/midzer/freesiege) |
| Fungiman |  | [📦 Fungiman](https://github.com/GrassPorts/Fungiman) |
| Fused 240 | [▶ Fused 240](https://gn-math.dev/?id=722) |  |
| GO TO BED |  |  |
| ⭐ Happy Room | [▶ Happy Room](https://wasm.rip/files/happy-room/index.html) | [📦 Happy Room](https://github.com/degloved-net/happy-room) |
| ⭐ Happy Sheepies | [▶ Happy Sheepies](https://gn-math.github.io/web-port/happy-sheepies/) | [📦 Happy Sheepies](https://github.com/genizy/web-port/tree/main/happy-sheepies) |
| HAYAI |  | [📦 HAYAI](https://github.com/degloved-net/HAYAI) |
| Help Hannah's Horse |  | [📦 Help Hannah's Horse](https://github.com/midzer/hannah) |
| Horse Magnifier |  | [📦 Horse Magnifier](https://github.com/AlexBoops/horse-magnifier-port) |
| Horsey Game |  | [📦 Horsey Game](https://github.com/woahhcrackers/HorseyGameWeb) |
| ⭐ Human Expenditure Program | [▶ Human Expenditure Program](https://gn-math.github.io/web-port/human-expenditure-program/) | [📦 Human Expenditure Program](https://github.com/genizy/web-port/tree/main/human-expenditure-program) |
| Hurrican |  | [📦 Hurrican](https://github.com/midzer/hurrican) |
| HYDROGEN |  | [📦 HYDROGEN](https://github.com/BestSpark687090/bestspark-web-ports/tree/main/hydrogen) |
| I Spoke to God |  | [📦 I Spoke to God](https://github.com/degloved-net/i-spoke-to-god) |
| ⭐ In Stars and Time | [▶ In Stars and Time](https://gn-math.dev/?id=667) | [📦 In Stars and Time](https://github.com/Reeyuki/InStarsAndTime)<br>[📦 In Stars and Time (2)](https://github.com/web-ports/in-stars-and-time) |
| IS THAT A GUBBY? |  | [📦 IS THAT A GUBBY?](https://github.com/xxskidxx69420-ai/isthatagubbywebportheh) |
| ⭐ Jeffrey Epstein Basics In Education And Kidnapping | [▶ Jeffrey Epstein Basics In Education And Kidnapping](https://gn-math.dev/?id=751) | [📦 Jeffrey Epstein Basics In Education And Kidnapping](https://github.com/bubbls/ports/tree/main/jeffrey-epsteins-basics-in-education-and-kidnapping) |
| JENNY |  | [📦 JENNY](https://github.com/MRVAPORWAVE25/JennyGameFiles) |
| KinitoPET |  | [📦 KinitoPET](https://github.com/web-ports/kinito-pet) |
| La Madriguera | [▶ La Madriguera (Lazy Bear Game)](https://gn-math.dev/?id=843) | [📦 La Madriguera](https://github.com/web-ports/la-madriguera) |
| ⭐ Lacey's Flash Games | [▶ Lacey's Flash Games](https://gn-math.github.io/web-port/laceys-flash-games/) | [📦 Lacey's Flash Games](https://github.com/genizy/web-port/tree/main/lacysflashgames) |
| Lenin: First Blood | [▶ Lenin: First Blood](https://rgc.zone/ports/8770-blood-lenin/run.html) |  |
| Li-Ri |  | [📦 Li-Ri](https://github.com/midzer/Li-Ri) |
| ⭐ Milk inside a bag of milk inside a bag of milk | [▶ Milk inside a bag of milk inside a bag of milk](https://gn-math.dev/?id=650) | [📦 Milk inside a bag of milk inside a bag of milk](https://github.com/web-ports/milk-bag-games/tree/main/inside) |
| ⭐ Milk outside a bag of milk outside a bag of milk | [▶ Milk outside a bag of milk outside a bag of milk](https://gn-math.dev/?id=651) | [📦 Milk outside a bag of milk outside a bag of milk](https://github.com/web-ports/milk-bag-games/tree/main/outside) |
| My Baby Talking Hippo |  | [📦 My Baby Talking Hippo](https://github.com/web-ports/talking-hippo) |
| My Dictator Stalin Can't Be This Cute ?! |  | [📦 My Dictator Stalin Can't Be This Cute ?!](https://github.com/degloved-net/my-dictator-stalin-cant-be-this-cute)<br>[📦 My Dictator Stalin Can't Be This Cute ?!](https://github.com/degloved-net/stalin-yuri-web) |
| My Femboy Roommate |  | [📦 My Femboy Roommate](http://github.com/gays-studio/mfr-webport)<br>[📦 My Femboy Roommate (2)](https://github.com/Cute-Orange-Cat/MFR/tree/main) |
| My Talking Baby Hippo | [▶ My Talking Baby Hippo](https://gn-math.dev/?id=840) |  |
| ⭐ Needy Streamer Overload | [▶ Needy Streamer Overload](https://gn-math.dev/?id=708) | [📦 Needy Streamer Overload](https://github.com/web-ports/needy-streamer-overload) |
| Nikwi |  | [📦 Nikwi](https://github.com/midzer/nikwi) |
| Nodebuster |  | [📦 Nodebuster](https://github.com/degloved-net/nodebuster) |
| Nothing |  | [📦 Nothing](https://github.com/gays-studio/nothing-wasm-web)<br>[📦 Nothing (2)](https://github.com/googoogoob/NothingWebPort)<br>[📦 Nothing (3)](https://github.com/BestSpark687090/bestspark-web-ports/tree/main/actual-nothing) |
| OLD CheesedUP |  | [📦 OLD CheesedUP](https://github.com/burnedpopcorn/OLD-CheesedUP-Web-Port) |
| One Night At Kim Jong Un's |  | [📦 One Night At Kim Jong Un's](https://github.com/usheje883-maker/One-Night-At-Kim-Jong-Un-s-Webport) |
| Penthouse Paradise | [▶ Penthouse Paradise](https://rgc.zone/ports/8782-duke-penthouse/run.html) |  |
| Pretend it's not there |  |  |
| Promises to Keep | [▶ Promises to Keep](https://gitea.mcalec.dev/mcalec/ptk) |  |
| Psychopomp |  | [📦 Psychopomp](https://github.com/z4laxis/PsychopompWebport) |
| Quest for Al-Qa'eda | [▶ Quest for Al-Qa'eda](https://rgc.zone/ports/8790-quest-alqaeda/run.html) |  |
| Quest for Hussein | [▶ Quest for Hussein](https://rgc.zone/ports/8789-quest-hussein/run.html) |  |
| ⭐ R.E.P.O | [▶ R.E.P.O](https://gn-math.github.io/web-port/repo/) | [📦 R.E.P.O](https://github.com/genizy/web-port/tree/main/repo) |
| ⭐ RE:RUN | [▶ RE:RUN](https://gn-math.dev/?id=260) | [📦 RE:RUN](https://github.com/aukak/RE-RUN) |
| ROUNDS |  | [📦 ROUNDS](https://github.com/Nawsif/host/tree/main/ROUNDS) |
| ⭐ S.P.L.I.T | [▶ S.P.L.I.T](https://gn-math.dev/?id=839) | [📦 S.P.L.I.T](https://github.com/degloved-net/s.p.l.i.t) |
| Scampton The Great | [▶ Scampton The Great](https://gn-math.dev/?id=802) |  |
| Scritchy Scratchy |  | [📦 Scritchy Scratchy](https://github.com/c00lkiddtech/scratchy) |
| Sex with Hitler |  | [📦 Sex with Hitler](https://github.com/ajtabjs/swhport)<br>[📦 Sex with Hitler](https://github.com/q-29/swhport-fixed) |
| Shrimpio |  | [📦 Shrimpio](https://github.com/goodmeals/shrimpio) |
| Side Effects |  | [📦 Side Effects](https://github.com/gn-math/assets/tree/main/318) |
| Something |  | [📦 Something](https://github.com/gays-studio/something-web)<br>[📦 Something (2)](https://github.com/googoogoob/SomethingWebPort)<br>[📦 Something (3)](https://github.com/BestSpark687090/bestspark-web-ports/tree/main/actual-something) |
| ⭐ Stick with It | [▶ Stick with It](https://gn-math.dev/?id=502) | [📦 Stick with It](https://github.com/slqntdevss/StickWithItPort) |
| Super Mario Kart | [▶ Super Mario Kart (SM-Kart-ZX Web Port)](https://burnedpopcorn.github.io/SM-Kart-ZX-Web-Port/index.html) |  |
| Swabs Expedition |  | [📦 Swabs Expedition](https://github.com/burnedpopcorn/Swabs-Expedition-Web-Port) |
| To The Core |  |  |
| Tower To Heaven |  | [📦 Tower To Heaven](https://codeberg.org/midzer/tth) |
| Upload Labs |  | [📦 Upload Labs](https://github.com/googoogoob/UploadLabsWebPort) |
| Upstream |  | [📦 Upstream](https://github.com/degloved-net/upstream) |
| ⭐ UvuvwevwevweOnyetenvewveUgwemubwemOssas | [▶ UvuvwevwevweOnyetenvewveUgwemubwemOssas](https://gn-math.dev/?id=795) | [📦 UvuvwevwevweOnyetenvewveUgwemubwemOssas](https://github.com/bubbls/ports/tree/main/UvuvwevwevweOnyetenvewveUgwemubwemOssas) |
| Vangers |  | [📦 Vangers](https://github.com/KranX/Vangers) |
| Void Whispers |  | [📦 Void Whispers](https://github.com/degloved-net/void-whispers) |
| Water Closet |  | [📦 Water Closet](https://github.com/midzer/waterCloset) |
| Web Port Unblocked |  | [📦 Web Port Unblocked](https://github.com/burnedpopcorn/Web-Port-Unblocked) |
| ⭐ Who's Your Daddy? | [▶ Who's Your Daddy?](https://gn-math.dev/?id=791) | [📦 Who's Your Daddy?](https://github.com/Reeyuki/daddygame)<br>[📦 Who's Your Daddy? (2)](https://github.com/web-ports/daddygame) |
| Yesterday's Meat |  | [📦 Yesterday's Meat](https://github.com/SoupcanUBG/Yesterdays-Meat) |
| You Want Half a Mounds Bar |  | [📦 You Want Half a Mounds Bar](https://github.com/wasm-rip/You-Want-Half-A-Mounds-Bar-Web) |
| Zato |  | [📦 Zato](https://github.com/z4laxis/ZatoWebport) |
| Девятка | [▶ Девятка (1994)](https://rgc.zone/ports/nine-1994/index.html) |  |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="tools"></a>

## Engines, Emulators & Tools <sub>· 26</sub>

The machinery behind the ports. Not games, but useful.

| Game | Play | Source |
| --- | --- | --- |
| Aleph One | [🌐 Aleph One](https://alephone.lhowon.org/) |  |
| AlephWeb |  | [📦 AlephWeb](https://github.com/TotallyGatsby/AlephWeb) |
| CheerpJ | [🌐 CheerpJ](https://cheerpj.com/) |  |
| Chocolate Doom | [🌐 Chocolate Doom](https://www.chocolate-doom.org/) |  |
| DevilutionX |  | [📦 DevilutionX](https://github.com/diasurgical/devilutionX) |
| DOSBox | [🌐 DOSBox](https://www.dosbox.com/) |  |
| Emscripten | [🌐 Emscripten](https://emscripten.org/) |  |
| EmulatorJS | [🌐 EmulatorJS](https://emulatorjs.org/) |  |
| Godot | [🌐 Godot (Web export)](https://godotengine.org/) |  |
| ioquake3 | [🌐 ioquake3](https://ioquake3.org/) |  |
| JS-DOS | [🌐 js-dos](https://js-dos.com/) | [📦 JS-DOS](https://github.com/js-dos/) |
| OpenJK |  | [📦 OpenJK](https://github.com/JACoders/OpenJK) |
| PlayCanvas | [🌐 PlayCanvas](https://playcanvas.com/) |  |
| Proxified Ports |  | [📦 Proxified Ports](https://github.com/burnedpopcorn/Proxified-Ports) |
| PT HTML Launcher |  | [📦 PT HTML Launcher](https://github.com/burnedpopcorn/PT-HTML-Launcher) |
| PTWebLauncher |  | [📦 PTWebLauncher](https://github.com/burnedpopcorn/PTWebLauncher) |
| RetroArch Web Player | [🌐 RetroArch Web Player](https://web.libretro.com/) |  |
| Ruffle | [🌐 Ruffle](https://ruffle.rs/) |  |
| ScummVM | [🌐 ScummVM](https://www.scummvm.org/) |  |
| Unity | [🌐 Unity (WebGL)](https://unity.com/) |  |
| Unreal |  | [📦 Unreal (HTML5, community)](https://github.com/UnrealEngineHTML5) |
| v86 | [🌐 v86](https://copy.sh/v86/) |  |
| webretro | [🌐 webretro](https://binbashbanana.github.io/webretro/) |  |
| webЯcade | [🌐 webЯcade](https://www.webrcade.com/) |  |
| Xash3D |  | [📦 Xash3D](https://github.com/btarg/Xash3D-Emscripten) |
| Xash3D-FWGS |  | [📦 Xash3D-FWGS](https://github.com/FWGS/xash3d-fwgs) |

<p align="right"><a href="#categories">↑ back to top</a></p>

<a id="libraries"></a>

## Game Libraries & Portals <sub>· 14</sub>

Archives and creator pages where whole collections play.

| Game | Play | Source |
| --- | --- | --- |
| bog/aukak |  | [📦 bog/aukak](https://github.com/aukak) |
| breadbb/genizy |  | [📦 breadbb/genizy](https://github.com/genizy) |
| ClassicReload | [🌐 ClassicReload](https://classicreload.com/) |  |
| Dos.Zone | [▶ Dos.Zone](https://dos.zone) |  |
| Emupedia / EmuOS | [🌐 Emupedia / EmuOS](https://emupedia.net/) |  |
| Flashpoint Archive | [🌐 Flashpoint Archive](https://flashpointarchive.org/) |  |
| gays dot' studio |  | [📦 gays dot' studio](https://github.com/gays-studio) |
| GMH-Code |  | [📦 GMH-Code](https://github.com/GMH-Code) |
| Internet Archive — MS-DOS | [🌐 Internet Archive — MS-DOS](https://archive.org/details/softwarelibrary_msdos_games) |  |
| koi/_flixel | [▶ koi/_flixel](https://oldgrounds.xyz/) |  |
| PlayClassic.games | [🌐 PlayClassic.games](https://playclassic.games/) |  |
| ScummVM freeware games | [🌐 ScummVM freeware games](https://www.scummvm.org/games/) |  |
| wasm.rip | [▶ wasm.rip](https://wasm.rip) |  |
| webport.ing |  | [📦 webport.ing](https://github.com/webporting) |

<p align="right"><a href="#categories">↑ back to top</a></p>

## License

Catalog data is provided as-is. Links point to third-party projects —
their licenses and terms of use are defined by the respective repository authors.

## Special thanks for great work

- [breadbb/genizy](https://github.com/genizy)
- [98Corbins](https://98.c0rbin.fun/)
- [bog/aukak](https://github.com/aukak)
- [burnedpopcorn](https://github.com/burnedpopcorn)
- [irv77](https://github.com/irv77)
- [koi/_flixel](https://oldgrounds.xyz/)
- [slqnt](https://github.com/slqntdevss)
- [sodiboo](https://github.com/sodiboo)
- [SpanishFreddy](https://github.com/spanishfreddy)
- [Mercury Workshop](https://github.com/MercuryWorkshop)
- [national porting association](https://github.com/National-Porting-Association)
- [webport.ing](https://github.com/webporting)
- [sky](https://github.com/skysthelimitt) at selenite.cc
- [GMH-Code](https://github.com/GMH-Code)
- [MattConn](https://github.com/MattConn)
- [VinMannie](https://github.com/VinMannie)
- [chromaticpipe](https://github.com/chromaticpipe)
- [skyleite](https://github.com/skyleite)
- [BlueGameMC](https://github.com/BlueGameMC)
- [gays dot' studio](https://github.com/gays-studio)
- [Vanilagy](https://github.com/Vanilagy)
- [TWS2401](https://github.com/TWS2401)
- [q8j](https://github.com/q8j-dev)
- [wasm.rip](https://wasm.rip)
