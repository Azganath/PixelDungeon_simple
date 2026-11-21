var PFXLib=(function(){const __c={};const __f=[function(__e){Object.defineProperty(__e,"FX",{enumerable:true,configurable:true,get:()=>FX});
__star(__e, __r(1));
const crescentSlash=__r(16);
const starPop=__r(17);
const dustKick=__r(18);
const skillSigil=__r(19);
const anvilSparks=__r(20);
const critHit=__r(21);
const clawSwipe=__r(23);
const fireBreath=__r(25);
const fireRing=__r(27);
const heal=__r(28);
const smallExplosion=__r(30);
const poof=__r(31);
const coinDrop=__r(32);
const iceLance=__r(33);
const iceShatter=__r(35);
const spinSlash=__r(36);
const leafStorm=__r(37);
const boulder=__r(39);
const thrust=__r(40);
const zapHit=__r(41);
const waterJet=__r(43);
const splash=__r(45);
const lightningStrike=__r(46);
const acidSplash=__r(47);
const poisonCloud=__r(48);
const snowflakeBurst=__r(49);
const frostNova=__r(50);
const doubleSlash=__r(51);
const soulRise=__r(52);
const groundSlam=__r(54);
const earthSpike=__r(55);
const heavyCleave=__r(56);
const shadowTendrils=__r(57);
const thunderclap=__r(59);
const iceSpikes=__r(60);
const arcaneBeam=__r(61);
const holyPillar=__r(63);
const smite=__r(64);
const meteor=__r(65);
const icicleFall=__r(66);
const blackHole=__r(67);
const timeStop=__r(68);
const sunburst=__r(69);
const plasmaExplosion=__r(70);
const starFall=__r(72);
const levelUp=__r(73);
const lootBeam=__r(75);
const confetti=__r(77);
const collectBurst=__r(78);
const swordWave=__r(79);
const FX = { swordWave, crescentSlash, starPop, dustKick, skillSigil, anvilSparks, critHit, clawSwipe, fireBreath, fireRing, heal, smallExplosion, poof, coinDrop, iceLance, iceShatter, spinSlash, leafStorm, boulder, thrust, zapHit, waterJet, splash, lightningStrike, acidSplash, poisonCloud, snowflakeBurst, frostNova, doubleSlash, soulRise, groundSlam, earthSpike, heavyCleave, shadowTendrils, thunderclap, iceSpikes, arcaneBeam, holyPillar, smite, meteor, icicleFall, blackHole, timeStop, sunburst, plasmaExplosion, starFall, levelUp, lootBeam, confetti, collectBurst };
},
function(__e){
__star(__e, __r(2));
__star(__e, __r(3));
__star(__e, __r(4));
__star(__e, __r(5));
const __m6_ivhup=__r(6);Object.defineProperty(__e,"Particles",{enumerable:true,configurable:true,get:()=>__m6_ivhup.Particles});Object.defineProperty(__e,"Bits",{enumerable:true,configurable:true,get:()=>__m6_ivhup.Bits});Object.defineProperty(__e,"Lights",{enumerable:true,configurable:true,get:()=>__m6_ivhup.Lights});Object.defineProperty(__e,"Blazes",{enumerable:true,configurable:true,get:()=>__m6_ivhup.Blazes});Object.defineProperty(__e,"P",{enumerable:true,configurable:true,get:()=>__m6_ivhup.P});Object.defineProperty(__e,"PF",{enumerable:true,configurable:true,get:()=>__m6_ivhup.PF});Object.defineProperty(__e,"B",{enumerable:true,configurable:true,get:()=>__m6_ivhup.B});Object.defineProperty(__e,"GRAVITY",{enumerable:true,configurable:true,get:()=>__m6_ivhup.GRAVITY});Object.defineProperty(__e,"FIRE_RAMP",{enumerable:true,configurable:true,get:()=>__m6_ivhup.FIRE_RAMP});Object.defineProperty(__e,"SMOKE_RAMP",{enumerable:true,configurable:true,get:()=>__m6_ivhup.SMOKE_RAMP});Object.defineProperty(__e,"sparkle",{enumerable:true,configurable:true,get:()=>__m6_ivhup.sparkle});Object.defineProperty(__e,"flare",{enumerable:true,configurable:true,get:()=>__m6_ivhup.flare});Object.defineProperty(__e,"band",{enumerable:true,configurable:true,get:()=>__m6_ivhup.band});Object.defineProperty(__e,"crystal",{enumerable:true,configurable:true,get:()=>__m6_ivhup.crystal});
const __m7_g1rj8=__r(7);Object.defineProperty(__e,"Painter",{enumerable:true,configurable:true,get:()=>__m7_g1rj8.Painter});
const __m9_yt9vj=__r(8);Object.defineProperty(__e,"FONTS",{enumerable:true,configurable:true,get:()=>__m9_yt9vj.FONTS});Object.defineProperty(__e,"textWidth",{enumerable:true,configurable:true,get:()=>__m9_yt9vj.textWidth});
const __m9_2efxu=__r(9);Object.defineProperty(__e,"createFrame",{enumerable:true,configurable:true,get:()=>__m9_2efxu.createFrame});Object.defineProperty(__e,"clearFrame",{enumerable:true,configurable:true,get:()=>__m9_2efxu.clearFrame});Object.defineProperty(__e,"createFx",{enumerable:true,configurable:true,get:()=>__m9_2efxu.createFx});Object.defineProperty(__e,"composite",{enumerable:true,configurable:true,get:()=>__m9_2efxu.composite});Object.defineProperty(__e,"painterFor",{enumerable:true,configurable:true,get:()=>__m9_2efxu.painterFor});Object.defineProperty(__e,"resolveOptions",{enumerable:true,configurable:true,get:()=>__m9_2efxu.resolveOptions});
const __m11_5abym=__r(10);Object.defineProperty(__e,"stockActor",{enumerable:true,configurable:true,get:()=>__m11_5abym.stockActor});Object.defineProperty(__e,"drawActor",{enumerable:true,configurable:true,get:()=>__m11_5abym.drawActor});Object.defineProperty(__e,"actorAlphaOf",{enumerable:true,configurable:true,get:()=>__m11_5abym.actorAlphaOf});Object.defineProperty(__e,"HERO",{enumerable:true,configurable:true,get:()=>__m11_5abym.HERO});Object.defineProperty(__e,"HERO2",{enumerable:true,configurable:true,get:()=>__m11_5abym.HERO2});Object.defineProperty(__e,"HERO_PAL",{enumerable:true,configurable:true,get:()=>__m11_5abym.HERO_PAL});Object.defineProperty(__e,"DUMMY_PAL",{enumerable:true,configurable:true,get:()=>__m11_5abym.DUMMY_PAL});
const __m11_83gw5=__r(11);Object.defineProperty(__e,"backdrop",{enumerable:true,configurable:true,get:()=>__m11_83gw5.backdrop});Object.defineProperty(__e,"BACKDROPS",{enumerable:true,configurable:true,get:()=>__m11_83gw5.BACKDROPS});
const __m12_jhhlw=__r(12);Object.defineProperty(__e,"createAct",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.createAct});Object.defineProperty(__e,"actBounds",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.actBounds});Object.defineProperty(__e,"actSpan",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.actSpan});Object.defineProperty(__e,"actTiming",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.actTiming});Object.defineProperty(__e,"poseAt",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.poseAt});Object.defineProperty(__e,"lerpPose",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.lerpPose});Object.defineProperty(__e,"Target",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.Target});Object.defineProperty(__e,"STAND",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.STAND});Object.defineProperty(__e,"SKINS",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.SKINS});Object.defineProperty(__e,"posed",{enumerable:true,configurable:true,get:()=>__m12_jhhlw.posed});
const __m14_1x29q=__r(13);Object.defineProperty(__e,"skeleton",{enumerable:true,configurable:true,get:()=>__m14_1x29q.skeleton});Object.defineProperty(__e,"posedParts",{enumerable:true,configurable:true,get:()=>__m14_1x29q.posedParts});
const __m14_dtaqq=__r(14);Object.defineProperty(__e,"READY",{enumerable:true,configurable:true,get:()=>__m14_dtaqq.READY});
const __m15_eqtyq=__r(15);Object.defineProperty(__e,"chain",{enumerable:true,configurable:true,get:()=>__m15_eqtyq.chain});Object.defineProperty(__e,"shiftKeys",{enumerable:true,configurable:true,get:()=>__m15_eqtyq.shiftKeys});Object.defineProperty(__e,"shiftHits",{enumerable:true,configurable:true,get:()=>__m15_eqtyq.shiftHits});
},
function(__e){Object.defineProperty(__e,"TAU",{enumerable:true,configurable:true,get:()=>TAU});Object.defineProperty(__e,"clamp",{enumerable:true,configurable:true,get:()=>clamp});Object.defineProperty(__e,"lerp",{enumerable:true,configurable:true,get:()=>lerp});Object.defineProperty(__e,"invLerp",{enumerable:true,configurable:true,get:()=>invLerp});Object.defineProperty(__e,"remap",{enumerable:true,configurable:true,get:()=>remap});Object.defineProperty(__e,"fract",{enumerable:true,configurable:true,get:()=>fract});Object.defineProperty(__e,"wrap",{enumerable:true,configurable:true,get:()=>wrap});Object.defineProperty(__e,"seg",{enumerable:true,configurable:true,get:()=>seg});Object.defineProperty(__e,"smooth",{enumerable:true,configurable:true,get:()=>smooth});Object.defineProperty(__e,"bump",{enumerable:true,configurable:true,get:()=>bump});Object.defineProperty(__e,"pingpong",{enumerable:true,configurable:true,get:()=>pingpong});Object.defineProperty(__e,"dist",{enumerable:true,configurable:true,get:()=>dist});Object.defineProperty(__e,"angleTo",{enumerable:true,configurable:true,get:()=>angleTo});Object.defineProperty(__e,"ease",{enumerable:true,configurable:true,get:()=>ease});Object.defineProperty(__e,"hash",{enumerable:true,configurable:true,get:()=>hash});Object.defineProperty(__e,"rand",{enumerable:true,configurable:true,get:()=>rand});Object.defineProperty(__e,"Rng",{enumerable:true,configurable:true,get:()=>Rng});Object.defineProperty(__e,"rng",{enumerable:true,configurable:true,get:()=>rng});Object.defineProperty(__e,"noise",{enumerable:true,configurable:true,get:()=>noise});Object.defineProperty(__e,"noise2",{enumerable:true,configurable:true,get:()=>noise2});Object.defineProperty(__e,"fbm",{enumerable:true,configurable:true,get:()=>fbm});Object.defineProperty(__e,"tileNoise",{enumerable:true,configurable:true,get:()=>tileNoise});Object.defineProperty(__e,"tileFbm",{enumerable:true,configurable:true,get:()=>tileFbm});Object.defineProperty(__e,"loopNoise",{enumerable:true,configurable:true,get:()=>loopNoise});
const TAU = Math.PI * 2;
const clamp = (x, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
const lerp = (a, b, t) => a + (b - a) * t;
const invLerp = (a, b, x) => (b === a ? 0 : (x - a) / (b - a));
const remap = (x, a0, a1, b0, b1) => lerp(b0, b1, invLerp(a0, a1, x));
const fract = (x) => x - Math.floor(x);
const wrap = (x, m) => ((x % m) + m) % m;
const seg = (t, t0, t1) => clamp((t - t0) / (t1 - t0));
const smooth = (e0, e1, x) => {
  const t = seg(x, e0, e1);
  return t * t * (3 - 2 * t);
};
const bump = (t, t0, t1) => (t <= t0 || t >= t1 ? 0 : Math.sin(Math.PI * seg(t, t0, t1)));
const pingpong = (x) => 1 - Math.abs(wrap(x, 2) - 1);
const dist = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
const angleTo = (x0, y0, x1, y1) => Math.atan2(y1 - y0, x1 - x0);
const ease = {
  linear: (t) => t,
  inQuad: (t) => t * t,
  outQuad: (t) => 1 - (1 - t) * (1 - t),
  inOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  inCubic: (t) => t * t * t,
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  inQuart: (t) => t * t * t * t,
  outQuart: (t) => 1 - Math.pow(1 - t, 4),
  inExpo: (t) => (t <= 0 ? 0 : Math.pow(2, 10 * t - 10)),
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
  outSine: (t) => Math.sin((t * Math.PI) / 2),
  inOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  inBack: (t, s = 1.70158) => (t <= 0 ? 0 : t >= 1 ? 1 : (s + 1) * t * t * t - s * t * t),
  outBack: (t, s = 1.70158) => (t <= 0 ? 0 : t >= 1 ? 1 : 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2)),
  outElastic: (t) => (t <= 0 ? 0 : t >= 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1),
  outBounce: (t) => {
    const n = 7.5625, d = 2.75;
    if (t < 1 / d) return n * t * t;
    if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
    if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
    return n * (t -= 2.625 / d) * t + 0.984375;
  },
};
function hash(...ns) {
  let h = 0x9e3779b9;
  for (const n of ns) {
    h = Math.imul(h ^ (n | 0), 0x85ebca6b);
    h ^= h >>> 13;
    h = Math.imul(h, 0xc2b2ae35);
    h ^= h >>> 16;
  }
  return h >>> 0;
}
const rand = (...ns) => hash(...ns) / 4294967296;
class Rng {
  constructor(seed = 1) {
    this.s = seed >>> 0 || 1;
  }
  next() {
    let t = (this.s = (this.s + 0x6d2b79f5) >>> 0);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  range(a, b) {
    return a + (b - a) * this.next();
  }
  int(a, b) {
    return Math.floor(this.range(a, b + 1));
  }
  chance(p) {
    return this.next() < p;
  }
  sign() {
    return this.next() < 0.5 ? -1 : 1;
  }
  pick(list) {
    return list[Math.floor(this.next() * list.length)];
  }
  gauss() {
    return (this.next() + this.next() + this.next() + this.next() - 2) * 1.732;
  }
}
const rng = (...ns) => new Rng(hash(...ns));
function noise(x, seed = 0) {
  const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
  return lerp(rand(i, seed), rand(i + 1, seed), u) * 2 - 1;
}
function noise2(x, y, seed = 0) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = rand(ix, iy, seed), b = rand(ix + 1, iy, seed), c = rand(ix, iy + 1, seed), d = rand(ix + 1, iy + 1, seed);
  return lerp(lerp(a, b, ux), lerp(c, d, ux), uy) * 2 - 1;
}
function fbm(x, y, seed = 0, octaves = 3) {
  let s = 0, a = 0.5, n = 0;
  for (let o = 0; o < octaves; o++) {
    s += noise2(x, y, seed + o * 101) * a;
    n += a;
    x *= 2.03;
    y *= 2.03;
    a *= 0.5;
  }
  return s / n;
}
function tileNoise(x, y, px = 0, py = 0, seed = 0) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const x0 = px ? wrap(ix, px) : ix, x1 = px ? wrap(ix + 1, px) : ix + 1;
  const y0 = py ? wrap(iy, py) : iy, y1 = py ? wrap(iy + 1, py) : iy + 1;
  const a = rand(x0, y0, seed), b = rand(x1, y0, seed), c = rand(x0, y1, seed), d = rand(x1, y1, seed);
  return lerp(lerp(a, b, ux), lerp(c, d, ux), uy) * 2 - 1;
}
function tileFbm(x, y, px = 0, py = 0, seed = 0, octaves = 3) {
  let s = 0, a = 0.5, n = 0, k = 1;
  for (let o = 0; o < octaves; o++) {
    s += tileNoise(x * k, y * k, px * k, py * k, seed + o * 101) * a;
    n += a;
    a *= 0.5;
    k *= 2;
  }
  return s / n;
}
function loopNoise(phase, radius = 1, seed = 0) {
  const a = phase * TAU;
  return noise2(Math.cos(a) * radius + 50, Math.sin(a) * radius + 50, seed);
}
},
function(__e){Object.defineProperty(__e,"rgb",{enumerable:true,configurable:true,get:()=>rgb});Object.defineProperty(__e,"red",{enumerable:true,configurable:true,get:()=>red});Object.defineProperty(__e,"green",{enumerable:true,configurable:true,get:()=>green});Object.defineProperty(__e,"blue",{enumerable:true,configurable:true,get:()=>blue});Object.defineProperty(__e,"hex",{enumerable:true,configurable:true,get:()=>hex});Object.defineProperty(__e,"toHex",{enumerable:true,configurable:true,get:()=>toHex});Object.defineProperty(__e,"mix",{enumerable:true,configurable:true,get:()=>mix});Object.defineProperty(__e,"scale",{enumerable:true,configurable:true,get:()=>scale});Object.defineProperty(__e,"luma",{enumerable:true,configurable:true,get:()=>luma});Object.defineProperty(__e,"ramp",{enumerable:true,configurable:true,get:()=>ramp});Object.defineProperty(__e,"fit",{enumerable:true,configurable:true,get:()=>fit});Object.defineProperty(__e,"at",{enumerable:true,configurable:true,get:()=>at});Object.defineProperty(__e,"blend",{enumerable:true,configurable:true,get:()=>blend});Object.defineProperty(__e,"PAL",{enumerable:true,configurable:true,get:()=>PAL});Object.defineProperty(__e,"RAMP",{enumerable:true,configurable:true,get:()=>RAMP});Object.defineProperty(__e,"WHITE",{enumerable:true,configurable:true,get:()=>WHITE});Object.defineProperty(__e,"BLACK",{enumerable:true,configurable:true,get:()=>BLACK});Object.defineProperty(__e,"INK",{enumerable:true,configurable:true,get:()=>INK});Object.defineProperty(__e,"PATCH",{enumerable:true,configurable:true,get:()=>PATCH});
const __i70lpyn=__r(2);const clamp=__i70lpyn.clamp;
const rgb = (r, g, b) => (255 << 24) | ((b & 255) << 16) | ((g & 255) << 8) | (r & 255);
const red = (c) => c & 255;
const green = (c) => (c >>> 8) & 255;
const blue = (c) => (c >>> 16) & 255;
function hex(h) {
  if (typeof h === "number") return h;
  let s = h.replace("#", "");
  if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  const v = parseInt(s.slice(0, 6), 16);
  return rgb((v >> 16) & 255, (v >> 8) & 255, v & 255);
}
const toHex = (c) => "#" + [red(c), green(c), blue(c)].map((v) => v.toString(16).padStart(2, "0")).join("");
function mix(a, b, t) {
  t = clamp(t);
  return rgb(red(a) + (red(b) - red(a)) * t, green(a) + (green(b) - green(a)) * t, blue(a) + (blue(b) - blue(a)) * t);
}
const scale = (c, k) => rgb(Math.min(255, red(c) * k), Math.min(255, green(c) * k), Math.min(255, blue(c) * k));
const luma = (c) => (0.299 * red(c) + 0.587 * green(c) + 0.114 * blue(c)) / 255;
const ramp = (list) => list.map(hex);
function fit(r, n) {
  r = r.map(hex);
  if (r.length === n) return r;
  return Array.from({ length: n }, (_, i) => r[Math.round((i * (r.length - 1)) / Math.max(1, n - 1))]);
}
const at = (r, t) => r[clamp(Math.floor(t * r.length), 0, r.length - 1)];
function blend(r, t) {
  const x = clamp(t) * (r.length - 1), i = Math.min(r.length - 2, Math.floor(x));
  return mix(r[i], r[i + 1], x - i);
}


const PAL = {
  fire: ["#1f0b10", "#4a1118", "#8c1d1c", "#cc3a1a", "#f2701f", "#ffae35", "#ffe27a", "#fff8d6"],
  ember: ["#1a0a0e", "#3d1012", "#701a14", "#a8301a", "#e0561e", "#ff8a2a", "#ffc46a"],
  lava: ["#14060a", "#380a10", "#6e1210", "#ac2410", "#e8501a", "#ff8c2a", "#ffd25a"],
  smoke: ["#0e0c12", "#1d1a22", "#2e2a35", "#433e4b", "#5c5664", "#7b7484", "#a39cab"],
  dust: ["#1c1610", "#33281c", "#4f3f2c", "#6e5a40", "#927a58", "#b89f78", "#dcc8a2"],
  ice: ["#0c1430", "#162c5c", "#1f4f94", "#2f7fcc", "#58b4ec", "#9bdcff", "#d8f4ff", "#ffffff"],
  water: ["#081830", "#0e2e5a", "#14508c", "#1c76bc", "#36a2e0", "#78ccf4", "#c4ecff", "#ffffff"],
  electric: ["#0a0f2e", "#172a78", "#2550d0", "#3f8cff", "#7cc8ff", "#c8f0ff", "#ffffff"],
  volt: ["#24160a", "#5e3a0c", "#a8680f", "#e8a218", "#ffd23c", "#fff08a", "#ffffff"],
  poison: ["#0d1a0c", "#173a14", "#265e18", "#3f8a1e", "#6cb82a", "#a8e04a", "#e0ff8a"],
  holy: ["#2a1c08", "#5a3e10", "#9a6c18", "#d8a428", "#ffd84a", "#fff09a", "#fffbe6", "#ffffff"],
  heal: ["#08201a", "#0f3f2c", "#17663e", "#24924e", "#3ec466", "#7ee88a", "#c8ffc4", "#ffffff"],
  arcane: ["#140a26", "#2b1252", "#481c88", "#6b2cc0", "#9a48ec", "#c684ff", "#ecc8ff", "#ffffff"],
  shadow: ["#050308", "#0f0a18", "#1c1230", "#2c1a4a", "#432468", "#5e3290", "#8048b8", "#a970e0"],
  blood: ["#14040a", "#3a0a14", "#6a101c", "#a01824", "#d42a30", "#ff5a50", "#ff9a8a"],
  earth: ["#140e0a", "#2a1e14", "#47321e", "#69492a", "#8e6638", "#b88a52", "#dcb47c"],
  stone: ["#0e0e12", "#1c1c24", "#2c2c38", "#42424f", "#5c5c6b", "#7d7d8c", "#a4a4b2", "#d0d0da"],
  gold: ["#1e1206", "#4a2c08", "#86520c", "#c48412", "#f0b424", "#ffe066", "#fff6c4", "#ffffff"],
  leaf: ["#0c1a0e", "#163418", "#225224", "#357530", "#4f9a3a", "#7cc048", "#b4e070", "#e4ffb0"],
  wood: ["#160c06", "#2e1a0c", "#4a2c14", "#6a421e", "#8e5c2c", "#b47c40", "#d8a464"],
  metal: ["#0c0e14", "#1c2230", "#2e3648", "#4a5468", "#6e7a90", "#9aa6ba", "#d0d8e6", "#ffffff"],
  bone: ["#1a1814", "#3a352c", "#5e5648", "#8a806c", "#b8ad96", "#e4dcc8", "#fffaf0"],
  neon: ["#1a0516", "#3d0a33", "#701560", "#b0228f", "#f53cd1", "#ff86e6", "#ffd2f6", "#ffffff"],
  cyber: ["#041418", "#08303a", "#0c5260", "#108088", "#18b4b0", "#4ce8d8", "#b4fff0", "#ffffff"],
  matrix: ["#020a04", "#05200c", "#0a3c16", "#106624", "#1a9a34", "#3cd650", "#a4ffa8", "#e8ffe8"],
  candy: ["#ff4a5a", "#ff9a2a", "#ffe03c", "#5ad84a", "#3cc8ff", "#7a6cff", "#f53cd1"],
  night: ["#07060d", "#0c0a18", "#131026", "#1b1734", "#241f44", "#2f2956"],
};
const RAMP = Object.fromEntries(Object.entries(PAL).map(([k, v]) => [k, ramp(v)]));
const WHITE = hex("#ffffff");
const BLACK = hex("#000000");
const INK = hex("#0b0a10");
const PATCH = hex("#f53cd1");
},
function(__e){Object.defineProperty(__e,"fly",{enumerable:true,configurable:true,get:()=>fly});Object.defineProperty(__e,"flyV",{enumerable:true,configurable:true,get:()=>flyV});Object.defineProperty(__e,"burst",{enumerable:true,configurable:true,get:()=>burst});Object.defineProperty(__e,"cycle",{enumerable:true,configurable:true,get:()=>cycle});Object.defineProperty(__e,"stream",{enumerable:true,configurable:true,get:()=>stream});Object.defineProperty(__e,"Particles",{enumerable:true,configurable:true,get:()=>Particles});
const __i4szcwx=__r(2);const rng=__i4szcwx.rng;const clamp=__i4szcwx.clamp;
function fly(x, y, vx, vy, t, g = 0, drag = 0) {
  if (drag <= 0) return [x + vx * t, y + vy * t + 0.5 * g * t * t];
  const f = (1 - Math.exp(-drag * t)) / drag, vt = g / drag;
  return [x + vx * f, y + vt * t + (vy - vt) * f];
}
function flyV(vx, vy, t, g = 0, drag = 0) {
  if (drag <= 0) return [vx, vy + g * t];
  const e = Math.exp(-drag * t), vt = g / drag;
  return [vx * e, vt + (vy - vt) * e];
}
function burst(n, seed, fn) {
  for (let i = 0; i < n; i++) fn(rng(seed, i), i);
}
function cycle(t, period, count, seed, life, fn) {
  for (let i = 0; i < count; i++) {
    const g = rng(seed, i, 911);
    const born = g.next() * period;
    const L = typeof life === "function" ? life(g) : life;
    let age = (((t - born) % period) + period) % period;
    for (; age < L; age += period) fn(age, L, rng(seed, i), i);
  }
}
function stream(t, t0, t1, rate, seed, life, fn) {
  const n = Math.floor((Math.min(t, t1) - t0) * rate);
  for (let i = 0; i <= n; i++) {
    const born = t0 + i / rate, g = rng(seed, i, 911), L = typeof life === "function" ? life(g) : life;
    const age = t - born;
    if (age >= 0 && age < L) fn(age, L, rng(seed, i), i);
  }
}
class Particles {
  constructor() {
    this.list = [];
  }
  add(p) {
    p.age = 0;
    p.g ??= 0;
    p.drag ??= 0;
    this.list.push(p);
    return p;
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      if ((p.age += dt) >= p.life) {
        this.list.splice(i, 1);
        continue;
      }
      p.vx -= p.vx * p.drag * dt;
      p.vy += p.g * dt - p.vy * p.drag * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.ground !== undefined && p.y > p.ground) {
        p.y = p.ground;
        p.vy = -Math.abs(p.vy) * (p.bounce ?? 0.3);
        p.vx *= 0.7;
      }
    }
  }
  static k(p) {
    return clamp(1 - p.age / p.life);
  }
}
},
function(__e){Object.defineProperty(__e,"bolt",{enumerable:true,configurable:true,get:()=>bolt});Object.defineProperty(__e,"forks",{enumerable:true,configurable:true,get:()=>forks});Object.defineProperty(__e,"star",{enumerable:true,configurable:true,get:()=>star});Object.defineProperty(__e,"ngon",{enumerable:true,configurable:true,get:()=>ngon});Object.defineProperty(__e,"trail",{enumerable:true,configurable:true,get:()=>trail});
const __it273ff=__r(2);const TAU=__it273ff.TAU;
function bolt(r, x0, y0, x1, y1, { jag = 0.22, depth = 5 } = {}) {
  let pts = [[x0, y0], [x1, y1]];
  for (let d = 0; d < depth; d++) {
    const next = [pts[0]];
    for (let i = 1; i < pts.length; i++) {
      const [ax, ay] = pts[i - 1], [bx, by] = pts[i], dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy);
      const off = (r.next() * 2 - 1) * jag * L;
      next.push([(ax + bx) / 2 + (-dy / (L || 1)) * off, (ay + by) / 2 + (dx / (L || 1)) * off], pts[i]);
    }
    pts = next;
  }
  return pts;
}
function forks(r, path, { count = 3, len = 20, jag = 0.3, spread = 0.9 } = {}) {
  const out = [];
  for (let k = 0; k < count; k++) {
    const i = 1 + Math.floor(r.next() * (path.length - 2)), [x, y] = path[i], [px, py] = path[i - 1];
    const a = Math.atan2(y - py, x - px) + (r.next() < 0.5 ? -1 : 1) * spread * (0.4 + 0.6 * r.next());
    const l = len * (0.4 + 0.6 * r.next());
    out.push(bolt(r, x, y, x + Math.cos(a) * l, y + Math.sin(a) * l, { jag, depth: 3 }));
  }
  return out;
}
function star(cx, cy, r0, r1, n = 5, rot = -Math.PI / 2) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const a = rot + (i * Math.PI) / n, r = i % 2 ? r0 : r1;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return pts;
}
function ngon(cx, cy, r, n = 6, rot = 0) {
  return Array.from({ length: n }, (_, i) => [cx + Math.cos(rot + (i * TAU) / n) * r, cy + Math.sin(rot + (i * TAU) / n) * r]);
}
function trail(pos, t, n, dt) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(pos(Math.max(0, t - i * dt)));
  return out;
}
},
function(__e){Object.defineProperty(__e,"GRAVITY",{enumerable:true,configurable:true,get:()=>GRAVITY});Object.defineProperty(__e,"FIRE_RAMP",{enumerable:true,configurable:true,get:()=>FIRE_RAMP});Object.defineProperty(__e,"SMOKE_RAMP",{enumerable:true,configurable:true,get:()=>SMOKE_RAMP});Object.defineProperty(__e,"P",{enumerable:true,configurable:true,get:()=>P});Object.defineProperty(__e,"PF",{enumerable:true,configurable:true,get:()=>PF});Object.defineProperty(__e,"Particles",{enumerable:true,configurable:true,get:()=>Particles});Object.defineProperty(__e,"Blazes",{enumerable:true,configurable:true,get:()=>Blazes});Object.defineProperty(__e,"B",{enumerable:true,configurable:true,get:()=>B});Object.defineProperty(__e,"Bits",{enumerable:true,configurable:true,get:()=>Bits});Object.defineProperty(__e,"Lights",{enumerable:true,configurable:true,get:()=>Lights});Object.defineProperty(__e,"sparkle",{enumerable:true,configurable:true,get:()=>sparkle});Object.defineProperty(__e,"flare",{enumerable:true,configurable:true,get:()=>flare});Object.defineProperty(__e,"band",{enumerable:true,configurable:true,get:()=>band});Object.defineProperty(__e,"crystal",{enumerable:true,configurable:true,get:()=>crystal});
const __i2qku60=__r(2);const Rng=__i2qku60.Rng;const clamp=__i2qku60.clamp;const TAU=__i2qku60.TAU;
const __iwx8r7b=__r(3);const hex=__iwx8r7b.hex;const scale=__iwx8r7b.scale;const mix=__iwx8r7b.mix;const rgb=__iwx8r7b.rgb;const WHITE=__iwx8r7b.WHITE;
const GRAVITY = 950; // px/s²
const CROSS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const DIAG = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
const HOT = ["#fff3a6", "#ffe26b", "#ff8a2a", "#f2561d"].map(hex);
const FIRE_RAMP = ["#ffffff", "#fff3a6", "#ffe26b", "#ffc23d", "#ff8a2a", "#f2561d", "#c9281f", "#8a1f17", "#4a1712"].map(hex);
const SMOKE_RAMP = ["#7b6f72", "#5d5660", "#433d48", "#2b2630", "#1a171e"].map(hex);
const rampAt = (r, t) => r[Math.min(r.length - 1, Math.max(0, Math.floor(t * r.length)))];
const P = { SPARK: 0, MOTE: 1, STREAK: 2, FLAKE: 3, VAPOUR: 4, DUST: 5, STAR: 6, EMBER: 7, SMOKE: 8, FIRE: 9, BRAND: 10, GRIT: 11 };
const PF = { SMOKES: 1, BIG: 2, BACK: 4 };
const SOFT = new Set([P.VAPOUR, P.DUST, P.SMOKE]);
class Particles {
  constructor(opts = {}) {
    this.R = opts.rng ?? new Rng(opts.seed ?? 1);
    this.list = [];
    this.t = 0;
    this.ground = opts.ground ?? (() => Infinity);
    this.sparks = (opts.sparks ?? HOT).map(hex);
    this.haze = opts.haze === undefined ? null : hex(opts.haze);
    this.onLand = opts.onLand ?? null; // (x, y) when a BRAND hits the floor
  }
  spawn(k, x, y, vx, vy, life, col = WHITE, size = 1, delay = 0, flag = 0) {
    this.list.push({ k, x, y, vx, vy, life, max: life, col: col ? hex(col) : 0, size, seed: this.R.next() * 100, delay, flag });
  }
  get count() {
    return this.list.length;
  }
  update(dt) {
    this.t += dt;
    const R = this.R, t = this.t;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      if (p.delay > 0) {
        p.delay -= dt;
        continue;
      }
      if ((p.life -= dt) <= 0) {
        if (p.k === P.FIRE && p.flag & PF.SMOKES) {
          const big = p.flag & PF.BIG;
          this.spawn(P.SMOKE, p.x, p.y, p.vx * 0.6, p.vy * 0.6 - 6, big ? R.range(1.3, 2.3) : R.range(0.8, 1.4), 0, p.size * (big ? 0.85 : 0.7), 0, big ? PF.BIG : 0);
        }
        this.list.splice(i, 1);
        continue;
      }
      switch (p.k) {
        case P.FIRE:
          p.vy -= 95 * dt;
          p.vx += Math.sin(t * 17 + p.seed) * 30 * dt;
          p.vx -= p.vx * 5 * dt;
          p.vy -= p.vy * 3.2 * dt;
          break;
        case P.GRIT: {
          p.vy += GRAVITY * dt;
          p.vx -= p.vx * 0.8 * dt;
          const g = this.ground(p.x), ny = p.y + p.vy * dt;
          p.x += p.vx * dt;
          if (p.vy > 0 && p.y <= g && ny >= g) {
            p.y = g - 0.25;
            if (p.vy > 130 && R.chance(0.4)) (p.vy = -p.vy * 0.25), (p.vx = p.vx * 0.5 + R.range(-10, 10));
            else (p.vx = p.vy = 0), (p.life = Math.min(p.life, 0.5));
          } else p.y = ny;
          continue;
        }
        case P.BRAND: {

          p.vy += GRAVITY * 0.8 * dt;
          p.vx -= p.vx * 0.9 * dt;
          if (R.chance(0.9 * Math.min(1, dt * 60))) this.spawn(P.FIRE, p.x, p.y, p.vx * 0.1 + R.range(-7, 7), p.vy * 0.1 - 10, R.range(0.16, 0.32), 0, R.range(0.9, 1.7) * (0.5 + (p.life / p.max) * 0.6), 0, R.chance(0.4) ? PF.SMOKES : 0);
          const g = this.ground(p.x), ny = p.y + p.vy * dt;
          p.x += p.vx * dt;
          if (p.vy > 0 && p.y <= g && ny >= g) {
            this.onLand?.(p.x, g);
            this.list.splice(i, 1);
          } else p.y = ny;
          continue;
        }
        case P.SPARK: {
          p.vy += GRAVITY * 0.45 * dt;
          p.vx -= p.vx * 2.2 * dt;
          p.vy -= p.vy * 2.2 * dt;
          const g = this.ground(p.x), ny = p.y + p.vy * dt;
          p.x += p.vx * dt;
          if (p.vy > 0 && p.y <= g && ny >= g) (p.vy = -p.vy * 0.45), (p.vx *= 0.7), (p.y = g - 0.25);
          else p.y = ny;
          continue;
        }
        case P.STREAK: (p.vx += p.vx * 3 * dt), (p.vy += p.vy * 3 * dt); break;
        case P.FLAKE:
          p.vx -= p.vx * 2.2 * dt;
          p.vy -= p.vy * 2.2 * dt - 35 * dt;
          p.x += Math.sin(this.t * 2.5 + p.seed) * 7 * dt;
          break;
        case P.EMBER:
          p.vy += (-30 + Math.sin(t * 3 + p.seed) * 20) * dt;
          p.vx += Math.cos(t * 2.3 + p.seed) * 45 * dt;
          p.vx -= p.vx * 1.6 * dt;
          p.vy -= p.vy * 1.6 * dt;
          break;
        case P.SMOKE: {
          const big = p.flag & PF.BIG;
          p.vy -= (big ? 23 : 16) * dt;
          p.vx += Math.sin(t * 1.3 + p.seed) * 8 * dt;
          p.vx -= p.vx * 1.6 * dt;
          p.vy -= p.vy * 1.2 * dt;
          break;
        }
        case P.MOTE: p.vx -= p.vx * 0.6 * dt; p.vy -= p.vy * 0.6 * dt; break;
        default: {
          const drag = SOFT.has(p.k) ? 4 : 1.6;
          p.vx -= p.vx * drag * dt;
          p.vy -= p.vy * drag * dt + 5 * dt;
        }
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
  }
  draw(p, layer) {
    for (const q of this.list) {
      if (q.delay > 0) continue;
      if (layer && (SOFT.has(q.k) || q.flag & PF.BACK ? "back" : "front") !== layer) continue;
      const k = q.life / q.max, x = q.x, y = q.y, sp = Math.hypot(q.vx, q.vy) || 1, ux = q.vx / sp, uy = q.vy / sp;
      switch (q.k) {
        case P.SPARK: {
          const S = this.sparks, head = k > 0.6 ? S[0] : k > 0.3 ? S[1] : S[2], len = Math.min(9, 1 + sp * 0.022);
          p.line(x - ux * len, y - uy * len, x - ux * len * 0.4, y - uy * len * 0.4, k > 0.5 ? head : S[S.length - 1]);
          p.line(x - ux * len * 0.45, y - uy * len * 0.45, x, y, head);
          p.glow(x, y, 3, head, 0.45 * k);
          break;
        }
        case P.MOTE: {
          const len = Math.min(16, 0.5 + sp * 0.026) * q.size, a = k < 0.35 ? k / 0.35 : 1;
          p.line(x - ux * len, y - uy * len, x - ux * len * 0.35, y - uy * len * 0.35, scale(q.col, 0.55), a);
          p.line(x - ux * len * 0.4, y - uy * len * 0.4, x, y, q.col, a);
          p.glow(x, y, 2.5 + q.size, q.col, 0.4 * k);
          break;
        }
        case P.STREAK: {
          const L = clamp(sp / 30, 1, 7);
          for (let d = L; d >= 0; d -= 0.5) p.dot(x - ux * d, y - uy * d, d < 1 ? WHITE : d < L * 0.5 ? q.col : scale(q.col, 0.6), d < L * 0.5 ? 1 : 1.2 - d / L);
          p.glow(x, y, 4, q.col, 0.4);
          break;
        }
        case P.FLAKE: {
          const a = Math.min(1, k * 3);
          p.dot(x, y, q.col, a);
          if (q.size > 1.3) for (const [dx, dy] of CROSS) p.dot(x + dx, y + dy, scale(q.col, 0.8), a * 0.8);
          break;
        }
        case P.VAPOUR: {
          const r = q.size * (0.6 + (1 - k) * 0.9);
          p.disc(x, y, r, q.col, Math.pow(k, 1.3) * 0.45);
          if (this.haze) p.glow(x, y, r * 1.8, this.haze, 0.16 * k);
          break;
        }
        case P.DUST: p.disc(x, y, q.size * (0.6 + (1 - k) * 0.9), q.col, Math.pow(k, 1.3) * 0.7); break;
        case P.SMOKE: {

          const age = 1 - k, big = q.flag & PF.BIG;
          const r = q.size * (0.65 + Math.min(1, age * 2.5) * 0.45 + age * (big ? 0.5 : 0.4));
          const a = Math.min(1, age * 12) * Math.min(1, k * 2.4) * (big ? 0.7 : 0.58);
          const c = q.col ? mix(q.col, rampAt(SMOKE_RAMP, age), age) : rampAt(SMOKE_RAMP, age * 1.05);
          p.disc(x, y, r, c, a * 0.45);
          p.disc(x + r * 0.05, y + r * 0.06, r * 0.74, c, a * 0.62);
          if (age < 0.5) p.disc(x - r * 0.22, y - r * 0.3, r * 0.5, mix(c, WHITE, 0.12), a * 0.4 * (1 - age * 2));
          break;
        }
        case P.FIRE: {

          const age = 1 - k, heat = Math.min(0.999, Math.pow(age, 0.62) + (q.seed % 1) * 0.1), F = FIRE_RAMP, n = F.length;
          const idx = Math.min(n - 2, Math.floor(heat * (n - 1)));
          const r = q.size * (0.55 + 0.45 * Math.min(1, age * 7)) * (1 - age * 0.55), c = F[idx];
          if (idx >= n - 2) p.disc(x, y, r, c, Math.min(1, k * 3) * 0.85);
          else {
            p.circle(x, y, r, F[Math.min(n - 1, idx + 2)]);
            p.circle(x - r * 0.16, y - r * 0.22, r * 0.78, c);
            if (r > 1.6) p.circle(x, y - r * 0.9, r * 0.42, c);
            if (idx <= 3 && r > 1.8) p.circle(x - r * 0.28, y - r * 0.34, r * 0.36, F[Math.max(0, idx - 1)]);
            if (idx < 6) p.glow(x, y, r * 2.4 + 2, c, 0.18 * k);
          }
          break;
        }
        case P.BRAND:
          p.circle(x, y, 1.6, HOT[3]);
          p.px(x, y, Math.sin(this.t * 40 + q.seed) > 0 ? HOT[0] : HOT[1]);
          p.px(x + 1, y, HOT[1]);
          p.glow(x, y, 7, HOT[2], 0.45);
          break;
        case P.GRIT:
          if (k > 0.25 || k * 4 > 0.5) {
            p.px(x, y, q.col);
            if (q.size >= 2) p.px(x + 1, y, q.col), p.px(x, y + 1, scale(q.col, 0.8)), p.px(x + 1, y + 1, scale(q.col, 0.7));
          }
          break;
        case P.EMBER: {
          const c = k > 0.6 ? this.sparks[0] : k > 0.3 ? this.sparks[1] : this.sparks[2];
          if (k < 0.25 && Math.sin(this.t * 40 + q.seed) < 0) break;
          p.px(x, y, c);
          if (q.size > 1.5) p.px(x, y + 1, this.sparks[this.sparks.length - 1]);
          p.glow(x, y, 3 + q.size, c, 0.35 * k);
          break;
        }
        default: {

          const tw = 0.6 + 0.4 * Math.sin(this.t * (8 + (q.seed % 5)) + q.seed);
          if (q.size < 1) {
            if (tw * k > 0.25) p.px(x, y, tw > 0.8 ? WHITE : q.col);
            p.glow(x, y, 3, q.col, 0.4 * k * tw);
            break;
          }
          sparkle(p, x, y, q.size * tw * Math.min(1, k * 3), q.col, scale(q.col, 0.75), 0.5 * k * tw);
        }
      }
    }
  }
}
class Blazes {
  constructor(ps) {
    this.ps = ps;
    this.list = [];
  }
  add(x, y, life, power) {
    this.list.push({ x, y, life, max: life, acc: this.ps.R.next(), power });
  }
  get count() {
    return this.list.length;
  }
  update(dt) {
    const ps = this.ps, R = ps.R;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const b = this.list[i];
      if ((b.life -= dt) <= 0) {
        this.list.splice(i, 1);
        continue;
      }
      const k = b.life / b.max, intensity = b.power * (k > 0.7 ? 1 : 0.35 + (k / 0.7) * 0.65);
      for (b.acc += dt * (6 + 16 * intensity); b.acc > 1; b.acc--) {
        const s = R.range(1.2, 2.8) * intensity;
        ps.spawn(P.FIRE, b.x + R.range(-1.5, 1.5), b.y - s * 0.6, R.range(-6, 6), R.range(-30, -12), R.range(0.28, 0.6), 0, s, 0, PF.BACK | (R.chance(0.3) ? PF.SMOKES : 0));
        if (R.chance(0.06)) ps.spawn(P.EMBER, b.x, b.y - 1.5, R.range(-15, 15), R.range(-45, -15), R.range(0.6, 1.4), HOT[2], 1, 0, PF.BACK);
      }
    }
  }
  drawBack(p) {
    for (const b of this.list) {
      const k = b.life / b.max;
      p.px(b.x, b.y, k > 0.4 ? (Math.sin(b.life * 31 + b.x) > 0 ? HOT[1] : HOT[2]) : HOT[3]);
      p.glow(b.x, b.y, 6 + 5 * k * b.power, HOT[2], 0.3 * k * b.power);
    }
  }
}
const B = { SHARD: 0, CHUNK: 1, DRIP: 2 };
class Bits {
  constructor(opts = {}) {
    this.list = [];
    this.ground = opts.ground ?? (() => Infinity);
  }
  add(b) {
    const life = b.life ?? 1;
    this.list.push({ kind: B.SHARD, vx: 0, vy: 0, a: 0, va: 0, s: 1, c: WHITE, g: 1, drag: 0, bounce: 0, rest: false, ...b, life, max: life });
  }
  get count() {
    return this.list.length;
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const b = this.list[i];
      if ((b.life -= dt) <= 0) {
        this.list.splice(i, 1);
        continue;
      }
      if (b.rest) continue;
      b.vy += GRAVITY * b.g * dt;
      b.vx -= b.vx * b.drag * dt;
      b.vy -= b.vy * b.drag * dt;
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.a += b.va * dt;
      const floor = this.ground(b.x), sp = b.vy;
      if (b.g <= 0 || b.y < floor || sp <= 0) continue;
      b.y = floor - 0.01;
      if (b.kind === B.DRIP) b.life = 0;
      else if (b.bounce > 0 && sp > 70) (b.vy = -sp * b.bounce), (b.vx *= 0.7), (b.va *= 0.6);
      else (b.rest = true), (b.vx = b.vy = 0);
    }
  }
  draw(p) {
    for (const b of this.list) {
      const a = Math.min(1, b.life / 0.4), ca = Math.cos(b.a), sa = Math.sin(b.a);
      if (b.kind === B.SHARD) {
        for (let d = -b.s / 2; d <= b.s / 2; d += 0.5) p.dot(b.x + ca * d, b.y + sa * d, d > b.s / 2 - 0.6 ? WHITE : hex(b.c), a);
      } else if (b.kind === B.DRIP) {
        p.dot(b.x, b.y, hex(b.c), a);
        p.dot(b.x, b.y - 1, hex(b.c), a * 0.5);
      } else {

        const R = (b.ramp ?? ["#1c2030", "#3a4a66", "#6e86a8", "#a8c0dc", "#e8f2ff"]).map(hex), n = R.length;
        const x = Math.round(b.x), y = Math.round(b.y), r = Math.ceil(b.s) + 1;
        for (let py = -r; py <= r; py++)
          for (let px = -r; px <= r; px++) {
            const u = (px + 0.5) * ca + (py + 0.5) * sa, v = -(px + 0.5) * sa + (py + 0.5) * ca;
            const d = Math.abs(u) / b.s + Math.abs(v) / (b.s * 0.62);
            if (d > 1.3) continue;
            p.dot(x + px, y + py, d > 1 ? R[0] : v < 0 ? (u < 0 ? R[n - 1] : R[n - 2]) : u < 0 ? R[n - 3] : R[Math.max(1, n - 4)], a);
          }
      }
    }
  }
}
class Lights {
  constructor() {
    this.list = [];
  }
  add(x, y, r, color, k, life) {
    this.list.push({ x, y, r, color: hex(color), k, life, max: life });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) if ((this.list[i].life -= dt) <= 0) this.list.splice(i, 1);
  }
  draw(p) {
    for (const l of this.list) {
      const k = l.life / l.max;
      p.glow(l.x, l.y, l.r * (0.55 + 0.45 * k), l.color, l.k * k * k);
    }
  }
}
function sparkle(p, x, y, arm, c, tip = c, k = 0.6) {
  const n = Math.round(arm);
  if (n < 1) return;
  const X = Math.floor(x), Y = Math.floor(y);
  for (let d = 1; d <= n; d++) {
    const cc = d > n * 0.6 ? tip : c;
    for (const [dx, dy] of CROSS) p.px(X + dx * d, Y + dy * d, cc);
  }
  if (n >= 3) for (const [dx, dy] of DIAG) p.px(X + dx, Y + dy, c);
  if (n >= 6) for (const [dx, dy] of DIAG) p.px(X + dx * 2, Y + dy * 2, tip);
  p.px(X, Y, WHITE);
  p.glow(x, y, 4 + n * 2, c, k);
}
function flare(p, x, y, L, k, ramp) {
  if (L < 1) return;
  const R = ramp.map(hex), n = R.length;
  for (let i = 0; i < 8; i++) {
    const an = (i * Math.PI) / 4, len = i % 4 === 0 ? L : i % 2 === 0 ? L * 0.6 : L * 0.3, ca = Math.cos(an), sa = Math.sin(an);
    for (let d = 0; d <= len; d += 0.5) {
      const u = d / len;
      p.dot(x + ca * d, y + sa * d, u < 0.35 ? WHITE : u < 0.7 ? R[n - 2] : R[n - 3], u < 0.6 ? 1 : k * 1.5 * (1 - u) + 0.2);
    }
  }
}
function band(p, cx, cy, r, sy, th, k, ramp, keep = () => true, hot = false) {
  if (r <= 0 || k <= 0) return;
  const R = ramp.map(hex), n = R.length;
  for (let j = 0, m = Math.ceil(r * TAU * 1.2); j < m; j++) {
    const ang = (j / m) * TAU, ca = Math.cos(ang), sa = Math.sin(ang);
    if (!keep(ang)) continue;
    for (let o = th; o >= 0; o -= 0.5) {
      const u = o / th, c = u < 0.15 ? (hot ? WHITE : R[n - 1]) : u < 0.4 ? R[n - 2] : u < 0.7 ? R[n - 3] : R[n - 4];
      p.dot(cx + ca * (r - o), cy + sa * (r - o) * sy, c, k * (u < 0.4 ? 1.2 : 1.15 - u));
    }
  }
}
function crystal(p, x, base, h, w, lean, ramp, opts = {}) {
  if (h < 1.5) return;
  const R = ramp.map(hex), n = R.length, C = (i) => R[Math.max(0, n - 1 - i)];
  const a = opts.a ?? 1, top = base - h, ridge0 = x - w * 0.14, glint = opts.glint ?? -1;
  const inside = (px, py) => {
    const u = (base - (py + 0.5)) / h;
    return u >= 0 && u <= 1 && Math.abs(px + 0.5 - (x + lean * u)) <= (w / 2) * (1 - u) + 0.35;
  };
  for (let py = Math.floor(top) - 1; py < Math.ceil(base); py++)
    for (let px = Math.floor(x - w / 2 - Math.abs(lean) - 2); px <= Math.ceil(x + w / 2 + Math.abs(lean) + 2); px++) {
      if (!inside(px, py)) {
        if (inside(px - 1, py) || inside(px + 1, py) || inside(px, py + 1) || (inside(px, py - 1) && py < base - 1)) p.dot(px, py, R[0], a);
        continue;
      }
      if (opts.white) {
        p.dot(px, py, WHITE, a);
        continue;
      }
      const u = (base - (py + 0.5)) / h, rx = ridge0 + (x + lean - ridge0) * u, c = x + lean * u, hw = (w / 2) * (1 - u) + 0.35, fx = px + 0.5;
      let col = u > 0.9 ? WHITE : Math.abs(fx - rx) < 0.55 ? C(1)
        : fx < rx ? (fx - (c - hw) < 1 ? C(1) : (fx - (c - hw)) / Math.max(1, rx - (c - hw)) > 0.55 ? C(2) : C(3))
        : c + hw - fx < 1.2 ? C(Math.min(n - 2, 6)) : (fx - rx) / Math.max(1, c + hw - rx) > 0.5 ? C(5) : C(4);
      if (glint >= 0 && fx <= rx + 0.6) {
        const g = Math.abs(u - glint);
        if (g < 0.05) col = WHITE;
        else if (g < 0.1) col = C(1);
      }
      p.dot(px, py, col, a);
    }
}
},
function(__e){Object.defineProperty(__e,"Painter",{enumerable:true,configurable:true,get:()=>Painter});
const __iacmpg5=__r(2);const clamp=__iacmpg5.clamp;
const __ig08759=__r(3);const hex=__ig08759.hex;
const __ii7x4bl=__r(8);const rasterText=__ii7x4bl.rasterText;const textWidth=__ii7x4bl.textWidth;const FONTS=__ii7x4bl.FONTS;

const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);
const OUT = { c: 0, a: 1, l: 0, k: 0 };
const sprites = new WeakMap();
const call = (v, ...args) => (typeof v === "function" ? v(...args) : v);
class Painter {
  constructor(frame) {
    this.frame = frame;
    this.reset();
  }
  reset() {
    const f = this.frame;
    this.w = f.w; this.h = f.h; this.ox = f.ox | 0; this.oy = f.oy | 0; this.C = f.color; this.L = f.light;
    this.tx = 0; this.ty = 0; this.fx = 1; this.cs = 1; this.sn = 0;
    this.fade = 1; this.lightK = 1; this.layer = "front";
    return this;
  }
  place(x, y, flip = false, angle = 0) {
    this.tx = x; this.ty = y; this.fx = flip ? -1 : 1; this.cs = Math.cos(angle); this.sn = Math.sin(angle);
    return this;
  }

  toX(x, y) { return this.tx + x * this.fx * this.cs - y * this.sn; }
  toY(x, y) { return this.ty + x * this.fx * this.sn + y * this.cs; }
  fromX(sx, sy) { const dx = sx - this.tx, dy = sy - this.ty; return (dx * this.cs + dy * this.sn) * this.fx; }
  fromY(sx, sy) { const dx = sx - this.tx, dy = sy - this.ty; return -dx * this.sn + dy * this.cs; }

  cellX(x, y) { return Math.floor(this.toX(Math.floor(x) + 0.5, Math.floor(y) + 0.5)); }
  cellY(x, y) { return Math.floor(this.toY(Math.floor(x) + 0.5, Math.floor(y) + 0.5)); }

  put(sx, sy, c, a = 1) {
    if (!c) return;
    a *= this.fade;
    if (a < 1 && a <= BAYER[((sy & 3) << 2) | (sx & 3)]) return;
    const x = sx - this.ox, y = sy - this.oy;
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
    this.C[y * this.w + x] = c;
  }
  add(sx, sy, c, k = 1) {
    k *= this.fade * this.lightK;
    if (k <= 0.004) return;
    const x = sx - this.ox, y = sy - this.oy;
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
    const i = y * this.w + x, d = this.L[i];
    const r = Math.min(255, (d & 255) + (c & 255) * k) | 0;
    const g = Math.min(255, ((d >>> 8) & 255) + ((c >>> 8) & 255) * k) | 0;
    const b = Math.min(255, ((d >>> 16) & 255) + ((c >>> 16) & 255) * k) | 0;
    this.L[i] = (255 << 24) | (b << 16) | (g << 8) | r;
  }
  blendPx(sx, sy, c, a) {
    a *= this.fade;
    if (!c || a <= 0.004) return;
    const x = sx - this.ox, y = sy - this.oy;
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return;
    const i = y * this.w + x, d = this.C[i], da = (d >>> 24) / 255, oa = a + da * (1 - a), k = a / oa;
    const ch = (s) => ((((c >>> s) & 255) * k + ((d >>> s) & 255) * (1 - k)) & 255);
    this.C[i] = (((oa * 255) & 255) << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0);
  }
  blend(x, y, c, a) { this.blendPx(this.cellX(x, y), this.cellY(x, y), c, a); }
  disc(cx, cy, r, c, a) {
    if (r < 0.5) return this.blend(cx, cy, call(c, 0, 0), call(a, 0, 0));
    this.each(cx - r, cy - r, cx + r, cy + r, (x, y, sx, sy) => {
      const dx = x - cx, dy = y - cy, d2 = dx * dx + dy * dy;
      if (d2 > r * r) return;
      const d = Math.sqrt(d2) / r, ang = Math.atan2(dy, dx);
      this.blendPx(sx, sy, call(c, d, ang), call(a, d, ang));
    });
  }
  get(x, y) {
    const sx = this.cellX(x, y) - this.ox, sy = this.cellY(x, y) - this.oy;
    return sx < 0 || sy < 0 || sx >= this.w || sy >= this.h ? 0 : this.C[sy * this.w + sx];
  }

  px(x, y, c) { this.put(this.cellX(x, y), this.cellY(x, y), c, 1); }
  dot(x, y, c, a = 1) { if (a > 0) this.put(this.cellX(x, y), this.cellY(x, y), c, a); }
  light(x, y, c, k = 1) { this.add(this.cellX(x, y), this.cellY(x, y), c, k); }
  each(x0, y0, x1, y1, fn) {
    let ax = Infinity, bx = -Infinity, ay = Infinity, by = -Infinity;
    for (let k = 0; k < 4; k++) {
      const x = k & 1 ? x1 : x0, y = k & 2 ? y1 : y0, sx = this.toX(x, y), sy = this.toY(x, y);
      if (sx < ax) ax = sx; if (sx > bx) bx = sx; if (sy < ay) ay = sy; if (sy > by) by = sy;
    }
    const sx0 = Math.max(Math.floor(ax), this.ox), sx1 = Math.min(Math.ceil(bx), this.ox + this.w - 1);
    const sy0 = Math.max(Math.floor(ay), this.oy), sy1 = Math.min(Math.ceil(by), this.oy + this.h - 1);
    for (let sy = sy0; sy <= sy1; sy++)
      for (let sx = sx0; sx <= sx1; sx++) {
        const cx = sx + 0.5, cy = sy + 0.5;
        fn(this.fromX(cx, cy), this.fromY(cx, cy), sx, sy);
      }
  }
  shade(x0, y0, x1, y1, fn) {
    const o = OUT;
    this.each(x0, y0, x1, y1, (lx, ly, sx, sy) => {
      o.c = 0; o.a = 1; o.l = 0; o.k = 0;
      const c = fn(lx, ly, o) || o.c;
      if (c) this.put(sx, sy, c, o.a);
      if (o.k > 0) this.add(sx, sy, o.l || c, o.k);
    });
  }

  line(x0, y0, x1, y1, c, a = 1) {
    let sx = this.cellX(x0, y0), sy = this.cellY(x0, y0);
    const ex = this.cellX(x1, y1), ey = this.cellY(x1, y1);
    const dx = Math.abs(ex - sx), dy = -Math.abs(ey - sy), stepx = sx < ex ? 1 : -1, stepy = sy < ey ? 1 : -1;
    const n = Math.max(dx, -dy) || 1, fc = typeof c === "function", fa = typeof a === "function";
    let err = dx + dy, i = 0;
    for (;;) {
      const u = i++ / n;
      this.put(sx, sy, fc ? c(u) : c, fa ? a(u) : a);
      if (sx === ex && sy === ey) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; sx += stepx; }
      if (e2 <= dx) { err += dx; sy += stepy; }
    }
  }
  polyline(pts, c, a = 1) {
    for (let i = 1; i < pts.length; i++) this.line(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], c, a);
  }
  beam(x0, y0, x1, y1, width, c, a = 1) {
    const r = width / 2, dx = x1 - x0, dy = y1 - y0, L2 = dx * dx + dy * dy || 1e-9;
    this.shade(Math.min(x0, x1) - r, Math.min(y0, y1) - r, Math.max(x0, x1) + r, Math.max(y0, y1) + r, (x, y, o) => {
      const u = clamp(((x - x0) * dx + (y - y0) * dy) / L2), px = x0 + dx * u - x, py = y0 + dy * u - y;
      const d2 = px * px + py * py;
      if (d2 > r * r) return;
      const v = Math.sqrt(d2) / r;
      o.c = call(c, u, v);
      o.a = call(a, u, v);
    });
  }
  circle(cx, cy, r, c, a = 1) {
    if (r < 0.6) return this.dot(cx, cy, call(c, 0, 0), call(a, 0, 0));
    this.shade(cx - r, cy - r, cx + r, cy + r, (x, y, o) => {
      const dx = x - cx, dy = y - cy, d2 = dx * dx + dy * dy;
      if (d2 > r * r) return;
      const d = Math.sqrt(d2) / r, ang = Math.atan2(dy, dx);
      o.c = call(c, d, ang);
      o.a = call(a, d, ang);
    });
  }
  ellipse(cx, cy, rx, ry, c, a = 1) {
    if (rx <= 0 || ry <= 0) return;
    this.shade(cx - rx, cy - ry, cx + rx, cy + ry, (x, y, o) => {
      const dx = (x - cx) / rx, dy = (y - cy) / ry, d2 = dx * dx + dy * dy;
      if (d2 > 1) return;
      const d = Math.sqrt(d2), ang = Math.atan2(dy, dx);
      o.c = call(c, d, ang);
      o.a = call(a, d, ang);
    });
  }
  ring(cx, cy, r, w, c, a = 1) {
    const r0 = Math.max(0, r - w);
    this.shade(cx - r, cy - r, cx + r, cy + r, (x, y, o) => {
      const dx = x - cx, dy = y - cy, d2 = dx * dx + dy * dy;
      if (d2 > r * r || d2 < r0 * r0) return;
      const v = w > 0 ? (Math.sqrt(d2) - r0) / (r - r0 || 1) : 1, ang = Math.atan2(dy, dx);
      o.c = call(c, v, ang);
      o.a = call(a, v, ang);
    });
  }
  arc(cx, cy, r, w, a0, a1, c, a = 1) {
    const span = a1 - a0, wf = typeof w === "function";
    this.shade(cx - r, cy - r, cx + r, cy + r, (x, y, o) => {
      const dx = x - cx, dy = y - cy, d = Math.sqrt(dx * dx + dy * dy);
      if (d > r) return;
      let ang = Math.atan2(dy, dx) - a0;
      ang -= Math.floor(ang / (Math.PI * 2)) * Math.PI * 2;
      if (ang > span) return;
      const u = ang / span, ww = wf ? w(u) : w;
      if (ww <= 0 || d < r - ww) return;
      const v = (d - (r - ww)) / ww;
      o.c = call(c, u, v);
      o.a = call(a, u, v);
    });
  }
  rect(x, y, w, h, c, a = 1) {
    if (this.sn === 0) {
      const X0 = Math.round(x), Y0 = Math.round(y), X1 = Math.round(x + w), Y1 = Math.round(y + h);
      for (let yy = Y0; yy < Y1; yy++) for (let xx = X0; xx < X1; xx++) this.put(this.cellX(xx, yy), this.cellY(xx, yy), c, a);
      return;
    }
    this.shade(x, y, x + w, y + h, (lx, ly, o) => {
      if (lx < x || ly < y || lx >= x + w || ly >= y + h) return;
      o.c = c; o.a = a;
    });
  }
  poly(pts, c, a = 1) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const [x, y] of pts) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    const n = pts.length;
    this.shade(x0, y0, x1, y1, (x, y, o) => {
      let inside = false;
      for (let i = 0, j = n - 1; i < n; j = i++) {
        const [xi, yi] = pts[i], [xj, yj] = pts[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
      }
      if (!inside) return;
      o.c = call(c, x, y);
      o.a = call(a, x, y);
    });
  }
  tri(x0, y0, x1, y1, x2, y2, c, a = 1) { this.poly([[x0, y0], [x1, y1], [x2, y2]], c, a); }

  glow(x, y, r, c, k = 0.5) {
    if (r < 1 || k <= 0.004) return;
    const cx = this.toX(x, y), cy = this.toY(x, y);
    const x0 = Math.floor(cx - r), x1 = Math.ceil(cx + r), y0 = Math.floor(cy - r), y1 = Math.ceil(cy + r);
    for (let sy = y0; sy <= y1; sy++) {
      const dy = (sy + 0.5 - cy) / r;
      for (let sx = x0; sx <= x1; sx++) {
        const dx = (sx + 0.5 - cx) / r, d = dx * dx + dy * dy;
        if (d >= 1) continue;
        const f = 1 - Math.sqrt(d);
        this.add(sx, sy, c, f * f * k);
      }
    }
  }
  glowLine(x0, y0, x1, y1, r, c, k = 0.5) {
    if (r < 1 || k <= 0.004) return;
    const ax = this.toX(x0, y0), ay = this.toY(x0, y0), bx = this.toX(x1, y1), by = this.toY(x1, y1);
    const dx = bx - ax, dy = by - ay, L2 = dx * dx + dy * dy || 1e-9;
    const X0 = Math.floor(Math.min(ax, bx) - r), X1 = Math.ceil(Math.max(ax, bx) + r);
    const Y0 = Math.floor(Math.min(ay, by) - r), Y1 = Math.ceil(Math.max(ay, by) + r);
    for (let sy = Y0; sy <= Y1; sy++)
      for (let sx = X0; sx <= X1; sx++) {
        const px = sx + 0.5, py = sy + 0.5, u = clamp(((px - ax) * dx + (py - ay) * dy) / L2);
        const ex = ax + dx * u - px, ey = ay + dy * u - py, d = Math.sqrt(ex * ex + ey * ey) / r;
        if (d >= 1) continue;
        const f = 1 - d;
        this.add(sx, sy, c, f * f * k);
      }
  }
  glowRing(x, y, R, r, c, k = 0.5) {
    if (r < 1 || k <= 0.004) return;
    const cx = this.toX(x, y), cy = this.toY(x, y), E = R + r;
    for (let sy = Math.floor(cy - E); sy <= Math.ceil(cy + E); sy++)
      for (let sx = Math.floor(cx - E); sx <= Math.ceil(cx + E); sx++) {
        const d = Math.abs(Math.hypot(sx + 0.5 - cx, sy + 0.5 - cy) - R) / r;
        if (d >= 1) continue;
        const f = 1 - d;
        this.add(sx, sy, c, f * f * k);
      }
  }

  sprite(rows, pal, x, y, opts = {}) {
    let s = sprites.get(rows);
    if (!s) sprites.set(rows, (s = rows.map((r) => [...r])));
    const k = opts.scale ?? 1, a = opts.a ?? 1, W = s[0]?.length ?? 0, cache = {};
    for (let r = 0; r < s.length; r++)
      for (let q = 0; q < s[r].length; q++) {
        const ch = s[r][q];
        if (ch === "." || ch === " ") continue;
        let c = opts.tint;
        if (c === undefined) {
          c = cache[ch];
          if (c === undefined) c = cache[ch] = pal[ch] === undefined ? 0 : hex(pal[ch]);
        }
        if (!c) continue;
        const col = opts.flip ? W - 1 - q : q, row = opts.flipY ? s.length - 1 - r : r;
        if (k === 1) this.dot(x + col, y + row, c, a);
        else this.rect(x + col * k, y + row * k, k, k, c, a);
      }
  }
  text(str, x, y, c, opts = {}) {
    const font = opts.font ?? "mini", k = opts.scale ?? 1, a = opts.a ?? 1, w = textWidth(str, font) * k;
    const left = Math.round(opts.align === "center" ? x - w / 2 : opts.align === "right" ? x - w : x), top = Math.round(y);
    const ol = opts.outline, sh = opts.shadow;
    if (ol !== undefined) rasterText(str, font, (gx, gy) => this.rect(left + gx * k - 1, top + gy * k - 1, k + 2, k + 2, ol, a));
    if (sh !== undefined) rasterText(str, font, (gx, gy) => this.rect(left + gx * k + 1, top + gy * k + 1, k, k, sh, a));
    rasterText(str, font, (gx, gy) => this.rect(left + gx * k, top + gy * k, k, k, call(c, gx, gy), a));
  }
  measure(str, opts = {}) {
    const k = opts.scale ?? 1;
    return [textWidth(str, opts.font ?? "mini") * k, FONTS[opts.font ?? "mini"].h * k];
  }
  mask(m, x, y, c, a = 1) {
    for (let my = 0; my < m.h; my++)
      for (let mx = 0; mx < m.w; mx++) if (m.data[my * m.w + mx]) this.dot(x + mx, y + my, call(c, mx, my), call(a, mx, my));
  }
  outline(m, x, y, c, a = 1) {
    const at = (mx, my) => mx >= 0 && my >= 0 && mx < m.w && my < m.h && m.data[my * m.w + mx];
    for (let my = -1; my <= m.h; my++)
      for (let mx = -1; mx <= m.w; mx++)
        if (!at(mx, my) && (at(mx - 1, my) || at(mx + 1, my) || at(mx, my - 1) || at(mx, my + 1)))
          this.dot(x + mx, y + my, call(c, mx, my), call(a, mx, my));
  }
}
},
function(__e){Object.defineProperty(__e,"FONTS",{enumerable:true,configurable:true,get:()=>FONTS});Object.defineProperty(__e,"textWidth",{enumerable:true,configurable:true,get:()=>textWidth});Object.defineProperty(__e,"rasterText",{enumerable:true,configurable:true,get:()=>rasterText});
const MINI = {
  A: ".#.|#.#|###|#.#|#.#", B: "##.|#.#|##.|#.#|##.", C: ".##|#..|#..|#..|.##", D: "##.|#.#|#.#|#.#|##.",
  E: "###|#..|##.|#..|###", F: "###|#..|##.|#..|#..", G: ".##|#..|#.#|#.#|.##", H: "#.#|#.#|###|#.#|#.#",
  I: "###|.#.|.#.|.#.|###", J: "..#|..#|..#|#.#|.#.", K: "#.#|#.#|##.|#.#|#.#", L: "#..|#..|#..|#..|###",
  M: "#.#|###|###|#.#|#.#", N: "##.|#.#|#.#|#.#|#.#", O: ".#.|#.#|#.#|#.#|.#.", P: "##.|#.#|##.|#..|#..",
  Q: ".#.|#.#|#.#|##.|.##", R: "##.|#.#|##.|#.#|#.#", S: ".##|#..|.#.|..#|##.", T: "###|.#.|.#.|.#.|.#.",
  U: "#.#|#.#|#.#|#.#|###", V: "#.#|#.#|#.#|#.#|.#.", W: "#.#|#.#|###|###|#.#", X: "#.#|#.#|.#.|#.#|#.#",
  Y: "#.#|#.#|.#.|.#.|.#.", Z: "###|..#|.#.|#..|###",
  0: "###|#.#|#.#|#.#|###", 1: ".#.|##.|.#.|.#.|###", 2: "##.|..#|.#.|#..|###", 3: "##.|..#|.#.|..#|##.",
  4: "#.#|#.#|###|..#|..#", 5: "###|#..|##.|..#|##.", 6: ".##|#..|###|#.#|###", 7: "###|..#|.#.|.#.|.#.",
  8: "###|#.#|###|#.#|###", 9: "###|#.#|###|..#|##.",
  "+": "...|.#.|###|.#.|...", "-": "...|...|###|...|...", "!": "#|#|#|.|#", "?": "##.|..#|.#.|...|.#.",
  ".": ".|.|.|.|#", ",": "..|..|..|.#|#.", ":": ".|#|.|#|.", "/": "..#|..#|.#.|#..|#..",
  "%": "#.#|..#|.#.|#..|#.#", x: "...|#.#|.#.|#.#|...", "*": "#.#|.#.|#.#|...|...", "'": "#|#|.|.|.",
  "(": ".#|#.|#.|#.|.#", ")": "#.|.#|.#|.#|#.", "<": "..#|.#.|#..|.#.|..#", ">": "#..|.#.|..#|.#.|#..",
  "=": "...|###|...|###|...", _: "...|...|...|...|###", "#": "#.#|###|#.#|###|#.#",
};
const BIG = {
  A: ".###.|#...#|#...#|#####|#...#|#...#|#...#", B: "####.|#...#|#...#|####.|#...#|#...#|####.",
  C: ".###.|#...#|#....|#....|#....|#...#|.###.", D: "####.|#...#|#...#|#...#|#...#|#...#|####.",
  E: "#####|#....|#....|####.|#....|#....|#####", F: "#####|#....|#....|####.|#....|#....|#....",
  G: ".###.|#...#|#....|#.###|#...#|#...#|.####", H: "#...#|#...#|#...#|#####|#...#|#...#|#...#",
  I: "###|.#.|.#.|.#.|.#.|.#.|###", J: "..###|...#.|...#.|...#.|...#.|#..#.|.##..",
  K: "#...#|#..#.|#.#..|##...|#.#..|#..#.|#...#", L: "#....|#....|#....|#....|#....|#....|#####",
  M: "#...#|##.##|#.#.#|#.#.#|#...#|#...#|#...#", N: "#...#|#...#|##..#|#.#.#|#..##|#...#|#...#",
  O: ".###.|#...#|#...#|#...#|#...#|#...#|.###.", P: "####.|#...#|#...#|####.|#....|#....|#....",
  Q: ".###.|#...#|#...#|#...#|#.#.#|#..#.|.##.#", R: "####.|#...#|#...#|####.|#.#..|#..#.|#...#",
  S: ".####|#....|#....|.###.|....#|....#|####.", T: "#####|..#..|..#..|..#..|..#..|..#..|..#..",
  U: "#...#|#...#|#...#|#...#|#...#|#...#|.###.", V: "#...#|#...#|#...#|#...#|#...#|.#.#.|..#..",
  W: "#...#|#...#|#...#|#.#.#|#.#.#|#.#.#|.#.#.", X: "#...#|#...#|.#.#.|..#..|.#.#.|#...#|#...#",
  Y: "#...#|#...#|.#.#.|..#..|..#..|..#..|..#..", Z: "#####|....#|...#.|..#..|.#...|#....|#####",
  0: ".###.|#...#|#..##|#.#.#|##..#|#...#|.###.", 1: ".#.|##.|.#.|.#.|.#.|.#.|###",
  2: ".###.|#...#|....#|...#.|..#..|.#...|#####", 3: "#####|...#.|..#..|...#.|....#|#...#|.###.",
  4: "...#.|..##.|.#.#.|#..#.|#####|...#.|...#.", 5: "#####|#....|####.|....#|....#|#...#|.###.",
  6: "..##.|.#...|#....|####.|#...#|#...#|.###.", 7: "#####|....#|...#.|..#..|.#...|.#...|.#...",
  8: ".###.|#...#|#...#|.###.|#...#|#...#|.###.", 9: ".###.|#...#|#...#|.####|....#|...#.|.##..",
  "!": "#|#|#|#|#|.|#", "?": ".###.|#...#|....#|...#.|..#..|.....|..#..", "+": ".....|..#..|..#..|#####|..#..|..#..|.....",
  "-": "....|....|....|####|....|....|....", ".": ".|.|.|.|.|.|#", ",": "..|..|..|..|..|.#|#.", ":": ".|.|#|.|.|#|.",
  "/": "....#|....#|...#.|..#..|.#...|#....|#....", "%": "##...|##..#|...#.|..#..|.#...|#..##|...##",
  x: ".....|.....|#...#|.#.#.|..#..|.#.#.|#...#", "*": ".....|..#..|#.#.#|.###.|#.#.#|..#..|.....", "'": "#|#|.|.|.|.|.",
  "<": "...#|..#.|.#..|#...|.#..|..#.|...#", ">": "#...|.#..|..#.|...#|..#.|.#..|#...", "=": "....|....|####|....|####|....|....",
  "(": "..#|.#.|#..|#..|#..|.#.|..#", ")": "#..|.#.|..#|..#|..#|.#.|#..", "#": ".#.#.|.#.#.|#####|.#.#.|#####|.#.#.|.#.#.",
};
function build(table, h) {
  const out = {};
  for (const [ch, src] of Object.entries(table)) {
    const rows = src.split("|");
    out[ch] = { w: rows[0].length, rows: rows.map((r) => [...r].map((c) => c === "#")) };
    if (rows.length !== h) throw new Error(`glyph ${ch} has ${rows.length} rows, expected ${h}`);
  }
  return out;
}
const FONTS = {
  mini: { h: 5, space: 2, gap: 1, glyphs: build(MINI, 5) },
  big: { h: 7, space: 3, gap: 1, glyphs: build(BIG, 7) },
};
function textWidth(str, font = "mini") {
  const F = FONTS[font];
  let w = 0;
  for (const ch of String(str)) {
    const g = F.glyphs[ch] ?? F.glyphs[ch.toUpperCase()];
    w += (g ? g.w : F.space) + F.gap;
  }
  return Math.max(0, w - F.gap);
}
function rasterText(str, font, plot) {
  const F = FONTS[font];
  let x = 0;
  for (const ch of String(str)) {
    const g = F.glyphs[ch] ?? F.glyphs[ch.toUpperCase()];
    if (!g) {
      x += F.space + F.gap;
      continue;
    }
    for (let r = 0; r < F.h; r++) for (let c = 0; c < g.w; c++) if (g.rows[r][c]) plot(x + c, r);
    x += g.w + F.gap;
  }
}
},
function(__e){Object.defineProperty(__e,"createFrame",{enumerable:true,configurable:true,get:()=>createFrame});Object.defineProperty(__e,"clearFrame",{enumerable:true,configurable:true,get:()=>clearFrame});Object.defineProperty(__e,"painterFor",{enumerable:true,configurable:true,get:()=>painterFor});Object.defineProperty(__e,"resolveOptions",{enumerable:true,configurable:true,get:()=>resolveOptions});Object.defineProperty(__e,"createFx",{enumerable:true,configurable:true,get:()=>createFx});Object.defineProperty(__e,"composite",{enumerable:true,configurable:true,get:()=>composite});
const __i920co1=__r(7);const Painter=__i920co1.Painter;
const __iwl1xff=__r(2);const clamp=__iwl1xff.clamp;
const __invvsbq=__r(10);const stockActor=__invvsbq.stockActor;
const __il0hlhh=__r(3);const fit=__il0hlhh.fit;const toHex=__il0hlhh.toHex;
function createFrame(w, h, ox = 0, oy = 0) {
  return { w, h, ox, oy, color: new Uint32Array(w * h), light: new Uint32Array(w * h) };
}
function clearFrame(f) {
  f.color.fill(0);
  f.light.fill(0);
  return f;
}
const painters = new WeakMap();
function painterFor(frame) {
  let p = painters.get(frame);
  if (!p) painters.set(frame, (p = new Painter(frame)));
  return p.reset();
}
const FADE = 0.3;
const isRamp = (v) => Array.isArray(v) && v.length > 0 && v.every((c) => typeof c === "number" || /^#[0-9a-f]{3,8}$/i.test(c));
function resolveOptions(meta, o = {}) {
  const opts = { ...(meta.options ?? {}), ...o };
  for (const [k, def] of Object.entries(meta.options ?? {}))
    if (isRamp(def) && isRamp(o[k]) && o[k].length !== def.length) opts[k] = fit(o[k], def.length).map(toHex);
  if (meta.actor && !opts.actor) opts.actor = stockActor(meta.actor === 2 ? 2 : 1);
  return opts;
}
function createFx(mod, o = {}) {
  const meta = mod.meta ?? {};
  const opts = resolveOptions(meta, o);
  const impl = mod.create ? mod.create(opts) : mod;
  const D = meta.duration ?? 1;
  let t = 0, stopAt = Infinity;
  return {
    meta,
    options: opts,
    get t() {
      return t;
    },
    update(dt) {
      t += dt;
      if (!impl.update) return;

      const n = Math.max(1, Math.ceil(dt * 120 - 1e-9));
      for (let i = 0; i < n; i++) impl.update(dt / n, opts);
    },
    draw(frame, layer) {
      const p = painterFor(frame);
      p.place(opts.x ?? 0, opts.y ?? 0, !!opts.flip, opts.angle ?? 0);
      p.fade = stopAt === Infinity ? 1 : clamp(1 - (t - stopAt) / FADE);
      p.lightK = opts.light ?? 1;
      const tt = meta.loop ? t % D : Math.min(t, D);
      if (layer !== "front" && impl.drawBack) {
        p.layer = "back";
        impl.drawBack(p, tt, opts);
      }
      if (layer !== "back") {
        p.layer = "front";
        impl.draw(p, tt, opts);
      }
    },
    stop() {
      if (stopAt === Infinity) stopAt = t;
    },
    done() {
      return t - stopAt >= FADE || (!meta.loop && t >= D);
    },
  };
}
function composite(f, out, bg = null, lightK = 1) {
  const n = f.w * f.h, C = f.color, L = f.light, flat = typeof bg === "number";
  for (let i = 0; i < n; i++) {
    const c = C[i], l = L[i] & 0xffffff;
    let r, g, b, a;
    const ca = c >>> 24;
    if (ca === 255) {
      r = c & 255; g = (c >>> 8) & 255; b = (c >>> 16) & 255; a = 255;
    } else if (bg === null) {

      r = c & 255; g = (c >>> 8) & 255; b = (c >>> 16) & 255; a = ca;
    } else {
      const k = flat ? bg : bg[i], f = ca / 255;
      r = (c & 255) * f + (k & 255) * (1 - f); g = ((c >>> 8) & 255) * f + ((k >>> 8) & 255) * (1 - f);
      b = ((c >>> 16) & 255) * f + ((k >>> 16) & 255) * (1 - f); a = 255;
    }
    if (l) {
      const lr = (l & 255) * lightK, lg = ((l >>> 8) & 255) * lightK, lb = ((l >>> 16) & 255) * lightK;
      if (a < 255) {

        const pa = a / 255, pr = r * pa + lr, pg = g * pa + lg, pb = b * pa + lb;
        const na = Math.min(1, Math.max(pa, Math.max(lr, lg, lb) / 255));
        if (na > 0) { r = Math.min(255, pr / na); g = Math.min(255, pg / na); b = Math.min(255, pb / na); a = na * 255; }
      } else {
        r = Math.min(255, r + lr); g = Math.min(255, g + lg); b = Math.min(255, b + lb);
      }
    }
    const j = i * 4;
    out[j] = r; out[j + 1] = g; out[j + 2] = b; out[j + 3] = a;
  }
  return out;
}
},
function(__e){Object.defineProperty(__e,"HERO",{enumerable:true,configurable:true,get:()=>HERO});Object.defineProperty(__e,"HERO2",{enumerable:true,configurable:true,get:()=>HERO2});Object.defineProperty(__e,"HERO_PAL",{enumerable:true,configurable:true,get:()=>HERO_PAL});Object.defineProperty(__e,"DUMMY_PAL",{enumerable:true,configurable:true,get:()=>DUMMY_PAL});Object.defineProperty(__e,"stockActor",{enumerable:true,configurable:true,get:()=>stockActor});Object.defineProperty(__e,"drawActor",{enumerable:true,configurable:true,get:()=>drawActor});Object.defineProperty(__e,"actorAlphaOf",{enumerable:true,configurable:true,get:()=>actorAlphaOf});
const __iq14at2=__r(3);const hex=__iq14at2.hex;


const HERO = [
  "....kkkkk...",
  "..kkhhhhhk..",
  ".khhhhhhhhk.",
  ".khhhhhhhhhk",
  ".khhssssshhk",
  ".khsessesshk",
  ".khsessesshk",
  "..ksssssssk.",
  "...kkSSSkk..",
  "..kttttttk..",
  ".kttTttTttk.",
  ".ksttTTttsk.",
  ".kstttttttk.",
  "..kbbbbbbk..",
  "..kppkkppk..",
  "..kppk.kppk.",
  "..kppk.kppk.",
  "..koook.kook",
  "..kkkkk.kkkk",
];
const HERO_PAL = {
  k: "#17121f", h: "#7a4128", s: "#f3c49d", S: "#c98b6c", e: "#17121f",
  t: "#5f6f94", T: "#46536f", b: "#8a5a32", p: "#38334a", o: "#6a4030",

  H: "#a35d34", w: "#ffffff", m: "#a3564a", g: "#e8c060", L: "#7f90b6", O: "#8f5a3f", P: "#4b4560",

  c: "#f53cd1", C: "#ff8fe6", D: "#a31f8a",
};

const DUMMY_PAL = {
  k: "#0e0c14", A: "#e4e6ec", B: "#b6b9c3", C: "#868995", D: "#5c5e6a", E: "#6e707c", F: "#4b4d58", G: "#34353f", J: "#2a2b33", m: "#f53cd1",
};

const HERO2 = [
  "...........kkk..........",
  "..........kAABk.........",
  ".........kAAABJk........",
  ".........kABBJJk........",
  ".........kBBBJCDk.......",
  ".........kBCJDDDk.......",
  ".........kkJJJDk........",
  ".......kkkkABBJCkk......",
  "......kAABCJBCCCkDk.....",
  "......kABBCJCCCmDkDk....",
  "......kBBCDDJCDDDkDk....",
  "......kABCDJDDDDDkk.....",
  ".....kAABDkDDDDJkk......",
  ".....kABCDkDDJJGkk......",
  ".....kABCkJJJGGGkk......",
  "....kJJCDkFFFGGGk.......",
  "....kAJJDkJJJGGGk.......",
  "....kJCJJkABBJGGk.......",
  ".....kJCCkBBCDJJJk......",
  ".....kCCCJBBCDJJDk......",
  ".....kCCCDJCCDkJDDk.....",
  "......kCDDJBCDkDDDk.....",
  ".......kDJJJCDkDDDkk....",
  ".......kJBCJCDkDDDkk....",
  ".......kBDJBCDkCDDkk....",
  "........kJJBCDkCDDk.....",
  "........kBBBCDkCCDDk....",
  "........kBBBCDkCCDDk....",
  ".........kBBCDkJDDDk....",
  "........kBJJJJkCJJJk....",
  "........kBBCCDkCCDDk....",
  "........kBBCDDkCDDk.....",
  "........kBBCDkCCDDk.....",
  "........kBCCDkCCDDk.....",
  "........kBCDDkCDDDk.....",
  ".......kJBCJkkkDJkkkk...",
  ".......kAJJAAAAkCCCCCk..",
  "........kkkkkkkkkkkkk...",
];
function maskOf(rows, k = 1) {
  const h = rows.length * k, w = rows[0].length * k, data = new Uint8Array(w * h);
  rows.forEach((r, y) => [...r].forEach((ch, x) => {
    if (ch === ".") return;
    for (let j = 0; j < k * k; j++) data[(y * k + ((j / k) | 0)) * w + x * k + (j % k)] = 1;
  }));
  return { w, h, data };
}
const MASKS = { 1: maskOf(HERO, 1), 2: maskOf(HERO2, 1) };
const SPRITES = { 1: HERO, 2: HERO2 };

function pixelsOf(rows, pal) {
  const w = rows[0].length, data = new Uint32Array(w * rows.length);
  rows.forEach((r, y) => [...r].forEach((ch, x) => (data[y * w + x] = ch === "." ? 0 : hex(pal[ch]))));
  return data;
}
const PIXELS = { 1: pixelsOf(HERO, HERO_PAL), 2: pixelsOf(HERO2, DUMMY_PAL) };
function stockActor(k = 1) {
  k = k === 2 ? 2 : 1;
  const m = MASKS[k], x = -Math.floor(m.w / 2), y = -m.h;
  return { mask: m, pixels: PIXELS[k], x, y, w: m.w, h: m.h, k, head: [0, y], chest: [0, k === 2 ? -26 : y + 11], ...(k === 2 ? { eyes: [[13, 3], [15, 3]] } : {}) };
}
function drawActor(p, actor = stockActor(), a = 1) {
  if (a > 0) p.sprite(SPRITES[actor.k === 2 ? 2 : 1], actor.k === 2 ? DUMMY_PAL : HERO_PAL, actor.x, actor.y, { a });
}
const actorAlphaOf = (mod, t, o) => (typeof mod.actorAlpha === "function" ? mod.actorAlpha(t, o) : 1);
},
function(__e){Object.defineProperty(__e,"BACKDROPS",{enumerable:true,configurable:true,get:()=>BACKDROPS});Object.defineProperty(__e,"backdrop",{enumerable:true,configurable:true,get:()=>backdrop});
const __iagxfu2=__r(3);const hex=__iagxfu2.hex;const mix=__iagxfu2.mix;
const __ia8eo5o=__r(2);const rand=__ia8eo5o.rand;
const SKY = hex("#15131d"), SKY_TOP = hex("#0d0b14"), SKY_LOW = hex("#221d33");
const FLOOR_EDGE = hex("#4a4263"), FLOOR = hex("#2b2639"), FLOOR_DARK = hex("#211d2d"), MORTAR = hex("#1a1724");
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
const BACKDROPS = ["dark", "ground", "sky", "light", "black"];
function backdrop(kind, w, h, groundY = h) {
  const out = new Uint32Array(w * h);
  if (kind === "light") return out.fill(hex("#ebe8f0"));
  if (kind === "black") return out.fill(hex("#000000"));
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      let c = SKY;
      if (kind === "sky") {
        const t = y / Math.max(1, h - 1), step = (t * 5 + BAYER[((y & 3) << 2) | (x & 3)] / 16) | 0;
        c = mix(SKY_TOP, SKY_LOW, Math.min(1, step / 4));
        const r = rand(x, y, 77);
        if (r > 0.994) c = mix(c, hex("#cfc8ff"), 0.35 + (r - 0.994) * 90);
      }
      if (kind === "ground" && y >= groundY) {
        const gy = y - groundY;
        if (gy === 0) c = FLOOR_EDGE;
        else {
          const row = Math.floor((gy - 1) / 5), off = row % 2 ? 6 : 0;
          const mortar = (gy - 1) % 5 === 4 || (x + off) % 12 === 0;
          c = mortar ? MORTAR : gy < 3 ? FLOOR : FLOOR_DARK;
        }
      }
      out[y * w + x] = c;
    }
  return out;
}
},
function(__e){Object.defineProperty(__e,"STAND",{enumerable:true,configurable:true,get:()=>STAND});Object.defineProperty(__e,"posed",{enumerable:true,configurable:true,get:()=>posed});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"lerpPose",{enumerable:true,configurable:true,get:()=>lerpPose});Object.defineProperty(__e,"poseAt",{enumerable:true,configurable:true,get:()=>poseAt});Object.defineProperty(__e,"SKINS",{enumerable:true,configurable:true,get:()=>SKINS});Object.defineProperty(__e,"Target",{enumerable:true,configurable:true,get:()=>Target});Object.defineProperty(__e,"actSpan",{enumerable:true,configurable:true,get:()=>actSpan});Object.defineProperty(__e,"createAct",{enumerable:true,configurable:true,get:()=>createAct});Object.defineProperty(__e,"actTiming",{enumerable:true,configurable:true,get:()=>actTiming});Object.defineProperty(__e,"actBounds",{enumerable:true,configurable:true,get:()=>actBounds});
const __i7muvyi=__r(2);const Rng=__i7muvyi.Rng;const clamp=__i7muvyi.clamp;
const __iptulsp=__r(3);const hex=__iptulsp.hex;const mix=__iptulsp.mix;
const __ioxw3pm=__r(9);const createFrame=__ioxw3pm.createFrame;const clearFrame=__ioxw3pm.clearFrame;const createFx=__ioxw3pm.createFx;const painterFor=__ioxw3pm.painterFor;
const __i20hpdb=__r(10);const stockActor=__i20hpdb.stockActor;const drawActor=__i20hpdb.drawActor;const actorAlphaOf=__i20hpdb.actorAlphaOf;const HERO2=__i20hpdb.HERO2;const DUMMY_PAL=__i20hpdb.DUMMY_PAL;
const __iz082k7=__r(13);const posed=__iz082k7.posed;const STAND=__iz082k7.STAND;

const lerp = (a, b, u) => a + (b - a) * u;
function lerpPose(a, b, u) {
  const out = { ...STAND, ...a };
  const B = { ...STAND, ...b };
  for (const k of Object.keys(B)) {
    const v = B[k];
    if (typeof v === "number" && typeof out[k] === "number") out[k] = lerp(out[k], v, u);
    else if (out[k] === undefined && typeof v === "number") out[k] = v;
  }

  for (const k of ["hx", "hy", "lean", "crouch"]) if (B[k] === undefined && typeof out[k] === "number") out[k] = lerp(out[k], 0, u);
  if (B.wl === undefined && typeof out.wl === "number") out.wl = lerp(out.wl, 1, u);
  return out;
}
const eases = { out: (u) => 1 - (1 - u) * (1 - u), in: (u) => u * u, line: (u) => u };
function poseAt(track, t) {
  if (t <= track[0][0]) return track[0][1];
  for (let i = 0; i < track.length - 1; i++) {
    const [t0, a] = track[i], [t1, b, how] = track[i + 1];
    if (t >= t1) continue;
    if (how === "snap") return a;
    const e = eases[how] ?? ((u) => u * u * (3 - 2 * u));
    const stepped = t0 + Math.floor((t - t0) * 12 + 1e-6) / 12;
    const out = lerpPose(a, b, e((stepped - t0) / (t1 - t0)));
    const u = e((t - t0) / (t1 - t0));
    out.x = lerp(a.x ?? 0, b.x ?? 0, u);
    out.y = lerp(a.y ?? 0, b.y ?? 0, u);
    return out;
  }
  return track[track.length - 1][1];
}
function isHeld(track, t) {
  if (t >= track[track.length - 1][0] || t < track[0][0]) return true;
  for (let i = 0; i < track.length - 1; i++) {
    if (t >= track[i + 1][0]) continue;
    const a = { ...STAND, ...track[i][1] }, b = { ...STAND, ...track[i + 1][1] };
    return track[i + 1][0] - track[i][0] > 0.4 && ["fx", "fy", "bx", "by", "crouch", "lean", "x", "y"].every((k) => Math.abs((a[k] ?? 0) - (b[k] ?? 0)) < 1.5);
  }
  return true;
}

const TW = 38, TH = 52;
const TP = Object.fromEntries(Object.entries({ ink: "#0b0a1a", wood: "#724c2e", woodL: "#a0703a", woodD: "#4e331f", straw: "#d2aa55", strawL: "#f0d98a", burlapD: "#86643a", burlap: "#b38b57", burlapL: "#c9a26c", red: "#9a2f3c", redL: "#c4434f", white: "#ffffff" }).map(([k, v]) => [k, hex(v)]));
const DUST = ["#efe7dc", "#c9bfb8", "#8f8693", "#5a5468"].map(hex);
const DUMMY = new Uint32Array(TW * TH);
(function buildDummy() {
  const px = (x, y, c) => { if (x >= 0 && y >= 0 && x < TW && y < TH) DUMMY[y * TW + x] = c; };
  const R = (x, y, w, h, c) => { for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) px(x + i, y + j, c); };

  R(15, 38, 8, 14, TP.ink); R(16, 34, 6, 18, TP.wood); R(16, 34, 2, 18, TP.woodL); R(20, 34, 2, 18, TP.woodD);
  R(1, 18, 36, 1, TP.ink); R(1, 23, 36, 1, TP.ink); R(1, 19, 36, 4, TP.wood); R(1, 19, 36, 1, TP.woodL); R(1, 22, 36, 1, TP.woodD);

  for (const [bx, s] of [[0, -1], [33, 1]]) {
    R(bx, 17, 5, 8, TP.straw);
    for (const [dx, dy, c] of [[2, 16, TP.straw], [3, 15, TP.strawL], [1, 17, TP.strawL], [2, 25, TP.straw], [1, 26, TP.strawL], [3, 25, TP.burlapD], [2, 19, TP.strawL], [3, 21, TP.strawL], [1, 22, TP.burlapD], [2, 23, TP.strawL]]) px(bx + dx, dy, c);
    px(s < 0 ? bx - 1 : bx + 5, 19, TP.straw); px(s < 0 ? bx - 1 : bx + 5, 22, TP.strawL);
  }
  const sack = (x, y, w, h) => {
    R(x + 1, y, w - 2, 1, TP.ink); R(x + 1, y + h - 1, w - 2, 1, TP.ink);
    R(x, y + 1, 1, h - 2, TP.ink); R(x + w - 1, y + 1, 1, h - 2, TP.ink);
    R(x + 1, y + 1, w - 2, h - 2, TP.burlap);
    R(x + w - 4, y + 1, 3, h - 2, TP.burlapD);
    R(x + 1, y + h - 3, w - 2, 2, TP.burlapD);
    R(x + 1, y + 1, 1, h - 4, TP.burlapL); R(x + 1, y + 1, w - 6, 1, TP.burlapL);

    for (let j = y + 2; j < y + h - 2; j += 3) for (let i = x + 3 + (j % 2); i < x + w - 4; i += 4) px(i, j, TP.burlapD);
  };
  sack(9, 17, 20, 24);

  for (let y = 19; y < 36; y++) for (let x = 11; x < 27; x++) { const d = Math.hypot(x - 18.5, y - 27); if ((d > 4 && d < 5.4) || d < 1.9) px(x, y, x + y < 45 ? TP.redL : TP.red); }

  for (let x = 10; x < 28; x++) { px(x, 36, x & 1 ? TP.woodL : TP.straw); px(x, 37, x & 1 ? TP.woodD : TP.wood); }
  for (const [x, y, c] of [[11, 41, TP.straw], [12, 42, TP.strawL], [14, 41, TP.strawL], [15, 42, TP.straw], [23, 41, TP.straw], [24, 42, TP.strawL], [26, 41, TP.straw], [13, 43, TP.straw], [25, 43, TP.straw]]) px(x, y, c);
  sack(10, 1, 18, 16);

  for (const ex of [14, 23]) for (let d = -2; d <= 2; d++) { px(ex + d, 7 + d, TP.ink); px(ex - d, 7 + d, TP.ink); }
  for (let x = 14; x < 24; x++) px(x, 12, x & 1 ? TP.ink : TP.burlapD);
  for (const x of [15, 18, 21]) { px(x, 11, TP.ink); px(x, 13, TP.ink); }

  for (let x = 12; x < 26; x++) { px(x, 16, x & 1 ? TP.woodL : TP.straw); px(x, 17, x & 1 ? TP.wood : TP.woodD); }
  for (const [x, y, c] of [[13, 0, TP.straw], [15, 0, TP.strawL], [18, 0, TP.straw], [21, 0, TP.strawL], [24, 0, TP.straw], [9, 4, TP.straw], [28, 6, TP.straw], [8, 7, TP.strawL], [29, 3, TP.strawL]]) px(x, y, c);
})();
const SKINS = { flash: [TP.white, 1], char: [hex("#1a0c0e"), 0.72], ice: [hex("#a8e8ff"), 0.72], shadow: [hex("#3a1a70"), 0.5], holy: [hex("#fff4c0"), 0.5], red: [hex("#ff2040"), 0.45], shock: [hex("#8fd6ff"), 0.6], poison: [hex("#58c43a"), 0.5] };
const STRAW = [TP.strawL, TP.straw, TP.straw, TP.burlapD, TP.burlapD];
class Target {
  constructor(x, seed = 5) {
    Object.assign(this, { x, theta: 0, omega: 0, flashT: 0, skin: null, skinFade: 0, shiver: 0, clock: 0, R: new Rng(seed), straw: [] });
  }
  hit({ push = 1.2, straw = 8, flash = 0.05, skin, shiver = 0, y = -26 } = {}) {
    this.omega += push;
    this.flashT = Math.max(this.flashT, flash);
    if (skin !== undefined) this.skin = skin;
    if (shiver) this.shiver = shiver;
    const R = this.R;
    for (let k = 0; k < straw; k++) {
      const back = R.next() < 0.3;
      this.straw.push({ x: this.x + R.range(-3, 3), y: y + R.range(-3, 3), vx: back ? R.range(-60, -5) : R.range(10, 130), vy: R.range(-120, -5), age: 0, life: R.range(1.2, 2.2), big: R.next() < 0.5 });
    }
  }
  step(dt) {
    this.clock += dt;
    this.omega += (-60 * this.theta - 3.4 * this.omega) * dt;
    this.theta = clamp(this.theta + this.omega * dt, -0.4, 0.42);
    if (this.flashT > 0) this.flashT -= dt;
    if (this.shiver > 0) this.shiver -= dt;
    for (const s of this.straw) {
      s.age += dt;
      s.vy += 210 * dt;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      if (s.y >= 0) { s.y = 0; s.vx *= 0.2; s.vy = 0; }
    }
    this.straw = this.straw.filter((s) => s.age < s.life);
  }
  draw(C, W, H, X, Y, flip) {
    const tan = Math.tan(this.theta), sv = this.shiver > 0 ? (Math.floor(this.clock * 30) & 1 ? 1 : -1) : 0, name = this.flashT > 0 ? "flash" : this.skin, sk = name ? SKINS[name] : null;
    const base = X + (flip ? -this.x - 1 : this.x);
    for (let r = 0; r < TH; r++) {
      const o = Math.round((TH - 1 - r) * tan * 0.8) + sv;
      for (let x = 0; x < TW; x++) {
        const c = DUMMY[r * TW + x];
        if (!c) continue;
        const px = base + (flip ? -(x - 19 + o) - 1 : x - 19 + o), py = Y - TH + r;
        if (px >= 0 && py >= 0 && px < W && py < H) C[py * W + px] = sk ? mix(c, sk[0], sk[1]) : c;
      }
    }
  }
  drawStraw(C, W, H, X, Y, flip) {
    for (const s of this.straw) {
      const c = STRAW[Math.min(4, Math.floor((s.age / s.life) * 5))], lx = Math.round(s.x), ly = Math.round(s.y) - 1;
      for (let i = 0; i < (s.big ? 2 : 1); i++) {
        const px = X + (flip ? -(lx + i) - 1 : lx + i), py = Y + ly;
        if (px >= 0 && py >= 0 && px < W && py < H) C[py * W + px] = c;
      }
    }
  }
}

const GHOST_LIFE = 0.16;
const REST_MASK = new Uint8Array(24 * 38), REST_PX = new Uint32Array(24 * 38);
HERO2.forEach((row, r) => [...row].forEach((ch, c) => {
  if (ch !== ".") {
    REST_MASK[r * 24 + c] = 1;
    REST_PX[r * 24 + c] = hex(DUMMY_PAL[ch]);
  }
}));

const NEAREST = new Int16Array(24 * 38).fill(-1);
for (let r = 0; r < 38; r++)
  for (let c = 0; c < 24; c++) {
    let best = -1, bd = 1e9;
    for (let y = Math.max(0, r - 7); y < Math.min(38, r + 8); y++)
      for (let x = Math.max(0, c - 7); x < Math.min(24, c + 8); x++) {
        const d = (x - c) * (x - c) + (y - r) * (y - r);
        if (REST_MASK[y * 24 + x] && d < bd) { bd = d; best = y * 24 + x; }
      }
    NEAREST[r * 24 + c] = best;
  }
const lum = (c) => (0.3 * (c & 255) + 0.59 * ((c >>> 8) & 255) + 0.11 * ((c >>> 16) & 255)) / 255;

function carry(v, rest, own) {
  const lv = lum(v);
  if (lv > 0.9 || v >>> 24 < 255) return v;
  const k = Math.max(0.45, Math.min(1.5, lum(own) / Math.max(0.08, lum(rest))));
  const ch = (n) => Math.min(255, Math.round(((v >>> n) & 255) * k));
  return (255 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0);
}
function actSpan(mod) {
  const a = mod.act, D = mod.meta?.duration ?? 1, k = a?.poses;
  return { from: Math.min(0, k?.[0]?.[0] ?? 0), to: mod.meta?.loop ? Infinity : Math.max(D, k?.[k.length - 1]?.[0] ?? 0) };
}
function createAct(mod, o = {}) {
  const a = mod.act ?? {}, meta = mod.meta ?? {}, D = meta.duration ?? 1, flip = !!o.flip, seed = o.seed ?? meta.options?.seed ?? 1;
  const fx = createFx(mod, o), track = a.poses ?? [[0, { ...STAND }]], span = actSpan(mod);
  const X = o.x ?? 0, Y = o.y ?? 0;
  const targets = (a.targets ?? (a.target ? [a.target] : [])).map((g, i) => new Target(g.x ?? 66, seed + 4 + i));
  const hits = (a.hits ?? []).map((h) => ({ ...h })).sort((p, q) => p.t - q.t), dust = (a.dust ?? []).slice();
  const R = new Rng(seed + 9), specks = [];

  const ramp = o.palette ?? meta.options?.palette, ghosts = [], gc = hex(a.ghost ?? ramp?.[Math.floor(ramp.length * 0.7)] ?? "#8fb4ff");
  let t = span.from, stop = 0, stopped = false, shakeT = 0, shake0 = 0, amp = 0, nh = 0, nd = 0, loopN = 0, gAcc = 0, last = null;
  const poseNow = () => {
    let tt = t;
    if (meta.loop && t >= D) tt = t % D;
    let q = poseAt(track, tt);

    if (!meta.loop && isHeld(track, tt)) {
      const up = Math.floor(tt * 3) & 1;
      q = { ...STAND, ...q, crouch: (q.crouch ?? 0) + up, fy: (q.fy ?? STAND.fy) + up, by: (q.by ?? STAND.by) + up };
    }
    last = q;
    return q;
  };
  let scratch = null;
  const scratchFor = (f) => {
    if (!scratch || scratch.a.w !== f.w || scratch.a.h !== f.h) scratch = { a: createFrame(f.w, f.h, f.ox, f.oy), b: createFrame(f.w, f.h, f.ox, f.oy) };
    return scratch;
  };
  const out = {
    fx, meta, act: a, targets,
    get t() { return t; },
    get shake() {
      if (shakeT <= 0) return [0, 0];
      const k = amp * (shakeT / shake0), f = Math.floor(shakeT * 60);
      return [Math.round(Math.sin(f * 2.4) * k), Math.round(Math.cos(f * 3.7) * k * 0.7)];
    },
    get frozen() { return stop > 0; },
    get pose() { return last; },
    update(dt) {
      if (shakeT > 0) shakeT -= dt;
      if (stop > 0) {
        stop -= dt;
        return;
      }
      const t0 = t;
      t += dt;
      if (t >= 0) fx.update(t0 < 0 ? t : dt);
      if (meta.loop && t >= D) {
        const n = Math.floor(t / D);
        if (n !== loopN) {
          loopN = n;
          nh = 0;
          nd = 0;
        }
      }
      const tt = meta.loop && t >= D ? t % D : t;
      for (; nh < hits.length && hits[nh].t <= tt; nh++) {
        const h = hits[nh];
        if (h.stop) stop = Math.max(stop, h.stop);
        if (h.shake) {
          shakeT = shake0 = h.shake;
          amp = h.amp ?? 2;
        }
        if (h.target !== false) targets.forEach((g, i) => (h.at === undefined || h.at === i) && g.hit(h));
        out.onHit?.(h);
      }
      for (; nd < dust.length && dust[nd].t <= tt; nd++) {
        const d = dust[nd], n = d.n ?? 6;
        for (let i = 0; i < n; i++) {
          const dir = d.dir ?? (R.next() < 0.5 ? -1 : 1);
          specks.push({ x: d.x + R.range(-3, 3), y: -1 - R.range(0, 2), vx: dir * R.range(22, 90), vy: R.range(-34, -6), age: 0, life: R.range(0.16, 0.4), big: R.next() < 0.45, c: d.c ? hex(d.c) : 0 });
        }
      }
      for (const k of specks) {
        k.age += dt;
        k.vx *= 1 - 5 * dt;
        k.vy += 110 * dt;
        k.x += k.vx * dt;
        k.y = Math.min(-1, k.y + k.vy * dt);
      }
      for (let i = specks.length - 1; i >= 0; i--) if (specks[i].age >= specks[i].life) specks.splice(i, 1);
      const q = poseNow();
      for (const g of targets) g.step(dt);

      gAcc += dt;
      if (q.ghost && gAcc >= 1 / 30) {
        gAcc = 0;
        ghosts.push({ q, age: 0 });
        if (ghosts.length > 7) ghosts.shift();
      }
      for (const g of ghosts) g.age += dt;
      while (ghosts.length && ghosts[0].age > GHOST_LIFE) ghosts.shift();
    },
    draw(frame, { body = true, target: showTarget = true } = {}) {
      const W = frame.w, H = frame.h, q = last ?? poseNow(), active = t >= 0;
      const tgt = showTarget ? targets : [];
      const drawTargets = () => tgt.forEach((g) => g.draw(frame.color, W, H, FX, FY, flip));
      const drawStraw = () => tgt.forEach((g) => g.drawStraw(frame.color, W, H, FX, FY, flip));
      const drawDust = () => {
        for (const k of specks) {
          const c = k.c || DUST[Math.min(3, Math.floor((k.age / k.life) * 4))], lx = Math.round(k.x), py = FY + Math.round(k.y);
          for (let i = 0; i < (k.big ? 2 : 1); i++) {
            const px = flip ? FX - lx - i - 1 : FX + lx + i;
            if (px >= 0 && py >= 0 && px < W && py < H) frame.color[py * W + px] = c;
          }
        }
      };
      const FX = X - (frame.ox | 0), FY = Y - (frame.oy | 0);
      if (!body) {
        if (active) fx.draw(frame, "back");
        drawTargets();
        if (active) fx.draw(frame, "front");
        drawStraw();
        return;
      }
      const rx = Math.round(q.x ?? 0), ry = Math.round(q.y ?? 0), BX = FX + (flip ? -rx : rx), BY = FY + ry;
      const r = posed(q), mirror = flip;
      const paint = (i, color) => {
        const px = mirror ? BX - r.xs[i] - 1 : BX + r.xs[i], py = BY + r.ys[i];
        if (px < 0 || py < 0 || px >= W || py >= H) return;
        frame.color[py * W + px] = color;

        if (ghosts.length) frame.light[py * W + px] = 0;
      };
      const drawGhosts = () => {
        for (const g of ghosts) {

          const gr = posed(g.q), gx = FX + (flip ? -Math.round(g.q.x ?? 0) : Math.round(g.q.x ?? 0)), gy = FY + Math.round(g.q.y ?? 0), k = 0.5 * (1 - g.age / GHOST_LIFE);
          const gm = flip, r0 = (gc & 255) * k, g0 = ((gc >>> 8) & 255) * k, b0 = ((gc >>> 16) & 255) * k;
          for (let i = 0; i < gr.n; i++) {
            const px = gm ? gx - gr.xs[i] - 1 : gx + gr.xs[i], py = gy + gr.ys[i];
            if (px < 0 || py < 0 || px >= W || py >= H) continue;
            const j = py * W + px, d = frame.light[j];
            frame.light[j] = (255 << 24) | (Math.min(255, ((d >>> 16) & 255) + b0) << 16) | (Math.min(255, ((d >>> 8) & 255) + g0) << 8) | Math.min(255, (d & 255) + r0);
          }
        }
      };
      const shadow = () => {
        const sy = FY, cx = FX + (flip ? -rx : rx), hw = 10 + (Math.abs(q.ffx - q.fbx) >> 1) - Math.min(8, Math.abs(ry) >> 1);
        if (sy < 0 || sy >= H) return;
        for (let dy = 0; dy < 2; dy++)
          for (let x = -hw + dy * 2; x <= hw - dy * 2; x++) {
            const px = cx + x, i = (sy + dy) * W + px;
            if (px < 0 || px >= W || sy + dy >= H) continue;
            frame.color[i] = (frame.color[i] & 0xffffff) | (Math.max(frame.color[i] >>> 24, 110) << 24);
          }
      };
      if (!a.onBody) {

        if (active) fx.draw(frame, "back");
        drawTargets();
        shadow();
        drawGhosts();
        for (let i = 0; i < r.n; i++) paint(i, r.color[i]);
        if (active) fx.draw(frame, "front");
        drawStraw();
        drawDust();
        return;
      }

      const { a: A, b: B } = scratchFor(frame);
      clearFrame(A);
      clearFrame(B);
      if (active) fx.draw(A, "back");
      B.color.set(A.color);
      B.light.set(A.light);
      const tt = meta.loop ? (t < 0 ? 0 : t % D) : clamp(t, 0, D), alpha = active ? actorAlphaOf(mod, tt, fx.options) : 1;
      drawActor(painterFor(B).place(FX, FY, flip), fx.options.actor ?? stockActor(2), alpha);
      if (active) fx.draw(B, "front");
      const follow = a.follow ?? 1, lean = (q.lean ?? 0) * follow, cr = (q.crouch ?? 0) * follow;

      const shiftOf = (ly) => {
        const k = clamp((-11 - ly) / 7, 0, 1), f = clamp((-1 - ly) / 6, 0, 1);
        return [Math.round(lean * k + rx * f), Math.round(cr * k + ry * f)];
      };
      const rest = (sx, sy) => {
        const c = (flip ? FX - sx - 1 : sx - FX) + 12, r0 = sy - FY + 38;
        return c >= 0 && r0 >= 0 && c < 24 && r0 < 38 && REST_MASK[r0 * 24 + c] === 1;
      };
      const C = frame.color, Ls = frame.light;
      const copy = (buf, sx, sy, s) => {
        const [dx, dy] = shiftOf(sy - FY), px = sx + (flip ? -dx : dx), py = sy + dy;
        if (px < 0 || py < 0 || px >= W || py >= H) return;
        const i = py * W + px;
        if (buf === Ls) {
          const d = Ls[i];
          Ls[i] = (255 << 24) | (Math.min(255, ((d >>> 16) & 255) + ((s >>> 16) & 255)) << 16) | (Math.min(255, ((d >>> 8) & 255) + ((s >>> 8) & 255)) << 8) | Math.min(255, (d & 255) + (s & 255));
        } else if (s >>> 24 === 255 || !C[i]) C[i] = s;
        else {
          const k = (s >>> 24) / 255, d = C[i];
          const ch = (n) => Math.round(((s >>> n) & 255) * k + ((d >>> n) & 255) * (1 - k));
          C[i] = (Math.max(s >>> 24, d >>> 24) << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0);
        }
      };
      drawTargets();
      shadow();
      for (let sy = 0; sy < H; sy++)
        for (let sx = 0; sx < W; sx++) {
          const c = A.color[sy * W + sx];
          if (c) copy(C, sx, sy, c);
        }
      drawGhosts();
      const restIndex = (s) => {
        const c = s % 24, r0 = (s / 24) | 0, sx = flip ? FX - (c - 12) - 1 : FX + c - 12, sy = FY + r0 - 38;
        return sx >= 0 && sy >= 0 && sx < W && sy < H ? sy * W + sx : -1;
      };
      for (let i = 0; i < r.n; i++) {
        const s = r.src[i] >= 0 ? NEAREST[r.src[i]] : -1;
        if (s < 0) {
          if (alpha > 0.5) paint(i, r.color[i]);
          continue;
        }
        const j = restIndex(s), v = j >= 0 ? B.color[j] : REST_PX[s];
        if (!v) continue;

        paint(i, v === REST_PX[s] ? r.color[i] : carry(v, REST_PX[s], r.color[i]));
      }
      for (let sy = 0; sy < H; sy++)
        for (let sx = 0; sx < W; sx++) {
          const j = sy * W + sx;
          if (B.color[j] && B.color[j] !== A.color[j] && !rest(sx, sy)) copy(C, sx, sy, B.color[j]);
          if (B.light[j] & 0xffffff) copy(Ls, sx, sy, B.light[j]);
        }
      drawStraw();
      drawDust();
    },
    stop() {
      fx.stop();
      stopped = true;
    },
    done() {
      return stopped ? fx.done() : t >= span.to && stop <= 0;
    },
  };
  poseNow();
  return out;
}
function actTiming(mod) {
  const a = mod.act;
  if (!a) return null;
  const { from, to } = actSpan(mod), D = mod.meta?.duration ?? 1;
  return {
    windup: -from,
    recovery: mod.meta?.loop ? 0 : Math.max(0, to - D),
    onBody: !!a.onBody,
    targets: (a.targets ?? (a.target ? [a.target] : [])).map((g) => g.x ?? 66),
    hits: (a.hits ?? []).map((h) => ({ t: h.t, freeze: h.stop ?? 0, shake: h.shake ?? 0, amp: h.amp ?? 0, push: h.target === false ? 0 : h.push ?? 1.2, skin: h.skin, at: h.at })),
    poses: (a.poses ?? []).map(([t, pose, how]) => ({ t, how: how ?? "smooth", pose })),
  };
}
function actBounds(mod) {
  const a = mod.act, [w, h] = mod.meta.size, [ox, oy] = mod.meta.origin;
  let x0 = -ox, y0 = -oy, x1 = w - ox, y1 = h - oy;
  const see = (p) => {
    const r = posed(p), X = Math.round(p.x ?? 0), Y = Math.round(p.y ?? 0), a = r.x0, b = r.x1;
    x0 = Math.min(x0, a + X - 1); x1 = Math.max(x1, b + X + 1); y0 = Math.min(y0, r.y0 + Y - 1); y1 = Math.max(y1, r.y1 + Y + 1);
  };
  const k = a?.poses;
  if (k) {
    for (let t = k[0][0]; t <= k[k.length - 1][0]; t += 1 / 12) see(poseAt(k, t));
    for (const key of k) see(key[1]);
  } else see(STAND);
  for (const g of a?.targets ?? (a?.target ? [a.target] : [])) {
    const tx = g.x ?? 66;
    x0 = Math.min(x0, tx - 30); x1 = Math.max(x1, tx + 36); y0 = Math.min(y0, -56);
  }
  return { x0, y0, x1, y1 };
}
},
function(__e){Object.defineProperty(__e,"STAND",{enumerable:true,configurable:true,get:()=>STAND});Object.defineProperty(__e,"WEAPONS",{enumerable:true,configurable:true,get:()=>WEAPONS});Object.defineProperty(__e,"shortfall",{enumerable:true,configurable:true,get:()=>shortfall});Object.defineProperty(__e,"posed",{enumerable:true,configurable:true,get:()=>posed});Object.defineProperty(__e,"skeleton",{enumerable:true,configurable:true,get:()=>skeleton});Object.defineProperty(__e,"posedParts",{enumerable:true,configurable:true,get:()=>posedParts});
const __ij3u145=__r(3);const hex=__ij3u145.hex;
const __ihrys9a=__r(10);const DUMMY_PAL=__ihrys9a.DUMMY_PAL;
const PAL = Object.fromEntries(Object.entries(DUMMY_PAL).map(([k, v]) => [k, hex(v) >>> 0]));
const INK = PAL.k, SEAM = PAL.J, MARK = PAL.m;

const SHELL = [PAL.A, PAL.B, PAL.C, PAL.D], CORE = [PAL.E, PAL.F, PAL.G, PAL.G];
const DEG = Math.PI / 180, W0 = 24, H0 = 38;

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const unit = (a) => mul(a, 1 / (len(a) || 1e-6));
const rotY = (t) => { const c = Math.cos(t), s = Math.sin(t); return [c, 0, s, 0, 1, 0, -s, 0, c]; };
const rotZ = (t) => { const c = Math.cos(t), s = Math.sin(t); return [c, -s, 0, s, c, 0, 0, 0, 1]; };
const mm = (A, B) => { const o = new Array(9); for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) o[r * 3 + c] = A[r * 3] * B[c] + A[r * 3 + 1] * B[3 + c] + A[r * 3 + 2] * B[6 + c]; return o; };
const mv = (M, v) => [M[0] * v[0] + M[1] * v[1] + M[2] * v[2], M[3] * v[0] + M[4] * v[1] + M[5] * v[2], M[6] * v[0] + M[7] * v[1] + M[8] * v[2]];
const tv = (M, v) => [M[0] * v[0] + M[3] * v[1] + M[6] * v[2], M[1] * v[0] + M[4] * v[1] + M[7] * v[2], M[2] * v[0] + M[5] * v[1] + M[8] * v[2]];
const clamp01 = (v) => Math.max(0, Math.min(1, v));

const M = {
  pelvis: 19.7, spine1: 2.8, spine2: 4.6, shoulderUp: 2.5, shoulderOut: 5.9, neckUp: 4.0, headUp: 3.1,
  hipDown: 1.1, hipOut: 2.8, thigh: 8.6, shin: 8.3, upper: 7.6, fore: 7.4, turn: 36 * DEG,
};
const STAND = { lean: 0, crouch: 0, yaw: 0, fx: -3, fy: -15, bx: 5, by: -15, ffx: -2, ffy: -4, fbx: 3, fby: -4 };

function ik(a, target, L1, L2, pole) {
  let to = sub(target, a), d = len(to);
  const reach = L1 + L2 - 0.02;
  if (d > reach) { to = mul(to, reach / d); d = reach; }
  const u = unit(to), along = (L1 * L1 - L2 * L2 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, L1 * L1 - along * along));
  let v = sub(pole, mul(u, dot(pole, u)));
  v = len(v) < 1e-4 ? unit(cross(u, [0, 0, 1])) : unit(v);
  return { joint: add(a, add(mul(u, along), mul(v, h))), end: add(a, to), u, v };
}
function frame(t, R) {
  return { t, R };
}

function boneFrame(a, b, pole) {
  const x = unit(sub(b, a));
  let y = sub(pole, mul(x, dot(pole, x)));
  y = len(y) < 1e-4 ? unit(cross(x, [0, 0, 1])) : unit(y);
  const z = cross(x, y);
  return frame(a, [x[0], y[0], z[0], x[1], y[1], z[1], x[2], y[2], z[2]]);
}
const weaponOf = (name) => WEAPONS[name];
function solve(pose) {
  const q = { ...STAND, ...pose }, lean = q.lean, W = q.weapon && weaponOf(q.weapon), OW = q.offWeapon && weaponOf(q.offWeapon);
  const sa = q.sa ?? 0, wl = q.wl ?? 1, axisZ = Math.sqrt(Math.max(0, 1 - wl * wl)) * (q.wz ?? 1);
  const axis = [Math.cos(sa) * wl, -Math.sin(sa) * wl, axisZ], side = [-Math.sin(sa), -Math.cos(sa), 0];
  const two = !!(q.two && W), nearZ = q.fz ?? (two ? 3 : 4.5);

  const fwd = (q.fx - STAND.fx) / 24, farFwd = two ? 0 : (q.bx - STAND.bx) / 22;
  let turn = M.turn + (fwd >= 0 ? -44 * DEG * Math.min(1, fwd) : 28 * DEG * Math.min(1, -fwd * 1.8));
  turn += (farFwd > 0 ? 34 * DEG * Math.min(1, farFwd) : 0) + (q.twist ?? 0) * 4 * DEG;
  if (q.turn !== undefined) turn = q.turn;
  const hipTurn = M.turn + (turn - M.turn) * 0.45, tilt = Math.atan2(lean, 13);
  const Rp = mm(rotZ(-tilt * 0.25), rotY(-hipTurn)), Rc = mm(rotZ(-tilt), rotY(-turn));

  const ankleN = [q.ffx, -q.ffy - 1.8, q.fzz ?? 2.4], ankleF = [q.fbx, -q.fby - 1.8, q.bzz ?? -2.4];
  let pelvis = [lean * 0.2, M.pelvis - q.crouch, 0];
  const hipAt = (s) => add(pelvis, mv(Rp, [0, -M.hipDown, s * M.hipOut]));
  const maxLeg = (M.thigh + M.shin) * 0.995;
  for (const [s, a] of [[1, ankleN], [-1, ankleF]]) {
    const h = hipAt(s), dx = h[0] - a[0], dz = h[2] - a[2], flat = dx * dx + dz * dz;
    if (flat < maxLeg * maxLeg) {
      const top = a[1] + Math.sqrt(maxLeg * maxLeg - flat);
      if (h[1] > top) pelvis = [pelvis[0], pelvis[1] - (h[1] - top), pelvis[2]];
    }
  }
  const waist = add(pelvis, [Math.sin(tilt * 0.45) * M.spine1, Math.cos(tilt * 0.45) * M.spine1, 0]);
  const chest = add(waist, [Math.sin(tilt) * M.spine2, Math.cos(tilt) * M.spine2, 0]);
  const neck = add(chest, mv(Rc, [0, M.neckUp, 0]));

  const headTurn = M.turn * 0.9 + (turn - M.turn) * 0.35, nod = tilt * 0.35 + (q.hy ?? 0) * 7 * DEG, roll = (q.hx ?? 0) * 7 * DEG;
  const Rh = mm(rotZ(-nod - roll), rotY(-headTurn));
  const head = add(neck, mv(Rh, [0.15, M.headUp, 0]));

  const pick = (s, target) => {
    const base = add(chest, mv(Rc, [0, M.shoulderUp, s * M.shoulderOut])), to = sub(target, base), d = len(to);
    return add(base, mul(unit(to), Math.min(1.8, Math.max(0, d - 11) * 0.35)));
  };
  const nearT = [q.fx, -q.fy, nearZ];
  const farT = two ? [q.fx + axis[0] * W.two, -q.fy + axis[1] * W.two, nearZ + axis[2] * W.two] : [q.bx, -q.by, q.bz ?? (q.armsFront ? 5.5 : -4.5)];
  const sN = pick(1, nearT), sF = pick(-1, farT);
  const pole = (s, T, shoulder, hold) => {

    const up = clamp01((T[1] - shoulder[1] + 2) / 10);
    const base = [-0.55 + up * 1.1, -1 + up * 0.9, s * (0.45 + up * 0.5)];
    if (!hold) return base;

    const u = unit(sub(T, shoulder));
    let best = base, score = Infinity;
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2, x = unit(cross(u, [0.3, 1, 0.2])), y = cross(u, x), v = add(mul(x, Math.cos(a)), mul(y, Math.sin(a)));
      const A = ik(shoulder, T, M.upper, M.fore, v), f = unit(sub(A.end, A.joint));
      const cost = Math.abs(dot(f, hold)) * 0.7 + (1 - dot(unit(base), v)) * 0.55;
      if (cost < score) { score = cost; best = v; }
    }
    return best;
  };
  const holdN = W ? (W.across ? side : axis) : null, holdF = two ? (W.across ? side : axis) : OW ? [Math.cos(q.sb ?? Math.PI), -Math.sin(q.sb ?? Math.PI), 0] : null;
  const armN = ik(sN, nearT, M.upper, M.fore, pole(1, nearT, sN, holdN)), armF = ik(sF, farT, M.upper, M.fore, pole(-1, farT, sF, holdF));

  const kneePole = (s) => mv(Rp, [1, 0, s * 0.35]);
  const hipN = hipAt(1), hipF = hipAt(-1);
  const legN = ik(hipN, ankleN, M.thigh, M.shin, kneePole(1)), legF = ik(hipF, ankleF, M.thigh, M.shin, kneePole(-1));
  const footDir = (s) => { const t = hipTurn * 0.6 + s * 8 * DEG; return [Math.cos(t), 0, Math.sin(t)]; };
  const B = {
    pelvis: frame(pelvis, Rp), waist: frame(waist, mm(rotZ(-tilt * 0.6), rotY(-(turn + hipTurn) / 2))), chest: frame(chest, Rc), head: frame(head, Rh), neck: frame(neck, Rh),
    upperN: boneFrame(sN, armN.joint, armN.v), foreN: boneFrame(armN.joint, armN.end, armN.v), upperF: boneFrame(sF, armF.joint, armF.v), foreF: boneFrame(armF.joint, armF.end, armF.v),
    thighN: boneFrame(hipN, legN.joint, legN.v), shinN: boneFrame(legN.joint, legN.end, legN.v), thighF: boneFrame(hipF, legF.joint, legF.v), shinF: boneFrame(legF.joint, legF.end, legF.v),
  };
  B.footN = frame(legN.end, mm(rotY(-Math.atan2(footDir(1)[2], footDir(1)[0])), rotZ(q.toeF ? -55 * DEG : 0)));
  B.footF = frame(legF.end, mm(rotY(-Math.atan2(footDir(-1)[2], footDir(-1)[0])), rotZ(q.toeB ? -55 * DEG : 0)));
  return { B, W, OW, q, axis, side, armN, armF, legN, legF, sN, sF, hipN, hipF, turn };
}

const BW = 300, BH = 240, OX = 150, OY = 180; // the scratch grid, big enough for a raised scythe; feet at (OX, OY)
const Zb = new Float32Array(BW * BH), Tone = new Float32Array(BW * BH), Part = new Int8Array(BW * BH), Mat = new Int8Array(BW * BH), Fr = new Int8Array(BW * BH), LX = new Float32Array(BW * BH), LY = new Float32Array(BW * BH), Col = new Uint32Array(BW * BH);
const touched = [];
const LIGHT = unit([-0.55, 0.72, 0.5]);
let clipBody = false, clipWeapon = false, curFrameIndex = 0, curDim = 0, onlyPart = 0;
const FRAME_IDS = ["pelvis", "waist", "chest", "head", "neck", "upperN", "foreN", "upperF", "foreF", "thighN", "shinN", "thighF", "shinF", "footN", "footF"];
function plot(i, z, tone, part, mat, wx, wy, color) {
  if (onlyPart && part !== onlyPart) return;
  if (Part[i] === 0) touched.push(i);
  else if (z <= Zb[i]) return;
  Zb[i] = z;
  Tone[i] = tone;
  Part[i] = part;
  Mat[i] = mat;
  Fr[i] = curFrameIndex;
  LX[i] = wx;
  LY[i] = wy;
  Col[i] = color;
}
function sphere(c, r, part, mat) {
  const x0 = Math.floor(c[0] - r), x1 = Math.ceil(c[0] + r), y0 = Math.floor(c[1] - r), y1 = Math.ceil(c[1] + r);
  for (let wy = y0; wy <= y1; wy++)
    for (let wx = x0; wx <= x1; wx++) {
      const dx = wx - c[0], dy = wy - c[1], d2 = dx * dx + dy * dy;
      if (d2 > r * r || (clipBody && wy < 1.5)) continue;
      const dz = Math.sqrt(r * r - d2), n = [dx / r, dy / r, dz / r], i = (OY - wy) * BW + (OX + wx);
      plot(i, c[2] + dz, dot(n, LIGHT), part, mat, wx, wy, 0);
    }
}
function sweep(a, b, ra, rb, part, mat, bulge = 0) {
  const n = Math.max(2, Math.ceil(len(sub(b, a)) / 0.4));
  for (let k = 0; k <= n; k++) {
    const u = k / n;
    sphere(add(a, mul(sub(b, a), u)), ra + (rb - ra) * u + bulge * Math.sin(u * Math.PI), part, mat);
  }
}

function ellipsoid(c, R, r, part, mat) {
  const big = Math.max(r[0], r[1], r[2]), x0 = Math.floor(c[0] - big), x1 = Math.ceil(c[0] + big), y0 = Math.floor(c[1] - big), y1 = Math.ceil(c[1] + big);
  const Rt = [R[0], R[3], R[6], R[1], R[4], R[7], R[2], R[5], R[8]], D = [1 / (r[0] * r[0]), 1 / (r[1] * r[1]), 1 / (r[2] * r[2])];

  const A = new Array(9);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) A[i * 3 + j] = R[i * 3] * D[0] * R[j * 3] + R[i * 3 + 1] * D[1] * R[j * 3 + 1] + R[i * 3 + 2] * D[2] * R[j * 3 + 2];
  void Rt;
  for (let wy = y0; wy <= y1; wy++)
    for (let wx = x0; wx <= x1; wx++) {
      if (clipBody && wy < 1.5) continue;
      const dx = wx - c[0], dy = wy - c[1];
      const qa = A[8], qb = 2 * (A[2] * dx + A[5] * dy), qc = A[0] * dx * dx + 2 * A[1] * dx * dy + A[4] * dy * dy - 1, disc = qb * qb - 4 * qa * qc;
      if (disc < 0) continue;
      const dz = (-qb + Math.sqrt(disc)) / (2 * qa);
      const n = unit([A[0] * dx + A[1] * dy + A[2] * dz, A[3] * dx + A[4] * dy + A[5] * dz, A[6] * dx + A[7] * dy + A[8] * dz]);
      plot((OY - wy) * BW + (OX + wx), c[2] + dz, dot(n, LIGHT), part, mat, wx, wy, 0);
    }
}

const PART = { pelvis: 1, waist: 2, chest: 3, neck: 4, head: 5, face: 6, upperN: 7, elbowN: 8, foreN: 9, handN: 10, upperF: 11, elbowF: 12, foreF: 13, handF: 14, thighN: 15, kneeN: 16, shinN: 17, footN: 18, thighF: 19, kneeF: 20, shinF: 21, footF: 22, weapon: 23, offWeapon: 24 };
const useFrame = (name) => { curFrameIndex = FRAME_IDS.indexOf(name); };
function drawBody(S) {
  const { B, armN, armF, legN, legF, sN, sF, hipN, hipF, turn } = S, F_ = (name) => B[name];
  useFrame("pelvis");
  ellipsoid(add(F_("pelvis").t, mv(F_("pelvis").R, [0, -0.2, 0])), F_("pelvis").R, [2.9, 2.6, 4.2], PART.pelvis, 0);
  useFrame("waist");
  sweep(F_("pelvis").t, F_("chest").t, 3, 3.3, PART.waist, 1);
  useFrame("chest");
  ellipsoid(add(F_("chest").t, mv(F_("chest").R, [0.2, 0.9, 0])), F_("chest").R, [3.4, 4.2, 5.5], PART.chest, 0);
  useFrame("neck");
  sweep(F_("neck").t, add(F_("neck").t, mv(F_("head").R, [0, 1.6, 0])), 1.25, 1.15, PART.neck, 1);
  useFrame("head");
  ellipsoid(F_("head").t, F_("head").R, [3, 3.3, 2.8], PART.head, 0);
  ellipsoid(add(F_("head").t, mv(F_("head").R, [0.85, -0.45, 0])), F_("head").R, [2.4, 2.7, 2.35], PART.face, 0);
  const arm = (far, A, sh, up, el, fo, ha, nameU, nameF) => {
    curDim = far ? 1 : 0;
    useFrame(nameU);
    sphere(sh, 2.5, up, 0);
    sweep(sh, A.joint, 2.1, 1.6, up, 0);
    sphere(A.joint, 1.45, el, 1);
    useFrame(nameF);
    sweep(A.joint, A.end, 1.6, 1.2, fo, 0, 0.15);
    sphere(A.end, 1.9, ha, 0);
    curDim = 0;
  };
  arm(false, armN, sN, PART.upperN, PART.elbowN, PART.foreN, PART.handN, "upperN", "foreN");
  arm(true, armF, sF, PART.upperF, PART.elbowF, PART.foreF, PART.handF, "upperF", "foreF");
  const leg = (far, L, hip, th, kn, sh, fo, nameT, nameS, nameFt) => {
    useFrame(nameT);
    sweep(hip, L.joint, 3.2, 2.2, th, 0);
    sphere(L.joint, 1.9, kn, 1);
    useFrame(nameS);
    sweep(L.joint, L.end, 2.15, 1.4, sh, 0, 0.4);
    useFrame(nameFt);
    const R = F_(nameFt).R, a = F_(nameFt).t;
    sweep(add(a, mv(R, [-1.5, -0.6, 0])), add(a, mv(R, [4.6, -1.1, 0])), 1.7, 1.25, fo, 0);
  };
  leg(false, legN, hipN, PART.thighN, PART.kneeN, PART.shinN, PART.footN, "thighN", "shinN", "footN");
  leg(true, legF, hipF, PART.thighF, PART.kneeF, PART.shinF, PART.footF, "thighF", "shinF", "footF");
  void turn;
}

function along(H, axis, side, part) {
  const n = cross(axis, side);
  const T = (i, k, c, lift = 0) => {
    const x = H[0] + axis[0] * i + side[0] * k + n[0] * lift, y = H[1] + axis[1] * i + side[1] * k + n[1] * lift, z = H[2] + axis[2] * i + side[2] * k + n[2] * lift;
    const wx = Math.round(x), wy = Math.round(y);
    if (clipWeapon && wy < 0) return;
    const idx = (OY - wy) * BW + (OX + wx);
    if (idx < 0 || idx >= BW * BH) return;
    curFrameIndex = -1;
    plot(idx, z + 0.05, 2, part, 2, wx, wy, c);
  };
  T.at = (i, k) => [H[0] + axis[0] * i + side[0] * k, H[1] + axis[1] * i + side[1] * k, H[2] + axis[2] * i + side[2] * k];
  return T;
}
const STEEL = Object.fromEntries(Object.entries({ hi: "#ffffff", a: "#e8edf6", b: "#a4afc6", d: "#68748f", gold: "#ffd84a", goldD: "#b8862a", grip: "#7a3a2a", gripD: "#4a2018", wood: "#8a5a32", woodD: "#5a3820", dark: "#3a3448", darkD: "#262033", olive: "#58663f", oliveA: "#7d8c58", oliveD: "#3a4529" }).map(([k, v]) => [k, hex(v) >>> 0]));
function blade(T, from, length, w) {
  for (let i = from; i <= from + length + 0.01; i += 0.4) {
    const r = i - from, wd = r > length - 5 ? Math.max(0, ((length - r) / 5) * w) : w;
    for (let k = -wd; k <= wd + 0.01; k += 0.4) T(i, k, k < -w * 0.4 ? STEEL.hi : k > w * 0.4 ? STEEL.d : STEEL.a);
  }
}
const haft = (T, from, to, a, d, r = 0.8) => {
  for (let i = from; i <= to; i += 0.4) for (let k = -r; k <= r + 0.01; k += 0.4) T(i, k, k > 0.1 ? d : a);
};
const WEAPONS = {

  sword: { two: -4.4, draw(T, q) {
    const end = q.two ? -6.5 : -2.6;
    haft(T, end, 2.2, STEEL.grip, STEEL.gripD);
    for (let k = -1.4; k <= 1.4; k += 0.4) T(end - 0.4, k, STEEL.gold);
    for (let k = -4.6; k <= 4.6; k += 0.4) (T(2.6, k, Math.abs(k) > 3.8 ? STEEL.goldD : STEEL.gold), T(3, k, STEEL.goldD));
    blade(T, 3.2, 25, 2.2);
  } },
  greatsword: { two: -4.8, draw(T) {
    haft(T, -7.2, 2.2, STEEL.grip, STEEL.gripD);
    for (let k = -1.8; k <= 1.8; k += 0.4) T(-7.6, k, STEEL.gold);
    for (let k = -6.6; k <= 6.6; k += 0.4) (T(2.6, k, Math.abs(k) > 5.6 ? STEEL.goldD : STEEL.gold), T(3, k, STEEL.goldD));
    blade(T, 3.2, 31, 3);
    for (let i = 4; i <= 28; i += 0.4) T(i, 0, STEEL.b);
  } },
  dagger: { draw(T) {
    haft(T, -2.4, 1.8, STEEL.grip, STEEL.gripD);
    for (let k = -2.6; k <= 2.6; k += 0.4) T(2.2, k, STEEL.goldD);
    blade(T, 2.6, 10, 1.3);
  } },
  spear: { two: -12, draw(T) {
    haft(T, -18, 36, STEEL.wood, STEEL.woodD, 0.5);
    blade(T, 36, 11, 2);
    for (let k = -2.4; k <= 2.4; k += 0.4) T(36, k, STEEL.goldD);
  } },
  hammer: { two: -7, draw(T) {
    for (const lift of [-0.8, 0, 0.8]) for (let i = -10; i <= 18; i += 0.4) for (let k = -0.8; k <= 0.81; k += 0.4) T(i, k, k > 0.1 ? STEEL.woodD : STEEL.wood, lift);

    for (let i = 18; i <= 28; i += 0.4) for (let k = -9; k <= 9; k += 0.4) {
      const face = Math.abs(k) > 7.4 ? (k < 0 ? STEEL.a : STEEL.d) : i < 20 ? STEEL.hi : i > 26.4 ? STEEL.d : Math.abs(k) < 2 ? STEEL.gold : STEEL.b;
      T(i, k, face, 4.5);
      T(i, k, face, -4.5);
      if (i < 18.4 || i > 27.6 || Math.abs(k) > 8.6) for (let l = -4; l <= 4; l += 0.4) T(i, k, k < 0 ? STEEL.a : i > 27.6 ? STEEL.d : STEEL.b, l);
    }
  } },
  scythe: { two: -11, draw(T) {
    haft(T, -16, 31, STEEL.dark, STEEL.darkD, 0.5);
    for (let j = 0; j <= 28; j += 0.4) {
      const u = j / 28, w = 3.2 * (1 - u) + 0.3, b = 31.5 - u * u * 12;
      for (let k = -w; k <= w; k += 0.4) T(b + k, j + 0.8, k > w * 0.3 ? STEEL.hi : k < -w * 0.4 ? STEEL.d : STEEL.b);
    }
  } },
  claw: { draw(T) {
    for (const q0 of [-2.4, 0, 2.4])
      for (let i = 2; i <= 9.5; i += 0.4) {
        const u = (i - 2) / 7.5, k = q0 + u * u * 1.8;
        T(i, k, u > 0.55 ? STEEL.hi : STEEL.a);
        if (u < 0.6) T(i, k + 0.8, STEEL.d);
      }
  } },
  bow: { across: true, draw(T, q, off) {
    for (let u = -1; u <= 1.001; u += 0.025) {
      const k = u * 17, i = 6 * (1 - u * u) - 1;
      T(i, k, Math.abs(u) > 0.85 ? STEEL.goldD : STEEL.wood);
      T(i + 0.8, k, STEEL.woodD);
    }
    const tipA = T.at(-1, -17), tipB = T.at(-1, 17), mid = q.pull ? off : T.at(-1, 0);
    const line = (A, B, c) => {
      const n = Math.max(2, Math.ceil(len(sub(B, A)) / 0.4)), Z = STEEL.a;
      for (let k = 0; k <= n; k++) {
        const P = add(A, mul(sub(B, A), k / n)), wx = Math.round(P[0]), wy = Math.round(P[1]), idx = (OY - wy) * BW + (OX + wx);
        curFrameIndex = -1;
        plot(idx, P[2] + 0.05, 2, PART.weapon, 2, wx, wy, c ?? Z);
      }
    };
    line(tipA, mid);
    line(tipB, mid);
    if (q.nocked) {
      const nock = mid, tip = T.at(13, 0);
      line(nock, tip, STEEL.wood);
      for (let i = 9; i <= 13; i += 0.4) for (let k = -(13 - i) * 0.45; k <= (13 - i) * 0.45; k += 0.4) T(i, k, STEEL.hi);
    }
  } },
  pistol: { across: true, draw(T) {
    for (let i = -1; i <= 9.5; i += 0.4) for (let k = -4.2; k <= -2.4; k += 0.4) T(i, k, k < -3.6 ? STEEL.a : k > -2.9 ? STEEL.d : STEEL.b);
    for (let i = -1.2; i <= 1.2; i += 0.4) for (let k = -2.4; k <= 2.4; k += 0.4) T(i, k, STEEL.gripD);
    T(9, -4.6, STEEL.hi);
  } },
  launcher: { two: -9, draw(T) {
    for (let i = -14; i <= 22; i += 0.4) for (let k = -6; k <= -1; k += 0.4) T(i, k, k < -4.8 ? STEEL.oliveA : k > -2.2 ? STEEL.oliveD : Math.abs(i - 3) < 1.4 ? STEEL.gold : STEEL.olive);
    for (let k = -6.8; k <= -0.2; k += 0.4) (T(22.4, k, STEEL.b), T(-14.4, k, STEEL.d));
  } },
  handle: { draw(T) {
    haft(T, -2.6, 6, STEEL.grip, STEEL.gripD);
    for (let k = -1.6; k <= 1.6; k += 0.4) (T(-3, k, STEEL.gold), T(6.4, k, STEEL.gold));
  } },
};

function finish(S, restFrames) {
  const dim = (part) => part >= PART.upperF && part <= PART.handF ? 1 : part >= PART.thighF && part <= PART.footF ? 1 : 0;
  const toneOf = (v, part) => {
    let t = v > 0.8 ? 0 : v > 0.42 ? 1 : v > 0.08 ? 2 : 3;
    t = Math.min(3, t + dim(part));
    return t;
  };
  const tones = new Map();
  for (const i of touched) tones.set(i, toneOf(Tone[i], Part[i]));

  for (const i of touched) {
    if (Mat[i] === 2) continue;
    const t = tones.get(i), votes = [0, 0, 0, 0];
    let same = false;
    for (const d of [-1, 1, -BW, BW]) {
      const j = i + d;
      if (Part[j] !== Part[i] || !tones.has(j)) continue;
      const u = tones.get(j);
      votes[u]++;
      if (u === t) same = true;
    }
    if (!same && votes.some((v) => v > 0)) tones.set(i, votes.indexOf(Math.max(...votes)));
  }
  for (const i of touched) {
    if (Mat[i] === 2) continue;
    Col[i] = (Mat[i] === 1 ? CORE : SHELL)[tones.get(i)];
  }

  const marks = new Map();
  for (const i of touched) {
    for (const d of [1, BW]) {
      const j = i + d;
      if (Part[j] === 0 || Part[j] === Part[i]) continue;
      const far = Zb[i] < Zb[j] ? i : j, dz = Math.abs(Zb[i] - Zb[j]), steel = Mat[i] === 2 || Mat[j] === 2;
      if (Mat[far] === 2 && dz < 1) continue;
      const ink = steel || dz > 2.2;
      if (ink) marks.set(far, INK);
      else if (!marks.has(far)) marks.set(far, SEAM);
    }
  }
  for (const [i, c] of marks) Col[i] = c;

  const { B } = S, chestAt = add(B.chest.t, mv(B.chest.R, [3, 1.6, -1.8]));
  if (mv(B.chest.R, [1, 0, 0])[2] > 0.15) {
    const i = (OY - Math.round(chestAt[1])) * BW + (OX + Math.round(chestAt[0]));
    if (Part[i] === PART.chest) Col[i] = MARK;
  }

  const list = touched.slice(), ring = new Map();
  for (const i of list) for (const d of [-1, 1, -BW, BW]) { const j = i + d; if (Part[j] === 0 && !ring.has(j)) ring.set(j, i); }
  const n = list.length + ring.size, out = { n, xs: new Int16Array(n), ys: new Int16Array(n), color: new Uint32Array(n), src: new Int16Array(n), ink: new Uint8Array(n), x0: 0, y0: 0, x1: 0, y1: 0 };
  const srcFor = (i) => {
    const f = Fr[i];
    if (f < 0 || !restFrames) return -1;
    const name = FRAME_IDS[f], A = B[name], R0 = restFrames[name], wx = (i % BW) - OX, wy = OY - ((i / BW) | 0), P = [wx, wy, Zb[i]];
    const lp = tv(A.R, sub(P, A.t)), rp = add(R0.t, mv(R0.R, lp)), c = Math.round(rp[0]) + 12, r = 38 - Math.round(rp[1]);
    return c < 0 || r < 0 || c >= W0 || r >= H0 ? -1 : r * W0 + c;
  };
  let k = 0, x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  const push = (i, c, s, isInk) => {
    const x = (i % BW) - OX, y = ((i / BW) | 0) - OY;
    out.xs[k] = x; out.ys[k] = y; out.color[k] = c; out.src[k] = s; out.ink[k] = isInk ? 1 : 0;
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    k++;
  };
  for (const i of list) push(i, Col[i], srcFor(i), Col[i] === INK);
  for (const [j, i] of ring) push(j, INK, srcFor(i), true);
  let zs = 0;
  for (const i of list) zs += Zb[i];
  Object.assign(out, { x0, y0, x1, y1, z: list.length ? zs / list.length : 0 });
  for (const i of list) Part[i] = 0;
  touched.length = 0;
  return out;
}
const turnAll = (S, a) => {

  const R = rotY(-a), P = (v) => mv(R, v);
  for (const f of Object.values(S.B)) { f.t = P(f.t); f.R = mm(R, f.R); }
  for (const A of [S.armN, S.armF, S.legN, S.legF]) { A.joint = P(A.joint); A.end = P(A.end); }
  S.sN = P(S.sN); S.sF = P(S.sF); S.hipN = P(S.hipN); S.hipF = P(S.hipF);
  S.axis = P(S.axis); S.side = P(S.side);
};
let REST_FRAMES = null;
function render(pose) {
  const S = solve(pose), q = S.q, whole = (q.yaw ?? 0) + (q.face === -1 ? Math.PI : 0);
  if (whole) turnAll(S, whole);
  const air = (q.y ?? 0) < -0.5;
  clipBody = !air;
  clipWeapon = !air;
  drawBody(S);
  clipBody = false;
  if (S.W) S.W.draw(along(S.armN.end, S.axis, S.side, PART.weapon), q, S.armF.end);
  if (S.OW) {
    const sb = q.sb ?? Math.PI;
    let ax = [Math.cos(sb), -Math.sin(sb), 0], sd = [-Math.sin(sb), -Math.cos(sb), 0];
    if (whole) { const R = rotY(-whole); ax = mv(R, ax); sd = mv(R, sd); }
    S.OW.draw(along(S.armF.end, ax, sd, PART.offWeapon), q, S.armF.end);
  }
  clipWeapon = false;
  return finish(S, REST_FRAMES);
}
REST_FRAMES = solve({}).B;
const CACHE = new Map();
const keyOf = (p) => {
  let s = (p.y ?? 0) < -0.5 ? "air," : "";
  for (const k of Object.keys(p).sort()) {
    const v = p[k];
    if (v === undefined || k === "x" || k === "y" || k === "ghost") continue;
    s += k + (typeof v === "number" ? (k === "sa" || k === "sb" || k === "wl" || k === "yaw" || k === "turn" ? Math.round(v * 20) : Math.round(v)) : v) + ",";
  }
  return s;
};
function shortfall(pose) {
  const S = solve(pose), q = S.q, near = len(sub(S.armN.end, [q.fx, -q.fy, S.armN.end[2]])), far = q.two ? 0 : len(sub(S.armF.end, [q.bx, -q.by, S.armF.end[2]]));
  return Math.max(near, far);
}
function posed(pose) {
  const key = keyOf(pose);
  let r = CACHE.get(key);
  if (!r) {
    if (CACHE.size > 6000) CACHE.clear();
    CACHE.set(key, (r = render(pose)));
  }
  return r;
}
function skeleton(pose) {
  const S = solve(pose), q = S.q, whole = (q.yaw ?? 0) + (q.face === -1 ? Math.PI : 0);
  if (whole) turnAll(S, whole);
  const { B, armN, armF, legN, legF, sN, sF, hipN, hipF } = S, at = (f, v) => add(f.t, mv(f.R, v));
  const J = {
    pelvis: B.pelvis.t, waist: B.waist.t, chest: B.chest.t, neck: B.neck.t, head: B.head.t, crown: at(B.head, [0, 3.3, 0]),
    shoulderN: sN, elbowN: armN.joint, handN: armN.end, shoulderF: sF, elbowF: armF.joint, handF: armF.end,
    hipN, kneeN: legN.joint, ankleN: legN.end, toeN: at(B.footN, [4.6, -1.1, 0]), hipF, kneeF: legF.joint, ankleF: legF.end, toeF: at(B.footF, [4.6, -1.1, 0]),
  };
  const joints = Object.fromEntries(Object.entries(J).map(([k, v]) => [k, [v[0], -v[1], v[2]]]));
  const bones = [["pelvis", "waist"], ["waist", "chest"], ["chest", "neck"], ["neck", "head"], ["head", "crown"], ["chest", "shoulderN"], ["shoulderN", "elbowN"], ["elbowN", "handN"], ["chest", "shoulderF"], ["shoulderF", "elbowF"], ["elbowF", "handF"], ["pelvis", "hipN"], ["hipN", "kneeN"], ["kneeN", "ankleN"], ["ankleN", "toeN"], ["pelvis", "hipF"], ["hipF", "kneeF"], ["kneeF", "ankleF"], ["ankleF", "toeF"]];
  return { joints, bones, handles: ["handN", "handF", "ankleN", "ankleF"] };
}
function posedParts(pose) {
  const out = [];
  for (const [name, part] of Object.entries(PART)) {
    onlyPart = part;
    const r = render(pose);
    onlyPart = 0;
    if (!r.n) continue;
    let cx = 0, cy = 0;
    for (let i = 0; i < r.n; i++) { cx += r.xs[i]; cy += r.ys[i]; }
    out.push({ name, part, n: r.n, xs: r.xs, ys: r.ys, color: r.color, cx: cx / r.n, cy: cy / r.n, z: r.z });
  }
  return out;
}
},
function(__e){Object.defineProperty(__e,"READY",{enumerable:true,configurable:true,get:()=>READY});
const READY = { crouch: 3, fx: 11, fy: -21, bx: 9, by: -21, ffx: 7, fbx: -7 };
},
function(__e){Object.defineProperty(__e,"chain",{enumerable:true,configurable:true,get:()=>chain});Object.defineProperty(__e,"shiftKeys",{enumerable:true,configurable:true,get:()=>shiftKeys});Object.defineProperty(__e,"shiftHits",{enumerable:true,configurable:true,get:()=>shiftHits});
const __i3hz75q=__r(9);const createFx=__i3hz75q.createFx;
function chain(cues) {
  return (o) => {
    const list = cues.map(({ fx, t, until, x, y, flip, ...opts }, i) => ({ fx, t: t ?? 0, until: until ?? Infinity, x: x ?? 0, y: y ?? 0, flip: !!flip, opts: { ...opts, seed: (o.seed ?? 1) + i }, inst: null, over: false }));
    let t = 0;
    const at = (v) => (typeof v === "function" ? v(t) : v);
    const each = (p, layer) => {
      const { frame, tx, ty, fx: sign, cs, sn, fade, lightK } = p;
      for (const c of list) {
        if (!c.inst || c.over) continue;
        c.inst.options.x = tx + sign * at(c.x);
        c.inst.options.y = ty + at(c.y);
        c.inst.options.flip = sign < 0 !== c.flip;
        c.inst.draw(frame, layer);
      }

      Object.assign(p, { tx, ty, fx: sign, cs, sn, fade, lightK });
    };
    return {
      update(dt) {
        t += dt;
        for (const c of list) {
          if (c.over || t < c.t) continue;
          if (!c.inst) c.inst = createFx(c.fx, c.opts);
          else c.inst.update(dt);
          if (t >= c.until || (c.inst.done() && !c.fx.meta?.loop)) c.over = true;
        }
      },
      drawBack: (p) => each(p, "back"),
      draw: (p) => each(p, "front"),
    };
  };
}
const shiftKeys = (keys, dt, { dx = 0, ...over } = {}) => keys.map(([t, pose, how]) => [t + dt, { ...pose, ...over, x: (pose.x ?? 0) + dx }, how]);
const shiftHits = (hits, dt) => hits.map((h) => ({ ...h, t: h.t + dt }));
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i6slb6d=__r(1);const Particles=__i6slb6d.Particles;const Lights=__i6slb6d.Lights;const P=__i6slb6d.P;const Rng=__i6slb6d.Rng;const fit=__i6slb6d.fit;const clamp=__i6slb6d.clamp;const ease=__i6slb6d.ease;const TAU=__i6slb6d.TAU;
const meta = {
  name: "Crescent slash",
  desc: "A tilted moon crescent swells from a hairline to a thick white-rimmed blade in four quick beats, the hollow eats it from inside, shavings fly off the rim.",
  tags: ["melee", "slash", "crescent", "sword", "directional", "one-shot"],
  size: [140, 110],
  origin: [30, 96],
  duration: 0.6,
  loop: false,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#1d2240", "#3a4a86", "#6a86c8", "#a8c4f0", "#dce8ff", "#ffffff"],
    radius: 30,
    seed: 3,
  },
};
const GROW = 0.1, HOLD = 0.08, EAT = 0.28;
function create(o) {
  const C = fit(o.palette, 6), Rg = new Rng(o.seed), R0 = o.radius;
  const ps = new Particles({ rng: Rg, ground: () => 0 }), lights = new Lights();
  const cx = 34, cy = -40, tilt = 0.35;
  let t = 0, burst = false;
  function crescent(p, R, off, holeR, age) {
    const c = Math.cos(tilt), s = Math.sin(tilt), B = R + 2;
    p.shade(cx - B, cy - B, cx + B, cy + B, (x, y, out) => {
      const dx = x - cx, dy = y - cy, lx = dx * c + dy * s, ly = -dx * s + dy * c;
      const r = Math.hypot(lx, ly * 1.15);
      if (r > R) return;
      const hr = Math.hypot(lx + off, ly * 1.15);
      if (hr < holeR) return;
      const edge = Math.min(R - r, hr - holeR), q = clamp(edge / 5);
      const step = Math.round((1 - q) * 1.2 + q * 3 + age * 2.2);
      out.c = C[clamp(5 - step, 0, 5)];
      out.a = age < 0.7 ? 1 : 1 - (age - 0.7) / 0.3;
    });
  }
  return {
    update(dt) {
      t += dt;
      if (!burst && t >= GROW) {
        burst = true;
        lights.add(cx + R0 * 0.6, cy, 46, C[3], 0.7, 0.3);
        for (let i = 0; i < 14; i++) {
          const a = Rg.range(-1.3, 1.1) + tilt, sp = Rg.range(60, 190);
          const x = cx + Math.cos(a) * R0, y = cy + Math.sin(a) * R0 * 0.87;
          ps.spawn(P.MOTE, x, y, Math.cos(a) * sp, Math.sin(a) * sp - 20, Rg.range(0.15, 0.4), C[4 + Rg.int(0, 1)], 0.6);
        }
      }
      ps.update(dt);
      lights.update(dt);
    },
    draw(p) {
      const g = clamp(t / GROW), beat = Math.min(3, Math.floor(g * 4));
      const off = [R0 * 0.18, R0 * 0.3, R0 * 0.42, R0 * 0.52][beat];
      const e = clamp((t - GROW - HOLD) / EAT), age = clamp(t / (GROW + HOLD + EAT));
      const hole = R0 * (1.02 + ease.inQuad(e) * 0.3);
      if (e < 1) crescent(p, R0 * (0.82 + 0.18 * ease.outQuad(g)), off - e * R0 * 0.25, hole - (1 - e) * R0 * 0.08, age);
      if (t < 0.25) p.glow(cx + R0 * 0.5, cy, 34, C[3], 0.45 * (1 - t / 0.25));
      ps.draw(p);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __iiwfpjs=__r(1);const Particles=__iiwfpjs.Particles;const Lights=__iiwfpjs.Lights;const P=__iiwfpjs.P;const Rng=__iiwfpjs.Rng;const fit=__iiwfpjs.fit;const clamp=__iiwfpjs.clamp;const ease=__iiwfpjs.ease;const flare=__iiwfpjs.flare;const sparkle=__iiwfpjs.sparkle;
const meta = {
  name: "Star pop",
  desc: "A hit spark grows in four steps to an eight-ray flare with a white core, then snaps shut while sparks spray out.",
  tags: ["impact", "hit", "spark", "star", "one-shot"],
  size: [112, 112],
  origin: [56, 56],
  duration: 0.55,
  loop: false,
  fps: 30,
  bg: "dark",
  options: {
    palette: ["#5a1408", "#b8360c", "#f2741a", "#ffb02e", "#ffe27a", "#ffffff"],
    size: 16,
    seed: 5,
  },
};
const POP = 0.12;
function create(o) {
  const C = fit(o.palette, 6), Rg = new Rng(o.seed), S = o.size;
  const ps = new Particles({ rng: Rg, ground: () => 40, sparks: [C[5], C[4], C[3], C[2]] }), lights = new Lights();
  lights.add(0, 0, S * 2.5, C[3], 0.35, 0.3);
  for (let i = 0; i < 12; i++) {
    const a = Rg.range(0, Math.PI * 2), sp = Rg.range(120, 300);
    ps.spawn(P.SPARK, 0, 0, Math.cos(a) * sp, Math.sin(a) * sp - 40, Rg.range(0.12, 0.32), 0, 1, Rg.range(0, 0.06));
  }
  let t = 0;
  return {
    update(dt) { t += dt; ps.update(dt); lights.update(dt); },
    draw(p) {
      const g = clamp(t / POP), beat = Math.min(3, Math.floor(g * 4)), close = clamp((t - POP) / 0.18);
      const L = S * [0.35, 0.6, 0.85, 1][beat] * (1 - ease.inQuad(close));
      if (L > 1) {
        const ray = (a, len, w, c) => { const cx = Math.cos(a), sy = Math.sin(a), nx = -sy, ny = cx; p.tri(cx * len, sy * len, nx * w, ny * w, -nx * w, -ny * w, c); };
        for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4, long = k % 2 === 0; ray(a, L * (long ? 1 : 0.55), L * (long ? 0.22 : 0.18), C[2]); }
        for (let k = 0; k < 8; k++) { const a = k * Math.PI / 4, long = k % 2 === 0; ray(a, L * (long ? 0.75 : 0.4), L * (long ? 0.13 : 0.1), C[4]); }
        p.glow(0, 0, L * 1.6, C[3], 0.18);
        p.circle(0, 0, Math.max(1, L * 0.18), C[5]);
      }
      const rr = clamp((t - POP * 0.5) / 0.2);
      if (rr > 0 && rr < 1) p.glowRing(0, 0, S * 0.6 + rr * S * 1.4, 2, C[4], 0.5 * (1 - rr));
      ps.draw(p);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ijpmeiq=__r(1);const Particles=__ijpmeiq.Particles;const P=__ijpmeiq.P;const Rng=__ijpmeiq.Rng;const fit=__ijpmeiq.fit;const clamp=__ijpmeiq.clamp;const ease=__ijpmeiq.ease;
const meta = {
  name: "Dust kick",
  desc: "Grit skips forward along the floor and a row of clumpy tan puffs swells behind it, biggest at the back, lit on top, then thins out.",
  tags: ["dust", "ground", "step", "landing", "directional", "one-shot"],
  size: [112, 64],
  origin: [28, 54],
  duration: 1.1,
  loop: false,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#4a3a30", "#7a604c", "#a8886a", "#d2b48e", "#f0dcb8"],
    count: 4,
    size: 9,
    seed: 9,
  },
};
function create(o) {
  const C = fit(o.palette, 5), Rg = new Rng(o.seed), S = o.size;
  const ps = new Particles({ rng: Rg, ground: () => 0 });
  for (let i = 0; i < 8; i++) ps.spawn(P.GRIT, Rg.range(0, 10), -1, Rg.range(60, 150), Rg.range(-90, -30), Rg.range(0.4, 0.8), C[1 + Rg.int(0, 1)]);
  const puffs = [];
  for (let i = 0; i < o.count; i++) {
    const k = i / Math.max(1, o.count - 1), r = S * (1 - k * 0.55);
    puffs.push({
      x: k * S * 3.2, d: i * 0.05, r, life: Rg.range(0.65, 0.85) - k * 0.15, vx: 14 + k * 20,
      lumps: [0, 1, 2].map(() => [Rg.range(-0.6, 0.6) * r, -Rg.range(0.1, 0.6) * r, Rg.range(0.55, 0.85)]),
    });
  }
  let t = 0;
  return {
    update(dt) { t += dt; ps.update(dt); },
    draw(p) {
      for (const f of puffs) {
        const u = clamp((t - f.d) / f.life);
        if (u <= 0 || u >= 1) continue;
        const grow = ease.outQuart(clamp(u / 0.35)), a = 1 - ease.inQuad(u), x0 = f.x + f.vx * (t - f.d), lift = -u * f.r * 0.6;
        for (const [lx, ly, lr] of f.lumps) {
          const R = f.r * lr * (0.4 + 0.6 * grow), x = x0 + lx * grow, y = ly * grow + lift - R * 0.6;
          p.disc(x, y, R, C[2], 0.85 * a);
          p.disc(x - R * 0.25, y - R * 0.3, R * 0.65, C[3], 0.8 * a);
          p.disc(x - R * 0.4, y - R * 0.5, R * 0.3, C[4], 0.7 * a);
        }
      }
      ps.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ic23t0p=__r(1);const Particles=__ic23t0p.Particles;const Lights=__ic23t0p.Lights;const P=__ic23t0p.P;const Rng=__ic23t0p.Rng;const fit=__ic23t0p.fit;const clamp=__ic23t0p.clamp;const ease=__ic23t0p.ease;const band=__ic23t0p.band;const TAU=__ic23t0p.TAU;
const meta = {
  name: "Skill sigil",
  desc: "A floor circle of two rings and rune ticks draws itself round the feet, motes rise through it, it flares white on release and fades.",
  tags: ["cast", "magic", "circle", "floor", "charge", "one-shot"],
  size: [128, 120],
  origin: [64, 100],
  duration: 0.9,
  loop: false,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#140a24", "#2c1250", "#4b1d86", "#7330c0", "#a050f0", "#c890ff", "#ffffff"],
    radius: 30,
    seed: 4,
  },
};
const DRAW = 0.3, FLARE = 0.42;
function create(o) {
  const C = fit(o.palette, 7), Rg = new Rng(o.seed), R = o.radius;
  const ps = new Particles({ rng: Rg, ground: () => 20 }), lights = new Lights();
  for (let i = 0; i < 18; i++) {
    const a = Rg.range(0, TAU), r = Rg.range(0.3, 1) * R;
    ps.spawn(P.STREAK, Math.cos(a) * r, Math.sin(a) * r * 0.3, 0, -Rg.range(60, 140), Rg.range(0.25, 0.5), C[4 + Rg.int(0, 2)], 1, Rg.range(0, 0.35));
  }
  let t = 0, flared = false;
  return {
    update(dt) {
      t += dt;
      if (!flared && t >= FLARE) { flared = true; lights.add(0, -10, R * 2.4, C[4], 0.9, 0.35); }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) { this._ring(p, (g) => Math.sin(g) < 0); },
    _ring(p, keep) {
      const d = ease.outQuad(clamp(t / DRAW)), fade = 1 - clamp((t - FLARE) / (meta.duration - FLARE));
      if (fade <= 0) return;
      const hot = t >= FLARE && t < FLARE + 0.06;
      const ramp = hot ? [C[6], C[6], C[6]] : C.slice(2);
      const sweep = (g) => keep(g) && ((g % TAU) + TAU) % TAU <= d * TAU;
      band(p, 0, 0, R, 0.3, 2, fade, ramp, sweep, hot);
      band(p, 0, 0, R * 0.72, 0.3, 1, fade * 0.8, ramp, sweep, hot);
      for (let i = 0; i < 12; i++) {
        const g = (i / 12) * TAU + t * 1.5;
        if (!sweep(g)) continue;
        const x = Math.cos(g) * R * 0.86, y = Math.sin(g) * R * 0.86 * 0.3;
        p.dot(x, y, hot ? C[6] : C[5], fade);
        p.dot(x, y - 1, C[4], fade * 0.7);
      }
      p.glow(0, 0, R * 1.3, C[3], 0.3 * fade);
    },
    draw(p) {
      this._ring(p, (g) => Math.sin(g) >= 0);
      ps.draw(p);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i7bgchf=__r(1);const Particles=__i7bgchf.Particles;const Lights=__i7bgchf.Lights;const P=__i7bgchf.P;const Rng=__i7bgchf.Rng;const fit=__i7bgchf.fit;const clamp=__i7bgchf.clamp;const sparkle=__i7bgchf.sparkle;
const meta = {
  name: "Anvil sparks",
  desc: "White strike flash, a fan of orange sparks sprayed upward that fall and skip on the anvil, a wisp of smoke.",
  tags: ["forge", "hammer", "anvil", "sparks", "impact", "one-shot"],
  size: [176, 112],
  origin: [88, 96],
  duration: 1.1,
  loop: false,
  fps: 30,
  bg: "dark",
  options: {
    palette: ["#4a1408", "#a8340c", "#f2741a", "#ffb02e", "#ffe27a", "#ffffff"],
    count: 26,
    seed: 6,
  },
};
function create(o) {
  const C = fit(o.palette, 6), Rg = new Rng(o.seed);
  const ps = new Particles({ rng: Rg, ground: () => 0, sparks: [C[5], C[4], C[3], C[2]] }), lights = new Lights();
  lights.add(0, -4, 60, C[3], 1, 0.4);
  for (let i = 0; i < o.count; i++) {
    const a = -Math.PI / 2 + Rg.range(-1.25, 1.25), sp = Rg.range(140, 360);
    ps.spawn(P.SPARK, 0, -2, Math.cos(a) * sp, Math.sin(a) * sp, Rg.range(0.3, 0.8));
  }
  for (let i = 0; i < 3; i++) ps.spawn(P.SMOKE, Rg.range(-4, 4), -4, Rg.range(-10, 10), -Rg.range(15, 30), Rg.range(0.6, 0.9), 0, 0.7, 0.05 + i * 0.05);
  let t = 0;
  return {
    update(dt) { t += dt; ps.update(dt); lights.update(dt); },
    draw(p) {
      if (t < 0.12) sparkle(p, 0, -3, 14 * (1 - t / 0.12), C[5], C[3], 1);
      if (t < 0.05) p.circle(0, -3, 4, C[5]);
      ps.draw(p);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __if5tl92=__r(1);const Particles=__if5tl92.Particles;const Bits=__if5tl92.Bits;const Lights=__if5tl92.Lights;const P=__if5tl92.P;const B=__if5tl92.B;const Rng=__if5tl92.Rng;const fit=__if5tl92.fit;const clamp=__if5tl92.clamp;const smooth=__if5tl92.smooth;const ease=__if5tl92.ease;const TAU=__if5tl92.TAU;const WHITE=__if5tl92.WHITE;
const __i90g2h6=__r(22);const spikes=__i90g2h6.spikes;const star=__i90g2h6.star;const brokenRing=__i90g2h6.brokenRing;
const meta = {
  name: "Critical hit",
  desc: "A critical hit: a jagged starburst slams in white and overshoots, a ring breaks into flying arcs, sparks streak off, shards tumble to the floor under a big flare.",
  tags: ["impact", "hit", "crit", "critical", "combat", "directional", "one-shot"],
  size: [216, 136],
  origin: [84, 106],
  duration: 0.9,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#2a0510", "#5c0a1c", "#a3142a", "#e0302c", "#ff7a2a", "#ffc23d", "#fff09a", "#ffffff"], height: 26, aim: 0.12, seed: 3 },
};

const KEYS = [
  [0, 1, 1, 1, [6, 7, 7, 7]],
  [0.025, 1.3, 1, 1, [2, 5, 6, 7]],
  [0.058, 1.05, 0.72, 1, [2, 4, 5, 6]],
  [0.092, 1.22, 0.3, 1, [1, 2, 3, 4]],
  [0.125],
];

function flare(p, x, y, L, k, C) {
  for (const [dx, dy, len] of [[1, 0, L], [0, 1, L * 0.45], [0.7, 0.7, L * 0.16], [0.7, -0.7, L * 0.16]])
    for (const s of [-1, 1])
      for (let d = 1; d <= len; d++) {
        const u = d / len, a = u < 0.7 ? 1 : k * (1.6 - u);
        p.dot(x + s * dx * d, y + s * dy * d, u < 0.35 ? WHITE : u < 0.7 ? C[6] : C[5], a);
        if (dy === 0 && u < 0.42) for (const e of [-1, 1]) p.dot(x + s * d, y + e, u < 0.2 ? C[6] : C[5], u < 0.3 ? 1 : k);
      }
  p.glowLine(x - L, y, x + L, y, 6, C[6], 0.5 * k);
  p.glowLine(x, y - L * 0.45, x, y + L * 0.45, 4, C[6], 0.3 * k);
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), X = 0, Y = -o.height, A = o.aim, floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[7], C[6], C[5], C[3]] });
  const bits = new Bits({ ground: floor }), lights = new Lights();
  const sp = spikes(R, 14, A, { len: [11, 15], w: [1.8, 2.5], fwd: 1.4, back: 0.6, jag: 0.5 });
  [...sp].sort((a, b) => b.len - a.len).slice(0, 2).forEach((s) => (s.len *= 1.3));
  const segs = Array.from({ length: 7 }, (_, i) => {
    const a = A + (i / 7) * TAU;
    return { a, gap: R.range(0.55, 0.85), dr: R.range(0.08, 0.4) + 0.15 * Math.max(0, Math.cos(a - A)), w: 0.7 + 0.5 * Math.max(0, Math.cos(a - A)) };
  });
  lights.add(X, Y, 84, C[5], 0.6, 0.5);
  lights.add(X, Y, 30, WHITE, 0.7, 0.1);
  lights.add(X, -4, 44, C[4], 0.3, 0.45);

  for (let i = 0; i < 36; i++) {
    const back = R.chance(0.22), a = (back ? A + Math.PI : A) + R.range(-1, 1) * (back ? 0.6 : 0.8), v = R.range(170, 430) * (back ? 0.6 : 1);
    ps.spawn(P.SPARK, X, Y, Math.cos(a) * v, Math.sin(a) * v - 50, R.range(0.15, 0.5), WHITE, 1, R.chance(0.3) ? R.range(0, 0.04) : 0);
  }

  for (let i = 0; i < 10; i++) {
    const a = A + R.range(-1, 1) * 1.1 - 0.35, v = R.range(110, 280);
    bits.add({ kind: B.SHARD, x: X, y: Y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 40, g: 0.8, drag: 0.7, bounce: 0.35, life: R.range(0.55, 0.85), a: R.range(0, TAU), va: R.range(-25, 25), s: R.range(2, 4.5), c: R.pick([C[7], C[6], C[6], C[5]]) });
  }

  for (let i = 0; i < 12; i++) {
    const a = A - Math.PI / 2 + R.range(-1.4, 1.4), v = R.range(35, 110);
    ps.spawn(P.MOTE, X + Math.cos(a) * 4, Y + Math.sin(a) * 4, Math.cos(a) * v, Math.sin(a) * v - 15, R.range(0.35, 0.7), R.pick([C[6], C[5], C[5]]), 0.6, R.range(0, 0.05));
  }
  for (let i = 0; i < 5; i++) {
    const a = R.range(0, TAU), d = R.range(14, 34);
    ps.spawn(P.STAR, X + Math.cos(a) * d, Y + Math.sin(a) * d * 0.8, 0, -4, R.range(0.22, 0.38), R.chance(0.5) ? C[6] : WHITE, R.range(1.6, 3), R.range(0.08, 0.32));
  }
  let t = 0;
  return {
    update(dt) {
      t += dt;
      ps.update(dt);
      bits.update(dt);
      lights.update(dt);
    },
    draw(p) {

      const u = clamp((t - 0.03) / 0.37);
      if (t >= 0.03 && u < 1) {
        const r = 10 + 30 * ease.outCubic(u), brk = smooth(0.12, 0.6, u), th = Math.max(1, 3.6 * Math.pow(1 - u, 1.2));
        const i = u < 0.12 ? 7 : u < 0.3 ? 6 : u < 0.5 ? 5 : u < 0.75 ? 4 : 3;
        brokenRing(p, X, Y, r, th, segs, brk, C[i], C[Math.max(2, i - 2)], u < 0.6 ? 1 : (1 - u) / 0.4, 1, 0);
        if (u < 0.6) p.glowRing(X, Y, r, 6, C[5], 0.35 * Math.pow(1 - u / 0.6, 2));
      }
      bits.draw(p);
      ps.draw(p);

      const f = (t - 0.04) / 0.28;
      if (f > 0 && f < 1) {
        flare(p, X, Y, 64 * Math.pow(1 - f, 1.3), 1 - f, C);
        p.glow(X, Y, 56, C[5], 0.4 * (1 - f));
      }

      for (let i = 0; i < KEYS.length - 1; i++)
        if (t >= KEYS[i][0] && t < KEYS[i + 1][0]) {
          const [, sc, th, a, cols] = KEYS[i];
          star(p, X, Y, sp, sc, th, cols.map((j) => C[j]), a, 2.6);
        }
      const pop = Math.exp(-t / 0.05);
      if (pop > 0.02) {
        p.glow(X, Y, 44, C[5], 0.4 * pop);
        p.glow(X, Y, 12, WHITE, 0.6 * pop);
      }
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"SOOT",{enumerable:true,configurable:true,get:()=>SOOT});Object.defineProperty(__e,"OUTLINE",{enumerable:true,configurable:true,get:()=>OUTLINE});Object.defineProperty(__e,"stone",{enumerable:true,configurable:true,get:()=>stone});Object.defineProperty(__e,"spikes",{enumerable:true,configurable:true,get:()=>spikes});Object.defineProperty(__e,"star",{enumerable:true,configurable:true,get:()=>star});Object.defineProperty(__e,"brokenRing",{enumerable:true,configurable:true,get:()=>brokenRing});Object.defineProperty(__e,"makeCracks",{enumerable:true,configurable:true,get:()=>makeCracks});Object.defineProperty(__e,"drawCracks",{enumerable:true,configurable:true,get:()=>drawCracks});Object.defineProperty(__e,"frontCrescent",{enumerable:true,configurable:true,get:()=>frontCrescent});Object.defineProperty(__e,"dustRing",{enumerable:true,configurable:true,get:()=>dustRing});Object.defineProperty(__e,"rockShape",{enumerable:true,configurable:true,get:()=>rockShape});Object.defineProperty(__e,"rock",{enumerable:true,configurable:true,get:()=>rock});
const __i5l0dfk=__r(1);const clamp=__i5l0dfk.clamp;const rand=__i5l0dfk.rand;const TAU=__i5l0dfk.TAU;const hex=__i5l0dfk.hex;const mix=__i5l0dfk.mix;const scale=__i5l0dfk.scale;const rgb=__i5l0dfk.rgb;const WHITE=__i5l0dfk.WHITE;
const SOOT = hex("#0d0a12");
const OUTLINE = hex("#1a1422");
const LIGHT = Math.atan2(-1, -1); // light comes from the top left
function stone(c) {
  c = hex(c);
  return { light: mix(scale(c, 1.35), WHITE, 0.08), body: c, shade: scale(c, 0.64), dust: mix(scale(c, 1.2), rgb(150, 140, 150), 0.3), lip: mix(scale(c, 1.55), WHITE, 0.12) };
}
function spikes(R, n, aim, { len = [7, 10], w = [1.5, 2.1], fwd = 1.8, back = 0.6, jag = 1, jit = 0.18 } = {}) {
  return Array.from({ length: n }, (_, i) => {
    const a = aim + (i / n) * TAU + R.range(-jit, jit), cb = Math.cos(a - aim);
    const L = R.range(len[0], len[1]) * (1 + fwd * Math.pow(Math.max(0, cb), 3) + back * Math.pow(Math.max(0, -cb), 3)) * (i % 2 ? jag : 1);
    return { a, len: L, w: R.range(w[0], w[1]) * (i % 2 ? Math.sqrt(jag) : 1) };
  });
}
function star(p, x, y, list, sc, th, [rim, body, inner, core], a = 1, heart = 2.4) {
  for (let pass = 0; pass < 3; pass++)
    for (const s of list) {
      const c = Math.cos(s.a), sn = Math.sin(s.a), L = s.len * sc;
      for (let d = 0; d <= L; d += 0.5) {
        if (pass === 2 && d > L * 0.55) break;
        const hw0 = s.w * th * (1 - d / L) * Math.min(1, 0.5 + d / 3);
        const hw = pass === 0 ? hw0 + 0.8 : pass === 1 ? hw0 : hw0 * 0.45;
        const col = pass === 0 ? rim : pass === 1 ? (d < L * 0.35 ? inner : body) : core;
        for (let o = -hw; o <= hw; o += 0.5) p.dot(x + c * d - sn * o, y + sn * d + c * o, col, a);
      }
    }
  const r = heart * sc * Math.sqrt(th);
  p.circle(x, y, r + 0.8, inner, a);
  p.circle(x, y, r, core, a);
}
function brokenRing(p, x, y, r, th, segs, brk, c, c2 = c, k = 1, sy = 1, maxY = Infinity) {
  if (r <= 0 || k <= 0) return;
  const full = TAU / segs.length;
  for (const s of segs) {
    const span = full * (1 - s.gap * brk) + 0.02, rr = r * (1 + s.dr * brk), m = Math.max(4, Math.ceil(rr * span * 1.8));
    for (let j = 0; j <= m; j++) {
      const u = j / m, ang = s.a + (u - 0.5) * span, w = Math.max(0.5, th * (s.w ?? 1) * (1 - brk * Math.pow(Math.abs(2 * u - 1), 1.6)));
      const ca = Math.cos(ang), sa = Math.sin(ang);
      for (let o = -w / 2; o <= w / 2 + 0.01; o += 0.5) if (y + sa * (rr + o) * sy < maxY) p.dot(x + ca * (rr + o), y + sa * (rr + o) * sy, o > -0.26 ? c : c2, k);
    }
  }
}

function walk(R, x, y, a, L, { jit = 0.55, steer = 0.45, step = [2, 4], maxY = Infinity, d0 = 0 } = {}) {
  const pts = [[x, y, d0]];
  let d = 0, cur = a;
  while (d < L - 0.01) {
    const s = Math.min(L - d, R.range(step[0], step[1]));
    cur += R.range(-jit, jit) + (a - cur) * steer;
    x += Math.cos(cur) * s;
    y = clamp(y + Math.sin(cur) * s, 0.5, maxY);
    d += s;
    pts.push([x, y, d0 + d]);
  }
  return pts;
}
function makeCracks(R, n, { len = [14, 40], dive = 0.85, maxY = 22, forks = 0.5, x0 = [1, 5] } = {}) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const side = i % 2 ? 1 : -1, dip = 0.06 + Math.pow(R.next(), 1.7) * dive, L = R.range(len[0], len[1]) * (1 - (0.5 * dip) / (dive + 0.06));
    const a = side > 0 ? dip : Math.PI - dip, pts = walk(R, side * R.range(x0[0], x0[1]), R.range(0.5, 1.5), a, L, { maxY });
    const c = { pts, len: L, t0: R.range(0, 0.035), kids: [] };
    for (let j = 2; j < pts.length - 1; j++)
      if (R.chance(forks * 0.4)) {
        const [fx, fy, fd] = pts[j];
        c.kids.push(walk(R, fx, fy, a + R.sign() * R.range(0.45, 1), R.range(3, 9) * (1 - (0.5 * j) / pts.length), { maxY, d0: fd, jit: 0.7, step: [1.5, 3] }));
      }
    out.push(c);
  }
  return out;
}
function drawCracks(p, cracks, g, heat, hot, dark, lip, k = 1) {
  if (k <= 0) return;
  const col = (d) => {
    const h = heat(d);
    return h > 0.75 ? hot[0] : h > 0.5 ? hot[1] : h > 0.3 ? hot[2] : h > 0.12 ? hot[3] : dark;
  };
  for (const c of cracks) {
    const G = g(c);
    if (G <= 0) continue;
    for (const path of [c.pts, ...c.kids]) {
      for (let i = 1; i < path.length; i++) {
        const [x0, y0, d0] = path[i - 1], [x1, y1, d1] = path[i];
        if (d0 >= G) break;
        const f = d1 > G ? (G - d0) / (d1 - d0) : 1, ex = x0 + (x1 - x0) * f, ey = y0 + (y1 - y0) * f;
        p.line(x0, y0 + 1, ex, ey + 1, lip, (u) => (rand(Math.round(x0 + (ex - x0) * u), Math.round(y0 + (ey - y0) * u), 5) < 0.3 ? k * 0.8 : 0));
        p.line(x0, y0, ex, ey, (u) => col(d0 + (d1 - d0) * f * u), k);
        const h = heat(d0);
        if (h > 0.12) p.glow((x0 + ex) / 2, (y0 + ey) / 2, 4 + h * 4, hot[2], 0.22 * h * k);
      }
    }
  }
}
function frontCrescent(p, x, dir, h, w, cols, k = 1) {
  if (h < 1 || w < 0.3 || k <= 0) return;
  const ry = h * 0.8, cy = -h * 0.2, rx = Math.max(2, h * 0.55);
  const x0 = dir > 0 ? x - rx - w - 1 : x - 1, x1 = dir > 0 ? x + 1 : x + rx + w + 1;
  p.shade(x0, -h - 1, x1, 0, (px, py, out) => {
    if (py > 0) return;
    const ey = (py - cy) / ry;
    if (ey <= -1 || ey >= 1) return;
    const e2 = 1 - ey * ey, edge = rx * Math.sqrt(e2) - rx, wt = w * Math.pow(e2, 0.45), q = (edge - (px - x) * dir) / Math.max(0.5, wt);
    if (q < 0 || q > 1) return;
    out.c = q < 0.28 ? cols[0] : q < 0.62 ? cols[1] : cols[2];
    out.a = k * (ey < -0.8 ? 0.7 : 1) * (q > 0.7 ? 1.25 - q * 0.8 : 1);
  });
}
function dustRing(p, cx, cy, r, w, k, c, { sy = 1, ph = 0, brk = 0, lit = 0.35, maxY = Infinity, half = 0 } = {}) {
  if (k <= 0.01 || r <= 0) return;
  const W = w * 1.6, lite = mix(c, WHITE, lit);
  for (let y = Math.floor(cy - (r + W) * sy) - 1; y <= Math.min(maxY - 1, Math.ceil(cy + (r + W) * sy) + 1); y++)
    for (let x = Math.floor(cx - r - W) - 1; x <= Math.ceil(cx + r + W) + 1; x++) {
      const dx = x + 0.5 - cx, dy = (y + 0.5 - cy) / sy, d = Math.hypot(dx, dy), g = Math.atan2(dy, dx);
      if ((half < 0 && dy >= 0) || (half > 0 && dy < 0)) continue;
      const lumpy = 0.6 + 0.3 * Math.sin(5 * g + ph) + 0.18 * Math.sin(11 * g + ph * 2.1) + 0.12 * Math.sin(17 * g + ph * 0.7);
      const wt = w * lumpy, off = Math.abs(d - r - w * 0.25 * Math.sin(7 * g + ph));
      if (off >= wt) continue;
      const tear = brk > 0 ? clamp((0.55 + 0.45 * Math.sin(6 * g + ph * 1.7) - brk) / 0.25) : 1;
      const a = k * (1 - Math.pow(off / wt, 2)) * tear;
      if (a > 0.01) p.blend(x, y, dy < 0 && d > r - wt * 0.3 ? lite : c, a);
    }
}
const rockShape = (R, n = 6) => Array.from({ length: n }, () => R.range(0.7, 1.12));
function rock(p, b, st) {
  const r = 0.75 + b.s * 0.8, n = b.pts.length, fade = Math.min(1, b.life / 0.5), ca = Math.cos(b.a), sa = Math.sin(b.a);
  p.shade(b.x - r - 2, b.y - r - 2, b.x + r + 2, b.y + r + 2, (x, y, out) => {
    const dx = x - b.x, dy = y - b.y, u = dx * ca + dy * sa, v = -dx * sa + dy * ca, d = Math.hypot(u, v);
    let ang = Math.atan2(v, u);
    if (ang < 0) ang += TAU;
    const f = (ang / TAU) * n, i = Math.floor(f) % n, w = f - Math.floor(f), edge = r * (b.pts[i] * (1 - w) + b.pts[(i + 1) % n] * w);
    if (d > edge + 0.85) return;
    out.a = fade;
    if (d > edge) return OUTLINE;
    const lit = Math.cos(((i + 0.5) / n) * TAU + b.a - LIGHT);
    if (d < edge * 0.42) return lit > 0.55 ? st.light : st.body;
    return lit > 0.35 ? st.light : lit < -0.4 ? st.shade : st.body;
  });
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ia71e5b=__r(1);const Particles=__ia71e5b.Particles;const Bits=__ia71e5b.Bits;const Lights=__ia71e5b.Lights;const P=__ia71e5b.P;const B=__ia71e5b.B;const Rng=__ia71e5b.Rng;const fit=__ia71e5b.fit;const sparkle=__ia71e5b.sparkle;const clamp=__ia71e5b.clamp;const smooth=__ia71e5b.smooth;const ease=__ia71e5b.ease;const READY=__ia71e5b.READY;
const __iduzy7l=__r(24);const through=__iduzy7l.through;const onSwing=__iduzy7l.onSwing;const travel=__iduzy7l.travel;const smear=__iduzy7l.smear;const trace=__iduzy7l.trace;const glowAlong=__iduzy7l.glowAlong;
const meta = {
  name: "Claw swipe",
  desc: "Three claw marks rake down one after another, white-hot, cooling through orange to red, then close up from both ends and leave a dotted scar, with hot flecks and drips.",
  tags: ["melee", "claw", "swipe", "beast", "scratch", "combat", "directional", "one-shot"],
  size: [128, 96],
  origin: [36, 84],
  duration: 0.9,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: {
    palette: ["#2a0808", "#5c0f12", "#a51d1d", "#e2401f", "#ff8a2a", "#ffd166", "#fff3c4", "#ffffff"],
    sparks: ["#fff3c4", "#ffd166", "#ff8a2a", "#c42a1a"],
    seed: 8,
  },
};
const READY_ = { ...READY, weapon: "claw", offWeapon: "claw", sa: -0.4, sb: -0.9, crouch: 5, lean: 3, fx: 14, fy: -21, bx: 8, by: -25, ffx: 9, fbx: -8 };
const HIGH = { ...READY_, x: -6, crouch: 4, lean: -3, fx: 3, fy: -41, sa: -1.4, bx: 7, by: -18, sb: -0.3, ffx: 10 };
const act = {
  target: { x: 58 },
  poses: [
    [-0.46, { ...READY_, x: -6 }],
    [-0.2, HIGH],
    [-0.05, { ...HIGH, crouch: 5 }],
    [0, { ...READY_, x: 0, crouch: 3, lean: 4, fx: 19, fy: -36, sa: -0.9, bx: -7, by: -24, ghost: 1 }, "snap"],
    [0.05, { ...READY_, x: 2, crouch: 5, lean: 6, fx: 23, fy: -24, sa: 0.5, bx: -7, by: -24, ffx: 13, fbx: -10, toeB: true }, "snap"],
    [0.1, { ...READY_, x: 3, crouch: 7, lean: 7, fx: 22, fy: -12, sa: 1.2, bx: -7, by: -24, ffx: 13, fbx: -10, toeB: true }, "snap"],
    [0.42, { ...READY_, x: 3, crouch: 6, lean: 5, fx: 21, fy: -13, sa: 1.1, bx: -6, by: -22, ffx: 13, fbx: -10 }],
    [0.9, { ...READY_, x: -6 }],
  ],
  hits: [
    { t: 0.04, stop: 0.03, push: 0.9, straw: 5, y: -30, flash: 0.03 },
    { t: 0.08, stop: 0.03, push: 0.9, straw: 5, y: -26, flash: 0.03 },
    { t: 0.12, stop: 0.08, shake: 0.14, amp: 2, push: 1.4, straw: 9, y: -18 },
  ],
  dust: [{ t: 0.1, x: 12, n: 6, dir: 1 }],
};
const RAKE = 0.05; // each mark tears open
const STAGGER = 0.04;
const CLOSE0 = 0.16, CLOSE = 0.3; // then closes up from both ends
function create(o) {
  const C = fit(o.palette, 8), n = C.length, Rg = new Rng(o.seed), floor = () => 0;
  const ps = new Particles({ rng: Rg, ground: floor, sparks: o.sparks }), drips = new Bits({ ground: floor }), lights = new Lights();

  const marks = [0, 1, 2].map((i) => {
    const s = through(31 + i * 8, -23 + i * 2, 1.84, 1, 40, 0.84 - i * 0.05, 0.5);
    return { s, t0: i * STAGGER, W: 4.2 - i * 0.4, open: false, end: travel(s, s.span) };
  });
  let t = 0;
  const heatAt = (m) => clamp(1 - (t - m.t0) / 0.42);
  return {
    update(dt) {
      t += dt;
      for (const m of marks) {
        if (!m.open && t >= m.t0 + RAKE * 0.7) {
          m.open = true;
          lights.add(m.end.x, m.end.y - 6, 34, C[4], 0.45, 0.3);

          for (let i = 0; i < 7; i++) {
            const a = Math.atan2(m.end.dy, m.end.dx) + Rg.range(-0.5, 0.5), sp = Rg.range(110, 260);
            ps.spawn(P.SPARK, m.end.x, m.end.y, Math.cos(a) * sp, Math.sin(a) * sp, Rg.range(0.12, 0.32));
          }
          for (let i = 0; i < 5; i++) {
            const [x, y] = onSwing(m.s, m.s.R, m.s.span * Rg.range(0.15, 0.9));
            ps.spawn(P.MOTE, x, y, Rg.range(-60, -10), Rg.range(-30, 30), Rg.range(0.2, 0.4), Rg.chance(0.5) ? C[5] : C[4], 0.5);
          }
          for (let i = 0; i < 2; i++) {
            const [x, y] = onSwing(m.s, m.s.R - 1, m.s.span * Rg.range(0.35, 0.75));
            drips.add({ kind: B.DRIP, x, y, vx: Rg.range(-8, 8), vy: Rg.range(10, 40), g: 0.55, life: 1.2, c: C[3] });
          }
        }
      }
      drips.update(dt);
      ps.update(dt);
      lights.update(dt);
    },
    draw(p) {
      for (const m of marks) {
        const u = t - m.t0;
        if (u < 0) continue;
        const S = m.s.span, head = S * ease.outExpo(clamp(u / RAKE)), c = smooth(CLOSE0, CLOSE0 + CLOSE, u), lo = (S / 2) * c, hi = Math.min(head, S - (S / 2) * c);
        const heat = heatAt(m);
        if (hi - lo > 0.02) {

          smear(p, m.s, lo, hi, m.W, (uu, r, out) => {
            const v = uu / S, w = m.W * Math.pow(Math.sin(Math.PI * v), 1.15) * (1 - 0.55 * c), off = Math.abs(r - (m.s.R - m.W / 2)) / (w / 2 + 0.01);
            if (w < 0.5 || off > 1) return;
            const ci = Math.round((1 - heat) * 5.2 + off * 1.6 + (head < S ? (S - uu) / S : 0) * 0.5);
            out.c = C[n - 1 - clamp(ci, 0, n - 2)];
          }, 0, 2);
          glowAlong(p, m.s, m.s.R - m.W / 2, lo, hi, 11, C[4], 0.42 * heat * heat, 0, 0.2);
        }

        const k = 0.8 * (1 - clamp((u - CLOSE0 - CLOSE * 0.5) / 0.4));
        if (c > 0.05 && k > 0) {
          trace(p, m.s, m.s.R - m.W / 2, 0.04 * S, lo, C[2], k);
          trace(p, m.s, m.s.R - m.W / 2, S - lo, 0.96 * S, C[2], k);
        }

        const g = u - RAKE * 0.4;
        if (g > 0 && g < 0.16) sparkle(p, m.end.x, m.end.y, 5 * ease.outBack(Math.min(1, g / 0.04)) * (1 - g / 0.16), C[6], C[4], 0.4);
      }
      drips.draw(p);
      ps.draw(p);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"swing",{enumerable:true,configurable:true,get:()=>swing});Object.defineProperty(__e,"through",{enumerable:true,configurable:true,get:()=>through});Object.defineProperty(__e,"onSwing",{enumerable:true,configurable:true,get:()=>onSwing});Object.defineProperty(__e,"travel",{enumerable:true,configurable:true,get:()=>travel});Object.defineProperty(__e,"plane",{enumerable:true,configurable:true,get:()=>plane});Object.defineProperty(__e,"smear",{enumerable:true,configurable:true,get:()=>smear});Object.defineProperty(__e,"trace",{enumerable:true,configurable:true,get:()=>trace});Object.defineProperty(__e,"glowAlong",{enumerable:true,configurable:true,get:()=>glowAlong});Object.defineProperty(__e,"slash",{enumerable:true,configurable:true,get:()=>slash});Object.defineProperty(__e,"slashEnd",{enumerable:true,configurable:true,get:()=>slashEnd});Object.defineProperty(__e,"shavings",{enumerable:true,configurable:true,get:()=>shavings});Object.defineProperty(__e,"stone",{enumerable:true,configurable:true,get:()=>stone});Object.defineProperty(__e,"rock",{enumerable:true,configurable:true,get:()=>rock});Object.defineProperty(__e,"cracks",{enumerable:true,configurable:true,get:()=>cracks});Object.defineProperty(__e,"star",{enumerable:true,configurable:true,get:()=>star});Object.defineProperty(__e,"sliver",{enumerable:true,configurable:true,get:()=>sliver});Object.defineProperty(__e,"along",{enumerable:true,configurable:true,get:()=>along});
const __i3ygphi=__r(1);const P=__i3ygphi.P;const clamp=__i3ygphi.clamp;const smooth=__i3ygphi.smooth;const ease=__i3ygphi.ease;const hex=__i3ygphi.hex;const mix=__i3ygphi.mix;const scale=__i3ygphi.scale;const rgb=__i3ygphi.rgb;const WHITE=__i3ygphi.WHITE;const TAU=__i3ygphi.TAU;
const swing = (o) => ({ cx: 0, cy: 0, R: 30, sy: 1, rot: 0, a0: 0, dir: 1, k: 0, ...o });
function through(x, y, th, dir, R, span, at = 0.55, extra = {}) {
  const a = th - (dir * Math.PI) / 2;
  return swing({ cx: x - Math.cos(a) * R, cy: y - Math.sin(a) * R, R, sy: 1, rot: 0, a0: a - dir * span * at, dir, span, ...extra });
}
function onSwing(s, r, u) {
  const a = s.a0 + s.dir * u, lx = Math.cos(a) * r, ly = Math.sin(a) * r * s.sy - s.k * (s.R - r), c = Math.cos(s.rot), n = Math.sin(s.rot);
  return [s.cx + lx * c - ly * n, s.cy + lx * n + ly * c];
}
function travel(s, u) {
  const [x0, y0] = onSwing(s, s.R, u), [x1, y1] = onSwing(s, s.R, u + 0.01), l = Math.hypot(x1 - x0, y1 - y0) || 1;
  return { x: x0, y: y0, dx: (x1 - x0) / l, dy: (y1 - y0) / l, a: s.a0 + s.dir * u };
}
function plane(s, x, y) {
  const c = Math.cos(s.rot), n = Math.sin(s.rot), dx = x - s.cx, dy = y - s.cy, lx = dx * c + dy * n, ly = -dx * n + dy * c;
  if (!s.k) return [Math.hypot(lx, ly / s.sy), Math.atan2(ly / s.sy, lx)];

  const m = ly + s.k * s.R, A = s.sy * s.sy - s.k * s.k, B = 2 * m * s.k, Cc = lx * lx * s.sy * s.sy + m * m;
  const r = (-B + Math.sqrt(B * B + 4 * A * Cc)) / (2 * A);
  return [r, Math.atan2((m - s.k * r) / s.sy, lx)];
}
function smear(p, s, u0, u1, wMax, fn, half = 0, pad = 1) {
  if (u1 - u0 < 0.005) return;
  const c = Math.cos(s.rot), n = Math.sin(s.rot), A = s.R + pad + 1, Bn = A * s.sy + s.k * (wMax + 2);
  const hx = Math.hypot(A * c, Bn * n) + 1, hy = Math.hypot(A * n, Bn * c) + 1, rIn = s.R - wMax - 1;

  const over = Math.abs(n) * A + s.k * (wMax + 2) + 2, y0 = half > 0 ? s.cy - over : s.cy - hy, y1 = half < 0 ? s.cy + over : s.cy + hy;
  p.shade(s.cx - hx, y0, s.cx + hx, y1, (x, y, out) => {
    const [r, a] = plane(s, x, y);
    if (r > s.R + pad || r < rIn) return;
    if (half && (Math.sin(a) < 0 ? -1 : 1) !== half) return;
    let u = (s.dir * (a - s.a0)) % TAU;
    if (u < 0) u += TAU;
    while (u < u0) u += TAU;
    if (u > u1) return;
    return fn(u, r, out, a);
  });
}
function trace(p, s, r, u0, u1, c, a, half = 0, step = 0.6) {
  const du = step / Math.max(4, r);
  for (let u = u0; u <= u1; u += du) {
    const g = s.a0 + s.dir * u;
    if (half && (Math.sin(g) < 0 ? -1 : 1) !== half) continue;
    const [x, y] = onSwing(s, r, u), k = typeof a === "function" ? a(u) : a;
    if (k > 0) p.dot(x, y, typeof c === "function" ? c(u) : c, k);
  }
}
function glowAlong(p, s, r, u0, u1, rad, c, k, half = 0, step = 0.35) {
  for (let u = u0; u <= u1; u += step) {
    const g = s.a0 + s.dir * u;
    if (half && (Math.sin(g) < 0 ? -1 : 1) !== half) continue;
    const [x, y] = onSwing(s, r, u), kk = typeof k === "function" ? k(u) : k;
    if (kk > 0.004) p.glow(x, y, rad, c, kk);
  }
}
function slash(p, s, t, half = 0) {
  const u = t - s.t0;
  if (u < 0) return;
  const R = s.ramp, n = R.length, life = s.sweep + s.hold + s.trail, hot = s.hot ?? 0;
  const head = ease.outExpo(clamp(u / s.sweep)), tail = smooth(s.sweep + s.hold, life, u), age = clamp(u / life);
  const U = s.span * head, T = s.span * tail, W = s.W * (1 - tail * 0.55);
  if (tail < 1 && U - T > 0.01) {
    smear(p, s, T, U, W, (uu, r, out) => {
      const v = (uu - T) / (U - T), w = W * Math.pow(Math.sin(Math.PI * Math.pow(v, s.lens ? 1 : 2.2)), s.lens ? 0.75 : 0.6);
      if (w < 0.35) return;
      const q = (s.R - r) / w;
      if (q < 0 || q > 1) return;
      const ci = (q < 0.22 && age < 0.5) || q < hot * 0.7 ? 0 : Math.round(q * (n - 1) * 0.75 + age * 2.4 - v * 0.8 + 0.4 - hot * 3);
      out.c = R[n - 1 - clamp(ci, 0, n - 1)];
      out.a = Math.min(1, v / (s.lens ? 0.1 : 0.4));
    }, half);
    glowAlong(p, s, s.R - W * 0.4, T, U, 5 + W, R[n - 3], (uu) => (0.22 + hot * 0.3) * (1 - age) * ((uu - T) / (U - T)), half, 0.3);
  }
  const th = 0.7 * (1 - clamp((u - s.sweep - s.hold) / (s.trail + 0.2)));
  if (tail > 0.02 && th > 0) trace(p, s, s.R - 0.5, 0, T, R[2], (uu) => th * (0.4 + 0.6 * uu / s.span), half);
}
const slashEnd = (s) => travel({ ...s, R: s.R - s.W * 0.3 }, s.span);
function shavings(ps, R, s, n, colors, from = 0.3) {
  for (let i = 0; i < n; i++) {
    const [x, y] = onSwing(s, s.R, s.span * R.range(from, 1)), ox = x - s.cx, oy = y - s.cy, l = Math.hypot(ox, oy) || 1, sp = R.range(30, 100);
    ps.spawn(P.MOTE, x, y, (ox / l) * sp, Math.min(25, (oy / l) * sp) - 10, R.range(0.25, 0.55), R.pick(colors), 0.6);
  }
}
function stone(c) {
  c = hex(c);
  return { light: mix(scale(c, 1.35), WHITE, 0.08), body: c, shade: scale(c, 0.64), dust: mix(scale(c, 1.2), rgb(150, 140, 150), 0.3), dark: scale(c, 0.42) };
}
const OUTLINE = hex("#1a1422");
function rock(p, b, st) {
  const r = 0.6 + b.s * 0.75, fade = Math.min(1, b.life / 0.5), lx = Math.cos(b.a) * r * 0.4, ly = Math.sin(b.a) * r * 0.4;
  p.shade(b.x - r - 1, b.y - r - 1, b.x + r + 1, b.y + r + 1, (x, y, out) => {
    const dx = x - b.x, dy = y - b.y, d = Math.hypot(dx * 1.15, dy);
    if (d > r + 0.9) return;
    const lit = dx * lx + dy * ly;
    out.c = d > r ? OUTLINE : lit < -0.4 ? st.light : lit > 0.6 ? st.shade : st.body;
    out.a = fade;
  });
}
function cracks(R, x0, n, reach, depth = 7, bias = 0.3) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const side = R.chance(0.5 + bias * 0.5) ? 1 : -1, L = reach * R.range(0.45, 1) * (i < 2 ? 1 : 0.7), pts = [[x0 + side * R.range(0, 1.5), 0]];
    let x = pts[0][0], y = 0;
    while (Math.abs(x - x0) < L && y < depth) {
      x += side * R.range(1.5, 3.5);
      y = Math.min(depth, Math.max(0, y + R.range(-0.6, 1.6) * (Math.abs(x - x0) > 3 ? 1 : 0.3)));
      pts.push([Math.round(x), Math.round(y)]);
      if (R.chance(0.18) && pts.length > 3 && y < depth - 2) {
        const f = [[Math.round(x), Math.round(y)]];
        let fx = x, fy = y;
        for (let j = R.int(1, 3); j > 0; j--) (fx += side * R.range(1, 3)), (fy += R.range(0.8, 2)), f.push([Math.round(fx), Math.round(Math.min(depth + 1, fy))]);
        out.push({ pts: f, at: Math.abs(x - x0) / reach, fork: true });
      }
    }
    out.push({ pts, at: 0, fork: false });
  }
  return out;
}
function star(p, x, y, spikes, sc, th, core, body, inner, rim) {
  for (const pass of [0, 1, 2])
    for (const s of spikes) {
      const c = Math.cos(s.a), sn = Math.sin(s.a), L = s.len * sc;
      for (let d = 0; d <= L; d += 0.5) {
        const hw0 = s.w * th * (1 - d / L) * Math.min(1, 0.5 + d / 3), hw = pass === 0 ? hw0 + 0.8 : pass === 1 ? hw0 : hw0 * 0.45;
        if (pass === 2 && d > L * 0.55) break;
        for (let o = -hw; o <= hw; o += 0.5) p.px(x + c * d - sn * o, y + sn * d + c * o, pass === 0 ? rim : pass === 1 ? (d < L * 0.35 ? inner : body) : core);
      }
    }
  const r = 2.4 * sc * Math.sqrt(th);
  p.circle(x, y, r + 0.8, inner);
  p.circle(x, y, r, core);
}
function sliver(p, x, y, a, r, arc, c, k) {
  const n = Math.ceil(r * arc * 2.2);
  for (let j = 0; j <= n; j++) {
    const u = j / n - 0.5, th = a + u * arc, w = 1.4 * (1 - Math.abs(u) * 2);
    for (let o = -w * 0.5; o <= w * 0.5 + 0.01; o += 0.5) p.dot(x + Math.cos(th) * (r + o), y + Math.sin(th) * (r + o), c, k);
  }
}
function along(pts, len, fn) {
  let d = 0;
  for (let i = 1; i < pts.length && d < len; i++) {
    const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], l = Math.hypot(x1 - x0, y1 - y0), f = Math.min(1, (len - d) / l);
    fn(x0, y0, x0 + (x1 - x0) * f, y0 + (y1 - y0) * f, d);
    d += l;
  }
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __i1c28qw=__r(1);const fit=__i1c28qw.fit;const mix=__i1c28qw.mix;const hex=__i1c28qw.hex;const clamp=__i1c28qw.clamp;const WHITE=__i1c28qw.WHITE;
const __idjuzt7=__r(26);const noiseFor=__idjuzt7.noiseFor;const hotFirst=__idjuzt7.hotFirst;const flameBlade=__idjuzt7.flameBlade;const flameTongue=__idjuzt7.flameTongue;const firePuff=__idjuzt7.firePuff;const smokePuff=__idjuzt7.smokePuff;const spark=__idjuzt7.spark;const ember=__idjuzt7.ember;const drift=__idjuzt7.drift;const looped=__idjuzt7.looped;const LAYERS=__idjuzt7.LAYERS;const BACK_LAYERS=__idjuzt7.BACK_LAYERS;
const meta = {
  name: "Fire breath",
  desc: "A roaring cone of fire streaming right from the mouth: white-hot at the lips, billowing out and cooling to red and smoke at its edges, sparks thrown out ahead.",
  tags: ["fire", "breath", "dragon", "stream", "cone", "directional", "loop"],
  size: [160, 116],
  origin: [12, 72],
  duration: 1.5,
  loop: true,
  fps: 30,
  bg: "dark",
  options: {
    palette: ["#4a1712", "#8a1f17", "#c9281f", "#f2561d", "#ff8a2a", "#ffc23d", "#ffe26b", "#fff3a6", "#ffffff"],
    spread: 0.24,
    speed: 320,
    seed: 6,
  },
};
const D = meta.duration, NL = noiseFor(D), SMOKE1 = hex("#5b5566");

const COOL_LAYERS = [[1, 1, 7], [0.72, 0.82, 6], [0.44, 0.58, 5]];

const JET = [[42, 4.2, 0], [32, 3.8, -0.08], [30, 3.8, 0.08], [20, 4.6, 0]];
function draw(p, t, o) {
  const F = fit(o.palette, 9), H = hotFirst(F), S = o.seed, A = o.spread, V = o.speed;
  const N = (rate, seed = 0, off = 0) => NL(t, rate, seed, off);
  const GLOW = mix(mix(H[3], H[4], 0.5), WHITE, 0.25), SMOKE = mix(SMOKE1, H[6], 0.3), SPARKS = [H[1], H[2], H[4], H[5]], EMB = [H[1], H[2], H[4], H[6]];

  const roar = (tt) => 0.85 + 0.15 * NL(tt, 3, S + 1), sway = (tt) => NL(tt, 1.3, S + 2) * 0.05;


  const fire = [], smoke = [];
  looped(t, D, 260, S + 100, (r) => {
    const e = r.range(-1, 1), fl = r.range(0.42, 0.8) * (1 - 0.3 * Math.abs(e)), sm = r.chance(0.2 + 0.4 * Math.abs(e));
    return { e, sp: r.range(0.75, 1.1), fl, sm, sl: r.range(0.5, 0.85), s: r.range(3, 5.2), f: r.next(), ox: r.range(4, 10), life: fl + (sm ? 0.85 : 0) };
  }, (q, age) => {
    const tb = t - age, a = q.e * A + sway(tb) - 0.04, v = V * q.sp * roar(tb);
    const ta = Math.min(age, q.fl), [x, y, vx, vy] = drift(q.ox, q.e * 1.5, Math.cos(a) * v, Math.sin(a) * v, ta, 0, -100, 2, 2.4);
    if (age < q.fl) return fire.push([age, x, y, q]);
    if (!q.sm || age - q.fl > q.sl) return;
    const sa = age - q.fl, [sx, sy] = drift(x, y, vx * 0.5, vy * 0.6 - 8, sa, 0, -26, 1.8, 1.2);
    smoke.push([sa, sx, sy, q]);
  });
  for (const [sa, x, y, q] of smoke) smokePuff(p, x, y, 1 - sa / q.sl, q.s * 1.1, SMOKE, true, 0.7);
  fire.sort((a, b) => b[0] - a[0]);
  for (const [age, x, y, q] of fire) {
    const u = age / q.fl, edge = Math.abs(q.e), size = q.s * (0.75 + 1.6 * u);

    const heat = Math.min(0.999, Math.pow(u, 1.5) * (0.85 + 0.2 * edge) + 0.3 * edge * edge);


    const tear = clamp((u - 0.32) / 0.2);
    firePuff(p, x, y, 1 - heat, size * (1 - 0.55 * tear), q.f, H, 0.1, -0.5, -0.86);
    if (tear > 0) {
      const n = Math.floor(q.f * 1e5), h = size * (1.5 + 0.5 * N(4, n)) * (1.2 - heat * 0.6) * tear;
      flameTongue(p, x, y + size * 0.3, h, size * 0.5 * (1.1 - heat * 0.5), -h * 0.4 + N(2.5, n + 1) * 2, N, n, H, heat < 0.45 ? LAYERS : heat < 0.72 ? BACK_LAYERS : COOL_LAYERS);
    }
  }

  for (let i = 0; i < 6; i++) {
    const n = (S * 3 + i) * 19, side = i % 2 ? 1 : -1, d = 18 + (i >> 1) * 16 + N(2, n) * 4, L = (9 + 5 * (0.5 + 0.5 * N(5, n + 1))) * (1 - d / 120);
    const ex = d, ey = side * d * A * 0.85 - d * 0.06;
    flameBlade(p, ex, ey, 0.75, side * 0.45 - 0.48, L, 1.6 + L * 0.08, -side * 3, N, n, H, LAYERS);
  }

  looped(t, D, 70, S + 250, (r) => ({ e: r.range(-0.6, 0.6), v: r.range(330, 470), life: r.range(0.12, 0.26), l: r.range(4, 9) }), (q, age) => {
    const a = q.e * A - 0.03, [x, y, vx, vy] = drift(6, q.e * 2, Math.cos(a) * q.v, Math.sin(a) * q.v, age, 0, -60, 2, 2);
    const sp = Math.hypot(vx, vy), k = 1 - age / q.life, L = q.l * (sp / 400);
    p.line(x - (vx / sp) * L, y - (vy / sp) * L, x, y, (u) => (u > 0.6 ? (k > 0.5 ? H[0] : H[1]) : k > 0.5 ? H[2] : H[3]));
  });

  JET.forEach(([len, w, a], i) => {
    const n = (S * 5 + i) * 17, L = len * roar(t) * (0.85 + 0.2 * N(5, n)), aa = a + sway(t);
    flameBlade(p, 0, 0, Math.cos(aa), Math.sin(aa), L, w, N(3, n + 3) * 3, N, n, H, LAYERS, 0.5, 1.5);
  });

  looped(t, D, 40, S + 300, (r) => ({ d: r.range(4, 60), e: r.range(-1, 1), v: r.range(140, 280), life: r.range(0.25, 0.55) }), (q, age) => {
    const a = q.e * A * 1.8 - 0.12, [x, y, vx, vy] = drift(q.d, q.e * q.d * A, Math.cos(a) * q.v, Math.sin(a) * q.v - 30, age, 0, 190, 2, 2);
    spark(p, x, y, vx, vy, 1 - age / q.life, SPARKS);
  });
  looped(t, D, 18, S + 400, (r) => ({ x: r.range(50, 100), y: r.range(-14, 6), vx: r.range(10, 40), vy: -r.range(20, 50), life: r.range(0.8, 1.4), s: r.chance(0.2) ? 2 : 1, ph: r.range(0, 6.3) }), (q, age) => {
    const [x, y] = drift(q.x, q.y, q.vx, q.vy, age, 0, -30, 1.6, 1.6);
    ember(p, x + 5 * (Math.sin(age * 2.3 + q.ph) - Math.sin(q.ph)), y, 1 - age / q.life, q.s, EMB, age * 40 + q.ph);
  });

  const k = roar(t);
  p.glow(3, 0, 34 * k, GLOW, 0.75 * k);
  p.glow(3, 0, 10, H[0], 0.55);
  for (let d = 10; d < 126; d += 8) p.glow(d, -d * 0.1, 10 + d * 0.2, GLOW, 0.32 * k * (1 - d / 150));
  p.glow(64, -12, 96, GLOW, 0.16 * k);
}
},
function(__e){Object.defineProperty(__e,"pnoise",{enumerable:true,configurable:true,get:()=>pnoise});Object.defineProperty(__e,"noiseFor",{enumerable:true,configurable:true,get:()=>noiseFor});Object.defineProperty(__e,"looped",{enumerable:true,configurable:true,get:()=>looped});Object.defineProperty(__e,"flicker",{enumerable:true,configurable:true,get:()=>flicker});Object.defineProperty(__e,"hotFirst",{enumerable:true,configurable:true,get:()=>hotFirst});Object.defineProperty(__e,"LAYERS",{enumerable:true,configurable:true,get:()=>LAYERS});Object.defineProperty(__e,"BIG_LAYERS",{enumerable:true,configurable:true,get:()=>BIG_LAYERS});Object.defineProperty(__e,"BACK_LAYERS",{enumerable:true,configurable:true,get:()=>BACK_LAYERS});Object.defineProperty(__e,"flameTongue",{enumerable:true,configurable:true,get:()=>flameTongue});Object.defineProperty(__e,"flameBlade",{enumerable:true,configurable:true,get:()=>flameBlade});Object.defineProperty(__e,"solid",{enumerable:true,configurable:true,get:()=>solid});Object.defineProperty(__e,"soft",{enumerable:true,configurable:true,get:()=>soft});Object.defineProperty(__e,"firePuff",{enumerable:true,configurable:true,get:()=>firePuff});Object.defineProperty(__e,"lick",{enumerable:true,configurable:true,get:()=>lick});Object.defineProperty(__e,"smokePuff",{enumerable:true,configurable:true,get:()=>smokePuff});Object.defineProperty(__e,"ember",{enumerable:true,configurable:true,get:()=>ember});Object.defineProperty(__e,"spark",{enumerable:true,configurable:true,get:()=>spark});Object.defineProperty(__e,"drift",{enumerable:true,configurable:true,get:()=>drift});Object.defineProperty(__e,"sparkAt",{enumerable:true,configurable:true,get:()=>sparkAt});Object.defineProperty(__e,"floorLight",{enumerable:true,configurable:true,get:()=>floorLight});Object.defineProperty(__e,"simDraw",{enumerable:true,configurable:true,get:()=>simDraw});Object.defineProperty(__e,"burn",{enumerable:true,configurable:true,get:()=>burn});
const __ipknriz=__r(1);const rand=__ipknriz.rand;const rng=__ipknriz.rng;const wrap=__ipknriz.wrap;const noise=__ipknriz.noise;const mix=__ipknriz.mix;const hex=__ipknriz.hex;const clamp=__ipknriz.clamp;const WHITE=__ipknriz.WHITE;const SMOKE_RAMP=__ipknriz.SMOKE_RAMP;const P=__ipknriz.P;const PF=__ipknriz.PF;
function pnoise(x, period, seed = 0) {
  const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
  const a = rand(wrap(i, period), seed), b = rand(wrap(i + 1, period), seed);
  return (a + (b - a) * u) * 2 - 1;
}
function noiseFor(D) {
  if (!D) return (tt, rate, seed = 0, off = 0) => noise(tt * rate + off, seed);
  return (tt, rate, seed = 0, off = 0) => {
    const P = Math.max(1, Math.round(rate * D));
    return pnoise((tt / D) * P + off, P, seed);
  };
}
function looped(t, D, count, seed, make, draw) {
  for (let i = 0; i < count; i++) {
    const r = rng(seed, i), born = r.next() * D, q = make(r, i);
    for (let age = wrap(t - born, D); age < q.life; age += D) draw(q, age, i);
  }
}
const flicker = (N, s = 0) => 0.74 + 0.16 * N(7.3, 1 + s) + 0.1 * N(19, 2 + s);
const hotFirst = (F) => [...F].reverse();
const LAYERS = [[1, 1, 6], [0.76, 0.86, 4], [0.54, 0.68, 2], [0.3, 0.42, 0]];
const BIG_LAYERS = [[1, 1, 6], [0.8, 0.9, 5], [0.62, 0.78, 4], [0.44, 0.6, 3], [0.26, 0.4, 1], [0.12, 0.22, 0]];
const BACK_LAYERS = [[1, 1, 7], [0.76, 0.86, 5], [0.54, 0.68, 3], [0.3, 0.42, 2]];
function flameTongue(p, x, y, h, w, sx, N, n, H, layers = LAYERS, jit = 0.5, wob = 1.1) {
  if (h < 1) return;
  for (const [lw, lh, ri] of layers) {
    const L = h * lh, c = H[ri];
    for (let r = 0; r <= L; r++) {
      const u = r / Math.max(1, L);
      const half = w * lw * Math.pow(1 - u, 0.85) * Math.min(1, (r + 1.5) / 3.5) + N(9, n, r * 0.45) * jit;
      if (half < 0.3) continue;
      const cx = x + sx * u * u * lh + N(4, n + 7, r * 0.2) * u * wob, Y = Math.round(y - r);
      for (let px = Math.round(cx - half), x1 = Math.round(cx + half); px <= x1; px++) p.px(px, Y, c);
    }
  }
}
function flameBlade(p, x, y, ux, uy, len, w, bend, N, n, H, layers = LAYERS, jit = 0.5, wob = 1.1) {
  if (len < 1) return;
  const nx = -uy, ny = ux;
  for (const [lw, lh, ri] of layers) {
    const L = len * lh, c = H[ri];
    for (let r = 0; r <= L; r += 0.5) {
      const u = r / Math.max(1, L);
      const half = w * lw * Math.pow(1 - u, 0.85) * Math.min(1, (r + 1.5) / 3.5) + N(9, n, r * 0.45) * jit;
      if (half < 0.3) continue;
      const off = bend * u * u * lh + N(4, n + 7, r * 0.2) * u * wob, cx = x + ux * r + nx * off, cy = y + uy * r + ny * off;
      for (let q = -half; q <= half; q += 0.5) p.px(cx + nx * q, cy + ny * q, c);
    }
  }
}
function solid(p, x, y, r, c) {
  if (r < 0.6) return p.px(x, y, c);
  const cx = p.toX(x, y), cy = p.toY(x, y), r2 = r * r;
  for (let sy = Math.floor(cy - r); sy <= Math.ceil(cy + r); sy++) {
    const dy = sy + 0.5 - cy, s2 = r2 - dy * dy;
    if (s2 < 0) continue;
    const s = Math.sqrt(s2);
    for (let sx = Math.ceil(cx - s - 0.5); sx <= Math.floor(cx + s - 0.5); sx++) p.put(sx, sy, c, 1);
  }
}
function soft(p, x, y, r, c, a) {
  if (a <= 0.004) return;
  if (r < 0.5) return p.blend(x, y, c, a);
  const cx = p.toX(x, y), cy = p.toY(x, y), r2 = r * r;
  for (let sy = Math.floor(cy - r); sy <= Math.ceil(cy + r); sy++) {
    const dy = sy + 0.5 - cy, s2 = r2 - dy * dy;
    if (s2 < 0) continue;
    const s = Math.sqrt(s2);
    for (let sx = Math.ceil(cx - s - 0.5); sx <= Math.floor(cx + s - 0.5); sx++) p.blendPx(sx, sy, c, a);
  }
}
function firePuff(p, x, y, k, size, frac, H, glowK = 0.18, tx = 0, ty = -1) {
  const age = 1 - k, n = H.length, heat = Math.min(0.999, Math.pow(age, 0.62) + frac * 0.1);
  const idx = Math.min(n - 2, Math.floor(heat * (n - 1)));
  const r = size * (0.55 + 0.45 * Math.min(1, age * 7)) * (1 - age * 0.55), c = H[idx];
  if (idx >= n - 2) return soft(p, x, y, r, c, Math.min(1, k * 3) * 0.85);
  solid(p, x, y, r, H[Math.min(n - 1, idx + 2)]);
  if (r > 1.6 && ty > -0.99) solid(p, x + tx * r * 1.5, y + ty * r * 1.5, r * 0.3, H[Math.min(n - 1, idx + 1)]);
  solid(p, x - r * 0.16, y - r * 0.22, r * 0.78, c);
  if (r > 1.6) solid(p, x + tx * r * 0.9, y + ty * r * 0.9, r * 0.42, c);
  if (idx <= 3 && r > 1.8) solid(p, x - r * 0.28, y - r * 0.34, r * 0.36, H[Math.max(0, idx - 1)]);
  if (idx < 6) p.glow(x, y, r * 2.4 + 2, c, glowK * k);
}
function lick(p, x, y, k, s, H) {
  const r = s * (0.4 + 0.6 * k);
  solid(p, x, y, r + 0.6, k > 0.5 ? H[5] : H[6]);
  if (k > 0.35) solid(p, x, y - 0.3, r * 0.6, k > 0.7 ? H[2] : H[4]);
}
const rampAt = (r, t) => r[Math.min(r.length - 1, Math.max(0, Math.floor(t * r.length)))];
function smokePuff(p, x, y, k, size, col = 0, big = false, aMul = 1) {
  const age = 1 - k;
  const r = size * (0.65 + Math.min(1, age * 2.5) * 0.45 + age * (big ? 0.5 : 0.4));
  const a = Math.min(1, age * 12) * Math.min(1, k * 2.4) * (big ? 0.7 : 0.58) * aMul;
  const c = col ? mix(col, rampAt(SMOKE_RAMP, age), age) : rampAt(SMOKE_RAMP, age * 1.05);
  soft(p, x, y, r, c, a * 0.45);
  soft(p, x + r * 0.05, y + r * 0.06, r * 0.74, c, a * 0.62);
  if (age < 0.5) soft(p, x - r * 0.22, y - r * 0.3, r * 0.5, mix(c, WHITE, 0.12), a * 0.4 * (1 - age * 2));
}
function ember(p, x, y, k, size, cols, ph) {
  if (k < 0.25 && Math.sin(ph) < 0) return;
  const c = k > 0.6 ? cols[0] : k > 0.3 ? cols[1] : cols[2];
  if (size >= 2) {
    const rim = k > 0.45 ? cols[2] : cols[3];
    p.px(x - 1, y, rim), p.px(x + 1, y, rim), p.px(x, y - 1, rim), p.px(x, y + 1, rim);
    p.px(x, y, c);
    p.glow(x, y, 8, c, 0.4 * k);
    return;
  }
  p.px(x, y, c);
  if (size > 1.4) p.px(x, y + 1, cols[3]);
  p.glow(x, y, 3 + size, c, 0.35 * k);
}
function spark(p, x, y, vx, vy, k, cols) {
  const sp = Math.hypot(vx, vy) || 1, ux = vx / sp, uy = vy / sp, len = Math.min(9, 1 + sp * 0.022);
  const head = k > 0.6 ? cols[0] : k > 0.3 ? cols[1] : cols[2];
  p.line(x - ux * len, y - uy * len, x - ux * len * 0.4, y - uy * len * 0.4, k > 0.5 ? head : cols[cols.length - 1]);
  p.line(x - ux * len * 0.45, y - uy * len * 0.45, x, y, head);
  p.glow(x, y, 3, head, 0.45 * k);
}
function along(x, v, a, k, t) {
  if (k <= 0) return [x + v * t + 0.5 * a * t * t, v + a * t];
  const e = Math.exp(-k * t), vt = a / k;
  return [x + vt * t + ((v - vt) * (1 - e)) / k, vt + (v - vt) * e];
}
function drift(x, y, vx, vy, t, ax, ay, kx, ky) {
  const X = along(x, vx, ax, kx, t), Y = along(y, vy, ay, ky, t);
  return [X[0], Y[0], X[1], Y[1]];
}
function sparkAt(x, y, vx, vy, t, floor = 0, g = 427, k = 2.2) {
  let s = [x, y, vx, vy], left = t;
  for (let b = 0; b < 3; b++) {
    const e = drift(s[0], s[1], s[2], s[3], left, 0, g, k, k);
    if (e[1] < floor || s[1] >= floor) return e;
    let lo = 0, hi = left;
    for (let i = 0; i < 16; i++) {
      const m = (lo + hi) / 2;
      if (drift(s[0], s[1], s[2], s[3], m, 0, g, k, k)[1] < floor) lo = m;
      else hi = m;
    }
    const c = drift(s[0], s[1], s[2], s[3], hi, 0, g, k, k);
    s = [c[0], floor - 0.25, c[2] * 0.7, -Math.abs(c[3]) * 0.45];
    left -= hi;
  }
  const e = drift(s[0], s[1], s[2], s[3], left, 0, g, k, k);
  return e[1] < floor ? e : [e[0], floor - 0.25, e[2], 0];
}
function floorLight(p, x, y, rx, ry, c, k) {
  if (k <= 0.004 || rx < 1 || ry < 0.5) return;
  p.shade(x - rx, y - ry, x + rx, y + ry, (px, py, out) => {
    const dx = (px - x) / rx, dy = (py - y) / ry, d = dx * dx + dy * dy;
    if (d >= 1) return;
    const f = 1 - Math.sqrt(d);
    out.l = c;
    out.k = f * f * k;
  });
}
function simDraw(p, ps, H, layer) {
  const all = ps.list, rest = [], fire = [];
  for (const q of all) (q.k === P.FIRE ? fire : rest).push(q);
  const puffs = (back) => {
    for (const q of fire) if (q.delay <= 0 && !!(q.flag & PF.BACK) === back) firePuff(p, q.x, q.y, q.life / q.max, q.size, q.seed % 1, H);
  };
  ps.list = rest;
  if (layer !== "front") ps.draw(p, "back"), puffs(true);
  if (layer !== "back") puffs(false), ps.draw(p, "front");
  ps.list = all;
}
const SMOKE1 = hex("#5b5566");
function burn(p, t, T, o) {
  const { H, D, NL, S } = o, HC = o.height, X = o.x ?? 0, Y = o.y ?? 0, W = o.spread ?? 6, G = o.glow ?? 1;
  const N = (rate, seed = 0, off = 0) => NL(t, rate, seed, off);
  const fla = (tt) => 0.74 + 0.16 * NL(tt, 7.3, S + 1) + 0.1 * NL(tt, 19, S + 2), fl = fla(t);
  const SMOKE = mix(SMOKE1, H[6], 0.25), EMB = [H[1], H[2], H[4], H[6]], GLOW = mix(mix(H[3], H[4], 0.5), WHITE, 0.25);
  const R = rng(S, 77), count = (rate) => Math.round(rate * D);
  const TT = T.map(([dx, dy, h, w, back], i) => ({ dx: dx + R.range(-0.3, 0.3), y: dy, h: 2 + HC * h * R.range(0.92, 1.08), w: w * R.range(0.92, 1.08), back, env: h, n: (S * 7 + i) * 13 }));
  const lean = (tt) => NL(tt, 0.67, S + 90) * (o.lean ?? 0.1);
  const height = (i, tt) => {
    const { h, n } = TT[i], leap = Math.max(0, NL(tt, 2.6, n + 70) - 0.55) * 1.4;
    return (h + 0.25 * h * NL(tt, 3.3, n) + h * leap) * (0.9 + 0.1 * fla(tt));
  };
  const sweep = (i, tt, h) => NL(tt, 2.2, TT[i].n + 40) * (1 + h * 0.08) + lean(tt) * h * 0.9 - clamp(TT[i].dx * 0.3, -2.5, 2.5);
  const tip = (i, tt) => {
    const h = height(i, tt);
    return [X + TT[i].dx + sweep(i, tt, h) * 0.85, Y + TT[i].y - h * 0.88 + 3, h];
  };
  const tongueAt = (i) => {
    const { dx, y, w, n, back } = TT[i], h = height(i, t);
    flameTongue(p, X + dx, Y + y, h, w, sweep(i, t, h), N, n, H, back ? BACK_LAYERS : w > 2.2 ? BIG_LAYERS : LAYERS, 0.5, 1.1 + h * 0.04);
  };

  looped(t, D, count(o.smoke ?? 12), S + 300, (r) => ({ x: r.range(-W, W) * 0.7, y: -HC * 0.8 - r.range(0, 6), vx: r.range(-2, 2), vy: -r.range(10, 17), life: r.range(...(o.smokeLife ?? [1.6, 2.6])), s: r.range(0.7, 1.1) * (o.smokeSize ?? 3) }), (q, age) => {
    const [x, y] = drift(q.x, q.y, q.vx, q.vy, age, o.wind ?? 3, -20, 1.6, 1);
    smokePuff(p, X + x + NL(t - age, 0.8, S + 60) * (1.5 + 2.5 * age), Y + y, 1 - age / q.life, q.s, SMOKE);
  });

  const puffs = [];
  looped(t, D, TT.length * count(o.puffs ?? 8), S + 200, (r, j) => {
    const i = j % TT.length, fire = r.range(0.14, 0.3), smokes = r.chance(0.45);
    return { i, fire, smokes, sl: r.range(0.8, 1.4), ox: r.range(-1, 1), oy: r.range(0, 4), vx: r.range(-4, 4), vy: -r.range(15, 30), s: r.range(0.8, 1.6) * (0.8 + 0.6 * TT[i].env), f: r.next(), life: fire + (smokes ? 1.4 : 0) };
  }, (q, age) => {
    const [tx, ty] = tip(q.i, t - age);
    const [x, y, vx, vy] = drift(tx + q.ox, ty + q.oy, q.vx, q.vy, Math.min(age, q.fire), 0, -95, 5, 3.2);
    if (age < q.fire) return puffs.push([x, y, 1 - age / q.fire, q.s, q.f]);
    if (age - q.fire > q.sl) return;
    const [sx, sy] = drift(x, y, vx * 0.6, vy * 0.6 - 6, age - q.fire, o.wind ?? 3, -16, 1.6, 1.2);
    smokePuff(p, sx, sy, 1 - (age - q.fire) / q.sl, q.s * 0.7, 0);
  });
  for (let i = 0; i < TT.length; i++) if (TT[i].back) tongueAt(i);
  for (let i = 0; i < TT.length; i++) if (!TT[i].back) tongueAt(i);
  o.mid?.(fl);

  looped(t, D, TT.length * count(o.licks ?? 4), S + 220, (r, j) => ({ i: j % TT.length, vx: r.range(-3, 3), vy: -r.range(12, 22), s: r.range(0.9, 1.6) * (0.8 + 0.5 * TT[j % TT.length].env), life: 0.26 }), (q, age) => {
    const [tx, ty] = tip(q.i, t - age);
    lick(p, tx + q.vx * age, ty - 2 + q.vy * age, 1 - age / q.life, q.s, H);
  });
  for (const [x, y, k, s, f] of puffs) firePuff(p, x, y, k, s, f, H);

  looped(t, D, count(o.embers ?? 8), S + 500, (r) => ({ x: r.range(-W, W), y: -r.range(HC * 0.3, HC * 0.8), vx: r.range(-15, 15), vy: -r.range(25, 60), life: r.range(1.1, 2.4), s: r.chance(0.15) ? 2 : r.range(1, 1.6), a: r.range(0, 6.3), b: r.range(0, 6.3) }), (q, age) => {
    const [x, y] = drift(q.x, q.y, q.vx, q.vy, age, 0, -30, 1.6, 1.6);
    ember(p, X + x + 7 * (Math.sin(age * 2.3 + q.a) - Math.sin(q.a)), Y + y + 2 * (Math.sin(age * 3 + q.b) - Math.sin(q.b)), 1 - age / q.life, q.s, EMB, age * 40 + q.a);
  });

  if (G > 0) {
    const R1 = o.glowR ?? 46, lx = X + lean(t) * 12;
    p.glow(lx, Y - HC * 0.35, R1 * 1.5, GLOW, 0.22 * fl * G);
    p.glow(lx, Y - HC * 0.75, R1, GLOW, 0.34 * fl * G);
    p.glow(X, Y - HC * 0.2, R1 * 0.32, H[2], 0.2 * fl * G);
    p.glow(X, Y - 2, 8, H[0], 0.14 * fl * G);
  }
  return { tip, fl };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ivwrzue=__r(1);const Particles=__ivwrzue.Particles;const Lights=__ivwrzue.Lights;const P=__ivwrzue.P;const PF=__ivwrzue.PF;const Rng=__ivwrzue.Rng;const fit=__ivwrzue.fit;const band=__ivwrzue.band;const clamp=__ivwrzue.clamp;const smooth=__ivwrzue.smooth;const ease=__ivwrzue.ease;const noise=__ivwrzue.noise;const rand=__ivwrzue.rand;const TAU=__ivwrzue.TAU;const WHITE=__ivwrzue.WHITE;const hex=__ivwrzue.hex;const mix=__ivwrzue.mix;const rgb=__ivwrzue.rgb;const READY=__ivwrzue.READY;
const __ii0gv93=__r(26);const hotFirst=__ii0gv93.hotFirst;const flameTongue=__ii0gv93.flameTongue;const simDraw=__ii0gv93.simDraw;const LAYERS=__ii0gv93.LAYERS;const BACK_LAYERS=__ii0gv93.BACK_LAYERS;
const meta = {
  name: "Fire ring",
  desc: "A white flash at the feet, then flames race outward along the floor in a ring, flaring as the front passes and burning down behind it over a smouldering scorch.",
  tags: ["fire", "ring", "nova", "aoe", "spell", "ground", "one-shot"],
  size: [224, 128],
  origin: [112, 92],
  duration: 3.9,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: {
    palette: ["#4a1712", "#8a1f17", "#c9281f", "#f2561d", "#ff8a2a", "#ffc23d", "#ffe26b", "#fff3a6", "#ffffff"],
    reach: 92,
    seed: 6,
  },
};
const HIGH = { turn: 1.15, crouch: 0, fx: -7, fy: -44, bx: 8, by: -44, ffx: -5, fbx: 6 };
const SLAM = { turn: 1.15, crouch: 8, lean: 3, fx: -9, fy: -8, bx: 11, by: -8, ffx: -8, fbx: 9 };
const EASE = { turn: 1, crouch: 2, fx: -8, fy: -17, bx: 9, by: -17, ffx: -4, fbx: 5 };
const act = {
  target: { x: 70 },
  poses: [
    [-0.32, READY],
    [0.02, HIGH],
    [0.27, { ...HIGH, y: -1 }],
    [0.32, SLAM, "snap"],
    [0.85, { ...SLAM, crouch: 7 }],
    [1.5, EASE],
    [2.4, READY],
    [3.9, READY],
  ],
  hits: [
    { t: 0.32, stop: 0.1, shake: 0.28, amp: 3, target: false },
    { t: 0.6, push: 1.2, straw: 10, y: -8, skin: "char" },
    { t: 3.5, push: 0, straw: 0, flash: 0, skin: null },
  ],
  dust: [{ t: 0.32, x: 10, n: 6, dir: 1 }, { t: 0.32, x: -10, n: 6, dir: -1 }],
};
const SY = 0.2, CHARGE = 0.32, SPREAD = 0.75, SOOT = hex("#0d0a12"), SOOT2 = hex("#17121d"), WARM = rgb(255, 176, 96);

const EMBER_LAYERS = [[1, 1, 7], [0.7, 0.8, 6], [0.4, 0.55, 5]];
function create(o) {
  const F = fit(o.palette, 9), H = hotFirst(F), REACH = o.reach, R = new Rng(o.seed), floor = () => 0, S = o.seed * 7;
  const ps = new Particles({ rng: R, ground: floor, sparks: [H[1], H[2], H[4], H[5]] }), lights = new Lights();
  const GLOW = mix(mix(H[3], H[4], 0.5), WHITE, 0.25);
  const front = (t) => REACH * ease.outCubic(clamp((t - CHARGE) / SPREAD));
  const reachedAt = (d) => CHARGE + SPREAD * (1 - Math.cbrt(1 - Math.min(1, d / REACH)));

  const sites = [];
  for (let r = 10; r <= REACH; r += 9) {
    const per = TAU * Math.sqrt((r * r + (r * SY) ** 2) / 2), n = Math.max(5, Math.round(per / 8.5));
    for (let k = 0; k < n; k++) {
      const a = ((k + R.range(0.15, 0.85)) / n) * TAU, rr = r + R.range(-3, 3), q = Math.min(1, rr / REACH);

      sites.push({ x: Math.cos(a) * rr, y: Math.sin(a) * rr * SY, back: Math.sin(a) < 0, t0: reachedAt(rr) + R.range(0, 0.04), life: (0.3 + 1.0 * q * q) * R.range(0.85, 1.2), h: R.range(9, 15) * (0.6 + 0.55 * q), w: R.range(1.8, 2.7) * (0.75 + 0.3 * q), n: R.int(0, 1e5) });
    }
  }
  sites.sort((a, b) => a.y - b.y);
  let t = 0, burst = false;
  const flames = (p, back) => {
    const NZ = (rate, seed = 0, off = 0) => noise(t * rate + off, seed);
    for (const s of sites) {
      if (s.back !== back) continue;
      const age = t - s.t0;
      if (age < 0 || age > s.life) continue;
      const u = age / s.life, rise = ease.outBack(clamp(age / 0.08), 2), fade = 1 - Math.pow(Math.max(0, (u - 0.1) / 0.9), 1.3);
      const h = s.h * rise * fade * (0.85 + 0.15 * noise(t * 3.3, s.n)) * (1 + 0.5 * Math.max(0, noise(t * 2.6, s.n + 70) - 0.55));
      if (h < 1) continue;

      const L = u < 0.3 ? (back ? BACK_LAYERS : LAYERS) : u < 0.65 ? BACK_LAYERS : EMBER_LAYERS;
      flameTongue(p, s.x, s.y, h, s.w * (0.6 + 0.4 * fade), NZ(2.2, s.n + 40) * 1.5 - s.x * 0.02, NZ, s.n, H, L);
    }
  };

  const scorch = (p) => {
    const fr = front(t), end = 1 - smooth(meta.duration - 1.2, meta.duration - 0.15, t);
    if (fr < 1 || end <= 0) return;
    for (let y = Math.floor(-fr * SY); y <= Math.ceil(fr * SY); y++)
      for (let x = Math.floor(-fr); x <= Math.ceil(fr); x++) {
        const d = Math.hypot(x + 0.5, (y + 0.5) / SY);
        if (d > fr) continue;
        const since = t - reachedAt(d), h = rand(x, y, S), hot = 1 - since / (1.2 + h * 0.9);
        if (hot > 0 && h < 0.03 + 0.06 * hot) {
          p.px(x, y, hot > 0.7 ? H[3] : hot > 0.45 ? H[4] : hot > 0.2 ? H[5] : H[6]);
          p.light(x, y, H[4], 0.3 * hot);
          continue;
        }
        p.blend(x, y, h < 0.5 ? SOOT : SOOT2, Math.min(1, since * 3) * (0.55 - (d / REACH) * 0.25) * end);
      }
  };
  const ring = (p, back) => {
    const k = (t - CHARGE) / (SPREAD + 0.1);
    if (k < 0 || k >= 1) return;
    band(p, 0, 0, front(t) + 1.5, SY, Math.max(1.5, 6 * (1 - k)), k < 0.75 ? 1 : (1 - k) / 0.25, [H[6], H[4], H[2], H[1]], (g) => Math.sin(g) < 0 === back, k < 0.12);
  };
  return {
    update(dt) {
      t += dt;

      if (t < CHARGE - 0.05 && R.chance(0.9 * dt * 60)) {
        const a = R.range(0, TAU), d = R.range(26, 54), T = R.range(0.18, 0.26), v = (d * 3) / (Math.exp(3 * T) - 1);
        const x = Math.cos(a) * d, y = Math.min(-2, -6 + Math.sin(a) * d * 0.45), l = Math.hypot(x, y + 4) || 1;
        ps.spawn(P.STREAK, x, y, (-x / l) * v, ((-4 - y) / l) * v, T, R.chance(0.5) ? H[2] : H[3]);
      }
      if (t < CHARGE && R.chance(0.5 * dt * 60 * (t / CHARGE))) ps.spawn(P.FIRE, R.range(-4, 4), -1, R.range(-8, 8), -R.range(20, 40), R.range(0.12, 0.24), 0, R.range(1, 2.2));
      if (!burst && t >= CHARGE) {
        burst = true;
        lights.add(0, -18, 64, WARM, 0.85, 0.5);
        lights.add(0, -6, 30, WHITE, 0.8, 0.08);
        for (let i = 0; i < 40; i++) {
          const a = R.range(0, TAU), sp = R.range(80, 220);
          ps.spawn(P.SPARK, Math.cos(a) * 3, -2, Math.cos(a) * sp, Math.sin(a) * sp * 0.4 - R.range(40, 120), R.range(0.2, 0.5));
        }
      }

      if (t > CHARGE && t < CHARGE + SPREAD + 1.2)
        for (let i = 0; i < 3; i++) {
          if (!R.chance(0.75 * dt * 60)) continue;
          const s = R.pick(sites), age = t - s.t0;
          if (age < 0 || age > s.life * 0.7) continue;
          ps.spawn(P.FIRE, s.x + R.range(-1, 1), s.y - s.h * 0.6, R.range(-5, 5), -R.range(20, 40), R.range(0.2, 0.4), 0, R.range(1.2, 2.4), 0, R.chance(0.5) ? PF.SMOKES | (s.back ? PF.BACK : 0) : s.back ? PF.BACK : 0);
          if (R.chance(0.12)) ps.spawn(P.EMBER, s.x, s.y - s.h * 0.5, R.range(-15, 15), -R.range(30, 70), R.range(0.6, 1.3), H[3], 1, 0, s.back ? PF.BACK : 0);
        }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      scorch(p);
      ring(p, true);
      flames(p, true);
      simDraw(p, ps, H, "back");

      const fr = front(t), k = t < CHARGE ? 0 : 1 - smooth(CHARGE + SPREAD, CHARGE + SPREAD + 1.4, t);
      if (k > 0) for (let i = 0; i < 16; i++) p.glow(Math.cos((i / 16) * TAU) * fr, Math.sin((i / 16) * TAU) * fr * SY - 3, 16, GLOW, 0.2 * k);
    },
    draw(p) {
      ring(p, false);
      flames(p, false);
      simDraw(p, ps, H, "front");

      if (t < CHARGE) p.glow(0, -3, 8 + 22 * (t / CHARGE), GLOW, 0.6 * (t / CHARGE));
      if (t >= CHARGE && t < CHARGE + 0.1) {
        const k = 1 - (t - CHARGE) / 0.1;
        p.ellipse(0, -1, 14 * (0.6 + 0.4 * k), 4, H[2]);
        p.ellipse(0, -1, 9 * (0.6 + 0.4 * k), 2.6, k > 0.5 ? WHITE : H[1]);
      }
      const k = smooth(CHARGE - 0.05, CHARGE, t) * (1 - smooth(CHARGE + SPREAD * 0.5, CHARGE + SPREAD + 1.2, t));
      if (k > 0) p.glow(0, -6, 92, GLOW, 0.3 * k);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ix8avkw=__r(1);const Particles=__ix8avkw.Particles;const Lights=__ix8avkw.Lights;const P=__ix8avkw.P;const Rng=__ix8avkw.Rng;const fit=__ix8avkw.fit;const sparkle=__ix8avkw.sparkle;const clamp=__ix8avkw.clamp;const smooth=__ix8avkw.smooth;const seg=__ix8avkw.seg;const lerp=__ix8avkw.lerp;const ease=__ix8avkw.ease;const TAU=__ix8avkw.TAU;const WHITE=__ix8avkw.WHITE;const mix=__ix8avkw.mix;const luma=__ix8avkw.luma;const rgb=__ix8avkw.rgb;const READY=__ix8avkw.READY;
const __icp8fsl=__r(29);const shapeOf=__icp8fsl.shapeOf;const recolor=__icp8fsl.recolor;const oval=__icp8fsl.oval;
const meta = {
  name: "Heal",
  desc: "Petals of light bloom under the feet, a hoop of light rises up the body restoring its colour and leaving sparkles, and motes spiral up and pop into tiny hearts.",
  tags: ["holy", "heal", "restore", "buff", "petals", "hearts", "character", "one-shot"],
  size: [80, 104],
  origin: [40, 92],
  duration: 1.9,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: { palette: ["#3d2027", "#7d3f35", "#c97a4a", "#f2b46a", "#ffd994", "#fff0cf", "#fffaf2", "#ffffff"], seed: 2 },
};
const HURT = { turn: 0.8, crouch: 5, lean: 3, hy: 1, fx: 1, fy: -21, bx: 7, by: -15, ffx: 4, fbx: -3 };
const UP = { turn: 1.15, crouch: -1, fx: -13, fy: -36, bx: 14, by: -36, hy: -1, ffx: -3, fbx: 4 };
const act = {
  onBody: true,
  poses: [
    [-0.3, HURT],
    [0.16, { ...HURT, crouch: 6 }],
    [0.5, { ...HURT, crouch: 3, lean: 1, hy: 0 }],
    [0.78, UP],
    [1.2, { ...UP, crouch: 0, fy: -30, by: -30, hy: 0 }],
    [1.9, READY],
  ],
};
const SY = 0.3, NP = 8, PR = 16, LIFT0 = 0.16, LIFT1 = 0.74, TOPY = -43;
const HEART = [".#.#.", "#####", ".###.", "..#.."];

function heart(p, x, y, C, a) {
  const X = Math.round(x) - 2, Y = Math.round(y) - 2, at = (i, j) => j >= 0 && j < 4 && i >= 0 && i < 5 && HEART[j][i] === "#";
  for (let j = -1; j <= 4; j++)
    for (let i = -1; i <= 5; i++) {
      if (at(i, j)) p.dot(X + i, Y + j, i === 1 && j === 1 ? WHITE : j >= 2 ? C[5] : C[6], a);
      else if (at(i - 1, j) || at(i + 1, j) || at(i, j - 1) || at(i, j + 1)) p.dot(X + i, Y + j, C[3], a * 0.9);
    }
  p.glow(x, y, 6, C[5], 0.4 * a);
}
function create(o) {
  const C = fit(o.palette, 8), A = o.actor, S = shapeOf(A), R = new Rng(o.seed);
  const ps = new Particles({ rng: R, ground: () => 0, sparks: [WHITE, C[6], C[5], C[4]] });
  const lights = new Lights();
  const rows = new Map();
  for (const [x, y] of S.edge) (rows.get(y) ?? rows.set(y, []).get(y)).push(x);

  const petals = Array.from({ length: NP }, (_, k) => ({ a: (k / NP) * TAU + 0.2, t0: 0.02 + ((k * 3) % NP) * 0.035, w: R.range(4.2, 5.2) }));

  const motes = [];
  for (let k = 0; k < NP; k++) motes.push({ t0: 0.2 + k * 0.05, th0: petals[k].a, r0: PR * 0.9, y0: -1, w: 4.2 * (k % 2 ? 1 : -1), v: R.range(46, 58), life: R.range(0.75, 0.95), kind: k % 2 });
  for (let k = 0; k < 8; k++) motes.push({ t0: LIFT1 + R.range(0, 0.06), th0: (k / 8) * TAU, r0: R.range(12, 18), y0: TOPY + R.range(-2, 4), w: 3.6 * (k % 2 ? 1 : -1), v: R.range(14, 34), life: R.range(0.35, 0.6), kind: (k + 1) % 2 });
  let t = 0, burst = false, lastRow = 1;
  const hoopY = (tt) => lerp(0, TOPY, ease.inOutSine(seg(tt, LIFT0, LIFT1)));
  const hoopR = (tt) => lerp(PR, 12, seg(tt, LIFT0, LIFT1));
  function bloom(k, tt) {
    const pe = petals[k];
    return ease.outBack(seg(tt, pe.t0, pe.t0 + 0.3), 1.8) * (1 - ease.inBack(seg(tt, 1.25 + k * 0.02, 1.6 + k * 0.02), 1.4));
  }


  function petal(p, k, back) {
    const pe = petals[k], g = pe.a + t * 0.4, near = Math.sin(g) >= 0, b = bloom(k, t);
    if (near === back || b <= 0.02) return;
    const ca = Math.cos(g), sa = Math.sin(g), rb = 6, rt = rb + 9 * Math.min(1.2, b), h = (k % 2 ? 7 : 9) * b;
    const bx = ca * rb, by = sa * rb * SY, tx = ca * rt, ty = sa * rt * SY - h, L = Math.hypot(tx - bx, ty - by);
    if (L < 1.5) return;
    const ux = (tx - bx) / L, uy = (ty - by) / L, W = pe.w * Math.min(1, b) * (0.35 + 0.65 * Math.abs(sa)), pad = W + 1;
    p.each(Math.min(bx, tx) - pad, Math.min(by, ty) - pad, Math.max(bx, tx) + pad, Math.max(by, ty) + pad, (x, y, sx, sy) => {
      const dx = x - bx, dy = y - by, u = (dx * ux + dy * uy) / L;
      if (u < 0 || u > 1) return;
      const hw = W * Math.pow(Math.sin(Math.PI * Math.pow(u, 0.6)), 0.7) + 0.2, v = Math.abs(-dx * uy + dy * ux) / hw;
      if (v > 1) return;
      if (u > 0.9) return p.put(sx, sy, WHITE, 1);
      if (v > 0.7) return p.put(sx, sy, u < 0.3 ? C[3] : u < 0.7 ? C[5] : C[6], 1);
      if (v < 0.2 && u > 0.15 && u < 0.85) return p.put(sx, sy, u < 0.55 ? C[5] : C[6], back ? 0.75 : 0.85);
      p.blendPx(sx, sy, u < 0.45 ? C[3] : C[4], back ? 0.6 : 0.45);
    });
    p.glow(tx, ty, 5, C[5], 0.35 * Math.min(1, b));
  }

  function hoop(p, back) {
    if (t < LIFT0 || t > LIFT1 + 0.12) return;
    const y = hoopY(t), r = hoopR(t) * (t > LIFT1 ? 1 - (t - LIFT1) / 0.12 : 1), keep = back ? (g) => Math.sin(g) < 0 : (g) => Math.sin(g) >= 0;
    oval(p, 0, y, r, r * SY, (g) => (Math.sin(g) > 0.5 ? WHITE : C[6]), back ? 0.8 : 1, keep);
    if (!back) {
      oval(p, 0, y + 1, r - 0.5, r * SY, C[4], 1, keep);
      for (let i = -2; i <= 2; i++) p.glow(i * r * 0.45, y, 8, C[5], 0.32);
    }
  }
  return {
    update(dt) {
      t += dt;

      if (t > LIFT0 && t < LIFT1) {
        const Y = Math.round(hoopY(t));
        for (let y = lastRow; y > Y; y--) {
          const xs = rows.get(y);
          if (!xs || !R.chance(0.45)) continue;
          ps.spawn(P.STAR, R.pick(xs) + R.range(-1, 1) * 2, y, R.range(-4, 4), -R.range(4, 12), R.range(0.3, 0.55), R.chance(0.5) ? WHITE : C[6], R.range(0.6, 1.6));
        }
        lastRow = Math.min(lastRow, Y);
      }
      if (!burst && t >= LIFT1) {
        burst = true;
        lights.add(0, TOPY, 26, C[5], 0.55, 0.3);
        lights.add(0, TOPY, 10, WHITE, 0.45, 0.08);
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      const pool = smooth(0, 0.2, t) * (1 - smooth(1.3, 1.75, t));
      if (pool > 0) p.glow(0, -2, 30, C[4], 0.3 * pool);
      for (let k = 0; k < NP; k++) petal(p, k, true);
      hoop(p, true);
      ps.draw(p, "back");
      riders(p, true);
    },
    draw(p) {

      const drain = smooth(0, 0.08, t);
      if (t < LIFT1 + 0.35) {
        const Y = t < LIFT0 ? 1 : hoopY(t), done = t >= LIFT1;
        recolor(p, A, (c, x, y) => {
          const d = y - Y;
          if (!done && d < -0.5) {
            const l = luma(c) * 0.88;
            return mix(c, rgb(l * 236, l * 226, l * 222), 0.68 * drain);
          }
          if (!done && d < 1) return WHITE;
          if (!done && d < 2.5) return C[6];
          const k = (done ? 0.45 * (1 - seg(t, LIFT1, LIFT1 + 0.35)) : 0.5 * Math.exp(-(d - 2.5) / 5));
          return k > 0.05 ? mix(c, C[5], k) : 0;
        });
        if (t > LIFT0 && !done) p.glow(0, Y, 18, C[5], 0.35);
      }
      for (let k = 0; k < NP; k++) petal(p, k, false);
      hoop(p, false);
      if (t >= LIFT1 && t < LIFT1 + 0.25) sparkle(p, 0, TOPY, 8 * (1 - (t - LIFT1) / 0.25), WHITE, C[5], 0.6);
      riders(p, false);
      ps.draw(p, "front");
      lights.draw(p);
    },
  };

  function riders(p, back) {
    for (const m of motes) {
      const a = t - m.t0;
      if (a < 0) continue;
      const at = (aa) => {
        const th = m.th0 + m.w * aa, r = m.r0 * (1 - 0.45 * (aa / m.life));
        return [Math.cos(th) * r, m.y0 - m.v * aa, Math.sin(th)];
      };
      if (a < m.life) {
        const [x, y, z] = at(a);
        if (z < 0 !== back) continue;
        for (let j = 0; j < 7; j++) {
          const aj = a - j * 0.03;
          if (aj < 0) break;
          const [tx, ty, tz] = at(aj);
          if (tz < 0 !== back) continue;
          p.dot(tx, ty, j === 0 ? WHITE : j < 3 ? C[6] : C[5], (1 - j / 7) * (back ? 0.6 : 1));
        }
        p.glow(x, y, 4, C[5], back ? 0.2 : 0.4);
        continue;
      }

      const u = (a - m.life) / 0.36;
      if (u >= 1 || back) continue;
      const [x, y] = at(m.life), k = 1 - smooth(0.5, 1, u);
      if (u < 0.12) sparkle(p, x, y, 3, WHITE, C[6], 0.5);
      else if (m.kind) heart(p, x, y - u * 6, C, k);
      else sparkle(p, x, y - u * 5, 1 + 2 * k * (0.7 + 0.3 * Math.sin(a * 30)), WHITE, C[5], 0.45 * k);
    }
  }
}
},
function(__e){Object.defineProperty(__e,"GOLD",{enumerable:true,configurable:true,get:()=>GOLD});Object.defineProperty(__e,"GREEN",{enumerable:true,configurable:true,get:()=>GREEN});Object.defineProperty(__e,"ASH",{enumerable:true,configurable:true,get:()=>ASH});Object.defineProperty(__e,"shapeOf",{enumerable:true,configurable:true,get:()=>shapeOf});Object.defineProperty(__e,"recolor",{enumerable:true,configurable:true,get:()=>recolor});Object.defineProperty(__e,"toneOf",{enumerable:true,configurable:true,get:()=>toneOf});Object.defineProperty(__e,"oval",{enumerable:true,configurable:true,get:()=>oval});Object.defineProperty(__e,"FAR",{enumerable:true,configurable:true,get:()=>FAR});Object.defineProperty(__e,"NEAR",{enumerable:true,configurable:true,get:()=>NEAR});Object.defineProperty(__e,"feather",{enumerable:true,configurable:true,get:()=>feather});Object.defineProperty(__e,"Feathers",{enumerable:true,configurable:true,get:()=>Feathers});Object.defineProperty(__e,"plus",{enumerable:true,configurable:true,get:()=>plus});
const __i1a1k92=__r(1);const WHITE=__i1a1k92.WHITE;const TAU=__i1a1k92.TAU;const clamp=__i1a1k92.clamp;const smooth=__i1a1k92.smooth;const luma=__i1a1k92.luma;
const GOLD = ["#3b1d2a", "#7a3a2c", "#c4652e", "#f0a040", "#ffd25e", "#fff0a0", "#fffbe0", "#ffffff"];
const GREEN = ["#0e2a24", "#14472f", "#1d6e3a", "#2f9a45", "#5cc654", "#a0e46c", "#dcffb4", "#ffffff"];
const ASH = ["#16131c", "#26222f", "#3a3546", "#524c5e", "#6e6878", "#8c8796"];

const SHAPES = new WeakMap();
function shapeOf(A) {
  let s = SHAPES.get(A.mask);
  if (s && s.x === A.x && s.y === A.y) return s;
  const m = A.mask, inside = (i, j) => i >= 0 && j >= 0 && i < m.w && j < m.h && m.data[j * m.w + i] > 0;
  const edge = [], out = [];
  for (let j = -1; j <= m.h; j++)
    for (let i = -1; i <= m.w; i++) {
      const nb = inside(i - 1, j) + inside(i + 1, j) + inside(i, j - 1) + inside(i, j + 1);
      if (inside(i, j)) {
        if (nb < 4) edge.push([A.x + i, A.y + j]);
      } else if (nb) out.push([A.x + i, A.y + j]);
    }
  s = { x: A.x, y: A.y, edge, out, top: A.y, bottom: A.y + m.h, at: (x, y) => inside(Math.floor(x) - A.x, Math.floor(y) - A.y) };
  SHAPES.set(A.mask, s);
  return s;
}
function recolor(p, A, fn, a = 1) {
  const m = A.mask, P = A.pixels, fa = typeof a === "function";
  if (!P) return;
  for (let j = 0; j < m.h; j++)
    for (let i = 0; i < m.w; i++) {
      const c = P[j * m.w + i];
      if (!c) continue;
      const x = A.x + i, y = A.y + j, n = fn(c, x, y);
      if (n) p.dot(x, y, n, fa ? a(x, y) : a);
    }
}
const toneOf = (R, c, lift = 0) => R[clamp(Math.floor((luma(c) * 1.1 + lift) * R.length), 0, R.length - 1)];

function oval(p, cx, cy, rx, ry, c, a = 1, keep = null) {
  if (rx < 0.5) return;
  const n = Math.ceil(Math.max(rx, ry) * TAU * 1.5) + 6, fc = typeof c === "function", fa = typeof a === "function";
  for (let j = 0; j < n; j++) {
    const g = (j / n) * TAU;
    if (keep && !keep(g)) continue;
    p.dot(cx + Math.cos(g) * rx, cy + Math.sin(g) * ry, fc ? c(g) : c, fa ? a(g) : a);
  }
}
const FAR = (g) => Math.sin(g) < 0;
const NEAR = (g) => Math.sin(g) >= 0;

function feather(p, x, y, ang, len, wid, R, a = 1, side = 1, hot = 0, quill = 0.02) {
  if (len < 1.5 || a <= 0.02) return;
  const n = R.length, ca = Math.cos(ang), sa = Math.sin(ang), x1 = x + ca * len, y1 = y + sa * len, pad = wid + 1.2, h = hot > 0.5;
  const edge = h ? R[n - 3] : R[n - 5], lead = h ? WHITE : R[n - 2], B = h ? [WHITE, WHITE, R[n - 2]] : [R[n - 2], R[n - 3], R[n - 4]];
  p.each(Math.min(x, x1) - pad, Math.min(y, y1) - pad, Math.max(x, x1) + pad, Math.max(y, y1) + pad, (px, py, sx, sy) => {
    const dx = px - x, dy = py - y, u = (dx * ca + dy * sa) / len;
    if (u < 0 || u > 1.05) return;
    const v = (-dx * sa + dy * ca) * side, av = Math.abs(v);
    const w = wid * Math.sqrt(clamp((u - quill) / 0.22)) * Math.sqrt(Math.max(0, 1 - Math.pow(Math.max(0, (u - 0.55) / 0.47), 2)));
    const lim = v < 0 ? w * 0.42 : w, fade = u < 0.72 ? 1 : 1 - (u - 0.72) * 1.6;
    if (av < 0.5 && u < 0.9) return p.put(sx, sy, u < 0.5 ? WHITE : B[0], a);
    if (av > lim + 0.05 || w < 0.5) return;
    if (lim - av < 1) return v > 0 ? p.put(sx, sy, u > 0.85 ? B[2] : edge, a * fade) : p.put(sx, sy, lead, a);
    if (u < 0.72) return p.put(sx, sy, u < 0.38 ? B[0] : B[1], a);
    p.blendPx(sx, sy, B[2], a * fade);
  });
}
class Feathers {
  constructor(rng, floor = 0) {
    this.R = rng;
    this.floor = floor;
    this.list = [];
  }
  add(f) {
    const R = this.R;
    this.list.push({ vx: 0, vy: 0, a: 0, len: 7, wid: 2, delay: 0, back: false, side: R.sign(), ph: R.range(0, TAU), w: R.range(3.2, 4.6), amp: R.range(6, 11), sink: R.range(14, 24), va: R.range(-9, 9), tilt: R.range(-0.35, 0.35), ...f, max: f.life, age: 0, landed: false });
  }
  get count() {
    return this.list.length;
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const f = this.list[i];
      if (f.delay > 0) {
        f.delay -= dt;
        continue;
      }
      if ((f.life -= dt) <= 0) {
        this.list.splice(i, 1);
        continue;
      }
      f.age += dt;
      if (f.landed) {
        f.a += (Math.round(f.a / Math.PI) * Math.PI - f.a) * Math.min(1, dt * 10);
        continue;
      }

      f.vx -= f.vx * 3.4 * dt;
      f.vy -= f.vy * 3.4 * dt;
      const s = smooth(0.1, 0.6, f.age), ph = f.age * f.w + f.ph, c = Math.cos(ph);

      f.x += (f.vx + Math.sin(ph) * f.amp * s * 0.9) * dt;
      f.y += (f.vy + f.sink * s * (c * c * 1.5 - 0.2)) * dt;

      const rest = Math.round(f.a / Math.PI) * Math.PI + f.tilt + Math.sin(ph) * 0.6;
      f.a += f.va * dt * (1 - s) + (rest - f.a) * Math.min(1, dt * 5 * s);
      if (f.y >= this.floor - 0.5) {
        f.y = this.floor - 0.5;
        f.landed = true;
        f.life = Math.min(f.life, 0.6);
      }
    }
  }
  draw(p, R, layer) {
    for (const f of this.list) {
      if (f.delay > 0 || (layer && (f.back ? "back" : "front") !== layer)) continue;
      const k = f.life / f.max, a = Math.min(1, f.life / 0.45, f.age / 0.06), ca = Math.cos(f.a), sa = Math.sin(f.a);
      feather(p, f.x - (ca * f.len) / 2, f.y - (sa * f.len) / 2, f.a, f.len, f.wid, R, a, f.side, f.age < 0.06 ? 1 : 0, 0.2);
      p.glow(f.x, f.y, 4 + f.len * 0.5, R[R.length - 3], 0.22 * a * (0.4 + 0.6 * k));
    }
  }
}

function plus(p, x, y, L, th, R, a = 1, glint = false) {
  const n = R.length, X = Math.round(x), Y = Math.round(y), w = th > 1 ? 1 : 0;
  const ins = (i, j) => (Math.abs(i) <= w && Math.abs(j) <= L) || (Math.abs(j) <= w && Math.abs(i) <= L);
  for (let j = -L - 1; j <= L + 1; j++)
    for (let i = -L - 1; i <= L + 1; i++) {
      if (!ins(i, j)) {
        if (w && (ins(i - 1, j) || ins(i + 1, j) || ins(i, j - 1) || ins(i, j + 1))) p.dot(X + i, Y + j, R[Math.max(0, n - 6)], a * 0.9);
        continue;
      }
      let c;
      if (!w) c = i === 0 && j === 0 ? WHITE : Math.abs(i) + Math.abs(j) >= L ? R[n - 3] : R[n - 2];
      else if (i === 0 && j === 0) c = WHITE;
      else if (i === 0 || j === 0) c = Math.abs(i) + Math.abs(j) < L ? R[n - 2] : R[n - 3];
      else c = i < 0 || j < 0 ? R[n - 3] : R[n - 5];
      if (glint && ((i === 0 && j === -L) || (i === -L && j === 0))) c = WHITE;
      p.dot(X + i, Y + j, c, a);
    }
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __if1sfzs=__r(1);const Particles=__if1sfzs.Particles;const Bits=__if1sfzs.Bits;const Lights=__if1sfzs.Lights;const Blazes=__if1sfzs.Blazes;const P=__if1sfzs.P;const PF=__if1sfzs.PF;const B=__if1sfzs.B;const Rng=__if1sfzs.Rng;const fit=__if1sfzs.fit;const band=__if1sfzs.band;const clamp=__if1sfzs.clamp;const smooth=__if1sfzs.smooth;const ease=__if1sfzs.ease;const rand=__if1sfzs.rand;const TAU=__if1sfzs.TAU;const WHITE=__if1sfzs.WHITE;const hex=__if1sfzs.hex;const mix=__if1sfzs.mix;const scale=__if1sfzs.scale;const rgb=__if1sfzs.rgb;
const meta = {
  name: "Explosion",
  desc: "A ground blast: a white flash and shock rings, fire that cools into a rolling smoke column, sparks, burning brands that land and keep burning, tumbling rocks and a glowing scorch.",
  tags: ["explosion", "fire", "smoke", "debris", "impact", "one-shot"],
  size: [300, 240],
  origin: [150, 196],
  duration: 5.4,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#4a1712", "#c9281f", "#f2561d", "#ff8a2a", "#ffc23d", "#ffe26b", "#fff3a6", "#ffffff"], stone: "#4a3f69", size: 1, seed: 7 },
};
const SOOT = hex("#0d0a12"), SOOT2 = hex("#17121d"), OUTLINE = hex("#1a1422"), WARM = rgb(255, 176, 96);
function stone(c) {
  c = hex(c);
  return { light: mix(scale(c, 1.35), WHITE, 0.08), body: c, shade: scale(c, 0.64), dust: mix(scale(c, 1.2), rgb(150, 140, 150), 0.3) };
}

function scorch(p, F, t, rx0, cool, fade) {
  if (fade <= 0) return;
  const rx = rx0 * Math.min(1, t / 0.08), ry = 4, heat = [...F].reverse();
  for (let y = 0; y <= 2; y++)
    for (let x = Math.floor(-rx); x <= Math.ceil(rx); x++) {
      const dx = (x + 0.5) / rx, dy = (y + 0.5) / ry, d = Math.sqrt(dx * dx + dy * dy);
      if (d > 1) continue;
      const k = rand(x * 31 + y, 3), T = Math.pow(clamp(1 - t / cool), 1.4) * (1.25 - d) - k * 0.35;
      if (T > 0.06) {
        const c = heat[Math.min(heat.length - 1, Math.floor((1 - Math.min(1, T)) * (heat.length - 1)))];
        p.dot(x, y, c, fade);
        if ((x & 3) === 0) p.glow(x + 0.5, y, 6, c, 0.18 * T * fade);
      } else p.dot(x, y, d < 0.5 ? SOOT : SOOT2, (d < 0.95 - k * 0.3 ? 1 : 1 - d) * fade);
    }
}

function rock(p, b, st) {
  const r = 0.6 + b.s * 0.75, fade = Math.min(1, b.life / 0.5), lx = Math.cos(b.a) * r * 0.4, ly = Math.sin(b.a) * r * 0.4;
  p.shade(b.x - r - 1, b.y - r - 1, b.x + r + 1, b.y + r + 1, (x, y, out) => {
    const dx = x - b.x, dy = y - b.y, d = Math.hypot(dx * 1.15, dy);
    if (d > r + 0.9) return;
    const lit = dx * lx + dy * ly;
    out.c = d > r ? OUTLINE : lit < -0.4 ? st.light : lit > 0.6 ? st.shade : st.body;
    out.a = fade;
  });
}
function create(o) {
  const F = fit(o.palette, 8), S = o.size, RAD = 18 * S, POWER = 0.9 * Math.pow(S, 0.8), EARTH = 1.6, st = stone(o.stone);
  const R = new Rng(o.seed), floor = () => 0;
  let blazes;
  const ps = new Particles({ rng: R, ground: floor, sparks: [F[6], F[5], F[3], F[2]], onLand: (x, y) => blazes.add(x, y - 0.25, R.range(0.9, 1.5), R.range(0.55, 0.85)) });
  blazes = new Blazes(ps);
  const rocks = new Bits({ ground: floor }), lights = new Lights(), flashes = [], rings = [];
  const Y = -RAD * 0.3;
  let t = 0;

  flashes.push({ r: RAD * 1.05, life: 0.06, max: 0.06 });
  rings.push({ r0: RAD * 0.45, r1: RAD * 2.7, life: 0.34, max: 0.34, thick: 3, c: F[5] }, { r0: RAD * 0.3, r1: RAD * 1.6, life: 0.22, max: 0.22, thick: 1.8, c: F[3] });
  lights.add(0, Y, RAD * 3.4, WARM, 0.6 * POWER, 0.7);
  lights.add(0, Y, RAD * 1.6, WHITE, 0.6, 0.08);
  for (let i = 0; i < 5; i++) ps.spawn(P.FIRE, R.range(-2.5, 2.5), Y + R.range(-2.5, 2.5), R.range(-20, 20), R.range(-40, -10), R.range(0.18, 0.3), 0, R.range(RAD * 0.4, RAD * 0.55));
  for (let i = 0; i < Math.round(28 * POWER); i++) {
    const a = R.range(0, TAU), d = R.range(0, RAD * 0.55), sp = R.range(40, 210) * POWER;
    ps.spawn(P.FIRE, Math.cos(a) * d, Y + Math.sin(a) * d, Math.cos(a) * sp, Math.sin(a) * sp * 0.8 - 40, R.range(0.55, 1.15), 0, R.range(RAD * 0.22, RAD * 0.46), 0, R.chance(0.45) ? PF.SMOKES | PF.BIG : 0);
  }
  for (let i = 0; i < 5; i++) {
    const a = R.range(0, TAU), d = R.range(RAD * 0.1, RAD * 0.5);
    ps.spawn(P.SMOKE, Math.cos(a) * d, Y + Math.sin(a) * d, Math.cos(a) * 30, Math.sin(a) * 20 - 30, R.range(0.9, 1.5), rgb(34, 29, 38), R.range(RAD * 0.15, RAD * 0.26), R.range(0.06, 0.2), PF.BIG);
  }
  for (let i = 0; i < 5; i++) ps.spawn(P.FIRE, R.range(-RAD * 0.25, RAD * 0.25), Y, R.range(-12, 12), R.range(-180, -100), R.range(0.8, 1.3), 0, R.range(RAD * 0.24, RAD * 0.36), R.range(0, 0.1), R.chance(0.6) ? PF.SMOKES | PF.BIG : 0);
  for (let i = 0; i < Math.round(10 * POWER); i++) {
    const a = R.range(0, TAU), d = R.range(0, RAD * 0.7), sp = R.range(15, 100);
    ps.spawn(P.SMOKE, Math.cos(a) * d, Y + Math.sin(a) * d, Math.cos(a) * sp, Math.sin(a) * sp * 0.6 - 35, R.range(1.8, 2.8), 0, R.range(RAD * 0.26, RAD * 0.44), R.range(0.12, 0.45), PF.BIG);
  }
  for (let i = 0; i < Math.round(80 * POWER); i++) {
    const a = R.range(0, TAU), sp = R.range(140, 380) * POWER;
    ps.spawn(P.SPARK, 0, Y, Math.cos(a) * sp, Math.sin(a) * sp - 70, R.range(0.18, 0.6));
  }
  for (let i = 0; i < Math.round(40 * POWER); i++) {
    const a = R.range(0, TAU), sp = R.range(30, 150);
    ps.spawn(P.EMBER, Math.cos(a) * RAD * 0.4, Y + Math.sin(a) * RAD * 0.4, Math.cos(a) * sp, Math.sin(a) * sp - 75, R.range(1.2, 2.6), F[3]);
  }
  for (let i = 0; i < Math.round(R.range(9, 14) * Math.max(0, POWER - 0.55)); i++) {
    const a = -Math.PI / 2 + R.range(-1.35, 1.35), sp = R.range(170, 330);
    ps.spawn(P.BRAND, 0, Y, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.7, 1.3));
  }

  for (let i = 0; i < Math.round(RAD * 0.5); i++) {
    const s = R.sign();
    ps.spawn(P.SMOKE, s * R.range(0, RAD * 0.6), -R.range(1, 5 + RAD * 0.04), s * R.range(3, 9.5) * RAD, -R.range(2, 15), R.range(1.1, 2.0), st.dust, R.range(4, 7) + RAD / 6, R.range(0, 0.06), PF.BIG);
  }
  for (let i = 0; i < 26 * Math.min(1.5, S); i++)
    rocks.add({ kind: B.CHUNK, x: R.range(-0.4, 0.4) * RAD, y: -3, vx: R.range(-9, 9) * RAD * 0.25, vy: -R.range(7, 16) * RAD * 0.9, g: 1, drag: 0.4, bounce: 0.3, life: R.range(1.8, 2.6), a: R.range(0, TAU), va: R.range(-16, 16), s: R.int(1, 3) });
  for (let i = 0; i < Math.round(EARTH * RAD * 4); i++) {
    const u = R.range(-1, 1), a = -Math.PI / 2 + u * 0.5, sp = R.range(5, 15) * RAD * (1 - 0.45 * Math.abs(u));
    ps.spawn(P.GRIT, u * 0.25 * RAD, -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(1.2, 2.2), R.pick([st.light, st.body, st.body, st.shade]), R.chance(0.45) ? 2 : 1);
  }
  for (let i = 0; i < Math.round(EARTH * 12); i++)
    ps.spawn(P.SMOKE, R.range(-0.3, 0.3) * RAD, -R.range(2, RAD * 0.6), R.range(-15, 15), -R.range(60, 190) * EARTH * 0.6, R.range(1.6, 2.6), st.dust, R.range(5, 9) * Math.sqrt(S) + RAD / 7, R.range(0, 0.15), PF.BIG);
  return {
    update(dt) {
      t += dt;
      for (const a of [flashes, rings]) for (let i = a.length - 1; i >= 0; i--) if ((a[i].life -= dt) <= 0) a.splice(i, 1);
      rocks.update(dt);

      for (const b of rocks.list)
        if (b.rest && !b.dusted) {
          b.dusted = true;
          for (let i = 0; i < 3; i++) ps.spawn(P.DUST, b.x + R.range(-1.5, 1.5), -0.5, R.sign() * R.range(10, 55) * 0.6, -R.range(2, 22), R.range(0.3, 0.65), st.dust, R.range(1.3, 2.8));
        }
      blazes.update(dt);
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      scorch(p, F, t, 22 * S, 1.2 + RAD / 14, 1 - smooth(meta.duration - 1.2, meta.duration - 0.2, t));
      ps.draw(p, "back");
      blazes.drawBack(p);
      const k = t / 0.5;
      if (k < 1) band(p, 0, 0.5, 80 * S * ease.outCubic(k), 0.16, Math.max(1, (2 + RAD / 9) * (1 - k)), 1.15 - k, [st.body, st.light, F[3], F[6]], (g) => Math.sin(g) < 0);
    },
    draw(p) {
      const k = t / 0.5;
      if (k < 1) band(p, 0, 0.5, 80 * S * ease.outCubic(k), 0.16, Math.max(1, (2 + RAD / 9) * (1 - k)), 1.15 - k, [st.body, st.light, F[3], F[6]], (g) => Math.sin(g) >= 0);
      for (const b of rocks.list) rock(p, b, st);
      ps.draw(p, "front");
      for (const f of flashes) {
        const k2 = f.life / f.max, r = f.r * (0.8 + 0.2 * k2);
        p.circle(0, Y, r + 1.2, F[2]);
        p.circle(0, Y, r, k2 > 0.45 ? F[6] : F[5]);
        p.circle(0, Y, r * 0.6, k2 > 0.45 ? WHITE : F[6]);
      }
      for (const r of rings) {
        const k2 = r.life / r.max, e = 1 - Math.pow(k2, 3);
        p.ring(0, Y, r.r0 + (r.r1 - r.r0) * e, Math.max(1, r.thick * k2 + 0.4), r.c, Math.min(1, k2 * 1.6));
      }
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ivanker=__r(1);const Particles=__ivanker.Particles;const Lights=__ivanker.Lights;const P=__ivanker.P;const Rng=__ivanker.Rng;const fit=__ivanker.fit;const flare=__ivanker.flare;const clamp=__ivanker.clamp;const smooth=__ivanker.smooth;const ease=__ivanker.ease;const TAU=__ivanker.TAU;const WHITE=__ivanker.WHITE;const hex=__ivanker.hex;
const meta = {
  name: "Poof",
  desc: "A cartoon death poof: a white pop, a ring of soft round smoke balls bursting out between speed lines, little stars spinning off, and the cloud lifting and thinning away.",
  tags: ["spawn", "death", "despawn", "smoke", "poof", "cartoon", "one-shot"],
  size: [112, 92],
  origin: [56, 80],
  duration: 1.6,
  loop: false,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#2a2440", "#5e5878", "#9a94b4", "#cdc8e0", "#f2f0fa", "#ffffff"],
    stars: ["#ffd84a", "#fff3a6", "#ffffff"],
    seed: 21,
  },
};
const CY = -17;
function create(o) {
  const C = fit(o.palette, 6), S = fit(o.stars, 3), R = new Rng(o.seed), floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: [WHITE, S[1], S[0], C[2]] }), lights = new Lights();
  const balls = [], lines = [];

  const ring = 9;
  for (let i = 0; i < ring; i++) {
    const a = (i / ring) * TAU + R.range(-0.2, 0.2), sp = R.range(95, 140), r = R.range(5, 7);
    balls.push({ x: Math.cos(a) * 3, y: CY + Math.sin(a) * 3, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.8 - 12, r0: r * 0.5, r1: r, life: R.range(0.7, 1.05), delay: R.range(0, 0.03) });
  }
  for (let i = 0; i < 5; i++) {
    const a = R.range(0, TAU), sp = R.range(20, 60);
    balls.push({ x: Math.cos(a) * 2, y: CY + Math.sin(a) * 2, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 16, r0: 4, r1: R.range(6.5, 8.5), life: R.range(0.85, 1.2), delay: R.range(0.02, 0.06) });
  }

  for (let i = 0; i < 7; i++) {
    const a = R.range(0, TAU), sp = R.range(170, 240), r = R.range(2.2, 3.6);
    balls.push({ x: Math.cos(a) * 4, y: CY + Math.sin(a) * 4, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.75 - 10, r0: r * 0.6, r1: r, life: R.range(0.32, 0.5), delay: R.range(0.01, 0.04) });
  }
  for (const b of balls) b.max = b.life;

  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU + R.range(-0.12, 0.12) + 0.13, sa = Math.sin(a);

    lines.push({ a, r1: Math.min(R.range(24, 34), sa > 0.1 ? (-2 - CY) / sa : 99), d: R.range(0, 0.04) });
  }

  for (let i = 0; i < 7; i++) {
    const a = R.range(-Math.PI, 0.3), sp = R.range(70, 125);
    ps.spawn(P.STAR, Math.cos(a) * 6, CY + Math.sin(a) * 6, Math.cos(a) * sp, Math.sin(a) * sp - 30, R.range(0.55, 0.95), R.pick([S[2], S[1], S[1], S[0]]), R.range(1.3, 2.4), R.range(0.02, 0.1));
  }
  for (let i = 0; i < 10; i++) {
    const a = R.range(0, TAU), sp = R.range(40, 110);
    ps.spawn(P.STAR, Math.cos(a) * 5, CY + Math.sin(a) * 5, Math.cos(a) * sp, Math.sin(a) * sp - 20, R.range(0.3, 0.6), R.pick([WHITE, S[1]]), 0.6, R.range(0, 0.08));
  }

  for (let i = 0; i < 6; i++) {
    const s = R.sign();
    ps.spawn(P.DUST, s * R.range(1, 6), -1, s * R.range(25, 70), -R.range(2, 10), R.range(0.4, 0.7), C[2], R.range(1.6, 3), R.range(0.02, 0.08));
  }
  lights.add(0, CY, 46, C[4], 0.8, 0.4);
  lights.add(0, CY, 22, WHITE, 0.8, 0.1);
  let t = 0;

  const radius = (b) => {
    const age = b.max - b.life, u = age / b.max;
    const grow = b.r0 + (b.r1 - b.r0) * ease.outBack(clamp(age / 0.22), 2), breathe = 1 + 0.06 * Math.sin(age * 14 + b.r1);
    return grow * breathe * (u < 0.62 ? 1 : 1 - ease.inBack(clamp((u - 0.62) / 0.38), 1.4));
  };
  const drawBall = (p, b, layer) => {
    const age = b.max - b.life, r = radius(b), a = Math.min(1, age * 20), lit = age < 0.12;
    if (r < 0.6) return;

    const hy = (b.y - CY + 6) / 14, lo = hy > 0.4, hi = hy < -0.3;
    if (layer === "shade") p.disc(b.x + r * 0.16, b.y + r * 0.2, r, lit ? C[3] : lo ? C[1] : C[2], 0.8 * a);
    else if (layer === "body") p.disc(b.x - r * 0.06, b.y - r * 0.08, r * 0.86, lit ? C[4] : lo ? C[2] : C[3], 0.88 * a);
    else if (!lo || lit) {
      p.disc(b.x - r * 0.28, b.y - r * 0.34, r * 0.42, lit || hi ? WHITE : C[4], 0.85 * a);
      if (age < 0.25) p.disc(b.x - r * 0.3, b.y - r * 0.38, r * 0.2, WHITE, 0.9 * a * (1 - age / 0.25));
    }
  };
  return {
    update(dt) {
      t += dt;
      for (let i = balls.length - 1; i >= 0; i--) {
        const b = balls[i];
        if (b.delay > 0) {
          b.delay -= dt;
          continue;
        }
        if ((b.life -= dt) <= 0) {

          if (b.r1 > 4) ps.spawn(P.STAR, b.x, b.y, 0, -8, 0.22, WHITE, 0.6);
          balls.splice(i, 1);
          continue;
        }

        b.vx -= b.vx * 7 * dt;
        b.vy -= b.vy * 7 * dt + 30 * dt;
        b.x += b.vx * dt;
        b.y = Math.min(b.y + b.vy * dt, -radius(b) * 0.7);
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      const s = 1 - smooth(0.1, 0.9, t);
      if (s > 0) p.glow(0, -1, 26, C[4], 0.25 * s);
      ps.draw(p, "back");
    },
    draw(p) {

      const live = balls.filter((b) => b.delay <= 0);
      for (const layer of ["shade", "body", "cap"]) for (const b of live) drawBall(p, b, layer);

      if (t < 0.07) {
        const k = t / 0.07;
        p.circle(0, CY, 9 + 3 * k, C[4]);
        p.circle(0, CY, 7 + 3 * k, WHITE);
        flare(p, 0, CY, 20 * (1 - k * 0.5), 1 - k, C);
      }
      const rk = (t - 0.03) / 0.2;
      if (rk > 0 && rk < 1) p.ring(0, CY, 8 + 18 * ease.outCubic(rk), Math.max(1, 2.5 * (1 - rk)), rk < 0.3 ? WHITE : C[4], 1.1 - rk);
      for (const l of lines) {
        const u = (t - l.d) / 0.2;
        if (u <= 0 || u >= 1) continue;
        const head = 8 + (l.r1 - 8) * ease.outExpo(clamp(u / 0.6)), tail = 8 + (l.r1 - 8) * ease.inCubic(u), ca = Math.cos(l.a), sa = Math.sin(l.a);
        p.line(ca * tail, CY + sa * tail, ca * head, CY + sa * head, (v) => (v > 0.6 ? WHITE : C[4]));
        p.glowLine(ca * tail, CY + sa * tail, ca * head, CY + sa * head, 3, C[4], 0.25);
      }
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i70hw6o=__r(1);const Particles=__i70hw6o.Particles;const Lights=__i70hw6o.Lights;const P=__i70hw6o.P;const Rng=__i70hw6o.Rng;const fit=__i70hw6o.fit;const flare=__i70hw6o.flare;const sparkle=__i70hw6o.sparkle;const clamp=__i70hw6o.clamp;const smooth=__i70hw6o.smooth;const ease=__i70hw6o.ease;const TAU=__i70hw6o.TAU;const WHITE=__i70hw6o.WHITE;const hex=__i70hw6o.hex;
const meta = {
  name: "Coin drop",
  desc: "An enemy goes up in a soft poof and gold coins spin out of it, bounce with a glint on each hit, settle on the floor, twinkle, and wink out one by one.",
  tags: ["spawn", "death", "loot", "coins", "gold", "drop", "pickup", "ground", "one-shot"],
  size: [160, 88],
  origin: [80, 78],
  duration: 3,
  loop: false,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#2a1606", "#5c3208", "#9a5a0c", "#d48c14", "#f5b82a", "#ffe066", "#fff6c4", "#ffffff"],
    smoke: ["#3a3450", "#6c6688", "#a8a2c0", "#dcd8ea"],
    coins: 7,
    seed: 23,
  },
};
const CY = -16;

const COIN = ["..oooo..", ".ohhlmo.", "ohlmmmdo", "ohmdhmdo", "olmdhmdo", "olmmmmdo", ".oddddo.", "..oooo.."];

const FLAT = [".lhhhl.", "olmmmdo", ".odddo."];
function create(o) {
  const C = fit(o.palette, 8), SM = fit(o.smoke, 4), R = new Rng(o.seed), floor = () => 0;
  const PAL = { o: C[1], h: C[6], l: C[5], m: C[4], d: C[3] };
  const ps = new Particles({ rng: R, ground: floor, sparks: [WHITE, C[6], C[5], C[3]] }), lights = new Lights();
  const coins = [], balls = [];

  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU + R.range(-0.25, 0.25), sp = R.range(60, 100);
    const life = R.range(0.55, 0.85);
    balls.push({ x: Math.cos(a) * 2, y: CY + Math.sin(a) * 2, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.7 - 10, r: R.range(4, 6), life, max: life });
  }

  const n = o.coins;
  for (let i = 0; i < n; i++) {
    const u = n > 1 ? i / (n - 1) - 0.5 : 0, a = -Math.PI / 2 + u * 1.6 + R.range(-0.1, 0.1), sp = R.range(230, 300);
    coins.push({ x: R.range(-3, 3), y: CY, vx: Math.cos(a) * sp * 0.4, vy: Math.sin(a) * sp, ph: R.range(0, TAU), w: R.range(9, 15) * R.sign(), rest: false, hits: 0, out: 2.15 + i * 0.07 + R.range(0, 0.1), glint: R.range(1.2, 1.9), born: R.range(0.04, 0.12) });
  }
  for (let i = 0; i < 8; i++) {
    const a = R.range(0, TAU), sp = R.range(50, 120);
    ps.spawn(P.STAR, 0, CY, Math.cos(a) * sp, Math.sin(a) * sp - 20, R.range(0.3, 0.6), R.pick([WHITE, C[6], C[5]]), R.range(0.8, 1.8));
  }
  lights.add(0, CY, 44, C[4], 0.7, 0.4);
  lights.add(0, CY, 20, WHITE, 0.7, 0.1);
  let t = 0;

  function drawCoin(p, x, y, ph) {
    const c = Math.cos(ph), sx = Math.abs(c);
    if (sx < 0.28) {
      for (let dy = -3; dy <= 3; dy++) p.px(x, y + dy, Math.abs(dy) === 3 ? C[1] : dy < 0 ? C[6] : C[5]);
      if (sx > 0.12) for (let dy = -2; dy <= 2; dy++) p.px(x + (c > 0 ? 1 : -1), y + dy, C[3]);
      return;
    }
    const half = 4 * sx;
    for (let px = Math.floor(x - half); px < Math.ceil(x + half); px++) {
      let col = Math.floor((px + 0.5 - x) / sx + 4);
      if (col < 0 || col > 7) continue;
      if (c < 0) col = 7 - col;
      for (let row = 0; row < 8; row++) {
        const ch = COIN[row][col];
        if (ch !== ".") p.px(px, Math.round(y - 4 + row), PAL[ch]);
      }
    }
  }
  return {
    update(dt) {
      t += dt;
      for (let i = balls.length - 1; i >= 0; i--) {
        const b = balls[i];
        if ((b.life -= dt) <= 0) {
          balls.splice(i, 1);
          continue;
        }
        b.vx -= b.vx * 7 * dt;
        b.vy -= b.vy * 7 * dt + 26 * dt;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
      }
      for (const c of coins) {

        if (!c.gone && t >= c.out) {
          c.gone = true;
          for (let j = 0; j < 5; j++) {
            const a = R.range(-Math.PI, 0), sp = R.range(25, 60);
            ps.spawn(P.STAR, c.x, -3, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.3, 0.55), R.pick([WHITE, C[6], C[5]]), R.range(0.7, 1.4));
          }
          lights.add(c.x, -3, 14, C[5], 0.6, 0.2);
        }
        if (t < c.born || t > c.out || c.rest) continue;
        c.vy += 820 * dt;
        c.vx -= c.vx * 0.4 * dt;
        c.x += c.vx * dt;
        c.y += c.vy * dt;
        c.ph += c.w * dt;
        if (c.y >= -1.5 && c.vy > 0) {
          c.y = -1.5;
          c.hits++;

          ps.spawn(P.STAR, c.x, -3, 0, -8, 0.25, WHITE, c.hits === 1 ? 2.2 : 1.4);
          for (let j = 0; j < 2; j++) ps.spawn(P.DUST, c.x + R.range(-1, 1), -0.5, R.sign() * R.range(8, 24), -R.range(2, 8), R.range(0.25, 0.45), SM[1], R.range(1, 1.8));
          lights.add(c.x, -3, 12, C[5], 0.5, 0.15);
          if (c.vy > 110) (c.vy *= -0.45), (c.vx *= 0.7), (c.w = c.w * 0.8 + R.range(-2, 2));
          else (c.rest = true), (c.vx = c.vy = 0), (c.restAt = t);
        }
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      for (const c of coins)
        if (c.rest && t < c.out) p.glow(c.x, -1, 7, C[4], 0.18);
      ps.draw(p, "back");
    },
    draw(p) {

      for (const layer of [0, 1, 2])
        for (const b of balls) {
          const age = b.max - b.life, k = b.life / b.max, r = b.r * (0.6 + 0.6 * ease.outCubic(clamp(age / 0.2))) * (k < 0.35 ? k / 0.35 : 1);
          if (r < 0.6) continue;
          if (layer === 0) p.disc(b.x + r * 0.15, b.y + r * 0.2, r, SM[1], 0.8);
          else if (layer === 1) p.disc(b.x - r * 0.06, b.y - r * 0.08, r * 0.86, b.y > CY + 2 ? SM[1] : SM[2], 0.85);
          else if (b.y < CY + 2) p.disc(b.x - r * 0.28, b.y - r * 0.34, r * 0.4, SM[3], 0.85);
        }
      if (t < 0.07) {
        const k = t / 0.07;
        p.circle(0, CY, 8 + 2 * k, C[6]);
        p.circle(0, CY, 6 + 2 * k, WHITE);
        flare(p, 0, CY, 16 * (1 - k * 0.5), 1 - k, C);
      }
      for (const c of coins) {
        if (t < c.born || t > c.out + 0.12) continue;
        if (t > c.out) {

          const k = (t - c.out) / 0.12;
          sparkle(p, c.x, -2, Math.round(5 * (1 - k)), WHITE, C[5], 0.5);
          p.ring(c.x, -3, 2 + 5 * ease.outCubic(k), 1, C[6], 1.1 - k);
          continue;
        }
        if (c.rest) {

          p.sprite(FLAT, PAL, Math.round(c.x) - 3, -3);
          p.glow(c.x, -2, 6, C[5], 0.25);
          const g = ((t - c.restAt + c.glint) % 0.95) / 0.95;
          if (g < 0.2) sparkle(p, c.x - 1, -3, Math.round(3 * Math.sin((g / 0.2) * Math.PI)), WHITE, C[5], 0.4);
        } else {
          drawCoin(p, c.x, c.y, c.ph);
          p.glow(c.x, c.y, 8, C[4], 0.3);

          if (Math.abs(Math.cos(c.ph)) > 0.96) p.px(c.x - 1, c.y - 2, WHITE);
        }
      }
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __ib6zw74=__r(1);const fit=__ib6zw74.fit;const cycle=__ib6zw74.cycle;const fly=__ib6zw74.fly;const clamp=__ib6zw74.clamp;const TAU=__ib6zw74.TAU;const WHITE=__ib6zw74.WHITE;
const __igl4h1j=__r(34);const blade=__igl4h1j.blade;
const meta = {
  name: "Ice lance",
  desc: "A faceted ice spear flying right: a light pulse runs through its core, rings of cold air shear off the tip, frost peels off into a wake and crystals shed behind it.",
  tags: ["ice", "lance", "spear", "projectile", "directional", "magic", "loop"],
  size: [176, 64],
  origin: [146, 32],
  duration: 0.8,
  loop: true,
  fps: 30,
  bg: "dark",
  options: { palette: ["#151a3d", "#212f6b", "#2c58aa", "#3a8bd8", "#62c8f4", "#a6ecff", "#dcfbff", "#ffffff"], length: 40, seed: 13 },
};



function spear(p, C, L, pulse, glint) {
  const T = 16, H = 3.5;
  const half = (x) => (x > -T ? H * (-x / T) + 0.3 : x < -L + 3 ? H * (0.7 + 0.3 * ((x + L) / 3)) : H);
  p.shade(-L - 1, -H - 2, 1, H + 2, (x, y, o) => {
    if (x > 0 || x < -L) return;
    const h = half(x);
    if (Math.abs(y) > h + 0.5) {
      if (Math.abs(y) < h + 1.5) o.c = C[1];
      return;
    }
    const v = y / Math.max(0.5, h);
    if (x > -1.5) return (o.c = WHITE);

    if (v > -0.3 && v < 0.35 && Math.abs(x - pulse) < 2.5) return (o.c = WHITE);
    if (v < -0.3 && Math.abs(x - glint) < 1) return (o.c = WHITE);
    o.c = v < -0.72 ? WHITE : v < -0.36 ? C[6] : v < -0.18 ? C[7] : v < 0.38 ? C[4] : v < 0.78 ? C[2] : C[1];
  });
}
function draw(p, t, o) {
  const C = fit(o.palette, 8), D = meta.duration, S = o.seed, L = o.length, ph = t / D;

  p.each(-L - 100, -12, -L + 4, 12, (x, y, sx, sy) => {
    const u = (-L + 4 - x) / 104, w = 4.5 * (1 - u) ** 0.7 + 0.5 + 1.5 * Math.sin(u * 9 - ph * TAU * 2) * u, v = Math.abs(y) / w;
    if (v >= 1) return;
    const a = (1 - v * v) * (1 - u) ** 1.4;
    if (a < 0.04) return;
    p.blendPx(sx, sy, v < 0.25 && u < 0.4 ? C[6] : v < 0.6 ? C[5] : C[4], a * 0.7);
    if (a > 0.3) p.add(sx, sy, C[5], 0.12 * a);
  });
  p.glowLine(-L - 60, 0, 0, 0, 14, C[4], 0.22);

  cycle(t, D, 14, S, (g) => g.range(0.35, 0.55), (age, life, r) => {
    const x0 = r.range(-L + 2, -8), [x, y] = fly(x0, r.range(-2.5, 2.5), -r.range(150, 230), r.sign() * r.range(8, 30), age, 0, 2.2);
    const k = age / life, rad = 1.2 + 5.5 * k, a = 0.5 * (1 - k) ** 1.3;
    p.disc(x, y, rad, k < 0.3 ? C[6] : C[5], (d) => a * (1 - d * d));
    p.glow(x, y, rad * 1.6, C[4], 0.1 * (1 - k));
  });

  cycle(t, D, 9, S + 1, (g) => g.range(0.4, 0.6), (age, life, r) => {
    const [x, y] = fly(r.range(-L, -6), r.range(-3, 3), -r.range(170, 260), r.range(-35, 35), age, 60, 1.2);
    const k = age / life, a = r.range(0, TAU) + age * r.range(10, 18) * r.sign(), l = r.range(1.2, 2.2), ca = Math.cos(a), sa = Math.sin(a);
    if (k > 0.85 && (age * 30) % 2 < 1) return;
    p.line(x - ca * l, y - sa * l, x + ca * l, y + sa * l, C[5]);
    p.px(x + ca * l, y + sa * l, WHITE);
    if (Math.cos(a * 2) > 0.9) {
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) p.px(x + dx, y + dy, C[6]);
      p.glow(x, y, 6, C[5], 0.45);
    }
  });

  cycle(t, D, 12, S + 2, (g) => g.range(0.16, 0.26), (age, life, r) => {
    const y = r.sign() * r.range(4, 13), x = r.range(-20, 0) - age * r.range(280, 380), l = r.range(6, 16), k = age / life;
    p.line(x, y, x + l, y, (u) => (u > 0.7 ? C[6] : C[4]), (u) => u * (1 - k) * 1.4);
  });

  for (let i = 0; i < 3; i++) {
    const q = (ph * 3 + i / 3) % 1, x = -4 - q * (L + 20), ry = 4.5 + q * 8, rx = 1.2 + q * 2.6;
    if (q > 0.8) continue;
    for (let k = 0; k < 40; k++) {
      const an = (k / 40) * TAU, px = x + Math.cos(an) * rx, py = Math.sin(an) * ry;
      if (Math.abs(py) < 4.6 && px > -L - 2) continue;
      p.px(px, py, Math.cos(an) > 0 ? (q < 0.35 ? WHITE : C[6]) : q < 0.4 ? C[5] : C[4]);
    }
    p.glowRing(x, 0, ry * 0.75, 3, C[5], 0.14 * (1 - q));
  }

  for (const [dy, l, w] of [[-1, 10, 4], [1, 9, 4], [-0.2, 6, 3]]) blade(p, -L + 3, dy * 1.5, -L + 3 - l, dy * (2 + l * 0.5), w, C);

  const pulse = -L + ((ph * 2) % 1) * (L + 6), glint = -((ph * 2 + 0.5) % 1) * L * 1.2;
  spear(p, C, L, pulse, glint);
  p.glowLine(-L, 0, 0, 0, 10, C[4], 0.1);
  p.glow(pulse, 0, 8, C[6], 0.3);
  p.glow(0, 0, 8, WHITE, 0.4);
  p.glow(-L * 0.4, 0, 30, C[3], 0.16);
}
},
function(__e){Object.defineProperty(__e,"inPoly",{enumerable:true,configurable:true,get:()=>inPoly});Object.defineProperty(__e,"centroid",{enumerable:true,configurable:true,get:()=>centroid});Object.defineProperty(__e,"splitPoly",{enumerable:true,configurable:true,get:()=>splitPoly});Object.defineProperty(__e,"iceOf",{enumerable:true,configurable:true,get:()=>iceOf});Object.defineProperty(__e,"glassPoly",{enumerable:true,configurable:true,get:()=>glassPoly});Object.defineProperty(__e,"Panes",{enumerable:true,configurable:true,get:()=>Panes});Object.defineProperty(__e,"blade",{enumerable:true,configurable:true,get:()=>blade});Object.defineProperty(__e,"flakeDesign",{enumerable:true,configurable:true,get:()=>flakeDesign});Object.defineProperty(__e,"snowflake",{enumerable:true,configurable:true,get:()=>snowflake});Object.defineProperty(__e,"endBy",{enumerable:true,configurable:true,get:()=>endBy});Object.defineProperty(__e,"fractures",{enumerable:true,configurable:true,get:()=>fractures});Object.defineProperty(__e,"drawFractures",{enumerable:true,configurable:true,get:()=>drawFractures});
const __i7lrzeb=__r(1);const GRAVITY=__i7lrzeb.GRAVITY;const clamp=__i7lrzeb.clamp;const luma=__i7lrzeb.luma;const TAU=__i7lrzeb.TAU;const WHITE=__i7lrzeb.WHITE;
function inPoly(pts, x, y) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i], [xj, yj] = pts[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function centroid(pts) {
  let a = 0, cx = 0, cy = 0;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [x0, y0] = pts[j], [x1, y1] = pts[i], k = x0 * y1 - x1 * y0;
    a += k;
    cx += (x0 + x1) * k;
    cy += (y0 + y1) * k;
  }
  if (Math.abs(a) < 1e-6) {
    const n = pts.length;
    return { x: pts.reduce((s, q) => s + q[0], 0) / n, y: pts.reduce((s, q) => s + q[1], 0) / n, area: 0 };
  }
  return { x: cx / (3 * a), y: cy / (3 * a), area: Math.abs(a) / 2 };
}
function splitPoly(pts, x, y, a) {
  const nx = -Math.sin(a), ny = Math.cos(a), side = (q) => (q[0] - x) * nx + (q[1] - y) * ny, L = [], Rt = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[(i + 1) % pts.length], sp = side(p), sq = side(q);
    (sp >= 0 ? L : Rt).push(p);
    if (sp >= 0 !== sq >= 0) {
      const u = sp / (sp - sq), m = [p[0] + (q[0] - p[0]) * u, p[1] + (q[1] - p[1]) * u];
      L.push(m);
      Rt.push(m);
    }
  }
  return [L, Rt].filter((s) => s.length >= 3);
}
function iceOf(c, C) {
  const n = C.length, l = luma(c);
  return C[clamp(Math.round(((l < 0.12 ? 2 : 2 + l * 5.2) * (n - 1)) / 7), 1, n - 1)];
}
function glassPoly(p, pts, c, a) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of pts) (x0 = Math.min(x0, x)), (x1 = Math.max(x1, x)), (y0 = Math.min(y0, y)), (y1 = Math.max(y1, y));
  for (let y = Math.floor(y0); y <= Math.ceil(y1); y++)
    for (let x = Math.floor(x0); x <= Math.ceil(x1); x++) if (inPoly(pts, x + 0.5, y + 0.5)) p.blend(x, y, c, a);
}
class Panes {
  constructor(opts = {}) {
    this.list = [];
    this.ground = opts.ground ?? (() => Infinity);
    this.onLand = opts.onLand ?? null;
    this.onCrumble = opts.onCrumble ?? null;
    this.onSkid = opts.onSkid ?? null;
  }
  add(q) {
    const life = q.life ?? 1;
    this.list.push({ vx: 0, vy: 0, a: 0, va: 0, f: 0, vf: 0, lit: 0.6, g: 1, drag: 0.3, bounce: 0.35, rest: false, brittle: false, ...q, life, max: life });
  }
  get count() {
    return this.list.length;
  }
  corners(q) {
    const ca = Math.cos(q.a), sa = Math.sin(q.a), k = Math.cos(q.f);
    return q.pts.map(([x, y]) => {
      const yy = y * k;
      return [q.x + x * ca - yy * sa, q.y + x * sa + yy * ca];
    });
  }
  seat(q) {
    let low = -Infinity;
    for (const c of this.corners(q)) low = Math.max(low, c[1]);
    return low;
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const q = this.list[i];
      if ((q.life -= dt) <= 0) {
        this.list.splice(i, 1);
        continue;
      }
      const floor = this.ground(q.x) - 0.5;
      if (q.rest && q.crumble !== undefined && (q.restT = (q.restT ?? 0) + dt) > q.crumble) {
        this.onCrumble?.(q);
        this.list.splice(i, 1);
        continue;
      }
      if (q.rest) {

        if (Math.abs(q.vx) > 8) this.onSkid?.(q, q.x, floor + 0.5);
        q.x += q.vx * dt;
        q.vx -= q.vx * 7 * dt;
        q.a += q.va * dt;
        q.va -= q.va * 9 * dt;
        q.vf -= q.vf * 9 * dt;
        q.f += q.vf * dt;
        q.y -= this.seat(q) - floor;
        continue;
      }
      q.vy += GRAVITY * q.g * dt;
      q.vx -= q.vx * q.drag * dt;
      q.vy -= q.vy * q.drag * dt;
      q.x += q.vx * dt;
      q.y += q.vy * dt;
      q.a += q.va * dt;
      q.f += q.vf * dt;
      const low = this.seat(q);
      if (q.g <= 0 || low < floor || q.vy <= 0) continue;
      q.y -= low - floor;
      if (q.vy > 70) (q.hits = (q.hits ?? 0) + 1), this.onLand?.(q, q.x, floor + 0.5, q.vy);
      if (q.brittle && q.vy > 70 && q.hits >= q.brittle) {
        this.list.splice(i, 1);
        continue;
      }
      if (q.vy > 70 && q.bounce > 0) {
        q.vy = -q.vy * q.bounce;
        q.vx *= 0.75;
        q.va *= 0.6;
        q.vf *= 0.5;
      } else {
        q.rest = true;
        q.vy = 0;
      }
    }
  }
  draw(p, C) {
    const n = C.length;
    for (const q of this.list) {
      const a = Math.min(1, q.life / 0.35), pts = this.corners(q), k = Math.cos(q.f), face = Math.abs(k);

      const lv = q.lit * (0.35 + 0.65 * face), flash = face > 0.97 && !q.rest;
      if (face > 0.25) {
        if (q.solid && q.tone !== undefined) {

          p.poly(pts, flash ? C[n - 1] : C[clamp(Math.round(1 + q.tone * 5 * (0.6 + 0.4 * face)), 1, n - 2)], a);
        } else if (q.solid) {

          const rr = q.ridge ?? -Math.PI / 2, cr = Math.cos(rr), sr = Math.sin(rr), ca = Math.cos(q.a), sa = Math.sin(q.a);
          const rx = cr * ca - sr * k * sa, ry = cr * sa + sr * k * ca;
          let nx = -ry, ny = rx;
          if (nx * -0.55 + ny * -0.84 < 0) (nx = -nx), (ny = -ny);
          const lit = flash ? C[n - 1] : C[clamp(Math.round(3 + lv * 3), 3, n - 2)], deep = C[clamp(Math.round(1 + lv * 2), 1, 3)];
          p.poly(pts, (x, y) => {
            const d = (x - q.x) * nx + (y - q.y) * ny;
            return d > 0.6 ? lit : d > -0.6 ? C[n - 2] : deep;
          }, a);
        } else glassPoly(p, pts, flash ? C[n - 1] : C[clamp(Math.round(3 + lv * 3), 3, n - 2)], (0.3 + 0.35 * lv + (flash ? 0.3 : 0)) * a);
      }
      let cx = 0, cy = 0, top = 0;
      for (const [x, y] of pts) (cx += x), (cy += y);
      cx /= pts.length;
      cy /= pts.length;

      for (let i = 0; i < pts.length; i++) {
        const [x0, y0] = pts[i], [x1, y1] = pts[(i + 1) % pts.length];
        let nx = y1 - y0, ny = x0 - x1;
        if (nx * ((x0 + x1) / 2 - cx) + ny * ((y0 + y1) / 2 - cy) < 0) (nx = -nx), (ny = -ny);
        const l = Math.hypot(nx, ny) || 1, lit = (-nx * 0.55 - ny * 0.84) / l;
        p.line(x0, y0, x1, y1, face < 0.25 || lit > 0.35 ? C[n - 1] : lit > -0.25 ? C[n - 2] : q.solid ? C[1] : C[Math.max(2, n - 4)], a);
        if (pts[i][1] < pts[top][1]) top = i;
      }
      if (face > 0.7) p.dot(pts[top][0], pts[top][1], WHITE, a);
      p.glow(cx, cy, 5, C[n - 3], (flash ? 0.5 : 0.14) * a);
    }
  }
}
function blade(p, bx, by, tx, ty, w, C, opts = {}) {
  const dx = tx - bx, dy = ty - by, L = Math.hypot(dx, dy);
  if (L < 1.5 || w < 0.5) return;
  const ux = dx / L, uy = dy / L, nx = -uy, ny = ux, a = opts.a ?? 1, dim = opts.dim ?? 0, jag = opts.jag ?? -1, glint = opts.glint ?? -1;
  const K = (i) => C[clamp(i - dim, 0, C.length - 1)], hw = w / 2;

  const left = (u) => hw * (1 - u) + 0.35, right = (u) => hw * (1 - u) * (jag >= 0 && u > jag ? 0.55 : 1) + 0.35, ridge = (u) => -w * 0.12 * (1 - u);
  const pad = hw + 2;
  p.shade(Math.min(bx, tx) - pad, Math.min(by, ty) - pad, Math.max(bx, tx) + pad, Math.max(by, ty), (x, y, o) => {
    const rx = x - bx, ry = y - by, u = (rx * ux + ry * uy) / L, s = rx * nx + ry * ny;
    if (u < 0) return;
    const l = left(Math.min(u, 1)), r = right(Math.min(u, 1));
    if (u > 1 || s < -l || s > r) {

      const over = u > 1 ? (u - 1) * L : 0, out = Math.max(over, s < -l ? -l - s : s - r);
      if (out < 1 && u < 1 + 1 / L) {
        o.c = K(0);
        o.a = a;
      }
      return;
    }
    o.a = a;
    if (opts.white) return (o.c = WHITE);
    const rd = ridge(u);
    let c;
    if (u > 0.88) c = WHITE;
    else if (Math.abs(s - rd) < 0.55) c = K(6);
    else if (s < rd) c = s + l < 1 ? K(6) : (s + l) / Math.max(1, rd + l) > 0.55 ? K(5) : K(4);
    else c = r - s < 1.1 ? K(1) : (s - rd) / Math.max(1, r - rd) > 0.5 ? K(2) : K(3);

    if (jag >= 0 && Math.abs(u - jag) * L < 0.8 && s > rd) c = K(6);
    else if (s < rd && c !== K(6) && ((Math.floor(x) * 73856093) ^ (Math.floor(y) * 19349663)) % 997 < 30) c = K(7);
    if (glint >= 0 && s <= rd + 0.6) {
      const g = Math.abs(u - glint) * L;
      if (g < 0.8) c = WHITE;
      else if (g < 1.8) c = K(6);
    }
    o.c = c;
  });
}
function flakeDesign(R) {
  const n = R.int(1, 3), branches = [];
  for (let i = 0; i < n; i++) branches.push([0.38 + (0.4 * (i + R.range(0.2, 0.8))) / n, R.range(0.24, 0.36) * (1 - i * 0.15)]);
  return { branches, plate: R.chance(0.45), fork: R.chance(0.45) };
}
function snowflake(p, x, y, r, rot, d, C, opts = {}) {
  const n = C.length, a = opts.a ?? 1, hot = opts.hot ?? 0;
  rot = Math.round(rot / (Math.PI / 18)) * (Math.PI / 18); // turn in 10 degree ticks, like sprite frames
  if (r < 1.2) {
    p.dot(x, y, WHITE, a);
    return;
  }
  if (r < 2.6) {

    const pose = Math.floor(((rot % (Math.PI / 3)) + Math.PI / 3) / (Math.PI / 6)) % 2;
    const pts = pose ? [[1, 0], [-1, 0], [0, 1], [0, -1]] : [[1, 1], [-1, -1], [1, -1], [-1, 1]];
    for (const [dx, dy] of pts) p.dot(x + dx, y + dy, hot > 0.5 ? WHITE : C[n - 3], a);
    p.dot(x, y, WHITE, a);
    p.glow(x, y, 4, C[n - 3], 0.2 * a);
    return;
  }

  const arm = hot > 0.5 ? WHITE : C[n - 2], br = hot > 0.5 ? C[n - 2] : C[n - 3], big = r >= 7;
  const branches = r < 4 ? [] : big ? d.branches.slice(0, 2) : [[0.58, 0.36]];
  for (let k = 0; k < 6; k++) {
    const g = rot + (k * TAU) / 6, ca = Math.cos(g), sa = Math.sin(g);
    p.line(x, y, x + ca * r, y + sa * r, arm, a);
    for (const [u, l] of branches) {
      const bx = x + ca * r * u, by = y + sa * r * u, bl = Math.max(1, r * l);
      for (const s of [-1, 1]) p.line(bx, by, bx + Math.cos(g + (s * Math.PI) / 3) * bl, by + Math.sin(g + (s * Math.PI) / 3) * bl, br, a);
    }
    if (d.fork && big && !d.plate)
      for (const s of [-1, 1]) p.dot(x + ca * r + Math.cos(g + s * 0.9) * 1.2, y + sa * r + Math.sin(g + s * 0.9) * 1.2, br, a);
    p.dot(x + ca * r, y + sa * r, WHITE, a);
  }
  if (d.plate && big) {
    const q = r * 0.34;
    for (let k = 0; k < 6; k++) {
      const g0 = rot + Math.PI / 6 + (k * TAU) / 6, g1 = g0 + TAU / 6;
      p.line(x + Math.cos(g0) * q, y + Math.sin(g0) * q, x + Math.cos(g1) * q, y + Math.sin(g1) * q, C[n - 3], a);
    }
  }
  p.px(x, y, WHITE);
  p.glow(x, y, 3 + r * 1.2, C[n - 4], (0.14 + 0.35 * hot) * a);
  if (hot > 0.3) p.glow(x, y, 2 + r * 0.5, WHITE, 0.3 * hot * a);
}
function endBy(t, D, ...systems) {
  const left = Math.max(0.001, D - 0.05 - t);
  for (const sys of systems) for (const q of sys.list) if (q.life > left) q.life = left;
}
function fractures(R, inside, x, y, n, opts = {}) {
  const out = [], step = opts.step ?? [1.6, 2.6], len = opts.len ?? 18, fork = opts.fork ?? 0.16, a0 = opts.a0 ?? R.range(0, TAU), spread = opts.spread ?? TAU;
  const walk = (x, y, d, a, len, depth) => {
    const pts = [[x, y, d]];
    for (let s = 0; s < len; s++) {
      a += R.range(-0.55, 0.55);
      const st = R.range(step[0], step[1]), nx = x + Math.cos(a) * st, ny = y + Math.sin(a) * st;
      if (!inside(nx, ny)) break;
      (x = nx), (y = ny), (d += st);
      pts.push([x, y, d]);
      if (depth < 2 && pts.length > 2 && R.chance(fork)) walk(x, y, d, a + R.sign() * R.range(0.6, 1.2), Math.ceil(len * 0.5), depth + 1);
    }
    if (pts.length > 1) out.push(pts);
  };
  for (let i = 0; i < n; i++) walk(x, y, 0, a0 + (i / n) * spread + R.range(-0.3, 0.3) * Math.min(1, spread / TAU), len, 0);
  return out;
}
function drawFractures(p, cracks, reach, C, opts = {}) {
  const n = C.length, ox = opts.ox ?? 0, oy = opts.oy ?? 0, hot = opts.hot ?? true, a = opts.a ?? 1;
  const seg = (pts, i) => {
    const [x0, y0, d0] = pts[i - 1], [x1, y1, d1] = pts[i];
    if (d0 >= reach) return null;
    const u = Math.min(1, (reach - d0) / Math.max(0.01, d1 - d0));
    return [x0 + ox, y0 + oy, x0 + ox + (x1 - x0) * u, y0 + oy + (y1 - y0) * u, reach - d1 < 3];
  };
  for (const pts of cracks)
    for (let i = 1; i < pts.length; i++) {
      const s = seg(pts, i);
      if (!s) break;
      p.line(s[0], s[1] + 1, s[2], s[3] + 1, C[Math.min(2, n - 1)], a);
    }
  for (const pts of cracks)
    for (let i = 1; i < pts.length; i++) {
      const s = seg(pts, i);
      if (!s) break;
      const tip = hot && s[4];
      p.line(s[0], s[1], s[2], s[3], tip ? WHITE : C[n - 2], a);
      if (tip) p.glow(s[2], s[3], 5, C[n - 3], 0.5 * a);
      else if (i % 2) p.glow(s[2], s[3], 3, C[n - 3], 0.18 * a);
    }
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ijz8qp5=__r(1);const Particles=__ijz8qp5.Particles;const Bits=__ijz8qp5.Bits;const Lights=__ijz8qp5.Lights;const P=__ijz8qp5.P;const B=__ijz8qp5.B;const Rng=__ijz8qp5.Rng;const fit=__ijz8qp5.fit;const sparkle=__ijz8qp5.sparkle;const flare=__ijz8qp5.flare;const clamp=__ijz8qp5.clamp;const smooth=__ijz8qp5.smooth;const seg=__ijz8qp5.seg;const ease=__ijz8qp5.ease;const rand=__ijz8qp5.rand;const TAU=__ijz8qp5.TAU;const WHITE=__ijz8qp5.WHITE;
const __ijy0oe2=__r(34);const Panes=__ijy0oe2.Panes;const endBy=__ijy0oe2.endBy;const inPoly=__ijy0oe2.inPoly;const centroid=__ijy0oe2.centroid;const splitPoly=__ijy0oe2.splitPoly;const fractures=__ijy0oe2.fractures;const drawFractures=__ijy0oe2.drawFractures;
const meta = {
  name: "Ice shatter",
  desc: "A block of ice takes a hit from the left: it jolts, cracks race over its faces, it flashes white and bursts into chunks that tumble, bounce and skid off in a roll of ice dust.",
  tags: ["ice", "shatter", "break", "destroy", "impact", "directional", "one-shot"],
  size: [224, 112],
  origin: [68, 90],
  duration: 2.8,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#151a3d", "#212f6b", "#2c58aa", "#3a8bd8", "#62c8f4", "#a6ecff", "#dcfbff", "#ffffff"], seed: 6 },
};
const HIT = 0.26, CRACK2 = 0.4, SHIVER = 0.54, FLASH = 0.62, BURST = 0.68;

const FRONT = [[-16, 0], [-16, -28], [12, -28], [12, 0]];
const TOP = [[-16, -28], [-8, -34], [20, -34], [12, -28]];
const SIDE = [[12, 0], [12, -28], [20, -34], [20, -6]];
const SIL = [[-16, 0], [-16, -28], [-8, -34], [20, -34], [20, -6], [12, 0]];
const HIT_AT = [-16, -15];
const PLANE = [[-16, -21], [-5, -28], [3, -13], [-16, -9]]; // a fracture plane inside, lighter
const SHADE = [[5, -28], [12, -28], [12, -10]]; // the far corner in shadow
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[7], C[6], C[5], C[4]], haze: C[5] });
  const bits = new Bits({ ground: floor }), lights = new Lights(), scuffs = [];
  const splinter = (x, y, vx, n) => {
    for (let i = 0; i < n; i++) bits.add({ kind: B.SHARD, x: x + R.range(-2, 2), y: y - 1, vx: vx * 0.6 + R.range(-35, 45), vy: -R.range(30, 100), g: 0.8, drag: 0.6, bounce: 0.35, life: R.range(0.4, 0.8), a: R.range(0, TAU), va: R.range(-18, 18), s: R.range(1.2, 2.4), c: C[R.int(4, 7)] });
  };
  const panes = new Panes({
    ground: floor,
    onLand: (q, x, y, v) => {

      if (v < 100) return;
      ps.spawn(P.VAPOUR, x, y - 1, q.vx * 0.3 + R.range(-15, 15), -R.range(2, 10), R.range(0.4, 0.7), C[6], R.range(1.6, 2.8));
      splinter(x, y, q.vx, 2);
      if (R.chance(0.3)) ps.spawn(P.STAR, x, y - 3, 0, -5, R.range(0.2, 0.4), WHITE, R.range(0.8, 1.6));
    },
    onSkid: (q, x) => {

      if (R.chance(0.5)) scuffs.push({ x: Math.round(x + R.range(-1, 1)), t: 0 });
    },
    onCrumble: (q) => {
      splinter(q.x, 0, q.vx, 3);
      ps.spawn(P.VAPOUR, q.x, -1, R.range(-10, 14), -R.range(2, 6), R.range(0.4, 0.7), C[6], R.range(1.2, 2));
    },
  });

  const veins = [], bubbles = [];
  for (let k = 0; k < 3; k++) {
    let x = R.range(-12, 8), y = R.range(-24, -6), a = R.range(0, TAU);
    for (let i = 0; i < 9; i++) {
      a += R.range(-0.6, 0.6);
      x += Math.cos(a) * 1.5;
      y += Math.sin(a) * 1.2;
      if (x < -14 || x > 10 || y < -26 || y > -2) break;
      veins.push([Math.floor(x), Math.floor(y)]);
    }
  }
  for (let k = 0; k < 5; k++) bubbles.push([R.int(-12, 8), R.int(-23, -4), R.chance(0.4) ? 1 : 0]);
  const inside = (x, y) => inPoly(SIL, x, y);
  const cracks = fractures(R, inside, HIT_AT[0] + 1, HIT_AT[1], 4, { len: 8, a0: -0.9, spread: 1.9 });
  const cracks2 = fractures(R, inside, HIT_AT[0] + 1, HIT_AT[1], 6, { len: 18, a0: -1.3, spread: 2.7, fork: 0.16 });
  let t = 0, struck = false, burst = false, wave2 = false, white = false;
  const jolt = () => (t >= HIT && t < HIT + 0.05 ? 2 : t >= HIT + 0.05 && t < HIT + 0.12 ? 1 : t >= SHIVER && t < FLASH ? (Math.floor(t * 40) % 2 ? 1 : 0) : 0);

  const drawBlock = (p) => {
    if (t >= BURST) return;
    const jx = jolt(), wh = t >= FLASH, sweep = -40 + 70 * seg(t, 0.04, 0.3);
    const sh = (pts) => pts.map(([x, y]) => [x + jx, y]);

    p.poly(sh([[-17, 1], [-17, -28.5], [-8.3, -35.2], [21, -35.2], [21, -5.6], [12.5, 1]]), C[0]);
    if (wh) {
      p.poly(sh(SIL), WHITE);
      return;
    }


    p.poly(sh(FRONT), (x, y) => {
      const lx = x - jx, d = lx + y * 0.8;
      if (Math.abs(d - sweep) < 1.3 && y < -6) return WHITE;
      if (y < -9 && (Math.abs(d + 21) < 1.1 || Math.abs(d + 16.5) < 0.6)) return C[6];
      if (((Math.abs(lx + 7.5) < 0.5 && y < -6) || (Math.abs(y + 5.5) < 0.5 && lx > -8)) && (Math.floor(lx) + Math.floor(y)) % 2 === 0) return C[5];
      if (inPoly(PLANE, lx, y)) return y < -25.5 ? C[6] : C[5];
      if (inPoly(SHADE, lx, y)) return C[3];
      return y < -25.5 ? C[5] : y < -8 ? C[4] : y < -2.5 ? C[3] : C[2];
    });
    p.poly(sh(TOP), (x, y) => (y > -29.5 ? C[7] : y < -32.5 ? C[5] : rand(Math.floor(x), Math.floor(y), 3) < 0.08 ? C[7] : C[6]));
    p.poly(sh(SIDE), (x, y) => {
      const lx = x - jx;
      return lx < 13.5 ? C[3] : Math.abs(lx - 16.5) < 0.6 && y < -8 ? C[3] : y > (lx - 12) * -0.75 - 3 ? C[1] : C[2];
    });
    for (const [x, y] of veins) p.px(x + jx, y, C[5]);
    for (const [x, y, big] of bubbles) {
      p.px(x + jx, y, C[6]);
      if (big) p.px(x + jx + 1, y, C[5]), p.px(x + jx, y + 1, C[5]);
    }
    const E = (a, b, c) => p.line(a[0] + jx, a[1], b[0] + jx, b[1], c);
    E([-16, -28], [12, -28], WHITE);
    E([-16, -28], [-8, -34], C[6]);
    E([-8, -34], [20, -34], C[5]);
    E([12, -28], [20, -34], C[7]);
    E([-16, -1], [-16, -28], C[5]);
    E([12, -1], [12, -28], C[6]);
    E([20, -6], [20, -34], C[3]);
    E([13, -1], [20, -6], C[1]);
    if (t >= HIT) drawFractures(p, cracks, (t - HIT) * 170, C, { ox: jx });
    if (t >= CRACK2) drawFractures(p, cracks2, (t - CRACK2) * 200, C, { ox: jx });
  };

  const drawFloor = (p) => {
    const out = 1 - smooth(BURST + 0.6, BURST + 1.5, t);
    if (out > 0)
      for (let x = -22; x <= 26; x++) {
        const d = Math.abs(x - 2) / 24, h = rand(x, 41), a = out * clamp((1.1 - d) / 0.25);
        if (a <= 0) continue;
        p.dot(x, 0, h < 0.35 ? WHITE : C[6], a);
        if (h < 0.4 && (x < -16 || x > 20)) p.dot(x, -1, C[5], a);
        for (let j = 1; j <= 1 + Math.round(rand(x, 7) * 3 * (1 - d)); j++) p.dot(x, j, j < 2 ? C[5] : C[4], a * (1 - j / 5));
      }
    for (const s of scuffs) {
      const a = 1 - s.t / 0.9;
      if (a > 0) p.dot(s.x, 0, s.t < 0.15 ? WHITE : C[6], a), p.dot(s.x, 1, C[4], a * 0.6);
    }
  };
  const explode = () => {

    const chop = (pts, max, depth) => {
      const c = centroid(pts);
      return c.area < max || depth > 4 ? [pts] : splitPoly(pts, c.x + R.range(-1, 1), c.y + R.range(-1, 1), R.range(0, Math.PI)).flatMap((q) => chop(q, max, depth + 1));
    };
    for (const [face, tone, max] of [[FRONT, 0.6, 46], [TOP, 1, 40], [SIDE, 0.3, 46]])
      for (const part of chop(face, max, 0)) {
        const m = centroid(part), dx = m.x - HIT_AT[0], dy = m.y - HIT_AT[1], d = Math.hypot(dx, dy) || 1, sp = R.range(50, 150) * (0.7 + 0.3 * (1 - d / 40));
        panes.add({
          pts: part.map(([x, y]) => [x - m.x, y - m.y]), x: m.x, y: m.y, vx: (dx / d) * sp * 0.9 + R.range(40, 110), vy: (dy / d) * sp * 0.4 - R.range(60, 200),
          a: 0, va: R.range(-10, 10), f: R.range(-0.9, 0.9), vf: R.range(-7, 7), tone, lit: tone, g: 0.9, drag: 0.5, bounce: 0.38, solid: true, brittle: 3, crumble: R.range(0.25, 0.6), life: R.range(1.5, 1.9),
        });
      }
    for (let i = 0; i < 46; i++) {
      const x = R.range(-15, 19), y = -R.range(1, 33), dx = x - HIT_AT[0], dy = y - HIT_AT[1], d = Math.hypot(dx, dy) || 1, sp = R.range(60, 200);
      if (!inside(x, y)) continue;
      bits.add({ kind: R.chance(0.15) ? B.CHUNK : B.SHARD, x, y, vx: (dx / d) * sp * 0.8 + R.range(20, 90), vy: (dy / d) * sp * 0.4 - R.range(60, 240), g: 0.85, drag: 0.6, bounce: 0.32, life: R.range(0.8, 1.4), a: R.range(0, TAU), va: R.range(-22, 22), s: R.range(1.2, 3.4), c: C[R.int(4, 7)], ramp: [C[1], C[3], C[4], C[6], C[7]] });
    }

    for (let i = 0; i < 9; i++) ps.spawn(P.VAPOUR, R.range(-6, 18), -R.range(1, 6), R.range(10, 130), -R.range(2, 12), R.range(0.6, 1.1), C[6], R.range(2.2, 3.8));
    for (let i = 0; i < 5; i++) ps.spawn(P.DUST, R.range(-6, 16), -R.range(1, 4), R.range(30, 110), -R.range(2, 8), R.range(0.5, 0.9), C[5], R.range(1.6, 2.8));
    for (let i = 0; i < 4; i++) ps.spawn(P.VAPOUR, R.range(-8, 18), -R.range(8, 28), R.range(-10, 50), -R.range(8, 24), R.range(0.6, 1), C[6], R.range(2.6, 4));
    for (let i = 0; i < 16; i++) {
      const a = R.range(-Math.PI * 0.9, -0.1), sp = R.range(40, 140);
      ps.spawn(P.FLAKE, R.range(-8, 16), -R.range(6, 28), Math.cos(a) * sp + 20, Math.sin(a) * sp, R.range(1, 1.6), R.chance(0.6) ? WHITE : C[6], R.range(0.5, 1.6));
    }
    for (let i = 0; i < 7; i++) ps.spawn(P.STAR, R.range(-14, 40), -R.range(4, 40), R.range(-8, 16), -R.range(4, 16), R.range(0.4, 0.8), R.chance(0.5) ? WHITE : C[6], R.range(1, 2.4));
    lights.add(2, -17, 64, WHITE, 0.85, 0.14);
    lights.add(16, -18, 86, C[4], 0.5, 0.55);
  };
  return {
    update(dt) {
      t += dt;

      if (!struck && t >= HIT) {
        struck = true;
        lights.add(HIT_AT[0], HIT_AT[1], 24, WHITE, 0.6, 0.08);
        lights.add(HIT_AT[0] + 6, HIT_AT[1], 40, C[5], 0.4, 0.3);
        for (let i = 0; i < 12; i++) {
          const a = Math.PI + R.range(-0.9, 0.9), sp = R.range(50, 120);
          ps.spawn(P.SPARK, HIT_AT[0] - 1, HIT_AT[1], Math.cos(a) * sp, Math.sin(a) * sp - 40, R.range(0.15, 0.4));
        }
        for (let i = 0; i < 6; i++) {
          const a = Math.PI + R.range(-1, 0.8), sp = R.range(40, 100);
          bits.add({ kind: B.SHARD, x: HIT_AT[0] - 1, y: HIT_AT[1] + R.range(-2, 2), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 60, g: 0.85, drag: 0.6, bounce: 0.3, life: R.range(0.5, 0.9), a: R.range(0, TAU), va: R.range(-20, 20), s: R.range(1.2, 2.4), c: C[R.int(5, 7)] });
        }
      }
      if (!wave2 && t >= CRACK2) {
        wave2 = true;
        lights.add(0, -16, 36, C[6], 0.35, 0.15);
        for (let i = 0; i < 3; i++) bits.add({ kind: B.SHARD, x: R.range(-14, 18), y: -R.range(4, 30), vx: R.range(-30, 30), vy: -R.range(10, 50), g: 0.85, drag: 0.6, bounce: 0.3, life: R.range(0.4, 0.7), a: R.range(0, TAU), va: R.range(-20, 20), s: R.range(1, 2), c: C[R.int(5, 7)] });
      }
      if (!white && t >= FLASH) {
        white = true;
        lights.add(2, -17, 44, WHITE, 0.7, 0.08);
      }
      if (!burst && t >= BURST) {
        burst = true;
        explode();
      }

      if (burst && t < BURST + 1 && R.chance(0.08) && bits.list.length) {
        const b = R.pick(bits.list);
        ps.spawn(P.STAR, b.x, b.y - 1, 0, -3, R.range(0.2, 0.4), R.chance(0.5) ? WHITE : C[6], R.range(0.6, 1.5));
      }
      for (let i = scuffs.length - 1; i >= 0; i--) if ((scuffs[i].t += dt) > 0.9) scuffs.splice(i, 1);
      ps.update(dt);
      bits.update(dt);
      panes.update(dt);
      lights.update(dt);
      endBy(t, meta.duration, ps, bits, panes);
    },
    drawBack(p) {
      drawFloor(p);
      ps.draw(p, "back");
    },
    draw(p) {
      drawBlock(p);

      const h = t - HIT;
      if (h >= 0 && h < 0.2) {
        sparkle(p, HIT_AT[0] - 1, HIT_AT[1], 9 * ease.outBack(Math.min(1, h / 0.04)) * (1 - h / 0.2), C[6], C[4], 0.7);
        if (h < 0.08) flare(p, HIT_AT[0] - 1, HIT_AT[1], 14 * (1 - h / 0.08), 1 - h / 0.08, C);
      }

      const k = 1 - smooth(BURST, BURST + 0.4, t), crk = smooth(HIT, FLASH, t);
      if (k > 0) {
        p.glow(2, -17, 34, C[4], (0.16 + 0.22 * crk) * k);
        p.glow(2, -2, 30, C[4], 0.14 * k);
      }
      if (t >= FLASH && t < BURST + 0.12) flare(p, 2, -17, 26 * (1 - clamp((t - FLASH) / 0.18)), 1 - clamp((t - FLASH) / 0.18), C);
      panes.draw(p, C);
      bits.draw(p);
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ijdxcoq=__r(1);const Particles=__ijdxcoq.Particles;const Lights=__ijdxcoq.Lights;const P=__ijdxcoq.P;const PF=__ijdxcoq.PF;const Rng=__ijdxcoq.Rng;const fit=__ijdxcoq.fit;const sparkle=__ijdxcoq.sparkle;const clamp=__ijdxcoq.clamp;const smooth=__ijdxcoq.smooth;const ease=__ijdxcoq.ease;const rand=__ijdxcoq.rand;const TAU=__ijdxcoq.TAU;const WHITE=__ijdxcoq.WHITE;const READY=__ijdxcoq.READY;
const __i7610er=__r(24);const swing=__i7610er.swing;const onSwing=__i7610er.onSwing;const travel=__i7610er.travel;const smear=__i7610er.smear;const trace=__i7610er.trace;const glowAlong=__i7610er.glowAlong;
const meta = {
  name: "Spin slash",
  desc: "The blade whirls once round the waist on a tilted plane, behind the body and back in front; the closed ring flares white, dissolves into a dotted trace and throws sparks.",
  tags: ["melee", "slash", "spin", "sword", "aoe", "combat", "one-shot"],
  size: [208, 104],
  origin: [104, 84],
  duration: 0.8,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: {
    palette: ["#16224a", "#1f4a86", "#2a7fc0", "#48b8ec", "#9fe2ff", "#e2f7ff", "#ffffff"],
    sparks: ["#fff3a6", "#ffe26b", "#ff8a2a", "#f2561d"],
    radius: 46,
    seed: 3,
  },
};
const STANCE = { ...READY, weapon: "sword", fx: 12, fy: -21, sa: -0.85 };

const WOUND = { ...STANCE, crouch: 6, lean: -2, yaw: 1.1, fx: 13, fy: -20, sa: 0.3, bx: 6, by: -24, ffx: 8, fbx: -8 };
const WIDE = { ...STANCE, crouch: 5, lean: 3, fx: 21, fy: -21, sa: 0.05, bx: -9, by: -23, ffx: 11, fbx: -11 };
const act = {
  target: { x: 60 },
  poses: [
    [-0.46, STANCE],
    [-0.2, WOUND],
    [-0.02, { ...WOUND, crouch: 7, yaw: 1.3 }],
    [0, { ...WIDE, sa: -0.1, ghost: 1 }, "snap"],
    [0.05, { ...WIDE, yaw: -1.57, ghost: 1 }, "snap"],
    [0.09, { ...WIDE, yaw: -3.14, ghost: 1 }, "snap"],
    [0.13, { ...WIDE, yaw: -4.71, ghost: 1 }, "snap"],
    [0.17, WIDE, "snap"],
    [0.56, { ...WIDE, crouch: 4, lean: 2 }],
    [0.92, STANCE],
  ],
  hits: [{ t: 0.17, stop: 0.12, shake: 0.16, amp: 2, push: 2.4, straw: 16 }],
  dust: [{ t: 0, x: 0, n: 6 }, { t: 0.17, x: 12, n: 6, dir: 1 }],
};
const SW = 0.17; // the edge goes once round
const FLARE = 0.3; // the closed ring flares and dissolves
const turn = (t) => 1 - Math.pow(1 - clamp(t / SW), 1.6); // fraction of the turn the edge has made
const passedAt = (f) => SW * (1 - Math.pow(1 - clamp(f), 1 / 1.6)); // when the edge passed fraction f
function create(o) {
  const C = fit(o.palette, 7), n = C.length, Rg = new Rng(o.seed), R0 = o.radius;
  const ps = new Particles({ rng: Rg, ground: () => 0, sparks: o.sparks }), lights = new Lights();

  const A = swing({ cx: 0, cy: -17, R: R0, sy: 0.27, rot: -0.1, a0: 0.5, dir: -1, k: 0.15 });

  const E = { ...A, R: R0 * 0.8, k: 0.1 };
  const W = 16, WE = 5;

  const DIM = [C[0], C[0], C[1], C[2], C[3], C[4], C[5]];
  let t = 0, closed = false, lastU = 0;

  const body = (p, s, w0, lag, half, rim) => {
    const U = TAU * turn(t - lag), ramp = half < 0 ? DIM : C;
    if (U < 0.02 || t - lag > SW + 0.02) return;
    smear(p, s, 0, U, w0, (u, r, out) => {
      const age = t - lag - passedAt(u / TAU), lead = U - u;
      const w = w0 * Math.pow(clamp(lead / 0.85), 0.5) * (0.3 + 0.7 * Math.exp(-age / 0.075)) * Math.pow(clamp(u / 1.3), 0.7);
      if (w < 0.45) return;
      const q = (s.R - r) / w;
      if (q < 0 || q > 1) return;

      const ci = rim && q < 0.26 && age < 0.06 ? 0 : Math.round(q * (n - 1) * 0.7 + age * 13 + (rim ? 0.4 : 1.4));
      out.c = ramp[n - 1 - clamp(ci, 0, n - 1)];
      out.a = Math.min(1, u / 1.1 + 0.2);
    }, half);
  };
  const ring = (p, half) => {

    body(p, E, WE, 0.025, half, false);
    body(p, A, W, 0, half, true);
    if (t < SW + 0.04) glowAlong(p, A, A.R - 5, 0, TAU * turn(t), 14, C[3], (u) => (half < 0 ? 0.2 : 0.3) * Math.exp(-(t - passedAt(u / TAU)) / 0.08), half);
    if (t < SW) return;

    const f = (t - SW) / FLARE, ramp = half < 0 ? DIM : C;
    if (f < 1) {
      const R = A.R + 6 * ease.outCubic(f), th = f < 0.13 ? 9 : Math.max(1, 6 * Math.pow(1 - f, 1.5) + 0.5), S = { ...A, R };
      const step = f < 0.13 ? 6 : f < 0.3 ? 5 : f < 0.55 ? 4 : 3;
      smear(p, S, 0, TAU, th, (u, r, out) => {
        const q = (R - r) / th;
        if (q < 0 || q > 1) return;
        out.c = f < 0.13 ? (q < 0.6 ? WHITE : ramp[5]) : q < 0.45 ? ramp[step] : ramp[step - 1];
        out.a = f < 0.4 ? 1 : 1.3 - f;
      }, half);
      glowAlong(p, S, R - 2, 0, TAU, 14, C[4], 0.32 * (1 - f) * (1 - f), half);
    }

    const k = 1 - clamp((t - SW - 0.06) / 0.4);
    if (k > 0) trace(p, A, A.R - 0.5, 0, TAU, ramp[4], (u) => clamp(k * 1.5 - rand(Math.floor(u * 30), 5) * 0.8) * 0.95, half);
  };
  return {
    update(dt) {
      t += dt;
      const U = TAU * turn(t);

      if (t < SW) {
        for (let u = lastU; u < U; u += 0.3) {
          const tr = travel(A, u), ox = tr.x - A.cx, oy = tr.y - A.cy, l = Math.hypot(ox, oy) || 1, sp = Rg.range(40, 120);
          ps.spawn(P.MOTE, tr.x, tr.y, tr.dx * sp + (ox / l) * sp * 0.35, tr.dy * sp * 0.6 - Rg.range(5, 30), Rg.range(0.22, 0.45), C[4 + Rg.int(0, 1)], 0.55, 0, Math.sin(tr.a) < 0 ? PF.BACK : 0);
        }
        lastU = U;
      }
      if (!closed && t >= SW) {
        closed = true;
        lights.add(A.cx, A.cy + 4, 90, C[3], 0.4, 0.4);

        const end = travel(A, TAU);
        for (let i = 0; i < 9; i++) {
          const a = Math.atan2(end.dy, end.dx) + Rg.range(-0.45, 0.35), sp = Rg.range(160, 360);
          ps.spawn(P.SPARK, end.x, end.y, Math.cos(a) * sp, Math.sin(a) * sp - Rg.range(20, 70), Rg.range(0.14, 0.36));
        }
        for (let i = 0; i < 16; i++) {
          const u = Rg.range(0, TAU), tr = travel(A, u), sp = Rg.range(110, 260);
          ps.spawn(P.SPARK, tr.x, tr.y, tr.dx * sp, tr.dy * sp - Rg.range(20, 80), Rg.range(0.12, 0.32), 0, 1, 0, Math.sin(tr.a) < 0 ? PF.BACK : 0);
        }

        for (let i = 0; i < 6; i++) {
          const u = Rg.range(0, TAU), [x, y] = onSwing(A, A.R + Rg.range(-1, 3), u);
          ps.spawn(P.STAR, x, y, 0, -Rg.range(2, 8), Rg.range(0.25, 0.5), Rg.chance(0.5) ? C[5] : WHITE, Rg.range(1.2, 2.6), Rg.range(0.04, 0.16), Math.sin(A.a0 + A.dir * u) < 0 ? PF.BACK : 0);
        }
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      ring(p, -1);
      ps.draw(p, "back");
    },
    draw(p) {
      ring(p, 1);

      if (t < 0.06) {
        const [x, y] = onSwing(A, A.R - 3, 0);
        sparkle(p, x, y, 7 * (1 - t / 0.06), C[5], C[3], 0.5);
      }
      const g = t - SW * 0.85, tip = onSwing(A, A.R - 3, TAU);
      if (g > 0 && g < 0.24) sparkle(p, tip[0], tip[1], 10 * ease.outBack(Math.min(1, g / 0.05)) * (1 - g / 0.24), C[5], C[3], 0.6);

      if (t < SW + 0.05) {
        const U = TAU * turn(t), [x, y] = onSwing(A, A.R - 5, U), far = Math.sin(A.a0 + A.dir * U) < 0;
        p.glow(x, y, far ? 26 : 38, C[3], (far ? 0.3 : 0.5) * (1 - smooth(SW - 0.04, SW + 0.05, t)));
      }
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"drawBack",{enumerable:true,configurable:true,get:()=>drawBack});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __iuun6c1=__r(1);const cycle=__iuun6c1.cycle;const fit=__iuun6c1.fit;const rng=__iuun6c1.rng;const smooth=__iuun6c1.smooth;const clamp=__iuun6c1.clamp;const lerp=__iuun6c1.lerp;const TAU=__iuun6c1.TAU;const WHITE=__iuun6c1.WHITE;const READY=__iuun6c1.READY;
const __inijjod=__r(38);const drawLeaf=__inijjod.drawLeaf;
const meta = {
  name: "Leaf storm",
  desc: "Leaves tumble up a rising spiral round the character, passing behind and in front, turning and flipping, wrapped in bright bands of wind; litter swirls at their feet.",
  tags: ["nature", "wind", "leaves", "buff", "aura", "actor", "loop"],
  size: [112, 104],
  origin: [56, 92],
  duration: 2.4,
  loop: true,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: {
    palette: ["#1a2420", "#2e4038", "#4a6656", "#7a9a84", "#b4d0b8", "#eef8e8"],
    leaves: ["#123818", "#2f7a2a", "#6cb83a", "#c8f070", "#4a2a08", "#a8701c", "#e8b42e", "#fff09a", "#3a1010", "#9a2e1c", "#e0642a", "#ffb070"],
    seed: 5,
  },
};
const UP = { turn: 1.1, crouch: 0, fx: -13, fy: -37, bx: 13, by: -37, ffx: -3, fbx: 4 };
const act = {
  poses: [
    [0, UP],
    [0.6, { ...UP, lean: 2, fy: -40, by: -33 }],
    [1.2, { ...UP, crouch: -1 }],
    [1.8, { ...UP, lean: -2, fy: -33, by: -40 }],
    [2.4, UP],
  ],
};
const SY = 0.3, TOP = 64;
const ringR = (y) => 15 + 9 * clamp(-y / TOP);

function leaves(p, L, t, seed, back) {
  cycle(t, meta.duration, 28, seed, (g) => g.range(1.5, 2.3), (age, life, R) => {
    const k = age / life, turns = R.range(1.4, 2.2), th = R.range(0, TAU) + turns * TAU * k, sn = Math.sin(th);
    if (sn > 0 === back) return;
    const y = -lerp(1, TOP, Math.pow(k, 0.9)) - R.range(0, 6), fling = smooth(0.75, 1, k), rr = ringR(y) * R.range(0.85, 1.15) + fling * 22;
    const x = Math.cos(th) * rr, yy = y + sn * rr * SY;
    const a = Math.min(1, k * 7) * (1 - smooth(0.85, 1, k)), spin = R.range(-9, 9) * age + th, fl = age * R.range(5, 11), o = R.int(0, 2) * 4;
    const pal = back ? [L[o], L[o], L[o + 1], L[o + 2]] : [L[o], L[o + 1], L[o + 2], L[o + 3]];
    drawLeaf(p, x, yy, R.range(6.5, 9), R.range(2.4, 3.3), spin, fl, pal, a);

    if (!back && Math.abs(Math.cos(fl)) > 0.97) {
      p.px(x, yy, WHITE);
      p.glow(x, yy, 5, L[o + 3], 0.35 * a);
    }
  });
}


function wind(p, C, t, seed, back) {
  for (let j = 0; j < 16; j++) {
    const R = rng(seed, j), y0 = -R.range(4, TOP - 4), r = ringR(y0) * R.range(1.0, 1.25), K = R.int(2, 3), span = R.range(1.1, 2.4);
    const head = R.range(0, TAU) + (TAU * K * t) / meta.duration, rise = R.range(-0.18, 0.18);
    for (let s = 0; s <= span; s += 0.45 / r) {
      const th = head - s, sn = Math.sin(th);
      if (sn > 0 === back) continue;
      const k = s / span, x = Math.cos(th) * r, y = y0 + sn * r * SY + (th - head) * rise * 4;
      const c = back ? (k < 0.3 ? C[3] : C[2]) : k < 0.06 && R.next() < 2 ? WHITE : k < 0.15 ? C[5] : k < 0.4 ? C[4] : C[3];
      if (k < 0.45) p.dot(x, y, c);
      else p.blend(x, y, c, 1.6 * (1 - k));
    }
    if (!back && Math.sin(head) > 0) p.glow(Math.cos(head) * r, y0 + Math.sin(head) * r * SY, 5, C[4], 0.25);
  }
}

function swirl(p, C, L, t, seed, back) {
  cycle(t, meta.duration, 14, seed, (g) => g.range(0.6, 1.1), (age, life, R) => {
    const k = age / life, th = R.range(0, TAU) + R.range(6, 9) * age, sn = Math.sin(th);
    if (sn > 0 === back) return;
    const rr = R.range(10, 22) + k * 8, x = Math.cos(th) * rr, y = -1 - k * R.range(2, 8) + sn * rr * 0.25, s = R.range(2, 3.5) * (0.6 + k);
    p.disc(x, y, s, back ? C[2] : C[3], (1 - k) * Math.min(1, k * 6) * 0.3);
  });
  for (let j = 0; j < 6; j++) {
    const R = rng(seed + 9, j), rr = R.range(12, 24), th0 = R.range(0, TAU) + (TAU * 3 * t) / meta.duration, span = R.range(0.5, 1);
    for (let s = 0; s < span; s += 0.6 / rr) {
      const th = th0 - s;
      if (Math.sin(th) > 0 === back) continue;
      p.dot(Math.cos(th) * rr, 0.5 + rr * 0.2 * Math.sin(th), s < span * 0.4 ? C[3] : C[2], 1 - s / span);
    }
  }
}
function drawBack(p, t, o) {
  const C = fit(o.palette, 6), L = fit(o.leaves, 12);
  p.glow(0, -30, 46, C[4], 0.12);
  p.glow(0, -2, 26, L[2], 0.12);
  swirl(p, C, L, t, o.seed * 3 + 1, true);
  wind(p, C, t, o.seed * 5 + 2, true);
  leaves(p, L, t, o.seed * 7 + 3, true);
}
function draw(p, t, o) {
  const C = fit(o.palette, 6), L = fit(o.leaves, 12);
  swirl(p, C, L, t, o.seed * 3 + 1, false);
  wind(p, C, t, o.seed * 5 + 2, false);
  leaves(p, L, t, o.seed * 7 + 3, false);
}
},
function(__e){Object.defineProperty(__e,"stoneShape",{enumerable:true,configurable:true,get:()=>stoneShape});Object.defineProperty(__e,"drawRock",{enumerable:true,configurable:true,get:()=>drawRock});Object.defineProperty(__e,"drawSpike",{enumerable:true,configurable:true,get:()=>drawSpike});Object.defineProperty(__e,"spikeLook",{enumerable:true,configurable:true,get:()=>spikeLook});Object.defineProperty(__e,"spikeCrack",{enumerable:true,configurable:true,get:()=>spikeCrack});Object.defineProperty(__e,"floorCrack",{enumerable:true,configurable:true,get:()=>floorCrack});Object.defineProperty(__e,"drawLeaf",{enumerable:true,configurable:true,get:()=>drawLeaf});Object.defineProperty(__e,"Drops",{enumerable:true,configurable:true,get:()=>Drops});Object.defineProperty(__e,"gasPuff",{enumerable:true,configurable:true,get:()=>gasPuff});Object.defineProperty(__e,"bubble",{enumerable:true,configurable:true,get:()=>bubble});Object.defineProperty(__e,"Gas",{enumerable:true,configurable:true,get:()=>Gas});
const __iig4t7d=__r(1);const TAU=__iig4t7d.TAU;const WHITE=__iig4t7d.WHITE;const GRAVITY=__iig4t7d.GRAVITY;const rand=__iig4t7d.rand;const clamp=__iig4t7d.clamp;
function stoneShape(R, n = R.int(5, 7)) {
  const pts = [], a0 = R.range(0, TAU), squash = R.range(0.7, 1);
  for (let i = 0; i < n; i++) {
    const a = a0 + ((i + R.range(-0.28, 0.28)) * TAU) / n, r = R.range(0.72, 1.12);
    pts.push([Math.cos(a) * r, Math.sin(a) * r * squash]);
  }
  return pts;
}
const LX = -0.6, LY = -0.8;
const inPoly = (V, x, y) => {
  let inside = false;
  for (let i = 0, j = V.length - 1; i < V.length; j = i++) {
    const [xi, yi] = V[i], [xj, yj] = V[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
const MASK = new Uint8Array(64 * 64), FACE = new Int8Array(64 * 64), ROWS = 400, RL = new Float32Array(ROWS), RR = new Float32Array(ROWS), RU = new Float32Array(ROWS);
function drawRock(p, x, y, s, a, pts, S, alpha = 1, white = false) {
  const n = S.length, top = n - 2, ca = Math.cos(a), sa = Math.sin(a);
  if (s < 1.4) {
    p.dot(x, y, S[top - 1], alpha);
    p.dot(x + 1, y, S[top - 3], alpha);
    return;
  }
  const V = pts.map(([u, v]) => [(u * ca - v * sa) * s, (u * sa + v * ca) * s]);
  const ang = V.map(([vx, vy]) => Math.atan2(vy, vx));

  const lit = V.map(([ax, ay], i) => {
    const [bx, by] = V[(i + 1) % V.length], ex = bx - ax, ey = by - ay, l = Math.hypot(ex, ey) || 1;
    let nx = ey / l, ny = -ex / l;
    if (nx * (ax + bx) + ny * (ay + by) < 0) (nx = -nx), (ny = -ny);
    return nx * LX + ny * LY;
  });
  const X0 = Math.floor(x) - Math.ceil(s * 1.25) - 1, Y0 = Math.floor(y) - Math.ceil(s * 1.25) - 1, N = Math.min(62, 2 * Math.ceil(s * 1.25) + 3);
  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++) {
      const dx = X0 + i + 0.5 - x, dy = Y0 + j + 0.5 - y, k = j * 64 + i;
      MASK[k] = inPoly(V, dx, dy) ? 1 : 0;
      if (!MASK[k]) continue;
      const g = Math.atan2(dy, dx);
      let f = 0;
      for (let q = 0; q < ang.length; q++) {
        const a0 = ang[q], a1 = ang[(q + 1) % ang.length];
        let d = (g - a0) % TAU, span = (a1 - a0) % TAU;
        if (d < 0) d += TAU;
        if (span < 0) span += TAU;
        if (d <= span) {
          f = q;
          break;
        }
      }
      FACE[k] = f;
    }
  const at = (i, j) => i >= 0 && j >= 0 && i < N && j < N && MASK[j * 64 + i] === 1;
  for (let j = -1; j <= N; j++)
    for (let i = -1; i <= N; i++) {
      const X = X0 + i, Y = Y0 + j;
      if (!at(i, j)) {
        if (at(i - 1, j) || at(i + 1, j) || at(i, j - 1) || at(i, j + 1)) p.dot(X, Y, S[0], alpha);
        continue;
      }
      if (white) {
        p.dot(X, Y, WHITE, alpha);
        continue;
      }
      const L = lit[FACE[j * 64 + i]], edge = !at(i - 1, j) || !at(i + 1, j) || !at(i, j - 1) || !at(i, j + 1);
      let c = L > 0.55 ? S[top] : L > 0.15 ? S[top - 1] : L > -0.3 ? S[top - 2] : S[top - 3];
      if (edge) c = L > 0.3 ? S[top + 1] : L < -0.2 ? S[Math.max(1, top - 4)] : c;
      p.dot(X, Y, c, alpha);
    }
}
function drawSpike(p, x, base, h, w, lean, sp, S, opts = {}) {
  if (h < 1.5) return;
  const a = opts.a ?? 1, white = opts.white, glint = opts.glint ?? -1, clip = opts.clip ?? 1, floorY = opts.floor ?? Infinity;
  const hw = (u, side) => {
    let v = (w / 2) * Math.pow(Math.max(0, 1 - u), 0.85) + 0.3;
    for (const n of sp.notches) if (n.side === side && u > n.u && u < n.u + 0.07) v -= n.d * (1 - u * 0.5);
    return Math.max(0, v);
  };
  const half = opts.half ?? 0, Y0 = Math.floor(base - h) - 2, NR = Math.min(ROWS, Math.ceil(base) - Y0 + 2);

  for (let k = 0; k < NR; k++) {
    const u = (base - (Y0 + k + 0.5)) / h;
    RU[k] = u;
    if (u < 0 || u > 1 || Y0 + k + 0.5 > floorY) (RL[k] = Infinity), (RR[k] = -Infinity);
    else (RL[k] = x + lean * u - hw(u, -1)), (RR[k] = x + lean * u + hw(u, 1));
  }
  const inside = (px, py) => {
    const k = py - Y0, fx = px + 0.5;
    if (k < 0 || k >= NR || fx < RL[k] || fx > RR[k]) return false;
    if (clip < 1 && RU[k] > clip + (rand(px, 77) - 0.5) * 0.07) return false;
    if (!half) return true;
    const q = ((fx - RL[k]) / Math.max(0.5, RR[k] - RL[k])) * 2 - 1;
    return half < 0 ? q < -0.18 : q >= -0.18;
  };
  const X0 = Math.floor(x - w / 2 - Math.abs(lean) - 2), X1 = Math.ceil(x + w / 2 + Math.abs(lean) + 2);
  for (let py = Math.floor(base - h) - 1; py < Math.ceil(base); py++)
    for (let px = X0; px <= X1; px++) {
      if (!inside(px, py)) {
        if (py + 0.5 <= floorY && (inside(px - 1, py) || inside(px + 1, py) || inside(px, py + 1) || (inside(px, py - 1) && py < base - 1))) p.dot(px, py, S[0], a);
        continue;
      }
      if (white) {
        p.dot(px, py, WHITE, a);
        continue;
      }
      const k0 = py - Y0, u = RU[k0], c = x + lean * u, l = RL[k0], r = RR[k0], fx = px + 0.5;

      let band = 0, st = false;
      for (const s of sp.strata) {
        const d = u * h - s * h - sp.slope * (fx - c);
        if (d > 0) band++;
        if (Math.abs(d) < 0.5) st = true;
      }
      const jog = (rand(band, sp.seed) - 0.5) * 0.3, q = ((fx - l) / Math.max(0.5, r - l)) * 2 - 1, qr = -0.18 + jog;
      let i;
      if (u > 0.93) i = q < qr + 0.3 ? 7 : 5;
      else if (Math.abs(q - qr) < Math.max(0.09, 0.55 / Math.max(1, r - l))) i = 7;
      else if (q < qr) i = fx - l < 1 ? 7 : q < -0.5 + jog ? 6 : 5;
      else i = r - fx < 1 ? 3 : q < 0.38 + jog ? 4 : 2;
      if (st && i < 7) i -= 1;
      const fleck = rand(px * 7 + 3, py * 13 + 5);
      if (fleck < 0.035) i = q < qr ? 7 : i - 1;
      else if (fleck > 0.965) i -= 1;
      if (glint >= 0 && q < qr + 0.1) {
        const g = Math.abs(u - glint);
        if (g < 0.035) i = 8;
        else if (g < 0.07) i = Math.max(i, 7);
      }
      p.dot(px, py, i >= 8 ? WHITE : S[clamp(i, 0, S.length - 1)], a);
    }

  if (opts.cracks && opts.crack > 0)
    for (const path of opts.cracks) {
      const m = Math.max(1, Math.floor(path.length * opts.crack));
      for (let k = 1; k < m; k++) {
        const [u0, v0] = path[k - 1], [u1, v1] = path[k];
        const P = ([u, v]) => [x + lean * u + v * hw(u, v < 0 ? -1 : 1), base - u * h];
        const [ax, ay] = P([u0, v0]), [bx, by] = P([u1, v1]);
        if (u1 > clip) break;
        if (!inside(Math.floor(ax), Math.floor(ay)) || !inside(Math.floor(bx), Math.floor(by))) continue;
        const hot = opts.heat ?? 0, Gl = opts.glowRamp;
        if (hot > 0.05 && Gl) {

          p.line(ax + 1, ay, bx + 1, by, S[0], a);
          p.line(ax, ay, bx, by, hot > 0.7 ? Gl[4] : hot > 0.4 ? Gl[3] : hot > 0.2 ? Gl[2] : Gl[1], a);
          if (k % 2 === 0) p.glow(bx, by, 7, Gl[2], 0.35 * hot);
        } else {
          p.line(ax, ay, bx, by, S[0], a);
          p.dot(bx + 1, by - 1, S[6], a * 0.7);
        }
      }
    }
}
function spikeLook(R) {
  const notches = [], strata = [];
  for (let i = 0, n = R.int(3, 5); i < n; i++) notches.push({ u: R.range(0.1, 0.8), side: R.sign(), d: R.range(0.8, 1.8) });
  for (let i = 0, n = R.int(2, 4); i < n; i++) strata.push(R.range(0.12, 0.8));
  return { notches, strata, slope: R.range(-0.25, 0.25), seed: R.int(1, 9999) };
}
function spikeCrack(R, u0, v0, dir) {
  const pts = [[u0, v0]];
  let u = u0, v = v0;
  for (let i = 0; i < 9; i++) {
    u += R.range(0.03, 0.08);
    v += dir * R.range(0.05, 0.28) + R.range(-0.12, 0.12);
    if (u > 0.95 || Math.abs(v) > 1) break;
    pts.push([u, v]);
  }
  return pts;
}
function floorCrack(R, side, len) {
  const pts = [[0, 0]];
  for (let x = 0; Math.abs(x) < len; ) {
    x += side * R.range(2, 5);
    pts.push([x, R.int(0, 2)]);
  }
  return pts;
}
function drawLeaf(p, x, y, len, wid, ang, fl, pal, alpha = 1) {
  const ca = Math.cos(ang), sa = Math.sin(ang), sq = Math.cos(fl), w = Math.max(0.55, Math.abs(sq) * wid), under = sq < 0;
  const R = Math.ceil(len / 2 + 2), X = Math.round(x), Y = Math.round(y);
  const inside = (i, j) => {
    const u = (i + 0.5) * ca + (j + 0.5) * sa + len / 2, v = -(i + 0.5) * sa + (j + 0.5) * ca;
    if (u < 0 || u > len) return 0;
    const half = w * Math.pow(Math.sin((Math.PI * u) / len), 0.75);
    return Math.abs(v) <= half ? (v < 0 ? 1 : 2) : 0;
  };
  for (let j = -R; j <= R; j++)
    for (let i = -R; i <= R; i++) {
      const s = inside(i, j);
      if (!s) {
        if (inside(i - 1, j) || inside(i + 1, j) || inside(i, j - 1) || inside(i, j + 1)) p.dot(X + i, Y + j, pal[0], alpha);
        continue;
      }
      const u = (i + 0.5) * ca + (j + 0.5) * sa + len / 2, v = -(i + 0.5) * sa + (j + 0.5) * ca;
      const rib = Math.abs(v) < 0.5 && u > len * 0.12 && u < len * 0.88 && w > 1.2;
      p.dot(X + i, Y + j, rib ? pal[1] : (s === 1) !== under ? pal[3] : pal[2], alpha);
    }

  p.dot(X - ca * (len / 2 + 1), Y - sa * (len / 2 + 1), pal[1], alpha);
}
class Drops {
  constructor(ground = () => 0) {
    this.list = [];
    this.ground = ground;
  }
  add(x, y, vx, vy, s = 1, delay = 0) {
    this.list.push({ x, y, vx, vy, s, delay });
  }
  update(dt, onLand) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const d = this.list[i];
      if (d.delay > 0) {
        d.delay -= dt;
        continue;
      }
      const drag = 0.6 / d.s, py = d.y;
      d.vy += GRAVITY * dt;
      d.vx -= d.vx * drag * dt;
      d.vy -= d.vy * drag * 0.5 * dt;
      d.x += d.vx * dt;
      d.y += d.vy * dt;
      const g = this.ground(d.x);
      if (d.vy > 0 && py <= g && d.y >= g) {
        onLand?.(d, g);
        this.list.splice(i, 1);
      }
    }
  }
  draw(p, C) {
    const n = C.length;
    for (const d of this.list) {
      if (d.delay > 0) continue;
      const sp = Math.hypot(d.vx, d.vy) || 1, ux = d.vx / sp, uy = d.vy / sp, len = Math.min(5, 0.5 + sp * 0.012);
      p.line(d.x - ux * len, d.y - uy * len, d.x - ux, d.y - uy, C[n - 4]);
      p.px(d.x, d.y, C[n - 1]);
      if (d.s > 1) p.px(d.x - ux, d.y - uy, C[n - 2]), p.px(d.x + 1, d.y, C[n - 3]);
      p.glow(d.x, d.y, 3 + d.s * 1.5, C[n - 2], 0.3);
    }
  }
}
function gasPuff(p, x, y, r, a, belly, body, cap, hi = 0) {
  if (a < 0.02 || r < 0.6) return;
  p.disc(x + r * 0.06, y + r * 0.28, r * 0.9, belly, a * 0.55);
  p.disc(x, y, r, body, a * 0.45);
  p.disc(x + r * 0.03, y - r * 0.02, r * 0.76, body, a * 0.5);
  p.disc(x - r * 0.2, y - r * 0.34, r * 0.52, cap, a * 0.45);
  if (hi) p.disc(x - r * 0.3, y - r * 0.55, r * 0.26, hi, a * 0.32);
}
function bubble(p, x, y, r, c1, c2, fill, a = 1, dome = false) {
  const R = Math.ceil(r) + 1, X = Math.round(x), Y = Math.round(y);
  for (let j = -R; j <= (dome ? 0 : R); j++)
    for (let i = -R; i <= R; i++) {
      const d = Math.hypot(i, j);
      if (d > r + 0.45) continue;
      if (d > r - 0.6) p.dot(X + i, Y + j, i < 0 && j < -r * 0.2 ? c1 : c2, a);
      else p.blend(X + i, Y + j, fill, 0.3 * a);
    }
  if (r >= 1.5) p.dot(X - Math.round(r * 0.45), Y - Math.round(r * 0.5), WHITE, a);
}
class Gas {
  constructor() {
    this.list = [];
    this.n = 0;
  }
  add(t, x, y, vx, vy, r0, r1, end, rise = 0) {
    this.list.push({ x, y, vx, vy, r0, r1, t0: t, end, rise, seed: (this.n++ * 37.7) % 100 });
  }
  prune(t) {
    for (let i = this.list.length - 1; i >= 0; i--) if (t > this.list[i].end) this.list.splice(i, 1);
  }
  at(q, t) {
    const age = t - q.t0, e = 1 - Math.exp(-age * 2.2), sw = Math.min(1, age);
    const x = q.x + (q.vx / 2.2) * e + Math.sin(t * 1.7 + q.seed) * 2.5 * sw, y = q.y + (q.vy / 2.2) * e - q.rise * age + Math.sin(t * 1.3 + q.seed * 2) * 1.5 * sw;
    const u = clamp(age / Math.max(0.01, q.end - q.t0)), r = q.r0 + (q.r1 - q.r0) * (1 - Math.pow(1 - Math.min(1, age / 1.2), 3));
    return { x, y, r, a: clamp(age / 0.15) * (1 - clamp((u - 0.4) / 0.6)), u };
  }
  draw(p, t, belly, body, cap, hi = 0, k = 1, glow = 0) {
    for (const q of this.list) {
      const g = this.at(q, t);
      if (g.a <= 0.02) continue;
      gasPuff(p, g.x, g.y, g.r, g.a * k, belly, body, cap, g.u < 0.5 ? hi : 0);
      if (glow && g.r > 4) p.glow(g.x, g.y, g.r * 1.6, glow, 0.07 * g.a * k);
    }
  }
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __iyx2z3m=__r(1);const Particles=__iyx2z3m.Particles;const Bits=__iyx2z3m.Bits;const Lights=__iyx2z3m.Lights;const P=__iyx2z3m.P;const PF=__iyx2z3m.PF;const B=__iyx2z3m.B;const Rng=__iyx2z3m.Rng;const fit=__iyx2z3m.fit;const band=__iyx2z3m.band;const sparkle=__iyx2z3m.sparkle;const clamp=__iyx2z3m.clamp;const smooth=__iyx2z3m.smooth;const ease=__iyx2z3m.ease;const TAU=__iyx2z3m.TAU;const WHITE=__iyx2z3m.WHITE;const hex=__iyx2z3m.hex;const mix=__iyx2z3m.mix;
const __i8usuus=__r(38);const stoneShape=__i8usuus.stoneShape;const drawRock=__i8usuus.drawRock;
const meta = {
  name: "Boulder",
  desc: "A spinning boulder arcs right shedding dust and pebbles, smashes into the floor in a white flash and bursts into tumbling chunks, gravel and rolling dust.",
  tags: ["nature", "earth", "rock", "projectile", "impact", "directional", "one-shot"],
  size: [264, 120],
  origin: [40, 104],
  duration: 2.3,
  loop: false,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#100e12", "#1e1a22", "#302a36", "#463e4c", "#5e5464", "#7c7080", "#a0949e", "#cec4c8"],
    sparks: ["#fff3a6", "#ffe26b", "#ff8a2a", "#f2561d"],
    size: 11,
    seed: 11,
  },
};
const X0 = 6, Y0 = -26, VX = 220, VY = -170, G = 860;

function surface(p, x, y, r, a, S, M) {
  const c = Math.cos(a), s = Math.sin(a), at = (u, v) => [x + (u * c - v * s) * r, y + (u * s + v * c) * r];
  for (const [u, v] of [[0.42, 0.12], [-0.3, 0.38]]) {
    const [px, py] = at(u, v);
    p.px(px, py, S[3]);
  }
  for (let k = 0; k < 9; k++) {
    const g = 3.6 + (k / 8) * 1.3, rr = k % 3 === 1 ? 0.78 : 0.92, [px, py] = at(Math.cos(g) * rr, Math.sin(g) * rr);
    p.px(px, py, M[k % 3 === 1 ? 0 : py < y ? 2 : 1]);
  }
}
function create(o) {
  const S = fit(o.palette, 8), R = new Rng(o.seed), floor = () => 0, RAD = o.size;
  const DUST = mix(S[6], hex("#9a8f86"), 0.4), DUST2 = mix(S[5], hex("#7a7068"), 0.35);
  const ps = new Particles({ rng: R, ground: floor, sparks: o.sparks }), MOSSC = [hex("#1f3a1e"), hex("#3f7a2c"), hex("#7cb83a")];
  const bits = new Bits({ ground: floor }), lights = new Lights(), shape = stoneShape(R, 8);
  const tHit = (-VY + Math.sqrt(VY * VY - 2 * G * (Y0 + RAD * 0.8))) / G, xHit = X0 + VX * tHit;
  let t = 0, hit = false, thrown = false;
  const at = (tt) => [X0 + VX * tt, Y0 + VY * tt + 0.5 * G * tt * tt];
  const rock = (b) => bits.add({ ...b, pts: stoneShape(R) });
  return {
    update(dt) {
      t += dt;
      const f = Math.min(1, dt * 120);
      if (!thrown) {
        thrown = true;
        for (let i = 0; i < 6; i++) ps.spawn(P.DUST, X0 - R.range(0, 6), Y0 + R.range(-4, 4), -R.range(20, 70), R.range(-20, 20), R.range(0.4, 0.7), DUST, R.range(2.5, 4.5));
        lights.add(X0, Y0, 30, WHITE, 0.3, 0.1);
      }
      if (t < tHit) {

        const [x, y] = at(t);
        if (R.chance(0.5 * f)) ps.spawn(P.DUST, x - R.range(2, 6), y + R.range(-4, 4), -R.range(10, 40), R.range(-10, 10), R.range(0.3, 0.6), DUST, R.range(2, 3.5));
        if (R.chance(0.12 * f)) ps.spawn(P.GRIT, x + R.range(-4, 4), y + R.range(-2, 4), VX * 0.3, R.range(-40, 20), R.range(0.6, 0.9), R.pick([S[5], S[4]]), R.chance(0.3) ? 2 : 1);
      }
      if (!hit && t >= tHit) {
        hit = true;
        const x = xHit, y = -RAD * 0.6;
        lights.add(x, y, 36, WHITE, 0.75, 0.1);
        lights.add(x, y, 60, hex("#ffb060"), 0.45, 0.5);

        for (let i = 0; i < 9; i++) {
          const a = -Math.PI / 2 + R.range(-1.2, 1.1), sp = R.range(100, 240);
          rock({ kind: B.CHUNK, x: x + R.range(-5, 5), y: y + R.range(-5, 5), vx: Math.cos(a) * sp + 30, vy: Math.sin(a) * sp, g: 1, drag: 0.7, bounce: 0.35, life: R.range(1.3, 1.7), a: R.range(0, TAU), va: R.range(-14, 14), s: R.range(2.8, 5.2) });
        }
        for (let i = 0; i < 14; i++) {
          const a = -Math.PI / 2 + R.range(-1.4, 1.4), sp = R.range(120, 280);
          rock({ kind: B.CHUNK, x: x + R.range(-4, 4), y, vx: Math.cos(a) * sp + 25, vy: Math.sin(a) * sp, g: 1, drag: 0.8, bounce: 0.3, life: R.range(1.1, 1.5), a: R.range(0, TAU), va: R.range(-18, 18), s: R.range(1.4, 2.6) });
        }
        for (let i = 0; i < 60; i++) {
          const u = R.range(-1, 1), a = -Math.PI / 2 + u * 1.1, sp = R.range(80, 300) * (1 - 0.3 * Math.abs(u));
          ps.spawn(P.GRIT, x + u * 6, -1, Math.cos(a) * sp + 30, Math.sin(a) * sp, R.range(1, 1.8), R.pick([S[6], S[5], S[4], S[4], S[3]]), R.chance(0.4) ? 2 : 1);
        }
        for (let i = 0; i < 12; i++) {
          const a = -Math.PI / 2 + R.range(-1.3, 1.3), sp = R.range(150, 380);
          ps.spawn(P.SPARK, x, y, Math.cos(a) * sp + 40, Math.sin(a) * sp, R.range(0.15, 0.4));
        }

        for (let i = 0; i < 14; i++) {
          const sd = R.sign();
          ps.spawn(P.SMOKE, x + sd * R.range(2, 10), -R.range(1, 5), sd * R.range(40, 140) + 10, -R.range(4, 20), R.range(1.1, 1.8), R.chance(0.5) ? DUST : DUST2, R.range(4.5, 8), R.range(0, 0.05), PF.BIG);
        }
        for (let i = 0; i < 6; i++) ps.spawn(P.SMOKE, x + R.range(-6, 6), -R.range(4, 14), R.range(-15, 25), -R.range(30, 80), R.range(1.2, 1.8), DUST, R.range(6, 9), R.range(0, 0.1), PF.BIG);
        for (let i = 0; i < 3; i++) ps.spawn(P.STAR, x + R.range(-8, 8), y + R.range(-10, 4), 0, -4, R.range(0.2, 0.4), S[7], R.range(1, 2));
      }
      bits.update(dt);
      for (const b of bits.list)
        if (b.rest && !b.dusted) {
          b.dusted = true;
          for (let i = 0; i < 2; i++) ps.spawn(P.DUST, b.x + R.range(-1.5, 1.5), -0.5, R.sign() * R.range(8, 35), -R.range(2, 12), Math.min(R.range(0.3, 0.6), meta.duration - 0.05 - t), DUST2, R.range(1.3, 2.6));
        }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      const e = t - tHit;

      if (e > 0) {
        const fade = 1 - smooth(meta.duration - 0.6, meta.duration - 0.15, t), w = 10 * Math.min(1, e / 0.05);
        for (let x = Math.floor(-w); x <= w; x++) {
          const d = Math.abs(x) / w;
          p.dot(xHit + x, 0, d < 0.6 ? S[0] : S[1], fade);
          if (d < 0.5) p.dot(xHit + x, 1, S[1], fade * 0.8);
        }
        for (const sd of [-1, 1]) for (let k = 0; k < 4; k++) p.dot(xHit + sd * (w + 2 + k * 3), (k & 1) ? 1 : 0, S[1], fade * (1 - k / 4));
        const k = e / 0.45;
        if (k < 1) band(p, xHit, 0.5, 46 * ease.outCubic(k), 0.18, Math.max(1, 3 * (1 - k)), 1.15 - k, [S[4], S[6], hex("#ffd27a"), WHITE], (g) => Math.sin(g) < 0);
      }
      ps.draw(p, "back");
    },
    draw(p) {
      if (t < tHit) {
        const [x, y] = at(t), sp = Math.hypot(VX, VY + G * t), ux = VX / sp, uy = (VY + G * t) / sp;

        for (let i = 0; i < 4; i++) {
          const off = (i - 1.5) * RAD * 0.55, nx = -uy * off, ny = ux * off, L = 10 + (i % 2) * 6;
          p.line(x - ux * (RAD + 2) + nx, y - uy * (RAD + 2) + ny, x - ux * (RAD + 2 + L) + nx, y - uy * (RAD + 2 + L) + ny, i % 2 ? S[5] : S[6], 0.8);
        }
        drawRock(p, x, y, RAD, t * 13, shape, S);
        surface(p, x, y, RAD * 0.8, t * 13, S, MOSSC);
        p.glow(x, y, RAD * 2, S[6], 0.12);
      }
      const e = t - tHit;
      if (e >= 0 && e < 0.07) {

        drawRock(p, xHit, -RAD * 0.8, RAD, tHit * 13, shape, S, 1, true);
        sparkle(p, xHit, -RAD * 0.6, 12 * (1 - e / 0.07), WHITE, hex("#ffd27a"), 0.6);
      }
      if (e >= 0 && e < 0.14) {
        const k = e / 0.14;
        for (let i = 0; i < 9; i++) {
          const a = -Math.PI + (i / 8) * Math.PI, r0 = RAD + 4 + 16 * k, r1 = r0 + 8 * (1 - k);
          p.line(xHit + Math.cos(a) * r0, -RAD * 0.6 + Math.sin(a) * r0, xHit + Math.cos(a) * r1, -RAD * 0.6 + Math.sin(a) * r1, k < 0.5 ? WHITE : S[6]);
        }
      }
      if (e > 0) {
        const k = e / 0.45;
        if (k < 1) band(p, xHit, 0.5, 46 * ease.outCubic(k), 0.18, Math.max(1, 3 * (1 - k)), 1.15 - k, [S[4], S[6], hex("#ffd27a"), WHITE], (g) => Math.sin(g) >= 0);
      }
      for (const b of bits.list) drawRock(p, b.x, b.y, b.s, b.a, b.pts, S, Math.min(1, b.life / 0.4));
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i1gi2ax=__r(1);const Particles=__i1gi2ax.Particles;const Lights=__i1gi2ax.Lights;const P=__i1gi2ax.P;const Rng=__i1gi2ax.Rng;const fit=__i1gi2ax.fit;const sparkle=__i1gi2ax.sparkle;const clamp=__i1gi2ax.clamp;const smooth=__i1gi2ax.smooth;const ease=__i1gi2ax.ease;const TAU=__i1gi2ax.TAU;const WHITE=__i1gi2ax.WHITE;const READY=__i1gi2ax.READY;
const meta = {
  name: "Thrust",
  desc: "A piercing stab: a bundle of streaks shoots out from the hand to a point, a long four-point star flares at the tip with a pierce ring, sparks and speed lines.",
  tags: ["melee", "thrust", "stab", "spear", "rapier", "pierce", "combat", "directional", "one-shot"],
  size: [196, 76],
  origin: [34, 62],
  duration: 0.75,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: {
    palette: ["#2a1608", "#6b3c10", "#b8701a", "#f0b42e", "#ffe27a", "#fff6cf", "#ffffff"],
    sparks: ["#fff3a6", "#ffe26b", "#ff8a2a", "#f2561d"],
    reach: 66,
    seed: 4,
  },
};
const STANCE = { ...READY, weapon: "sword", x: -14, fx: 12, fy: -21, sa: -0.3 };

const BACK = { ...STANCE, crouch: 5, lean: -3, fx: -3, fy: -19, sa: -0.05, bx: 8, by: -30, armsFront: true, ffx: 10, fbx: -8 };
const LUNGE = { ...STANCE, crouch: 6, lean: 6, fx: 23, fy: -20, sa: 0, bx: -8, by: -24, ffx: 15, fbx: -11, toeB: true };
const act = {
  target: { x: 80 },
  poses: [
    [-0.46, STANCE],
    [-0.24, BACK],
    [-0.05, { ...BACK, crouch: 6, fx: -5 }],
    [0, { ...LUNGE, ghost: 1 }, "snap"],
    [0.07, LUNGE, "snap"],
    [0.3, { ...LUNGE, crouch: 5, lean: 5 }],
    [0.7, STANCE],
  ],
  hits: [{ t: 0.07, stop: 0.12, shake: 0.14, amp: 2, push: 2.8, straw: 16, y: -26 }],
  dust: [{ t: 0, x: -24, n: 6, dir: -1 }, { t: 0.07, x: 1, n: 6, dir: 1 }],
};
const OUT = 0.07; // the point arrives
const HOLD = 0.06, PULL = 0.2;

function longStar(p, x, y, L, k, C) {
  if (L < 1) return;
  const arms = [[1, 0, L], [-1, 0, L * 0.7], [0, -1, L * 0.42], [0, 1, L * 0.42]];
  for (const [dx, dy, len] of arms)
    for (let d = 1; d <= len; d += 0.5) {
      const u = d / len, c = u < 0.3 ? WHITE : u < 0.65 ? C[5] : C[4];
      p.dot(x + dx * d, y + dy * d, c, u < 0.7 ? 1 : 1 - (u - 0.7) / 0.35);
      if (u < 0.25 && len > 6) (p.dot(x + dx * d - dy, y + dy * d + dx, C[5]), p.dot(x + dx * d + dy, y + dy * d - dx, C[5]));
    }
  for (const [dx, dy] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) for (let d = 1; d <= Math.min(3, L * 0.14); d++) p.px(x + dx * d, y + dy * d, d < 2 ? C[5] : C[4]);
  p.px(x, y, WHITE);
  p.glow(x, y, 6 + L * 1.3, C[4], 0.35 * k);
  p.glow(x, y, 3 + L * 0.4, WHITE, 0.3 * k);
}
function create(o) {
  const C = fit(o.palette, 7), Rg = new Rng(o.seed), ps = new Particles({ rng: Rg, ground: () => 0, sparks: o.sparks }), lights = new Lights();
  const HX = 9, HY = -20, TX = HX + o.reach, TY = HY;

  const streaks = [-7, -4, -2, 0, 2, 4, 7].map((off) => ({ off, x0: HX + 1 + Rg.range(0, 5) + Math.abs(off) * 0.6, t0: Rg.range(0, 0.02) + Math.abs(off) * 0.003, w: off === 0 ? 2 : 1, hot: off === 0, len: Rg.range(0.75, 1) }));
  const lines = [];
  let t = 0, struck = false;
  return {
    update(dt) {
      t += dt;

      if (t < OUT + 0.08 && Rg.chance(0.5)) {
        const s = Rg.sign();
        lines.push({ x: HX + Rg.range(0, o.reach * 0.6), y: HY + s * Rg.range(7, 17), l: Rg.range(18, 42), v: Rg.range(200, 340), t });
      }
      for (let i = lines.length - 1; i >= 0; i--) if (t - lines[i].t > 0.24) lines.splice(i, 1);
      for (const l of lines) l.x += l.v * dt;
      if (!struck && t >= OUT) {
        struck = true;
        lights.add(TX, TY, 44, C[4], 0.45, 0.3);
        lights.add(TX, TY, 14, WHITE, 0.6, 0.06);
        for (let i = 0; i < 12; i++) {
          const a = Rg.range(-0.55, 0.45), sp = Rg.range(150, 330);
          ps.spawn(P.SPARK, TX, TY, Math.cos(a) * sp, Math.sin(a) * sp - 30, Rg.range(0.12, 0.35));
        }
        for (let i = 0; i < 10; i++) {
          const a = Rg.range(-0.9, 0.9) + (Rg.chance(0.3) ? Math.PI : 0), sp = Rg.range(40, 120);
          ps.spawn(P.MOTE, TX + Rg.range(-6, 2), TY + Rg.range(-2, 2), Math.cos(a) * sp, Math.sin(a) * sp, Rg.range(0.25, 0.5), Rg.chance(0.5) ? C[5] : C[4], 0.6);
        }
        for (let i = 0; i < 4; i++) ps.spawn(P.STAR, TX + Rg.range(-10, 8), TY + Rg.range(-9, 9), 0, -3, Rg.range(0.2, 0.4), Rg.chance(0.5) ? C[5] : WHITE, Rg.range(1, 2), Rg.range(0.06, 0.2));
      }
      ps.update(dt);
      lights.update(dt);
    },
    draw(p) {

      if (t < 0.05) sparkle(p, HX + 2, HY, 5 * (1 - t / 0.05) + 1, C[5], C[3], 0.4);

      for (const l of lines) {
        const k = (t - l.t) / 0.24;
        for (let d = 0; d < l.l * (1 - k * 0.6); d++) p.dot(l.x - d, l.y, d < 3 ? WHITE : d < l.l * 0.4 ? C[5] : C[3], (1 - d / l.l) * (1 - k));
      }

      const pull = smooth(OUT + HOLD, OUT + HOLD + PULL, t);
      for (const s of streaks) {
        const u = clamp((t - s.t0) / OUT), head = ease.outExpo(u);
        if (u <= 0 || pull >= 1) continue;

        const y0 = HY + s.off, end = s.x0 + (TX - s.x0) * s.len, x1 = s.x0 + (end - s.x0) * head, xa = s.x0 + (end - s.x0) * Math.max(pull, head * 0.35 * (1 - s.len) * 3);
        const yAt = (x) => y0 + (TY - y0) * clamp((x - s.x0) / (TX - s.x0)) * 0.85;
        for (let x = xa; x <= x1; x += 0.5) {
          const v = (x - xa) / Math.max(1, x1 - xa), c = v > 0.88 ? WHITE : s.hot ? (v > 0.35 ? C[6] : C[5]) : v > 0.55 ? C[5] : v > 0.25 ? C[4] : C[3];
          p.dot(x, yAt(x), c, v < 0.12 ? v / 0.12 : 1);
          if (s.w > 1 && v > 0.1) p.dot(x, yAt(x) + 1, v > 0.6 ? C[5] : C[3], v < 0.2 ? v / 0.2 : 1);
        }
      }
      if (t < OUT + HOLD + PULL) p.glowLine(HX + (TX - HX) * pull, HY, HX + (TX - HX) * ease.outExpo(clamp(t / OUT)), TY, 6, C[4], 0.22 * (1 - pull));

      const q = t - OUT;
      if (q >= 0 && q < 0.4) {
        const g = ease.outBack(clamp(q / 0.04), 2.4) * (1 - smooth(0.08, 0.4, q)) * (1 + 0.12 * Math.sin(q * 70));
        longStar(p, TX, TY, 24 * g, 1 - q / 0.4, C);
      }
      if (q >= 0 && q < 0.2) {
        const k = q / 0.2, rx = 2 + 7 * ease.outCubic(k), ry = 4 + 12 * ease.outCubic(k);
        for (let a = 0; a < TAU; a += 0.05) p.dot(TX + 4 + 10 * k + Math.cos(a) * rx, TY + Math.sin(a) * ry, k < 0.3 ? WHITE : C[5], 1.15 - k);
      }
      ps.draw(p);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i4twvty=__r(1);const Particles=__i4twvty.Particles;const Lights=__i4twvty.Lights;const P=__i4twvty.P;const Rng=__i4twvty.Rng;const fit=__i4twvty.fit;const clamp=__i4twvty.clamp;const smooth=__i4twvty.smooth;const rng=__i4twvty.rng;const TAU=__i4twvty.TAU;const WHITE=__i4twvty.WHITE;const hex=__i4twvty.hex;const mix=__i4twvty.mix;
const __ibivwjn=__r(42);const VOLT=__ibivwjn.VOLT;const zigzag=__ibivwjn.zigzag;const stroke=__ibivwjn.stroke;const crackle=__ibivwjn.crackle;
const meta = {
  name: "Zap hit",
  desc: "A contact zap: an arc snaps in from the left, the hit point overloads into a knot of tiny crackling zigzags, a fern of burn marks glows outward, sparks jink away, ozone puffs.",
  tags: ["lightning", "electric", "hit", "impact", "combat", "directional", "one-shot"],
  size: [144, 112],
  origin: [76, 56],
  duration: 0.9,
  loop: false,
  fps: 30,
  bg: "dark",
  options: { palette: VOLT, seed: 3 },
};
const SNAP = 0.05, ASH = hex("#6a6680");

function fern(R) {
  const out = [];
  const grow = (x, y, a, len, w, d, depth) => {
    const pts = [[x, y, d]];
    let side = R.sign();
    for (let s = 0; s < len; s += 1.4) {
      a += R.range(-0.3, 0.3);
      x += Math.cos(a) * 1.4;
      y += Math.sin(a) * 1.4;
      d += 1.4;
      pts.push([x, y, d]);
      if (depth < 2 && s > 2 && R.chance(0.24)) {
        side = -side;
        grow(x, y, a + side * R.range(0.55, 1.05), (len - s) * R.range(0.3, 0.55), w * 0.6, d, depth + 1);
      }
    }
    out.push({ pts, w });
  };
  for (let i = 0; i < 6; i++) grow(0, 0, (i / 6) * TAU + R.range(-0.35, 0.35), R.range(18, 32), 1, 0, 0);
  return out;
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), ps = new Particles({ rng: R }), lights = new Lights();
  const tree = fern(R), Y0 = R.range(-14, 6);

  const kinked = Array.from({ length: 16 }, () => {
    const a = R.range(-1.2, 1.2) + (R.chance(0.7) ? 0 : Math.PI), sp = R.range(130, 250);
    return { x: 0, y: 0, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 40, life: R.range(0.2, 0.36), age: -SNAP, next: R.range(0.02, 0.05), trail: [] };
  });
  let t = 0, hit = false;
  return {
    update(dt) {
      t += dt;
      if (!hit && t >= SNAP) {
        hit = true;
        lights.add(0, 0, 60, C[4], 0.7, 0.3);
        lights.add(0, 0, 14, WHITE, 0.5, 0.07);
        for (let i = 0; i < 3; i++) ps.spawn(P.SMOKE, R.range(-3, 5), R.range(-4, 2), R.range(-5, 8), -R.range(8, 16), R.range(0.55, 0.75), mix(ASH, C[4], 0.3), R.range(2.5, 3.8), R.range(0.08, 0.16));
      }
      for (const s of kinked) {
        if ((s.age += dt) < 0 || s.age >= s.life) continue;
        if ((s.next -= dt) <= 0) {
          s.next = R.range(0.025, 0.055);
          const sp = Math.hypot(s.vx, s.vy), a = Math.atan2(s.vy, s.vx) + R.sign() * R.range(0.6, 1.3);
          s.vx = Math.cos(a) * sp;
          s.vy = Math.sin(a) * sp;
          s.trail.push([s.x, s.y]);
          if (s.trail.length > 4) s.trail.shift();
        }
        s.vx -= s.vx * 3 * dt;
        s.vy -= s.vy * 3 * dt - 140 * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      if (t < SNAP) return;

      const cool = smooth(0.45, 0.85, t), fade = 1 - smooth(0.78, 0.88, t);
      for (const br of tree)
        for (let i = 1; i < br.pts.length; i++) {
          const [x0, y0] = br.pts[i - 1], [x, y, d] = br.pts[i], age = t - SNAP - d / 260;
          if (age < 0) break;
          const k = Math.exp(-age / 0.22) - cool * 0.3, c = k > 0.75 ? WHITE : k > 0.45 ? C[6] : k > 0.25 ? C[5] : k > 0.1 ? C[4] : k > -0.05 ? C[2] : C[1];
          p.line(x0, y0, x, y, c, fade);
          if (br.w >= 1 && d < 9) p.line(x0 + 1, y0, x + 1, y, k > 0.45 ? C[5] : C[2], fade);
          if ((i & 3) === 0 && k > 0) p.glow(x, y, 5, C[5], 0.35 * k * fade);
        }
      ps.draw(p, "back");
    },
    draw(p) {
      const f = Math.floor(t * 30 + 1e-4);

      if (t < 0.32) {
        const r = rng(o.seed, 2, f), b = zigzag(r, -66, Y0, 0, 0, 0.22, 0.35), u = clamp(t / SNAP);
        const k = t < SNAP ? 1 : t < 0.2 ? (f % 2 ? 0.7 : 1) : 0.55 * (1 - (t - 0.2) / 0.12);
        stroke(p, u < 1 ? { paths: [b.paths[0]] } : b, k, C, t < SNAP + 0.034 ? 0.95 : 0.7, { upTo: u, hero: t >= SNAP && t < SNAP + 0.034 });
        if (u < 1) {
          const tp = b.paths[0].pts, [hx, hy] = tp[Math.floor(u * (tp.length - 1))];
          p.circle(hx, hy, 2, WHITE);
          p.glow(hx, hy, 14, C[5], 0.6);
        }
      }

      if (t >= SNAP && t < 0.45) {
        const a = (t - SNAP) / 0.4, r = rng(o.seed, 5, f), R0 = 8 * (1 - a * 0.6), m = Math.round(11 * (1 - a * 0.5));
        for (let i = 0; i < m; i++) {
          const ang = r.range(0, TAU), d0 = r.range(0.5, R0 * 0.5), ang2 = ang + r.range(-1.2, 1.2), d1 = r.range(R0 * 0.55, R0);
          crackle(p, zigzag(r, Math.cos(ang) * d0, Math.sin(ang) * d0, Math.cos(ang2) * d1, Math.sin(ang2) * d1, 0.5, 0), 0.75 * (1 - a) + 0.25, C, 0.25);
        }
        p.circle(0, 0, 3 * (1 - a) + 1, C[5]);
        p.circle(0, 0, 2 * (1 - a) + 0.5, WHITE);
        p.glow(0, 0, 20, C[4], 0.55 * (1 - a));
        if (t < SNAP + 0.07) p.glow(0, 0, 9, WHITE, 0.4);
      }

      for (const s of kinked) {
        if (s.age < 0 || s.age >= s.life) continue;
        const k = 1 - s.age / s.life, path = [...s.trail, [s.x, s.y]];
        for (let i = 0; i < path.length - 1; i++) p.line(path[i][0], path[i][1], path[i + 1][0], path[i + 1][1], i === path.length - 2 ? (k > 0.5 ? WHITE : C[6]) : k > 0.5 ? C[5] : C[4], 0.6 + 0.4 * (i / path.length));
        p.px(s.x, s.y, k > 0.4 ? WHITE : C[5]);
        p.glow(s.x, s.y, 4, C[5], 0.4 * k);
      }

      if (t >= SNAP) p.glow(0, 0, 40 * Math.max(0, 1 - t / 0.85), C[3], 0.45 * Math.exp(-(t - SNAP) * 5) * (f % 2 ? 0.7 : 1));
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"rand",{enumerable:true,configurable:true,get:()=>rand});Object.defineProperty(__e,"rng",{enumerable:true,configurable:true,get:()=>rng});Object.defineProperty(__e,"hash",{enumerable:true,configurable:true,get:()=>hash});Object.defineProperty(__e,"Rng",{enumerable:true,configurable:true,get:()=>Rng});Object.defineProperty(__e,"clamp",{enumerable:true,configurable:true,get:()=>clamp});Object.defineProperty(__e,"VOLT",{enumerable:true,configurable:true,get:()=>VOLT});Object.defineProperty(__e,"PLASMA",{enumerable:true,configurable:true,get:()=>PLASMA});Object.defineProperty(__e,"SOOT",{enumerable:true,configurable:true,get:()=>SOOT});Object.defineProperty(__e,"zigzag",{enumerable:true,configurable:true,get:()=>zigzag});Object.defineProperty(__e,"bowed",{enumerable:true,configurable:true,get:()=>bowed});Object.defineProperty(__e,"bend",{enumerable:true,configurable:true,get:()=>bend});Object.defineProperty(__e,"stroke",{enumerable:true,configurable:true,get:()=>stroke});Object.defineProperty(__e,"crackle",{enumerable:true,configurable:true,get:()=>crackle});Object.defineProperty(__e,"trace",{enumerable:true,configurable:true,get:()=>trace});Object.defineProperty(__e,"scorch",{enumerable:true,configurable:true,get:()=>scorch});Object.defineProperty(__e,"heat",{enumerable:true,configurable:true,get:()=>heat});Object.defineProperty(__e,"flight",{enumerable:true,configurable:true,get:()=>flight});Object.defineProperty(__e,"spark",{enumerable:true,configurable:true,get:()=>spark});Object.defineProperty(__e,"puff",{enumerable:true,configurable:true,get:()=>puff});Object.defineProperty(__e,"frameRng",{enumerable:true,configurable:true,get:()=>frameRng});
const __iygo588=__r(1);const clamp=__iygo588.clamp;const rand=__iygo588.rand;const rng=__iygo588.rng;const hash=__iygo588.hash;const Rng=__iygo588.Rng;const GRAVITY=__iygo588.GRAVITY;const FIRE_RAMP=__iygo588.FIRE_RAMP;const SMOKE_RAMP=__iygo588.SMOKE_RAMP;const hex=__iygo588.hex;const mix=__iygo588.mix;
const VOLT = ["#120a33", "#2a1b78", "#4630c0", "#5a62f0", "#58a6ff", "#9ed8ff", "#e4f6ff", "#ffffff"];
const PLASMA = ["#ffffff", "#c8f8ff", "#7ff3ff", "#1ab8e6"];
const SOOT = hex("#110c16"), SOOT2 = hex("#1c1522");
function zigzag(R, x0, y0, x1, y1, jag = 0.32, forks = 0.35, w = 1, depth = 0) {
  const out = { paths: [] }, L = Math.hypot(x1 - x0, y1 - y0);
  let pts = [[x0, y0], [x1, y1]], off = L * jag;
  while (pts.length < 2 + L / 3) {
    const nxt = [pts[0]];
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i], [bx, by] = pts[i + 1], l = Math.hypot(bx - ax, by - ay) || 1, o = R.range(-off, off);
      nxt.push([(ax + bx) / 2 + (-(by - ay) / l) * o, (ay + by) / 2 + ((bx - ax) / l) * o], [bx, by]);
    }
    pts = nxt;
    off *= 0.52;
  }
  out.paths.push({ pts, w });
  if (depth < 2)
    for (let i = 2; i < pts.length - 3; i++)
      if (R.chance(forks / (1 + depth) / Math.max(4, pts.length / 6))) {
        const [ax, ay] = pts[i], [bx, by] = pts[Math.min(pts.length - 1, i + 3)];
        const a = Math.atan2(by - ay, bx - ax) + R.sign() * R.range(0.35, 0.9), l = (L - (i / pts.length) * L) * R.range(0.25, 0.55);
        out.paths.push(...zigzag(R, ax, ay, ax + Math.cos(a) * l, ay + Math.sin(a) * l, jag * 1.1, forks, w * 0.55, depth + 1).paths);
      }
  return out;
}
function bowed(R, x0, y0, x1, y1, bow, jag = 0.22, forks = 0.4) {
  const L = Math.hypot(x1 - x0, y1 - y0) || 1, nx = -(y1 - y0) / L, ny = (x1 - x0) / L;
  const mx = (x0 + x1) / 2 + nx * bow + R.range(-2, 2), my = (y0 + y1) / 2 + ny * bow;
  const a = zigzag(R, x0, y0, mx, my, jag, forks), b = zigzag(R, mx, my, x1, y1, jag, forks);
  return { paths: [{ pts: [...a.paths[0].pts, ...b.paths[0].pts.slice(1)], w: 1 }, ...a.paths.slice(1), ...b.paths.slice(1)] };
}
function bend(b, fn) {
  return { paths: b.paths.map((q) => ({ w: q.w, pts: q.pts.map(([x, y]) => fn(x, y)) })) };
}


const N = 1024, HALF = 512, GRID = new Uint8Array(N * N), HIT = [];
function mark(x, y, lvl) {
  const X = Math.floor(x) + HALF, Y = Math.floor(y) + HALF;
  if (X < 0 || Y < 0 || X >= N || Y >= N) return;
  const i = Y * N + X, v = GRID[i];
  if (!v) HIT.push(i);
  if (lvl > v) GRID[i] = lvl;
}
function stamp(x, y, r, lvl) {
  if (r <= 0.5) return mark(Math.round(x), Math.round(y), lvl);
  const r2 = r * r;
  for (let py = Math.floor(y - r); py <= Math.ceil(y + r); py++) {
    const dy = py + 0.5 - y;
    for (let px = Math.floor(x - r); px <= Math.ceil(x + r); px++) {
      const dx = px + 0.5 - x;
      if (dx * dx + dy * dy <= r2) mark(px, py, lvl);
    }
  }
}
function flush(p, cols, alphas) {
  for (const i of HIT) {
    const v = GRID[i];
    GRID[i] = 0;
    const x = (i % N) - HALF, y = ((i / N) | 0) - HALF, a = alphas ? alphas[v - 1] : 1;
    if (a >= 1) p.px(x, y, cols[v - 1]);
    else if (a > 0) p.dot(x, y, cols[v - 1], a);
  }
  HIT.length = 0;
}
const walk = (pts, fn) => {
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i], [bx, by] = pts[i + 1], l = Math.max(1, Math.hypot(bx - ax, by - ay));
    for (let d = 0; d <= l; d += 0.5) fn(ax + ((bx - ax) * d) / l, ay + ((by - ay) * d) / l, i);
  }
};
function stroke(p, b, k, C, s = 1, o = {}) {
  if (k <= 0.02) return;
  const lk = o.light ?? 0.5;
  for (const q of b.paths) {
    const trunk = q.w >= 1;
    if (!trunk && k < 0.5) continue;
    const rh = (trunk ? (k > 0.6 ? 2.1 : 1.6) : 1.1) * s, rb = (trunk ? (k > 0.6 ? 1.3 : 0.8) : 0.5) * s;
    const pts = o.upTo !== undefined && trunk ? q.pts.slice(0, Math.max(2, Math.ceil(q.pts.length * o.upTo))) : q.pts;
    walk(pts, (x, y) => {
      stamp(x, y, rh, 1);
      stamp(x, y, rb, trunk ? 3 : 2);
      if (trunk && k > 0.3) o.core ? stamp(x, y, o.core, 4) : mark(x, y, 4);
    });
    for (let i = 0; i < pts.length - 1; i += 3) if (o.minY === undefined || pts[i][1] > o.minY) p.glow(pts[i][0], pts[i][1], (trunk ? 14 : 7) * s, C[4], lk * k * q.w);
  }
  const a = o.a ?? 1;
  flush(p, o.hero ? [C[3], C[6], C[7], C[7]] : [C[2], C[4], C[5], C[7]], [a, a, a, a]);
}
function crackle(p, b, k, C, glowK = 0.5, a = 1) {
  if (k <= 0.02) return;
  for (const q of b.paths) {
    const thick = q.w >= 1;
    walk(q.pts, (x, y) => {
      if (k > 0.45 && thick) for (const [dx, dy] of CROSS) mark(x + dx * 1.5, y + dy * 1.5, 1);
      if (k > 0.25 && (thick || q.w > 0.4)) (mark(x + 1, y, 2), mark(x, y + 1, 2));
      mark(x, y, thick && k > 0.3 ? 4 : 3);
    });
    for (let i = 0; i < q.pts.length - 1; i += 3) p.glow(q.pts[i][0], q.pts[i][1], (thick ? 9 : 5) * (0.5 + k * 0.5), C[4], glowK * k * q.w);
  }
  flush(p, [C[3], C[5], C[5], C[7]], [Math.min(1, (k - 0.45) * 1.6) * a, a, a, a]);
}
const CROSS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function trace(p, pts, c, a = 1, from = 0, to = pts.length - 1) {
  for (let i = Math.max(0, from); i < Math.min(to, pts.length - 1); i++) p.line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], c, a);
}
function scorch(p, cx, cy, rx, T0, fade = 1, ry = Math.max(2.5, rx * 0.12)) {
  if (fade <= 0) return;
  for (let y = Math.floor(cy); y <= cy + ry; y++)
    for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
      const dx = (x + 0.5 - cx) / rx, dy = (y + 0.5 - cy) / ry, d = Math.sqrt(dx * dx + dy * dy);
      if (d > 1) continue;
      const n = rand(x, y, 41), T = T0 * (1.25 - d) - n * 0.35;
      if (T > 0.06) {
        const c = FIRE_RAMP[Math.min(FIRE_RAMP.length - 1, Math.floor((1 - Math.min(1, T)) * (FIRE_RAMP.length - 1)))];
        p.dot(x, y, c, fade);
        if ((x & 3) === 0) p.glow(x + 0.5, y, 6, c, 0.18 * T * fade);
      } else p.dot(x, y, d < 0.5 ? SOOT : SOOT2, (d < 0.95 - n * 0.3 ? 1 : 1 - d) * fade);
    }
}
const heat = (T) => (T > 0.06 ? FIRE_RAMP[Math.min(FIRE_RAMP.length - 1, Math.floor((1 - Math.min(1, T)) * (FIRE_RAMP.length - 1)))] : 0);
function flight(x, y, vx, vy, age, { g = 0.45, drag = 2.2, floor = Infinity, bounce = 0.45 } = {}) {
  const dt = 1 / 120;
  for (let s = 0; s < age; s += dt) {
    const h = Math.min(dt, age - s);
    vy += GRAVITY * g * h;
    vx -= vx * drag * h;
    vy -= vy * drag * h;
    const ny = y + vy * h;
    x += vx * h;
    if (vy > 0 && y <= floor && ny >= floor) (vy = -vy * bounce), (vx *= 0.7), (y = floor - 0.25);
    else y = ny;
  }
  return [x, y, vx, vy];
}
function spark(p, x, y, vx, vy, k, S) {
  const sp = Math.hypot(vx, vy) || 1, ux = vx / sp, uy = vy / sp, head = k > 0.6 ? S[0] : k > 0.3 ? S[1] : S[2], len = Math.min(9, 1 + sp * 0.022);
  p.line(x - ux * len, y - uy * len, x - ux * len * 0.4, y - uy * len * 0.4, k > 0.5 ? head : S[S.length - 1]);
  p.line(x - ux * len * 0.45, y - uy * len * 0.45, x, y, head);
  p.glow(x, y, 3, head, 0.45 * k);
}
function puff(p, x, y, size, u, c) {
  const k = 1 - u, r = size * (0.65 + Math.min(1, u * 2.5) * 0.45 + u * 0.4), a = Math.min(1, u * 12) * Math.min(1, k * 2.4) * 0.58;
  if (a <= 0.01) return;
  const col = mix(c, SMOKE_RAMP[Math.min(SMOKE_RAMP.length - 1, Math.floor(u * SMOKE_RAMP.length))], u);
  p.disc(x, y, r, col, a * 0.45);
  p.disc(x + r * 0.05, y + r * 0.06, r * 0.74, col, a * 0.62);
  if (u < 0.5) p.disc(x - r * 0.22, y - r * 0.3, r * 0.5, mix(col, hex("#ffffff"), 0.12), a * 0.4 * (1 - u * 2));
}
const frameRng = (seed, f, salt = 0) => rng(seed, salt, f);
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __idz1qvj=__r(1);const fit=__idz1qvj.fit;const cycle=__idz1qvj.cycle;const tileNoise=__idz1qvj.tileNoise;const clamp=__idz1qvj.clamp;const smooth=__idz1qvj.smooth;const TAU=__idz1qvj.TAU;const WHITE=__idz1qvj.WHITE;
const __igwira1=__r(44);const WATER=__igwira1.WATER;const bead=__igwira1.bead;
const meta = {
  name: "Water jet",
  desc: "A pressurised stream blasts right: a tight glassy rod with surges running down it that swells, roughens, bends under its weight and breaks into chunks, spray and mist.",
  tags: ["water", "jet", "stream", "hose", "spray", "directional", "loop"],
  size: [188, 80],
  origin: [14, 32],
  duration: 1,
  loop: true,
  fps: 30,
  bg: "dark",
  options: { palette: WATER, length: 118, seed: 3 },
};
const D = meta.duration, G = 520, SPEED = 260;

const drop = (x, L) => (x / L) ** 2 * 9;
const thick = (x, L) => 2.6 + 5.4 * Math.pow(x / L, 1.1);
function draw(p, t, o) {
  const C = fit(o.palette, 8), ph = t / D, L = o.length, S = o.seed, T = ph * TAU;


  for (let X = 0; X <= L + 3; X++) {
    const x = X + 0.5, u = x / L;
    if (u > 1) break;
    const yc = drop(x, L), rough = smooth(0.25, 1, u), sd = ((((x - ph * SPEED * 2) % 130) + 130) % 130) - 65;
    const w0 = thick(x, L) + Math.exp(-(sd * sd) / 90) * 1.4 * (1 - u * 0.5);
    const up = w0 + tileNoise(x * 0.18 - ph * 30, 9, 30, 0, S + 1) * 2.2 * rough, dn = w0 + tileNoise(x * 0.18 - ph * 30, 3, 30, 0, S + 1) * 2.2 * rough;
    for (let Y = Math.floor(yc - up); Y <= Math.ceil(yc + dn); Y++) {
      const y = Y + 0.5, q = (y - yc) / Math.max(0.8, y < yc ? up : dn), aq = Math.abs(q);
      if (aq > 1) continue;
      if (u > 0.55 && tileNoise(x * 0.12 - ph * 25, (y - yc) * 0.25, 25, 0, S + 2) < -0.9 + 1.6 * smooth(0.55, 1, u)) continue;
      const streak = tileNoise(x * 0.06 - ph * 40, Math.floor(y - yc + 20) * 1.7, 40, 0, S);
      let lvl = aq < 0.2 ? 0 : aq < 0.48 ? 1 : aq < 0.78 ? 2 : 3;
      if (streak > 0.35) lvl = Math.max(0, lvl - 1);
      if (q > 0.4) lvl = Math.min(3, lvl + 1);
      p.px(X, Y, [WHITE, C[6], C[5], C[4]][lvl]);
      if (lvl === 0) p.light(x, y, C[5], 0.12);
    }
  }

  const fl = 0.85 + 0.15 * Math.sin(T * 6);
  p.circle(0, 0, 4.4 * fl, C[5]);
  p.circle(0, 0, 3.4 * fl, C[6]);
  p.circle(0, 0, 2.2 * fl, WHITE);
  for (let a = 0; a < TAU; a += 0.35) p.dot(Math.cos(a + T * 2) * 5.2 * fl, Math.sin(a + T * 2) * 5.2 * fl, C[5], 0.6);
  p.glow(0, 0, 24, C[5], 0.6 * fl);
  p.glow(0, 0, 8, WHITE, 0.4 * fl);

  for (let k = 0; k < 6; k++) {
    const x = L * 0.82 + ((k * 13 + ph * SPEED) % 78), y = drop(Math.min(x, L), L) + (x > L ? ((x - L) / 60) ** 2 * 10 : 0) + Math.sin(k * 2.1) * 1.5;
    if (x < L + 34) bead(p, x, y, SPEED, 40, k % 3 === 0 ? 3 : 2, C);
  }

  cycle(t, D, 70, S + 3, (g) => g.range(0.2, 0.42), (age, life, r) => {
    const f = Math.sqrt(r.next()), x0 = L * (0.3 + 0.7 * f), y0 = drop(x0, L) + r.range(-1, 1) * thick(x0, L);
    const vx = r.range(150, 270) * (0.55 + 0.45 * f), vy = r.range(-1, 1) * 110 * f + r.range(-10, 20);
    const x = x0 + vx * age, y = y0 + vy * age + 0.5 * G * age * age, k = age / life;
    if (x > L + 50 || y > 40 || y < -28 || (k > 0.75 && r.next() < (k - 0.75) * 4)) return;
    if (r.next() < 0.45) p.px(x, y, k < 0.5 ? WHITE : C[6]);
    else bead(p, x, y, vx, vy + G * age, r.next() < 0.2 ? 2 : 1, C);
  });

  cycle(t, D, 12, S + 4, (g) => g.range(0.7, 1), (age, life, r) => {
    const k = age / life, x = L * r.range(0.7, 1) + age * r.range(20, 45), y = drop(Math.min(x, L), L) + r.range(-5, 5) + age * r.range(4, 14);
    const rad = r.range(3, 5) + k * r.range(5, 9), a = r.range(0.1, 0.18) * Math.min(1, k / 0.15) * Math.pow(1 - k, 1.5);
    p.disc(x, y, rad, C[6], (d) => a * (1 - d * d));
  });

  for (let x = 0; x < L; x += 10) p.glow(x, drop(x, L), 14 + x * 0.1, C[4], 0.26 * (1 - (x / L) * 0.5));
  p.glow(L * 0.9, drop(L * 0.9, L), 26, C[5], 0.22);
}
},
function(__e){Object.defineProperty(__e,"WATER",{enumerable:true,configurable:true,get:()=>WATER});Object.defineProperty(__e,"ROCK",{enumerable:true,configurable:true,get:()=>ROCK});Object.defineProperty(__e,"bead",{enumerable:true,configurable:true,get:()=>bead});Object.defineProperty(__e,"Drops",{enumerable:true,configurable:true,get:()=>Drops});Object.defineProperty(__e,"ring",{enumerable:true,configurable:true,get:()=>ring});Object.defineProperty(__e,"Ripples",{enumerable:true,configurable:true,get:()=>Ripples});Object.defineProperty(__e,"lace",{enumerable:true,configurable:true,get:()=>lace});Object.defineProperty(__e,"Mist",{enumerable:true,configurable:true,get:()=>Mist});Object.defineProperty(__e,"billow",{enumerable:true,configurable:true,get:()=>billow});Object.defineProperty(__e,"pebble",{enumerable:true,configurable:true,get:()=>pebble});Object.defineProperty(__e,"rock",{enumerable:true,configurable:true,get:()=>rock});
const __iqytr7o=__r(1);const noise=__iqytr7o.noise;const noise2=__iqytr7o.noise2;const TAU=__iqytr7o.TAU;const WHITE=__iqytr7o.WHITE;const hex=__iqytr7o.hex;
const WATER = ["#0a1630", "#123063", "#1b5596", "#2a7fc4", "#45a9e3", "#86d3f5", "#cdf1ff", "#ffffff"];
const ROCK = ["#141219", "#221f2b", "#34303f", "#4a4558", "#655f74", "#8a8498"];
function bead(p, x, y, vx, vy, s, C, a = 1) {
  const sp = Math.hypot(vx, vy) || 1, ux = vx / sp, uy = vy / sp, tail = Math.min(5, sp * 0.011);
  if (tail >= 1) p.line(x - ux * (tail + 1), y - uy * (tail + 1), x - ux * 1.2, y - uy * 1.2, (u) => (u < 0.45 ? C[3] : s > 1 ? C[5] : C[4]), a);
  if (s >= 3) {
    p.circle(x, y, 1.75, C[4], a);
    p.circle(x - 0.25, y - 0.25, 1.15, C[6], a);
    p.dot(x - 0.7, y - 0.7, WHITE, a);
  } else if (s >= 2) {
    const X = Math.floor(x), Y = Math.floor(y);
    p.dot(X, Y, WHITE, a);
    p.dot(X + 1, Y, C[6], a);
    p.dot(X, Y + 1, C[5], a);
    p.dot(X + 1, Y + 1, C[4], a);
  } else p.dot(x, y, sp > 160 ? C[6] : C[5], a);
}
class Drops {
  constructor({ sy = 0.22, g = 820, drag = 0.35, onLand = null } = {}) {
    this.sy = sy;
    this.g = g;
    this.drag = drag;
    this.onLand = onLand;
    this.list = [];
  }
  add(d) {
    const life = d.life ?? 4;
    this.list.push({ x: 0, z: 0, h: 0, vx: 0, vz: 0, vh: 0, s: 1, delay: 0, ...d, life, max: life });
  }
  get count() {
    return this.list.length;
  }
  update(dt) {
    const k = this.drag * dt;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const d = this.list[i];
      if (d.delay > 0) {
        d.delay -= dt;
        continue;
      }
      if ((d.life -= dt) <= 0) {
        this.list.splice(i, 1);
        continue;
      }
      d.vh -= this.g * dt;
      d.vx -= d.vx * k;
      d.vz -= d.vz * k;
      d.vh -= d.vh * k * 0.5;
      d.x += d.vx * dt;
      d.z += d.vz * dt;
      d.h += d.vh * dt;
      if (d.h <= 0 && d.vh < 0) {
        d.h = 0;
        this.list.splice(i, 1);
        this.onLand?.(d);
      }
    }
  }
  draw(p, C, layer) {
    for (const d of this.list) {
      if (d.delay > 0 || (layer === "back" && d.z >= 0) || (layer === "front" && d.z < 0)) continue;
      const x = d.x, y = d.z * this.sy - d.h;
      bead(p, x, y, d.vx, d.vz * this.sy - d.vh, d.s, C, Math.min(1, d.life / 0.2));
      p.glow(x, y, 2.5 + d.s, C[5], 0.1 + 0.05 * d.s);
    }
  }
}
function ring(p, cx, cy, r, sy, k, C, { n = 2, gap = 3, half = 0, hot = false, glint = 0, seed = 0, wob = 0 } = {}) {
  if (k <= 0.02 || r < 0.5) return;
  for (let j = 0; j < n; j++) {
    const rr = r - j * gap;
    if (rr < 0.6) break;
    const kj = k * (1 - j * 0.42), m = Math.max(6, Math.ceil(rr * TAU * 1.3)), need = 1.15 - 2.3 * Math.min(1, kj * 1.25);
    for (let i = 0; i < m; i++) {
      const a = (i / m) * TAU, s = Math.sin(a), near = s > 0;
      if ((half > 0 && !near) || (half < 0 && near)) continue;

      if (noise(a * 4.7 + seed * 13.1 + j * 5.3, seed) * 0.65 + noise(a * 11.3 + seed * 7.7, seed + 3) * 0.35 < need) continue;

      const lit = kj * (near ? 1 : 0.7) * (0.88 - 0.12 * Math.cos(a));
      const c = hot && near && j === 0 ? WHITE : C[lit > 0.7 ? 6 : lit > 0.38 ? 5 : 4], ra = wob ? rr + wob * noise(a * 2.6 + seed * 1.9 + j, seed + 11) : rr;
      const x = cx + Math.cos(a) * ra, y = cy + s * ra * sy;
      p.dot(x, y, c);
      if (j === 0) p.light(x, y, C[4], 0.3 * lit);
    }
  }
  if (glint > 0 && half >= 0) {
    const x = cx + Math.cos(2.05) * r, y = cy + Math.sin(2.05) * r * sy;
    p.px(x, y, WHITE);
    p.glow(x, y, 3 + glint * 2, C[5], 0.35 * glint);
  }
}
class Ripples {
  constructor({ sy = 0.22 } = {}) {
    this.sy = sy;
    this.list = [];
  }
  add(x, z, r0, r1, life, o = {}) {
    this.list.push({ x, z, r0, r1, life, age: -(o.delay ?? 0), k: o.k ?? 1, n: o.n ?? 2, gap: o.gap ?? 3, hot: o.hot ?? 0.1, glint: o.glint ?? 0, seed: (this.seq = (this.seq ?? 0) + 1) });
  }
  get count() {
    return this.list.length;
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) if ((this.list[i].age += dt) >= this.list[i].life) this.list.splice(i, 1);
  }
  draw(p, C, half = 0) {
    for (const q of this.list) {
      if (q.age < 0) continue;
      const u = q.age / q.life, r = q.r0 + (q.r1 - q.r0) * (1 - Math.pow(1 - u, 2.6)), k = q.k * Math.pow(1 - u, 1.7);
      ring(p, q.x, q.z * this.sy, r, this.sy, k, C, { n: q.n, gap: q.gap * (0.55 + 0.6 * u), half, hot: q.age < q.hot, glint: q.glint * k, seed: q.seed });
    }
  }
}
function lace(p, cx, cy, rx, ry, k, C, t, seed = 0) {
  if (k <= 0.01 || rx < 1) return;
  const sy = ry / rx;
  p.shade(cx - rx, cy - ry, cx + rx, cy + ry, (x, y, o) => {
    const dx = (x - cx) / rx, dy = (y - cy) / ry, d = dx * dx + dy * dy;
    if (d > 1) return;
    const u = (x - cx) * 0.36, v = ((y - cy) / sy) * 0.36;
    const n = noise2(u + seed * 7.13, v - t * 0.35, seed), m = noise2(u * 2.2 - t * 0.3, v * 2.2 + seed * 3.1, seed + 9);
    const net = 1 - Math.abs(n) * 4.6 + m * 0.3, need = 1.02 - k * (1.15 - d * 0.9);
    if (net < need) return;
    o.c = net > need + 0.4 ? WHITE : C[6];
  });
}
class Mist {
  constructor() {
    this.list = [];
  }
  add(x, y, vx, vy, r0, r1, life, c, a = 0.25, delay = 0) {
    this.list.push({ x, y, vx, vy, r0, r1, life, max: life, c: hex(c), a, delay });
  }
  get count() {
    return this.list.length;
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const m = this.list[i];
      if (m.delay > 0) {
        m.delay -= dt;
        continue;
      }
      if ((m.life -= dt) <= 0) {
        this.list.splice(i, 1);
        continue;
      }
      m.vx -= m.vx * 2.4 * dt;
      m.vy -= m.vy * 2.4 * dt + 7 * dt;
      m.x += m.vx * dt;
      m.y += m.vy * dt;
    }
  }
  draw(p, haze) {
    for (const m of this.list) {
      if (m.delay > 0) continue;
      const age = 1 - m.life / m.max, r = m.r0 + (m.r1 - m.r0) * (1 - Math.pow(1 - age, 2.2));
      const a = m.a * Math.min(1, age / 0.12) * Math.pow(1 - age, 1.4);
      if (a < 0.01) continue;
      p.disc(m.x, m.y, r, m.c, (d) => a * (1 - d * d) * (1 - d * 0.5));
      p.disc(m.x - r * 0.2, m.y - r * 0.32, r * 0.55, WHITE, (d) => a * 0.25 * (1 - d) * (1 - d));
      if (haze) p.glow(m.x, m.y, r * 1.5, haze, (0.16 * a) / m.a * Math.min(1, m.a * 3));
    }
  }
}
function billow(p, x, y, r, C, a = 1) {
  if (r < 0.9) return p.dot(x, y, C[6], a);
  p.circle(x + r * 0.12, y + r * 0.2, r, C[4], a);
  p.circle(x, y, r * 0.84, C[6], a);
  if (r > 1.6) p.circle(x - r * 0.3, y - r * 0.32, r * 0.46, WHITE, a);
}
function pebble(p, x, y, r, ST) {
  p.shade(x - r - 1, y - r - 1, x + r + 1, y + r + 1, (px, py, o) => {
    const dx = px - x, dy = py - y, d = Math.hypot(dx * 1.1, dy);
    if (d > r + 0.8) return;
    const lit = (dx + dy) / Math.max(0.5, r);
    o.c = d > r ? ST[0] : lit < -0.7 ? ST[5] : lit < 0.2 ? ST[4] : lit < 0.8 ? ST[3] : ST[2];
  });
}
const rock = () => ROCK.map(hex);
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __inl4lo3=__r(1);const Particles=__inl4lo3.Particles;const Lights=__inl4lo3.Lights;const P=__inl4lo3.P;const Rng=__inl4lo3.Rng;const fit=__inl4lo3.fit;const sparkle=__inl4lo3.sparkle;const clamp=__inl4lo3.clamp;const smooth=__inl4lo3.smooth;const ease=__inl4lo3.ease;const rand=__inl4lo3.rand;const noise=__inl4lo3.noise;const TAU=__inl4lo3.TAU;const WHITE=__inl4lo3.WHITE;
const __ie82rex=__r(44);const WATER=__ie82rex.WATER;const Drops=__ie82rex.Drops;const Ripples=__ie82rex.Ripples;const Mist=__ie82rex.Mist;const bead=__ie82rex.bead;const lace=__ie82rex.lace;const pebble=__ie82rex.pebble;const rock=__ie82rex.rock;
const meta = {
  name: "Splash",
  desc: "A stone drops into still water: a white hit, a crown that tears into droplets arcing out to plink down with rings, a jet that bounces back, foam and drifting mist.",
  tags: ["water", "splash", "impact", "drop", "liquid", "one-shot"],
  size: [176, 100],
  origin: [88, 78],
  duration: 2.5,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: WATER, stone: true, seed: 3 },
};
const SY = 0.22, HIT = 0.16, G = 820, FINGERS = 12, JET = 0.3, TEAR = 0.11;

const height = (u) => 19 * ease.outCubic(clamp(u / 0.09)) * (1 - ease.inQuad(clamp((u - 0.12) / 0.3)));
const foot = (u) => 3 + 7.5 * ease.outCubic(clamp(u / 0.45));
const lip = (u) => foot(u) + height(u) * 0.42 + 3 * ease.outCubic(clamp(u / 0.25));

const jetH = (u) => 26 * (ease.outCubic(clamp(u / 0.12)) - ease.inQuad(clamp((u - 0.15) / 0.28)));
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), ST = rock(), phi = R.range(0, TAU);
  const ps = new Particles({ rng: R }), mist = new Mist(), lights = new Lights(), rings = new Ripples({ sy: SY });
  const plinks = [], bubbles = [], spikes = Array.from({ length: FINGERS }, (_, k) => ({ a: ((k * TAU) / FINGERS + phi) % TAU, L: R.range(0.2, 0.36) }));
  const drops = new Drops({
    sy: SY,
    g: G,
    onLand: (d) => {

      rings.add(d.x, d.z, 0.6, 2 + d.s * 1.8, 0.34 + d.s * 0.1, { n: 1, k: 0.95, hot: 0.06 });
      plinks.push({ x: d.x, y: d.z * SY, s: d.s, age: 0 });
      if (d.s > 1 && !d.small)
        for (let i = 0; i < d.s; i++) {
          const a = R.range(0, TAU), v = R.range(10, 34);
          drops.add({ x: d.x, z: d.z, h: 0.5, vx: Math.cos(a) * v, vz: Math.sin(a) * v, vh: R.range(55, 110), s: 1, small: true, life: 1 });
        }
    },
  });
  let t = 0;
  const done = new Set(), once = (key, at) => !done.has(key) && t >= at && done.add(key);

  const scallop = (a, h) => h * (0.86 + 0.14 * noise(Math.cos(a) * 2.2 + Math.sin(a) * 1.3 + phi * 3, o.seed));


  function crown(p, back) {
    const u = t - HIT, h = height(u);
    if (u < 0 || h < 0.7) return;
    const r0 = foot(u), rt = lip(u), white = u < 0.045;
    const cells = new Map();
    const put = (x, y, c, a, rank) => {
      const X = Math.floor(x), Y = Math.floor(y), key = (Y + 4096) * 8192 + X + 4096, cur = cells.get(key);
      if (!cur || rank > cur.r) cells.set(key, { x: X, y: Y, c, a, r: rank });
    };
    const n = Math.ceil(rt * TAU * 1.6);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU, s = Math.sin(a), c = Math.cos(a);
      if (s < 0 !== back) continue;
      const lane = Math.floor(((a + phi) * rt) / 2.2), streak = rand(lane, 31) < 0.3, H = scallop(a, h);

      const keep = 1 - clamp((u - 0.13 - 0.14 * rand(lane, 7)) / 0.1), steps = Math.ceil(H * 1.4) + 2;
      for (let k = 0; k <= steps * keep; k++) {
        const v = k / steps, r = r0 + (rt - r0) * Math.pow(v, 2.2), x = c * r, y = s * r * SY - H * v;
        if (white) put(x, y, WHITE, 1, 3);
        else if (back) put(x, y, v > 0.72 ? (streak ? C[5] : C[4]) : streak ? C[3] : C[2], 1, 1);
        else if (Math.abs(c) > 0.9) put(x, y, c < 0 ? (Math.abs(c) > 0.97 ? WHITE : C[6]) : C[4], 1, 2);
        else if (v < 0.1) put(x, y, v < 0.05 ? WHITE : C[6], 1, 2);
        else if (streak) put(x, y, c < -0.2 ? C[6] : C[5], 1, 1);
        else put(x, y, c < 0 ? C[5] : C[4], 0.22, 0);
      }

      if (!white && keep >= 1) {
        const x = c * rt, y = s * rt * SY - H;
        put(x, y, back ? C[5] : c < 0.45 ? WHITE : C[6], 1, 3);
        if (!back && c < 0.2) put(x, y + 1, C[6], 1, 2);
      }
    }
    for (const q of cells.values()) {
      if (q.r === 0) p.blend(q.x, q.y, q.c, q.a);
      else p.px(q.x, q.y, q.c);
    }

    const reach = 1 - smooth(TEAR, TEAR + 0.1, u);
    for (const f of spikes) {
      if (Math.sin(f.a) < 0 !== back || reach <= 0) continue;
      const H = scallop(f.a, h), L = h * f.L * reach, x0 = Math.cos(f.a) * rt, y0 = Math.sin(f.a) * rt * SY - H, x1 = x0 + Math.cos(f.a) * L * 0.45, y1 = y0 - L;
      if (L >= 1) p.line(x0, y0, x1, y1, white ? WHITE : back ? C[4] : C[6]);
      if (u > 0.04 && u < TEAR) bead(p, x1 - (back ? 0 : 0.5), y1 - 1, 0, -1, back ? 1 : 2, C);
      if (!back && Math.sin(f.a) > 0.3) p.glow(x0, y0, 6, C[5], 0.22 * reach);
    }
  }
  function jet(p) {
    const u = t - HIT - JET, h = jetH(u);
    if (u < 0 || h < 0.8) return;
    const top = -h;

    p.ellipse(0, 0, 5, 2.4, (d, a) => (Math.sin(a) > 0 ? null : d < 0.5 ? WHITE : Math.cos(a) < 0 ? C[6] : C[5]));
    p.shade(-3, top - 2, 3, 0, (x, y, out) => {
      const v = clamp((y - top) / h), w = 1.15 + 1.5 * v * v * v, q = x / w;
      if (Math.abs(q) > 1) return;
      out.c = q < -0.5 ? C[6] : q < 0.3 ? WHITE : q < 0.72 ? C[5] : C[4];
    });
    if (u < 0.12) {

      p.circle(0, top - 1, 1.7, C[5]);
      p.circle(-0.3, top - 1.3, 1.1, C[6]);
      p.px(-1, top - 2, WHITE);
    }
    p.glowLine(0, -1, 0, top, 7, C[5], 0.3);
  }
  return {
    update(dt) {
      t += dt;
      if (once("hit", HIT)) {
        lights.add(0, -6, 52, C[5], 0.6, 0.45);
        lights.add(0, -4, 16, WHITE, 0.5, 0.08);
        rings.add(0, 0, 8, 56, 2.0, { n: 2, gap: 3.4, k: 1.35, hot: 0.16, glint: 1 });
        rings.add(0, 0, 5, 38, 1.7, { n: 1, k: 0.9, delay: 0.14 });

        for (let i = 0; i < 20; i++) {
          const a = R.range(0, TAU), v = R.range(50, 125);
          drops.add({ x: Math.cos(a) * 3, z: Math.sin(a) * 3, h: R.range(1, 6), vx: Math.cos(a) * v, vz: Math.sin(a) * v, vh: R.range(160, 270), s: R.chance(0.25) ? 2 : 1, delay: R.range(0, 0.04) });
        }

        for (let i = 0; i < 9; i++) {
          const s = i % 2 ? 1 : -1, x = s * R.range(4, 12);
          mist.add(x, -R.range(1, 7), s * R.range(25, 70), -R.range(4, 16), R.range(2.5, 4), R.range(7, 11), R.range(0.9, 1.5), R.chance(0.5) ? C[6] : C[5], R.range(0.3, 0.42), R.range(0, 0.1));
        }
      }
      if (once("spray", HIT + 0.04)) {
        for (let i = 0; i < 20; i++) {
          const a = R.range(0, TAU);
          ps.spawn(P.FLAKE, Math.cos(a) * 9, Math.sin(a) * 9 * SY - R.range(6, 15), Math.cos(a) * R.range(25, 90), -R.range(30, 100), R.range(0.7, 1.3), R.chance(0.5) ? WHITE : C[6], R.range(0.6, 1.5));
        }
        for (let i = 0; i < 5; i++) ps.spawn(P.STAR, R.range(-13, 13), -R.range(6, 20), 0, -4, R.range(0.25, 0.55), C[6], R.range(1, 2.4), R.range(0, 0.15));
      }
      if (once("tear", HIT + TEAR)) {

        const h = height(TEAR), rt = lip(TEAR);
        for (const f of spikes) {
          const a = f.a + R.range(-0.08, 0.08), v = R.range(32, 88), L = h * f.L;
          drops.add({ x: Math.cos(f.a) * (rt + L * 0.45), z: Math.sin(f.a) * rt, h: h + L + 1, vx: Math.cos(a) * v, vz: Math.sin(a) * v, vh: R.range(90, 190), s: R.chance(0.3) ? 3 : 2 });
        }
      }

      const u = t - HIT;
      if (u > 0.13 && u < 0.3 && R.chance(0.3)) {
        const a = R.range(0, TAU), rt = lip(u), v = R.range(15, 45);
        drops.add({ x: Math.cos(a) * rt, z: Math.sin(a) * rt, h: scallop(a, height(u)) * R.range(0.6, 1), vx: Math.cos(a) * v, vz: Math.sin(a) * v, vh: R.range(-10, 45), s: R.chance(0.3) ? 2 : 1 });
      }
      if (once("fall", HIT + 0.3)) {

        for (let i = 0; i < 8; i++) {
          const a = R.range(0, TAU), r = lip(0.3), v = R.range(15, 40);
          drops.add({ x: Math.cos(a) * r, z: Math.sin(a) * r, h: R.range(3, 7), vx: Math.cos(a) * v, vz: Math.sin(a) * v, vh: R.range(30, 80), s: R.chance(0.4) ? 2 : 1 });
        }
      }
      if (once("bead", HIT + JET + 0.12)) {

        drops.add({ x: 0, z: 0.2, h: jetH(0.12) + 1, vx: R.range(-6, 6), vz: 0, vh: 55, s: 3 });
        for (let i = 0; i < 3; i++) mist.add(R.range(-3, 3), -jetH(0.12) + R.range(2, 8), R.range(-14, 14), -R.range(4, 12), 2, R.range(4, 6), R.range(0.6, 1), C[6], 0.3);
      }
      if (once("slump", HIT + JET + 0.38)) {
        rings.add(0, 0, 3, 30, 1.5, { n: 2, gap: 2.6, k: 0.9 });
        for (let i = 0; i < 4; i++) mist.add(R.range(-6, 6), -R.range(1, 4), R.range(-30, 30), -R.range(3, 10), 2.5, R.range(6, 9), R.range(0.8, 1.2), C[5], 0.28);
      }

      for (const [i, at] of [[0, 0.95], [1, 1.2], [2, 1.5]])
        if (once("glug" + i, HIT + at)) bubbles.push({ x: R.range(-5, 5), z: R.range(-6, 6), t0: t, r: R.range(1.3, 2.3), popped: false });
      for (const b of bubbles)
        if (!b.popped && t - b.t0 > 0.2) {
          b.popped = true;
          rings.add(b.x, b.z, 1, 7, 0.6, { n: 1, k: 0.9 });
          plinks.push({ x: b.x, y: b.z * SY, s: 1, age: 0 });
          for (let i = 0; i < 2; i++) drops.add({ x: b.x, z: b.z, h: 1, vx: R.range(-20, 20), vz: R.range(-10, 10), vh: R.range(50, 90), s: 1, small: true, life: 1 });
        }
      for (let i = plinks.length - 1; i >= 0; i--) if ((plinks[i].age += dt) > 0.14) plinks.splice(i, 1);
      drops.update(dt);
      rings.update(dt);
      mist.update(dt);
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      const u = t - HIT;

      if (u > 0 && u < 0.26) {
        const r = foot(u) * 0.85 * (1 - smooth(0.12, 0.26, u));
        p.ellipse(0, 0, r, r * SY + 0.6, (d, a) => (Math.sin(a) < 0 ? C[1] : C[2]));
      }
      rings.draw(p, C, -1);
      crown(p, true);
      drops.draw(p, C, "back");
    },
    draw(p) {
      const u = t - HIT;
      rings.draw(p, C, 1);
      if (u > 0.2) {
        const rx = 4 + 11 * ease.outCubic(clamp((u - 0.2) / 0.7)), k = smooth(0.2, 0.32, u) * (1 - smooth(0.5, 2.0, u)) * 0.9;
        lace(p, 0, 0, rx, rx * SY + 0.5, k, C, t, o.seed);
      }
      crown(p, false);
      jet(p);
      for (const b of bubbles) {
        const g = (t - b.t0) / 0.2;
        if (g > 1) continue;
        const r = b.r * ease.outBack(g), x = b.x, y = b.z * SY;
        for (let a = Math.PI; a <= TAU + 0.01; a += 0.5 / Math.max(1, r)) p.dot(x + Math.cos(a) * r, y + Math.sin(a) * r, C[6]);
        p.px(x - r * 0.4, y - r * 0.6, WHITE);
        p.glow(x, y - 1, 4, C[5], 0.25);
      }
      for (const q of plinks) {
        const k = q.age / 0.14;
        if (k < 0.5) p.px(q.x, q.y, WHITE);
        if (q.s > 1) p.line(q.x, q.y - 1, q.x, q.y - 1 - 3 * (1 - k), k < 0.4 ? WHITE : C[6]);
        p.glow(q.x, q.y, 4, C[5], 0.3 * (1 - k));
      }
      drops.draw(p, C, "front");

      if (u >= 0 && u < 0.07) {
        p.ellipse(0, 0, 10, 2.4, (d) => (d < 0.6 ? WHITE : C[6]));
        sparkle(p, 0, -3, 5 * (1 - u / 0.07), C[6], C[5], 0.5);
      }

      if (o.stone && t < HIT) {
        const v = t / HIT, y = -70 + 70 * (0.4 * v + 0.6 * v * v);
        p.line(0, y - 12, 0, y - 3, ST[4], (w) => w * 0.8);
        pebble(p, 0, y, 2.6, ST);
      }
      mist.draw(p, C[5]);
      ps.draw(p);
      lights.draw(p);

      if (u > 0) {
        p.glow(0, -2, 34, C[4], 0.2 * (1 - smooth(0, 1.6, u)));
        p.glow(0, 2, 64, C[3], 0.16 * (1 - smooth(0.1, 2.1, u)));
      }
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ivifngn=__r(1);const Particles=__ivifngn.Particles;const Lights=__ivifngn.Lights;const P=__ivifngn.P;const Rng=__ivifngn.Rng;const fit=__ivifngn.fit;const sparkle=__ivifngn.sparkle;const clamp=__ivifngn.clamp;const smooth=__ivifngn.smooth;const ease=__ivifngn.ease;const rand=__ivifngn.rand;const rng=__ivifngn.rng;const TAU=__ivifngn.TAU;const WHITE=__ivifngn.WHITE;const hex=__ivifngn.hex;const mix=__ivifngn.mix;
const __iog5xzs=__r(42);const VOLT=__iog5xzs.VOLT;const PLASMA=__iog5xzs.PLASMA;const SOOT=__iog5xzs.SOOT;const SOOT2=__iog5xzs.SOOT2;const zigzag=__iog5xzs.zigzag;const bend=__iog5xzs.bend;const stroke=__iog5xzs.stroke;const crackle=__iog5xzs.crackle;const trace=__iog5xzs.trace;const scorch=__iog5xzs.scorch;const heat=__iog5xzs.heat;
const meta = {
  name: "Lightning strike",
  desc: "A targeted strike: a sigil charges on the floor, the scene darkens, a thick bolt slams into it, arcs race out along the cracks it splits, the channel crumbles to a scorch.",
  tags: ["lightning", "electric", "strike", "spell", "target", "impact", "ground", "one-shot"],
  size: [240, 264],
  origin: [120, 228],
  duration: 3,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: VOLT, sparks: PLASMA, seed: 5 },
};
const W = 120, TOP = -224, RX = 28, SY = 0.22, REACH = 52, LEAD0 = 0.48, STEPS = 9, MEET = -30;
const STROKES = [{ t: 0.76, k: 1 }, { t: 1.04, k: 0.8 }, { t: 1.26, k: 0.55 }];
const FLICK = [1, 0.72, 0.3, 0.95, 0.5, 0.8, 0.22];
const level = (a) => (a < 0 ? 0 : FLICK[Math.floor(a * 30 + 1e-4)] ?? 0);
const NIGHT = hex("#04030a"), DUST = hex("#6e6382"), ASH = hex("#5b5566"), STONE = ["#655b7a", "#4a4263", "#342d45"].map(hex);
const S1 = STROKES[0].t;

function cracks(R) {
  const out = [];
  const grow = (x, y, a, len, w, d, depth) => {
    const pts = [[x, y, d]];
    for (let s = 0; s < len; s += 1.5) {
      a += R.range(-0.32, 0.32);
      x += Math.cos(a) * 1.5;
      y = clamp(y + Math.sin(a) * 0.45, 0, 5);
      d += 1.5;
      pts.push([x, y, d]);
      if (depth < 2 && s > 3 && R.chance(0.09)) grow(x, y, a + R.sign() * R.range(0.5, 1.2), (len - s) * R.range(0.3, 0.6), w * 0.6, d, depth + 1);
    }
    out.push({ pts, w });
  };
  for (let i = 0; i < 6; i++) grow(R.range(-1, 1), R.range(0, 1), i % 2 ? R.range(-0.5, 0.7) : Math.PI + R.range(-0.7, 0.5), REACH * R.range(0.55, 1), 1, 0, 0);
  return out;
}


function sigil(p, t, C, k, near) {
  const reveal = clamp(t / 0.22), spin = t * 0.8, burnt = t > S1 ? t - S1 : -1;
  if (burnt > 0.45) return;
  const a0 = burnt < 0 ? 1 : burnt < 0.07 ? 1 : 1 - (burnt - 0.07) / 0.38, hot = burnt >= 0 && burnt < 0.07;
  const on = (a) => Math.sin(a) >= 0 === near;
  const from = (a) => Math.abs((((a - Math.PI / 2) % TAU) + TAU + Math.PI) % TAU - Math.PI) / Math.PI;
  for (let i = 0; i < 22; i++) {
    const a = (i / 22) * TAU + spin;
    if (!on(a) || from(a) > reveal) continue;
    for (const da of [0, 0.06, 0.12]) {
      const x = Math.cos(a + da) * RX, y = Math.sin(a + da) * RX * SY;
      p.dot(x, y, hot ? WHITE : near ? (k > 0.7 ? C[6] : C[5]) : k > 0.7 ? C[4] : C[3], a0);
      if (near) p.dot(x, y + 1, hot ? C[6] : C[2], a0);
    }
    if (i % 3 === 0) p.glow(Math.cos(a) * RX, Math.sin(a) * RX * SY, 5, C[4], 0.3 * k * a0);
  }
  for (let j = 0; j < 4; j++) {
    const a = spin * -0.5 + (j * TAU) / 4 + Math.PI / 4;
    if (!on(a) || reveal < 1) continue;
    p.line(Math.cos(a) * (RX - 5), Math.sin(a) * (RX - 5) * SY, Math.cos(a) * (RX + 5), Math.sin(a) * (RX + 5) * SY, hot ? WHITE : near ? C[6] : C[4], a0);
  }
  if (t > 0.3)
    for (let a = 0; a < TAU; a += 0.09) {
      if (!on(a)) continue;
      p.dot(Math.cos(a) * 14, Math.sin(a) * 14 * SY, hot ? WHITE : near ? C[4] : C[2], a0 * clamp((t - 0.3) / 0.12));
    }
  if (near && burnt < 0) {
    const pulse = 0.6 + 0.4 * Math.sin(t * (10 + 30 * k));
    p.px(0, 0, k > 0.5 ? WHITE : C[6]);
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, -1]]) p.px(dx, dy, C[5]);
    p.glow(0, -1, 10 + 10 * k, C[5], 0.3 + 0.4 * k * pulse);
  }
}

function keep(b) {
  const paths = [];
  for (const q of b.paths) {
    const pts = [];
    for (const pt of q.pts) {
      if (Math.abs(pt[0]) > W - 5 || pt[1] > -3 || pt[1] < TOP + 6) break;
      pts.push(pt);
    }
    if (q.w >= 1 || pts.length > 3) paths.push({ w: q.w, pts: q.w >= 1 ? q.pts : pts });
  }
  return { paths };
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: o.sparks }), hot = new Particles({ rng: R, ground: floor }), lights = new Lights();
  const X0 = R.range(8, 18) * (R.chance(0.5) ? 1 : -1);
  const main = keep(zigzag(R, X0, TOP, 0, -1, 0.17, 0.5)), trunk = main.paths[0].pts;
  const drift = (dx) => (x, y) => [x + dx * Math.sin((Math.PI * y) / TOP), y];
  const bolts = [main, bend({ paths: [{ pts: trunk, w: 1 }] }, drift(1.5)), bend({ paths: [{ pts: trunk, w: 1 }] }, drift(3))];
  const chan = (i) => bolts[i].paths[0].pts, last = STROKES[STROKES.length - 1], end = chan(STROKES.length - 1);
  const tree = cracks(R);

  const gone = end.map(([, y], i) => last.t + 0.25 + 0.75 * (0.55 * rand(o.seed, i, 5) + 0.45 * (1 - y / TOP)));
  let t = 0, struck = -1;
  const now = () => {
    for (let i = STROKES.length - 1; i >= 0; i--) if (t >= STROKES[i].t) return { i, s: STROKES[i], a: t - STROKES[i].t, k: level(t - STROKES[i].t) * STROKES[i].k };
    return null;
  };
  const charge = () => clamp(t / S1) ** 1.5;
  const heatAt = () => (struck < 0 ? 0 : Math.max(...STROKES.slice(0, struck + 1).map((s) => s.k * Math.pow(clamp(1 - (t - s.t) / 1.6), 1.4))));
  return {
    update(dt) {
      t += dt;
      for (const [i, s] of STROKES.entries()) {
        if (struck >= i || t < s.t) continue;
        struck = i;
        const k = s.k;
        lights.add(0, -50, 120, C[4], 0.55 * k, 0.4);
        lights.add(0, -3, 24, WHITE, 0.5 * k, 0.1);
        for (let j = 0; j < Math.round(44 * k); j++) {
          const a = -Math.PI / 2 + R.range(-1.3, 1.3), sp = R.range(110, 320) * (0.65 + 0.35 * k);
          ps.spawn(P.SPARK, R.range(-1.5, 1.5), -2, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.2, 0.55));
        }
        for (let j = 0; j < Math.round(12 * k); j++) {
          const a = -Math.PI / 2 + R.range(-1.2, 1.2), sp = R.range(70, 220);
          hot.spawn(P.SPARK, R.range(-2, 2), -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.5, 1));
        }
        for (let j = 0; j < Math.round(5 * k); j++) hot.spawn(P.EMBER, R.range(-4, 4), -2, R.range(-25, 25), -R.range(30, 80), R.range(0.8, 1.5));
        for (let j = 0; j < Math.round(18 * k); j++) {
          const a = -Math.PI / 2 + R.range(-1.1, 1.1), sp = R.range(50, 190);
          ps.spawn(P.GRIT, R.range(-3, 3), -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(1, 1.5), R.pick(STONE), R.chance(0.35) ? 2 : 1);
        }
        for (let j = 0; j < 8; j++) ps.spawn(P.DUST, R.range(-3, 3), -1, R.sign() * R.range(30, 110), -R.range(4, 24), R.range(0.4, 0.8), DUST, R.range(1.5, 3));
        for (let j = 0; j < Math.round(4 * k); j++) ps.spawn(P.SMOKE, R.range(-8, 8), -4, R.range(-10, 10), -R.range(10, 25), R.range(1.1, 1.6), mix(ASH, C[2], 0.3), R.range(3, 6), R.range(0.05, 0.25));
      }
      if (struck >= 0 && t < 1.7 && R.chance(6 * dt)) ps.spawn(P.SMOKE, R.range(-8, 8), -2, R.range(-4, 4), -R.range(9, 17), R.range(1, 1.3), 0, R.range(2, 3.5));
      for (let i = 0; i < gone.length - 1; i++)
        if (gone[i] <= t && gone[i] > t - dt && rand(o.seed, i, 6) < 0.5) {
          const [x, y] = end[i];
          ps.spawn(P.MOTE, x, y, R.range(-8, 8), R.range(6, 22), R.range(0.4, 0.8), R.chance(0.5) ? C[5] : C[4], R.range(0.5, 0.9));
        }
      ps.update(dt);
      hot.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      const dark = 0.5 * smooth(0.46, 0.66, t) * (1 - smooth(S1 - 0.01, S1 + 0.02, t));
      if (dark > 0.01)
        for (let y = -228; y < 36; y++)
          for (let x = -W; x < W; x++) {
            const d = Math.hypot(x / W, (y + 96) / 132), a = dark * (1 - smooth(0.55, 1, d));
            if (a > 0.01) p.blend(x + 0.5, y + 0.5, NIGHT, a);
          }
      sigil(p, t, C, charge(), false);

      if (struck >= 0) {
        const s = now(), front = REACH * ease.outCubic(clamp((t - S1) / 0.35)), T0 = heatAt(), fade = 1 - smooth(2.3, 2.95, t);
        const elec = s.a < 0.14 ? s.s.k * (1 - s.a / 0.14) : 0;
        for (const br of tree)
          for (const [x, y, d] of br.pts) {
            if (d > front) break;
            const q = d / REACH, n = rand(Math.round(x * 2), Math.round(y * 2), 9), fresh = d > front - 6 && front < REACH;
            const T = T0 * (1.15 - q) * (br.w < 1 ? 0.8 : 1) - n * 0.25, c = fresh || (elec > 0.3 && n < 0.85) ? (q < 0.5 ? WHITE : C[6]) : heat(T) || SOOT2;
            p.dot(x, y + 1, SOOT, fade);
            p.dot(x, y, c, fade);
            if (br.w >= 1 && d < 9) p.dot(x, y + 2, SOOT, fade);
            if ((fresh || elec > 0.3) && (Math.round(d) & 3) === 0) p.glow(x, y, 7, C[5], 0.4);
            else if (T > 0.2 && (Math.round(d) & 3) === 0) p.glow(x, y, 5, c, 0.2 * T);
          }
        scorch(p, 0, 0, 12, T0, fade);
        if (T0 > 0) p.glow(0, -2, 34, heat(0.55), 0.3 * T0);
      }
      ps.draw(p, "back");
      hot.draw(p, "back");
    },
    draw(p) {
      const s = now(), f = Math.floor(t * 30 + 1e-4), k = charge();
      sigil(p, t, C, k, true);

      if (t > 0.15 && t < S1) {
        const r = rng(o.seed, 61, f);
        for (let i = 0; i < Math.round(1 + 4 * k); i++) {
          const a = r.range(0, TAU), x = Math.cos(a) * RX, y = Math.sin(a) * RX * SY;
          crackle(p, zigzag(r, x, y, x + r.range(-2.5, 2.5), y - r.range(4, 9) * (0.6 + k), 0.45, 0.3), 0.45 + 0.4 * k, C, 0.3);
        }
        p.glow(0, -2, 36, C[4], 0.12 + 0.3 * k);
      }

      if (t >= LEAD0 && t < S1) {
        const u = clamp((t - LEAD0) / (S1 - LEAD0)), st = Math.min(STEPS, Math.floor(u * STEPS) + 1), fresh = 1 - ((u * STEPS) % 1);
        const reach = TOP + (MEET - TOP) * Math.pow(st / STEPS, 1.2), prev = TOP + (MEET - TOP) * Math.pow((st - 1) / STEPS, 1.2);
        for (const q of main.paths) {
          const tk = q.w >= 1;
          for (let i = 0; i < q.pts.length - 1; i++) {
            const [ax, ay] = q.pts[i], [bx, by] = q.pts[i + 1];
            if (by > reach) {
              if (ay <= reach && i > 0) (p.px(ax, ay, WHITE), p.glow(ax, ay, 7, C[5], 0.5 * fresh + 0.15));
              break;
            }
            const young = by > prev;
            p.line(ax, ay, bx, by, young ? (fresh > 0.4 ? (tk ? C[6] : C[5]) : C[4]) : tk ? C[3] : C[2]);
            if (i % 4 === 0 && ay > TOP + 14) p.glow(ax, ay, young ? 8 : 5, C[4], young ? 0.3 * fresh + 0.1 : 0.12);
          }
        }
        if (t > 0.62) {
          const h = -MEET * ease.outQuad((t - 0.62) / (S1 - 0.62)), r = rng(o.seed, 77, f);
          const b = zigzag(r, 0, -1, r.range(-2, 2), -Math.max(3, h), 0.3, 0.3), tip = b.paths[0].pts.at(-1);
          crackle(p, b, 0.85, C, 0.45);
          p.px(tip[0], tip[1], WHITE);
          p.glow(tip[0], tip[1], 9, C[5], 0.5);
        }
      }

      const next = STROKES.find((q) => q.t > t);
      if (next && next !== STROKES[0] && t > next.t - 0.06) {
        const tr = chan(STROKES.indexOf(next)), u = (t - (next.t - 0.06)) / 0.06, i1 = Math.floor(u * tr.length);
        trace(p, tr, C[3], 1);
        trace(p, tr, C[6], 1, i1 - 18, i1);
        for (let i = Math.max(0, i1 - 18); i < Math.min(tr.length, i1); i += 4) if (tr[i][1] > TOP + 14) p.glow(tr[i][0], tr[i][1], 9, C[4], 0.35);
      } else if (s && s.k > 0) {
        const hero = s.i === 0 && s.a < 1 / 30;
        stroke(p, bolts[s.i], s.k, C, s.i === 0 ? 1.5 : 1.2, { hero, core: s.k > 0.6 ? (hero ? 1.2 : 0.8) : 0, minY: TOP + 14 });
        const r = 4.5 * s.k;
        p.circle(0, -1, r + 1.5, C[2]);
        p.circle(0, -1, r + 0.5, C[5]);
        p.circle(0, -1, r * 0.65, WHITE);
        if (s.a < 0.07) sparkle(p, 0, -2, Math.round(12 * s.k * (1 - s.a / 0.07)), C[6], C[4], 0.25);
        p.glow(0, -16, 96, C[3], 0.42 * s.k);
        p.glow(0, -3, 22, C[5], 0.3 * s.k);
        if (hero) p.glow(X0 * 0.5, -110, 170, C[3], 0.3);
      } else if (s) {
        const crumble = s.i === STROKES.length - 1, cool = clamp((s.a - 0.23) / 0.45), tr = chan(s.i);
        for (let i = 0; i < tr.length - 1; i++) {
          if (crumble && t >= gone[i]) continue;
          const h = crumble ? 1 - clamp((t - last.t - 0.23) / (gone[i] - last.t - 0.23)) : 1 - cool;
          p.line(tr[i][0], tr[i][1], tr[i + 1][0], tr[i + 1][1], h > 0.7 ? C[5] : h > 0.4 ? C[4] : h > 0.15 ? C[3] : C[2]);
          if (i % 6 === 0 && h > 0.3 && tr[i][1] > TOP + 14) p.glow(tr[i][0], tr[i][1], 6, C[4], 0.15 * h);
        }
      }

      if (s && s.a < 0.4) {
        const r = rng(o.seed, 91, f), run = s.i === 0 ? REACH * ease.outCubic(clamp(s.a / 0.35)) : REACH * clamp(s.a / 0.22);
        for (const br of tree) {
          if (br.w < 1 || r.next() < 0.3) continue;
          const i1 = br.pts.findIndex(([, , d]) => d > run), j1 = i1 < 0 ? br.pts.length : i1, j0 = Math.max(0, j1 - r.int(7, 13));
          const pts = br.pts.slice(j0, j1).map(([x, y]) => [x + r.range(-0.6, 0.6), y - 1.5 - r.range(0, 2.5)]);
          if (pts.length > 1) crackle(p, { paths: [{ pts, w: 1 }] }, 0.9 * (1 - s.a / 0.4) + 0.1, C, 0.35);
        }
      }
      ps.draw(p, "front");
      hot.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __id7fck1=__r(1);const Particles=__id7fck1.Particles;const Lights=__id7fck1.Lights;const P=__id7fck1.P;const Rng=__id7fck1.Rng;const fit=__id7fck1.fit;const sparkle=__id7fck1.sparkle;const clamp=__id7fck1.clamp;const smooth=__id7fck1.smooth;const ease=__id7fck1.ease;const noise=__id7fck1.noise;const rand=__id7fck1.rand;const TAU=__id7fck1.TAU;const WHITE=__id7fck1.WHITE;const mix=__id7fck1.mix;const hex=__id7fck1.hex;
const __i3ncf68=__r(38);const Drops=__i3ncf68.Drops;
const meta = {
  name: "Acid splash",
  desc: "A gob of acid bursts into a crown and spatters; it eats a glowing, smoking pit into the floor and boils down into it, spitting bright beads, pale steam curling off.",
  tags: ["nature", "acid", "poison", "splash", "liquid", "ground", "one-shot"],
  size: [184, 116],
  origin: [92, 100],
  duration: 2.8,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#0e140a", "#1c3010", "#2c5214", "#457e18", "#6aae1c", "#a0dc2a", "#dcff6a", "#f8ffd0"], seed: 6 },
};
const HIT = 0.3, Y0 = -62, V0 = 60, SPREAD = 0.4, DRY = 0.7, GONE = 2.2, W = 30, PIT = 5;

function wisp(p, q, t, col) {
  const age = t - q.t0, u = age / q.life;
  if (u < 0 || u >= 1) return;
  const head = q.rise * age, tail = Math.max(0, head - q.len), fade = smooth(0, 0.15, u) * (1 - smooth(0.4, 1, u));
  for (let h = tail; h <= head; h += 0.5) {
    const s = (h - tail) / Math.max(1, head - tail), x = q.x + q.amp * Math.sin(h * q.k + q.ph) * (0.2 + s) + q.drift * age;
    p.blend(x, q.y - h, col, fade * Math.sin(Math.PI * s) * 0.42);
  }
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), floor = () => 0;
  const SCORCH = mix(C[0], hex("#140f0c"), 0.6), BURNT = mix(C[1], hex("#2a1a10"), 0.6), STEAM = mix(C[7], hex("#e8ece6"), 0.75);
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[7], C[6], C[5], C[4]] });
  const drops = new Drops(floor), lights = new Lights(), stains = [], wisps = [], pops = [];
  const spikes = Array.from({ length: 13 }, (_, i) => ({ a: (i / 13) * TAU + R.range(-0.18, 0.18), h: R.range(4, 10), r: R.range(0.85, 1.12), shed: false }));
  const rag = Array.from({ length: 80 }, (_, i) => rand(i, o.seed, 5) - 0.5);
  let t = 0, hit = false;

  const pw = () => W * ease.outCubic(clamp((t - HIT) / SPREAD)) * 1.02;
  const pitD = () => PIT * ease.outCubic(clamp((t - HIT) / 1.1));
  const depth = (x) => {
    const w = pw(), d = Math.abs(x) / Math.max(1, w);
    return d >= 1 ? -1 : pitD() * Math.sqrt(1 - d * d) + rag[(Math.round(x) + 200) % 80] * 0.9;
  };
  const level = () => (t < HIT ? 0 : -1.6 + (PIT + 1.6) * ease.inQuad(smooth(DRY, GONE, t)));
  const width = () => {
    const L = level(), w = pw();
    return L <= 0 ? w : w * Math.sqrt(Math.max(0, 1 - (L / Math.max(0.1, pitD())) ** 2));
  };
  const heat = () => smooth(HIT, HIT + 0.3, t) * (1 - smooth(GONE - 0.3, GONE + 0.25, t));
  const gobY = () => Y0 + V0 * t + 0.5 * 950 * t * t;
  const crownR = () => 4 + 11 * ease.outCubic(clamp((t - HIT) / 0.16));
  const crownH = () => 5 * Math.sin(Math.PI * clamp((t - HIT) / 0.26));
  const spikeK = () => {
    const u = clamp((t - HIT - 0.015) / 0.26);
    return Math.sin(Math.PI * Math.pow(u, 0.6));
  };
  const tipOf = (s) => {
    const r = crownR() * s.r, h = crownH(), sn = Math.sin(s.a), sh = s.h * spikeK();
    const bx = Math.cos(s.a) * r, by = sn * r * 0.3 - h * (0.75 + 0.25 * Math.abs(sn));
    return [bx, by, bx + Math.cos(s.a) * sh * 0.55, by - sh];
  };
  const steam = (x, y, big) => wisps.push({ x, y, t0: t, life: Math.min(R.range(0.5, 0.9) * (big ? 1.3 : 1), meta.duration - 0.05 - t), rise: R.range(22, 32), len: R.range(5, 10) * (big ? 1.4 : 1), amp: R.range(1, 2.5), k: R.range(0.35, 0.6), ph: R.range(0, TAU), drift: R.range(-4, 4) });

  const crown = (p, back) => {
    if (t < HIT || t > HIT + 0.27) return;
    const r = crownR(), h = crownH(), ry = r * 0.3;
    for (let x = Math.floor(-r); x <= Math.ceil(r); x++) {
      const c = (x + 0.5) / r;
      if (Math.abs(c) > 1) continue;
      const e = Math.sqrt(1 - c * c), yb = (back ? -ry : ry) * e, hh = h * (0.75 + 0.25 * e);
      for (let y = Math.floor(yb - hh); y <= Math.round(yb); y++) {
        const rim = y === Math.floor(yb - hh);
        if (rim) p.px(x, y, back ? C[5] : c < 0.1 ? C[7] : C[6]);
        else p.blend(x, y, C[(c < -0.25 ? 5 : c > 0.45 ? 3 : 4) - (back ? 1 : 0)], back ? 0.55 : 0.7);
      }
    }
    for (const s of spikes) {
      if (Math.sin(s.a) < 0 !== back) continue;
      const [bx, by, tx, ty] = tipOf(s);
      p.line(bx, by, tx, ty, back ? C[4] : C[6]);
      p.line(bx + 1, by, (bx + tx) / 2 + 0.5, (by + ty) / 2, back ? C[3] : C[5]);
      if (!s.shed) p.px(tx, ty - 1, back ? C[5] : C[7]), p.px(tx + 1, ty - 1, C[5]);
    }
  };
  return {
    update(dt) {
      t += dt;
      const f = Math.min(1, dt * 120), w = width();
      if (!hit && t >= HIT) {
        hit = true;
        lights.add(0, -4, 28, WHITE, 0.6, 0.08);
        lights.add(0, -10, 56, C[5], 0.5, 0.6);
        for (let i = 0; i < 26; i++) {
          const a = -Math.PI / 2 + R.range(-1.35, 1.35), sp = R.range(60, 250);
          drops.add(R.range(-3, 3), -2, Math.cos(a) * sp, Math.sin(a) * sp, R.chance(0.3) ? 2 : 1);
        }
        for (let i = 0; i < 10; i++) {
          const a = -Math.PI / 2 + R.range(-1.2, 1.2), sp = R.range(120, 260);
          ps.spawn(P.SPARK, 0, -2, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.12, 0.3));
        }
        for (let i = 0; i < 5; i++) steam(R.range(-10, 10), -R.range(2, 6), true);
      }

      if (hit)
        for (const s of spikes)
          if (!s.shed && t > HIT + 0.09) {
            s.shed = true;
            const [, , tx, ty] = tipOf(s);
            drops.add(tx, ty - 1, Math.cos(s.a) * R.range(30, 80), -R.range(50, 130), R.chance(0.4) ? 2 : 1);
          }
      drops.update(dt, (d) => {

        if (Math.abs(d.x) > pw()) stains.push({ x: d.x, t0: t, w: d.s * 0.8 + R.range(0.3, 1.2) });
        if (t < GONE) steam(d.x, -1, false);
      });

      const lv = level(), w2 = width();
      if (t > HIT + 0.15 && t < GONE && w2 > 2) {
        if (R.chance(0.3 * f)) {
          const x = R.range(-0.85, 0.85) * w2, y = Math.min(lv, depth(x)) - 1;
          pops.push({ x, y, t0: t });
          for (let j = 0; j < R.int(1, 3); j++) drops.add(x, Math.min(y - 1, -1), R.range(-40, 40), -R.range(50, 110), 1);
        }
        if (R.chance(0.14 * f)) steam(R.range(-0.9, 0.9) * w2, Math.min(lv, 0) - 1, R.chance(0.25));
      }

      if (t > GONE - 0.2 && t < meta.duration - 0.5 && R.chance(0.08 * f)) steam(R.range(-0.7, 0.7) * pw(), 0, false);
      for (let i = pops.length - 1; i >= 0; i--) if (t - pops[i].t0 > 0.1) pops.splice(i, 1);
      for (let i = wisps.length - 1; i >= 0; i--) if (t - wisps[i].t0 > wisps[i].life) wisps.splice(i, 1);
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      const fade = 1 - smooth(meta.duration - 0.6, meta.duration - 0.08, t), hk = heat(), w = pw(), lv = level();

      for (const s of stains) {
        const age = t - s.t0, k = 1 - smooth(1, 1.8, age), c = age < 0.15 ? C[7] : age < 0.5 ? C[6] : age < 0.9 ? C[4] : BURNT;
        for (let x = Math.floor(s.x - s.w); x <= Math.ceil(s.x + s.w); x++) p.dot(x, 0, Math.abs(x - s.x) < s.w * 0.5 ? SCORCH : c, k * fade);
        if (age < 0.5) p.glow(s.x, -1, 5, C[5], 0.3 * (1 - age / 0.5));
      }
      crown(p, true);
      if (t > HIT && w > 1) {

        for (let x = Math.floor(-w) - 1; x <= Math.ceil(w) + 1; x++) {
          const dp = depth(x + 0.5);
          if (dp < 0) continue;
          const bottom = Math.max(0, Math.round(dp)), edge = Math.abs(x + 0.5) / w > 0.88;
          for (let y = 0; y <= bottom; y++) p.dot(x, y, y === bottom ? (hk > 0.5 ? C[6] : hk > 0.15 ? C[4] : BURNT) : SCORCH, fade);
          p.dot(x, bottom + 1, hk > 0.5 ? C[5] : hk > 0.15 ? C[3] : SCORCH, fade * 0.8);
          if (edge) p.dot(x, -1, hk > 0.4 ? C[7] : hk > 0.1 ? C[5] : BURNT, fade);
        }
        for (const sd of [-1, 1]) p.glow(sd * w, -1, 8, C[6], 0.45 * hk);

        if (t < GONE)
          for (let x = Math.floor(-w); x <= Math.ceil(w); x++) {
            const dp = depth(x + 0.5);
            if (dp < 0) continue;
            const d = Math.abs(x + 0.5) / w, dome = lv < 0 ? Math.round(lv * Math.sqrt(Math.max(0, 1 - d * d))) : Math.round(lv), bottom = Math.round(dp);
            if (dome > bottom) continue;
            const n = noise(x * 0.25 - t * 2.4, 3) + noise(x * 0.1 + t * 1.4, 5) * 0.6;
            for (let y = dome; y <= bottom; y++) p.px(x, y, y === dome ? (n > 0.7 ? C[7] : C[6]) : y === dome + 1 ? (n > 0.2 ? C[5] : C[4]) : y >= bottom ? C[3] : C[4]);
          }
        p.glow(0, -6, w * 1.4 + 10, C[4], 0.3 * hk * (0.85 + 0.15 * Math.sin(t * 9)));
        p.glow(0, 1, w * 0.9, C[6], 0.2 * hk);
      }
      ps.draw(p, "back");
    },
    draw(p) {

      if (t < HIT) {
        const y = gobY(), v = V0 + 950 * t, st = 1 + v * 0.0022, rx = 2.6 / Math.sqrt(st), ry = 2.8 * st;
        p.shade(-rx - 1, y - ry - 4, rx + 1, y + ry + 1, (x, yy, out) => {
          const dx = x / rx, dy = (yy - y) / ry, tail = dy < 0 && Math.abs(x) < rx * (1 + dy * 0.9) + 0.4 && dy > -1.7;
          const d = dx * dx + dy * dy;
          if (d > 1.25 && !tail) return;
          out.c = d > 1 && !tail ? C[2] : dx < -0.2 && dy < -0.1 ? C[7] : dy > 0.45 ? C[4] : C[5];
        });
        p.px(-1, y - ry * 0.3, WHITE);
        for (let i = 1; i <= 3; i++) p.dot(0, y - ry - 2 - i * 4, C[5], 1 - i * 0.25);
        p.glow(0, y, 10, C[5], 0.45);
      }
      crown(p, false);

      const e = t - HIT;
      if (e >= 0 && e < 0.07) {
        const k = 1 - e / 0.07;
        p.ellipse(0, -2, 6 + 6 * (1 - k), 2.5, k > 0.5 ? WHITE : C[7]);
        sparkle(p, 0, -4, 8 * k, C[7], C[6], 0.6);
      }

      for (const q of pops) {
        const k = (t - q.t0) / 0.1;
        p.px(q.x, q.y, WHITE);
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, -1]]) p.dot(q.x + dx * (1 + k * 2), q.y + dy * (1 + k * 2), C[7], 1 - k);
        p.glow(q.x, q.y, 4, C[6], 0.4 * (1 - k));
      }
      for (const q of wisps) wisp(p, q, t, STEAM);
      drops.draw(p, C);
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"drawBack",{enumerable:true,configurable:true,get:()=>drawBack});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __ibq8ufd=__r(1);const cycle=__ibq8ufd.cycle;const fit=__ibq8ufd.fit;const rng=__ibq8ufd.rng;const smooth=__ibq8ufd.smooth;const clamp=__ibq8ufd.clamp;const TAU=__ibq8ufd.TAU;const WHITE=__ibq8ufd.WHITE;const tileNoise=__ibq8ufd.tileNoise;
const meta = {
  name: "Poison cloud",
  desc: "A miasma hugging the floor: ragged sheets of gas lit yellow-green from within, fading to violet, creep out in tongues that curl over at their tips; plumes twist up as ribbons.",
  tags: ["nature", "poison", "gas", "cloud", "miasma", "toxic", "area", "ground", "loop"],
  size: [256, 100],
  origin: [128, 86],
  duration: 4,
  loop: true,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#0e0816", "#24123a", "#3e2056", "#5a3a62", "#6a6a3a", "#96aa30", "#cce040", "#f4ffa0"],
    spread: 1,
    seed: 3,
  },
};
const D = meta.duration;

const SHEETS = [
  { h: 36, e: 0.84, a: 0.46, dim: 2, flow: 4, n: 2, back: true },
  { h: 26, e: 0.96, a: 0.5, dim: 1, flow: 8, n: 2, back: true },
  { h: 16, e: 1.04, a: 0.56, dim: 0, flow: 8, n: 3, back: false },
];

function tongues(sh, si, E, ph) {
  const out = [];
  for (const s of [-1, 1])
    for (let i = 0; i < sh.n; i++) {
      const q = (ph + i / sh.n + si * 0.17 + (s > 0 ? 0.5 / sh.n : 0)) % 1;
      out.push({ s, q, x: s * E * (0.3 + 0.82 * q), h: sh.h * (0.75 - 0.45 * q) });
    }
  return out;
}


function height(sh, si, E, x, ph, T, seed) {
  const ax = Math.abs(x), env = 1 - smooth(0.5, 1, ax / (E * sh.e)), r = tileNoise(ax * 0.07 - ph * sh.flow, si * 3.7, sh.flow, 0, seed + si);
  let h = sh.h * env * (0.55 + 0.45 * r);
  for (const g of T) {
    const behind = g.s * (g.x - x);
    if (behind < -1.5 || behind > 30) continue;
    h = Math.max(h, g.h * Math.sqrt(Math.max(0, 1 - behind / 30)) * smooth(-1.5, 1.5, behind) * (1 - smooth(0.75, 1, g.q)));
  }
  return h;
}


function sheet(p, C, sh, si, E, t, seed) {
  const ph = t / D, T = tongues(sh, si, E, ph), d = sh.dim, X = Math.ceil(E * 1.25);
  for (let x = -X; x <= X; x++) {
    const H = height(sh, si, E, x + 0.5, ph, T, seed);
    if (H < 0.6) continue;
    const top = -Math.round(H);
    for (let y = top; y <= 1; y++) {
      const v = clamp(-y / H), streak = 0.7 + 0.3 * tileNoise(x * 0.05 - ph * sh.flow * Math.sign(x || 1), y * 0.55, sh.flow, 0, seed + 9 + si);
      const lv = v - (streak - 0.7) * 0.6, c = y === top ? C[Math.max(1, 4 - d)] : lv < 0.16 ? C[6 - d] : lv < 0.42 ? C[5 - d] : lv < 0.68 ? C[4 - d] : C[Math.max(1, 3 - d)];
      p.blend(x, y, c, sh.a * (y === top ? 0.65 : (0.6 + 0.4 * (1 - v)) * streak));
    }
  }

  for (const g of T) {
    const k = Math.sin(Math.PI * g.q);
    if (k < 0.15 || g.h < 4) continue;
    const r = 1.8 + g.h * 0.22, cx = g.x - g.s * r * 0.6, cy = -g.h * 0.72, spin = -g.s * g.q * TAU * 2.2;

    for (let a = 0; a < 4.6; a += 0.1) {
      const rr = r * (1 - a * 0.12), px = cx + g.s * Math.cos(spin + a) * rr, py = cy + Math.sin(spin + a) * rr, w = 1.6 * (1 - a / 6);
      for (let o = -w; o <= w; o += 0.8) {
        const qx = px + g.s * Math.cos(spin + a) * o, qy = py + Math.sin(spin + a) * o;
        p.blend(qx, qy, o > w * 0.4 ? C[5 - d] : C[4 - d], sh.a * 0.75 * k * (1 - a / 5.5));
      }
    }
  }
}

function plumes(p, C, E, t, seed) {
  cycle(t, D, 5, seed, (g) => g.range(2.4, 3.2), (age, L, R) => {
    const u = age / L, x0 = R.range(-0.55, 0.55) * E, rise = R.range(13, 19), len = R.range(34, 48), ph = R.range(0, TAU), amp = R.range(3, 5);
    const head = 14 + rise * age, tail = Math.max(10, head - len), fade = smooth(0, 0.15, u) * (1 - smooth(0.5, 1, u));
    for (let h = tail; h <= head; h += 0.7) {
      const s = (h - tail) / Math.max(1, head - tail), tw = Math.cos(h * 0.22 + age * 2.4 + ph), w = 0.6 + 2.2 * Math.abs(tw) * (1 - s * 0.5);
      const x = x0 + amp * Math.sin(h * 0.12 + age + ph) * (0.4 + s), a = fade * Math.sin(Math.PI * Math.min(1, s * 1.2)) * 0.32;
      for (let o = -w; o <= w; o += 1) p.blend(x + o, -h, tw > 0 ? (Math.abs(o) < w * 0.5 ? C[6] : C[5]) : Math.abs(o) < w * 0.5 ? C[3] : C[2], a);
    }
  });
}

function specks(p, C, E, t, seed) {
  cycle(t, D, 30, seed, (g) => g.range(1.5, 2.6), (age, L, R) => {
    const u = age / L, s = R.sign(), x = s * (R.range(0.05, 0.7) * E + age * R.range(6, 14)), y = -R.range(2, 20) - Math.sin(age * R.range(1.5, 3) + R.next() * TAU) * 2;
    const a = Math.min(1, u * 5) * Math.min(1, (1 - u) * 3) * (0.6 + 0.4 * Math.sin(age * R.range(6, 10) + R.next() * TAU));
    if (a < 0.1) return;
    p.dot(x, y, a > 0.7 ? C[7] : C[6], a * 1.3);
    p.glow(x, y, 4, C[6], 0.3 * a);
  });
}
function drawBack(p, t, o) {
  const C = fit(o.palette, 8), E = 96 * o.spread, pulse = 0.85 + 0.15 * Math.sin((TAU * t * 2) / D);

  for (let x = -E; x <= E; x += 22) p.glow(x, -3, 30, C[5], 0.14 * pulse * (1 - Math.abs(x) / (E * 1.3)));

  for (let i = 0; i < 6; i++) {
    const R = rng(o.seed, i, 7), x = Math.sin((TAU * t) / D + R.range(0, TAU)) * E * R.range(0.2, 0.7) + R.range(-0.3, 0.3) * E, k = 0.6 + 0.4 * Math.sin((TAU * t * 3) / D + i);
    p.glow(x, -R.range(4, 10), R.range(14, 22), C[6], 0.2 * k);
  }
  SHEETS.forEach((sh, i) => sh.back && sheet(p, C, sh, i, E, t, o.seed));
}
function draw(p, t, o) {
  const C = fit(o.palette, 8), E = 96 * o.spread;
  plumes(p, C, E, t, o.seed * 7 + 2);
  SHEETS.forEach((sh, i) => !sh.back && sheet(p, C, sh, i, E, t, o.seed));
  specks(p, C, E, t, o.seed * 11 + 5);
  p.glow(0, -6, E * 0.9, C[5], 0.1);
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __it1r5if=__r(1);const Particles=__it1r5if.Particles;const Lights=__it1r5if.Lights;const P=__it1r5if.P;const Rng=__it1r5if.Rng;const fit=__it1r5if.fit;const flare=__it1r5if.flare;const sparkle=__it1r5if.sparkle;const clamp=__it1r5if.clamp;const smooth=__it1r5if.smooth;const seg=__it1r5if.seg;const ease=__it1r5if.ease;const TAU=__it1r5if.TAU;const WHITE=__it1r5if.WHITE;
const __iy1a7io=__r(34);const flakeDesign=__iy1a7io.flakeDesign;const snowflake=__iy1a7io.snowflake;const endBy=__iy1a7io.endBy;
const meta = {
  name: "Snowflake burst",
  desc: "A cold pop: frost gathers and flashes white in a ring, then crisp six-armed snowflakes spin out, slow, twinkle and drift down to settle and melt.",
  tags: ["ice", "snow", "snowflake", "burst", "magic", "one-shot"],
  size: [140, 120],
  origin: [70, 106],
  duration: 3.2,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#151a3d", "#212f6b", "#2c58aa", "#3a8bd8", "#62c8f4", "#a6ecff", "#dcfbff", "#ffffff"], count: 9, seed: 8 },
};
const POP = 0.16, CY = -48;
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[7], C[6], C[5], C[4]], haze: C[5] });
  const lights = new Lights();

  const flakes = [];
  const SIZES = [2, 0, 1, 0, 2, 0, 1, 0, 1];
  for (let i = 0; i < o.count; i++) {
    const z = SIZES[i % SIZES.length], r = z === 2 ? R.range(9.5, 11.5) : z === 1 ? R.range(6, 7.5) : R.range(3, 4.5);
    const a = (i / o.count) * TAU + R.range(-0.3, 0.3) + 0.4, sp = R.range(80, 120) * (1.4 - r / 14);
    flakes.push({
      x: 0, y: CY, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.85 - 20, r, rot: R.range(0, TAU), w0: R.sign() * R.range(7, 12), w1: R.sign() * R.range(0.4, 1),
      d: flakeDesign(R), life: R.range(2.1, 2.8), age: 0, ph: R.range(0, TAU), tw: R.range(0.5, 0.85), tw0: R.range(0.15, 0.6), rest: false, popped: false,
    });
  }
  let t = 0, popped = false;
  const sz = (f) => f.r * Math.min(1, ease.outBack(clamp(f.age / 0.18), 2)) * Math.min(1, (f.life - f.age) / 0.35);
  return {
    update(dt) {
      t += dt;

      if (t < POP - 0.03 && R.chance(0.8)) {
        const a = R.range(0, TAU), D = R.range(22, 44), T = R.range(0.12, 0.16), v = (D * 3) / (Math.exp(3 * T) - 1);
        ps.spawn(P.STREAK, Math.cos(a) * D, CY + Math.sin(a) * D, -Math.cos(a) * v, -Math.sin(a) * v, T, R.chance(0.5) ? C[6] : C[5]);
      }
      if (!popped && t >= POP) {
        popped = true;
        lights.add(0, CY, 44, WHITE, 0.8, 0.1);
        lights.add(0, CY, 72, C[4], 0.5, 0.6);

        for (let i = 0; i < 22; i++) {
          const a = R.range(0, TAU), sp = R.range(80, 150);
          ps.spawn(P.MOTE, 0, CY, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.25, 0.5), R.chance(0.5) ? C[6] : C[5], R.range(0.6, 1));
        }
        for (let i = 0; i < 18; i++) {
          const a = R.range(-Math.PI, 0.2), sp = R.range(30, 110);
          ps.spawn(P.FLAKE, 0, CY, Math.cos(a) * sp, Math.sin(a) * sp, R.range(1, 1.6), R.chance(0.6) ? WHITE : C[6], R.range(0.5, 1.5));
        }
        for (let i = 0; i < 12; i++) {
          const a = R.range(0, TAU), d = R.range(10, 44);
          ps.spawn(P.STAR, Math.cos(a) * d, CY + Math.sin(a) * d * 0.85, 0, R.range(2, 6), R.range(0.3, 0.6), R.chance(0.5) ? WHITE : C[6], R.range(0.8, 2.2), R.range(0.08, 1.6));
        }
      }
      if (popped)
        for (const f of flakes) {
          f.age += dt;
          if (f.age >= f.life) continue;
          if (!f.rest) {
            f.vx -= f.vx * 2.8 * dt;
            f.vy -= f.vy * 2.8 * dt - 26 * dt;
            f.x += f.vx * dt + Math.sin(t * 1.8 + f.ph) * 5 * dt;
            f.y += f.vy * dt;
            f.rot += (f.w1 + (f.w0 - f.w1) * Math.exp(-f.age * 2.5)) * dt;

            if (f.y > -sz(f) * 0.3) {
              f.rest = true;
              f.y = -1;
              f.life = Math.min(f.life, f.age + 0.6);
            }
          }

          if (!f.popped && f.life - f.age < 0.1) {
            f.popped = true;
            for (let i = 0; i < 2; i++) ps.spawn(P.STAR, f.x + R.range(-2, 2), f.y + R.range(-2, 2), R.range(-6, 6), -R.range(2, 8), R.range(0.2, 0.4), R.chance(0.5) ? WHITE : C[6], R.range(0.8, 1.6));
          }
        }
      ps.update(dt);
      lights.update(dt);
      endBy(t, meta.duration, ps);
    },
    draw(p) {

      if (t < POP) {
        const k = t / POP;
        snowflake(p, 0, CY, 1 + 3.2 * k * k, t * 20, flakes[0].d, C, { hot: k });
        p.glow(0, CY, 8 + 14 * k, C[5], 0.3 + 0.4 * k);
      }

      const q = t - POP;
      if (q >= 0 && q < 0.4) {
        if (q < 0.07) p.circle(0, CY, 6 * (1 - q / 0.07) + 1, WHITE);
        flare(p, 0, CY, 28 * Math.pow(Math.max(0, 1 - q / 0.26), 1.5), 1 - q / 0.26, C);
        const e = ease.outCubic(q / 0.4), r = 5 + 34 * e;
        p.ring(0, CY, r, Math.max(1, 2.4 * (1 - e)), q < 0.08 ? WHITE : q < 0.2 ? C[6] : C[5], 1.15 - e);
        p.glowRing(0, CY, r, 5, C[5], 0.4 * (1 - e));
      }

      if (popped) p.glow(0, CY, 46, C[4], 0.3 * (1 - smooth(POP, POP + 1.6, t)));

      for (const f of flakes) {
        if (!popped || f.age >= f.life) continue;
        const r = sz(f), tw = Math.max(0, Math.sin(((f.age - f.tw0) / f.tw) * TAU)) ** 8 * (f.age > f.tw0 ? 1 : 0);
        if (f.rest) {

          const L = Math.max(1, Math.round(r * 1.2 * ((f.life - f.age) / 0.6)));
          for (let i = -L; i <= L; i++) p.px(f.x + i, -1, Math.abs(i) === L ? C[5] : i === 0 ? WHITE : C[6]);
          p.glow(f.x, -1, 3 + L, C[4], 0.3);
          continue;
        }
        snowflake(p, f.x, f.y, r, f.rot, f.d, C, { hot: Math.max(tw, 1 - clamp(f.age / 0.12)) });
        p.glow(f.x, f.y, 6 + r * 1.4, C[4], 0.12);
        if (tw > 0.5) flare(p, f.x, f.y, (3 + r * 0.7) * tw, tw, C);
      }
      ps.draw(p);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i3jdb7j=__r(1);const Particles=__i3jdb7j.Particles;const Bits=__i3jdb7j.Bits;const Lights=__i3jdb7j.Lights;const P=__i3jdb7j.P;const B=__i3jdb7j.B;const Rng=__i3jdb7j.Rng;const fit=__i3jdb7j.fit;const crystal=__i3jdb7j.crystal;const band=__i3jdb7j.band;const flare=__i3jdb7j.flare;const clamp=__i3jdb7j.clamp;const smooth=__i3jdb7j.smooth;const ease=__i3jdb7j.ease;const rand=__i3jdb7j.rand;const TAU=__i3jdb7j.TAU;const WHITE=__i3jdb7j.WHITE;const READY=__i3jdb7j.READY;
const meta = {
  name: "Frost nova",
  desc: "Frost spirals into a spinning snowflake, then a wave blooms three rings of ice crystals round the caster; snow drifts, frost creeps, and the ice melts back into the floor.",
  tags: ["ice", "nova", "aoe", "frost", "magic", "one-shot"],
  size: [288, 192],
  origin: [144, 150],
  duration: 3.4,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: { palette: ["#151a3d", "#212f6b", "#2c58aa", "#3a8bd8", "#62c8f4", "#a6ecff", "#dcfbff", "#ffffff"], reach: 104, seed: 4 },
};
const HIGH = { turn: 1.15, crouch: 0, fx: -7, fy: -44, bx: 8, by: -44, ffx: -5, fbx: 6 };
const SLAM = { turn: 1.15, crouch: 8, lean: 3, fx: -9, fy: -8, bx: 11, by: -8, ffx: -8, fbx: 9 };
const EASE = { turn: 1, crouch: 2, fx: -8, fy: -17, bx: 9, by: -17, ffx: -4, fbx: 5 };
const act = {
  target: { x: 76 },
  poses: [
    [-0.34, READY],
    [-0.04, { ...HIGH, crouch: 2, fy: -36, by: -36 }],
    [0.36, HIGH],
    [0.42, SLAM, "snap"],
    [0.9, { ...SLAM, crouch: 7 }],
    [1.9, { ...SLAM, crouch: 6 }],
    [2.6, EASE],
    [3.4, READY],
  ],
  hits: [
    { t: 0.42, stop: 0.1, shake: 0.26, amp: 2, target: false },
    { t: 0.66, push: 0.9, straw: 6, y: -10, skin: "ice", shiver: 1.7 },
    { t: 2.9, push: 0.2, straw: 0, flash: 0, skin: null },
  ],
  dust: [{ t: 0.42, x: 10, n: 5, dir: 1, c: "#d8f2ff" }, { t: 0.42, x: -10, n: 5, dir: -1, c: "#d8f2ff" }],
};
const CHARGE = 0.42, SPREAD = 0.62, HOLD = 1.95, MELT = 0.7, CORE_Y = -24;

const RINGS = [
  { q: [0.15, 0.24], h: [24, 32], w: [10, 13], n: 2, kids: 2 },
  { q: [0.36, 0.52], h: [13, 19], w: [7, 9], n: 3, kids: 1 },
  { q: [0.62, 0.9], h: [5, 10], w: [4, 6], n: 4, kids: 0 },
];

function frost(p, C, x0, x1, reach, a, edge) {
  for (let x = Math.floor(x0); x <= Math.ceil(x1); x++) {
    const d = Math.abs(x + 0.5), q = d / reach, k = clamp((a * 1.15 - q) / 0.15);
    if (k <= 0) continue;
    const h = rand(x, 17), fresh = edge > 0 && d > edge - 3, tuft = h < 0.45 ? Math.round((1 + rand(x, 5) * 3) * (1 - q * 0.6)) : 0, D = (4 + rand(x, 11) * 4) * (1 - q * 0.5);
    p.dot(x, 0, fresh || h < 0.25 ? WHITE : C[6], k);
    for (let j = 1; j <= tuft; j++) p.dot(x, -j, j === tuft ? WHITE : C[5], k);
    if (tuft > 1 && rand(x, 9) < 0.5) p.dot(x + (rand(x, 3) < 0.5 ? -1 : 1), -tuft + 1, C[6], k);
    for (let j = 1; j <= D; j++) {
      const v = j / D;
      p.dot(x, j, rand(x * 31 + j, 7) < 0.06 ? WHITE : v < 0.25 ? C[6] : v < 0.55 ? C[5] : C[4], k * (1.1 - v) * (fresh ? 1.3 : 1));
    }
  }
}

function snowflake(p, C, x, y, L, spin, k) {
  if (L < 0.8) return;
  for (let i = 0; i < 6; i++) {
    const a = spin + (i * TAU) / 6, ca = Math.cos(a), sa = Math.sin(a);
    for (let d = 0; d <= L; d += 0.5) p.dot(x + ca * d, y + sa * d, d < L * 0.4 ? WHITE : C[6], k + 0.2);
    if (L > 3)
      for (const s of [-1, 1]) {
        const bx = x + ca * L * 0.6, by = y + sa * L * 0.6, ba = a + s * 0.9;
        for (let d = 0; d <= L * 0.35; d += 0.5) p.dot(bx + Math.cos(ba) * d, by + Math.sin(ba) * d, C[5], k);
      }
  }
  p.px(x, y, WHITE);
  p.glow(x, y, 10 + L * 3, C[5], 0.35 + 0.5 * k);
}
function create(o) {
  const C = fit(o.palette, 8), DIM = [C[0], C[0], C[1], C[2], C[3], C[4], C[5], C[6]], REACH = o.reach;
  const R = new Rng(o.seed), floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[7], C[6], C[5], C[4]], haze: C[5] });
  const bits = new Bits({ ground: floor }), lights = new Lights();
  const front = (t) => (t < CHARGE ? 0 : REACH * (1 - Math.pow(1 - clamp((t - CHARGE) / SPREAD), 3)));
  const reachedAt = (d) => CHARGE + SPREAD * (1 - Math.cbrt(1 - Math.min(1, d / REACH)));

  const sites = [];
  for (const side of [-1, 1])
    RINGS.forEach((ring, ri) => {
      for (let i = 0; i < ring.n; i++) {
        const q = ring.q[0] + ((ring.q[1] - ring.q[0]) * (i + R.range(0.2, 0.8))) / ring.n, h = R.range(...ring.h), w = R.range(...ring.w);
        const parts = [{ dx: 0, h, w, lean: side * h * R.range(0.1, 0.28) }];
        for (let k = 0; k < ring.kids; k++) {
          const s = k % 2 ? -side : side, kh = h * R.range(0.4, 0.62);
          parts.unshift({ dx: s * R.range(0.3, 0.5) * w, h: kh, w: w * 0.62, lean: s * kh * R.range(0.35, 0.6) });
        }
        sites.push({ x: side * q * REACH, d: q * REACH, h, back: (i + ri + (side > 0 ? 1 : 0)) % 2 === 1, t0: reachedAt(q * REACH) + R.range(0, 0.03), up: false, parts, phase: R.next() });
      }
    });
  let t = 0, released = false;
  const sink = (tt) => smooth(HOLD, HOLD + MELT, tt);
  const drawCrystals = (p, back) => {
    const m = sink(t);
    for (const s of sites) {
      if (!s.up || s.back !== back || m >= 1) continue;
      const g = ease.outBack(clamp((t - s.t0) / 0.1), 2.6), white = t < s.t0 + 0.03, sw = (((t - s.t0) * 0.7 + s.phase * 3) % 1.6) / 0.5;
      for (const q of s.parts)
        crystal(p, s.x + q.dx, back ? -1 : 0, q.h * g * (1 - m), q.w * (1 - m * 0.3), q.lean * g * (1 - m), back ? DIM : C, { white, glint: sw <= 1 ? sw : -1 });
    }
  };
  const ring = (p, back) => {
    if (t < CHARGE) return;
    const u = clamp((t - CHARGE) / (SPREAD + 0.15));
    if (u >= 1) return;
    band(p, 0, 0, front(t) + 2, 0.16, Math.max(2, 10 * Math.pow(1 - u, 0.7)), u < 0.75 ? 1 : (1 - u) / 0.25, C, (g) => Math.sin(g) < 0 === back, t - CHARGE < 0.1);
    if (!back) for (const s of [-1, 1]) p.glow(s * (front(t) + 2), -2, 22, C[5], 0.55 * (1 - u));
  };
  return {
    update(dt) {
      t += dt;
      if (t < CHARGE - 0.06) {

        if (R.chance(0.9)) {
          const a = R.range(0, TAU), D = R.range(26, 58), T = R.range(0.2, 0.3), v = (D * 3) / (Math.exp(3 * T) - 1);
          const x = Math.cos(a) * D, y = Math.min(CORE_Y + Math.sin(a) * D * 0.8, -2), l = Math.hypot(x, y - CORE_Y) || 1;
          ps.spawn(P.STREAK, x, y, (-x / l) * v, ((CORE_Y - y) / l) * v, T, R.chance(0.5) ? C[6] : C[5]);
        }
        if (R.chance(0.14)) {
          const s = R.sign();
          ps.spawn(P.VAPOUR, s * R.range(28, 60), -R.range(0, 2), -s * R.range(35, 70), -R.range(0, 3), R.range(0.35, 0.5), C[6], R.range(2, 3));
        }
      }
      if (t >= CHARGE && !released) {
        released = true;
        lights.add(0, CORE_Y, 84, C[4], 0.8, 0.55);
        lights.add(0, CORE_Y, 45, WHITE, 0.7, 0.12);
        for (let i = 0; i < 22; i++) {
          const a = R.range(-Math.PI, 0.25), sp = R.range(110, 280);
          bits.add({ kind: B.SHARD, x: R.range(-3, 3), y: CORE_Y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 0.7, drag: 0.6, bounce: 0.3, life: R.range(0.9, 1.5), a: R.range(0, TAU), va: R.range(-20, 20), s: R.range(1.5, 3.5), c: R.pick([C[7], C[6], C[5]]) });
        }
        for (let i = 0; i < 14; i++) {
          const a = R.range(-Math.PI, 0), sp = R.range(40, 160);
          ps.spawn(P.FLAKE, 0, CORE_Y, Math.cos(a) * sp, Math.sin(a) * sp, R.range(1.2, 1.8), R.chance(0.6) ? WHITE : C[6], R.range(0.5, 1.6));
        }
      }
      const fr = front(t);
      if (t > CHARGE && t < CHARGE + SPREAD)
        for (const s of [-1, 1]) {
          ps.spawn(P.VAPOUR, s * fr + R.range(-2, 2), -R.range(0, 5), s * R.range(15, 75), -R.range(2, 15), R.range(0.6, 1), R.chance(0.7) ? C[6] : C[5], R.range(3, 5.5) * (1 - 0.4 * (fr / REACH)));
          if (R.chance(0.45)) ps.spawn(P.FLAKE, s * fr, -2, s * R.range(10, 45), -R.range(30, 85), R.range(1.1, 1.9), R.chance(0.5) ? WHITE : C[6], R.range(0.5, 1.2));
        }
      for (const s of sites) {
        if (!s.up && t >= s.t0) {
          s.up = true;

          for (let i = 0; i < 2 + Math.round(s.h / 8); i++) {
            const a = -Math.PI / 2 + R.range(-1.3, 1.3), sp = R.range(60, 200) * (0.5 + s.h / 40);
            bits.add({ kind: B.SHARD, x: s.x + R.range(-3, 3), y: 0, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 0.8, drag: 0.6, bounce: 0.3, life: R.range(0.9, 1.6), a: R.range(0, TAU), va: R.range(-18, 18), s: R.range(1.5, 3), c: R.pick([C[7], C[6], C[5]]) });
          }
          ps.spawn(P.VAPOUR, s.x, -1, R.range(-30, 30), -R.range(2, 8), R.range(0.5, 0.9), C[6], R.range(2.5, 4));
          if (s.h > 10) ps.spawn(P.STAR, s.x + R.range(-3, 3), -R.range(4, s.h * 0.8), 0, -3, R.range(0.3, 0.6), C[6], R.range(1, 2.4));
        }
      }

      if (t > CHARGE + 0.2 && t < HOLD + 0.2) {
        if (R.chance(0.5)) {
          const s = R.pick(sites);
          if (s.up) ps.spawn(P.STAR, s.x + R.range(-3, 3), -R.range(2, s.h * 0.9), 0, -3, R.range(0.3, 0.6), R.chance(0.6) ? C[6] : WHITE, R.range(0.6, 2.2));
        }
        if (t < HOLD - 0.3 && R.chance(0.16)) ps.spawn(P.FLAKE, R.range(-1, 1) * fr, -R.range(40, 90), R.range(-5, 5), R.range(3, 10), R.range(1.1, 1.5), R.chance(0.5) ? WHITE : C[6], R.range(0.5, 1.4));
      }

      if (t > HOLD && t < HOLD + MELT) {
        if (R.chance(0.5)) {
          const s = R.pick(sites);
          bits.add({ kind: B.DRIP, x: s.x + R.range(-3, 3), y: -R.range(3, s.h * 0.6 * (1 - sink(t))), vy: 10, g: 0.6, life: 1, c: C[5] });
        }
        if (R.chance(0.25)) ps.spawn(P.VAPOUR, R.range(-1, 1) * REACH * 0.8, -R.range(0, 3), R.range(-10, 10), -R.range(6, 16), R.range(0.6, 1), C[5], R.range(3, 5));
      }
      ps.update(dt);
      bits.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      const out = 1 - smooth(HOLD + 0.2, HOLD + MELT + 0.6, t), fr = front(t);
      if (out > 0 && t > CHARGE) frost(p, C, -Math.max(12, fr + 1), Math.max(12, fr + 1), REACH, out, fr);
      ring(p, true);
      drawCrystals(p, true);
      ps.draw(p, "back");
    },
    draw(p) {
      ring(p, false);
      drawCrystals(p, false);
      if (t < CHARGE) {
        const k = t / CHARGE, beat = 1 + 0.25 * Math.exp(-((t - CHARGE * 0.55) ** 2) / 0.002) + 0.3 * Math.exp(-((t - CHARGE * 0.85) ** 2) / 0.002);
        snowflake(p, C, 0, CORE_Y, (2 + 5.5 * k * k) * beat, t * 4, k);
      } else if (t < CHARGE + 0.22) {
        const a = (t - CHARGE) / 0.22;
        flare(p, 0, CORE_Y, 36 * Math.pow(1 - a, 1.5), 1 - a, C);
        p.glow(0, CORE_Y, 46, WHITE, 0.6 * (1 - a));
      }

      if (t > CHARGE) {
        const k = (1 - smooth(HOLD, HOLD + MELT + 0.3, t)) * (0.85 + 0.15 * Math.sin(t * 2.4)), fr = front(t);
        for (let i = -3; i <= 3; i++) p.glow((i / 3.5) * fr, -4, 26, C[4], 0.16 * k);
      }
      bits.draw(p);
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ifuzxrk=__r(1);const Particles=__ifuzxrk.Particles;const Lights=__ifuzxrk.Lights;const P=__ifuzxrk.P;const Rng=__ifuzxrk.Rng;const fit=__ifuzxrk.fit;const sparkle=__ifuzxrk.sparkle;const flare=__ifuzxrk.flare;const clamp=__ifuzxrk.clamp;const ease=__ifuzxrk.ease;const WHITE=__ifuzxrk.WHITE;const READY=__ifuzxrk.READY;
const __iid9hkk=__r(24);const through=__iid9hkk.through;const slash=__iid9hkk.slash;const slashEnd=__iid9hkk.slashEnd;const shavings=__iid9hkk.shavings;const sliver=__iid9hkk.sliver;
const meta = {
  name: "Double slash",
  desc: "A down cut, then an up cut that crosses it: the moment the X closes both strokes flash white, the crossing bursts with light and sparks, and a dotted X lingers.",
  tags: ["melee", "slash", "combo", "sword", "cross", "combat", "directional", "one-shot"],
  size: [164, 108],
  origin: [44, 92],
  duration: 0.8,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: {
    palette: ["#2a0a22", "#5e1238", "#a01f4e", "#e0386a", "#ff86a6", "#ffd2dd", "#ffffff"],
    sparks: ["#fff3a6", "#ffe26b", "#ff8a2a", "#f2561d"],
    seed: 6,
  },
};
const STANCE = { ...READY, weapon: "sword", fx: 12, fy: -21, sa: -0.85 };
const HIGH = { ...STANCE, x: -7, crouch: 4, lean: -4, fx: -7, fy: -35, sa: -2.65, bx: 9, by: -25, armsFront: true, ffx: 9, fbx: -8 };
const LOW = { ...STANCE, x: 3, crouch: 6, lean: 6, fx: 22, fy: -20, sa: 0.62, bx: -8, by: -24, ffx: 13, fbx: -10, toeB: true };
const act = {
  target: { x: 62 },
  poses: [
    [-0.42, { ...STANCE, x: -7 }],
    [-0.18, HIGH],
    [-0.04, { ...HIGH, crouch: 5 }],
    [0, { ...STANCE, x: 0, crouch: 2, lean: 3, fx: 16, fy: -37, sa: -1.45, bx: -7, by: -24, ffx: 11, fbx: -9, ghost: 1 }, "snap"],
    [0.06, LOW, "snap"],
    [0.14, { ...LOW, x: 4, crouch: 6, lean: 5, fx: 20, fy: -17, sa: 0.85, ghost: 1 }],
    [0.17, { ...LOW, x: 5, crouch: 3, lean: 5, fx: 22, fy: -28, sa: 0.1, by: -18, toeB: true, ghost: 1 }, "snap"],
    [0.21, { ...LOW, x: 6, crouch: 1, lean: 6, fx: 19, fy: -37, sa: -0.95, by: -18, ffx: 13, fby: -6 }, "snap"],
    [0.5, { ...LOW, x: 6, crouch: 3, lean: 3, fx: 18, fy: -36, sa: -1.05, by: -19, ffx: 12 }],
    [0.92, { ...STANCE, x: -7 }],
  ],
  hits: [
    { t: 0.06, stop: 0.05, shake: 0.08, amp: 1, push: 1.4, straw: 8 },
    { t: 0.16, stop: 0.14, shake: 0.2, amp: 2, push: 2.8, straw: 18, y: -28 },
  ],
  dust: [{ t: 0.06, x: 16, n: 5, dir: 1 }, { t: 0.17, x: -8, n: 4, dir: -1 }],
};
const UP = 0.14; // the second cut starts
const R0 = 62;
const cut = (x, y, th, dir, span, extra) => through(x, y, th, dir, R0, span, 0.55, extra);
function create(o) {
  const C = fit(o.palette, 7), Rg = new Rng(o.seed), ps = new Particles({ rng: Rg, ground: () => 0, sparks: o.sparks }), lights = new Lights();
  const X = 34, Y = -23;
  const down = cut(X, Y, 0.72, 1, 0.84, { W: 10, t0: 0, sweep: 0.06, hold: 0.07, trail: 0.24, ramp: C, lens: true });
  const up = cut(X, Y, -0.66, -1, 0.84, { W: 11, t0: UP, sweep: 0.06, hold: 0.06, trail: 0.26, ramp: C, lens: true });
  const ends = [slashEnd(down), slashEnd(up)], slivers = [-2.4, -1.1, 0.2, 1.6].map((a) => ({ a: a + Rg.range(-0.2, 0.2), r: Rg.range(5, 8), v: Rg.range(70, 120), arc: Rg.range(0.4, 0.7) }));
  const CLOSE = UP + 0.012;
  let t = 0, cut1 = false, cut2 = false, closed = false;
  return {
    update(dt) {
      t += dt;
      if (!cut1 && t >= down.sweep) {
        cut1 = true;
        shavings(ps, Rg, down, 10, [C[4], C[5]]);
        for (let i = 0; i < 6; i++) {
          const a = Math.atan2(ends[0].dy, ends[0].dx) + Rg.range(-0.5, 0.5), sp = Rg.range(120, 300);
          ps.spawn(P.SPARK, ends[0].x, ends[0].y, Math.cos(a) * sp, Math.sin(a) * sp, Rg.range(0.12, 0.3));
        }
      }
      if (!closed && t >= CLOSE) {
        closed = true;
        lights.add(X, Y, 56, C[3], 0.45, 0.4);
        lights.add(X, Y, 18, WHITE, 0.6, 0.08);
        for (let i = 0; i < 18; i++) {
          const a = Rg.range(-Math.PI, Math.PI) * 0.8, sp = Rg.range(140, 360);
          ps.spawn(P.SPARK, X, Y, Math.cos(a) * sp, Math.sin(a) * sp - 40, Rg.range(0.14, 0.4));
        }
        for (let i = 0; i < 5; i++) ps.spawn(P.STAR, X + Rg.range(-14, 14), Y + Rg.range(-12, 12), 0, -4, Rg.range(0.2, 0.4), Rg.chance(0.5) ? C[5] : WHITE, Rg.range(1, 2.2), Rg.range(0.05, 0.2));
      }
      if (!cut2 && t >= UP + up.sweep) {
        cut2 = true;
        shavings(ps, Rg, up, 12, [C[4], C[5]]);
      }
      ps.update(dt);
      lights.update(dt);
    },
    draw(p) {

      const flash = t >= CLOSE && t < CLOSE + 0.07 ? 1 : 0;
      down.hot = up.hot = flash;
      slash(p, down, t);
      slash(p, up, t);

      for (const [s, e] of [[down, ends[0]], [up, ends[1]]]) {
        const g = t - s.t0 - s.sweep * 0.6;
        if (g > 0 && g < 0.2) sparkle(p, e.x, e.y, 7 * ease.outBack(Math.min(1, g / 0.05)) * (1 - g / 0.2), C[5], C[3], 0.5);
      }

      const q = t - CLOSE;
      if (q >= 0 && q < 0.26) {
        const k = q / 0.26;
        flare(p, X, Y, 22 * Math.pow(1 - k, 1.4), 1 - k, C);
        p.glow(X, Y, 34, C[4], 0.35 * (1 - k));
      }
      if (q >= 0.03 && q < 0.15) {
        const k = (q - 0.03) / 0.12;
        for (const s of slivers) sliver(p, X, Y, s.a, s.r + s.v * (q - 0.03), s.arc * (1 - 0.4 * k), k < 0.4 ? C[6] : k < 0.7 ? C[5] : C[4], 1 - k);
      }

      for (const s of [down, up]) {
        const u = t - s.t0;
        if (u <= 0 || u >= 0.25) continue;
        const e = slashEnd({ ...s, span: s.span * ease.outExpo(clamp(u / s.sweep)) });
        p.glow(e.x, e.y, 40, C[3], 0.5 * (1 - u / 0.25));
      }
      ps.draw(p);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});Object.defineProperty(__e,"actorAlpha",{enumerable:true,configurable:true,get:()=>actorAlpha});
const __i40tcgt=__r(1);const Particles=__i40tcgt.Particles;const Lights=__i40tcgt.Lights;const P=__i40tcgt.P;const Rng=__i40tcgt.Rng;const fit=__i40tcgt.fit;const band=__i40tcgt.band;const clamp=__i40tcgt.clamp;const smooth=__i40tcgt.smooth;const ease=__i40tcgt.ease;const rand=__i40tcgt.rand;const WHITE=__i40tcgt.WHITE;const hex=__i40tcgt.hex;const luma=__i40tcgt.luma;const READY=__i40tcgt.READY;
const __i2v3wfa=__r(53);const bodyOf=__i2v3wfa.bodyOf;const rimOf=__i2v3wfa.rimOf;
const meta = {
  name: "Soul rise",
  desc: "The body's outline flares and dims, then a pale glowing copy of it lifts out, stretching as its legs melt into a rippling wisp, shedding motes until it thins into light.",
  tags: ["spawn", "death", "soul", "ghost", "spirit", "rise", "light", "one-shot"],
  size: [96, 140],
  origin: [48, 126],
  duration: 3.2,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: {
    palette: ["#101a33", "#1f3563", "#35609e", "#5c96d4", "#94c8f0", "#d2f0ff", "#ffffff"],
    height: 50,
    seed: 27,
  },
};
const SLUMP = { crouch: 8, lean: 6, hy: 2, fx: 7, fy: -9, bx: 11, by: -9, ffx: 9, fbx: -8 };
const act = {
  onBody: true,
  follow: 0,
  poses: [
    [-0.2, READY],
    [0.3, { turn: 1, crouch: 2, hy: -1, fx: -10, fy: -24, bx: 11, by: -24, ffx: -3, fbx: 4 }],
    [0.7, { turn: 0.7, crouch: 4, lean: 3, hy: 1, fx: 2, fy: -14, bx: 8, by: -14, ffx: 4, fbx: -3 }],
    [1.1, SLUMP],
    [2.7, SLUMP],
    [3.2, { ...SLUMP, crouch: 7 }],
  ],
  dust: [{ t: 1.1, x: 0, n: 5 }],
};
const LEAVE = 0.35, TOP = 2.05, GONE = 2.55, SHADOW = hex("#0c0f1e");
function create(o) {
  const C = fit(o.palette, 7), R = new Rng(o.seed), floor = () => 0;
  const body = bodyOf(o.actor, C), rim = rimOf(body), W = body.w, Hh = body.h, waist = Math.round(Hh * 0.6);

  const tone = body.list.map((b) => (b.edge ? 6 : 3 + Math.min(2, Math.floor(luma(b.c) * 3.6))));
  const toneAt = new Int8Array(W * Hh).fill(-1);
  body.list.forEach((b, i) => (toneAt[b.my * W + b.mx] = tone[i]));
  const ps = new Particles({ rng: R, ground: floor, sparks: [WHITE, C[5], C[4], C[3]] }), lights = new Lights();
  let t = 0, left = false;

  const lift = () => o.height * ease.inOutSine(clamp((t - LEAVE) / (TOP - LEAVE)));
  const stretch = () => 1 + 0.22 * ease.inOutSine(clamp((t - LEAVE) / (TOP - LEAVE)));
  const sway = (row) => Math.sin(t * 3 - row * 0.12) * 2.2 * smooth(LEAVE, LEAVE + 0.5, t);
  const melt = () => smooth(LEAVE + 0.1, LEAVE + 0.9, t);

  const thin = () => smooth(TOP - 0.25, GONE, t);

  const ring = (p, near) => {
    const k = (t - LEAVE) / 0.5;
    if (k > 0 && k < 1) band(p, 0, 0, 6 + 26 * ease.outCubic(k), 0.18, Math.max(1, 3 * (1 - k)), 1.15 - k, C, (g) => (Math.sin(g) >= 0) === near, k < 0.12);
  };
  return {
    update(dt) {
      t += dt;
      if (!left && t >= LEAVE) {
        left = true;
        lights.add(0, -20, 50, C[4], 0.85, 0.55);
        lights.add(0, -20, 24, WHITE, 0.8, 0.12);
        for (let i = 0; i < 10; i++) {
          const c = R.pick(rim);
          ps.spawn(P.STAR, c.x, c.y, R.range(-20, 20), -R.range(20, 60), R.range(0.4, 0.8), R.pick([WHITE, C[5]]), R.range(0.8, 1.8));
        }
      }

      if (t > LEAVE && t < GONE) {
        const s = stretch(), y0 = body.y * s - lift(), th = thin();
        for (let n = 0; n < (th > 0 ? 3 : 1); n++) {
          if (!R.chance(th > 0 ? 0.9 : 0.5)) continue;
          const c = R.pick(rim), row = c.my;
          if (row / Hh < 1 - th * 1.1 - 0.05 && th > 0) continue;
          const x = c.x * (1 - 0.12 * (s - 1) * 4) + sway(row), y = y0 + c.my * s;

          const life = Math.min(R.range(0.5, 1.1), meta.duration - 0.1 - t, (y + 120) / 60);
          if (life > 0.1) ps.spawn(R.chance(0.7) ? P.MOTE : P.STAR, x, y, R.range(-12, 12), -R.range(25, 60), life, R.pick([WHITE, C[5], C[5], C[4]]), R.range(0.5, 1));
        }
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      const k = smooth(0, LEAVE, t) * (1 - smooth(LEAVE + 0.4, TOP, t));
      if (k > 0) p.glow(0, -1, 26, C[4], 0.3 * k);
      ring(p, false);
    },
    draw(p) {

      if (t < LEAVE + 0.3) {
        const k = t < LEAVE ? t / LEAVE : 1 - (t - LEAVE) / 0.3;
        for (const c of rim) if (rand(c.mx, c.my, Math.floor(t * 30)) < 0.25 + 0.7 * k) p.px(c.x, c.y, k > 0.7 ? WHITE : C[5]);
        p.glow(0, -19, 26, C[4], 0.45 * k);
      }
      const dim = smooth(LEAVE, LEAVE + 0.6, t) * (1 - smooth(GONE, meta.duration - 0.1, t));
      if (dim > 0) for (const b of body.list) p.blend(b.x, b.y, SHADOW, 0.45 * dim);
      ring(p, true);
      if (t < LEAVE || t > GONE + 0.1) {
        ps.draw(p);
        lights.draw(p);
        return;
      }

      const s = stretch(), L = lift(), m = melt(), th = thin(), top = body.y * s - L, sx = 1 - 0.12 * (s - 1) * 4;
      const tail = Math.round(10 * m), y1 = top + (Hh + tail) * s, fadeIn = clamp((t - LEAVE) / 0.15);
      for (let y = Math.floor(top); y <= Math.ceil(y1); y++) {
        const my = Math.floor((y + 0.5 - top) / s);
        if (my < 0) continue;

        const k = my >= waist ? (my - waist + 1) / (Hh - waist + tail) : 0, narrow = 1 - k * m * 0.95;
        if (narrow <= 0.05) continue;
        const cx = sway(my) + Math.sin(my * 0.7 - t * 8) * 2 * k * m, a = (my >= waist ? 1 - k * 0.45 : 1) * fadeIn;
        for (let x = Math.floor(cx - W / 2 - 4); x <= Math.ceil(cx + W / 2 + 4); x++) {
          const mx = Math.floor((x + 0.5 - cx) / (sx * narrow) - body.x);

          if (th > 0 && my / (Hh + tail) > 1 - th * 1.25 + 0.25 * rand(mx, my, 5) - 0.1) continue;
          let ti;
          if (my < Hh) {
            if (mx < 0 || mx >= W) continue;
            ti = toneAt[my * W + mx];
            if (ti < 0) continue;
          } else {

            const w = (1 - (my - Hh) / Math.max(1, tail)) * 3.2 * m, d = Math.abs(x + 0.5 - cx);
            if (d > w) continue;
            ti = d > w - 1 ? 5 : 4;
          }

          if (t < LEAVE + 0.07) p.px(x, y, ti >= 6 ? C[5] : WHITE);
          else if (ti >= 5) p.dot(x, y, ti >= 6 ? WHITE : C[5], Math.min(1, a * 1.3));
          else p.blend(x, y, C[ti], a * 0.7);
        }
      }

      const cy = top + Hh * s * 0.45;
      p.glow(sway(10), cy, 30, C[4], 0.42 * fadeIn * (1 - th));
      p.glow(sway(10), cy - 6, 14, C[5], 0.3 * fadeIn * (1 - th));
      ps.draw(p);
      lights.draw(p);
    },
  };
}
const actorAlpha = () => 1;
},
function(__e){Object.defineProperty(__e,"bodyOf",{enumerable:true,configurable:true,get:()=>bodyOf});Object.defineProperty(__e,"rimOf",{enumerable:true,configurable:true,get:()=>rimOf});
const __i6mq0s1=__r(1);const hex=__i6mq0s1.hex;
function bodyOf(actor, C) {
  const m = actor.mask, px = actor.pixels, list = [], cells = new Array(m.w * m.h).fill(null);
  const on = (mx, my) => mx >= 0 && my >= 0 && mx < m.w && my < m.h && !!m.data[my * m.w + mx];
  for (let my = 0; my < m.h; my++)
    for (let mx = 0; mx < m.w; mx++) {
      if (!on(mx, my)) continue;
      const own = px?.[my * m.w + mx];
      const c = own ? hex(own) : C[Math.max(1, Math.min(C.length - 2, Math.round((C.length - 2) * (0.85 - (my / m.h) * 0.5))))];
      const b = { x: actor.x + mx, y: actor.y + my, mx, my, c, edge: !on(mx - 1, my) || !on(mx + 1, my) || !on(mx, my - 1) || !on(mx, my + 1) };
      list.push(b);
      cells[my * m.w + mx] = b;
    }
  return { list, w: m.w, h: m.h, x: actor.x, y: actor.y, on, cell: (mx, my) => (on(mx, my) ? cells[my * m.w + mx] : null) };
}
function rimOf(body) {
  const out = [];
  for (let my = -1; my <= body.h; my++)
    for (let mx = -1; mx <= body.w; mx++)
      if (!body.on(mx, my) && (body.on(mx - 1, my) || body.on(mx + 1, my) || body.on(mx, my - 1) || body.on(mx, my + 1)))
        out.push({ x: body.x + mx, y: body.y + my, mx, my });
  return out;
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __iwdvhrj=__r(1);const Particles=__iwdvhrj.Particles;const Bits=__iwdvhrj.Bits;const Lights=__iwdvhrj.Lights;const P=__iwdvhrj.P;const PF=__iwdvhrj.PF;const B=__iwdvhrj.B;const Rng=__iwdvhrj.Rng;const fit=__iwdvhrj.fit;const band=__iwdvhrj.band;const clamp=__iwdvhrj.clamp;const smooth=__iwdvhrj.smooth;const ease=__iwdvhrj.ease;const TAU=__iwdvhrj.TAU;const WHITE=__iwdvhrj.WHITE;const mix=__iwdvhrj.mix;
const __ikkra23=__r(22);const stone=__ikkra23.stone;const star=__ikkra23.star;const makeCracks=__ikkra23.makeCracks;const drawCracks=__ikkra23.drawCracks;const frontCrescent=__ikkra23.frontCrescent;const rock=__ikkra23.rock;const rockShape=__ikkra23.rockShape;const SOOT=__ikkra23.SOOT;
const meta = {
  name: "Ground slam",
  desc: "Something lands hard: the floor flashes and cracks, two crescent shock waves race out along it, a dust wave and a tall dust cloud rise, rocks erupt, bounce and settle.",
  tags: ["impact", "ground", "slam", "shockwave", "quake", "rocks", "dust", "one-shot"],
  size: [288, 208],
  origin: [144, 164],
  duration: 3.2,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#2a1712", "#5e2c1c", "#a4502a", "#e8893a", "#ffc764", "#fff0b4", "#ffffff"], stone: "#4a3f69", reach: 104, seed: 5 },
};
const WAVE = 0.6; // seconds for the shock fronts to run out

function crater(p, st, hot, C, k) {
  for (let x = -12; x <= 11; x++) {
    const q = Math.abs(x + 0.5) / 12, dep = Math.round(2.6 * (1 - q * q));
    if (q < 0.84) {
      for (let y = 0; y < dep; y++) p.dot(x, y, SOOT, k);
      p.dot(x, dep, hot > 0.5 ? C[5] : hot > 0.2 ? C[4] : st.lip, k);
    } else {
      p.dot(x, -1, q > 0.93 ? st.light : st.lip, k);
      if (q < 0.9) p.dot(x, -2, st.light, k * 0.8);
    }
  }
}
function create(o) {
  const C = fit(o.palette, 7), st = stone(o.stone), REACH = o.reach, R = new Rng(o.seed), floor = () => 0, D = meta.duration;
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[6], C[5], C[4], C[3]] });
  const bits = new Bits({ ground: floor }), lights = new Lights(), HOT = [WHITE, C[5], C[4], C[3]];
  const dustLit = mix(st.dust, WHITE, 0.2), cracks = makeCracks(R, 10, { len: [22, 58], dive: 0.55, maxY: 22, forks: 0.7, x0: [2, 9] });
  const front = (t) => 7 + (REACH - 7) * ease.outCubic(clamp((t - 0.015) / WAVE));
  const heat = (t) => Math.pow(clamp(1 - t / 0.8), 1.4);
  const crest = (u) => [6 + 28 * Math.pow(1 - u, 0.75), 1.5 + 5 * Math.pow(1 - u, 0.9)]; // a front's height and thickness

  const burst = [
    { a: -0.07, len: R.range(34, 40), w: 1.9 }, { a: Math.PI + 0.07, len: R.range(34, 40), w: 1.9 },
    { a: -0.42 + R.range(-0.08, 0.08), len: R.range(15, 20), w: 1.5 }, { a: -Math.PI + 0.42 + R.range(-0.08, 0.08), len: R.range(15, 20), w: 1.5 },
    { a: -Math.PI / 2 + R.range(-0.15, 0.15), len: R.range(18, 24), w: 1.7 },
    { a: -1.05 + R.range(-0.1, 0.1), len: R.range(10, 14), w: 1.2 }, { a: -Math.PI + 1.05 + R.range(-0.1, 0.1), len: R.range(10, 14), w: 1.2 },
  ];

  const embers = [];
  for (const c of cracks)
    for (const [x, y, d] of c.pts) if (d > 3 && d < 32 && R.chance(0.25)) embers.push({ x, y, d, life: R.range(0.8, 2.2), ph: R.range(0, TAU) });

  lights.add(0, -12, 96, C[4], 0.6, 0.6);
  lights.add(0, -4, 50, WHITE, 0.9, 0.14);
  for (let i = 0; i < 56; i++) {
    const low = i < 14, s = R.sign(), a = low ? (s > 0 ? -R.range(0.04, 0.6) : Math.PI + R.range(0.04, 0.6)) : -Math.PI / 2 + R.range(-1.15, 1.15);
    const sp = low ? R.range(150, 380) : R.range(200, 500);
    ps.spawn(P.SPARK, R.range(-4, 4), -1, Math.cos(a) * sp, Math.sin(a) * sp, low ? R.range(0.2, 0.5) : R.range(0.25, 0.65), WHITE, 1, low ? 0 : R.range(0, 0.05));
  }

  for (let i = 0; i < 20; i++) {
    const s = i < 3 ? 4 : R.int(1, 3), a = -Math.PI / 2 + R.range(-0.5, 0.5), sp = s > 3 ? R.range(110, 190) : R.range(170, 380) * (s > 2 ? 0.8 : 1);
    bits.add({ kind: B.CHUNK, x: R.range(-7, 7), y: -2, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 1, drag: 0.4, bounce: 0.38, life: R.range(1.9, 2.7), a: R.range(0, TAU), va: R.range(-14, 14), s, pts: rockShape(R), pvy: 0 });
  }

  for (let i = 0; i < 110; i++) {
    const u = R.range(-1, 1), a = -Math.PI / 2 + u * 0.65, sp = R.range(110, 380) * (1 - 0.35 * Math.abs(u));
    ps.spawn(P.GRIT, u * 6, -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(1, 2.2), R.pick([st.light, st.body, st.body, st.shade, st.shade, st.lip]), R.chance(0.35) ? 2 : 1);
  }

  for (let i = 0; i < 28; i++) {
    const core = i < 14, s = R.sign();
    ps.spawn(P.SMOKE, core ? R.range(-5, 5) : s * R.range(4, 12), -R.range(2, 10), core ? R.range(-12, 12) : s * R.range(14, 38), -R.range(50, 130) * (core ? 1 : R.range(0.3, 0.6)), R.range(1.9, 2.7), R.chance(0.35) ? dustLit : st.dust, core ? R.range(4.5, 9) : R.range(4, 7.5), R.range(0.02, 0.22), PF.BIG);
  }
  for (let i = 0; i < 10; i++) {
    const s = R.sign();
    ps.spawn(P.SMOKE, s * R.range(2, 14), -R.range(2, 6), s * R.range(20, 70), -R.range(4, 20), R.range(1.4, 2.3), st.dust, R.range(6, 9), R.range(0, 0.08), PF.BIG);
  }

  for (let i = 0; i < 26; i++)
    ps.spawn(P.FLAKE, R.range(-22, 22), -R.range(14, 80), R.range(-12, 12), R.range(-10, 4), R.range(1.2, 2), R.chance(0.5) ? st.lip : dustLit, R.range(0.5, 1.2), R.range(0.25, 1));
  let t = 0;
  const acc = [R.next(), R.next()];
  const ring = (p, back) => {
    const u = clamp((t - 0.015) / (WAVE + 0.1));
    if (t < 0.015 || u >= 0.9) return;
    band(p, 0, 0.5, front(t) + 1, 0.16, Math.max(1, 4 * Math.pow(1 - u, 0.8)), u < 0.55 ? 1.1 : (0.9 - u) / 0.35,
      u < 0.35 ? [C[3], C[4], C[5], C[6]] : [st.body, st.light, C[4], C[5]], (g) => Math.sin(g) < 0 === back, t < 0.09);
  };
  const fronts = (p) => {
    const u = clamp((t - 0.03) / (WAVE + 0.16));
    if (t < 0.03 || u >= 1) return;
    const fr = front(t), [h, w] = crest(u), k = u < 0.7 ? 1 : (1 - u) / 0.3;
    const cols = u < 0.14 ? [WHITE, C[6], C[5]] : u < 0.34 ? [C[6], C[5], C[4]] : u < 0.55 ? [C[5], C[4], st.lip] : [st.lip, st.light, st.dust];
    for (const s of [-1, 1]) {
      frontCrescent(p, s * fr, s, h, w, cols, k);
      p.glow(s * fr, -h * 0.3, 8 + h * 0.7, C[4], 0.5 * (1 - u) * k);
    }
  };
  return {
    update(dt) {
      t += dt;

      const u = clamp((t - 0.015) / WAVE);
      if (u > 0 && u < 1) {
        const fr = front(t), [h] = crest(u);
        for (let k = 0; k < 2; k++) {
          const s = k ? 1 : -1;
          for (acc[k] += dt * 120 * (1 - u * 0.7); acc[k] > 1; acc[k]--) {
            ps.spawn(P.SMOKE, s * (fr - R.range(1, 7)), -R.range(0.5, 3), s * R.range(15, 70) * (1 - u), -R.range(2, 12), R.range(1, 2.1), R.chance(0.3) ? dustLit : st.dust, R.range(2.5, 6.5) * (1 - 0.4 * u), 0, PF.BIG);
            if (R.chance(0.5)) ps.spawn(P.DUST, s * (fr - R.range(0, 3)), -R.range(0.3, 0.9) * h, s * R.range(-15, 25), -R.range(8, 35), R.range(0.3, 0.6), R.chance(0.5) ? dustLit : st.dust, R.range(1.2, 2.4));
            if (R.chance(0.4)) ps.spawn(P.GRIT, s * fr, -1, s * R.range(10, 60), -R.range(40, 140) * (1 - u), R.range(0.5, 1), R.pick([st.light, st.body, st.lip]), 1);
            if (u < 0.45 && R.chance(0.2)) ps.spawn(P.SPARK, s * fr, -1, s * R.range(60, 200), -R.range(30, 160), R.range(0.12, 0.3));
          }
        }
      }
      for (const b of bits.list) b.pvy = b.vy;
      bits.update(dt);

      for (const b of bits.list)
        if (b.pvy > 70 && b.vy <= 0) {
          const n = b.pvy > 200 ? 3 : 2;
          for (let i = 0; i < n; i++) ps.spawn(P.DUST, b.x + R.range(-1.5, 1.5), -0.5, R.sign() * R.range(8, 35), -R.range(2, 16), R.range(0.3, 0.65), st.dust, R.range(1.3, 2.4) * (0.7 + b.s * 0.25));
          b.pvy = 0;
        }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      const fade = 1 - smooth(D - 0.9, D - 0.15, t), H = heat(t);
      if (t > 0.02) crater(p, st, H, C, fade);
      drawCracks(p, cracks, (c) => c.len * ease.outCubic(clamp((t - c.t0) / 0.1)), (d) => H * clamp(1.2 - d / 40), HOT, SOOT, st.light, fade);
      for (const e of embers) {
        const k = 1 - (t - 0.1) / e.life;
        if (t < 0.1 || k <= 0) continue;
        const f = 0.6 + 0.4 * Math.sin(t * 23 + e.ph);
        p.px(e.x, e.y, k * f > 0.55 ? C[5] : k * f > 0.25 ? C[4] : C[3]);
        p.glow(e.x, e.y, 4, C[4], 0.35 * k * f);
      }
      ring(p, true);
      ps.draw(p, "back");
    },
    draw(p) {
      ring(p, false);
      fronts(p);
      for (const b of bits.list) rock(p, b, st);
      ps.draw(p, "front");
      if (t < 0.035) {
        p.ellipse(0, 0, 30, 4.5, (d) => (d > 0.8 ? C[4] : d > 0.5 ? C[6] : WHITE));
        star(p, 0, -1, burst, 1, 1, [C[4], C[6], WHITE, WHITE]);
      } else if (t < 0.07) star(p, 0, -1, burst, 1.25, 0.5, [C[3], C[5], C[6], WHITE]);

      if (t < 0.14) p.glowLine(-80, 0, 80, 0, 10, C[5], 0.55 * (1 - t / 0.14));
      const H = heat(t);
      if (H > 0) p.glow(0, 1, 46, C[4], 0.35 * H);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i5dieq3=__r(1);const Particles=__i5dieq3.Particles;const Bits=__i5dieq3.Bits;const Lights=__i5dieq3.Lights;const P=__i5dieq3.P;const PF=__i5dieq3.PF;const B=__i5dieq3.B;const Rng=__i5dieq3.Rng;const fit=__i5dieq3.fit;const sparkle=__i5dieq3.sparkle;const clamp=__i5dieq3.clamp;const smooth=__i5dieq3.smooth;const ease=__i5dieq3.ease;const lerp=__i5dieq3.lerp;const TAU=__i5dieq3.TAU;const WHITE=__i5dieq3.WHITE;const hex=__i5dieq3.hex;const mix=__i5dieq3.mix;
const __i4vhq1f=__r(38);const stoneShape=__i4vhq1f.stoneShape;const drawRock=__i4vhq1f.drawRock;const drawSpike=__i4vhq1f.drawSpike;const spikeLook=__i4vhq1f.spikeLook;const spikeCrack=__i4vhq1f.spikeCrack;const floorCrack=__i4vhq1f.floorCrack;
const meta = {
  name: "Earth spike",
  desc: "The floor cracks with light and heaves, a faceted stone spike rams up with two side shards in a burst of chips, grit and dust; rubble rains, then it splits and crumbles.",
  tags: ["nature", "earth", "stone", "spike", "ground", "attack", "one-shot"],
  size: [272, 150],
  origin: [136, 132],
  duration: 3.4,
  loop: false,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#120c0c", "#251917", "#3b2a24", "#553d31", "#715440", "#8f6e52", "#b8966e", "#e6d0a8"],
    glow: ["#4a1a0c", "#a8401a", "#ff8a2a", "#ffd27a", "#fff4d0"],
    height: 62,
    seed: 5,
  },
};
const UP = 0.34, RISE = 0.09, CRACK = 1.18, SPLIT = 1.5, PART = 0.1, FALL = 0.42, SINK = 0.55;
function create(o) {
  const S = fit(o.palette, 8), G = fit(o.glow, 5), R = new Rng(o.seed), floor = () => 0, H = o.height;
  const DUST = mix(S[6], hex("#8c8494"), 0.45), DUST2 = mix(S[5], hex("#6c6474"), 0.4);
  const ps = new Particles({ rng: R, ground: floor, sparks: [G[4], G[3], G[2], G[1]] });
  const bits = new Bits({ ground: floor }), lights = new Lights();

  const spikes = [
    { x: -H * 0.17, H: H * 0.52, w: H * 0.22, lean: -H * R.range(0.13, 0.18), at: UP + 0.045, split: SPLIT - 0.1, back: true },
    { x: H * 0.18, H: H * 0.4, w: H * 0.2, lean: H * R.range(0.11, 0.15), at: UP + 0.085, split: SPLIT + 0.08, back: false },
    { x: 0, H, w: H * 0.36, lean: R.range(-2, 2), at: UP, split: SPLIT, back: false, main: true },
  ];
  for (const s of spikes) {
    s.look = spikeLook(R);
    s.cracks = [spikeCrack(R, R.range(0.04, 0.16), R.range(-0.6, -0.1), 1), spikeCrack(R, R.range(0.22, 0.4), R.range(0.1, 0.6), -1), spikeCrack(R, R.range(0.42, 0.58), R.range(-0.4, 0.4), R.sign())];
    s.up = s.split0 = false;
    s.cut = R.range(0.24, 0.32);
    s.top = 1;
  }
  const cracks = [floorCrack(R, -1, R.range(34, 44)), floorCrack(R, 1, R.range(34, 44)), floorCrack(R, -1, R.range(14, 20)), floorCrack(R, 1, R.range(14, 20))];
  const slabs = [-1, 1].map((sd) => ({ sd, x: sd * R.range(13, 16), pts: [[-1.2, -0.32], [1.1, -0.42], [1.2, 0.36], [-1.1, 0.4]], s: R.range(5.5, 7), a: sd * R.range(0.45, 0.65) }));
  const rock = (b) => bits.add({ ...b, pts: stoneShape(R) });
  let t = 0;
  const grown = (s) => (t < s.at ? 0 : ease.outBack(clamp((t - s.at) / RISE), 2.2));
  const open = () => ease.outCubic(clamp((t - 0.02) / 0.24));
  const heat = () => (t < UP ? smooth(0, UP, t) : 1 - smooth(UP, UP + 0.9, t));

  const gap = (s) => smooth(s.split, s.split + PART, t) * (s.main ? 3 : 2);
  const tip = (s) => smooth(s.split, s.split + PART + FALL, t) * 0.12 * s.H;
  const topAt = (s) => lerp(1, s.cut, ease.inQuad(clamp((t - s.split - 0.04) / FALL)));
  const erupt = (s) => {
    const k = s.H / H;
    lights.add(s.x, -s.H * 0.4, 30 * k + 14, WHITE, 0.5 * k + 0.1, 0.1);
    lights.add(s.x, -10, 60 * k + 20, G[2], 0.34 * k, 0.5);
    for (let i = 0; i < Math.round(16 * k) + 3; i++) {
      const a = -Math.PI / 2 + R.range(-1.1, 1.1), sp = R.range(140, 360) * (0.6 + 0.4 * k);
      rock({ kind: B.CHUNK, x: s.x + R.range(-s.w / 3, s.w / 3), y: -R.range(1, 6), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 1, drag: 0.35, bounce: 0.32, life: R.range(1.4, 2.4), a: R.range(0, TAU), va: R.range(-14, 14), s: R.range(1.6, 3.8) * (0.6 + 0.4 * k) });
    }
    for (let i = 0; i < Math.round(55 * k) + 10; i++) {
      const u = R.range(-1, 1), a = -Math.PI / 2 + u * 0.9, sp = R.range(90, 330) * (1 - 0.35 * Math.abs(u));
      ps.spawn(P.GRIT, s.x + u * s.w * 0.4, -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(1, 2), R.pick([S[6], S[5], S[4], S[4], S[3]]), R.chance(0.4) ? 2 : 1);
    }
    for (let i = 0; i < Math.round(9 * k) + 2; i++) {
      const a = -Math.PI / 2 + R.range(-1.2, 1.2), sp = R.range(160, 380);
      ps.spawn(P.SPARK, s.x, -R.range(2, 10), Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.15, 0.4));
    }

    for (let i = 0; i < Math.round(10 * k) + 3; i++) {
      const sd = R.sign();
      ps.spawn(P.SMOKE, s.x + sd * R.range(2, 10), -R.range(1, 4), sd * R.range(50, 170) * (0.5 + 0.5 * k), -R.range(3, 16), R.range(0.9, 1.6), R.chance(0.5) ? DUST : DUST2, R.range(3, 5.5) * (0.6 + 0.4 * k), R.range(0, 0.05), PF.BIG);
    }
    for (let i = 0; i < Math.round(14 * k) + 4; i++) {
      const sd = R.sign();
      ps.spawn(P.DUST, s.x + sd * R.range(0, 8), -R.range(0, 3), sd * R.range(40, 160), -R.range(2, 20), R.range(0.5, 1), R.chance(0.5) ? DUST : DUST2, R.range(1.5, 3.2));
    }
    for (let i = 0; i < Math.round(3 * k) + 1; i++)
      ps.spawn(P.SMOKE, s.x + R.range(-6, 6), -R.range(2, 12), R.range(-20, 20), -R.range(15, 45), R.range(1, 1.6), DUST, R.range(4, 6) * k + 2, R.range(0.02, 0.12), PF.BIG);
    if (s.main) {
      for (let i = 0; i < 3; i++) ps.spawn(P.STAR, s.x + R.range(-5, 5), -R.range(10, s.H * 0.9), 0, -3, R.range(0.25, 0.5), S[7], R.range(1, 2.2), R.range(0.1, 0.4));

      for (let i = 0; i < 14; i++) ps.spawn(P.GRIT, R.range(-60, 60), -R.range(110, 125), R.range(-15, 15), R.range(10, 60), R.range(1.2, 1.8), R.pick([S[5], S[4], S[3]]), R.chance(0.35) ? 2 : 1, R.range(0.25, 0.9));
    }
  };

  const crumble = (s, u0, u1) => {
    const g = gap(s), lean = s.lean, tp = tip(s);
    for (const half of [-1, 1]) {
      const u = (u0 + u1) / 2, hw = (s.w / 2) * Math.pow(1 - u, 0.85), x = s.x + lean * u + half * (g / 2 + hw * 0.45 + tp * u), y = -u * s.H;
      if (hw < 0.8 && half > 0) continue;
      rock({ kind: B.CHUNK, x, y, vx: half * R.range(8, 40) + lean * 0.6, vy: -R.range(0, 50), g: 1, drag: 0.3, bounce: 0.3, life: Math.min(R.range(1.1, 1.6), meta.duration - 0.15 - t), a: R.range(0, TAU), va: R.range(-8, 8), s: clamp(hw * 0.62, 1.6, 4.8) });
      for (let i = 0; i < 3; i++) ps.spawn(P.GRIT, x + R.range(-2, 2), y + R.range(-2, 2), half * R.range(5, 45), -R.range(10, 70), R.range(0.9, 1.6), R.pick([S[6], S[5], S[4], S[3]]), R.chance(0.35) ? 2 : 1);
    }
    if (R.chance(0.5)) ps.spawn(P.DUST, s.x + lean * u1 + R.range(-4, 4), -u1 * s.H, R.sign() * R.range(15, 45), R.range(20, 60), R.range(0.35, 0.6), DUST, R.range(2, 3.5));
  };
  const drawShard = (p, s) => {
    const g = grown(s);
    if (g <= 0) return;
    if (t < s.split) {
      const white = t - s.at < 0.04 || t > s.split - 0.045, crack = smooth(CRACK + (s.main ? 0 : 0.05), s.split - 0.03, t);
      const sw = (t - s.at) * 0.9 - 0.15, glint = sw > 0 && sw % 1.2 < 0.55 ? (sw % 1.2) / 0.55 : -1;
      drawSpike(p, s.x, 0, s.H * g, s.w, s.lean * Math.min(1, g), s.look, S, { white, glint, cracks: s.cracks, crack, heat: smooth(CRACK, s.split, t), glowRamp: G });
      return;
    }

    const top = topAt(s), gp = gap(s), tp = tip(s), sink = smooth(s.split + FALL, s.split + FALL + SINK, t) * s.H * (s.cut + 0.06);
    if (sink >= s.H * (s.cut + 0.05)) return;
    for (const half of [-1, 1]) drawSpike(p, s.x + (half * gp) / 2, sink, s.H, s.w, s.lean + half * tp, s.look, S, { half, clip: top, floor: 0, cracks: s.cracks, crack: 1, heat: 1 - smooth(s.split, s.split + 0.45, t), glowRamp: G });
  };
  return {
    update(dt) {
      t += dt;
      const f = Math.min(1, dt * 120);

      if (t < UP) {
        const L = open();
        for (const c of cracks)
          if (R.chance(0.35 * f)) {
            const q = c[Math.min(c.length - 1, Math.floor(R.range(0, L) * c.length))];
            ps.spawn(P.GRIT, q[0], -1, R.range(-20, 20), -R.range(30, 110), R.range(0.5, 1), R.pick([S[5], S[4]]), 1);
            if (R.chance(0.25)) ps.spawn(P.DUST, q[0], -1, R.range(-15, 15), -R.range(4, 14), R.range(0.3, 0.6), DUST2, R.range(1.5, 3));
          }
        if (t > 0.12 && R.chance(0.2 * f)) ps.spawn(P.DUST, R.sign() * R.range(10, 16), -R.range(1, 4), R.sign() * R.range(10, 30), -R.range(4, 12), R.range(0.4, 0.7), DUST2, R.range(2, 3.5));
      }
      for (const s of spikes) {
        if (!s.up && t >= s.at) (s.up = true), erupt(s);
        if (!s.split0 && t >= s.split) {
          s.split0 = true;
          lights.add(s.x, -s.H * 0.5, 30, WHITE, 0.3, 0.08);
          ps.spawn(P.STAR, s.x + s.lean * 0.5, -s.H * 0.55, 0, -2, 0.3, S[7], 2.5);
        }

        if (t >= s.split) {
          const top = topAt(s);
          while (s.top - top > 0.045 || (top <= s.cut + 1e-6 && s.top > s.cut + 1e-6)) {
            const u1 = s.top, u0 = Math.max(top, s.top - 0.11);
            crumble(s, u0, u1);
            s.top = u0;
            if (u0 <= s.cut + 1e-6) break;
          }
        }

        if (t < s.split && t > CRACK && R.chance(0.12 * f)) {
          const u = R.range(0.1, 0.7);
          ps.spawn(P.GRIT, s.x + s.lean * u + R.range(-2, 2), -u * s.H, R.range(-15, 15), -R.range(0, 20), R.range(0.6, 1.1), R.pick([S[5], S[4]]), 1);
          if (R.chance(0.3)) ps.spawn(P.DUST, s.x + s.lean * u, -u * s.H, R.range(-10, 10), -R.range(2, 8), R.range(0.4, 0.7), DUST, R.range(1.5, 2.5));
        }

        if (s.up && t < s.split && t > s.at + 0.2 && R.chance(0.05 * f)) {
          const u = R.range(0.2, 0.8), sd = R.sign();
          ps.spawn(P.GRIT, s.x + s.lean * u + sd * (s.w / 2) * (1 - u), -u * s.H, sd * R.range(10, 30), -R.range(0, 15), R.range(0.7, 1.2), R.pick([S[6], S[5]]), 1);
        }
        if (s.main && s.up && t < s.split && t > s.at + 0.25 && R.chance(0.03 * f))
          ps.spawn(P.STAR, s.x + R.range(-4, 2), -R.range(8, s.H * 0.85), 0, -2, R.range(0.25, 0.45), R.chance(0.5) ? S[7] : G[3], R.range(0.8, 2));

        if (t > s.split + FALL && t < s.split + FALL + SINK * 0.8 && R.chance(0.15 * f))
          ps.spawn(P.DUST, s.x + R.range(-s.w / 2, s.w / 2), -R.range(0, 2), R.sign() * R.range(20, 60), -R.range(0, 5), R.range(0.4, 0.7), DUST2, R.range(1.5, 3));
      }
      bits.update(dt);

      for (const b of bits.list)
        if (b.rest && !b.dusted) {
          b.dusted = true;
          for (let i = 0; i < 2; i++) ps.spawn(P.DUST, b.x + R.range(-1.5, 1.5), -0.5, R.sign() * R.range(8, 35), -R.range(2, 14), R.range(0.3, 0.6), DUST2, R.range(1.3, 2.6));
        }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      const L = open(), hk = heat(), fade = 1 - smooth(meta.duration - 1.1, meta.duration - 0.3, t);
      for (const c of cracks) {
        const m = Math.max(2, Math.ceil(c.length * L));
        for (let k = 1; k < m; k++) {
          const [x0, y0] = c[k - 1], [x1, y1] = c[k];
          p.line(x0, y0 + 1, x1, y1 + 1, S[0], fade);
          p.line(x0, y0, x1, y1, hk > 0.65 ? G[4] : hk > 0.35 ? G[3] : hk > 0.12 ? G[2] : hk > 0.03 ? G[1] : S[1], fade);
          if (k % 2 === 0) p.glow(x1, y1, 6, G[2], 0.3 * hk);
        }
      }
      if (hk > 0) p.glow(0, -3, 26, G[2], 0.35 * hk);
      ps.draw(p, "back");
      for (const s of spikes) if (s.back) drawShard(p, s);
    },
    draw(p) {

      if (t < UP + 0.02) {
        const k = smooth(0.06, UP, t), hm = 8 * k, jx = Math.sin(t * 95) * 0.8 * k;
        if (hm > 0.6)
          p.shade(-16, -hm - 1, 16, 1, (x, y, out) => {
            const dx = (x - jx) / 15, dy = y / hm, d = dx * dx + dy * dy;
            if (y > 0.5 || d > 1.18) return;
            out.c = d > 1 ? S[0] : dy < -0.72 ? S[6] : dx < -0.3 ? S[5] : dx > 0.35 ? S[3] : S[4];
          });
      }

      if (t >= UP) {
        const sink = smooth(SPLIT + FALL, SPLIT + FALL + SINK, t) * 7, a = 1 - smooth(SPLIT + FALL, SPLIT + FALL + SINK, t);
        for (const sl of slabs) {
          const g = ease.outBack(clamp((t - UP) / 0.1), 2);
          if (a > 0) drawRock(p, sl.x, -1.5 + sink, sl.s * Math.min(1, g), sl.a * g, sl.pts, S, a, t - UP < 0.04);
        }
      }
      for (const s of spikes) if (!s.back) drawShard(p, s);
      const m0 = spikes[2], leak = smooth(CRACK, SPLIT, t) * (1 - smooth(SPLIT, SPLIT + 0.5, t));
      if (leak > 0) p.glowLine(m0.x, -4, m0.x + m0.lean * 0.6, -m0.H * 0.6, 20, G[2], 0.22 * leak);
      for (const b of bits.list) drawRock(p, b.x, b.y, b.s, b.a, b.pts, S, Math.min(1, b.life / 0.4));
      ps.draw(p, "front");

      const m = spikes[2], e = t - m.at;
      if (e > 0 && e < 0.2) {
        const g = ease.outBack(clamp(e / RISE), 2.2);
        sparkle(p, m.x + m.lean, -m.H * g, 10 * (1 - e / 0.2), S[7], G[3], 0.5);
        p.glowLine(m.x, 0, m.x + m.lean, -m.H * g, 10, G[3], 0.3 * (1 - e / 0.2));
      }
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __isyhs00=__r(1);const Particles=__isyhs00.Particles;const Bits=__isyhs00.Bits;const Lights=__isyhs00.Lights;const P=__isyhs00.P;const PF=__isyhs00.PF;const B=__isyhs00.B;const Rng=__isyhs00.Rng;const fit=__isyhs00.fit;const sparkle=__isyhs00.sparkle;const band=__isyhs00.band;const clamp=__isyhs00.clamp;const smooth=__isyhs00.smooth;const ease=__isyhs00.ease;const rand=__isyhs00.rand;const TAU=__isyhs00.TAU;const WHITE=__isyhs00.WHITE;const READY=__isyhs00.READY;
const __in8yfv0=__r(24);const swing=__in8yfv0.swing;const onSwing=__in8yfv0.onSwing;const smear=__in8yfv0.smear;const trace=__in8yfv0.trace;const glowAlong=__in8yfv0.glowAlong;const stone=__in8yfv0.stone;const rock=__in8yfv0.rock;const cracks=__in8yfv0.cracks;const star=__in8yfv0.star;const sliver=__in8yfv0.sliver;const along=__in8yfv0.along;
const meta = {
  name: "Heavy cleave",
  desc: "A glint over the head, then a thick ember arc accelerates over the top into the floor: a white slam, glowing cracks, dust rolling both ways, grit and rising embers.",
  tags: ["melee", "slash", "cleave", "axe", "heavy", "ground", "fire", "combat", "directional", "one-shot"],
  size: [208, 116],
  origin: [68, 96],
  duration: 1.9,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: {
    palette: ["#2a0c10", "#5c1414", "#a3241a", "#e0481c", "#ff8a2a", "#ffc23d", "#fff0a0", "#ffffff"],
    stone: "#4a3f69",
    seed: 5,
  },
};
const REST_ = { ...READY, weapon: "greatsword", two: true, sa: -1, fx: 11, fy: -21 };
const OVER = { ...REST_, x: -4, crouch: 2, lean: -2, fx: 1, fy: -42, sa: -2.45, ffx: 8, fbx: -7 };
const FLOOR = { ...REST_, x: 0, crouch: 7, lean: 6, fx: 17, fy: -21, sa: 0.72, ffx: 11, fbx: -10, toeB: true };
const act = {
  target: { x: 66 },
  poses: [
    [-0.42, { ...REST_, x: -4 }],
    [-0.3, { ...REST_, x: -3, crouch: 4, fx: 13, fy: -29, sa: -1.3 }],
    [-0.12, { ...OVER, crouch: 4 }],
    [0.2, { ...OVER, crouch: 3 }],
    [0.27, { ...REST_, x: -1, y: -2, crouch: 0, lean: 2, fx: 11, fy: -42, sa: -1.45, ffx: 10, ghost: 1 }, "snap"],
    [0.31, { ...REST_, x: 0, y: -1, crouch: 3, lean: 4, fx: 18, fy: -33, sa: -0.45, ffx: 12, ghost: 1 }, "snap"],
    [0.335, FLOOR, "snap"],
    [0.85, { ...FLOOR, crouch: 6, lean: 5 }],
    [1.3, { ...REST_, x: -2, crouch: 4, lean: 2, fx: 15, fy: -23, sa: 0.1 }],
    [1.7, { ...REST_, x: -4 }],
  ],
  hits: [{ t: 0.335, stop: 0.2, shake: 0.34, amp: 3, push: 3.2, straw: 28, y: -8 }],
  dust: [{ t: 0.335, x: 18, n: 8, dir: 1 }, { t: 0.335, x: -12, n: 5, dir: -1 }],
};
const RAISE = 0.2; // the glint over the head
const SWING = 0.135; // the arc accelerates over the top
const HIT = RAISE + SWING;
const HOLD = 0.05, TRAIL = 0.22;
const head = (t) => ease.inQuad(clamp((t - RAISE) / SWING)); // fraction of the arc the edge has made
const passedAt = (f) => RAISE + SWING * Math.sqrt(clamp(f)); // when the edge passed fraction f
function create(o) {
  const C = fit(o.palette, 8), n = C.length, R = new Rng(o.seed), st = stone(o.stone), floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[6], C[5], C[4], C[3]] }), bits = new Bits({ ground: floor }), lights = new Lights();

  const A = swing({ cx: 3, cy: -22, R: 37, sy: 0.88, rot: 0.32, a0: -2.45, dir: 1 });
  let U1 = 0;
  while (onSwing(A, A.R, U1)[1] < -0.5 && U1 < 4) U1 += 0.005;
  const E = { ...A, R: A.R * 0.76 }, W = 16, WE = 5;
  const [X] = onSwing(A, A.R - 2, U1), GLINT = onSwing(A, A.R - 3, 0);
  const lines = cracks(R, X, 4, 40, 7, 0.4);

  const spikes = [-Math.PI, -2.7, -2.15, -1.62, -1.05, -0.45, 0].map((a, i) => ({ a: a + R.range(-0.08, 0.08), len: (i === 0 || i === 6 ? 20 : i === 3 ? 15 : 9) + R.range(0, 4), w: 1.6 + R.range(0, 0.6) }));
  const shards = [-2.5, -1.9, -1.2, -0.6].map((a) => ({ a: a + R.range(-0.15, 0.15), r: 8 + R.range(0, 3), v: R.range(80, 130), arc: R.range(0.35, 0.6) }));
  let t = 0, hit = false;
  const arc = (p, s, w0, lag, rim) => {
    const tt = t - lag, U = U1 * head(tt), T = U1 * smooth(HIT + HOLD, HIT + HOLD + TRAIL, tt);
    if (U < 0.02 || T >= U - 0.02) return;
    const gone = smooth(HIT + HOLD, HIT + HOLD + TRAIL, tt), shrink = 1 - 0.75 * gone;
    smear(p, s, T, U, w0, (u, r, out) => {
      const age = Math.max(0, tt - passedAt(u / U1)), v = (u - T) / (U - T);
      const w = w0 * shrink * Math.pow(Math.sin(Math.PI * Math.pow(v, 2.2)), 0.6);
      if (w < 0.4) return;
      const q = (s.R - r) / w;
      if (q < 0 || q > 1) return;
      const ci = rim && q < 0.22 && age < 0.12 ? 0 : Math.round(q * (n - 1) * 0.62 + age * 7 + Math.max(0, tt - HIT) * 10 - v * 0.8 + (rim ? 0.7 : 1.7));
      out.c = C[n - 1 - clamp(ci, 0, n - 1)];
      out.a = Math.min(1, v / 0.35) * (1.2 - gone);
    });
    if (rim) glowAlong(p, s, s.R - w0 * 0.4, T, U, 7 + w0 * 0.5, C[4], (u) => 0.26 * Math.exp(-Math.max(0, tt - passedAt(u / U1)) / 0.2) * ((u - T) / (U - T)));
  };
  return {
    update(dt) {
      t += dt;

      if (t < RAISE - 0.04 && R.chance(0.35)) {
        const a = R.range(0, TAU), D = R.range(14, 26), T = R.range(0.14, 0.2), v = (D * 3) / (Math.exp(3 * T) - 1);
        ps.spawn(P.STREAK, GLINT[0] + Math.cos(a) * D, GLINT[1] + Math.sin(a) * D, -Math.cos(a) * v, -Math.sin(a) * v, T, R.chance(0.5) ? C[5] : C[4]);
      }

      if (t > RAISE && t < HIT && R.chance(0.7)) {
        const u = U1 * head(t) * R.range(0.6, 1), [x, y] = onSwing(A, A.R - R.range(0, 6), u);
        ps.spawn(P.EMBER, x, y, R.range(-20, 20), R.range(-40, -10), R.range(0.5, 1.1), C[4], R.range(1, 2));
      }
      if (!hit && t >= HIT) {
        hit = true;
        lights.add(X, -6, 26, WHITE, 0.9, 0.1);
        lights.add(X, -12, 64, C[4], 0.5, 0.8);

        for (let i = 0; i < 26; i++) {
          const a = -Math.PI / 2 + R.range(-1.2, 1.35), sp = R.range(140, 360);
          ps.spawn(P.SPARK, X, -1, Math.cos(a) * sp, Math.sin(a) * sp - 40, R.range(0.15, 0.5));
        }

        for (let i = 0; i < 20; i++) {
          const s = i % 2 ? -1 : 1;
          ps.spawn(P.SMOKE, X + s * R.range(0, 8), -R.range(2, 6), s * R.range(45, 135), -R.range(2, 12), R.range(1.0, 1.45), st.dust, R.range(5, 8.5), R.range(0, 0.07), PF.BIG);
        }
        for (let i = 0; i < 4; i++) ps.spawn(P.SMOKE, X + R.range(-4, 4), -R.range(3, 8), R.range(-15, 15), -R.range(40, 90), R.range(1.0, 1.45), st.dust, R.range(4, 6.5), R.range(0.02, 0.1), PF.BIG);
        for (let i = 0; i < 8; i++) ps.spawn(P.DUST, X + R.range(-4, 4), -R.range(1, 4), R.range(-60, 60), -R.range(8, 30), R.range(0.35, 0.7), st.dust, R.range(2, 3.5));

        for (let i = 0; i < 44; i++) {
          const a = -Math.PI / 2 + R.range(-0.7, 1.0), sp = R.range(60, 230);
          ps.spawn(P.GRIT, X + R.range(-3, 3), -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(1.0, 1.5), R.pick([st.light, st.body, st.body, st.shade]), R.chance(0.35) ? 2 : 1);
        }
        for (let i = 0; i < 6; i++)
          bits.add({ kind: B.CHUNK, x: X + R.range(-3, 3), y: -2, vx: R.range(-50, 110), vy: -R.range(120, 260), g: 1, drag: 0.4, bounce: 0.3, life: R.range(1.15, 1.5), a: R.range(0, TAU), va: R.range(-14, 14), s: R.int(1, 2) });

        for (let i = 0; i < 16; i++) ps.spawn(P.EMBER, X + R.range(-8, 8), -R.range(1, 6), R.range(-50, 60), -R.range(30, 110), R.range(0.7, 1.5), C[4], R.range(1, 2));
      }

      if (hit && t < HIT + 0.6 && R.chance(0.12)) {
        const c = R.pick(lines), pt = R.pick(c.pts);
        ps.spawn(P.EMBER, pt[0], pt[1] - 1, R.range(-12, 12), -R.range(20, 50), R.range(0.5, 0.9), C[4], 1);
      }
      bits.update(dt);
      for (const b of bits.list)
        if (b.rest && !b.dusted) {
          b.dusted = true;
          for (let i = 0; i < 2; i++) ps.spawn(P.DUST, b.x + R.range(-1.5, 1.5), -0.5, R.sign() * R.range(8, 30), -R.range(2, 12), R.range(0.3, 0.6), st.dust, R.range(1.3, 2.4));
        }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      const q = t - HIT;
      if (q >= 0) {

        const fade = 1 - smooth(1.0, 1.5, q);
        for (let y = 0; y <= 2; y++)
          for (let x = -9; x <= 9; x++) {
            const d = Math.hypot((x + 0.5) / 9, (y + 0.5) / 3.5);
            if (d > 1) continue;
            const T = Math.pow(clamp(1 - q / 0.8), 1.4) * (1.2 - d) - rand(x, y, 3) * 0.3;
            if (T > 0.08) p.dot(X + x, y, C[clamp(Math.round(T * 9), 1, 7)], fade);
            else p.dot(X + x, y, d < 0.5 ? st.dark : st.shade, (d < 0.9 - rand(x, y, 9) * 0.3 ? 1 : 1 - d) * fade);
          }

        const k = q / 0.45;
        if (k < 1) band(p, X, 0.5, 6 + 46 * ease.outCubic(k), 0.16, Math.max(1, 3 * (1 - k)), 1.15 - k, [st.body, st.light, C[4], C[6]], (g) => Math.sin(g) < 0);
      }
      ps.draw(p, "back");
    },
    draw(p) {
      const q = t - HIT;

      if (t < RAISE + 0.03) {
        const g = ease.outBack(clamp(t / 0.1)) * (1 + 0.15 * Math.sin(t * 60)) * (t > RAISE ? 1 - (t - RAISE) / 0.03 : 1);
        sparkle(p, GLINT[0], GLINT[1], 1 + 7 * g, C[6], C[4], 0.5);
        p.glow(GLINT[0], GLINT[1], 22, C[4], 0.3 * g);
      }
      if (q >= 0) {

        const heat = Math.pow(clamp(1 - q / 1.2), 1.2), fade = 1 - smooth(1.15, 1.5, q);
        for (const c of lines) {
          const reach = 40 * ease.outCubic(clamp((q - c.at * 0.1) / 0.13)) * (c.fork ? 0.3 : 1);
          if (reach <= 0) continue;
          along(c.pts, reach, (x0, y0, x1, y1, d) => {
            const h = heat * (1 - d / 46) - (c.fork ? 0.12 : 0), col = h > 0.72 ? WHITE : h > 0.08 ? C[clamp(Math.round(h * 8), 1, 6)] : st.dark;
            if (y1 > 0.5) p.line(x0 + 1, y0, x1 + 1, y1, st.dark, fade);
            p.line(x0, y0, x1, y1, col, fade);
            if (h > 0.25 && (d | 0) % 6 < 2) p.glow(x1, y1, 6, C[4], 0.2 * h * fade);
          });
        }
        if (heat > 0) p.glow(X, -2, 34, C[4], 0.32 * heat * fade);

        const k = q / 0.45;
        if (k < 1) band(p, X, 0.5, 6 + 46 * ease.outCubic(k), 0.16, Math.max(1, 3 * (1 - k)), 1.15 - k, [st.body, st.light, C[4], C[6]], (g) => Math.sin(g) >= 0);
      }

      arc(p, E, WE, 0.02, false);
      arc(p, A, W, 0, true);
      const tail = U1 * smooth(HIT + HOLD, HIT + HOLD + TRAIL, t), th = 0.8 * (1 - clamp((t - HIT - HOLD) / (TRAIL + 0.25)));
      if (tail > 0.02 && th > 0) trace(p, A, A.R - 0.5, 0, tail, C[3], (u) => th * (0.4 + 0.6 * u / U1));
      if (t > RAISE && t < HIT + 0.05) {
        const [x, y] = onSwing(A, A.R - 5, U1 * head(t));
        p.glow(x, y, 40, C[4], 0.5);
      }

      if (q >= 0 && q < 0.035) star(p, X, -1, spikes, 1, 1, WHITE, C[6], C[7], C[5]);
      else if (q >= 0.035 && q < 0.07) star(p, X, -1, spikes, 1.25, 0.55, C[7], C[6], C[6], C[4]);
      if (q >= 0.05 && q < 0.16) {
        const k = (q - 0.05) / 0.11;
        for (const s of shards) sliver(p, X, -1, s.a, s.r + s.v * (q - 0.05), s.arc * (1 - 0.4 * k), k < 0.4 ? C[6] : k < 0.7 ? C[5] : C[4], 1 - k);
      }
      if (q >= 0 && q < 0.2) {
        const pop = Math.exp(-q / 0.05);
        p.glow(X, -6, 30, C[5], 0.8 * pop);
        p.glow(X, -2, 10, WHITE, 0.7 * pop);
      }
      for (const b of bits.list) rock(p, b, st);
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ie1oi6d=__r(1);const Particles=__ie1oi6d.Particles;const P=__ie1oi6d.P;const Rng=__ie1oi6d.Rng;const fit=__ie1oi6d.fit;const clamp=__ie1oi6d.clamp;const smooth=__ie1oi6d.smooth;const ease=__ie1oi6d.ease;const noise=__ie1oi6d.noise;const TAU=__ie1oi6d.TAU;const WHITE=__ie1oi6d.WHITE;const mix=__ie1oi6d.mix;
const __iduivmw=__r(58);const VOID=__iduivmw.VOID;const Puffs=__iduivmw.Puffs;const PK=__iduivmw.PK;const Drops=__iduivmw.Drops;const floorPool=__iduivmw.floorPool;
const meta = {
  name: "Shadow tendrils",
  desc: "A dark pool opens on the floor; tentacles with lit rims and hooked tips lash up out of it with a splash, writhe, and sink back as it closes.",
  tags: ["shadow", "tentacle", "tendril", "ground", "dark", "magic", "one-shot"],
  size: [208, 130],
  origin: [104, 106],
  duration: 3.2,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: VOID, seed: 3 },
};
const RX = 40, OPEN = 0.34, SHUT = 2.5, SINK = 0.5, LX = -0.6, LY = -0.8;


function spine(T, t) {
  const e = clamp((t - T.t0) / 0.2), s1 = clamp((t - T.t1) / SINK);
  if (e <= 0 || s1 >= 1) return null;

  const lift = 0.07 * Math.sin(Math.PI * clamp(s1 / 0.3)), down = ease.inOutCubic(clamp((s1 - 0.12) / 0.88));
  const rise = ease.outBack(e, 1.8) * (1 + lift) * (1 - down), hidden = (1 - rise) * T.L;
  const writhe = T.A * (0.25 + 0.75 * smooth(T.t0 + 0.08, T.t0 + 0.5, t));
  const hook = (0.04 + T.H * ease.outBack(clamp((t - T.t0 - 0.1) / 0.32), 2.5)) * (1 + 0.5 * s1) * (1 + 0.18 * Math.sin(t * 2.3 + T.ph));
  let lean = T.lean + 0.12 * Math.sin(t * 1.6 + T.ph);
  if (T.whip) lean += T.whip.a * Math.exp(-(((t - T.whip.t) / 0.14) ** 2));
  let th = -Math.PI / 2 + lean, x = T.x - Math.cos(th) * hidden, y = T.y - Math.sin(th) * hidden;
  const pts = [], n = Math.ceil(T.L / 0.5);
  for (let i = 0; i <= n; i++) {
    const s = i * 0.5, u = s / T.L;
    pts.push({ x, y, th, w: T.W * Math.pow(1 - u, 0.75) + 0.45, u, s });
    th += 0.5 * (writhe * Math.sin((s / T.lam) * TAU - T.om * t + T.ph) + T.curl * hook * smooth(0.58, 1, u));
    x += Math.cos(th) * 0.5;
    y += Math.sin(th) * 0.5;
  }
  return pts;
}


function tentacle(p, T, pts, C, t) {
  const surf = T.y;
  for (const q of pts) {
    if (q.y > surf) continue;
    const nx = -Math.sin(q.th), ny = Math.cos(q.th), ks = nx * LX + ny * LY >= 0 ? 1 : -1;
    for (let v = -q.w; v <= q.w; v += 0.5) {
      const x = q.x + nx * v, y = q.y + ny * v;
      const u = (v / q.w) * ks;
      if (y <= surf) p.px(x, y, u > 0.55 ? C[2] : u > -0.45 ? C[1] : C[0]);
    }
  }

  const pulse = (t - T.t0) * 150, slow = (((t - T.t0) * 55) % (T.L * 1.8)) - 4;
  for (const q of pts) {
    if (q.y > surf) continue;
    const nx = -Math.sin(q.th), ny = Math.cos(q.th), f = nx * LX + ny * LY, ks = f >= 0 ? 1 : -1;
    const lit = ks * q.w, x0 = q.x + nx * lit, y0 = q.y + ny * lit, x1 = q.x - nx * lit, y1 = q.y - ny * lit;
    if (y1 <= surf) p.px(x1, y1, C[3]);
    if (y0 <= surf) p.px(x0, y0, Math.abs(f) > 0.8 && q.u > 0.15 ? C[7] : q.u > 0.85 ? C[6] : Math.abs(f) > 0.3 ? C[6] : C[5]);
    if (q.u > 0.62 && q.u < 0.93 && q.s % 3 < 0.5) p.px(q.x + nx * T.curl * q.w * 0.45, q.y + ny * T.curl * q.w * 0.45, C[4]);
    const dp = Math.min(Math.abs(q.s - pulse), Math.abs(q.s - slow) * 1.6);
    if (dp < 2.5) p.px(q.x, q.y, dp < 1 ? C[7] : C[5]);
  }

  const tip = pts[pts.length - 1];
  if (tip.y <= surf) {
    p.px(tip.x, tip.y, WHITE);
    p.glow(tip.x, tip.y, 6, C[6], 0.25);
  }
  for (let i = 0; i < pts.length; i += 8) if (pts[i].y < surf) p.glow(pts[i].x, pts[i].y, 9, C[4], 0.1);
  const pq = pts[Math.min(pts.length - 1, Math.max(0, Math.round(pulse * 2)))];
  if (pulse < T.L && pq.y < surf) p.glow(pq.x, pq.y, 10, C[6], 0.45);

  const base = pts.find((q) => q.y <= surf);
  if (base) {
    const w = base.w + 1.5;
    p.line(base.x - w, surf, base.x + w, surf, C[5]);
    p.px(base.x - w - 1, surf + 0.5, C[3]);
    p.px(base.x + w + 1, surf + 0.5, C[3]);
  }
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), floor = () => 0;
  const DIM = [C[0], C[0], C[1], C[1], C[3], C[4], C[5], C[6]];
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[7], C[6], C[5], C[4]], haze: C[4] });
  const puffs = new Puffs({ rng: R, flame: [C[7], C[6], C[5], C[4], C[3], C[2], C[1], C[1], C[0]], soot: [mix(C[3], C[2], 0.55), mix(C[2], C[1], 0.5)], cap: mix(C[4], C[2], 0.5), rim: [C[6], C[5], C[4]], floor });
  const ripples = [], splats = [], lights = [];
  let t = 0, acc = 0;
  const rx = (tt) => RX * ease.outCubic(clamp(tt / OPEN)) * (1 - ease.inCubic(clamp((tt - SHUT) / 0.45)));
  const inPool = (x, tt) => Math.abs(x) < rx(tt) * 0.95;
  const drops = new Drops({
    onLand: (x, y, v, s) => {
      if (inPool(x, t)) ripples.push({ x, t0: t, life: 0.5, w: 0.6 });
      else splats.push({ x, t0: t, s });
    },
  });

  const rows = [[-22, -2.5], [-8, -3], [7, -3], [21, -2.5], [-28, 2.5], [-1, 3], [27, 2.5]];
  const order = [3, 0, 5, 2, 4, 1, 6], last = [1, 5, 0, 6, 3, 2, 4];
  const tents = rows.map(([x, y], i) => {
    const back = y < 0, sx = Math.sign(x) || 1;
    return {
      x: x + R.range(-3, 3), y, back,
      L: back ? R.range(46, 62) : R.range(32, 46), W: back ? R.range(3.2, 4) : R.range(3.8, 4.6),
      lean: sx * (0.06 + Math.abs(x) / 120) + R.range(-0.06, 0.06), curl: R.chance(0.75) ? -sx : sx,
      lam: R.range(36, 50), om: R.range(4.5, 7) * R.sign(), ph: R.range(0, TAU), A: R.range(0.06, 0.085), H: R.range(0.15, 0.32),
      t0: 0.3 + order[i] * 0.045 + R.range(0, 0.03), t1: 1.5 + last[i] * 0.1 + R.range(0, 0.05),
      whip: R.chance(0.45) ? { t: R.range(0.9, 1.5), a: R.range(0.28, 0.45) * R.sign() } : null,
      up: false, down: false,
    };
  });
  function splash(x, y, n, power) {
    for (let i = 0; i < n; i++) drops.add(x + R.range(-2, 2), y - 1, R.range(-70, 70) * power, -R.range(90, 230) * power, R.chance(0.4) ? 2 : 1);
    ripples.push({ x, t0: t, life: 0.7, w: 1 });
    lights.push({ x, y: y - 7, r: 30, k: 0.6 * power, life: 0.25, max: 0.25 });
  }
  return {
    update(dt) {
      t += dt;
      for (const T of tents) {
        if (!T.up && t >= T.t0) {
          T.up = true;
          splash(T.x, T.y, 12, 1);
          for (let i = 0; i < 4; i++) ps.spawn(P.SPARK, T.x, T.y - 2, R.range(-80, 80), -R.range(120, 260), R.range(0.2, 0.45));
        }
        if (!T.down && t >= T.t1 + SINK * 0.8) {
          T.down = true;
          splash(T.x, T.y, 6, 0.6);
        }

        if (t > T.t0 + 0.2 && t < T.t1 && R.chance(dt * 1.6)) {
          const pts = spine(T, t), q = pts && pts[Math.floor(R.range(0.3, 0.95) * pts.length)];
          if (q && q.y < T.y) ps.spawn(P.STAR, q.x - Math.sin(q.th) * q.w, q.y + Math.cos(q.th) * q.w, 0, -4, R.range(0.25, 0.5), C[6], R.range(1, 2.2));
        }
      }

      const r = rx(t);
      if (r > 8 && t < SHUT - 0.4) {
        for (acc += dt * 9; acc > 1; acc--) puffs.spawn(PK.SOOT, R.range(-0.8, 0.8) * r, -R.range(1, 4), R.range(-8, 8), -R.range(14, 30), R.range(0.6, 0.85), R.range(3, 6));
        if (R.chance(dt * 16)) ps.spawn(P.MOTE, R.range(-0.8, 0.8) * r, -2, R.range(-8, 8), -R.range(30, 80), R.range(0.5, 1), R.pick([C[7], C[6], C[6], C[5]]), R.range(0.6, 1.1));
        if (R.chance(dt * 5)) ps.spawn(P.EMBER, R.range(-0.8, 0.8) * r, -3, R.range(-10, 10), -R.range(20, 45), R.range(0.6, 1), C[6]);
        if (R.chance(dt * 3)) ripples.push({ x: R.range(-0.7, 0.7) * r, t0: t, life: 0.6, w: 0.5 });

        if (R.chance(dt * 7)) ps.spawn(P.VAPOUR, R.range(-0.7, 0.7) * r, -R.range(2, 8), R.range(-6, 6), -R.range(10, 22), R.range(0.6, 0.9), R.chance(0.5) ? C[3] : C[4], R.range(3, 6));
      }
      for (const a of [ripples, splats]) for (let i = a.length - 1; i >= 0; i--) if (t - a[i].t0 > (a[i].life ?? 0.6)) a.splice(i, 1);
      for (let i = lights.length - 1; i >= 0; i--) if ((lights[i].life -= dt) <= 0) lights.splice(i, 1);
      drops.update(dt);
      puffs.update(dt);
      ps.update(dt);
    },
    drawBack(p) {
      const r = rx(t), k = r / RX;
      floorPool(p, C, r, t, ripples);
      if (k > 0) {
        p.glow(0, -16, 86, C[4], 0.22 * k);
        p.glow(0, -8, r * 1.7 + 12, C[4], 0.32 * k * (0.9 + 0.1 * Math.sin(t * 5)));
        p.glow(0, 0, r * 1.15, C[5], 0.18 * k);
      }
      puffs.draw(p, PK.SOOT, { x: 0, y: 6, k: k, reach: 70 });
      ps.draw(p, "back");
      for (const T of tents) if (T.back) {
        const pts = spine(T, t);
        if (pts) tentacle(p, T, pts, DIM, t);
      }
    },
    draw(p) {
      for (const T of tents) if (!T.back) {
        const pts = spine(T, t);
        if (pts) tentacle(p, T, pts, C, t);
      }
      drops.draw(p, C[1], C[5]);
      for (const s of splats) {
        const a = 1 - (t - s.t0) / 0.6;
        p.dot(s.x, -0.5, C[1], a * 1.5);
        p.dot(s.x + 1, -0.5, C[2], a);
        if (s.s > 1) p.dot(s.x - 1, -0.5, C[2], a);
        p.dot(s.x, -1.5, C[5], a);
      }
      ps.draw(p, "front");
      for (const l of lights) {
        const q = l.life / l.max;
        p.glow(l.x, l.y, l.r * (0.6 + 0.4 * q), C[5], l.k * q * q);
      }
    },
  };
}
},
function(__e){Object.defineProperty(__e,"VOID",{enumerable:true,configurable:true,get:()=>VOID});Object.defineProperty(__e,"unlight",{enumerable:true,configurable:true,get:()=>unlight});Object.defineProperty(__e,"ringFast",{enumerable:true,configurable:true,get:()=>ringFast});Object.defineProperty(__e,"ringLight",{enumerable:true,configurable:true,get:()=>ringLight});Object.defineProperty(__e,"halo",{enumerable:true,configurable:true,get:()=>halo});Object.defineProperty(__e,"blackStar",{enumerable:true,configurable:true,get:()=>blackStar});Object.defineProperty(__e,"inStar",{enumerable:true,configurable:true,get:()=>inStar});Object.defineProperty(__e,"attract",{enumerable:true,configurable:true,get:()=>attract});Object.defineProperty(__e,"PK",{enumerable:true,configurable:true,get:()=>PK});Object.defineProperty(__e,"Puffs",{enumerable:true,configurable:true,get:()=>Puffs});Object.defineProperty(__e,"shard",{enumerable:true,configurable:true,get:()=>shard});Object.defineProperty(__e,"Drops",{enumerable:true,configurable:true,get:()=>Drops});Object.defineProperty(__e,"floorPool",{enumerable:true,configurable:true,get:()=>floorPool});
const __i7mv47x=__r(1);const hex=__i7mv47x.hex;const mix=__i7mv47x.mix;const ramp=__i7mv47x.ramp;const clamp=__i7mv47x.clamp;const noise=__i7mv47x.noise;const WHITE=__i7mv47x.WHITE;const GRAVITY=__i7mv47x.GRAVITY;
const VOID = ["#06040b", "#150c26", "#2a1150", "#461a84", "#6f2cc0", "#9d5cec", "#cfa6ff", "#f6eaff"];
function unlight(p, x0, y0, x1, y1, dark, keep = 0) {
  const L = p.L, w = p.w, ox = p.ox, oy = p.oy;
  p.each(x0, y0, x1, y1, (x, y, sx, sy) => {
    if (!dark(x, y)) return;
    const i = (sy - oy) * w + (sx - ox), d = L[i];
    if (!d) return;
    if (keep <= 0) L[i] = 0;
    else L[i] = (255 << 24) | ((((d >>> 16) & 255) * keep) << 16) | ((((d >>> 8) & 255) * keep) << 8) | ((d & 255) * keep);
  });
}

function annulus(x, y, r0, r1, fn) {
  const r02 = r0 > 0 ? r0 * r0 : -1, r12 = r1 * r1;
  for (let py = Math.floor(y - r1); py <= Math.ceil(y + r1); py++) {
    const cy = py + 0.5, dy = cy - y, dy2 = dy * dy;
    if (dy2 >= r12) continue;
    const xo = Math.sqrt(r12 - dy2), xi = dy2 < r02 ? Math.sqrt(r02 - dy2) : 0;
    for (let px = Math.floor(x - xo), x1 = Math.ceil(x + xo); px <= x1; px++) {
      const cx = px + 0.5, dx = cx - x;
      if (xi > 0 && dx > -xi && dx < xi) {
        px = Math.max(px, Math.floor(x + xi) - 1);
        continue;
      }
      const d2 = dx * dx + dy2;
      if (d2 < r12 && d2 >= r02) fn(cx, cy, Math.sqrt(d2));
    }
  }
}
function ringFast(p, x, y, r, w, c, a = 1) {
  if (r <= 0) return;
  const r0 = Math.max(0, r - w), fc = typeof c === "function", fa = typeof a === "function";
  annulus(x, y, r0, r, (cx, cy, d) => {
    const v = (d - r0) / (r - r0 || 1), ang = fc || fa ? Math.atan2(cy - y, cx - x) : 0;
    p.dot(cx, cy, fc ? c(v, ang) : c, fa ? a(v, ang) : a);
  });
}
function ringLight(p, x, y, R, w, c, k, keep = null) {
  if (w < 1 || k <= 0.004) return;
  const col = hex(c);
  annulus(x, y, Math.max(0, R - w), R + w, (cx, cy, d) => {
    if (keep && !keep(cx, cy)) return;
    const f = 1 - Math.abs(d - R) / w;
    p.light(cx, cy, col, f * f * k);
  });
}
function halo(p, x, y, r0, r1, c, k) {
  if (r1 <= r0 || k <= 0.004) return;
  const col = hex(c), w = r1 - r0;
  annulus(x, y, Math.max(0, r0), r1, (cx, cy, d) => {
    const f = 1 - (d - r0) / w;
    p.light(cx, cy, col, f * f * k);
  });
}
function blackStar(cy, L, rot, short = 0.46, q = 0.32) {
  const R0 = Math.ceil(L) + 2, n = R0 * 2 + 1, data = new Uint8Array(n * n);
  for (let j = 0; j < n; j++)
    for (let i = 0; i < n; i++) {
      const x = i - R0 + 0.5, y = cy + j - R0 + 0.5;
      if (inStar(x, y, 0, cy, L, rot, q) || inStar(x, y, 0, cy, L * short, rot + Math.PI / 4, q)) data[j * n + i] = 1;
    }
  for (let a = 0; a < 4; a++)
    for (let d = 0, ca = Math.cos(rot + (a * Math.PI) / 2), sa = Math.sin(rot + (a * Math.PI) / 2); d < L - 1; d += 0.5) {
      const i = Math.floor(ca * d) + R0, j = Math.floor(sa * d) + R0;
      data[j * n + i] = 1;
    }
  const at = (x, y) => {
    const i = Math.floor(x) + R0, j = Math.floor(y - cy) + R0;
    return i >= 0 && j >= 0 && i < n && j < n && data[j * n + i] === 1;
  };
  return {
    R0,
    at,
    unlight(p) {
      const Lb = p.L, w = p.w, h = p.h, ox = p.ox, oy = p.oy;
      for (let j = 0; j < n; j++)
        for (let i = 0; i < n; i++) {
          if (!data[j * n + i]) continue;
          const x = i - R0 + 0.5, y = cy + j - R0 + 0.5, sx = p.cellX(x, y) - ox, sy = p.cellY(x, y) - oy;
          if (sx >= 0 && sy >= 0 && sx < w && sy < h) Lb[sy * w + sx] = 0;
        }
    },
    draw(p, c, rim, skip) {
      for (let j = 0; j < n; j++)
        for (let i = 0; i < n; i++) {
          const x = i - R0 + 0.5, y = cy + j - R0 + 0.5;
          if (data[j * n + i]) p.px(x, y, c);
          else if (rim && !skip(x, y) && (at(x - 1, y) || at(x + 1, y) || at(x, y - 1) || at(x, y + 1))) p.px(x, y, rim);
        }
    },
  };
}
function inStar(x, y, cx, cy, L, rot, q = 0.42) {
  if (L <= 0) return false;
  const c = Math.cos(rot), s = Math.sin(rot), dx = x - cx, dy = y - cy;
  const u = Math.abs(dx * c + dy * s) / L, v = Math.abs(-dx * s + dy * c) / L;

  return u < 1 && v < 1 && Math.min(u, v) <= Math.pow(0.5, 1 / q) && Math.pow(u, q) + Math.pow(v, q) <= 1;
}
function attract(list, x, y, G, reach, swirl, r0, dt, w = () => 1, vmax = Infinity) {
  let eaten = 0;
  for (let i = list.length - 1; i >= 0; i--) {
    const q = list[i], wt = w(q);
    if (!wt || q.delay > 0) continue;
    const dx = x - q.x, dy = y - q.y, d2 = dx * dx + dy * dy;
    if (d2 > reach * reach) continue;
    const d = Math.sqrt(d2) || 1;
    if (d < r0) {
      list.splice(i, 1);
      eaten++;
      continue;
    }
    const a = (G / (d2 + r0 * r0)) * Math.min(1, (reach - d) / (reach * 0.25)) * wt * dt, ux = dx / d, uy = dy / d;
    q.vx += (ux - uy * swirl) * a;
    q.vy += (uy + ux * swirl) * a;
    const drag = Math.min(0.2, (1 - d / reach) * 1.6 * dt);
    q.vx -= q.vx * drag;
    q.vy -= q.vy * drag;
    const v = Math.hypot(q.vx, q.vy);
    if (v > vmax) (q.vx *= vmax / v), (q.vy *= vmax / v);
  }
  return eaten;
}
const PK = { FLAME: 0, SOOT: 1 };
class Puffs {
  constructor(o) {
    this.R = o.rng;
    this.list = [];
    this.t = 0;
    this.F = ramp(o.flame);
    this.soot = ramp(o.soot);
    this.cap = hex(o.cap);
    this.rim = ramp(o.rim);
    this.floor = o.floor ?? null;
  }
  spawn(k, x, y, vx, vy, life, size, delay = 0, smokes = false) {
    this.list.push({ k, x, y, vx, vy, life, max: life, size, delay, smokes, seed: this.R.next() * 100 });
  }
  get count() {
    return this.list.length;
  }
  update(dt) {
    this.t += dt;
    const t = this.t;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const q = this.list[i];
      if (q.delay > 0) {
        q.delay -= dt;
        continue;
      }
      if ((q.life -= dt) <= 0) {
        if (q.k === PK.FLAME && q.smokes) this.spawn(PK.SOOT, q.x, q.y - 1, q.vx * 0.5, q.vy * 0.5 - 6, this.R.range(0.9, 1.6), q.size * 1.25);
        this.list.splice(i, 1);
        continue;
      }
      if (q.k === PK.FLAME) {
        q.vy -= 95 * dt;
        q.vx += Math.sin(t * 17 + q.seed) * 30 * dt;
        q.vx -= q.vx * 5 * dt;
        q.vy -= q.vy * 3.2 * dt;
      } else {
        q.vy -= 18 * dt;
        q.vx += Math.sin(t * 1.3 + q.seed) * 8 * dt;
        q.vx -= q.vx * 1.6 * dt;
        q.vy -= q.vy * 1.3 * dt;
      }
      q.x += q.vx * dt;
      q.y += q.vy * dt;

      if (this.floor && q.k === PK.SOOT) {
        const f = this.floor(q.x) - q.size * 0.6;
        if (q.y > f) (q.y = f), (q.vy = Math.min(0, q.vy)), (q.vx *= 1 - 2 * dt);
      }
    }
  }
  draw(p, kind, light = null) {
    const F = this.F, n = F.length;
    for (const q of this.list) {
      if (q.delay > 0 || q.k !== kind) continue;
      const k = q.life / q.max, age = 1 - k, x = q.x, y = q.y;
      if (q.k === PK.FLAME) {

        const heat = Math.min(0.999, Math.pow(age, 0.62) + (q.seed % 1) * 0.1), idx = Math.min(n - 2, Math.floor(heat * (n - 1)));
        const r = q.size * (0.55 + 0.45 * Math.min(1, age * 7)) * (1 - age * 0.55), c = F[idx];
        if (idx >= n - 3) p.disc(x, y, r, c, Math.min(1, k * 3) * 0.8);
        else {
          p.circle(x, y, r, F[Math.min(n - 1, idx + 2)]);
          p.circle(x - r * 0.16, y - r * 0.22, r * 0.78, c);
          if (r > 1.6) p.circle(x, y - r * 0.9, r * 0.42, c);
          if (idx <= 3 && r > 1.8) p.circle(x - r * 0.28, y - r * 0.34, r * 0.36, F[Math.max(0, idx - 1)]);
          if (idx < 6) p.glow(x, y, r * 2.4 + 2, c, 0.2 * k);
        }
        continue;
      }


      const r = q.size * (0.65 + Math.min(1, age * 2.5) * 0.45 + age * 0.45);
      const a = Math.min(1, age * 10) * Math.min(1, k * 2.2) * 0.72, body = mix(this.soot[0], this.soot[1], age);

      const edge = a * 0.5, core = 1 - (1 - a * 0.5) * (1 - a * 0.62);
      p.disc(x, y + r * 0.06, r, body, (d) => (d < 0.72 ? core : edge));
      const lk = light ? light.k : 0;
      if (lk < 0.5) p.disc(x - r * 0.2, y - r * 0.32, r * 0.48, this.cap, a * 0.32 * (1 - age * 0.7) * (1 - lk * 2));
      if (lk <= 0.02) continue;
      const lx = light.x - x, ly = light.y - y, dl = Math.sqrt(lx * lx + ly * ly) || 1, ux = lx / dl, uy = ly / dl;
      const lit = Math.min(1, light.k * clamp(1.3 - dl / light.reach)) * a;
      if (lit <= 0.02) continue;
      const [hot, warm, dim] = this.rim;
      p.disc(x + ux * r * 0.26, y + uy * r * 0.26, r * 0.72, dim, lit * 0.55);
      p.disc(x + ux * r * 0.5, y + uy * r * 0.5, r * 0.46, warm, lit * 0.5);
      if (r > 3) p.disc(x + ux * r * 0.68, y + uy * r * 0.68, r * 0.24, hot, lit * 0.4);
    }
  }
}
function shard(p, b, C, lx, ly, lk) {
  const fa = Math.min(1, b.life / 0.4), ca = Math.cos(b.a), sa = Math.sin(b.a), L = Math.max(2, b.s), W = Math.max(2, L * 0.55);
  const side = -sa * (lx - b.x) + ca * (ly - b.y) > 0 ? 1 : -1;
  const rim = lk > 0.6 ? C[6] : lk > 0.3 ? C[5] : lk > 0.08 ? C[4] : C[3], E = L / 2 + 1.5;
  p.shade(b.x - E, b.y - E, b.x + E, b.y + E, (x, y, out) => {
    const dx = x - b.x, dy = y - b.y, u = dx * ca + dy * sa, v = (-dx * sa + dy * ca) * side;
    if (u < -L / 2 - 0.4 || u > L / 2 + 0.4) return;
    const half = ((W / 2) * (L / 2 - u)) / L + 0.4;
    if (Math.abs(v) > half) return;
    out.a = fa;
    if (u > L / 2 - 1.3 && lk > 0.3) return WHITE;
    if (v > half - 1) return u > -L / 4 ? rim : C[Math.max(3, C.indexOf(rim) - 1)];
    return v < -half + 1 ? C[1] : C[2];
  });
  if (lk > 0.04) p.glow(b.x, b.y, 3 + L * 0.6, C[5], 0.2 * lk * fa);
}
class Drops {
  constructor(o = {}) {
    this.list = [];
    this.floor = o.floor ?? (() => 0);
    this.onLand = o.onLand ?? null;
    this.g = o.g ?? 0.8;
  }
  add(x, y, vx, vy, size = 1) {
    this.list.push({ x, y, vx, vy, size });
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const d = this.list[i];
      d.vy += GRAVITY * this.g * dt;
      d.vx -= d.vx * 0.4 * dt;
      d.x += d.vx * dt;
      d.y += d.vy * dt;
      const f = this.floor(d.x);
      if (d.vy > 0 && d.y >= f) {
        this.onLand?.(d.x, f, d.vy, d.size);
        this.list.splice(i, 1);
      }
    }
  }
  draw(p, body, shine) {
    for (const d of this.list) {
      const up = d.vy < 0;
      p.px(d.x, d.y, body);
      if (d.size > 1.4) p.px(d.x, d.y + (up ? 1 : -1), body);
      p.px(d.x, d.y - (d.size > 1.4 && !up ? 1 : 0), shine);
    }
  }
}
function floorPool(p, C, rx, t, ripples) {
  if (rx < 1) return;
  const ry = rx * 0.17 + 0.6;
  p.shade(-rx - 3, -ry - 2, rx + 3, ry + 2, (x, y) => {
    const dx = x / rx, dy = (y - 0.5) / ry, d = Math.sqrt(dx * dx + dy * dy);
    if (d > 1.18) return;
    if (d > 1) {
      if (dy < 0 && d < 1.09) return Math.abs(dx) < 0.55 ? C[6] : Math.abs(dx) < 0.85 ? C[5] : C[4];
      if (dy >= 0 && d < 1.09) return C[2];
      return y > -0.5 && noise(x * 0.7, 9) > 0.15 ? C[1] : undefined;
    }

    for (const r of ripples) {
      const age = t - r.t0, rr = age * 46 * r.w + 1, ex = x - r.x, ey = (y - 0.5) / 0.17, e = Math.sqrt(ex * ex + ey * ey) || 1;
      const g = Math.sqrt(ex * ex + (ey / 0.17) ** 2) / e;
      if (Math.abs(e - rr) < 0.55 * g && age < r.life) return age < r.life * 0.5 ? C[4] : C[3];
    }
    if (dy < -0.55 && dy > -0.85 && noise(x * 0.25 + t * 1.3, 4) > 0.2) return noise(x * 0.6 - t * 2, 6) > 0.55 ? C[5] : C[2];

    if (dy < -0.35 && d > 0.72) return d > 0.9 ? C[3] : C[2];
    return d > 0.86 ? C[1] : C[0];
  });
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i5y5rcb=__r(1);const Particles=__i5y5rcb.Particles;const Lights=__i5y5rcb.Lights;const P=__i5y5rcb.P;const PF=__i5y5rcb.PF;const Rng=__i5y5rcb.Rng;const fit=__i5y5rcb.fit;const band=__i5y5rcb.band;const flare=__i5y5rcb.flare;const sparkle=__i5y5rcb.sparkle;const clamp=__i5y5rcb.clamp;const smooth=__i5y5rcb.smooth;const ease=__i5y5rcb.ease;const rng=__i5y5rcb.rng;const TAU=__i5y5rcb.TAU;const WHITE=__i5y5rcb.WHITE;const hex=__i5y5rcb.hex;const mix=__i5y5rcb.mix;const READY=__i5y5rcb.READY;
const __izukn8t=__r(42);const VOLT=__izukn8t.VOLT;const PLASMA=__izukn8t.PLASMA;const zigzag=__izukn8t.zigzag;const stroke=__izukn8t.stroke;const crackle=__izukn8t.crackle;const scorch=__izukn8t.scorch;
const meta = {
  name: "Thunderclap",
  desc: "A thunderclap round the caster: a white flash, forked bolts burst out and stab the floor, a heavy shock ring tears across the ground raising dust and grit, sparks streak away.",
  tags: ["lightning", "electric", "nova", "aoe", "spell", "shockwave", "one-shot"],
  size: [288, 156],
  origin: [144, 124],
  duration: 1.9,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: { palette: VOLT, sparks: PLASMA, reach: 104, seed: 6 },
};
const WIDE = { turn: 1.15, crouch: 5, lean: -1, fx: -15, fy: -33, bx: 15, by: -33, ffx: -7, fbx: 8 };
const CLAP_ = { turn: 1.15, y: -2, crouch: 0, fx: -1, fy: -45, bx: 1, by: -45, ffx: -3, ffy: -5, fbx: 4, fby: -5 };
const act = {
  onBody: true,
  follow: 0,
  target: { x: 104 },
  poses: [
    [-0.46, READY],
    [-0.18, WIDE],
    [0.08, { ...WIDE, crouch: 6 }],
    [0.12, CLAP_, "snap"],
    [0.55, { ...CLAP_, y: 0, ffy: -4, fby: -4, crouch: 1 }],
    [1.05, { turn: 1, crouch: 3, fx: -10, fy: -28, bx: 11, by: -28, ffx: -4, fbx: 5 }],
    [1.7, READY],
  ],
  hits: [
    { t: 0.12, stop: 0.13, shake: 0.3, amp: 3, target: false },
    { t: 0.42, push: 2, straw: 14, y: -8, skin: "shock", shiver: 0.5 },
    { t: 1.2, push: 0, straw: 0, flash: 0, skin: null },
  ],
};
const CLAP = 0.12, CY = -22, BK = [1, 0.7, 0.95, 0.5, 0.8, 0.3];
const DUST = hex("#6e6382"), STONE = ["#655b7a", "#4a4263", "#342d45"].map(hex), ASH = hex("#5b5566");
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), REACH = o.reach, floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: o.sparks }), hot = new Particles({ rng: R, ground: floor }), lights = new Lights();

  const bolts = Array.from({ length: 8 }, (_, i) => {
    const down = i % 2 === 0, side = i % 4 < 2 ? -1 : 1, a = down ? (side > 0 ? R.range(0.35, 0.75) : Math.PI - R.range(0.35, 0.75)) : side > 0 ? -R.range(0.15, 1.2) : Math.PI + R.range(0.15, 1.2);
    const L = down ? -CY / Math.sin(a) : R.range(40, 62), x1 = Math.cos(a) * L, y1 = down ? 0 : CY + Math.sin(a) * L;
    return { down, x1, y1, t0: CLAP + R.range(0, 0.06) };
  });
  const front = (t) => (t < CLAP ? 0 : 8 + (REACH - 8) * ease.outCubic(clamp((t - CLAP) / 0.5)));
  let t = 0, clapped = false;
  const landed = bolts.map(() => false);
  return {
    update(dt) {
      t += dt;

      if (t < CLAP && R.chance(60 * dt)) {
        const a = R.range(0, TAU), d = R.range(16, 30), T = R.range(0.07, 0.1), v = (d * 3) / (Math.exp(3 * T) - 1);
        ps.spawn(P.STREAK, Math.cos(a) * d, CY + Math.sin(a) * d * 0.8, -Math.cos(a) * v, -Math.sin(a) * v * 0.8, T, R.chance(0.5) ? C[6] : C[5]);
      }
      if (t >= CLAP && !clapped) {
        clapped = true;
        lights.add(0, CY - 10, 100, C[4], 0.65, 0.45);
        lights.add(0, CY, 26, WHITE, 0.5, 0.07);
        for (let i = 0; i < 64; i++) {
          const a = R.range(0, TAU), sp = R.range(170, 380) * (Math.sin(a) > 0.4 ? 0.5 : 1);
          ps.spawn(P.SPARK, Math.cos(a) * 6, CY + Math.sin(a) * 6, Math.cos(a) * sp, Math.sin(a) * sp - 40, R.range(0.2, 0.55));
        }
        for (let i = 0; i < 8; i++) ps.spawn(P.SMOKE, R.range(-8, 8), CY + R.range(-6, 6), R.range(-25, 25), -R.range(10, 30), R.range(0.8, 1.3), mix(ASH, C[4], 0.3), R.range(4, 7), R.range(0.05, 0.2));
      }
      for (const [i, b] of bolts.entries())
        if (b.down && !landed[i] && t >= b.t0) {
          landed[i] = true;
          lights.add(b.x1, -4, 46, C[4], 0.7, 0.25);
          for (let j = 0; j < 12; j++) {
            const a = -Math.PI / 2 + R.range(-1.2, 1.2), sp = R.range(70, 240);
            ps.spawn(P.SPARK, b.x1, -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.2, 0.5));
          }
          for (let j = 0; j < 5; j++) hot.spawn(P.SPARK, b.x1 + R.range(-2, 2), -1, R.range(-80, 80), -R.range(60, 180), R.range(0.4, 0.8));
        }

      const fr = front(t);
      if (t > CLAP && t < CLAP + 0.5)
        for (const s of [-1, 1]) {
          if (R.chance(70 * dt)) ps.spawn(P.SMOKE, s * fr + R.range(-3, 3), -R.range(1, 4), s * R.range(10, 40), -R.range(5, 20), R.range(0.6, 1.1), DUST, R.range(3, 6) * (1 - 0.4 * (fr / REACH)), 0, PF.BIG);
          if (R.chance(50 * dt)) ps.spawn(P.GRIT, s * fr, -1, s * R.range(10, 60), -R.range(60, 180), R.range(0.8, 1.3), R.pick(STONE), R.chance(0.3) ? 2 : 1);
        }
      ps.update(dt);
      hot.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      for (const b of bolts) if (b.down && t >= b.t0) scorch(p, b.x1, 0, 9, Math.pow(clamp(1 - (t - b.t0) / 1.1), 1.3), 1 - smooth(1.4, 1.85, t));
      const u = (t - CLAP) / 0.5;
      if (u > 0 && u < 1) band(p, 0, 0.5, front(t), 0.18, Math.max(2, 16 * (1 - u)), 1.25 - u, [C[1], C[2], C[4], C[6]], (g) => Math.sin(g) < 0, u < 0.15);
      ps.draw(p, "back");
      hot.draw(p, "back");
    },
    draw(p) {
      const f = Math.floor(t * 30 + 1e-4), u = (t - CLAP) / 0.5, A = o.actor;

      const a = t - CLAP;
      if (a >= 0 && a < 0.07) p.mask(A.mask, A.x, A.y, a < 0.035 ? WHITE : C[6]);
      if (a >= 0 && a < 0.2) {
        const q = a / 0.2;
        flare(p, 0, CY, 44 * Math.pow(1 - q, 1.4), 1 - q, C);
        if (q < 0.35) p.circle(0, CY, 10 * (1 - q * 2) + 2, WHITE);
        p.glow(0, CY, 44, C[5], 0.32 * (1 - q));
      }

      for (const [i, b] of bolts.entries()) {
        const ba = Math.floor((t - b.t0) * 30 + 1e-4);
        if (t < b.t0 || ba >= BK.length) continue;
        const r = rng(o.seed, 3, i, ba >> 1);
        stroke(p, zigzag(r, 0, CY, b.x1, b.y1, 0.25, b.down ? 0.5 : 0.8), BK[ba], C, ba === 0 ? 1 : 0.8, { hero: ba === 0 });
        if (b.down) {
          p.circle(b.x1, -1, 3 * BK[ba] + 1, C[5]);
          p.px(b.x1, -1, WHITE);
          p.glow(b.x1, -3, 20, C[5], 0.5 * BK[ba]);
        } else if (ba < 2) sparkle(p, b.x1, b.y1, 4, C[6], C[4], 0.4);
      }

      if (u > 0 && u < 1) {
        band(p, 0, 0.5, front(t), 0.18, Math.max(2, 16 * (1 - u)), 1.25 - u, [C[1], C[2], C[4], C[6]], (g) => Math.sin(g) >= 0, u < 0.15);
        for (const s of [-1, 1]) p.glow(s * front(t), -3, 28, C[4], 0.45 * (1 - u));
        const ua = (t - CLAP) / 0.26;
        const ra = 8 + 60 * ease.outCubic(ua);
        if (ua < 1) p.ring(0, CY, ra, Math.max(1, 2 * (1 - ua)), ua < 0.25 ? C[5] : ua < 0.6 ? C[4] : C[3], (v, g) => (CY + Math.sin(g) * ra > -1 ? 0 : 0.85 - 0.85 * ua));
      }

      if (a > 0.2 && a < 0.9) {
        const r = rng(o.seed, 9, f), k = 1 - (a - 0.2) / 0.7;
        if (r.next() < 0.8) {
          const x0 = r.range(-14, 14), y0 = r.range(-34, -4), b = r.range(0, TAU), l = r.range(6, 13);
          crackle(p, zigzag(r, x0, y0, x0 + Math.cos(b) * l, y0 + Math.sin(b) * l, 0.4, 0.3), 0.85 * k + 0.1, C, 0.35);
        }
      }
      ps.draw(p, "front");
      hot.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __imempqg=__r(1);const Particles=__imempqg.Particles;const Bits=__imempqg.Bits;const Lights=__imempqg.Lights;const P=__imempqg.P;const B=__imempqg.B;const Rng=__imempqg.Rng;const fit=__imempqg.fit;const sparkle=__imempqg.sparkle;const clamp=__imempqg.clamp;const smooth=__imempqg.smooth;const seg=__imempqg.seg;const ease=__imempqg.ease;const rand=__imempqg.rand;const TAU=__imempqg.TAU;const WHITE=__imempqg.WHITE;
const __ixja7ms=__r(34);const Panes=__ixja7ms.Panes;const endBy=__ixja7ms.endBy;const blade=__ixja7ms.blade;const splitPoly=__ixja7ms.splitPoly;
const meta = {
  name: "Ice spikes",
  desc: "A frost line races along the floor and clusters of jagged ice blades burst up behind it in a rising wave, glint, flash white together and shatter into toppling shards.",
  tags: ["ice", "spikes", "ground", "wave", "directional", "magic", "one-shot"],
  size: [264, 112],
  origin: [24, 96],
  duration: 3,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#151a3d", "#212f6b", "#2c58aa", "#3a8bd8", "#62c8f4", "#a6ecff", "#dcfbff", "#ffffff"], reach: 172, height: 56, seed: 3 },
};
const START = 0.04, RUN = 0.44; // the frost line runs out
const SHIMMER = 0.74; // a glint runs down the line
const TREMBLE = 1.2, FLASH = 1.36, SHATTER = 1.42; // they shiver, flash white together and break
const MELT = 1.75; // the frost goes, oldest first
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), REACH = o.reach, floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[7], C[6], C[5], C[4]], haze: C[5] });
  const bits = new Bits({ ground: floor }), lights = new Lights();
  const splinter = (x, y, vx, n) => {
    for (let i = 0; i < n; i++) bits.add({ kind: B.SHARD, x: x + R.range(-2, 2), y: y - 1, vx: vx * 0.5 + R.range(-45, 45), vy: -R.range(30, 100), g: 0.8, drag: 0.6, bounce: 0.35, life: R.range(0.4, 0.75), a: R.range(0, TAU), va: R.range(-18, 18), s: R.range(1.2, 2.4), c: C[R.int(4, 7)] });
  };
  const panes = new Panes({
    ground: floor,
    onCrumble: (q) => {
      splinter(q.x, 0, 0, 3);
      ps.spawn(P.VAPOUR, q.x, -1, R.range(-12, 12), -R.range(2, 8), R.range(0.4, 0.7), C[6], R.range(1.4, 2.2));
    },
    onLand: (q, x, y, v) => {
      if (v < 110) return;
      ps.spawn(P.VAPOUR, x, y - 1, R.range(-20, 20), -R.range(2, 8), R.range(0.4, 0.7), C[6], R.range(1.4, 2.4));
      splinter(x, y, q.vx, 3);
      if (R.chance(0.3)) ps.spawn(P.STAR, x, y - 2, 0, -5, R.range(0.2, 0.4), WHITE, R.range(0.8, 1.6));
    },
  });
  const front = (t) => REACH * (1 - Math.pow(1 - seg(t, START, START + RUN), 1.7));
  const reachedAt = (x) => START + RUN * (1 - Math.pow(1 - clamp(x / REACH), 1 / 1.7));


  const env = (q) => 0.28 + 0.72 * Math.exp(-(((q - 0.64) / 0.3) ** 2));
  const clusters = [];
  for (let x = 10; x < REACH - 2; x += R.range(20, 26)) {
    const q = x / REACH, H = o.height * env(q) * R.range(0.88, 1.06), W = clamp(H * 0.36, 5, 14), lean = H * R.range(0.2, 0.34);

    const list = [
      { dx: W * R.range(0.35, 0.6), h: H * R.range(0.5, 0.7), w: W * 0.7, lean: H * R.range(0.4, 0.6), back: true, delay: R.range(0.02, 0.05), jag: R.chance(0.5) ? R.range(0.35, 0.6) : -1 },
      { dx: 0, h: H, w: W, lean, back: false, delay: 0, jag: R.chance(0.7) ? R.range(0.32, 0.58) : -1, main: true },
    ];
    if (H > 14) list.push({ dx: -W * R.range(0.35, 0.55), h: H * R.range(0.24, 0.4), w: W * 0.55, lean: -H * R.range(0, 0.12), back: false, delay: R.range(0.03, 0.07), jag: -1 });
    clusters.push({ x, q, H, W, blades: list, main: list[1], t0: reachedAt(x) + 0.012, up: false });
  }
  const crest = clusters.reduce((a, c) => (c.H > a.H ? c : a), clusters[0]);
  let t = 0, broke = false, trembled = false;

  const pose = (c, b) => {
    const g = ease.outBack(clamp((t - c.t0 - b.delay) / 0.09), 2.2), x = c.x + b.dx;
    return { g, x, tx: x + b.lean * g, ty: -b.h * g, white: t - c.t0 - b.delay < 0.03 || (t >= FLASH && t < SHATTER) };
  };
  const drawClusters = (p) => {
    if (t >= SHATTER) return;
    for (const pass of [0, 1, 2])
      for (const c of clusters) {
        if (t < c.t0) continue;
        const jx = t >= TREMBLE && t < FLASH ? ((Math.floor(t * 40) + Math.round(c.x)) % 2 ? 1 : 0) : 0;
        for (const b of c.blades) {
          if ((pass === 0) !== b.back || (pass === 1) !== !!b.main) continue;
          const s = pose(c, b);
          if (s.g <= 0) continue;
          const gl = (t - SHIMMER - c.q * 0.34) / 0.2;
          blade(p, s.x + jx, 0, s.tx + jx, s.ty, b.w, C, { white: s.white, jag: b.jag, dim: b.back ? 1 : 0, glint: gl >= 0 && gl <= 1 ? gl : -1 });
        }
        if (pass === 2) {

          const pop = clamp(1 - (t - c.t0) / 0.15), wh = t >= FLASH;
          p.glow(c.x + c.main.lean * 0.4, -c.H * 0.45, c.H * 0.9 + 10, C[4], (0.16 + 0.42 * pop + (wh ? 0.4 : 0)) * (0.85 + 0.15 * Math.sin(t * 3 + c.x)));
          if (pop > 0) p.glow(c.x, -2, 14, WHITE, 0.55 * pop);
        }
      }
  };

  const drawFrost = (p) => {
    const fr = front(t);
    for (let x = -3; x <= Math.min(fr, REACH + 6); x++) {
      const q = clamp(x / REACH), age = t - reachedAt(Math.max(0, x)), a = 1 - smooth(MELT + q * 0.35, MELT + q * 0.35 + 0.6, t);
      if (a <= 0 || age < 0) continue;
      const h = rand(x, 17), grow = smooth(0, 0.3, age), head = fr - x < 3 && fr < REACH;
      p.dot(x, 0, head || age < 0.06 || h < 0.3 ? WHITE : C[6], a);
      const L = h < 0.45 ? Math.round(grow * (1 + rand(x, 5) * 2.6)) : 0;
      for (let j = 1; j <= L; j++) p.dot(x, -j, j === L ? WHITE : C[5], a);
      if (L > 1 && rand(x, 9) < 0.5) p.dot(x + 1, -L + 1, C[6], a);
      const D = grow * (2 + rand(x, 11) * 4) * (1 - q * 0.3);
      for (let j = 1; j <= D; j++) p.dot(x, j, rand(x * 31 + j, 7) < 0.06 ? WHITE : j < 2 ? C[5] : j < 4 ? C[4] : C[3], a * (1.1 - j / (D + 1)));
      if (head) p.dot(x, -1, WHITE);
    }
    if (fr < REACH && t > START) {
      p.glow(fr, -2, 16, C[6], 0.6);
      p.glow(fr, -1, 7, WHITE, 0.6);
    }
  };
  const breakBlade = (c, b) => {
    const s = pose(c, b), ax = s.tx - s.x, ay = s.ty, L = Math.hypot(ax, ay) || 1, nx = -ay / L, ny = ax / L, hw = b.w / 2;
    const tri = [[s.x - nx * hw, -ny * hw], [s.tx, s.ty], [s.x + nx * hw, ny * hw]];
    const ang = Math.atan2(ay, ax) + Math.PI / 2;
    let parts = [tri];
    if (b.h > 9) parts = parts.flatMap((poly) => splitPoly(poly, s.x + ax * 0.4, ay * 0.4, ang));
    if (b.h > 22) parts = parts.flatMap((poly) => (poly.some(([, y]) => y < ay * 0.5) ? splitPoly(poly, s.x + ax * 0.72, ay * 0.72, ang) : [poly]));
    for (const part of parts) {
      let mx = 0, my = 0;
      for (const [x, y] of part) (mx += x), (my += y);
      (mx /= part.length), (my /= part.length);
      const up = clamp(-my / 40);
      panes.add({
        pts: part.map(([x, y]) => [x - mx, y - my]), x: mx, y: my, vx: R.range(-25, 60), vy: -R.range(40, 130) * (0.5 + up), a: 0, va: R.range(-8, 8), f: R.range(-0.7, 0.7), vf: R.range(-6, 6),
        lit: b.back ? 0.45 : 0.75, g: 0.9, drag: 0.6, bounce: 0.3, solid: true, ridge: Math.atan2(ay, ax), brittle: b.h > 30 ? 2 : 1, crumble: R.range(0.12, 0.4), life: R.range(1, 1.4),
      });
    }
    for (let i = 0; i < 2 + b.h / 7; i++) {
      const u = R.next();
      bits.add({ kind: R.chance(0.15) ? B.CHUNK : B.SHARD, x: s.x + ax * u + R.range(-1.5, 1.5), y: ay * u, vx: R.range(-60, 90), vy: -R.range(60, 230), g: 0.9, drag: 0.6, bounce: 0.3, life: R.range(0.7, 1.3), a: R.range(0, TAU), va: R.range(-20, 20), s: R.range(1.2, 3.2), c: C[R.int(4, 7)], ramp: [C[1], C[3], C[4], C[6], C[7]] });
    }
  };
  return {
    update(dt) {
      t += dt;

      if (t - dt <= START && t > START) {
        for (let i = 0; i < 4; i++) ps.spawn(P.VAPOUR, R.range(0, 6), -R.range(0, 3), R.range(10, 60), -R.range(2, 12), R.range(0.4, 0.7), C[6], R.range(2, 3.2));
        lights.add(4, -4, 26, C[5], 0.6, 0.25);
      }

      const fr = front(t);
      if (t > START && fr < REACH - 1) {
        if (R.chance(0.5)) ps.spawn(P.STREAK, fr - R.range(4, 12), -R.range(1, 3), R.range(40, 80), -R.range(0, 6), R.range(0.08, 0.14), R.chance(0.5) ? C[6] : WHITE);
        if (R.chance(0.3)) ps.spawn(P.FLAKE, fr, -1, R.range(10, 50), -R.range(20, 70), R.range(0.5, 0.9), R.chance(0.5) ? WHITE : C[6], R.range(0.5, 1.2));
        if (R.chance(0.12)) ps.spawn(P.VAPOUR, fr, -R.range(0, 3), R.range(20, 60), -R.range(2, 10), R.range(0.4, 0.7), C[6], R.range(1.6, 2.8));
      }
      for (const c of clusters) {
        if (c.up || t < c.t0) continue;
        c.up = true;

        const big = c === crest, n = 3 + Math.round(c.H / 8);
        for (let i = 0; i < n; i++) {
          const a = -Math.PI / 2 + R.range(-1.1, 1.0), sp = R.range(60, 190) * (0.45 + c.H / 44);
          bits.add({ kind: B.SHARD, x: c.x + R.range(-3, 3), y: -1, vx: Math.cos(a) * sp + 25, vy: Math.sin(a) * sp, g: 0.8, drag: 0.6, bounce: 0.3, life: R.range(0.6, 1.1), a: R.range(0, TAU), va: R.range(-18, 18), s: R.range(1.2, 3), c: C[R.int(5, 7)] });
        }
        ps.spawn(P.VAPOUR, c.x, -1, R.range(-10, 40), -R.range(2, 10), R.range(0.5, 0.9), C[6], R.range(2.2, 3.4) * (0.6 + c.H / 60));
        for (let i = 0; i < 2; i++) ps.spawn(P.FLAKE, c.x + R.range(-4, 4), -R.range(2, c.H * 0.5), R.range(-20, 40), -R.range(20, 60), R.range(0.6, 1.1), R.chance(0.5) ? WHITE : C[6], R.range(0.5, 1.3));
        if (c.H > 16) ps.spawn(P.STAR, c.x + c.main.lean, -c.H * 0.96, 0, -4, R.range(0.3, 0.5), WHITE, R.range(1.4, 2.6), 0.08);
        lights.add(c.x, -c.H * 0.4, 16 + c.H * 0.6, C[5], 0.5, 0.18);
        if (big) {
          lights.add(c.x, -c.H * 0.5, 54, WHITE, 0.5, 0.14);
          for (let i = 0; i < 4; i++) ps.spawn(P.VAPOUR, c.x + R.range(-6, 6), -R.range(0, 4), R.range(-40, 60), -R.range(4, 16), R.range(0.6, 1), C[6], R.range(3, 4.5));
        }
      }

      if (t > START + RUN && t < TREMBLE && R.chance(0.09)) {
        const c = R.pick(clusters), b = R.pick(c.blades), s = pose(c, b), u = R.range(0.3, 0.95);
        ps.spawn(P.STAR, s.x + (s.tx - s.x) * u, s.ty * u, 0, -3, R.range(0.25, 0.5), R.chance(0.6) ? WHITE : C[6], R.range(0.6, 2));
      }

      if (!trembled && t >= TREMBLE) {
        trembled = true;
        for (const c of clusters)
          for (let i = 0; i < 2; i++) bits.add({ kind: B.SHARD, x: c.x + R.range(-4, 4), y: -R.range(4, c.H * 0.8), vx: R.range(-20, 20), vy: -R.range(0, 30), g: 0.8, drag: 0.5, bounce: 0.3, life: R.range(0.3, 0.6), a: R.range(0, TAU), va: R.range(-18, 18), s: R.range(1, 1.8), c: C[R.int(5, 7)] });
      }
      if (!broke && t >= SHATTER) {
        broke = true;

        for (const c of clusters) {
          for (const b of c.blades) breakBlade(c, b);
          for (let i = 0; i < 2; i++) ps.spawn(P.VAPOUR, c.x + R.range(-6, 6), -R.range(1, 8), R.range(-30, 50), -R.range(4, 18), R.range(0.6, 1.1), C[6], R.range(2.4, 4) * (0.7 + c.H / 60));
          if (R.chance(0.7)) ps.spawn(P.STAR, c.x + R.range(-6, 6), -R.range(4, c.H), R.range(-10, 10), -R.range(6, 20), R.range(0.4, 0.8), R.chance(0.5) ? WHITE : C[6], R.range(1, 2.2));
          for (let i = 0; i < 2; i++) ps.spawn(P.FLAKE, c.x + R.range(-6, 6), -R.range(4, c.H), R.range(-30, 60), -R.range(30, 90), R.range(0.9, 1.5), R.chance(0.6) ? WHITE : C[6], R.range(0.5, 1.5));
          lights.add(c.x, -c.H * 0.5, 22 + c.H, WHITE, 0.45, 0.12);
        }
        for (let i = 0; i < 5; i++) lights.add((REACH * (i + 0.5)) / 5, -18, 40, C[4], 0.4, 0.5);
      }

      if (broke && t < SHATTER + 0.8 && R.chance(0.1) && bits.list.length) {
        const b = R.pick(bits.list);
        ps.spawn(P.STAR, b.x, b.y - 1, 0, -3, R.range(0.2, 0.4), R.chance(0.5) ? WHITE : C[6], R.range(0.6, 1.5));
      }
      ps.update(dt);
      bits.update(dt);
      panes.update(dt);
      lights.update(dt);
      endBy(t, meta.duration, ps, bits, panes);
    },
    drawBack(p) {
      drawFrost(p);
      ps.draw(p, "back");
    },
    draw(p) {
      drawClusters(p);

      const k = (1 - smooth(MELT, MELT + 0.9, t)) * smooth(START, START + 0.3, t), fr = front(t);
      for (let i = 0; i < 6; i++) p.glow((fr * (i + 0.5)) / 6, -3, 26, C[4], 0.15 * k);
      if (t >= FLASH && t < SHATTER + 0.1) for (const c of clusters) sparkle(p, c.x + c.main.lean, -c.H, 6 * (1 - clamp((t - FLASH) / 0.16)), C[6], C[4], 0.4);
      panes.draw(p, C);
      bits.draw(p);
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __i71iv8h=__r(1);const PAL=__i71iv8h.PAL;const fit=__i71iv8h.fit;const cycle=__i71iv8h.cycle;const fly=__i71iv8h.fly;const flyV=__i71iv8h.flyV;const loopNoise=__i71iv8h.loopNoise;const fract=__i71iv8h.fract;const ease=__i71iv8h.ease;const sparkle=__i71iv8h.sparkle;const TAU=__i71iv8h.TAU;const WHITE=__i71iv8h.WHITE;const READY=__i71iv8h.READY;
const __i3jcli6=__r(62);const bayer=__i3jcli6.bayer;const mote=__i3jcli6.mote;
const D = 1.2, HX = 15, HY = -24, L = 168, W = 6;
const meta = {
  name: "Arcane beam",
  desc: "A beam fires right from the hand: a white core, strands twisting round it, pulses running down it, a flaring source and an end that sprays sparks.",
  tags: ["arcane", "beam", "laser", "ray", "magic", "directional", "loop"],
  size: [264, 100],
  origin: [26, 84],
  duration: D,
  loop: true,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: { palette: PAL.arcane, seed: 10 },
};
const AIM = { ...READY, x: -3, crouch: 4, lean: 4, fx: 18, fy: -24, bx: 13, by: -20, ffx: 11, fbx: -9, toeB: true };
const PULL = { ...READY, x: -3, crouch: 4, lean: -3, fx: 1, fy: -20, bx: 4, by: -22, ffx: 9, fbx: -7 };
const act = {
  target: { x: 186 },
  poses: [
    [-0.62, { ...READY, x: -3 }],
    [-0.3, PULL],
    [-0.04, { ...PULL, crouch: 5, lean: -4 }],
    [0, { ...AIM, crouch: 3 }, "snap"],
    [0.3, AIM],
    [0.6, { ...AIM, crouch: 5, lean: 3 }],
    [0.9, AIM],
    [1.2, { ...AIM, crouch: 3 }],
  ],
  hits: [{ t: 0.1, push: 0.5, straw: 3, flash: 0.02, y: -24 }, { t: 0.7, push: 0.5, straw: 3, flash: 0.02, y: -24 }],
  dust: [{ t: 0, x: -10, n: 5, dir: -1 }],
};
function draw(p, t, o) {
  const C = fit(o.palette, 8), ph = t / D, S = o.seed, EX = HX + L;

  const LV = [WHITE, C[6], C[5], C[4], C[3], C[2]];
  for (let d = 0; d <= L; d += 0.5) {
    const x = HX + d, w = W * (1 + 0.12 * Math.sin(d * 0.35 - ph * TAU * 8)) * Math.min(1, (d + 3) / 7);
    const pulse = fract(d * 0.025 - ph * 4) < 0.07 ? 1 : 0;
    for (let q0 = -w * 1.3; q0 <= w * 1.3; q0 += 0.5) {
      const q = Math.abs(q0) / w, y = HY + q0;
      let lv = q < 0.2 ? 0 : q < 0.4 ? 1 : q < 0.62 ? 2 : q < 0.85 ? 3 : q < 1 ? 4 : 5;
      lv = Math.max(0, lv - pulse);
      if (lv === 5 && bayer(x, y) > (1.3 - q) / 0.3) continue;
      p.px(x, y, LV[lv]);
    }

    for (let s = 0; s < 3; s++) {
      const a = d * 0.17 - ph * TAU * 6 + (s * TAU) / 3, off = Math.sin(a) * w * 1.05;
      if (Math.cos(a) > -0.15) p.dot(x, HY + off, Math.cos(a) > 0.55 ? WHITE : C[6]);
    }
    if ((Math.round(d * 2) & 11) === 0) p.glow(x, HY, w * 2.2 + 4, C[5], 0.2);
  }

  const fr = 4.2 + Math.sin(ph * TAU * 10) * 0.6;
  for (let i = 0; i < 4; i++) {
    const a = ph * TAU * 2.5 + (i * TAU) / 4, l = 7 + 3 * Math.sin(ph * TAU * 6 + i);
    p.line(HX, HY, HX + Math.cos(a) * l, HY + Math.sin(a) * l, (u) => (u < 0.5 ? WHITE : C[6]), (u) => (u < 0.6 ? 1 : 1.6 - u));
  }
  p.circle(HX, HY, fr + 1.5, C[4]);
  p.circle(HX, HY, fr, C[6]);
  p.circle(HX, HY, fr * 0.6, WHITE);
  p.glow(HX, HY, 32, C[5], 0.8);

  cycle(t, D, 10, S * 3 + 1, 0.18, (age, life, r) => {
    const a = r.range(0, TAU), dd = 16 * (1 - age / life) + 3, x = HX + Math.cos(a) * dd, y = HY + Math.sin(a) * dd;
    p.dot(x, y, age / life > 0.6 ? WHITE : C[6]);
  });

  const ir = 5 + Math.sin(ph * TAU * 12) * 0.8;
  for (let i = 0; i < 7; i++) {
    const a = Math.PI + (i - 3) * 0.36, l = 8 + 8 * Math.abs(loopNoise(ph, 4, S * 7 + i));
    p.line(EX, HY, EX + Math.cos(a) * l, HY + Math.sin(a) * l, (u) => (u < 0.4 ? WHITE : i % 2 ? C[5] : C[6]), (u) => (u < 0.6 ? 1 : 1.6 - u));
  }
  for (let k = 0; k < 3; k++) {
    const q = fract(ph * 3 + k / 3);
    p.ring(EX, HY, 3 + 15 * ease.outCubic(q), Math.max(1, 2 * (1 - q)), q < 0.25 ? WHITE : C[5], 1.1 - q);
  }
  p.circle(EX, HY, ir + 1.5, C[4]);
  p.circle(EX, HY, ir, C[6]);
  p.circle(EX, HY, ir * 0.55, WHITE);
  p.glow(EX, HY, 40, C[5], 0.9);
  p.glow(EX, HY, 12, WHITE, 0.6);

  cycle(t, D, 220, S * 3 + 2, (g) => g.range(0.18, 0.5), (age, life, r) => {
    const a = Math.PI * 1.5 + r.range(-1.7, 0.45), sp = r.range(70, 260), vx = Math.cos(a) * sp, vy = Math.sin(a) * sp - 30;
    const [x, y] = fly(EX, HY, vx, vy, age, 480, 2.2), [ux, uy] = flyV(vx, vy, age, 480, 2.2), k = 1 - age / life;
    if (y > -1) return;
    const head = k > 0.6 ? WHITE : k > 0.3 ? C[6] : C[5], sp2 = Math.hypot(ux, uy) || 1, len = Math.min(8, 1 + sp2 * 0.022);
    p.line(x - (ux / sp2) * len, y - (uy / sp2) * len, x, y, (u) => (u > 0.5 ? head : C[4]));
    p.glow(x, y, 3, head, 0.45 * k);
  });
  cycle(t, D, 6, S * 3 + 3, 0.3, (age, life, r) => {
    const k = Math.sin((age / life) * Math.PI);
    sparkle(p, EX + r.range(-12, 4), HY + r.range(-12, 12), 1 + 2.5 * k, C[6], C[5], 0.4 * k);
  });

  cycle(t, D, 7, S * 3 + 5, (g) => g.range(0.8, 1.2), (age, life, r) => {
    const q = age / life, x = EX + r.range(-8, 4) - q * 6, y = HY - 4 - q * r.range(14, 24), rad = r.range(3, 5) * (0.7 + 0.8 * q);
    p.disc(x, y, rad, C[4], (dd) => 0.28 * Math.sin(q * Math.PI) * (1 - dd * dd));
  });

  cycle(t, D, 16, S * 3 + 4, (g) => g.range(0.3, 0.6), (age, life, r) => {
    const q = age / life, x = HX + r.range(10, L - 10) + q * 20, y = HY + r.sign() * (W + 1 + q * r.range(4, 10));
    mote(p, x, y, 40, (y - HY) * 1.5, r.chance(0.5) ? C[6] : C[5], 0.6, 1 - q, 0.3);
  });

  p.glow(EX, -1, 30, C[5], 0.25);
  p.glow(HX + L / 2, -1, 60, C[4], 0.12);
}
},
function(__e){Object.defineProperty(__e,"bayer",{enumerable:true,configurable:true,get:()=>bayer});Object.defineProperty(__e,"tone",{enumerable:true,configurable:true,get:()=>tone});Object.defineProperty(__e,"mote",{enumerable:true,configurable:true,get:()=>mote});Object.defineProperty(__e,"streak",{enumerable:true,configurable:true,get:()=>streak});Object.defineProperty(__e,"arc",{enumerable:true,configurable:true,get:()=>arc});Object.defineProperty(__e,"drawArc",{enumerable:true,configurable:true,get:()=>drawArc});Object.defineProperty(__e,"floorRing",{enumerable:true,configurable:true,get:()=>floorRing});Object.defineProperty(__e,"GLYPHS",{enumerable:true,configurable:true,get:()=>GLYPHS});Object.defineProperty(__e,"glyph",{enumerable:true,configurable:true,get:()=>glyph});Object.defineProperty(__e,"SIGILS",{enumerable:true,configurable:true,get:()=>SIGILS});Object.defineProperty(__e,"sigil",{enumerable:true,configurable:true,get:()=>sigil});Object.defineProperty(__e,"shades",{enumerable:true,configurable:true,get:()=>shades});Object.defineProperty(__e,"squeezed",{enumerable:true,configurable:true,get:()=>squeezed});
const __itveajd=__r(1);const scale=__itveajd.scale;const clamp=__itveajd.clamp;const bolt=__itveajd.bolt;const luma=__itveajd.luma;const WHITE=__itveajd.WHITE;
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);
const CROSS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const bayer = (x, y) => BAYER[((Math.floor(y) & 3) << 2) | (Math.floor(x) & 3)];
function tone(R, I, x, y, lo = 0.06, sharp = 0) {
  const b = bayer(x, y);
  if (I < lo && b > I / lo) return 0;
  const n = R.length - 1, f = clamp(I) * n;
  let i = Math.floor(f);

  const q = sharp > 0 ? clamp((f - i - 0.5) / (1 - sharp) + 0.5) : f - i;
  if (q > b) i = Math.min(n, i + 1);
  return R[i];
}
function mote(p, x, y, vx, vy, c, size = 1, k = 1, glow = 0.4) {
  const sp = Math.hypot(vx, vy) || 1, ux = vx / sp, uy = vy / sp, len = Math.min(16, 0.5 + sp * 0.026) * size, a = k < 0.35 ? k / 0.35 : 1;
  if (len > 1.2) p.line(x - ux * len, y - uy * len, x - ux * len * 0.35, y - uy * len * 0.35, scale(c, 0.55), a);
  p.line(x - ux * len * 0.4, y - uy * len * 0.4, x, y, c, a);
  if (glow > 0) p.glow(x, y, 2.5 + size, c, glow * k);
}
function streak(p, x, y, vx, vy, c, a = 1, maxLen = 7, glow = 0.4) {
  const sp = Math.hypot(vx, vy) || 1, ux = vx / sp, uy = vy / sp, L = clamp(sp / 30, 1, maxLen);
  for (let d = L; d >= 0; d -= 0.5) p.dot(x - ux * d, y - uy * d, d < 1 ? WHITE : d < L * 0.5 ? c : scale(c, 0.6), (d < L * 0.5 ? 1 : 1.2 - d / L) * a);
  if (glow > 0) p.glow(x, y, 4, c, glow * a);
}
function arc(r, x0, y0, x1, y1, { jag = 0.3, forks = 1, forkLen = 0.5 } = {}) {
  const L = Math.hypot(x1 - x0, y1 - y0), depth = Math.max(1, Math.min(5, Math.round(Math.log2(L / 1.5)))), main = bolt(r, x0, y0, x1, y1, { jag, depth });
  const out = [{ pts: main, w: 1 }];
  for (let k = 0; k < forks && main.length > 3; k++) {
    if (r.next() > 0.7) continue;
    const i = 1 + Math.floor(r.next() * (main.length - 2)), [x, y] = main[i], [px, py] = main[i - 1];
    const a = Math.atan2(y - py, x - px) + (r.next() < 0.5 ? -1 : 1) * (0.4 + r.next() * 0.6), l = L * forkLen * (0.4 + 0.6 * r.next()) * (1 - i / main.length);
    if (l > 1.5) out.push({ pts: bolt(r, x, y, x + Math.cos(a) * l, y + Math.sin(a) * l, { jag: jag * 1.1, depth: Math.max(1, depth - 2) }), w: 0.55 });
  }
  return out;
}
function drawArc(p, paths, cols, k = 1, glowK = 0.5) {
  const steps = (fn) => {
    for (const path of paths)
      for (let i = 0; i < path.pts.length - 1; i++) {
        const [ax, ay] = path.pts[i], [bx, by] = path.pts[i + 1], l = Math.max(1, Math.hypot(bx - ax, by - ay));
        for (let d = 0; d <= l; d += 0.5) fn(ax + ((bx - ax) * d) / l, ay + ((by - ay) * d) / l, path, i, d === 0);
      }
  };
  if (k > 0.45) steps((x, y, path) => { if (path.w >= 1) for (const [dx, dy] of CROSS) p.dot(x + dx * 1.5, y + dy * 1.5, cols.halo, (k - 0.45) * 1.6); });
  if (k > 0.25) steps((x, y, path) => { if (path.w > 0.4) (p.dot(x + 1, y, cols.body), p.dot(x, y + 1, cols.body)); });
  steps((x, y, path, i, first) => {
    p.px(x, y, path.w >= 1 && k > 0.3 ? cols.core : cols.body);
    if (first && i % 3 === 0) p.glow(x, y, (path.w >= 1 ? 9 : 5) * (0.5 + k * 0.5), cols.glow, glowK * k * path.w);
  });
}
function floorRing(p, cx, cy, r, sy, c, a = 1, keep = null) {
  if (r < 0.5) return;
  const fc = typeof c === "function", fa = typeof a === "function", ry = r * sy;
  p.shade(cx - r - 1, cy - ry - 1, cx + r + 1, cy + ry + 1, (x, y, o) => {
    const nx = (x - cx) / r, ny = (y - cy) / Math.max(0.3, ry), d = Math.hypot(nx, ny);
    if (d < 1e-6) return;
    const g = Math.hypot(nx / r, ny / Math.max(0.3, ry)) / d;
    if (Math.abs(d - 1) / g > 0.5) return;
    const ang = Math.atan2(ny, nx);
    if (keep && !keep(ang)) return;
    o.c = fc ? c(ang) : c;
    o.a = fa ? a(ang) : a;
  });
}

const GLYPHS = [
  [".#.", "#.#", ".#.", ".#.", "#.#"],
  ["#.#", "#.#", ".#.", "#.#", "#.#"],
  ["##.", "#.#", "##.", "#..", "#.."],
  ["#..", "#.#", "###", "#.#", "..#"],
  [".##", "#..", ".#.", "..#", "##."],
  ["###", ".#.", "###", ".#.", ".#."],
  ["#.#", "###", "#.#", "..#", "..#"],
  [".#.", ".##", ".#.", "##.", ".#."],
];
function glyph(p, i, x, y, c, a = 1, under = 0) {
  const g = GLYPHS[((i % GLYPHS.length) + GLYPHS.length) % GLYPHS.length], X = Math.round(x) - 1, Y = Math.round(y) - g.length + 1;
  if (under) p.sprite(g, {}, X, Y + 1, { tint: under, a });
  p.sprite(g, {}, X, Y, { tint: c, a });
}

const SIGILS = [
  ["..#..", ".#.#.", "#.#.#", "..#..", ".###.", "..#..", ".#.#."],
  ["#...#", ".#.#.", "..#..", ".###.", "..#..", ".#.#.", "#...#"],
  ["#....", "##...", "#.#..", "#..#.", "#.#..", "##...", "#...."],
  ["..#..", "#.#.#", ".###.", "..#..", "..#..", ".#.#.", "#...#"],
  ["#.#.#", "#.#.#", "#####", "..#..", "..#..", "..#..", ".###."],
  ["#...#", "##.##", "#.#.#", "#...#", "#.#.#", "##.##", "#...#"],
  ["..#..", ".#.#.", "#...#", ".#.#.", "..#..", "..#..", "..#.."],
  ["#..#.", "#.#..", "##...", "#....", "##...", "#.#..", "#..#."],
];
function sigil(p, i, x, y, c, a = 1, edge = 0) {
  const g = SIGILS[((i % SIGILS.length) + SIGILS.length) % SIGILS.length], X = Math.round(x) - 2, Y = Math.round(y) - 3;
  if (edge) for (const [dx, dy] of CROSS) p.sprite(g, {}, X + dx, Y + dy, { tint: edge, a });
  p.sprite(g, {}, X, Y, { tint: c, a });
}
function shades(A) {
  const s = new Uint8Array(A.w * A.h);
  for (let i = 0; i < s.length; i++) if (A.mask.data[i]) s[i] = A.pixels ? (luma(A.pixels[i]) < 0.24 ? 1 : luma(A.pixels[i]) < 0.62 ? 2 : 3) : 2;
  return s;
}
function squeezed(p, A, sh, sx, body, edge, a = 1, dx = 0) {
  if (sx <= 0.02) return;
  const cx = A.x + A.w / 2, half = A.w / 2 + 1;
  for (let y = 0; y < A.h; y++)
    for (let x = Math.floor(cx - half * sx); x <= Math.ceil(cx + half * sx); x++) {
      const i = Math.round(cx + (x + 0.5 - cx) / sx - 0.5) - A.x, v = i < 0 || i >= A.w ? 0 : sh[y * A.w + i];
      if (v) p.dot(x + dx, A.y + y, v === 1 ? edge : body, a);
    }
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __il7kd73=__r(1);const Particles=__il7kd73.Particles;const Lights=__il7kd73.Lights;const P=__il7kd73.P;const Rng=__il7kd73.Rng;const fit=__il7kd73.fit;const sparkle=__il7kd73.sparkle;const clamp=__il7kd73.clamp;const smooth=__il7kd73.smooth;const seg=__il7kd73.seg;const lerp=__il7kd73.lerp;const ease=__il7kd73.ease;const rand=__il7kd73.rand;const TAU=__il7kd73.TAU;const WHITE=__il7kd73.WHITE;
const __i47hipg=__r(29);const GOLD=__i47hipg.GOLD;const Feathers=__i47hipg.Feathers;const oval=__i47hipg.oval;
const meta = {
  name: "Holy pillar",
  desc: "Light breaks through from above: a sun opens at the top and a fan of shafts converges on the mark, pulsing, while a sigil burns on the floor; then the fan folds shut.",
  tags: ["holy", "pillar", "light", "rays", "aoe", "sigil", "ground", "one-shot"],
  size: [192, 232],
  origin: [96, 204],
  duration: 3.5,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: GOLD, shafts: 7, seed: 3 },
};
const TOP = -204, PY = -1, SUN = TOP + 38, SY = 0.24, RX = 26;

const OPEN = 0.3, HIT = 0.66, FOLD = 2.05, SHUT = 2.45, LIFT = 2.75;
const frac = (x) => x - Math.floor(x);
function create(o) {
  const C = fit(o.palette, 8), N = Math.max(3, o.shafts | 0), R = new Rng(o.seed), mid = (N - 1) / 2;
  const WING = [C[2], C[3], C[4], C[5], C[6], WHITE];
  const ps = new Particles({ rng: R, ground: () => 0, sparks: [WHITE, C[6], C[5], C[3]] });
  const lights = new Lights(), feathers = new Feathers(R, 0);

  const shafts = Array.from({ length: N }, (_, i) => {
    const off = i - mid, far = Math.abs(off) / mid;
    return { th: off * (0.4 / mid) + R.range(-0.02, 0.02), spread: R.range(0.05, 0.085) * (1 - far * 0.25), b: (1 - far * 0.35) * R.range(0.8, 1), ph: R.range(0, 1), far };
  });
  const motes = Array.from({ length: 72 }, () => ({ x: R.range(-80, 80), y: R.range(0, 1), v: R.range(7, 18), amp: R.range(0.5, 2.5), f: R.range(0.6, 1.5), ph: R.range(0, TAU) }));
  for (let i = 0; i < 6; i++)
    feathers.add({ x: R.range(-46, 46), y: R.range(-150, -100), vx: R.range(-8, 8), vy: R.range(0, 8), a: R.range(-0.4, 0.4), len: R.range(7, 9), wid: R.range(1.9, 2.3), life: R.range(1.4, 1.7), sink: R.range(26, 36), back: i % 3 === 0, delay: HIT + 0.1 + i * 0.16 + R.range(0, 0.08) });
  const DMAX = PY - TOP, row = new Float32Array(192), core = new Uint8Array(192);
  let t = 0, hit = false, shut = false, glinted = false;

  const angle = (s, tt) => {
    const st = s.far * 0.1, open = ease.outBack(seg(tt, OPEN + st, OPEN + st + 0.42), 1.5), fold = ease.inOutCubic(seg(tt, FOLD - s.far * 0.1, SHUT));
    return s.th * open * (1 - fold);
  };

  const frontD = (s, tt) => DMAX * (1 - ease.inQuad(seg(tt, OPEN + s.far * 0.06, HIT + s.far * 0.06)));
  const liftD = (tt) => DMAX * ease.inQuad(seg(tt, SHUT + 0.05, LIFT));
  const fade = (tt) => smooth(OPEN, OPEN + 0.1, tt) * (1 - smooth(LIFT - 0.05, LIFT + 0.05, tt));
  const width = (s, d, tt) => (1.4 + d * s.spread) * lerp(1, 0.25, smooth(SHUT, LIFT, tt));

  const pulse = (s, d, tt) => {
    if (tt < HIT || tt > SHUT) return 1;
    const D = DMAX * (1 - frac((tt - HIT) / 0.6 + s.ph));
    return 1 + 0.9 * Math.exp(-(((d - D) / 12) ** 2));
  };

  const lightAt = (x, y) => {
    const dy = PY - y;
    if (dy <= 0) return 0;
    let I = 0;
    for (const s of shafts) {
      const a = angle(s, t), d = dy / Math.cos(a), xc = Math.tan(a) * dy, hw = width(s, d, t) / 2 / Math.cos(a);
      if (d < liftD(t) || d < frontD(s, t)) continue;
      const v = (x - xc) / hw;
      if (Math.abs(v) < 1) I += (1 - v * v) * s.b;
    }
    return I * fade(t);
  };
  function fan(p) {
    const k = fade(t);
    if (k <= 0) return;
    const lift = liftD(t);
    for (let y = Math.ceil(TOP); y < PY; y++) {
      const dy = PY - (y + 0.5);
      row.fill(0);
      core.fill(0);
      let any = false;
      for (const s of shafts) {
        const a = angle(s, t), ca = Math.cos(a), d = dy / ca;
        if (d < lift || d < frontD(s, t) - 6) continue;
        const xc = Math.tan(a) * dy, hw = width(s, d, t) / 2 / ca, soft = smooth(frontD(s, t) - 6, frontD(s, t) + 4, d) * smooth(lift, lift + 6, d);
        const I0 = s.b * pulse(s, d, t) * soft * k;
        for (let x = Math.floor(xc - hw); x <= Math.ceil(xc + hw); x++) {
          const v = (x + 0.5 - xc) / hw, i = x + 96;
          if (i < 0 || i >= 192 || Math.abs(v) >= 1) continue;
          row[i] += I0 * Math.pow(1 - v * v, 1.3);
          any = true;
        }
        const ci = Math.round(xc - 0.5) + 96;
        if (ci >= 0 && ci < 192) core[ci] = Math.max(core[ci], Math.min(255, I0 * 200));
      }
      if (!any) continue;
      for (let i = 0; i < 192; i++) {
        const I = row[i];
        if (I < 0.02) continue;
        const x = i - 96;
        p.blend(x, y, C[6], Math.min(0.6, I * 0.38));
        p.light(x, y, C[4], Math.min(0.9, I * 0.32));

        if (core[i]) p.dot(x, y, core[i] > 150 ? WHITE : C[6], Math.min(1, core[i] / 180));
      }
    }

    if (t > HIT - 0.05) p.glow(0, PY - 3, 20, C[5], 0.5 * k);
  }

  function sun(p) {
    const r = 15 * ease.outBack(seg(t, 0.02, 0.45), 1.8) * (1 - ease.inBack(seg(t, SHUT, LIFT + 0.1), 1.5));
    if (r > 0.5) {
      const spin = t * 0.6;
      p.glow(0, SUN, Math.min(32, r * 3), C[4], 0.5);
      p.glow(0, SUN, r * 1.4, WHITE, 0.35);
      p.circle(0, SUN, r * 0.45, WHITE);
      oval(p, 0, SUN, r * 0.62, r * 0.62, C[6], 1);
      oval(p, 0, SUN, r, r, (g) => (Math.sin(g * 6 + spin * 4) > 0.5 ? WHITE : C[5]), 1);
      for (let j = 0; j < 16; j++) {
        const g = spin + (j * TAU) / 16, l = j % 2 ? 3 : 6;
        p.line(Math.cos(g) * (r + 2), SUN + Math.sin(g) * (r + 2), Math.cos(g) * (r + 2 + l), SUN + Math.sin(g) * (r + 2 + l), (u) => (u < 0.4 ? C[6] : C[4]), (u) => 1.1 - u);
      }
    }
    if (t > LIFT && t < LIFT + 0.3) sparkle(p, 0, SUN, 10 * (1 - (t - LIFT) / 0.3), WHITE, C[5], 0.6);
  }

  function sigil(p, back) {
    if (t < HIT) return;
    const u = seg(t, HIT, HIT + 0.2), heat = 1 - smooth(SHUT, SHUT + 0.8, t), out = 1 - smooth(SHUT + 0.4, SHUT + 1, t);
    if (out <= 0) return;
    const keep = back ? (g) => Math.sin(g) < 0 : (g) => Math.sin(g) >= 0;

    const burnt = (g) => Math.abs(((g - Math.PI / 2 + Math.PI) % TAU + TAU) % TAU - Math.PI) <= u * Math.PI + 0.01;
    const col = (g, hot) => {
      if (!burnt(g)) return 0;
      const flick = rand(Math.round(g * 40), Math.floor(t * 20)) < 0.18;
      return t < HIT + 0.08 || (flick && heat > 0.4) ? WHITE : heat > 0.6 ? (hot ? C[6] : C[5]) : heat > 0.3 ? C[4] : heat > 0.1 ? C[3] : C[2];
    };
    oval(p, 0, 0, RX, RX * SY, (g) => col(g, true), out, (g) => keep(g) && burnt(g));
    oval(p, 0, 0, RX * 0.72, RX * 0.72 * SY, (g) => col(g, false), out, (g) => keep(g) && burnt(g));

    for (let j = 0; j < 12; j++) {
      const g = t * 0.35 + (j * TAU) / 12;
      if (!keep(g) || !burnt(g)) continue;
      const c = col(g, j % 2 === 0), r0 = RX * 0.78, r1 = RX * (j % 3 === 0 ? 0.95 : 0.88);
      if (c) p.line(Math.cos(g) * r0, Math.sin(g) * r0 * SY, Math.cos(g) * r1, Math.sin(g) * r1 * SY, c, out);
    }
    if (!back) {
      for (let i = -2; i <= 2; i++) p.glow(i * RX * 0.45, -2, 16, C[4], (0.34 - Math.abs(i) * 0.05) * out * (0.5 + 0.5 * heat));
      p.glow(0, -1, 10, WHITE, 0.3 * heat * out);
    }
  }
  return {
    update(dt) {
      t += dt;

      if (t < OPEN + 0.1 && R.chance(0.5)) {
        const a = R.range(0, TAU), D = R.range(22, 34), x = Math.cos(a) * D, y = SUN + Math.sin(a) * D, T = R.range(0.18, 0.28), v = ((D - 10) * 3) / (Math.exp(3 * T) - 1);
        ps.spawn(P.STREAK, x, y, (-x / D) * v, ((SUN - y) / D) * v, T, R.chance(0.5) ? C[6] : C[5]);
      }
      if (!hit && t >= HIT) {
        hit = true;
        lights.add(0, -30, 64, C[5], 0.85, 0.5);
        lights.add(0, -6, 30, WHITE, 0.8, 0.12);
        for (let i = 0; i < 26; i++) {
          const a = -Math.PI / 2 + R.range(-1.2, 1.2), sp = R.range(70, 190);
          ps.spawn(P.SPARK, R.range(-3, 3), -2, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.25, 0.6));
        }
      }

      if (t > HIT && t < SHUT + 0.1 && R.chance(0.35)) {
        const g = R.range(0, TAU), r = RX * (R.chance(0.5) ? 1 : 0.72);
        ps.spawn(P.EMBER, Math.cos(g) * r, Math.sin(g) * r * SY - 1, R.range(-6, 6), -R.range(12, 30), R.range(0.5, 0.8), C[5], 1, 0, Math.sin(g) < 0 ? 4 : 0);
      }
      if (t > HIT && t < FOLD && R.chance(0.05)) ps.spawn(P.STAR, R.range(-1, 1) * 40, -R.range(20, 160), 0, R.range(2, 8), R.range(0.3, 0.6), R.chance(0.5) ? WHITE : C[6], R.range(0.8, 1.8));

      if (!shut && t >= SHUT) {
        shut = true;
        lights.add(0, -60, 70, C[5], 0.7, 0.35);
        for (let i = 0; i < 12; i++) ps.spawn(P.STAR, R.range(-4, 4), -R.range(10, 170), R.range(-25, 25), R.range(-10, 10), R.range(0.4, 0.8), R.chance(0.5) ? WHITE : C[6], R.range(0.8, 2));
      }
      if (!glinted && t >= LIFT) {
        glinted = true;
        lights.add(0, SUN, 40, WHITE, 0.6, 0.2);
      }
      ps.update(dt);
      feathers.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      fan(p);
      sigil(p, true);
      feathers.draw(p, WING, "back");
      ps.draw(p, "back");
    },
    draw(p) {
      sigil(p, false);

      for (const m of motes) {
        const y = TOP + ((((m.y * DMAX + t * m.v) % DMAX) + DMAX) % DMAX), x = m.x + Math.sin(t * m.f + m.ph) * m.amp, I = lightAt(x, y);
        if (I < 0.2) continue;
        p.dot(x, y, I > 0.7 ? WHITE : C[6], Math.min(1, I * 1.3));
        p.light(x, y, C[5], 0.4 * Math.min(1, I));
      }
      sun(p);
      if (t > HIT - 0.02 && t < HIT + 0.25) sparkle(p, 0, PY - 2, 12 * (1 - (t - HIT) / 0.25), WHITE, C[5], 0.7);
      if (t > SHUT && t < SHUT + 0.2) sparkle(p, 0, PY - 2, 8 * (1 - (t - SHUT) / 0.2), WHITE, C[5], 0.5);
      feathers.draw(p, WING, "front");
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __irsmqig=__r(1);const Particles=__irsmqig.Particles;const Bits=__irsmqig.Bits;const Lights=__irsmqig.Lights;const P=__irsmqig.P;const PF=__irsmqig.PF;const B=__irsmqig.B;const Rng=__irsmqig.Rng;const fit=__irsmqig.fit;const sparkle=__irsmqig.sparkle;const band=__irsmqig.band;const bolt=__irsmqig.bolt;const clamp=__irsmqig.clamp;const smooth=__irsmqig.smooth;const seg=__irsmqig.seg;const lerp=__irsmqig.lerp;const ease=__irsmqig.ease;const TAU=__irsmqig.TAU;const WHITE=__irsmqig.WHITE;const hex=__irsmqig.hex;const mix=__irsmqig.mix;const scale=__irsmqig.scale;
const __ijjps3u=__r(29);const GOLD=__ijjps3u.GOLD;const oval=__ijjps3u.oval;
const meta = {
  name: "Smite",
  desc: "A glint marks the spot, then a bolt of light drops like a hammer: a white flash, a shockwave over the floor, stone chips flying and cracks that glow and cool.",
  tags: ["holy", "smite", "strike", "impact", "light", "ground", "one-shot"],
  size: [224, 176],
  origin: [112, 148],
  duration: 2.8,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: GOLD, stone: "#5a5066", seed: 9 },
};
const TOP = -148, SY = 0.38, MARK = 0.42, HIT = 0.54, LEN = 44;
const OUTLINE = hex("#1a1422");

function chip(p, b, st) {
  const r = 0.6 + b.s * 0.7, fade = Math.min(1, b.life / 0.5), lx = Math.cos(b.a) * r * 0.4, ly = Math.sin(b.a) * r * 0.4;
  p.shade(b.x - r - 1, b.y - r - 1, b.x + r + 1, b.y + r + 1, (x, y, out) => {
    const dx = x - b.x, dy = y - b.y, d = Math.hypot(dx * 1.2, dy);
    if (d > r + 0.9) return;
    const lit = dx * lx + dy * ly;
    out.c = d > r ? OUTLINE : lit < -0.3 ? st[3] : lit > 0.5 ? st[1] : st[2];
    out.a = fade;
  });
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), s0 = hex(o.stone);
  const st = [scale(s0, 0.5), scale(s0, 0.75), s0, mix(scale(s0, 1.4), WHITE, 0.1)], dust = mix(s0, hex("#8a8094"), 0.4);
  const ps = new Particles({ rng: R, ground: () => 0, sparks: [WHITE, C[6], C[5], C[3]] });
  const chips = new Bits({ ground: () => 0 }), lights = new Lights();

  const cracks = Array.from({ length: 7 }, (_, i) => {
    const a = 0.12 + (i / 6) * (Math.PI - 0.24) + R.range(-0.12, 0.12), L = R.range(30, 54) * (Math.abs(Math.sin(a)) > 0.7 ? 0.6 : 1);
    const pts = bolt(R, 0, 0, Math.cos(a) * L, Math.sin(a) * L, { jag: 0.28, depth: 4 }).map(([x, z]) => [x, z * SY]);
    const fork = pts.length > 6 ? bolt(R, ...pts[Math.floor(pts.length * 0.5)], pts[Math.floor(pts.length * 0.5)][0] + Math.cos(a + R.sign() * 0.7) * L * 0.35, pts[Math.floor(pts.length * 0.5)][1] + Math.sin(a + R.sign() * 0.7) * L * 0.35 * SY, { jag: 0.3, depth: 3 }) : null;
    return { pts, fork, L, cool: R.range(1.6, 2.1) };
  });
  let t = 0, hit = false;

  const tipY = (tt) => lerp(TOP - 6, 0, ease.inCubic(seg(tt, MARK, HIT)));
  function hammer(p) {
    if (t < MARK || t >= HIT + 0.06) return;
    const y1 = t >= HIT ? 0 : tipY(t), y0 = Math.max(TOP + 5, y1 - LEN * (t >= HIT ? 1 - (t - HIT) / 0.06 : 1)), white = t >= HIT;
    if (y1 < TOP + 12) return;

    for (const [dx, k] of [[-5, 0.6], [-2, 0.9], [2, 0.8], [5, 0.5]]) if (y0 > TOP + 2) p.line(dx, Math.max(TOP, y0 - 70), dx, y0, (u) => (u > 0.7 ? C[6] : C[4]), (u) => u * k);
    if (y1 - 3 > y0) p.beam(0, y0, 0, y1 - 3, 9, (u, v) => (white || v < 0.35 ? WHITE : v < 0.7 ? C[6] : C[5]));

    p.beam(0, y1 - 6, 0, y1 - 1, 13, (u, v) => (v < 0.6 || white ? WHITE : C[6]));
    p.glowLine(0, y0 + 10, 0, y1, 16, C[5], 0.6);
    p.glow(0, y1 - 4, Math.min(22, y1 - TOP - 6), WHITE, 0.5);
  }
  function crack(p) {
    if (t < HIT) return;
    const grow = ease.outCubic(seg(t, HIT, HIT + 0.1));
    for (const c of cracks) {
      for (const path of c.fork ? [c.pts, c.fork] : [c.pts]) {
        const n = Math.max(1, Math.round((path.length - 1) * grow));
        for (let i = 0; i < n; i++) {
          const [x0, y0] = path[i], [x1, y1] = path[i + 1], d = Math.hypot(x0, y0 / SY) / c.L, heat = clamp(1 - (t - HIT) / c.cool - d * 0.5);
          if (heat <= 0) continue;
          const col = heat > 0.85 ? WHITE : heat > 0.65 ? C[6] : heat > 0.45 ? C[5] : heat > 0.3 ? C[4] : heat > 0.18 ? C[3] : C[2];
          p.line(x0, y0, x1, y1, col, heat < 0.12 ? heat / 0.12 : 1);

          if (d < 0.45 && path === c.pts) p.line(x0, y0 + 1, x1, y1 + 1, heat > 0.5 ? C[4] : C[2], heat < 0.12 ? heat / 0.12 : 1);
          if (i % 2 === 0) p.glow(x0, y0, 10, C[4], 0.45 * heat);
        }
      }
    }

    const h = clamp(1 - (t - HIT) / 1.6);
    if (h > 0) {
      oval(p, 0, 0, 5, 1.6, h > 0.6 ? WHITE : h > 0.3 ? C[5] : C[3], Math.min(1, h * 3));
      p.glow(0, 0, 18, C[4], 0.45 * h);
    }
  }
  return {
    update(dt) {
      t += dt;
      if (t < MARK && R.chance(0.25)) ps.spawn(P.STAR, R.range(-10, 10), -R.range(0, 18), 0, -R.range(4, 12), R.range(0.2, 0.4), R.chance(0.5) ? WHITE : C[6], R.range(0.5, 1.2));

      if (t > MARK && t < HIT && tipY(t) > TOP + 50 && R.chance(0.6)) ps.spawn(P.MOTE, R.sign() * R.range(4, 7), tipY(t) - R.range(4, 30), R.range(-20, 20), -R.range(10, 40), R.range(0.15, 0.3), C[6], 0.7);
      if (!hit && t >= HIT) {
        hit = true;
        lights.add(0, -24, 92, C[5], 1, 0.6);
        lights.add(0, -8, 40, WHITE, 0.9, 0.12);
        for (let i = 0; i < 60; i++) {
          const a = -Math.PI / 2 + R.range(-1.25, 1.25), sp = R.range(110, 280);
          ps.spawn(P.SPARK, R.range(-3, 3), -2, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.25, 0.75));
        }
        for (let i = 0; i < 16; i++) {
          const a = -Math.PI / 2 + R.range(-1, 1), sp = R.range(60, 160);
          ps.spawn(P.STAR, R.range(-4, 4), -4, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.4, 0.9), R.chance(0.5) ? WHITE : C[6], R.range(0.8, 2.4));
        }
        for (let i = 0; i < 14; i++) {
          const a = -Math.PI / 2 + R.range(-1.2, 1.2), sp = R.range(90, 230);
          chips.add({ kind: B.CHUNK, x: R.range(-5, 5), y: -2, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 1, drag: 0.4, bounce: 0.35, life: R.range(1.2, 1.8), a: R.range(0, TAU), va: R.range(-14, 14), s: R.int(1, 3) });
        }
        for (let i = 0; i < 34; i++) {
          const a = -Math.PI / 2 + R.range(-1, 1), sp = R.range(60, 220);
          ps.spawn(P.GRIT, R.range(-4, 4), -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.9, 1.5), R.pick(st.slice(1)), R.chance(0.4) ? 2 : 1);
        }

        for (let i = 0; i < 9; i++) {
          const s = R.sign();
          ps.spawn(P.SMOKE, s * R.range(2, 10), -R.range(1, 4), s * R.range(50, 130), -R.range(2, 12), R.range(0.7, 1.2), mix(dust, C[4], 0.18), R.range(3.5, 6), R.range(0, 0.06), PF.BIG);
        }
        for (let i = 0; i < 4; i++) ps.spawn(P.SMOKE, R.range(-4, 4), -R.range(2, 8), R.range(-8, 8), -R.range(20, 45), R.range(1.2, 1.8), mix(dust, C[5], 0.25), R.range(4, 6), R.range(0.05, 0.3));
      }

      if (t > HIT && t < HIT + 1.3 && R.chance(0.5)) {
        const c = R.pick(cracks), q = R.pick(c.pts);
        if (R.chance(0.75)) ps.spawn(P.EMBER, q[0], q[1] - 1, R.range(-8, 8), -R.range(15, 35), R.range(0.5, 0.9), C[5]);
        else ps.spawn(P.STAR, q[0], q[1] - 2, 0, -R.range(4, 12), R.range(0.3, 0.6), R.chance(0.5) ? WHITE : C[6], R.range(0.8, 1.8));
      }
      chips.update(dt);
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      crack(p);
      ps.draw(p, "back");
      const k = seg(t, HIT, HIT + 0.42);
      if (t >= HIT && k < 1) band(p, 0, 0, 6 + 84 * ease.outCubic(k), SY * 0.8, Math.max(1, 5 * (1 - k)), 1.15 - k, C.slice(3), (g) => Math.sin(g) < 0, k < 0.12);
    },
    draw(p) {

      if (t < HIT) {
        const u = seg(t, 0, MARK), k = smooth(0, 0.08, t), spin = t * 3, rr = lerp(26, 8, ease.inOutCubic(u));
        oval(p, 0, 0, rr, rr * SY, (g) => (Math.sin(g * 4 + spin) > 0 ? WHITE : C[5]), k * (0.65 + 0.35 * Math.sin(t * 40)));
        oval(p, 0, 1, rr, rr * SY, C[3], k * 0.6, (g) => Math.sin(g) > 0);
        const L = (3 + 8 * ease.outBack(clamp(t / 0.2), 2)) * (t > MARK ? 1 + 0.6 * seg(t, MARK, HIT) : 1);
        for (let i = 0; i < 4; i++) {
          const a = spin * 0.3 + (i * Math.PI) / 2, len = i % 2 ? L * 0.6 : L;
          p.line(0, -2, Math.cos(a) * len, -2 + Math.sin(a) * len, (v) => (v < 0.4 ? WHITE : C[5]), (v) => 1.2 - v);
        }
        p.px(0, -2, WHITE);
        p.glow(0, -2, 14 + 10 * u, C[5], 0.5 * k);
        p.glowLine(0, TOP + 6, 0, -2, 5, C[4], 0.12 * u);
      }
      hammer(p);

      const ai = seg(t, HIT + 0.04, HIT + 0.55);
      if (t > HIT + 0.04 && ai < 1) {
        const w = 1 + 4 * Math.pow(1 - ai, 2);
        p.beam(0, TOP + 4, 0, -4, w, (u, v) => (v < 0.5 ? WHITE : C[5]), (u) => (0.3 + 0.7 * u) * (1 - ai * 0.5));
        p.glowLine(0, TOP + 16, 0, -6, 10, C[5], 0.4 * (1 - ai));
      }
      const k = seg(t, HIT, HIT + 0.42);
      if (t >= HIT && k < 1) band(p, 0, 0, 6 + 84 * ease.outCubic(k), SY * 0.8, Math.max(1, 5 * (1 - k)), 1.15 - k, C.slice(3), (g) => Math.sin(g) >= 0, k < 0.12);

      const d = seg(t, HIT, HIT + 0.28);
      if (t >= HIT && d < 1) {
        const r = 8 + 40 * ease.outCubic(d);
        p.arc(0, 0, r, Math.max(1, 3 * (1 - d)), Math.PI, TAU, (u, v) => (d < 0.2 || v > 0.6 ? WHITE : C[5]), 1.1 - d);
        for (let g = Math.PI * 1.1; g < TAU - 0.2; g += 0.5) p.glow(Math.cos(g) * r, Math.sin(g) * r, 8, C[5], 0.3 * (1 - d));
      }

      if (t >= HIT && t < HIT + 0.07) {
        p.circle(0, -6, 16, WHITE);
        p.circle(0, -6, 19, C[6], 0.6);
      }
      for (const b of chips.list) chip(p, b, st);
      ps.draw(p, "front");
      if (t >= HIT && t < HIT + 0.25) sparkle(p, 0, -8, 16 * (1 - (t - HIT) / 0.25), WHITE, C[5], 0.7);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __iamjns6=__r(1);const Particles=__iamjns6.Particles;const Bits=__iamjns6.Bits;const Lights=__iamjns6.Lights;const Blazes=__iamjns6.Blazes;const P=__iamjns6.P;const PF=__iamjns6.PF;const B=__iamjns6.B;const Rng=__iamjns6.Rng;const fit=__iamjns6.fit;const band=__iamjns6.band;const flare=__iamjns6.flare;const clamp=__iamjns6.clamp;const smooth=__iamjns6.smooth;const ease=__iamjns6.ease;const noise=__iamjns6.noise;const rand=__iamjns6.rand;const TAU=__iamjns6.TAU;const WHITE=__iamjns6.WHITE;const hex=__iamjns6.hex;const mix=__iamjns6.mix;const scale=__iamjns6.scale;const rgb=__iamjns6.rgb;
const __ievw9v8=__r(26);const hotFirst=__ievw9v8.hotFirst;const flameBlade=__ievw9v8.flameBlade;const simDraw=__ievw9v8.simDraw;const floorLight=__ievw9v8.floorLight;const LAYERS=__ievw9v8.LAYERS;
const meta = {
  name: "Meteor",
  desc: "A burning rock streaks in from the upper left in a comet of fire and smashes into the floor: a white flash, a fireball, rocks and brands thrown, a glowing crater that cools.",
  tags: ["fire", "meteor", "impact", "explosion", "spell", "debris", "one-shot"],
  size: [272, 232],
  origin: [150, 208],
  duration: 5,
  loop: false,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#4a1712", "#8a1f17", "#c9281f", "#f2561d", "#ff8a2a", "#ffc23d", "#ffe26b", "#fff3a6", "#ffffff"],
    stone: "#4a3f69",
    rock: ["#120e16", "#2a2230", "#463a4a", "#6a5a66"],
    seed: 9,
  },
};
const HIT = 0.62, FROM = [-112, -142], SOOT = hex("#0d0a12"), SOOT2 = hex("#17121d"), OUTLINE = hex("#1a1422"), WARM = rgb(255, 176, 96);
function stone(c) {
  c = hex(c);
  return { light: mix(scale(c, 1.35), WHITE, 0.08), body: c, shade: scale(c, 0.64), dust: mix(scale(c, 1.2), rgb(150, 140, 150), 0.3) };
}
function rock(p, b, st) {
  const r = 0.6 + b.s * 0.75, fade = Math.min(1, b.life / 0.5), lx = Math.cos(b.a) * r * 0.4, ly = Math.sin(b.a) * r * 0.4;
  p.shade(b.x - r - 1, b.y - r - 1, b.x + r + 1, b.y + r + 1, (x, y, out) => {
    const dx = x - b.x, dy = y - b.y, d = Math.hypot(dx * 1.15, dy);
    if (d > r + 0.9) return;
    const lit = dx * lx + dy * ly;
    out.c = d > r ? OUTLINE : lit < -0.4 ? st.light : lit > 0.6 ? st.shade : st.body;
    out.a = fade;
  });
}
function create(o) {
  const F = fit(o.palette, 9), H = hotFirst(F), RK = fit(o.rock, 4), st = stone(o.stone), R = new Rng(o.seed), floor = () => 0, S = o.seed * 11;
  let blazes;
  const ps = new Particles({ rng: R, ground: floor, sparks: [H[1], H[2], H[4], H[5]], onLand: (x, y) => blazes.add(x, y - 0.25, R.range(0.9, 1.6), R.range(0.5, 0.85)) });
  blazes = new Blazes(ps);
  const bits = new Bits({ ground: floor }), lights = new Lights(), GLOW = mix(mix(H[3], H[4], 0.5), WHITE, 0.25);
  const len = Math.hypot(FROM[0], FROM[1]), ux = -FROM[0] / len, uy = -FROM[1] / len;

  const pos = (tt) => {
    const k = ease.inQuad(clamp(tt / HIT)) * 0.35 + clamp(tt / HIT) * 0.65;
    return [FROM[0] * (1 - k), FROM[1] * (1 - k)];
  };
  let t = 0, hit = false, last = pos(0);

  const meteor = (p, x, y, R0, cool, alpha = 1) => {
    p.shade(x - R0 - 2, y - R0 - 2, x + R0 + 2, y + R0 + 2, (px, py, out) => {
      out.a = alpha;
      const dx = px - x, dy = py - y, d = Math.hypot(dx, dy), a = Math.atan2(dy, dx), rr = R0 * (1 + 0.18 * noise(a * 2.2 + 3, S) + 0.1 * noise(a * 5, S + 1));
      if (d > rr + 1) return;
      if (d > rr) return OUTLINE;
      const face = (dx * ux + dy * uy) / Math.max(1, d), heat = (1 - cool) * (face * 0.6 + 0.5 - (d / rr) * 0.25);
      if (heat > 0.62) return heat > 0.85 ? H[0] : heat > 0.74 ? H[1] : H[2];
      if (heat > 0.42) return H[4];
      const h = rand(Math.floor(px - x), Math.floor(py - y), S + 3);
      if (h < 0.22 * (1 - cool * 0.7)) return (1 - cool) > 0.5 ? H[4] : H[6];
      return dx * -0.6 + dy * -0.8 > 0 ? RK[2] : d / rr > 0.6 ? RK[0] : RK[1];
    });
  };

  const crater = (p) => {
    if (t < HIT) return;
    const a = t - HIT, end = 1 - smooth(meta.duration - 1, meta.duration - 0.15, t), rx = 36 * Math.min(1, a / 0.08), ry = 6;
    for (let y = -1; y <= 3; y++)
      for (let x = Math.floor(-rx); x <= Math.ceil(rx); x++) {
        const dx = (x + 0.5) / rx, dy = (y + 0.5) / ry, d = Math.sqrt(dx * dx + dy * dy);
        if (d > 1) continue;
        const k = rand(x * 31 + y, S + 5), T = Math.pow(clamp(1 - a / 2.6), 1.3) * (1.25 - d) - k * 0.35;
        if (T > 0.06) {
          const ramp = [H[0], H[1], H[2], H[3], H[4], H[5], H[6], H[7], H[8]], c = ramp[Math.min(8, Math.floor((1 - Math.min(1, T)) * 8))];
          p.dot(x, y, c, end);
          if ((x & 3) === 0) p.glow(x + 0.5, y, 7, c, 0.2 * T * end);
        } else p.dot(x, y, d < 0.55 ? SOOT : SOOT2, (d < 0.95 - k * 0.3 ? 1 : 1 - d) * end);
      }

    for (let x = -40; x <= 40; x++) {
      const e = Math.abs(x) / 40, hh = e < 0.7 ? 0 : Math.round(2.4 * Math.sin(((e - 0.7) / 0.3) * Math.PI) * (0.6 + 0.4 * rand(x, S + 7)));
      for (let j = 0; j < hh; j++) p.dot(x, -1 - j, j === hh - 1 ? mix(st.light, H[4], 0.5 * clamp(1 - a / 2)) : st.shade, end);
      if (hh) p.dot(x, 0, OUTLINE, end);
    }
  };
  return {
    update(dt) {
      t += dt;
      if (t < HIT) {

        const [x, y] = pos(t), vx = (x - last[0]) / dt, vy = (y - last[1]) / dt;
        last = [x, y];
        for (let i = 0; i < 3; i++) {
          if (!R.chance(0.8 * dt * 60)) continue;
          ps.spawn(P.FIRE, x - ux * R.range(2, 8) + R.range(-3, 3), y - uy * R.range(2, 8) + R.range(-3, 3), vx * 0.15 + R.range(-20, 20), vy * 0.15 + R.range(-30, 10), R.range(0.3, 0.6), 0, R.range(3, 6), 0, R.chance(0.65) ? PF.SMOKES | PF.BIG : 0);
        }
        if (R.chance(0.6 * dt * 60)) ps.spawn(P.SPARK, x, y, vx * 0.35 + R.range(-80, 80), vy * 0.35 + R.range(-80, 40), R.range(0.2, 0.5));
        if (R.chance(0.3 * dt * 60)) ps.spawn(P.EMBER, x, y, vx * 0.1 + R.range(-30, 30), vy * 0.1 + R.range(-40, 0), R.range(0.8, 1.6), H[3], R.chance(0.2) ? 2 : 1);
      } else if (!hit) {
        hit = true;

        lights.add(0, -40, 100, WARM, 0.95, 0.9);
        lights.add(0, -20, 46, WHITE, 0.9, 0.12);
        for (let i = 0; i < 34; i++) {
          const a = -Math.PI / 2 + R.range(-1.3, 1.3) + 0.25, sp = R.range(50, 210);
          ps.spawn(P.FIRE, R.range(-6, 6), -R.range(2, 10), Math.cos(a) * sp, Math.sin(a) * sp * 0.75 - 30, R.range(0.5, 1.1), 0, R.range(5, 9), 0, R.chance(0.5) ? PF.SMOKES | PF.BIG : 0);
        }
        for (let i = 0; i < 9; i++) ps.spawn(P.FIRE, R.range(-6, 6), -6, R.range(-14, 14), -R.range(130, 220), R.range(0.8, 1.2), 0, R.range(6, 8.5), R.range(0, 0.12), PF.SMOKES | PF.BIG);
        for (let i = 0; i < 20; i++) {
          const a = R.range(-Math.PI, 0), d = R.range(4, 18);
          ps.spawn(P.SMOKE, Math.cos(a) * d, -R.range(6, 24), Math.cos(a) * R.range(10, 40), -R.range(30, 110), R.range(1.8, 2.8), 0, R.range(8, 12), R.range(0.15, 0.5), PF.BIG);
        }
        for (let i = 0; i < 16; i++) {
          const s = R.sign();
          ps.spawn(P.SMOKE, s * R.range(4, 18), -R.range(1, 5), s * R.range(60, 130) + 10, -R.range(2, 12), R.range(1.2, 2.0), st.dust, R.range(5, 8), R.range(0, 0.06), PF.BIG);
        }
        for (let i = 0; i < 90; i++) {
          const a = -Math.PI / 2 + R.range(-1.3, 1.3) + 0.15, sp = R.range(100, 300);
          ps.spawn(P.SPARK, 0, -4, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.2, 0.7));
        }
        for (let i = 0; i < 36; i++) {
          const a = R.range(0, TAU), sp = R.range(40, 150);
          ps.spawn(P.EMBER, Math.cos(a) * 8, -8 + Math.sin(a) * 6, Math.cos(a) * sp, Math.sin(a) * sp - 70, R.range(1.2, 2.6), H[3]);
        }
        for (let i = 0; i < 10; i++) {
          const a = -Math.PI / 2 + R.range(-1, 1.05), sp = R.range(130, 240);
          ps.spawn(P.BRAND, 0, -6, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.7, 1.3));
        }
        for (let i = 0; i < 28; i++)
          bits.add({ kind: B.CHUNK, x: R.range(-8, 8), y: -3, vx: R.range(-80, 110), vy: -R.range(140, 340), g: 1, drag: 0.4, bounce: 0.3, life: R.range(1.8, 2.8), a: R.range(0, TAU), va: R.range(-16, 16), s: R.int(1, 3), ramp: [OUTLINE, st.shade, st.body, st.light, mix(st.light, WHITE, 0.3)] });
        for (let i = 0; i < 80; i++) {
          const u = R.range(-1, 1), a = -Math.PI / 2 + u * 0.7 + 0.15, sp = R.range(90, 270) * (1 - 0.4 * Math.abs(u));
          ps.spawn(P.GRIT, u * 6, -1, Math.cos(a) * sp, Math.sin(a) * sp, R.range(1.2, 2.2), R.pick([st.light, st.body, st.body, st.shade]), R.chance(0.45) ? 2 : 1);
        }
      }
      bits.update(dt);
      for (const b of bits.list)
        if (b.rest && !b.dusted) {
          b.dusted = true;
          for (let i = 0; i < 3; i++) ps.spawn(P.DUST, b.x + R.range(-1.5, 1.5), -0.5, R.sign() * R.range(8, 35), -R.range(2, 18), R.range(0.3, 0.6), st.dust, R.range(1.3, 2.6));
        }
      blazes.update(dt);
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      crater(p);
      simDraw(p, ps, H, "back");
      blazes.drawBack(p);
      const k = (t - HIT) / 0.5;
      if (k > 0 && k < 1) band(p, 0, 0.5, 110 * ease.outCubic(k), 0.16, Math.max(1, 5 * (1 - k)), 1.15 - k, [st.body, st.light, H[4], H[1]], (g) => Math.sin(g) < 0);
    },
    draw(p) {
      const k = (t - HIT) / 0.5;
      if (k > 0 && k < 1) band(p, 0, 0.5, 110 * ease.outCubic(k), 0.16, Math.max(1, 5 * (1 - k)), 1.15 - k, [st.body, st.light, H[4], H[1]], (g) => Math.sin(g) >= 0, k < 0.12);
      for (const b of bits.list) rock(p, b, st);
      if (t < HIT) {

        const [x, y] = pos(t), NZ = (rate, seed = 0, off = 0) => noise(t * rate + off, seed);
        floorLight(p, 0, 0.5, 30 + 40 * (t / HIT), 7, GLOW, 0.5 * (t / HIT) ** 2);
        [[36, 7, 0], [26, 7.5, -2.5], [26, 7.5, 2.5], [16, 8, 0]].forEach(([L, w, off], i) => {
          const n = (S + i) * 13;
          flameBlade(p, x - uy * off, y + ux * off, -ux, -uy, L * (0.85 + 0.25 * NZ(5, n)), w, NZ(3, n + 3) * 3, NZ, n, H, LAYERS, 0.5, 1.6);
        });
        meteor(p, x, y, 6.5, 0);
        p.glow(x, y, 46, GLOW, 0.55);
        p.glow(x, y, 12, H[1], 0.4);
      } else {

        const a = t - HIT, cool = clamp(a / 2.8), end = 1 - smooth(meta.duration - 1.1, meta.duration - 0.2, t);
        if (end > 0) {
          meteor(p, 0, 0, 5.5, cool, end);
          p.glow(0, -2, 22, GLOW, 0.4 * (1 - cool) * end);
        }
      }
      simDraw(p, ps, H, "front");

      const f = (t - HIT) / 0.08;
      if (f > 0 && f < 1) {
        p.circle(0, -6, 11 * (1 - f * 0.3) + 1.5, H[3]);
        p.circle(0, -6, 11 * (1 - f * 0.3), f < 0.5 ? H[1] : H[2]);
        p.circle(0, -6, 7 * (1 - f * 0.3), f < 0.5 ? WHITE : H[1]);
      }
      const fr = (t - HIT) / 0.24;
      if (fr > 0 && fr < 1) flare(p, 0, -6, 44 * Math.pow(1 - fr, 1.4), 1 - fr, [H[6], H[4], H[2], H[1]]);
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i3zmle5=__r(1);const Particles=__i3zmle5.Particles;const Bits=__i3zmle5.Bits;const Lights=__i3zmle5.Lights;const P=__i3zmle5.P;const B=__i3zmle5.B;const Rng=__i3zmle5.Rng;const fit=__i3zmle5.fit;const sparkle=__i3zmle5.sparkle;const band=__i3zmle5.band;const clamp=__i3zmle5.clamp;const smooth=__i3zmle5.smooth;const seg=__i3zmle5.seg;const ease=__i3zmle5.ease;const rand=__i3zmle5.rand;const TAU=__i3zmle5.TAU;const WHITE=__i3zmle5.WHITE;const GRAVITY=__i3zmle5.GRAVITY;
const __i2q4ubr=__r(34);const Panes=__i2q4ubr.Panes;const splitPoly=__i2q4ubr.splitPoly;const centroid=__i2q4ubr.centroid;const endBy=__i2q4ubr.endBy;
const meta = {
  name: "Icicle fall",
  desc: "An icicle drips and trembles, snaps off its frosted root, drops, stabs the floor and bursts into skidding shards, splinters and rolling frost.",
  tags: ["ice", "icicle", "fall", "trap", "shatter", "one-shot"],
  size: [152, 120],
  origin: [76, 100],
  duration: 2.6,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#151a3d", "#212f6b", "#2c58aa", "#3a8bd8", "#62c8f4", "#a6ecff", "#dcfbff", "#ffffff"], seed: 4 },
};
const ROOT = -80, LEN = 36, W = 12; // where it hangs, how long, how wide at the root
const DRIP = 0.16, TREMBLE = 0.3, SNAP = 0.6, FREE = SNAP + 0.04;
const FALL_T = Math.sqrt((2 * (-ROOT - LEN)) / GRAVITY), IMPACT = FREE + FALL_T;


function icicle(p, C, x, top, len, w, opts = {}) {
  const hw = (u) => (w / 2) * Math.pow(1 - u, 0.75) * (1 + 0.14 * Math.sin(u * 13 + 0.5)) * (u < 0.08 ? 1.15 : 1) + 0.3;
  const tilt = opts.tilt ?? 0, cut = opts.cut ?? 0;
  p.shade(x - w / 2 - 4, top - 1, x + w / 2 + 4 + Math.abs(tilt) * len, top + len + 1, (px, py, o) => {
    const u = (py - top) / len, cx = x + tilt * len * u + 0.7 * Math.sin(u * 6 + 1), s = px - cx;
    if (u < cut || u > 1) return;
    const h = hw(u);
    if (Math.abs(s) > h + 1) return;
    if (Math.abs(s) > h) {
      o.c = C[1];
      return;
    }
    if (opts.white) return (o.c = WHITE);
    const q = s / h, ring = Math.sin(u * 13 + 0.5) > 0.7;
    let c = u > 0.88 ? WHITE : q < -0.72 ? C[6] : q < -0.2 ? (ring ? C[7] : C[5]) : q < 0.18 ? (u < 0.72 ? C[7] : C[6]) : q > 0.8 ? C[2] : Math.abs(q - 0.45) < 0.1 && u > 0.15 && u < 0.6 ? C[5] : q < 0.6 ? C[4] : C[3];
    if (opts.glint >= 0 && q < 0.25 && Math.abs(u - opts.glint) < 0.06) c = WHITE;
    o.c = c;
  });
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), floor = () => 0;
  const ps = new Particles({ rng: R, ground: floor, sparks: [C[7], C[6], C[5], C[4]], haze: C[5] });
  const bits = new Bits({ ground: floor }), lights = new Lights();
  const splinter = (x, y, vx, n) => {
    for (let i = 0; i < n; i++) bits.add({ kind: B.SHARD, x: x + R.range(-2, 2), y: y - 1, vx: vx * 0.5 + R.range(-45, 45), vy: -R.range(30, 100), g: 0.8, drag: 0.6, bounce: 0.35, life: R.range(0.4, 0.75), a: R.range(0, TAU), va: R.range(-18, 18), s: R.range(1.2, 2.4), c: C[R.int(4, 7)] });
  };
  const panes = new Panes({
    ground: floor,
    onLand: (q, x, y, v) => {
      if (v < 100) return;
      ps.spawn(P.VAPOUR, x, y - 1, R.range(-15, 15), -R.range(2, 8), R.range(0.4, 0.6), C[6], R.range(1.4, 2.2));
      splinter(x, y, q.vx, 2);
    },
    onCrumble: (q) => splinter(q.x, 0, q.vx, 3),
  });

  const rime = [];
  for (let x = -18; x <= 18; x++) {
    const h = rand(x, o.seed, 2), d = Math.abs(x) / 18;
    rime.push({ x, h: 1 + Math.round((0.6 + h * 1.8) * (1 - d * 0.7)), stub: h < 0.3 && Math.abs(x) > 7 ? 2 + Math.round(rand(x, 5) * 5 * (1 - d * 0.5)) : 0 });
  }
  let t = 0, snapped = false, landed = false, dripped = false, y = 0;
  const top = () => ROOT + (t < FREE ? 0 : 0.5 * GRAVITY * (t - FREE) ** 2);
  return {
    update(dt) {
      t += dt;

      if (!dripped && t >= DRIP) {
        dripped = true;
        bits.add({ kind: B.DRIP, x: 0.5, y: ROOT + LEN + 1, vy: 20, g: 0.9, life: 1.2, c: C[6] });
      }

      if (t > TREMBLE && t < SNAP && R.chance(0.25)) ps.spawn(P.FLAKE, R.range(-6, 6), ROOT + R.range(0, 3), R.range(-8, 8), R.range(5, 20), R.range(0.6, 1.1), R.chance(0.5) ? WHITE : C[6], R.range(0.5, 1.1));

      if (!snapped && t >= SNAP) {
        snapped = true;
        lights.add(0, ROOT + 4, 24, WHITE, 0.6, 0.1);
        lights.add(0, ROOT + 4, 32, C[5], 0.4, 0.3);
        for (let i = 0; i < 7; i++) {
          const a = R.range(0, TAU), sp = R.range(30, 110);
          bits.add({ kind: B.SHARD, x: R.range(-4, 4), y: ROOT + 2, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 20, g: 0.8, drag: 0.8, bounce: 0.3, life: R.range(0.5, 0.9), a: R.range(0, TAU), va: R.range(-20, 20), s: R.range(1, 2), c: C[R.int(5, 7)] });
        }
        for (let i = 0; i < 3; i++) ps.spawn(P.VAPOUR, R.range(-5, 5), ROOT + 2, R.range(-25, 25), R.range(-5, 5), R.range(0.4, 0.7), C[6], R.range(1.6, 2.6));
        for (let i = 0; i < 5; i++) ps.spawn(P.FLAKE, R.range(-6, 6), ROOT + 2, R.range(-30, 30), R.range(-20, 20), R.range(0.6, 1.2), R.chance(0.5) ? WHITE : C[6], R.range(0.5, 1.3));
      }

      if (t > FREE && t < IMPACT && R.chance(0.5)) {
        const tp = top();
        ps.spawn(P.MOTE, R.range(-3, 3), tp + R.range(0, LEN * 0.6), R.range(-10, 10), R.range(-40, -10), R.range(0.2, 0.35), R.chance(0.5) ? C[6] : C[5], 0.6);
      }

      if (!landed && t >= IMPACT) {
        landed = true;
        const tp = -LEN;
        lights.add(0, -16, 46, WHITE, 0.85, 0.12);
        lights.add(0, -16, 58, C[4], 0.5, 0.5);

        let parts = [[[-W / 2, tp], [W / 2, tp], [0.5, 0]]];
        for (const v of [0.3, 0.58, 0.8]) parts = parts.flatMap((poly) => splitPoly(poly, 0, tp + LEN * v + R.range(-2, 2), R.range(-0.4, 0.4)));
        parts = parts.flatMap((poly) => (centroid(poly).area > 22 ? splitPoly(poly, centroid(poly).x, centroid(poly).y, Math.PI / 2 + R.range(-0.5, 0.5)) : [poly]));
        for (const part of parts) {
          const m = centroid(part), side = m.x < 0.5 ? -1 : 1, low = clamp(-m.y / LEN);
          panes.add({
            pts: part.map(([x, y]) => [x - m.x, y - m.y]), x: m.x, y: m.y, vx: side * R.range(30, 110) + R.range(-15, 15), vy: -R.range(70, 200) * (0.4 + low), a: 0, va: R.range(-12, 12), f: R.range(-0.7, 0.7), vf: R.range(-8, 8),
            lit: 0.75, g: 0.9, drag: 0.6, bounce: 0.35, solid: true, ridge: Math.PI / 2, brittle: 2, crumble: R.range(0.15, 0.45), life: R.range(1, 1.4),
          });
        }
        for (let i = 0; i < 52; i++) {
          const a = -Math.PI / 2 + R.range(-1.25, 1.25), sp = R.range(60, 230);
          bits.add({ kind: R.chance(0.15) ? B.CHUNK : B.SHARD, x: R.range(-3, 3), y: -R.range(1, 10), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 0.85, drag: 0.6, bounce: 0.32, life: R.range(0.6, 1.2), a: R.range(0, TAU), va: R.range(-22, 22), s: R.range(1.2, 3), c: C[R.int(4, 7)], ramp: [C[1], C[3], C[4], C[6], C[7]] });
        }
        for (let i = 0; i < 10; i++) {
          const s = R.sign();
          ps.spawn(P.VAPOUR, s * R.range(0, 8), -R.range(1, 6), s * R.range(25, 90), -R.range(2, 14), R.range(0.6, 1.1), C[6], R.range(2.2, 3.8));
        }
        for (let i = 0; i < 12; i++) ps.spawn(P.FLAKE, R.range(-6, 6), -R.range(2, 16), R.range(-70, 70), -R.range(30, 110), R.range(1, 1.5), R.chance(0.6) ? WHITE : C[6], R.range(0.5, 1.5));
        for (let i = 0; i < 6; i++) ps.spawn(P.STAR, R.range(-24, 24), -R.range(4, 34), R.range(-10, 10), -R.range(4, 14), R.range(0.4, 0.8), R.chance(0.5) ? WHITE : C[6], R.range(1, 2.2));
      }
      if (landed && t < IMPACT + 0.9 && R.chance(0.08) && bits.list.length) {
        const b = R.pick(bits.list);
        ps.spawn(P.STAR, b.x, b.y - 1, 0, -3, R.range(0.2, 0.4), R.chance(0.5) ? WHITE : C[6], R.range(0.6, 1.4));
      }
      ps.update(dt);
      bits.update(dt);
      panes.update(dt);
      lights.update(dt);
      endBy(t, meta.duration, ps, bits, panes);
    },
    drawBack(p) {

      if (t > TREMBLE && t < IMPACT + 0.05) {
        const k = t < FREE ? seg(t, TREMBLE, FREE) * 0.35 : 0.35 + 0.65 * seg(t, FREE, IMPACT), rx = 3 + 7 * k;
        for (let x = Math.floor(-rx); x <= rx; x++) {
          const f = 1 - (x / rx) ** 2;
          p.blend(x + 0.5, 0, C[0], 0.7 * k * f);
          if (Math.abs(x) < rx * 0.7) p.blend(x + 0.5, 1, C[0], 0.45 * k * f);
        }
      }

      if (t >= IMPACT) {
        const g = ease.outCubic(seg(t, IMPACT, IMPACT + 0.25)), out = 1 - smooth(IMPACT + 0.8, IMPACT + 1.5, t);
        for (let x = -26; x <= 26; x++) {
          const d = Math.abs(x + 0.5) / 26, h = rand(x, 23), a = out * clamp((g * 1.15 - d) / 0.15);
          if (a <= 0) continue;
          p.dot(x, 0, h < 0.35 || d > g - 0.12 ? WHITE : C[6], a);
          if (h < 0.4) for (let j = 1; j <= Math.round((1 + rand(x, 3) * 2.5) * (1 - d)); j++) p.dot(x + Math.sign(x) * (j > 1 ? 1 : 0), -j, j > 1 ? WHITE : C[5], a);
          for (let j = 1; j <= Math.round((2 + rand(x, 7) * 3) * (1 - d * 0.6)); j++) p.dot(x, j, j < 2 ? C[5] : C[4], a * (1.1 - j / 6));
        }
        const k = seg(t, IMPACT, IMPACT + 0.35);
        if (k < 1) band(p, 0, 0.5, 6 + 34 * ease.outCubic(k), 0.18, Math.max(1, 4 * (1 - k)), 1.1 - k, [C[3], C[4], C[5], C[6]], (a) => Math.sin(a) < 0);
      }
      ps.draw(p, "back");
    },
    draw(p) {

      const ra = 1 - smooth(meta.duration - 0.7, meta.duration - 0.2, t);
      for (const r of rime) {

        for (let j = 0; j < r.h + 1; j++) p.dot(r.x, ROOT - 1 - j, j === r.h ? WHITE : j === r.h - 1 ? C[6] : j === 0 ? C[3] : C[5], ra);
        for (let j = 0; j < r.stub; j++) p.dot(r.x, ROOT + j, j === r.stub - 1 ? WHITE : j === 0 ? C[5] : C[4], ra);
        if (r.stub > 4) p.dot(r.x + 1, ROOT, C[3], ra);
      }

      if (snapped)
        for (let x = -W / 2 + 1; x <= W / 2 - 1; x++) {
          const L = 1 + Math.round(rand(x, 77) * 2.5);
          for (let j = 0; j < L; j++) p.dot(x, ROOT + j, j === L - 1 ? (t < SNAP + 0.15 ? WHITE : C[6]) : x < 0 ? C[5] : C[3], ra);
        }
      p.glow(0, ROOT, 18, C[4], 0.3 * ra);
      if (t >= IMPACT) {
        const k = seg(t, IMPACT, IMPACT + 0.35);
        if (k < 1) band(p, 0, 0.5, 6 + 34 * ease.outCubic(k), 0.18, Math.max(1, 4 * (1 - k)), 1.1 - k, [C[3], C[4], C[5], C[6]], (a) => Math.sin(a) >= 0, k < 0.15);
        if (t < IMPACT + 0.22) sparkle(p, 0.5, -3, 10 * ease.outBack(Math.min(1, (t - IMPACT) / 0.05)) * (1 - (t - IMPACT) / 0.22), C[6], C[4], 0.7);
      }
      if (t < IMPACT) {

        const tp = top(), jx = t > TREMBLE && t < SNAP ? (Math.floor(t * 36) % 2 ? 1 : 0) * Math.round(seg(t, TREMBLE, SNAP) * 1.4 + 0.4) : 0;
        const falling = t >= FREE, sp = falling ? GRAVITY * (t - FREE) : 0;
        if (falling)
          for (const [dx, k] of [[-3, 0.7], [0.5, 1], [4, 0.6]]) {
            const L = Math.min(30, sp * 0.07) * k;
            if (L > 2) p.line(dx, tp - L, dx, tp + 3, (u) => (u > 0.75 ? C[6] : u > 0.4 ? C[4] : C[3]));
          }
        const gl = (t - 0.04) / 0.3;
        icicle(p, C, jx + 0.5, tp, LEN, W, { white: t >= IMPACT - 0.025 || (t >= SNAP && t < SNAP + 0.03), glint: gl >= 0 && gl <= 1 ? gl : -1 });
        if (snapped && t < SNAP + 0.12) p.line(-W / 2 - 1, ROOT + 1, W / 2 + 1, ROOT + 1, WHITE);
        p.glow(0.5, tp + LEN * 0.5, 20, C[4], 0.28);

        if (t < DRIP) {
          const s = seg(t, 0, DRIP);
          p.dot(0.5, ROOT + LEN + 1, C[6], s);
          if (s > 0.6) p.px(0.5, ROOT + LEN + 2, WHITE);
        }
      }
      panes.draw(p, C);
      bits.draw(p);
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"drawBack",{enumerable:true,configurable:true,get:()=>drawBack});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __i5i1vj2=__r(1);const cycle=__i5i1vj2.cycle;const fit=__i5i1vj2.fit;const clamp=__i5i1vj2.clamp;const smooth=__i5i1vj2.smooth;const TAU=__i5i1vj2.TAU;const WHITE=__i5i1vj2.WHITE;const hex=__i5i1vj2.hex;const mix=__i5i1vj2.mix;
const __ibvvnbh=__r(58);const VOID=__ibvvnbh.VOID;const halo=__ibvvnbh.halo;const unlight=__ibvvnbh.unlight;
const meta = {
  name: "Black hole",
  desc: "A tilted disk of banded rings turns round a black hole, its far side bent up over the top and under the bottom; debris spirals in, stretches and is swallowed.",
  tags: ["shadow", "black-hole", "void", "space", "gravity", "dark", "magic", "loop"],
  size: [184, 132],
  origin: [92, 124],
  duration: 4,
  loop: true,
  fps: 30,
  bg: "ground",
  options: { palette: VOID, rock: ["#120d1c", "#2e2440", "#544468", "#857399"], seed: 4 },
};


const Y = -70, RS = 13.5, E = 17.5, SI = 0.25, SI_ARCH = 0.46, TILT = -0.14, D = 4;
const CT = Math.cos(TILT), ST = Math.sin(TILT);

const BANDS = [
  { r0: 18, r1: 24, n: 5, hot: 1.35, k: 0.3 },
  { r0: 26, r1: 34, n: 3, hot: 0.92, k: 1.9 },
  { r0: 35.5, r1: 46, n: 2, hot: 0.64, k: 3.7 },
  { r0: 47.5, r1: 60, n: 1, hot: 0.42, k: 5.2 },
];
const ROUT = 60;
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);
const ICE = hex("#e4f7ff");

function disk(X, Z, t) {
  const rho = Math.sqrt(X * X + Z * Z);
  for (const b of BANDS) {
    if (rho < b.r0 || rho > b.r1) continue;
    const w = (rho - b.r0) / (b.r1 - b.r0), ph = Math.atan2(Z, X) - (TAU * b.n * t) / D;
    const streak = 0.62 + 0.22 * Math.cos(7 * ph + rho * 0.8 + b.k) + 0.16 * Math.cos(13 * ph - rho * 1.6 + b.k * 2);
    const lane = 0.72 + 0.28 * Math.cos(rho * 2.3 + b.k);
    const edge = smooth(0, 0.18, w) * (1 - smooth(0.78, 1, w));
    return { I: b.hot * streak * lane * (0.35 + 0.65 * edge), dop: -X / rho };
  }
  return null;
}


function hole(p, C, t, pulse) {
  const RAMP = [C[1], C[2], C[3], C[4], C[5], C[6], C[7], WHITE], n = RAMP.length;
  const W = ROUT + 2, H = 42;
  p.shade(-W, Y - H, W, Y + H, (x, y, out) => {
    const dx = x, dy = y - Y, u = dx * CT + dy * ST, v = -dx * ST + dy * CT, r = Math.sqrt(u * u + v * v);
    let s = null;
    if (v > 0) s = disk(u, -v / SI, t);
    if (!s && r > RS) {
      const k = 1 - (E * E) / (r * r), bu = u * k, bv = v * k, si = k > 0 ? SI_ARCH : SI;
      if (-bv / si > 0) s = disk(bu, -bv / si, t);
    }
    if (!s || s.I < 0.06) {
      if (r < RS - 0.4) return C[0];
      if (r < RS + 0.7) {
        const a = Math.atan2(v, u), f = 0.5 + 0.5 * Math.cos(3 * a + (TAU * 2 * t) / D) + pulse * 0.4;
        out.k = 0.3;
        return f > 0.55 ? WHITE : C[7];
      }
      return;
    }

    const I = s.I * 1.3 * (1 + 0.55 * s.dop) * (1 + 0.25 * pulse), f = clamp(I) * (n - 1);
    let i = Math.floor(f);
    if (f - i > BAYER[((Math.floor(y) & 3) << 2) | (Math.floor(x) & 3)]) i = Math.min(n - 1, i + 1);
    if (i === 0 && I < 0.12) return;
    let c = RAMP[i];
    if (s.dop > 0.35 && i >= n - 3) c = mix(c, ICE, Math.min(1, (s.dop - 0.35) * 2));
    if (s.dop < -0.4 && i >= 2 && i < n - 2) c = mix(c, C[3], 0.35);
    if (i >= n - 4 && ((Math.floor(x) + Math.floor(y)) & 1) === 0) out.k = 0.3 * Math.min(1, I - 0.35);
    return c;
  });
}
function drawBack(p, t, o) {
  const C = fit(o.palette, 8);
  p.glow(0, -1, 44, C[4], 0.12);
  p.glow(0, Y, 80, C[4], 0.32);
  p.glow(0, Y, 46, mix(C[6], C[5], 0.5), 0.45);
}
function draw(p, t, o) {
  const C = fit(o.palette, 8), K = fit(o.rock, 4), S = o.seed;

  const pulse = Math.max(0, Math.cos((TAU * 2 * t) / D)) ** 12;

  cycle(t, D, 10, S + 3, (r) => r.range(1.6, 2.6), (age, L, r) => {
    const x0 = r.range(-60, 60), u = Math.pow(age / L, 1.5), tx = Math.sign(x0 || 1) * r.range(40, 56), ty = Y + r.range(4, 9);
    const x = x0 + (tx - x0) * u, y = -1 + (ty + 1) * u - Math.sin(Math.PI * u) * 10;
    p.px(x, y, u > 0.6 ? K[3] : K[2]);
    if (age < 0.25) p.disc(x0, -1.5, 2 + age * 8, K[2], 0.4 * (1 - age / 0.25));
  });
  hole(p, C, t, pulse);

  cycle(t, D, 40, S + 7, (r) => r.range(0.5, 0.9), (age, L, r) => {
    const a0 = r.range(0, TAU), d0 = r.range(48, 76), q = Math.pow(age / L, 1.6), d = RS + 2 + (d0 - RS - 2) * (1 - q), a = a0 + 0.9 * q;
    const x = Math.cos(a) * d * 1.15, y = Y + Math.sin(a) * d * 0.75, q2 = Math.pow(Math.max(0, age - 0.09) / L, 1.6), d2 = RS + 2 + (d0 - RS - 2) * (1 - q2), a2 = a0 + 0.9 * q2;
    if (d < RS + 3 || y > -3 || y < -120 || Y + Math.sin(a2) * d2 * 0.75 < -120 || Math.abs(x) > 90) return;
    const col = r.pick([WHITE, C[7], C[6], C[5]]);
    p.line(Math.cos(a2) * d2 * 1.15, Y + Math.sin(a2) * d2 * 0.75, x, y, (u) => (u > 0.6 ? col : C[4]), Math.min(1, age * 6));
    p.glow(x, y, 3, col, 0.3);
  });


  cycle(t, D, 22, S, (r) => r.range(1.4, 2.4), (age, L, r) => {
    const ph0 = r.range(0, TAU), rho0 = r.range(58, 80), hgt = r.range(-8, 8), size = r.range(1.6, 2.8);
    const at = (aa) => {
      const q = clamp(aa / L), rho = RS + 1 + (rho0 - RS - 1) * (1 - Math.pow(q, 1.5)), ph = ph0 + 2.4 * Math.pow(q, 1.6) * (1 + 1.5 * q);
      const X = Math.cos(ph) * rho, Z = Math.sin(ph) * rho, sx = X, sy = -Z * SI + hgt * (1 - q);
      return { x: sx * CT - sy * ST, y: Y + sx * ST + sy * CT, Z, rho };
    };
    const a = at(age), b = at(age - 0.04), hidden = a.Z > 0 && Math.hypot(a.x, a.y - Y) < RS + 1;
    if (hidden) return;
    if (a.rho < RS + 3) {
      p.px(a.x, a.y, WHITE);
      p.glow(a.x, a.y, 6, C[6], 0.6);
      return;
    }
    const heat = 1 - smooth(16, 34, a.rho), len = 1 + heat * 7;
    if (heat > 0.05) {
      const dx = a.x - b.x, dy = a.y - b.y, l = Math.hypot(dx, dy) || 1;
      p.line(a.x - (dx / l) * len, a.y - (dy / l) * len, a.x, a.y, (u) => (u > 0.7 ? WHITE : u > 0.35 ? C[6] : C[4]));
      p.glow(a.x, a.y, 4, C[6], 0.4 * heat);
    } else {
      const lx = -a.x / (Math.hypot(a.x, a.y - Y) || 1), ly = -(a.y - Y) / (Math.hypot(a.x, a.y - Y) || 1);

      const c = at(age - 0.09), d = at(age - 0.15);
      p.px(b.x, b.y, C[3]);
      p.dot(c.x, c.y, C[3], 0.7);
      p.dot(d.x, d.y, C[2], 0.5);
      const s2 = size > 2.2;
      p.px(a.x, a.y, K[2]);
      p.px(a.x + 1, a.y, K[1]);
      p.px(a.x, a.y + 1, K[1]);
      if (s2) (p.px(a.x + 1, a.y + 1, K[0]), p.px(a.x - 1, a.y, K[1]), p.px(a.x, a.y - 1, K[2]));
      p.px(a.x + Math.round(lx * 1.4), a.y + Math.round(ly * 1.4), s2 ? C[6] : C[5]);
      p.glow(a.x, a.y, 4, C[5], 0.15);
    }
  });
  halo(p, 0, Y, RS - 0.4, RS + 4, C[6], 0.35 + 0.3 * pulse);
  unlight(p, -RS, Y - RS, RS, Y + RS, (x, y) => {
    const dx = x, dy = y - Y, v = -dx * ST + dy * CT, u = dx * CT + dy * ST;
    return u * u + v * v < (RS - 0.6) ** 2 && !(v > 0 && disk(u, -v / SI, t));
  });
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __iczyya7=__r(1);const Particles=__iczyya7.Particles;const Bits=__iczyya7.Bits;const Lights=__iczyya7.Lights;const P=__iczyya7.P;const B=__iczyya7.B;const Rng=__iczyya7.Rng;const PAL=__iczyya7.PAL;const fit=__iczyya7.fit;const flare=__iczyya7.flare;const clamp=__iczyya7.clamp;const smooth=__iczyya7.smooth;const ease=__iczyya7.ease;const luma=__iczyya7.luma;const rgb=__iczyya7.rgb;const TAU=__iczyya7.TAU;const WHITE=__iczyya7.WHITE;
const CY = -42, RC = 26, OPEN = 0.3, FREEZE = 1.75, CRACK = 2.2, SHATTER = 2.42;

const TICKS = [0.36, 0.46, 0.57, 0.7, 0.85, 1.03, 1.24, 1.49];
const meta = {
  name: "Time stop",
  desc: "A clock face springs open, ticks slower and slower, freezes drained of colour, cracks, then shatters into falling shards.",
  tags: ["arcane", "time", "clock", "freeze", "stop", "shatter", "magic", "one-shot"],
  size: [196, 136],
  origin: [98, 118],
  duration: 3.6,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: PAL.arcane, seed: 14 },
};

function hand(t) {
  let a = 0;
  for (const tk of TICKS) if (t > tk) a += ease.outBack(clamp((t - tk) / 0.07), 3);
  return -Math.PI / 2 + a * (TAU / 12);
}

const flow = (t) => (t < OPEN ? 1 : Math.max(0, 1 - (t - OPEN) / (FREEZE - OPEN)) ** 1.6);

function clockTime(t) {
  let s = 0;
  for (let u = 0; u < Math.min(t, FREEZE); u += 1 / 120) s += flow(u) / 120;
  return s;
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed);

  const G = C.map((c) => {
    const l = luma(c) * 255;
    return rgb(l * 0.92, l * 0.96, Math.min(255, l * 1.06));
  });
  const ps = new Particles({ rng: R, ground: () => 0, sparks: [WHITE, C[6], C[5], C[4]] }), bits = new Bits({ ground: () => 0 }), lights = new Lights();
  const motes = Array.from({ length: 14 }, (_, i) => ({ a: R.range(0, TAU), r: RC + R.range(5, 14), w: R.range(1.4, 2.6) * (i % 2 ? 1 : -1), tilt: R.range(-0.5, 0.5), c: R.pick([WHITE, C[6], C[5]]) }));

  const ix = R.range(-6, 6), iy = R.range(-6, 6), cracks = [];
  const walk = (x, y, a, len, depth) => {
    const pts = [[x, y]];
    for (let s = 0; s < len; s++) {
      a += R.range(-0.55, 0.55);
      x += Math.cos(a) * R.range(1.6, 2.6);
      y += Math.sin(a) * R.range(1.6, 2.6);
      if (Math.hypot(x, y) > RC - 0.5) break;
      pts.push([x, y]);
      if (depth < 1 && pts.length > 3 && R.chance(0.14)) walk(x, y, a + R.sign() * R.range(0.6, 1.1), len / 2, depth + 1);
    }
    cracks.push(pts);
  };
  for (let i = 0; i < 7; i++) walk(ix, iy, (i / 7) * TAU + R.range(-0.3, 0.3), 16, 0);
  let t = 0, tc = 0, ticked = 0, shattered = false, frozen = false;

  function face(p, K, s, cracked) {
    const cy = CY, r = RC * s;
    if (r < 1) return;
    p.disc(0, cy, r, K[1], (d) => 0.3 + 0.35 * d * d);
    p.ring(0, cy, r + 0.5, 1, K[6]);
    p.ring(0, cy, r - 1.5, 1, K[4]);
    p.ring(0, cy, r + 2, 1, K[3], 0.6);

    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * TAU;
      if (i % 5) p.dot(Math.cos(a) * (r - 3.5), cy + Math.sin(a) * (r - 3.5), K[4], 0.8);
      else {
        const q = i % 15 === 0, r0 = r - (q ? 8 : 6.5);
        p.line(Math.cos(a) * r0, cy + Math.sin(a) * r0, Math.cos(a) * (r - 3), cy + Math.sin(a) * (r - 3), q ? K[7] : K[6]);
      }
    }
    p.ring(0, cy, r * 0.3, 1, K[4], 0.8);

    const ha = -Math.PI / 2 + (hand(t) + Math.PI / 2) / 12 + 0.9, sa = hand(t) + (frozen ? Math.sin(t * 70) * 0.012 : 0);
    p.beam(0, cy, Math.cos(ha) * r * 0.48, cy + Math.sin(ha) * r * 0.48, 2.6, (u, v) => (v < 0.5 ? K[6] : K[4]));
    p.line(-Math.cos(sa) * 5, cy - Math.sin(sa) * 5, Math.cos(sa) * (r - 4), cy + Math.sin(sa) * (r - 4), (u) => (u > 0.75 ? K[7] : K[6]));
    p.line(-Math.cos(sa) * 5 + 0.5, cy - Math.sin(sa) * 5, -Math.cos(sa) * 2, cy - Math.sin(sa) * 2, K[5]);
    p.circle(0, cy, 2.2, K[5]);
    p.circle(0, cy, 1.2, K[7]);
    if (cracked > 0)
      for (const pts of cracks)
        for (let i = 0, n = Math.floor(pts.length * cracked); i < n; i++) {
          const [x, y] = pts[i], fresh = i > n - 3 && cracked < 1;
          p.px(x, cy + y, fresh ? WHITE : K[7]);
          if (!fresh) p.px(x, cy + y - 1, K[2]);
        }
  }
  return {
    update(dt) {
      t += dt;
      tc = clockTime(t);

      while (ticked < TICKS.length && t >= TICKS[ticked]) {
        ticked++;
        const a = hand(t + 0.1);
        lights.add(Math.cos(a) * (RC - 4), CY + Math.sin(a) * (RC - 4), 22, C[6], 0.6, 0.12);
        for (let i = 0; i < 3; i++) ps.spawn(P.STAR, Math.cos(a) * (RC + 1), CY + Math.sin(a) * (RC + 1), Math.cos(a) * 30 + R.range(-15, 15), Math.sin(a) * 30 + R.range(-15, 15), R.range(0.2, 0.4), R.pick([WHITE, C[6]]), R.range(0.7, 1.3));
      }
      if (!frozen && t >= FREEZE) {
        frozen = true;
        lights.add(0, CY, 70, WHITE, 0.7, 0.2);
      }
      if (!shattered && t >= SHATTER) {
        shattered = true;
        lights.add(0, CY, 80, WHITE, 0.8, 0.16);
        lights.add(0, CY, 100, C[5], 0.6, 0.6);

        for (let i = 0; i < 64; i++) {
          const a = R.range(0, TAU), d = R.range(0, RC), x = Math.cos(a) * d, y = CY + Math.sin(a) * d, sp = R.range(40, 140);
          const dx = x - ix, dy = y - CY - iy, l = Math.hypot(dx, dy) || 1;
          bits.add({ kind: B.SHARD, x, y, vx: (dx / l) * sp + R.range(-25, 25), vy: (dy / l) * sp * 0.7 - R.range(40, 120), g: 0.9, drag: 0.5, bounce: 0.25, life: R.range(0.8, 1.15), a: R.range(0, TAU), va: R.range(-22, 22), s: R.range(1.5, 3.6), c: R.pick([G[7], G[6], G[6], G[5]]) });
        }
        for (let i = 0; i < 10; i++) {
          const a = R.range(0, TAU), sp = R.range(40, 110);
          bits.add({ kind: B.CHUNK, x: Math.cos(a) * RC * 0.6, y: CY + Math.sin(a) * RC * 0.6, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp * 0.6 - R.range(60, 130), g: 1, drag: 0.4, bounce: 0.3, life: R.range(0.9, 1.15), a: R.range(0, TAU), va: R.range(-14, 14), s: R.range(1.6, 3), ramp: [G[1], G[3], G[4], G[6], G[7]] });
        }
        for (let i = 0; i < 26; i++) {
          const a = R.range(0, TAU), sp = R.range(30, 110);
          ps.spawn(i % 2 ? P.STAR : P.MOTE, 0, CY, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.4, 0.8), R.pick([WHITE, C[6], C[5]]), R.range(0.8, 1.8));
        }
        for (let i = 0; i < 18; i++) {
          const a = R.range(0, TAU), sp = R.range(90, 200);
          ps.spawn(P.SPARK, 0, CY, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.2, 0.45));
        }

        for (let i = 0; i < 12; i++) {
          const a = R.range(0, TAU), d = R.range(0, RC * 0.8);
          ps.spawn(P.VAPOUR, Math.cos(a) * d, CY + Math.sin(a) * d, Math.cos(a) * R.range(10, 40), Math.sin(a) * R.range(10, 30) - R.range(5, 20), R.range(0.6, 1), R.chance(0.5) ? G[5] : C[4], R.range(3, 6));
        }
      }
      bits.update(dt);
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      const k = smooth(0, OPEN, t) * (1 - smooth(SHATTER, SHATTER + 0.5, t)), cold = t >= FREEZE;
      if (k > 0) p.glow(0, -1, 40, cold ? G[5] : C[4], 0.25 * k);

      if (t < SHATTER) for (const m of motes) drawMote(p, m, true);
    },
    draw(p) {
      const cold = t >= FREEZE, s = t < OPEN ? ease.outBack(t / OPEN, 2.6) : 1;
      if (t < SHATTER) {

        const white = (t >= FREEZE && t < FREEZE + 0.06) || t >= SHATTER - 0.05;
        face(p, white ? G.map(() => WHITE) : cold ? G : C, s, clamp((t - CRACK) / 0.18));
        p.glow(0, CY, RC * 1.9, cold ? G[5] : C[4], 0.32 * s);
        p.glowRing(0, CY, RC, 7, cold ? G[6] : C[5], 0.28 * s);
        for (const m of motes) drawMote(p, m, false);
      }

      if (t < 0.35) {
        const q = t / 0.35;
        p.ring(0, CY, RC * (0.4 + 1.2 * ease.outCubic(q)), Math.max(1, 3 * (1 - q)), q < 0.3 ? WHITE : C[6], 1.2 - q);
        if (q < 0.5) flare(p, 0, CY, 26 * (1 - q * 2) + 2, 1 - q * 2, C);
      }


      if (t < SHATTER)
        for (const tk of TICKS) {
          if (t < tk) continue;
          const q = (tc - clockTime(tk)) / 0.32;
          if (q >= 1) continue;
          p.ring(0, CY, RC + 3 + 24 * ease.outCubic(q), 1, cold ? G[5] : C[5], (cold ? 0.6 : 0.8) * Math.pow(1 - q, 1.6));
        }
      if (t >= SHATTER && t < SHATTER + 0.2) {
        const q = (t - SHATTER) / 0.2;
        flare(p, 0, CY, 34 * (1 - q) + 2, 1 - q, C);
        p.ring(0, CY, RC + 30 * ease.outCubic(q), Math.max(1, 3 * (1 - q)), WHITE, 1.2 - q);
      }
      bits.draw(p);
      ps.draw(p);
      lights.draw(p);
    },
  };

  function drawMote(p, m, back) {
    const a = m.a + m.w * tc, z = Math.sin(a);
    if (z < 0 !== back) return;
    const x = Math.cos(a) * m.r, y = CY + Math.cos(a) * m.r * m.tilt + z * m.r * 0.3, cold = t >= FREEZE, v = flow(t) * m.w;
    const c = cold ? G[6] : m.c;
    p.dot(x, y, c, back ? 0.6 : 1);

    if (Math.abs(v) > 0.2) for (let k = 1; k <= 3; k++) {
      const b = a - Math.sign(m.w) * k * 0.05 * Math.min(1, Math.abs(v));
      p.dot(Math.cos(b) * m.r, CY + Math.cos(b) * m.r * m.tilt + Math.sin(b) * m.r * 0.3, k < 2 ? C[5] : C[4], (back ? 0.5 : 0.9) * (1 - k / 4));
    }
    if (!back) p.glow(x, y, 5, cold ? G[6] : C[6], 0.3);
  }
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __i9yxtxl=__r(1);const fit=__i9yxtxl.fit;const sparkle=__i9yxtxl.sparkle;const cycle=__i9yxtxl.cycle;const clamp=__i9yxtxl.clamp;const TAU=__i9yxtxl.TAU;const WHITE=__i9yxtxl.WHITE;
const __i0fk5ri=__r(29);const GOLD=__i0fk5ri.GOLD;
const meta = {
  name: "Sunburst",
  desc: "A white-hot core in a gold corona; long and short rays turn slowly round it, breathing, with glints running out along them that wink at the tips.",
  tags: ["holy", "sun", "radiant", "rays", "light", "glow", "loop"],
  size: [128, 128],
  origin: [64, 64],
  duration: 4,
  loop: true,
  fps: 30,
  bg: "dark",
  options: { palette: GOLD, rays: 8, seed: 3 },
};
const CORE = 4.5, RING = 7.5, R0 = 9;
const frac = (x) => x - Math.floor(x);

function ray(p, C, a, L, w0, k) {
  const ca = Math.cos(a), sa = Math.sin(a), x1 = ca * (R0 + L), y1 = sa * (R0 + L), pad = w0 + 1;
  p.shade(Math.min(0, x1) - pad, Math.min(0, y1) - pad, Math.max(0, x1) + pad, Math.max(0, y1) + pad, (x, y, out) => {
    const along = x * ca + y * sa - R0, u = along / L;
    if (u < 0 || u > 1) return;
    const across = Math.abs(-x * sa + y * ca), w = (w0 / 2) * (1 - u * 0.85) + 0.25;
    if (across > w) return;
    const spine = across < 0.5, rim = across > w - 0.6 && w > 0.9;
    out.c = spine ? (u < 0.4 ? WHITE : u < 0.75 ? C[6] : C[5]) : rim && u > 0.15 ? C[3] : u < 0.3 ? C[6] : u < 0.62 ? C[5] : C[4];
    out.a = u < 0.72 ? k : k * (1 - (u - 0.72) / 0.28) * 1.2;
  });
  p.glowLine(ca * R0, sa * R0, ca * (R0 + L * 0.8), sa * (R0 + L * 0.8), 5, C[5], 0.16 * k);
}
function draw(p, t, o) {
  const C = fit(o.palette, 8), N = o.rays * 2, T = meta.duration, rot = (t / T) * ((2 * TAU) / N);
  p.glow(0, 0, 62, C[4], 0.3 + 0.06 * Math.sin((t / T) * TAU * 2));

  for (let i = 0; i < N; i++) {
    const a = rot + ((i + 0.5) * TAU) / N, L = 14 + 6 * Math.sin(a * 3 + (t / T) * TAU);
    p.line(Math.cos(a) * (R0 + 1), Math.sin(a) * (R0 + 1), Math.cos(a) * (R0 + L), Math.sin(a) * (R0 + L), (u) => (u < 0.3 ? C[6] : C[5]), (u) => 0.7 - u * 0.8);
  }

  for (let i = 0; i < N; i++) {
    const a = rot + (i * TAU) / N, long = i % 2 === 0, breathe = 0.86 + 0.14 * Math.sin(a * 3 - (t / T) * TAU * 2);
    const L = (long ? 36 : 21) * breathe;
    ray(p, C, a, L, long ? 4 : 2.6, 1);

    if (long) {
      const g = frac((t / T) * 2 + (a * 3) / TAU), r = R0 + g * L;
      if (g < 0.9) {
        p.px(Math.cos(a) * r, Math.sin(a) * r, WHITE);
        p.glow(Math.cos(a) * r, Math.sin(a) * r, 5, C[6], 0.45 * (1 - g));
      } else sparkle(p, Math.cos(a) * (R0 + L), Math.sin(a) * (R0 + L), 1 + 3 * Math.sin(((g - 0.9) / 0.1) * Math.PI), WHITE, C[6], 0.5);
    }
  }

  p.shade(-RING - 2, -RING - 2, RING + 2, RING + 2, (x, y, out) => {
    const d = Math.hypot(x, y);
    if (d > RING) return;
    const flick = 0.5 + 0.5 * Math.sin(Math.atan2(y, x) * 5 + (t / T) * TAU * 3);
    out.c = d < CORE ? WHITE : d < CORE + 1.5 ? (flick > 0.6 ? WHITE : C[6]) : flick > 0.5 ? C[5] : C[4];
  });
  p.glow(0, 0, 16, WHITE, 0.28);

  cycle(t, T, 10, o.seed, (g) => g.range(0.35, 0.7), (age, life, R) => {
    const a = R.range(0, TAU), d = R.range(16, 44), k = Math.sin((age / life) * Math.PI);
    sparkle(p, Math.cos(a) * d, Math.sin(a) * d, 1 + 2.4 * k * R.range(0.5, 1), WHITE, C[5], 0.4 * k);
  });
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ibgol1n=__r(1);const Particles=__ibgol1n.Particles;const Lights=__ibgol1n.Lights;const P=__ibgol1n.P;const Rng=__ibgol1n.Rng;const rng=__ibgol1n.rng;const fit=__ibgol1n.fit;const band=__ibgol1n.band;const bolt=__ibgol1n.bolt;const forks=__ibgol1n.forks;const flare=__ibgol1n.flare;const sparkle=__ibgol1n.sparkle;const clamp=__ibgol1n.clamp;const smooth=__ibgol1n.smooth;const ease=__ibgol1n.ease;const noise=__ibgol1n.noise;const TAU=__ibgol1n.TAU;const WHITE=__ibgol1n.WHITE;
const __iom0bwi=__r(71);const cull=__iom0bwi.cull;
const meta = {
  name: "Plasma explosion",
  desc: "A blue-violet energy blast with no smoke: a white flash, a ball of plasma swelling into a thinning shell, shock rings in and out of depth, lightning arcs crackling off it.",
  tags: ["explosion", "plasma", "energy", "electric", "magic", "sci-fi", "one-shot"],
  size: [224, 200],
  origin: [112, 100],
  duration: 1.7,
  loop: false,
  fps: 30,
  bg: "dark",
  options: {
    palette: ["#0a0828", "#1a1c6e", "#2c3cc0", "#4a7cf0", "#7cc0ff", "#c8ecff", "#ffffff"],
    accent: ["#1c0a30", "#4a1a8c", "#8a3ce0", "#c48cff", "#f0d8ff"],
    seed: 7,
  },
};
const BALL = 0.55;
function create(o) {
  const C = fit(o.palette, 7), V = fit(o.accent, 5), R = new Rng(o.seed);
  const ps = new Particles({ rng: R, sparks: [C[6], C[5], C[4], V[3]] }), lights = new Lights();
  lights.add(0, 0, 96, C[4], 1, 0.6);
  lights.add(0, 0, 40, WHITE, 0.9, 0.1);
  lights.add(0, 0, 70, V[2], 0.5, 1.1);
  for (let i = 0; i < 46; i++) {
    const a = R.range(0, TAU), sp = R.range(140, 360);
    ps.spawn(P.MOTE, Math.cos(a) * 4, Math.sin(a) * 4, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.2, 0.42), R.pick([C[6], C[5], C[4], V[3]]), R.range(0.7, 1.1));
  }
  for (let i = 0; i < 26; i++) {
    const a = R.range(0, TAU), sp = R.range(40, 140);
    ps.spawn(P.FLAKE, Math.cos(a) * 10, Math.sin(a) * 10, Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.8, 1.5), R.pick([C[5], V[3], V[4]]), R.range(0.6, 1.6));
  }
  let t = 0;
  return {
    update(dt) {
      t += dt;

      if (t > 0.12 && t < 0.9 && R.chance(30 * dt)) {
        const a = R.range(0, TAU), r = shell(t);
        ps.spawn(P.STAR, Math.cos(a) * r, Math.sin(a) * r, Math.cos(a) * R.range(10, 40), Math.sin(a) * R.range(10, 40), R.range(0.3, 0.6), R.chance(0.5) ? C[5] : V[4], R.range(0.5, 1.8));
      }
      ps.update(dt);
      cull(ps, -meta.origin[0] + 3, -meta.origin[1] + 3, meta.size[0] - meta.origin[0] - 3, meta.size[1] - meta.origin[1] - 3);
      lights.update(dt);
    },
    drawBack(p) {

      tilted(p, t, C, V, true);
    },
    draw(p) {

      if (t < BALL) {
        const u = t / BALL, r = shell(t), hollow = smooth(0.35, 1, u), boil = Math.floor(t * 20);
        p.shade(-r - 3, -r - 3, r + 3, r + 3, (x, y, out) => {
          const d = Math.hypot(x, y), a = Math.atan2(y, x), edge = r * (1 + 0.1 * noise(a * 3 + boil * 0.7, 3));
          if (d > edge) return;
          const v = d / edge;
          if (v < hollow * 0.92) return;

          const n = noise(a * 4 + d * 0.25 + boil * 0.5, 5), w = v + n * 0.14, fil = Math.abs(Math.sin(a * 5 + d * 0.32 - t * 14 + n * 2.5)) < 0.1;
          out.k = 0.25 * (1 - u);
          if (v > 0.9) return V[2];
          if (fil && v > 0.3) return u < 0.5 ? WHITE : C[5];
          return w < 0.32 - u * 0.25 ? WHITE : w < 0.52 ? C[5] : w < 0.72 ? C[4] : w < 0.86 ? (u < 0.5 ? C[3] : V[3]) : V[2];
        });
        p.glow(0, 0, r * 1.6 + 6, C[4], 0.6 * (1 - u));
      }
      if (t < 0.07) p.circle(0, 0, 9 - t * 60, WHITE);
      if (t < 0.25) flare(p, 0, 0, 52 * Math.pow(1 - t / 0.25, 1.3), 1 - t / 0.25, C);

      const u1 = t / 0.42;
      if (u1 < 1) {
        p.ring(0, 0, 8 + 84 * ease.outCubic(u1), Math.max(1, 3 * (1 - u1)), u1 < 0.25 ? WHITE : C[5], 1.15 - u1);
        p.glowRing(0, 0, 8 + 84 * ease.outCubic(u1), 5, C[4], 0.35 * (1 - u1));
      }
      const u2 = (t - 0.06) / 0.6;
      if (u2 > 0 && u2 < 1) p.ring(0, 0, 6 + 60 * ease.outCubic(u2), Math.max(1, 2 * (1 - u2)), V[3], 1.1 - u2);

      const left = 1 - smooth(0.15, 0.85, t), strike = Math.floor(t * 18);
      if (left > 0) {
        const r = rng(o.seed, strike, 17), n = 2 + Math.round(4 * left);
        for (let i = 0; i < n; i++) {
          const a = r.range(0, TAU), L = r.range(26, 58) * (0.45 + 0.55 * left), path = bolt(r, 0, 0, Math.cos(a) * L, Math.sin(a) * L, { jag: 0.28, depth: 4 });
          arc(p, path, C, V, 0.8 * left);
          if (r.chance(0.5)) for (const f of forks(r, path, { count: 1, len: 14, jag: 0.35 })) arc(p, f, C, V, 0.5 * left);
        }

        const rs = shell(t);
        for (let i = 0; i < 3; i++) {
          const a = r.range(0, TAU), b = a + r.range(0.3, 0.6);
          arc(p, bolt(r, Math.cos(a) * rs, Math.sin(a) * rs, Math.cos(b) * rs, Math.sin(b) * rs, { jag: 0.4, depth: 3 }), C, V, 0.6 * left);
        }
      }
      tilted(p, t, C, V, false);
      ps.draw(p);
      lights.draw(p);
    },
  };
}

function shell(t) {
  return 5 + 30 * ease.outCubic(clamp(t / BALL));
}

function tilted(p, t, C, V, back) {
  const u = (t - 0.03) / 0.5;
  if (u <= 0 || u >= 1) return;
  band(p, 0, 4, 12 + 86 * ease.outCubic(u), 0.28, Math.max(1, 4 * (1 - u)), 1.15 - u, [V[1], V[2], C[4], C[5]], (g) => (Math.sin(g) < 0) === back, u < 0.15);
}

function arc(p, path, C, V, k) {
  if (k <= 0.05) return;
  for (let i = 1; i < path.length; i++) {
    const [ax, ay] = path[i - 1], [bx, by] = path[i];
    p.glowLine(ax, ay, bx, by, 5, V[2], 0.18 * k);
    p.line(ax + 1, ay, bx + 1, by, C[4], k * 0.8);
    p.line(ax, ay, bx, by, i < path.length * 0.6 ? WHITE : C[5], Math.min(1, k * 1.4));
  }
}
},
function(__e){Object.defineProperty(__e,"OUTLINE",{enumerable:true,configurable:true,get:()=>OUTLINE});Object.defineProperty(__e,"stone",{enumerable:true,configurable:true,get:()=>stone});Object.defineProperty(__e,"fireRamp",{enumerable:true,configurable:true,get:()=>fireRamp});Object.defineProperty(__e,"fireBall",{enumerable:true,configurable:true,get:()=>fireBall});Object.defineProperty(__e,"drawPs",{enumerable:true,configurable:true,get:()=>drawPs});Object.defineProperty(__e,"draft",{enumerable:true,configurable:true,get:()=>draft});Object.defineProperty(__e,"cull",{enumerable:true,configurable:true,get:()=>cull});Object.defineProperty(__e,"fadeEdges",{enumerable:true,configurable:true,get:()=>fadeEdges});Object.defineProperty(__e,"pool",{enumerable:true,configurable:true,get:()=>pool});Object.defineProperty(__e,"haze",{enumerable:true,configurable:true,get:()=>haze});Object.defineProperty(__e,"heatRamp",{enumerable:true,configurable:true,get:()=>heatRamp});Object.defineProperty(__e,"scorch",{enumerable:true,configurable:true,get:()=>scorch});Object.defineProperty(__e,"rock",{enumerable:true,configurable:true,get:()=>rock});Object.defineProperty(__e,"glowDome",{enumerable:true,configurable:true,get:()=>glowDome});Object.defineProperty(__e,"trail",{enumerable:true,configurable:true,get:()=>trail});Object.defineProperty(__e,"drawDirt",{enumerable:true,configurable:true,get:()=>drawDirt});Object.defineProperty(__e,"crater",{enumerable:true,configurable:true,get:()=>crater});Object.defineProperty(__e,"dome",{enumerable:true,configurable:true,get:()=>dome});Object.defineProperty(__e,"lobe",{enumerable:true,configurable:true,get:()=>lobe});Object.defineProperty(__e,"Plume",{enumerable:true,configurable:true,get:()=>Plume});Object.defineProperty(__e,"Column",{enumerable:true,configurable:true,get:()=>Column});
const __iaiom9u=__r(1);const P=__iaiom9u.P;const PF=__iaiom9u.PF;const clamp=__iaiom9u.clamp;const smooth=__iaiom9u.smooth;const rand=__iaiom9u.rand;const TAU=__iaiom9u.TAU;const WHITE=__iaiom9u.WHITE;const hex=__iaiom9u.hex;const mix=__iaiom9u.mix;const scale=__iaiom9u.scale;const rgb=__iaiom9u.rgb;
const OUTLINE = hex("#1a1422"), SOOT = hex("#0d0a12"), SOOT2 = hex("#17121d");
function stone(c) {
  c = hex(c);
  return { light: mix(scale(c, 1.35), WHITE, 0.08), body: c, shade: scale(c, 0.64), dust: mix(scale(c, 1.2), rgb(150, 140, 150), 0.3) };
}
const fireRamp = (F) => [F[7], F[6], F[5], F[4], F[3], F[2], F[1], mix(F[1], F[0], 0.5), F[0]];
function fireBall(p, q, FR) {
  const k = q.life / q.max, age = 1 - k, n = FR.length, x = q.x, y = q.y;
  const heat = Math.min(0.999, Math.pow(age, 0.62) + (q.seed % 1) * 0.1), idx = Math.min(n - 2, Math.floor(heat * (n - 1)));
  const r = q.size * (0.55 + 0.45 * Math.min(1, age * 7)) * (1 - age * 0.55), c = FR[idx];
  if (idx >= n - 2) return p.disc(x, y, r, c, Math.min(1, k * 3) * 0.85);

  p.circle(x, y, r, FR[Math.min(n - 1, idx + (idx <= 2 ? 3 : 2))]);
  p.circle(x - r * 0.16, y - r * 0.22, r * 0.78, c);
  if (r > 1.6) p.circle(x, y - r * 0.9, r * 0.42, c);
  if (idx <= 3 && r > 1.8) p.circle(x - r * 0.28, y - r * 0.34, r * 0.36, FR[Math.max(0, idx - 1)]);
  if (idx < 6) p.glow(x, y, r * 2.4 + 2, c, 0.18 * k);
}
function drawPs(p, ps, layer, FR) {
  const all = ps.list, fires = [], rest = [];
  for (const q of all) (q.k === P.FIRE ? fires : rest).push(q);
  const back = layer === "back";
  if (!back) for (const q of fires) if (q.delay <= 0 && !(q.flag & PF.BACK)) fireBall(p, q, FR);
  ps.list = rest;
  ps.draw(p, layer);
  ps.list = all;
  if (back) for (const q of fires) if (q.delay <= 0 && q.flag & PF.BACK) fireBall(p, q, FR);
}
const LIFTS = new Set([P.SMOKE, P.DUST, P.FIRE, P.EMBER, P.VAPOUR]);
function draft(ps, dt, { x = 0, top = -Infinity, w = 12, up = 150, squeeze = 4, pull = 0, low = 10, reach = 100, k = 1 }) {
  if (k <= 0) return;
  for (const q of ps.list) {
    if (q.delay > 0 || !LIFTS.has(q.k) || q.y < top) continue;
    const dx = q.x - x, ax = Math.abs(dx), u = ax / w;
    if (u < 1) {
      const f = (1 - u * u) * k;
      q.vy -= up * f * dt;
      q.vx -= dx * squeeze * f * dt;
    }
    if (pull && q.y > -low && ax > w * 0.4 && ax < reach) q.vx -= Math.sign(dx) * pull * k * (1 - ax / reach) * dt;
  }
}
function cull(ps, x0, y0, x1, y1) {
  const L = ps.list;
  for (let i = L.length - 1; i >= 0; i--) {
    const q = L[i];
    if (q.x < x0 || q.x > x1 || q.y < y0 || q.y > y1) L.splice(i, 1);
  }
}
const SOFT = new Set([P.SMOKE, P.DUST, P.VAPOUR]);
function fadeEdges(ps, x0, x1, w = 30, y1 = Infinity) {
  const L = ps.list;
  for (let i = L.length - 1; i >= 0; i--) {
    const q = L[i];
    if (!SOFT.has(q.k)) continue;
    const r = q.size * 1.65, e = Math.min((Math.min(q.x - x0, x1 - q.x) - r) / w, (y1 - q.y - r) / 6);
    if (e <= 0) L.splice(i, 1);
    else if (e < 1) q.life = Math.min(q.life, q.max * 0.42 * e);
  }
}
function pool(p, x, y, rx, ry, c, k) {
  if (k <= 0.004 || rx < 1 || ry < 0.5) return;
  p.shade(x - rx, y - ry, x + rx, y + ry, (px, py, out) => {
    const dx = (px - x) / rx, dy = (py - y) / ry, d = dx * dx + dy * dy;
    if (d >= 1) return;
    const f = 1 - Math.sqrt(d);
    out.l = c;
    out.k = f * f * k;
  });
}
function haze(p, x, y, rx, ry, c, a) {
  if (rx < 0.5 || ry < 0.5) return;
  const fc = typeof c === "function", fa = typeof a === "function";
  p.each(x - rx, y - ry, x + rx, y + ry, (lx, ly, sx, sy) => {
    const dx = (lx - x) / rx, dy = (ly - y) / ry, d2 = dx * dx + dy * dy;
    if (d2 > 1) return;
    const d = Math.sqrt(d2);
    p.blendPx(sx, sy, fc ? c(d) : c, fa ? a(d) : a);
  });
}
const heatRamp = (FR) => [...FR.slice(0, 8), mix(FR[8], SOOT, 0.3), mix(FR[8], SOOT, 0.65)];
function scorch(p, HR, t, rx0, cool, fade, rows = 3) {
  if (fade <= 0) return;
  const rx = rx0 * Math.min(1, t / 0.08), ry = rows + 1.5, n = HR.length;
  for (let y = 0; y < rows; y++)
    for (let x = Math.floor(-rx); x <= Math.ceil(rx); x++) {
      const dx = (x + 0.5) / rx, dy = (y + 0.5) / ry, d = Math.sqrt(dx * dx + dy * dy);
      if (d > 1) continue;
      const k = rand(x * 31 + y, 3), T = Math.pow(clamp(1 - t / cool), 1.4) * (1.25 - d) - k * 0.35;
      const crack = k > 0.88 && d < 0.85 ? Math.pow(clamp(1 - t / (cool * 2)), 1.2) * (1.15 - d) * 0.8 : 0, H = Math.max(T, crack);
      if (H > 0.06) {
        const c = HR[Math.min(n - 1, Math.floor((1 - Math.min(1, H)) * (n - 1)))];
        p.dot(x, y, c, fade);
        if ((x & 3) === 0 || crack > T) p.glow(x + 0.5, y, 6, c, 0.18 * H * fade);
      } else p.dot(x, y, d < 0.5 ? SOOT : SOOT2, (d < 0.95 - k * 0.3 ? 1 : 1 - d) * fade);
    }
}
function rock(p, b, st, FR) {
  const r = 0.6 + b.s * 0.75, fade = Math.min(1, b.life / 0.5), lx = Math.cos(b.a) * r * 0.4, ly = Math.sin(b.a) * r * 0.4, heat = b.heat ?? 0;
  p.shade(b.x - r - 1, b.y - r - 1, b.x + r + 1, b.y + r + 1, (x, y, out) => {
    const dx = x - b.x, dy = y - b.y, d = Math.hypot(dx * 1.15, dy);
    if (d > r + 0.9) return;
    out.a = fade;
    if (d > r) return OUTLINE;
    const lit = dx * lx + dy * ly;
    if (heat > 0.08) {
      const g = heat * (1.1 - d / (r + 0.5)) + (lit > 0.3 ? heat * 0.45 : 0);
      if (g > 0.5) return FR[g > 1 ? 1 : g > 0.8 ? 2 : g > 0.62 ? 3 : 4];
      if (g > 0.32) return FR[5];
    }
    return lit < -0.4 ? st.light : lit > 0.6 ? st.shade : st.body;
  });
  if (heat > 0.05) p.glow(b.x, b.y, r * 2 + 3, FR[3], 0.32 * heat * fade);
}
function glowDome(p, x, y, R, w, c, k, box = [-Infinity, -Infinity, Infinity, Infinity]) {
  if (k <= 0.004 || w < 1) return;
  p.shade(Math.max(box[0], x - R - w), Math.max(box[1], y - R - w), Math.min(box[2], x + R + w), Math.min(box[3], y + 0.5), (px, py, out) => {
    const d = Math.abs(Math.hypot(px - x, py - y) - R) / w;
    if (d >= 1) return;
    out.l = c;
    out.k = (1 - d) * (1 - d) * k;
  });
}
function trail(p, pts, t, FR, SM, life = 0.5, w = 1, heat = 1) {
  let lx = NaN, ly = NaN;
  for (let i = pts.length - 1; i >= 0; i--) {
    const q = pts[i], age = (t - q.t) / life;
    if (age >= 1) break;
    if (Math.hypot(q.x - lx, q.y - ly) < 1.6) continue;
    lx = q.x;
    ly = q.y;
    const r = w * (0.7 + age * 2.6);
    if (age < 0.12 * heat) p.circle(q.x, q.y - age * 6, r * 0.8, FR[age < 0.05 ? 3 : 5]);
    else p.disc(q.x, q.y - age * 6, r, SM[Math.min(SM.length - 1, 1 + Math.floor(age * 3))], 0.55 * (1 - age));
  }
}
function drawDirt(p, ps, layer) {
  const all = ps.list, grit = [], rest = [];
  for (const q of all) (q.k === P.GRIT ? grit : rest).push(q);
  ps.list = rest;
  ps.draw(p, layer);
  ps.list = all;
  if (layer === "back") return;
  for (const q of grit) {
    if (q.delay > 0) continue;
    const k = q.life / q.max, sp = Math.hypot(q.vx, q.vy);
    if (k < 0.25 && k * 4 < 0.5) continue;
    if (sp > 140) {
      const L = Math.min(5, sp * 0.012), ux = q.vx / sp, uy = q.vy / sp;
      p.line(q.x - ux * L, q.y - uy * L, q.x, q.y, (u) => (u < 0.5 ? scale(q.col, 0.7) : q.col));
    } else {
      p.px(q.x, q.y, q.col);
      if (q.size >= 2) p.px(q.x + 1, q.y, q.col), p.px(q.x, q.y + 1, scale(q.col, 0.8)), p.px(q.x + 1, q.y + 1, scale(q.col, 0.7));
    }
  }
}
function crater(p, E, x, r, k, a = 1) {
  if (k <= 0 || a <= 0) return;
  const n = E.length, rx = r * k, ry = Math.max(1.5, r * 0.17 * k);
  for (let py = -1; py <= Math.ceil(ry) + 1; py++)
    for (let px = Math.floor(-rx - 1); px <= Math.ceil(rx + 1); px++) {
      const dx = (px + 0.5) / rx, dy = (py + 0.5 - ry * 0.35) / ry, d = Math.sqrt(dx * dx + dy * dy);
      if (d > 1.08) continue;

      const c = d > 0.92 ? (dy < 0 ? E[n - 2] : E[2]) : dy < -0.2 ? E[0] : dy < 0.35 ? E[1] : E[2];
      p.dot(x + px, py, c, a);
    }

  for (const s of [-1, 1])
    for (let i = 0; i < 9; i++) {
      const u = i / 8, h = Math.round(Math.sin(Math.PI * u) * 2.2 * k + (rand(i, s > 0 ? 3 : 4) < 0.4 ? 1 : 0) * k);
      const hx = x + s * (rx * 0.82 + u * r * 0.55);
      for (let j = 0; j <= h; j++) p.dot(hx, -j, j === h ? E[n - 2] : j === h - 1 ? E[3] : E[2], a);
    }
  for (let i = 0; i < 26; i++) {
    const s = rand(i, 7) < 0.5 ? -1 : 1, d = rx * (1.05 + rand(i, 8) * 1.4), y = Math.round(rand(i, 9) * 3) - 1;
    if (rand(i, 10) < k) p.dot(x + s * d, y, rand(i, 11) < 0.5 ? E[3] : E[2], a);
  }
}
function dome(p, F, x, r, k) {
  const e = 1.4 / r;
  p.shade(x - r - 1.5, -r - 1.5, x + r + 1.5, 0.5, (px, py) => {
    const d = Math.hypot(px - x, py) / r;
    if (d > 1 + e) return;
    return d > 1 ? F[2] : d > 0.8 ? (k > 0.45 ? F[6] : F[5]) : d > 0.5 ? (k > 0.45 ? WHITE : F[6]) : k > 0.2 ? WHITE : F[6];
  });
}
function lobe(p, x, y, r, FR, SM, fire, glow, a, z = 0, dark = 0, style = 0) {
  if (r < 0.7 || a <= 0.01) return;
  const n = FR.length, m = SM.length, back = z < -0.35 ? 1 : 0, rim = 1 - Math.min(0.35, 1.6 / r), seam = 1 - Math.min(0.3, 1.3 / r);

  const D = (i) => SM[Math.min(m - 1, i + back + dark)], soft = 0.55 + 0.4 * (1 - Math.min(1, a));
  const px = (lx, ly, sx, sy) => {
    const dx = (lx - x) / r, dy = (ly - y) / r, d2 = dx * dx + dy * dy;
    if (d2 > 1) return;
    const d = Math.sqrt(d2), nz = Math.sqrt(1 - d2), sky = -0.5 * dx - 0.66 * dy + 0.56 * nz;
    const v = fire * (1.32 - 0.78 * d) + 0.14 * sky * fire;
    let c, k = 0, solid = false;
    if (v > 0.44) {
      let i = Math.min(n - 3, Math.max(0, Math.floor((1.3 - v) * (n - 1) * 0.78)));
      if (d > seam) i = Math.min(6, Math.max(4, i + 2));
      else if (d > seam - 0.22) i = Math.min(n - 3, i + 1);
      c = FR[i];
      k = 0.05 * fire;
      solid = true;
    } else if (style) {
      const lam = -0.42 * dx - 0.78 * dy + 0.46 * nz;
      if (lam > 0.66 && d > 0.4) c = D(0);
      else if (lam > 0.16) c = D(1);
      else if (lam > -0.3) c = D(2);
      else {
        c = D(lam < -0.64 ? 4 : 3);
        const g = glow * (0.6 + 0.4 * dy);
        if (g > 0.55) (c = FR[g > 0.8 ? 5 : 6]), (k = 0.08 * g);
        else if (g > 0.34) c = mix(c, FR[6], 0.6);
        else if (g > 0.16) c = mix(c, FR[7], 0.45);
      }
    } else {
      const g = glow * (0.82 * dy + 0.3 * nz);
      if (g > 0.45) (c = FR[g > 0.66 ? 4 : 5]), (k = 0.1 * glow);
      else if (g > 0.3) c = FR[6];
      else if (g > 0.2) c = FR[7];
      else {
        const s = sky * 0.5 + 0.5;
        c = D(s > 0.8 ? 0 : s > 0.62 ? 1 : s > 0.42 ? 2 : s > 0.22 ? 3 : 4);
      }
    }
    p.blendPx(sx, sy, c, solid || d <= rim ? a : a * soft);
    if (k > 0) p.add(sx, sy, c, k);
  };
  if (p.sn !== 0 || p.cs !== 1) return p.each(x - r, y - r, x + r, y + r, px);

  const ax = p.tx + (x - r) * p.fx, bx = p.tx + (x + r) * p.fx;
  const sx0 = Math.max(p.ox, Math.floor(Math.min(ax, bx))), sx1 = Math.min(p.ox + p.w - 1, Math.ceil(Math.max(ax, bx)));
  const sy0 = Math.max(p.oy, Math.floor(p.ty + y - r)), sy1 = Math.min(p.oy + p.h - 1, Math.ceil(p.ty + y + r));
  for (let sy = sy0; sy <= sy1; sy++) {
    const ly = sy + 0.5 - p.ty, q = (ly - y) / r;
    if (q * q >= 1) continue;

    const hw = r * Math.sqrt(1 - q * q), cx = p.tx + x * p.fx;
    for (let sx = Math.max(sx0, Math.floor(cx - hw - 0.5)), e = Math.min(sx1, Math.ceil(cx + hw)); sx <= e; sx++) px((sx + 0.5 - p.tx) * p.fx, ly, sx, sy);
  }
}
class Plume {
  constructor(R, o = {}) {
    this.o = o = {
      x: 0, y: -20, rise: 100, tau: 1.2, drift: 4, tube: [8, 20], ring: [1, 18], grow: 0.9, n: 40, size: [5, 10], swell: 0.5,
      spin: 2.4, spinTau: 1.6, heat: 1.15, cool: 0.45, under: 0.5, tilt: 0.2, squash: 0.7, fade: [4, 6], glow: 1, spread: 10,
      style: 0, inner: false, hollow: false, fray: null, ...o,
    };
    this.R = R;
    this.t = 0;
    this.roll = 0;
    this.onFray = null;

    this.lobes = Array.from({ length: o.n }, (_, i) => ({
      th: TAU * ((i * 0.618034 + R.range(-0.08, 0.08)) % 1), ph: (TAU * (i + R.range(-0.35, 0.35))) / o.n,
      j: R.range(-0.55, 0.12), s: R.range(o.size[0], o.size[1]), h: R.range(-0.22, 0.08), dx: R.range(-1, 1), dy: R.range(-1, 0.4),
      f: R.range(-0.9, 0.5), gv: R.range(0.55, 1.15),
    }));
  }
  shape(t = this.t) {
    const o = this.o, u = Math.max(0, t), g = 1 - Math.exp(-u / o.grow);
    return { x: o.x, y: o.y - o.rise * (1 - Math.exp(-u / o.tau)) - o.drift * u, tube: o.tube[0] + (o.tube[1] - o.tube[0]) * g, ring: o.ring[0] + (o.ring[1] - o.ring[0]) * g, g };
  }
  hot(t = this.t) {
    return clamp(this.o.heat - this.o.cool * t + 0.3);
  }
  ember(t = this.t) {
    return clamp((this.o.heat - this.o.cool * t + 1) / 1.1);
  }

  lobesAt(t) {
    const o = this.o, S = this.shape(t), base = o.heat - o.cool * t, span = S.ring + S.tube || 1, list = [];
    for (const q of this.lobes) {
      const fade = 1 - smooth(o.fade[0] + q.f, o.fade[1] + q.f * 0.5, t), loose = Math.pow(smooth(o.fade[0] - 1.8 + q.f, o.fade[1], t), 1.5) * o.spread;
      if (fade <= 0) continue;
      const th = q.th - this.roll, rt = S.tube * (1 + q.j), rho = S.ring + rt * Math.cos(th), up = Math.sin(th);
      const X = rho * Math.cos(q.ph), Z = rho * Math.sin(q.ph);

      const heat = base + q.h - 0.18 * Math.max(0, Math.cos(th)) * clamp(t * 2) + o.under * Math.max(0, -up) * clamp(base + 0.6);
      const r = q.s * (0.5 + 0.5 * S.g) * (1 + o.swell * clamp(1 - heat)) * (1 + 0.35 * (1 - fade));
      list.push({ x: S.x + X + q.dx * loose, y: S.y - rt * up * o.squash + Z * o.tilt + q.dy * loose, z: Z / span, up, out: Math.cos(th), heat, q, fade, r, d: Math.hypot(X, Z) / span, c: 1 - Math.min(1, Math.abs(X) / span) });
    }
    return list.sort((a, b) => a.z - b.z);
  }
  update(dt) {
    const o = this.o;
    this.t += dt;
    this.roll += o.spin * (0.12 + 0.88 * Math.exp(-this.t / o.spinTau)) * dt;

    if (o.fray && this.onFray && this.t > o.fray[0] && this.t < (o.fray[2] ?? Infinity)) {
      const S = this.shape(), k = o.fray[1] * dt * smooth(o.fray[0], o.fray[0] + 1, this.t);
      for (const e of this.lobesAt(this.t)) {
        if (e.out < 0.2 || !this.R.chance(k * e.fade)) continue;
        const ux = e.x - S.x, uy = e.y - S.y, l = Math.hypot(ux, uy) || 1;
        this.onFray(e.x + (ux / l) * e.r * 0.6, e.y + (uy / l) * e.r * 0.6, e.r, ux / l, uy / l);
      }
    }
  }
  draw(p, FR, SM, { mid } = {}) {
    const o = this.o, t = this.t;
    if (t >= o.fade[1] + 0.5) return;
    const S = this.shape(t), base = o.heat - o.cool * t, span = S.ring + S.tube || 1, list = this.lobesAt(t), age = clamp(t / o.fade[1]);
    const E = this.ember(t), reach = 0.3 + 1.15 * E;
    let drawn = false;
    for (const e of list) {
      if (!drawn && e.z >= 0 && mid) (drawn = true), mid();
      const h = e.heat, fade = e.fade, fire = clamp((h - 0.2) / 0.75);


      const glow = o.inner
        ? E * clamp((reach - e.d) / 0.45) * (0.45 + 0.55 * Math.max(0, -e.up)) * e.q.gv * o.glow
        : clamp((base + 0.45) / 0.85) * o.glow * (0.4 + 0.35 * Math.max(0, -e.up) + 0.4 * e.c) * e.q.gv;
      lobe(p, e.x, e.y, e.r, FR, SM, fire, glow, fade * (0.82 + 0.18 * fire), e.z, (age > 0.72 ? 1 : 0) + (o.hollow && e.up < -0.35 ? 1 : 0), o.style);
      if (fire > 0.25) p.glow(e.x, e.y, e.r * 1.25 + 2, FR[2], 0.07 * fire);
    }
    if (!drawn && mid) mid();
    const hot = this.hot(t);
    if (hot > 0) p.glow(S.x, S.y, span * 1.8 + 14, FR[3], 0.32 * hot * o.glow);
    if (o.inner && E > 0.05) p.glow(S.x, S.y + S.tube * 0.3, span * (0.5 + 0.7 * E) + 8, FR[4], 0.22 * E * E);
  }
}
class Column {
  constructor(R, o = {}) {
    this.R = R;
    this.o = o = { w: 7, foot: 16, speed: 70, size: [5, 8], n: 18, sway: 2.5, fade: 0.5, style: 0, ...o };
    this.t = 0;
    this.lobes = [];
    this.acc = 0;
  }
  spawn(y) {
    const R = this.R, o = this.o;
    this.lobes.push({ y, x: R.range(-1, 1), s: R.range(o.size[0], o.size[1]), ph: R.range(0, TAU), a: 0, v: R.range(0.8, 1.2) });
  }
  update(dt, top, feed) {
    const o = this.o, L = Math.max(10, -top);
    this.t += dt;
    if (feed > 0) for (this.acc += dt * feed * o.n * (o.speed / L); this.acc > 1; this.acc--) this.spawn(-1);
    for (let i = this.lobes.length - 1; i >= 0; i--) {
      const b = this.lobes[i], u = clamp(-b.y / L);
      b.y -= o.speed * b.v * (0.45 + 0.55 * Math.min(1, -b.y / 24)) * dt;
      b.a = Math.min(1, b.a + dt * 4);
      if (b.y < top || (feed <= 0 && (b.a -= dt * (2 - u)) <= 0)) this.lobes.splice(i, 1);
    }
  }
  draw(p, top, FR, SM, fire, glow) {
    const o = this.o, L = Math.max(10, -top);

    const list = [...this.lobes].sort((a, b) => a.y - b.y);
    for (const b of list) {
      const u = clamp(-b.y / L), foot = Math.pow(1 - u, 4), w = o.w + o.foot * foot;
      const x = b.x * w * 0.45 + Math.sin(this.t * 1.7 + b.ph + u * 3) * o.sway * u;
      const r = b.s * (0.75 + 0.5 * foot + 0.35 * u) * Math.min(1, b.a * 1.5);
      const end = 1 - smooth(0.85, 1, u);
      lobe(p, x, b.y - r * 0.3 * foot, r, FR, SM, clamp(fire * (1.1 - u * 0.9)), glow * smooth(0.55, 1, u), Math.min(1, b.a) * end * 0.9, 0, u > 0.5 ? 0 : 1, o.style);
    }
  }
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __icqeeel=__r(1);const Particles=__icqeeel.Particles;const Lights=__icqeeel.Lights;const P=__icqeeel.P;const Rng=__icqeeel.Rng;const PAL=__icqeeel.PAL;const fit=__icqeeel.fit;const band=__icqeeel.band;const flare=__icqeeel.flare;const sparkle=__icqeeel.sparkle;const clamp=__icqeeel.clamp;const ease=__icqeeel.ease;const TAU=__icqeeel.TAU;const WHITE=__icqeeel.WHITE;
const N = 11, SPREAD = 46, H = 124, SLANT = 0.38, TRAIL = 0.17;
const meta = {
  name: "Star fall",
  desc: "Stars streak down on long trails across an area, each landing with a white flash, a ring across the floor and a kick of sparks.",
  tags: ["arcane", "star", "meteor", "rain", "aoe", "magic", "ground", "one-shot"],
  size: [232, 172],
  origin: [124, 150],
  duration: 2.5,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: PAL.arcane, seed: 13 },
};
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed);
  const ps = new Particles({ rng: R, ground: () => 0, sparks: [WHITE, C[6], C[5], C[4]] }), lights = new Lights();

  const xs = Array.from({ length: N }, (_, i) => -SPREAD + ((i + R.range(0.2, 0.8)) * 2 * SPREAD) / N);
  for (let i = N - 1; i > 0; i--) {
    const j = R.int(0, i);
    [xs[i], xs[j]] = [xs[j], xs[i]];
  }
  const stars = xs.map((x, i) => {
    const y = R.range(-3, 2), h = H * R.range(0.85, 1);
    return { x, y, sx: x - h * SLANT, sy: y - h, t0: 0.04 + i * 0.105 + R.range(0, 0.05), T: R.range(0.3, 0.4), landed: false, big: R.chance(0.35), ph: R.range(0, TAU) };
  });
  const hits = [];
  let t = 0;
  const at = (s, tt) => {
    const q = clamp((tt - s.t0) / s.T), e = q * (0.35 + 0.65 * q);
    return [s.sx + (s.x - s.sx) * e, s.sy + (s.y - s.sy) * e, q];
  };
  function star(p, s) {
    const [x, y, q] = at(s, t);

    const n = 20;
    for (let k = n; k >= 1; k--) {
      const [ax, ay] = at(s, t - (k * TRAIL) / n), [bx, by] = at(s, t - ((k - 1) * TRAIL) / n), u = k / n;
      if (t - (k * TRAIL) / n < s.t0) continue;
      const c = u < 0.15 ? WHITE : u < 0.4 ? C[6] : u < 0.7 ? C[5] : C[4];

      if (u < (s.big ? 0.55 : 0.35)) p.line(ax + 1, ay, bx + 1, by, u < 0.2 ? C[6] : C[5], 1.1 - u * 1.4);
      p.line(ax, ay, bx, by, c, 1.3 - u);
      if (k % 3 === 0) p.glow(ax, ay, 7 * (1 - u) + 2, C[5], 0.3 * (1 - u));
    }

    if (s.big) flare(p, x, y, 7 + 1.5 * Math.sin(t * 40 + s.ph), 0.8, C);
    else sparkle(p, x, y, 3.5 + Math.sin(t * 40 + s.ph), C[6], C[5], 0.6);
    p.circle(x, y, s.big ? 1.6 : 1.1, WHITE);
    p.glow(x, y, s.big ? 18 : 13, C[5], 0.6);
    p.glow(x, y, 5, WHITE, 0.35);
    return q;
  }
  function hit(p, h, far) {
    const k = (t - h.t) / 0.45;
    if (k < 0 || k >= 1) return;
    band(p, h.x, h.y, 3 + (h.big ? 22 : 16) * ease.outCubic(k), 0.26, Math.max(1, 2.5 * (1 - k)), 1.15 - k, [C[3], C[5], C[6], WHITE], (g) => Math.sin(g) < 0 === far, k < 0.2);
  }
  return {
    update(dt) {
      t += dt;
      for (const s of stars) {
        if (t < s.t0 || s.landed) continue;
        const [x, y, q] = at(s, t);
        if (R.chance(0.55)) ps.spawn(P.STAR, x + R.range(-1.5, 1.5), y + R.range(-1.5, 1.5), R.range(-12, 12), R.range(-8, 4), R.range(0.35, 0.7), R.pick([WHITE, C[6], C[5]]), R.chance(0.7) ? R.range(0.4, 0.9) : R.range(1.2, 1.8));
        if (q >= 1) {
          s.landed = true;
          hits.push({ x: s.x, y: s.y, t, big: s.big });
          lights.add(s.x, s.y - 12, s.big ? 46 : 38, C[5], 0.9, 0.32);
          lights.add(s.x, s.y - 3, 16, WHITE, 0.8, 0.08);
          for (let i = 0; i < (s.big ? 14 : 9); i++) {
            const a = -Math.PI / 2 + R.range(-1.35, 1.35), sp = R.range(50, 150);
            ps.spawn(P.SPARK, s.x, Math.min(-1, s.y - 1), Math.cos(a) * sp, Math.sin(a) * sp, R.range(0.2, 0.5));
          }
          for (let i = 0; i < 4; i++) ps.spawn(P.STAR, s.x + R.range(-4, 4), s.y - R.range(2, 8), R.range(-15, 15), -R.range(10, 35), R.range(0.4, 0.8), R.pick([WHITE, C[6]]), R.range(0.8, 2));
        }
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {

      const k = clamp(t / 0.3) * (1 - clamp((t - 1.7) / 0.7));
      if (k > 0) for (const x of [-36, 0, 36]) p.glow(x, -1, 40, C[4], 0.14 * k);
      for (const h of hits) hit(p, h, true);

      for (const h of hits) {
        const k2 = 1 - (t - h.t) / 0.7;
        if (k2 <= 0) continue;
        p.dot(h.x, h.y, k2 > 0.6 ? WHITE : C[6], k2 * 1.5);
        for (const dx of [-1, 1]) p.dot(h.x + dx, h.y, C[5], k2 * 1.2);
        p.glow(h.x, h.y - 1, 10, C[5], 0.35 * k2);
      }
      ps.draw(p, "back");
    },
    draw(p) {
      for (const s of stars) if (t >= s.t0 && !s.landed) star(p, s);
      for (const h of hits) {
        hit(p, h, false);
        const k = (t - h.t) / 0.22;
        if (k < 0 || k >= 1) continue;
        if (k < 0.35) p.circle(h.x, h.y - 2, 5 * (1 - k / 0.35) + 1, WHITE);
        flare(p, h.x, h.y - 2, (h.big ? 16 : 12) * Math.pow(1 - k, 1.5) + 2, 1 - k, C);
      }
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"act",{enumerable:true,configurable:true,get:()=>act});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __ibkw0tw=__r(1);const Particles=__ibkw0tw.Particles;const Lights=__ibkw0tw.Lights;const P=__ibkw0tw.P;const PF=__ibkw0tw.PF;const Rng=__ibkw0tw.Rng;const fit=__ibkw0tw.fit;const band=__ibkw0tw.band;const flare=__ibkw0tw.flare;const sparkle=__ibkw0tw.sparkle;const clamp=__ibkw0tw.clamp;const seg=__ibkw0tw.seg;const smooth=__ibkw0tw.smooth;const ease=__ibkw0tw.ease;const noise2=__ibkw0tw.noise2;const fract=__ibkw0tw.fract;const rand=__ibkw0tw.rand;const scale=__ibkw0tw.scale;const TAU=__ibkw0tw.TAU;const WHITE=__ibkw0tw.WHITE;const READY=__ibkw0tw.READY;
const __i6h8tdc=__r(74);const spell=__i6h8tdc.spell;const drawWord=__i6h8tdc.drawWord;const tintActor=__i6h8tdc.tintActor;const lightActor=__i6h8tdc.lightActor;const haloActor=__i6h8tdc.haloActor;
const meta = {
  name: "Level up",
  desc: "Gold gathers at the feet and bursts up as a pillar of light round the hero; rings climb it, LEVEL UP! drops in letter by letter, a shine sweeps it, sparkles twinkle.",
  tags: ["ui", "level", "reward", "text", "light", "one-shot"],
  size: [176, 138],
  origin: [88, 114],
  duration: 3.2,
  loop: false,
  fps: 30,
  bg: "ground",
  actor: 2,
  options: { palette: ["#2a1405", "#5c3008", "#9a5a0e", "#d48e18", "#f5b92c", "#ffde5e", "#fff4bc", "#ffffff"], text: "LEVEL UP!", seed: 5 },
};
const COIL = { turn: 0.9, crouch: 7, lean: 2, fx: -6, fy: -13, bx: 7, by: -13, ffx: -5, fbx: 6 };
const LEAP = { turn: 1.1, y: -16, crouch: -1, fx: -6, fy: -45, bx: 7, by: -44, ffx: -2, ffy: -8, fbx: 5, fby: -3, toeB: true };
const PUMP = { turn: 0.9, crouch: 0, fx: -6, fy: -45, bx: 9, by: -15, ffx: -3, fbx: 4 };
const act = {
  onBody: true,
  follow: 0,
  poses: [
    [-0.3, READY],
    [0.28, COIL],
    [0.3, LEAP, "snap"],
    [0.46, { ...LEAP, y: -19 }],
    [0.72, { ...LEAP, y: 0, ffy: -4, fby: -4 }, "in"],
    [0.74, { ...COIL, crouch: 5 }, "snap"],
    [0.95, PUMP, "out"],
    [1.2, { ...PUMP, crouch: 1, fy: -43 }],
    [1.45, PUMP],
    [2.3, { ...PUMP, fy: -41 }],
    [2.8, READY],
    [3.2, READY],
  ],
  hits: [{ t: 0.28, stop: 0.05, shake: 0.14, amp: 2 }],
  dust: [{ t: 0.3, x: 0, n: 7 }, { t: 0.74, x: 0, n: 6 }],
};

const REL = 0.28, RET = 1.02, GONE = 1.34, TOP = 100, TY = -68, DROP = 0.5, STAG = 0.05, LANDED = 1.06, SHINE = 1.24, EXIT = 2.3;

const STRANDS = Array.from({ length: 9 }, (_, i) => ({ x: (i / 8 - 0.5) * 1.5 + (rand(i, 1) - 0.5) * 0.16, sp: 170 + rand(i, 2) * 170, per: 10 + rand(i, 3) * 16, duty: 0.3 + rand(i, 4) * 0.35, ph: rand(i, 5), lvl: rand(i, 6) < 0.35 ? 1 : 2, end: 0.5 + rand(i, 7) * 0.42 }));

const widthAt = (t) => (t < REL ? 0 : 12 * (1 + 0.4 * Math.exp(-(t - REL) * 10)) * (1 - 0.82 * smooth(RET - 0.12, RET + 0.16, t)));


function column(p, C, t) {
  const a = t - REL;
  if (a < 0 || t > GONE) return;
  const top = -TOP * ease.outExpo(clamp(a / 0.12)), bot = -TOP * ease.inCubic(seg(t, RET, GONE)), W = widthAt(t), k = 1 - smooth(RET, GONE, t);
  p.glowLine(0, top, 0, Math.min(bot, -34), W * 1.6 + 6, C[5], 0.2 * k + 0.06);
  p.glowLine(0, top, 0, Math.min(bot, -40), 5, WHITE, 0.18 * k);
  if (a < 0.04) {
    for (let y = Math.floor(top); y < bot; y++) {
      const wr = W * 0.55 * (1 - 0.3 * (-y / TOP));
      for (let x = Math.floor(-wr); x <= Math.ceil(wr); x++) p.dot(x, y, Math.abs(x + 0.5) < wr - 1.5 ? WHITE : C[6], clamp((y + TOP) / 20) * 1.5);
    }
    return;
  }
  for (let y = Math.ceil(top); y < Math.ceil(bot); y++) {
    const h = -y / TOP, fade = clamp((y + TOP) / 16) * (t < RET ? 1 : clamp((bot - y) / 10)), head = y - top < 3 && a < 0.16;
    const wr = W * (1 - 0.3 * h) + 0.9 * noise2(y * 0.2, t * 12, 3);
    for (const s of [-1, 1]) {
      const run = fract(y * 0.06 + t * 3.4 + (s > 0 ? 0.5 : 0)) < 0.78, xw = s * wr;
      p.dot(xw, y, head ? WHITE : run ? C[6] : C[5], fade * 1.4);
      p.dot(xw + s, y, C[4], fade * (run ? 0.5 : 0.25));
      if (run) p.dot(xw - s, y, C[5], fade * 1.2);
    }
    p.dot(0, y, WHITE, fade * 1.6);
    p.dot(-1, y, noise2(y * 0.3, t * 14, 5) > -0.2 ? WHITE : C[6], fade * 1.3);
    if (noise2(y * 0.25, t * 9, 8) > 0.25) p.dot(1, y, C[6], fade * 1.2);
    for (const S of STRANDS) {
      if (h > S.end) continue;
      const ph = fract((y + t * S.sp) / S.per + S.ph);
      if (ph > S.duty) continue;
      const u = ph / S.duty;
      p.px(S.x * wr, y, head || u < 0.2 ? WHITE : u < 0.65 ? C[7 - S.lvl] : C[6 - S.lvl]);
    }
  }
}

function plate(p, C, t, k) {
  if (k <= 0.02) return;
  const rx = 9 + 9 * k + Math.sin(t * 9), ry = 2.2;
  p.shade(-rx, -ry, rx, ry, (x, y, o) => {
    const dx = x / rx, dy = y / ry, d = Math.sqrt(dx * dx + dy * dy);
    if (d > 1) return;
    const u = d / Math.max(0.05, k);
    o.c = u < 0.3 ? WHITE : u < 0.55 ? C[6] : u < 0.8 ? C[5] : C[4];
    o.a = d < 0.6 * k ? 1 : k * (1 - d) * 2.2;
  });
  p.glow(0, -1, rx * 2.2, C[4], 0.35 * k);
}


function rays(p, C, t, k, cx, cy) {
  if (k <= 0.02) return;
  for (let i = 0; i < 20; i++) {
    const an = (i / 20) * TAU + 0.08, ca = Math.cos(an), sa = Math.sin(an), long = i % 2 === 0;
    if (Math.abs(sa) < 0.4) continue;
    const r0 = 1 / Math.sqrt((ca / 52) ** 2 + (sa / 12) ** 2) + 2 * k, len = (long ? 15 + 7 * rand(i, 9) : 7 + 4 * rand(i, 8)) * k;
    if (len < 1) continue;
    const sh = 0.75 + 0.25 * Math.sin(t * 7 + i * 2.1), x0 = cx + ca * r0, y0 = cy + sa * r0;
    p.line(x0, y0, x0 + ca * len, y0 + sa * len, (u) => (u < 0.3 ? C[7] : u < 0.6 ? C[6] : C[5]), (u) => sh * (u < 0.55 ? 1.3 : (1.3 * (1 - u)) / 0.45));
  }
}
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), A = o.actor, SHADOW = scale(C[0], 0.5);
  const ps = new Particles({ rng: R, ground: () => 0, sparks: [C[7], C[6], C[5], C[3]] }), lights = new Lights();

  const spawn = (k, x, y, vx, vy, life, ...rest) => ps.spawn(k, x, y, vx, vy, Math.min(life, meta.duration - 0.05 - t), ...rest);
  const word = spell(o.text), BASE = TY + 14, X0 = -word.w;
  const lets = word.letters.filter((L) => L.g).map((L, i) => ({ g: L.g, w: L.w, cx: X0 + (L.x + L.w / 2) * 2, born: DROP + i * STAG, pop: EXIT + i * 0.04, off: -18, v: 60, sq: 0, flash: 0, on: false, landed: false, rest: false, burst: false }));
  const right = X0 + word.w * 2;

  const sats = Array.from({ length: 8 }, (_, i) => {
    const s = i % 2 ? 1 : -1, x = s * R.range(20, 60), y = TY + 7 + (Math.abs(x) < 50 ? R.sign() * R.range(11, 18) : R.range(-14, 14));
    return { x, y, t0: SHINE - 0.1 + i * 0.13 + R.range(0, 0.05), dur: R.range(0.32, 0.5), L: R.range(3, 6) };
  });
  const halos = [];
  let t = 0, released = false, nextHalo = REL + 0.03, gather = 0;
  const rush = [];

  const drawRush = (p, back) => {
    for (const m of rush) {
      if (m.back !== back) continue;
      const sp = Math.hypot(m.vx, m.vy), ux = m.vx / sp, uy = m.vy / sp, L = m.len;
      p.line(m.x - ux * L, m.y - uy * L, m.x - ux * L * 0.4, m.y - uy * L * 0.4, m.c);
      p.line(m.x - ux * L * 0.35, m.y - uy * L * 0.35, m.x, m.y, WHITE);
      p.glow(m.x, m.y, 4, C[5], 0.25);
    }
  };
  return {
    update(dt) {
      t += dt;


      for (gather += t < REL ? dt * 420 : 0; gather >= 1; gather--) {
        const kind = R.next(), sp = R.range(140, 250) * (1 + t * 2);
        let x, y, tx, ty;
        if (kind < 0.42) {
          const an = R.range(0, TAU), D = R.range(22, 70);
          (x = Math.cos(an) * D), (y = -1 - Math.abs(Math.sin(an)) * D * 0.1), (tx = Math.cos(an) * 3), (ty = -1);
        } else if (kind < 0.84) {
          const an = R.range(0, TAU), D = R.range(34, 64);
          (x = Math.cos(an) * D), (y = Math.min(-3, -20 + Math.sin(an) * D * 0.85)), (tx = Math.cos(an) * 11), (ty = -20 + Math.sin(an) * 14);
        } else {
          if (t < REL * 0.4) continue;
          (x = R.range(-9, 9)), (y = -1), (tx = x * 0.7), (ty = -R.range(26, 44));
        }
        const dx = tx - x, dy = ty - y, l = Math.hypot(dx, dy) || 1;
        rush.push({ x, y, vx: (dx / l) * sp, vy: (dy / l) * sp, life: Math.min(l / sp, REL + 0.06 - t), len: R.range(5, 9), c: R.chance(0.45) ? C[6] : C[5], back: kind > 0.84 && R.chance(0.5) });
      }
      for (let i = rush.length - 1; i >= 0; i--) {
        const m = rush[i];
        if ((m.life -= dt) <= 0) rush.splice(i, 1);
        else (m.x += m.vx * dt), (m.y += m.vy * dt);
      }
      if (t < REL && R.chance(0.12)) spawn(P.STAR, R.range(-30, 30), -R.range(0, 3), 0, -R.range(10, 30), R.range(0.3, 0.5), C[6], 0.6);
      if (!released && t >= REL) {
        released = true;
        lights.add(0, -24, 90, C[5], 0.6, 0.7);
        lights.add(0, -8, 40, WHITE, 0.6, 0.12);

        for (let i = 0; i < 22; i++) {
          const an = (i / 22) * TAU + R.range(-0.12, 0.12), sp = R.range(260, 460);
          const y0 = -18 + Math.sin(an) * 8, vy = Math.sin(an) * sp * 0.8, life = Math.min(R.range(0.1, 0.2), vy > 0 ? -y0 / vy : vy < 0 ? (y0 + 104) / -vy : 1, 78 / Math.abs(Math.cos(an) * sp));
          spawn(P.MOTE, Math.cos(an) * 6, y0, Math.cos(an) * sp, vy, life, R.chance(0.4) ? C[7] : C[6], 1, 0, an > 0.3 && an < Math.PI - 0.3 ? PF.BACK : 0);
        }
        for (let i = 0; i < 26; i++) {
          const an = -Math.PI / 2 + R.range(-1.3, 1.3), sp = R.range(120, 290);
          spawn(P.SPARK, R.range(-5, 5), -2, Math.cos(an) * sp, Math.sin(an) * sp, R.range(0.35, 0.8));
        }
        for (let i = 0; i < 16; i++)
          spawn(P.STAR, R.range(-10, 10), R.range(-36, -4), R.range(-30, 30), -R.range(15, 60), R.range(0.6, 1.3), R.pick([C[7], C[6], C[5]]), R.chance(0.35) ? R.range(1.5, 2.6) : R.range(0.4, 0.9), 0, R.chance(0.4) ? PF.BACK : 0);
      }
      const W = widthAt(t);
      if (t >= nextHalo && t < RET - 0.1) halos.push(t), (nextHalo += 0.16);

      if (t > REL && t < RET + 0.1 && R.chance(0.5)) {
        const s = R.sign();
        const y = R.range(-4, -60), vy = -R.range(140, 260);
        spawn(P.MOTE, s * R.range(0.75, 1.6) * W, y, 0, vy, Math.min(R.range(0.16, 0.32), (y + 96) / -vy), R.chance(0.5) ? C[7] : C[6], R.range(0.6, 1), 0, R.chance(0.5) ? PF.BACK : 0);
      }

      if (t > REL && t < 2.4 && R.chance(0.14 * (1 - seg(t, 1.6, 2.4)))) {
        spawn(P.EMBER, R.range(-20, 20), -R.range(1, 30), R.range(-15, 15), -R.range(20, 55), R.range(0.8, 1.6), C[5], R.range(1, 2), 0, R.chance(0.4) ? PF.BACK : 0);
      }

      if (A && t > REL + 0.1 && t < 2.2 && R.chance(0.09)) {
        const m = A.mask;
        for (let n = 0; n < 12; n++) {
          const i = R.int(0, m.w - 1), j = R.int(0, m.h - 1);
          if (!m.data[j * m.w + i]) continue;
          spawn(P.STAR, A.x + i + 0.5, A.y + j + 0.5, R.range(-8, 8), -R.range(14, 34), R.range(0.6, 1.1), R.pick([C[7], C[6], C[5]]), R.chance(0.2) ? 1.5 : 0.6, 0, R.chance(0.5) ? PF.BACK : 0);
          break;
        }
      }

      if (t > 1.0 && t < 2.5 && R.chance(0.13)) {
        const up = R.chance(0.6), x = up ? R.range(-58, 58) : R.range(-20, 20), y = up ? TY + 7 + R.range(-16, 16) : R.range(-44, -6);
        spawn(P.STAR, x, y, R.range(-6, 6), -R.range(4, 14), R.range(0.4, 0.8), R.pick([C[7], C[6], C[6], C[5]]), R.chance(0.3) ? R.range(1.5, 2.4) : 0.6, 0, R.chance(0.3) ? PF.BACK : 0);
      }

      for (const L of lets) {
        if (t < L.born) continue;
        L.on = true;
        if (!L.rest) {
          L.v += 1700 * dt;
          L.off += L.v * dt;
          if (L.off >= 0 && L.v > 0) {
            L.off = 0;
            if (L.v > 110) {
              L.sq = 1;
              if (!L.landed) {
                L.landed = true;
                L.flash = 1;
                lights.add(L.cx, BASE - 7, 18, C[5], 0.55, 0.25);
                for (const s of [-1, 1]) spawn(P.STAR, L.cx + s * L.w, BASE - R.range(0, 3), s * R.range(15, 40), -R.range(5, 25), R.range(0.25, 0.45), C[6], R.range(0.5, 1.2));
              }
              L.v = -L.v * 0.3;
            } else (L.v = 0), (L.rest = true);
          }
        }
        L.sq = Math.max(0, L.sq - dt / 0.1);
        L.flash = Math.max(0, L.flash - dt / 0.12);
        if (!L.burst && t >= L.pop + 0.06) {
          L.burst = true;
          for (let i = 0; i < 3; i++) {
            const an = R.range(0, TAU), sp = R.range(20, 55);
            spawn(P.STAR, L.cx + R.range(-3, 3), BASE - 7 + R.range(-4, 4), Math.cos(an) * sp, Math.sin(an) * sp - 15, R.range(0.3, 0.6), R.pick([C[7], C[6]]), i ? 0.6 : R.range(1.2, 2));
          }
        }
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      rays(p, C, t, ease.outExpo(seg(t, LANDED, LANDED + 0.2)) * (1 - ease.inQuad(seg(t, EXIT - 0.15, EXIT + 0.1))), 0, TY + 7);
      if (t < REL) {
        const k = seg(t, 0.02, REL);
        band(p, 0, 0, 4 + 52 * (1 - ease.inQuad(k)), 0.2, 1.5, k * 1.1, C, (g) => Math.sin(g) < 0);
      }
      for (const [d, r1, th] of [[0, 72, 4], [0.08, 46, 2.5]]) {
        const k = (t - REL - d) / 0.55;
        if (k > 0 && k < 1) band(p, 0, 0, 5 + r1 * ease.outCubic(k), 0.2, Math.max(1, th * (1 - k)), 1.15 - k, C, (g) => Math.sin(g) < 0, k < 0.15);
      }
      for (const h0 of halos) {
        const k = (t - h0) / 0.6;
        if (k > 0 && k < 1) band(p, 0, -2 - 72 * ease.outQuad(k), (widthAt(t) * 1.45 + 4) * (1 - 0.4 * k), 0.3, 1.5, (1 - k) * 1.4, C, (g) => Math.sin(g) < 0, k < 0.12);
      }
      column(p, C, t);
      plate(p, C, t, t < REL ? 0.55 * seg(t, 0.05, REL) : 1 - smooth(RET - 0.1, GONE + 0.2, t));
      ps.draw(p, "back");
      drawRush(p, true);
    },
    draw(p) {

      if (t < REL) {
        const k = seg(t, 0.02, REL);
        band(p, 0, 0, 4 + 52 * (1 - ease.inQuad(k)), 0.2, 1.5, k * 1.1, C, (g) => Math.sin(g) >= 0);
      }
      for (const [d, r1, th] of [[0, 72, 4], [0.08, 46, 2.5]]) {
        const k = (t - REL - d) / 0.55;
        if (k > 0 && k < 1) band(p, 0, 0, 5 + r1 * ease.outCubic(k), 0.2, Math.max(1, th * (1 - k)), 1.15 - k, C, (g) => Math.sin(g) >= 0, k < 0.15);
      }
      for (const h0 of halos) {
        const k = (t - h0) / 0.6;
        if (k > 0 && k < 1) band(p, 0, -2 - 72 * ease.outQuad(k), (widthAt(t) * 1.45 + 4) * (1 - 0.4 * k), 0.3, 1.5, (1 - k) * 1.4, C, (g) => Math.sin(g) >= 0, k < 0.12);
      }

      const lit = smooth(REL - 0.02, REL + 0.04, t) * (1 - smooth(RET, 2.5, t));
      tintActor(p, A, t < REL ? 0 : t < REL + 0.06 ? 1 : Math.exp(-(t - REL - 0.06) / 0.07), [C[4], C[5], C[6]]);
      lightActor(p, A, C[5], 0.1 * seg(t, 0.05, REL) * (1 - lit) + 0.06 * lit, 0.6 * lit, t);
      haloActor(p, A, C[5], 0.85 * lit * (1 - smooth(RET, GONE + 0.3, t)) + 0.3 * lit, t);

      if (t < REL) {
        const k = seg(t, 0.05, REL), beat = 1 + 0.4 * Math.exp(-((t - REL * 0.6) ** 2) / 0.001);
        sparkle(p, 0, -2, (1 + 4 * k * k) * beat, C[6], C[5], 0.3 + 0.4 * k);
      } else if (t < REL + 0.22) {
        const a = (t - REL) / 0.22;
        flare(p, 0, -4, 28 * Math.pow(1 - a, 1.5), 1 - a, C);
        p.glow(0, -16, 48, WHITE, 0.3 * (1 - a));
      }
      ps.draw(p, "front");
      drawRush(p, false);

      const items = [], done = (t - LANDED) / 0.12;
      for (const L of lets) {
        if (!L.on) continue;
        let sx = 2, sy = 2, flash = L.flash;
        if (!L.landed && L.v > 150) (sx = 1.8), (sy = 2.3);
        if (L.sq > 0) (sx = 2 * (1 + 0.22 * L.sq)), (sy = 2 * (1 - 0.22 * L.sq));
        const pu = (t - L.pop) / 0.07, hop = seg(t, L.pop - 0.1, L.pop);
        if (pu >= 1) continue;
        if (hop > 0 && pu <= 0) (sx = 2 * (1 - 0.1 * hop)), (sy = 2 * (1 + 0.15 * hop));
        if (pu > 0) (sx = sy = 2 * (1 + 0.3 * pu)), (flash = 1);
        flash = Math.max(flash, done > 0 && done < 1 ? 1 - done : 0);
        const h = 7 * sy, w = L.w * sx;
        items.push({ g: L.g, x: L.cx - w / 2, y: BASE + L.off - h - 3 * ease.outQuad(hop), sx, sy, a: clamp((t - L.born) / 0.05), flash });
      }
      const sh = seg(t, SHINE, SHINE + 0.34), shine = sh > 0 && sh < 1 ? X0 - 14 + (right - X0 + 30) * ease.inOutSine(sh) : null;
      drawWord(p, items, { fill: [C[3], C[4], C[5], C[6]], edge: WHITE, under: C[2], outline: C[0], shadow: SHADOW, shine, shineY: TY, glint: C[6] });
      if (shine !== null && shine > X0 && shine < right) p.glowLine(shine, TY, shine + 8.4, BASE, 9, C[6], 0.3);
      const hold = smooth(0.9, 1.2, t) * (1 - smooth(EXIT, EXIT + 0.4, t));
      if (hold > 0) p.glow(0, TY + 7, 50, C[5], 0.22 * hold + (done > 0 && done < 1 ? 0.3 * (1 - done) : 0));

      for (const L of lets) {
        const u = (t - L.pop - 0.07) / 0.16;
        if (u > 0 && u < 1) sparkle(p, L.cx, BASE - 7, 6 * (1 - u) * (1 - u), C[6], C[5], 0.5);
      }

      const g = (t - SHINE - 0.3) / 0.26;
      if (g > 0 && g < 1) sparkle(p, right - 2, TY + 1, 7 * Math.sin(g * Math.PI), C[6], C[5], 0.6);
      for (const s of sats) {
        const u = (t - s.t0) / s.dur;
        if (u > 0 && u < 1) sparkle(p, s.x, s.y, s.L * Math.pow(Math.sin(u * Math.PI), 0.7), C[6], C[5], 0.5);
      }
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"spell",{enumerable:true,configurable:true,get:()=>spell});Object.defineProperty(__e,"drawWord",{enumerable:true,configurable:true,get:()=>drawWord});Object.defineProperty(__e,"tintActor",{enumerable:true,configurable:true,get:()=>tintActor});Object.defineProperty(__e,"lightActor",{enumerable:true,configurable:true,get:()=>lightActor});Object.defineProperty(__e,"haloActor",{enumerable:true,configurable:true,get:()=>haloActor});Object.defineProperty(__e,"panel",{enumerable:true,configurable:true,get:()=>panel});Object.defineProperty(__e,"HEART",{enumerable:true,configurable:true,get:()=>HEART});Object.defineProperty(__e,"heartPal",{enumerable:true,configurable:true,get:()=>heartPal});Object.defineProperty(__e,"shake",{enumerable:true,configurable:true,get:()=>shake});
const __i07v8ec=__r(1);const FONTS=__i07v8ec.FONTS;const WHITE=__i07v8ec.WHITE;const luma=__i07v8ec.luma;const noise=__i07v8ec.noise;const mix=__i07v8ec.mix;
function spell(str, font = "big") {
  const F = FONTS[font], letters = [];
  let x = 0;
  for (const ch of String(str)) {
    const g = F.glyphs[ch] ?? F.glyphs[ch.toUpperCase()] ?? null;
    const w = g ? g.w : F.space;
    letters.push({ ch, g, x, w, h: F.h });
    x += w + F.gap;
  }
  return { letters, w: Math.max(0, x - F.gap), h: F.h };
}

let ids = new Int16Array(4096), edges = new Uint8Array(4096);
function drawWord(p, items, st) {
  if (!items.length) return;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const it of items) {
    const h = it.g.rows.length * it.sy, w = it.g.w * it.sx, sl = Math.abs(it.slant ?? 0) * it.g.rows.length;
    x0 = Math.min(x0, it.x - sl); x1 = Math.max(x1, it.x + w + sl);
    y0 = Math.min(y0, it.y); y1 = Math.max(y1, it.y + h);
  }
  const ow = st.ow ?? 1;
  x0 = Math.floor(x0) - 1 - ow; y0 = Math.floor(y0) - 1 - ow; x1 = Math.ceil(x1) + 2 + ow; y1 = Math.ceil(y1) + 3 + ow;
  const W = x1 - x0, H = y1 - y0;
  if (W * H > ids.length) (ids = new Int16Array(W * H * 2)), (edges = new Uint8Array(W * H * 2));
  ids.fill(0, 0, W * H);
  items.forEach((it, k) => {
    const g = it.g, gh = g.rows.length, h = gh * it.sy, bot = it.y + h, sl = it.slant ?? 0;
    for (let py = Math.floor(it.y); py < Math.ceil(bot); py++) {
      const gy = Math.floor((py + 0.5 - it.y) / it.sy);
      if (gy < 0 || gy >= gh) continue;
      const shift = Math.round(((bot - py - 0.5) / it.sy) * sl);
      const ry = py + 0.5 - it.y - gy * it.sy, row = g.rows[gy];
      for (let px = Math.floor(it.x + shift) - 1; px <= Math.ceil(it.x + shift + g.w * it.sx); px++) {
        const fx = px + 0.5 - it.x - shift, gx = Math.floor(fx / it.sx);
        if (gx < 0 || gx >= g.w || !row[gx]) continue;
        const i = (py - y0) * W + (px - x0);
        if (i < 0 || i >= W * H) continue;
        ids[i] = k + 1;


        const rx = fx - gx * it.sx, up = gy > 0 ? g.rows[gy - 1] : null, dn = gy < gh - 1 ? g.rows[gy + 1] : null;
        const open = (r) => !r || (!r[gx] && !r[gx - 1] && !r[gx + 1]);
        edges[i] = (ry < 1 && open(up) ? 1 : 0) | (ry >= it.sy - 1 && open(dn) ? 2 : 0) | (rx < 1 && !(gx > 0 && row[gx - 1]) ? 4 : 0);
      }
    }
  });
  const at = (x, y) => (x < x0 || y < y0 || x >= x1 || y >= y1 ? 0 : ids[(y - y0) * W + (x - x0)]);
  const F = st.fill, nF = F.length, shine = st.shine, glint = st.glint ?? WHITE, sy0 = st.shineY ?? y0;
  for (let y = y0; y < y1; y++)
    for (let x = x0; x < x1; x++) {
      const id = at(x, y);
      if (id) {
        const it = items[id - 1], v = (y + 0.5 - it.y) / (it.g.rows.length * it.sy);
        let i = Math.min(nF - 1, Math.max(0, Math.floor((1 - v) * nF)));
        let c = F[i];
        const e = edges[(y - y0) * W + (x - x0)];
        if (e & 1) c = st.edge ?? F[nF - 1];
        else if (e & 2) c = st.under ?? F[0];
        else if (e & 4 && i < nF - 1) c = F[i + 1];
        if (shine !== undefined && shine !== null) {
          const d = Math.abs(x + 0.5 - (y + 0.5 - sy0) * 0.6 - shine);
          if (d < 1.1) c = WHITE;
          else if (d < 2.4) c = glint;
        }

        if (it.flash > 0.6 || (it.flash > 0.25 && v < 0.5)) c = WHITE;
        p.dot(x, y, c, it.a ?? 1);
        continue;
      }

      let n = 0;
      for (let dy = -ow; dy <= ow && !n; dy++) for (let dx = -ow; dx <= ow && !n; dx++) if (ow < 2 || Math.abs(dx) + Math.abs(dy) < 4) n = at(x + dx, y + dy);
      if (n) {
        p.dot(x, y, st.outline, items[n - 1].a ?? 1);
        continue;
      }
      const s = at(x - ow, y - 1 - ow) || at(x + 1 - ow, y - 1 - ow) || at(x - ow, y - ow);
      if (s && st.shadow) p.dot(x, y, st.shadow, (items[s - 1].a ?? 1) * 0.9);
    }
}
function tintActor(p, A, k, ramp) {
  if (!A || k <= 0.12) return;
  const m = A.mask, pix = A.pixels, cut = k > 0.6 ? 0 : k > 0.3 ? 0.22 : 0.5;
  for (let j = 0; j < m.h; j++)
    for (let i = 0; i < m.w; i++) {
      const q = j * m.w + i;
      if (!m.data[q]) continue;
      const l = pix ? luma(pix[q]) : 0.6;
      if (l < cut) continue;
      p.px(A.x + i, A.y + j, l > 0.5 ? (k > 0.8 ? WHITE : ramp[2]) : l > 0.22 ? ramp[1] : ramp[0]);
    }
}
function lightActor(p, A, c, k, rim = 0, t = 0) {
  if (!A || (k <= 0.01 && rim <= 0.01)) return;
  const m = A.mask, pix = A.pixels, has = (i, j) => i >= 0 && j >= 0 && i < m.w && j < m.h && m.data[j * m.w + i];
  for (let j = 0; j < m.h; j++)
    for (let i = 0; i < m.w; i++) {
      if (!m.data[j * m.w + i]) continue;
      if (k > 0.01) p.light(A.x + i, A.y + j, c, k * (1.1 - (0.5 * j) / m.h));
      if (rim <= 0.01 || !has(i - 1, j) || !has(i + 1, j) || !has(i, j - 1)) continue;
      if (has(i - 2, j) && has(i + 2, j) && has(i, j - 2)) continue;
      const f = rim * (0.75 + 0.35 * noise(j * 0.6 - t * 8, i * 3));
      if (f > 0.25) p.px(A.x + i, A.y + j, mix(pix ? pix[j * m.w + i] || c : c, c, Math.min(0.85, f)));
    }
}
function haloActor(p, A, c, k, t = 0) {
  if (!A || k <= 0.02) return;
  p.outline(A.mask, A.x, A.y, c, (mx, my) => k * (0.75 + 0.45 * noise(my * 0.45 - t * 7, mx * 3)));
}
function panel(p, x, y, w, h, col, { r = 3, a = 1, shine = null } = {}) {
  if (w < 2 || h < 2) return;
  const X1 = x + w, Y1 = y + h;
  p.shade(x, y, X1, Y1, (px, py, o) => {
    const cx = Math.max(x + r - px, 0, px - (X1 - r)), cy = Math.max(y + r - py, 0, py - (Y1 - r));
    const e = cx > 0 && cy > 0 ? r - Math.hypot(cx, cy) : Math.min(px - x, X1 - px, py - y, Y1 - py);
    if (e < 0) return;
    o.a = a;
    if (e < 1) return col.outline;
    if (py - y < 2) return col.rim;
    if (Y1 - py < 2) return col.low;
    if (shine !== null) {
      const d = Math.abs(px - (py - y) * 0.6 - shine);
      if (d < 1.3) return WHITE;
      if (d < 3) return col.rim;
    }
    return py - y < h * 0.45 ? col.top : col.body;
  });
}
const HEART = [
  "..kkk...kkk..",
  ".khhok.khook.",
  "khwhookoooomk",
  "khwoooooooomk",
  "khoooooooommk",
  "kooooooooomdk",
  ".kooooooomdk.",
  "..kooooomdk..",
  "...kooomdk...",
  "....komdk....",
  ".....kdk.....",
  "......k......",
];
const heartPal = (C) => ({ k: C[0], w: WHITE, h: C[5], o: C[4], m: C[3], d: C[2] });
function shake(t, amp, t0 = 0, len = 0.3, seed = 1, hz = 32) {
  if (t < t0 || t > t0 + len) return [0, 0];
  const k = 1 - (t - t0) / len;
  return [Math.round(noise(t * hz, seed) * amp * k * 1.7), Math.round(noise(t * hz, seed + 7) * amp * k * 1.3)];
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"drawBack",{enumerable:true,configurable:true,get:()=>drawBack});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __isxqp4b=__r(1);const fit=__isxqp4b.fit;const clamp=__isxqp4b.clamp;const smooth=__isxqp4b.smooth;const ease=__isxqp4b.ease;const rand=__isxqp4b.rand;const cycle=__isxqp4b.cycle;const band=__isxqp4b.band;const flare=__isxqp4b.flare;const TAU=__isxqp4b.TAU;const WHITE=__isxqp4b.WHITE;const hex=__isxqp4b.hex;const mix=__isxqp4b.mix;const scale=__isxqp4b.scale;
const __iss51yf=__r(76);const Layer=__iss51yf.Layer;const glint=__iss51yf.glint;const pool=__iss51yf.pool;const blobShadow=__iss51yf.blobShadow;
const meta = {
  name: "Loot beam",
  desc: "A dropped sword in a tall pillar of rarity light: a white core thinning to the sky, rings pulsing across the floor, motes streaming up, a glint racing up the shaft.",
  tags: ["pickup", "loot", "beam", "rarity", "drop", "item", "loop"],
  size: [96, 176],
  origin: [48, 162],
  duration: 2.4,
  loop: true,
  fps: 30,
  bg: "ground",
  options: {
    palette: ["#140a24", "#2c1250", "#4b1d86", "#7330c0", "#a050f0", "#c890ff", "#ecd4ff", "#ffffff"],
    seed: 4,
  },
};
const H = 150, RINGS = [0.08, 0.58];
const STEEL = ["#151726", "#2c3149", "#4f5775", "#8a93b3", "#d6dcef", "#ffffff"].map(hex);
const GOLD = ["#3a2008", "#7a4a10", "#b8801c", "#e8b432", "#ffe27a", "#fff6cc"].map(hex);
const LEATHER = ["#1e0f0e", "#3e2016", "#633620"].map(hex);
const INK = hex("#0d0b14");
const L = new Layer(40, 24);

const since = (ph, k) => (((ph - RINGS[k]) % 1) + 1) % 1;



const OX = 4, axis = (x) => Math.floor(-4 + (x + 4) / 7 + 0.5);
function sword(p, C, ph) {
  const edgeLit = (x) => (Math.abs(x + OX - 0.5) < 6 ? C[6] : mix(STEEL[4], C[6], 0.45));
  L.begin(-16, -12);
  L.set = ((set) => (x, y, c) => set.call(L, x + OX, y, c))(Object.getPrototypeOf(L).set);
  for (let x = -11; x <= 10; x++) {
    const a = axis(x);
    if (x <= -9) {

      const m = x + 10;
      if (m === 0) L.set(x, a - 1, C[6]), L.set(x, a, WHITE), L.set(x, a + 1, C[4]);
      else L.set(x, a, m < 0 ? C[5] : C[3]);
    } else if (x <= -5) {

      L.set(x, a, LEATHER[x % 2 ? 2 : 1]);
      L.set(x, a + 1, LEATHER[x % 2 ? 1 : 0]);
    } else if (x <= -3) {

      for (let y = a - 3; y <= a + 3; y++) {
        const end = y === a - 3 || y === a + 3;
        L.set(x, y, y === a ? (x === -4 ? C[6] : C[4]) : x === -4 ? (end ? GOLD[3] : mix(GOLD[4], C[6], 0.3)) : end ? GOLD[0] : GOLD[1]);
      }
    } else {


      const tip = x - 8;
      if (tip < 1) L.set(x, a - 1, edgeLit(x));
      if (tip < 2) L.set(x, a, tip === 1 ? edgeLit(x) : mix(STEEL[3], C[4], 0.2));
      L.set(x, a + 1, tip === 2 ? STEEL[2] : STEEL[0]);
    }
  }
  delete L.set;
  L.outline(INK).draw(p);

  const g = (ph - 0.72) / 0.16;
  if (g > 0 && g < 1) {
    const x = -1 + 9 * ease.inOutSine(g);
    glint(p, x + OX, axis(Math.round(x)) - 1, 2.6 * Math.sin(g * Math.PI), WHITE, 0.5);
  }
}
function drawBack(p, t, o) {
  const C = fit(o.palette, 8), T = meta.duration, ph = t / T;

  pool(p, 0.5, 0, 34, 5, C[4], 0.14);

  p.shade(-30, -0.5, 31, 6, (x, y, out) => {
    const dx = (x - 0.5) / 30, dy = y / 6, d = dx * dx + dy * dy;
    if (d >= 1) return;
    out.l = C[5];
    out.k = 0.4 * (1 - Math.sqrt(d)) ** 2;
  });
  for (let x = -16; x <= 16; x++) {
    const q = Math.abs(x) / 16.5, a = 1.35 - q * 1.25;
    p.dot(x, 0, q < 0.3 ? WHITE : q < 0.6 ? C[6] : C[5], a);
    if (q < 0.75) p.dot(x, 1, q < 0.3 ? C[6] : q < 0.55 ? C[5] : C[4], a * 0.8);
    if (q < 0.4) p.dot(x, 2, C[4], a * 0.5);
  }

  for (let k = 0; k < RINGS.length; k++) ring(p, C, since(ph, k) * T, true);
  column(p, C, t, T);
}
function draw(p, t, o) {
  const C = fit(o.palette, 8), T = meta.duration, ph = t / T;

  blobShadow(p, OX - 0.5, 12.5, 0.95);
  sword(p, C, ph);
  for (let k = 0; k < RINGS.length; k++) ring(p, C, since(ph, k) * T, false);
  motes(p, C, t, T, o.seed);
}

function ring(p, C, a, back) {
  const L1 = 1.1, k = a / L1;
  if (k >= 1) return;
  const r = 3 + 24 * ease.outCubic(k), th = Math.max(1, 3.2 * (1 - k));
  band(p, 0.5, 0, r, 0.2, th, Math.min(1, 1.25 * (1 - k)), [C[2], C[4], C[5], C[6]], (g) => Math.sin(g) < 0 === back, k < 0.12);
  if (!back) for (const s of [-1, 1]) p.glow(0.5 + s * r, -1, 8, C[5], 0.35 * (1 - k));
}


function column(p, C, t, T) {
  const ph = t / T;
  let beat = 0;
  for (let k = 0; k < RINGS.length; k++) {
    const s = since(ph, k) * T;
    beat = Math.max(beat, Math.exp(-s * 7) * (s < 0.5 ? 1 : 0), Math.exp(-((T - s) * 30)));
  }

  const gq = (ph - 0.22) / 0.42, gh = gq > 0 && gq < 1 ? 4 + (H - 4) * ease.inQuad(gq) : -100;
  const shimmer = Math.floor(ph * 24);
  for (let y = -1; y >= -H; y--) {
    const h = -y - 0.5, u = h / H, fade = 1 - smooth(0.25, 1, u);

    const w = (4.2 * (1 - 0.45 * u) + 3.2 * Math.exp(-h / 7)) * (1 + 0.2 * beat);

    const seg = Math.floor(h / 3 + rand(Math.floor(h / 9), 5) * 2), flick = Math.floor(ph * 12);
    if (u > 0.66 && rand(seg, flick, 7) > 1.75 - u * 1.65) continue;
    const thread = u > 0.58 && rand(seg, flick, 9) < (u - 0.58) * 3;
    const climb = ((h / 30 - ph * 3) % 1 + 1) % 1 < 0.1 ? 1 : 0, trail = gh - h > 0 && gh - h < 18 ? 1 - (gh - h) / 18 : 0;
    const X = thread ? 0 : Math.ceil(w * 1.6);
    for (let x = -X; x <= X; x++) {
      const q = Math.abs(x) / w;
      const cw = 0.2 + 0.18 * (1 - smooth(0, 0.5, u));
      let lvl = q < cw ? 0 : q < 0.47 ? 1 : q < 0.72 ? 2 : q < 1 ? 3 : 4;
      for (let s = 0; s < 3; s++) {
        const sx = (s - 1) * w * 0.55 + Math.sin(h * 0.09 + ph * TAU * (s + 1) + s * 2) * 0.9;
        if (Math.abs(x - sx) < 0.5) lvl = Math.max(0, lvl - 1);
      }
      if (rand(y, shimmer, 3) < 0.05 && lvl > 0) lvl--;
      if (q < 0.72) lvl = Math.max(0, lvl - climb - (trail > 0.3 ? 1 : 0));

      const a = lvl <= 2 ? 1 : ((1.55 - q) / 0.75) * fade * 1.2;
      if (a <= 0) continue;
      p.dot(x, y, thread ? (u > 0.85 ? C[6] : WHITE) : lvl === 0 ? (u > 0.8 ? C[6] : WHITE) : C[7 - lvl], a);
    }

    const near = smooth(8, 20, h);
    if ((y & 3) === 0) p.glow(0.5, y, w * 2.6 + 6, C[5], 0.36 * near * (0.3 + 0.7 * fade) * (1 + 0.4 * beat));
    if ((y & 15) === 0) p.glow(0.5, y, 34, C[4], 0.2 * near * (0.25 + 0.75 * fade));
  }
  if (gh > 0) {
    glint(p, 0, -gh, 3.5 * (1 - gq * 0.5), C[6], 0.6);
    p.glow(0.5, -gh, 14, C[5], 0.45);
  }

  flare(p, 0.5, -5, 8 + 3 * beat + Math.sin(ph * TAU * 4) * 0.8, 0.6 + 0.4 * beat, C);
  p.glow(0.5, -16, 16, C[4], 0.12 + 0.25 * beat);
}

function motes(p, C, t, T, seed) {
  cycle(t, T, 30, seed, (g) => g.range(1.0, 2.2), (age, life, r) => {
    const inner = r.chance(0.3), side = r.sign(), x0 = inner ? r.range(-3, 3) : side * r.range(4, 15), vy = r.range(22, 52) * (inner ? 1.5 : 1);
    const x = x0 + Math.sin(age * r.range(1.5, 3.5) + r.range(0, TAU)) * 1.6, y = -r.range(1, 10) - vy * age;
    const k = Math.min(1, age / 0.25, (life - age) / 0.5);
    if (k <= 0 || y < -H) return;
    if (r.chance(0.22)) {
      const tw = 0.5 + 0.5 * Math.sin(age * r.range(9, 14) + r.range(0, TAU));
      if (tw * k > 0.3) glint(p, x, y, tw > 0.75 ? 2 : 1, C[6], 0.4 * k);
      return;
    }
    p.dot(x, y, inner ? WHITE : C[6], k * 1.5);
    p.dot(x, y + 1, inner ? C[6] : C[4], k);
    p.dot(x, y + 2, C[3], k * 0.6);
    p.glow(x + 0.5, y + 0.5, 3.5, C[5], 0.35 * k);
  });
}
},
function(__e){Object.defineProperty(__e,"fit",{enumerable:true,configurable:true,get:()=>fit});Object.defineProperty(__e,"Layer",{enumerable:true,configurable:true,get:()=>Layer});Object.defineProperty(__e,"shadow",{enumerable:true,configurable:true,get:()=>shadow});Object.defineProperty(__e,"twinkle",{enumerable:true,configurable:true,get:()=>twinkle});Object.defineProperty(__e,"bob",{enumerable:true,configurable:true,get:()=>bob});Object.defineProperty(__e,"pillow",{enumerable:true,configurable:true,get:()=>pillow});Object.defineProperty(__e,"heartSdf",{enumerable:true,configurable:true,get:()=>heartSdf});Object.defineProperty(__e,"blobShadow",{enumerable:true,configurable:true,get:()=>blobShadow});Object.defineProperty(__e,"glint",{enumerable:true,configurable:true,get:()=>glint});Object.defineProperty(__e,"pool",{enumerable:true,configurable:true,get:()=>pool});Object.defineProperty(__e,"coin",{enumerable:true,configurable:true,get:()=>coin});Object.defineProperty(__e,"gemlet",{enumerable:true,configurable:true,get:()=>gemlet});Object.defineProperty(__e,"brilliant",{enumerable:true,configurable:true,get:()=>brilliant});Object.defineProperty(__e,"prism",{enumerable:true,configurable:true,get:()=>prism});Object.defineProperty(__e,"drawGem",{enumerable:true,configurable:true,get:()=>drawGem});Object.defineProperty(__e,"coin3d",{enumerable:true,configurable:true,get:()=>coin3d});
const __id59rgr=__r(1);const createFrame=__id59rgr.createFrame;const Painter=__id59rgr.Painter;const TAU=__id59rgr.TAU;const WHITE=__id59rgr.WHITE;const hex=__id59rgr.hex;const ramp=__id59rgr.ramp;const scale=__id59rgr.scale;const rand=__id59rgr.rand;
function fit(palette, n = 8) {
  const r = ramp(palette);
  if (!r.length) return Array(n).fill(WHITE);
  if (r.length >= n - 1) {
    while (r.length < n) r.push(r[r.length - 1]);
    return r;
  }
  return Array.from({ length: n }, (_, i) => r[Math.round((i * (r.length - 1)) / (n - 1))]);
}
class Layer {
  constructor(w = 64, h = 64) {
    this.f = createFrame(w, h);
    this.q = new Painter(this.f);
    this.tmp = new Uint32Array(w * h);
  }
  begin(x0, y0) {
    const f = this.f;
    f.ox = Math.floor(x0);
    f.oy = Math.floor(y0);
    f.color.fill(0);
    f.light.fill(0);
    return this.q.reset().place(0, 0);
  }
  idx(x, y) {
    const f = this.f, i = Math.floor(x) - f.ox, j = Math.floor(y) - f.oy;
    return i < 0 || j < 0 || i >= f.w || j >= f.h ? -1 : j * f.w + i;
  }
  get(x, y) {
    const i = this.idx(x, y);
    return i < 0 ? 0 : this.f.color[i];
  }
  set(x, y, c) {
    const i = this.idx(x, y);
    if (i >= 0) this.f.color[i] = c;
  }
  fill(x0, y0, x1, y1, fn) {
    for (let y = Math.floor(y0); y <= y1; y++)
      for (let x = Math.floor(x0); x <= x1; x++) {
        const c = fn(x + 0.5, y + 0.5);
        if (c) this.set(x, y, c);
      }
  }
  outline(c, corners = false) {
    const f = this.f, C = f.color, T = this.tmp, w = f.w, h = f.h;
    T.fill(0);
    for (let j = 0; j < h; j++)
      for (let i = 0; i < w; i++) {
        const k = j * w + i;
        if (C[k]) continue;
        let n = (i > 0 && C[k - 1]) || (i < w - 1 && C[k + 1]) || (j > 0 && C[k - w]) || (j < h - 1 && C[k + w]);
        if (!n && corners) n = (i > 0 && j > 0 && C[k - w - 1]) || (i < w - 1 && j > 0 && C[k - w + 1]) || (i > 0 && j < h - 1 && C[k + w - 1]) || (i < w - 1 && j < h - 1 && C[k + w + 1]);
        if (n) T[k] = typeof c === "function" ? c(i + f.ox, j + f.oy, n) : c;
      }
    for (let k = 0; k < w * h; k++) if (T[k]) C[k] = T[k];
    return this;
  }
  map(fn) {
    const f = this.f, C = f.color;
    for (let k = 0; k < C.length; k++) if (C[k]) C[k] = fn((k % f.w) + f.ox, Math.floor(k / f.w) + f.oy, C[k]) || C[k];
    return this;
  }
  draw(p, dx = 0, dy = 0, a = 1, clip = null) {
    const f = this.f, C = f.color;
    for (let k = 0; k < C.length; k++) {
      if (!C[k]) continue;
      const x = (k % f.w) + f.ox + dx;
      if (clip && (x < clip[0] || x >= clip[1])) continue;
      p.dot(x, Math.floor(k / f.w) + f.oy + dy, C[k], a);
    }
    return this;
  }
}
const SHADOW = hex("#100e17");
function shadow(p, x, rx, k = 1) {
  if (rx < 1) return;
  for (let row = 0; row < 2; row++) {
    const w = rx - row * 2;
    for (let i = Math.floor(x - w); i < Math.ceil(x + w); i++) {
      const e = Math.abs(i + 0.5 - x) / w;
      if (e <= 1) p.dot(i, row, SHADOW, row ? k : k * (e < 0.8 ? 1 : 0.5));
    }
  }
}
function twinkle(p, x, y, s, c, mid = c, core = WHITE) {
  s = Math.round(s);
  if (s <= 0) return;
  for (let d = 1; d <= s - 1; d++) {
    const k = d < s / 2 ? mid : c;
    p.px(x + d, y, k), p.px(x - d, y, k), p.px(x, y + d, k), p.px(x, y - d, k);
  }
  if (s >= 4) p.px(x + 1, y + 1, c), p.px(x - 1, y - 1, c), p.px(x + 1, y - 1, c), p.px(x - 1, y + 1, c);
  p.px(x, y, core);
}
const bob = (ph, amp, n = 1, off = 0) => -amp * Math.sin((ph * n + off) * TAU);
function pillow(L, x0, y0, x1, y1, sdf, color, { bevel = 3, light = [-0.5, -0.6, 0.62], clip = null } = {}) {
  L.fill(x0, y0, x1, y1, (x, y) => {
    const d = sdf(x, y);
    if (d > 0 || (clip && clip(x, y))) return 0;
    const e = -d;
    let gx = sdf(x + 0.5, y) - sdf(x - 0.5, y), gy = sdf(x, y + 0.5) - sdf(x, y - 0.5);
    const gl = Math.hypot(gx, gy) || 1;
    gx /= gl;
    gy /= gl;
    const k = Math.max(0, 1 - e / bevel) * 1.25, sn = Math.sin(k), cs = Math.cos(k);
    return color(gx * sn * light[0] + gy * sn * light[1] + cs * light[2], e, x, y);
  });
}
function heartSdf(x, y, cx, cy, w, h = w) {
  const S = w / 1.14, X = (x - cx) / S, Y = -(y - cy) / (h / 1.14) + 0.12;
  const q = X * X + Y * Y - 1, f = q * q * q - X * X * Y * Y * Y;
  const gx = 6 * X * q * q - 2 * X * Y * Y * Y, gy = 6 * Y * q * q - 3 * X * X * Y * Y;
  return (f / Math.max(Math.hypot(gx, gy), 0.6)) * S;
}

const INK = hex("#0b0814");
function blobShadow(p, x, rx, k = 1, y = 0) {
  if (rx < 0.8 || k <= 0) return;
  for (let i = Math.floor(x - rx); i <= Math.ceil(x + rx); i++) {
    const u = Math.abs(i + 0.5 - x) / rx;
    if (u > 1) continue;
    const a = k * (1 - u * u);
    p.dot(i, y, INK, a * 1.1);
    if (u < 0.6) p.dot(i, y + 1, INK, a * 0.6);
  }
}
function glint(p, x, y, arm, c, k = 0.4, tip = scale(c, 0.8)) {
  const n = Math.round(arm), X = Math.floor(x), Y = Math.floor(y);
  if (n < 0) return;
  for (let d = 1; d <= n; d++) {
    const cc = d === n && n > 1 ? tip : c;
    p.px(X + d, Y, cc), p.px(X - d, Y, cc), p.px(X, Y + d, cc), p.px(X, Y - d, cc);
  }
  p.px(X, Y, n > 0 ? WHITE : c);
  p.glow(X + 0.5, Y + 0.5, 3 + n * 2.5, c, k);
}
function pool(p, x, y, rx, ry, c, k) {
  if (k <= 0.004 || rx < 1) return;
  p.shade(x - rx, y - ry, x + rx, y + ry, (px, py, out) => {
    const dx = (px - x) / rx, dy = (py - y) / ry, d = dx * dx + dy * dy;
    if (d >= 1) return;
    const f = 1 - Math.sqrt(d);
    out.l = c;
    out.k = f * f * k;
  });
}
function coin(L, p, x, y, r, ax, spin, C, white = false, a = 1, snap = true) {
  const X = snap ? Math.round(x) : x, Y = snap ? Math.round(y) : y, cs = Math.cos(spin), sn = Math.sin(spin);
  const b = Math.max(0.5, r * Math.abs(cs)), th = 1.2 * sn * Math.sign(cs || 1), ca = Math.cos(ax), sa = Math.sin(ax);
  const face = Math.abs(cs), R = Math.ceil(r) + 2;
  L.begin(Math.floor(X) - R, Math.floor(Y) - R);
  L.fill(Math.floor(X) - R, Math.floor(Y) - R, Math.floor(X) + R, Math.floor(Y) + R, (px, py) => {
    const dx = px - X, dy = py - Y, u = dx * ca + dy * sa, w = -dx * sa + dy * ca;
    const ef = Math.hypot(u / r, w / b), er = Math.hypot(u / r, (w - th) / b);
    if (white && (ef <= 1 || er <= 1)) return WHITE;
    if (ef <= 1) {

      const lit = -(dx * 0.62 + dy * 0.78) / Math.max(1, Math.hypot(dx, dy)), dim = face < 0.45 ? 1 : 0;
      if (b < 1.1) return lit > 0 ? C[6] : C[4];
      if (ef > 0.72) return C[(lit > 0.3 ? 6 : lit > -0.35 ? 5 : 3) - dim];
      if (b > 2.2 && ef > 0.42) return C[(lit > 0.2 ? 4 : 5) - dim];
      if (face > 0.6 && lit > 0.5) return C[7];
      return C[5 - dim];
    }
    if (er <= 1) return Math.abs(w - th) < Math.abs(w) ? C[2] : C[3];
    return 0;
  });
  L.outline(C[1]).draw(p, 0, 0, a);
}
function gemlet(L, p, x, y, r, ang, G, white = false, a = 1) {
  const X = Math.round(x), Y = Math.round(y), ca = Math.cos(ang), sa = Math.sin(ang), n = G.length, R = Math.ceil(r * 1.4) + 2;
  const ct = r * 0.75, tw = r * 0.5, pv = r * 1.3;
  L.begin(X - R, Y - R);
  L.fill(X - R, Y - R, X + R - 1, Y + R - 1, (px, py) => {
    const dx = px - X, dy = py - Y, u = dx * ca + dy * sa, w = -dx * sa + dy * ca;
    let facet;
    if (w < 0) {
      if (w < -ct || Math.abs(u) > r - ((-w) / ct) * (r - tw)) return 0;
      facet = w < -ct * 0.45 && Math.abs(u) < tw * 0.95 ? 0 : u < 0 ? 1 : 2;
    } else {
      if (w > pv || Math.abs(u) > r * (1 - w / pv)) return 0;
      facet = Math.abs(u) < 0.5 ? 4 : u < 0 ? 3 : 5;
    }
    if (white) return WHITE;

    const N = [[0, -1], [-0.7, -0.7], [0.7, -0.7], [-0.6, 0.8], [0, 1], [0.6, 0.8]][facet];
    const nx = N[0] * ca - N[1] * sa, ny = N[0] * sa + N[1] * ca, l = -(nx * 0.62 + ny * 0.78);
    if (facet === 0 && l > 0.3 && u < 0) return WHITE;
    return l > 0.6 ? G[n - 1] : l > 0.2 ? G[n - 2] : l > -0.2 ? G[n - 3] : l > -0.6 ? G[n - 4] : G[n - 5];
  });
  L.outline(G[0]).draw(p, 0, 0, a);
}
function brilliant({ r = 7.5, crown = 3.6, table = 0.52, pavilion = 8, girdle = 0.8, n = 8 } = {}) {
  const planes = [{ n: [0, 1, 0], d: crown + girdle / 2, kind: 0 }];
  const cs = Math.atan2(crown, r * (1 - table)), ps = Math.atan2(pavilion, r);
  for (let i = 0; i < n * 2; i++) {
    const a = (i * Math.PI) / n, half = i % 2;
    const c = half ? Math.min(1.45, cs + 0.22) : cs, pv = half ? ps - 0.1 : ps;

    planes.push({ n: [Math.sin(c) * Math.cos(a), Math.cos(c), Math.sin(c) * Math.sin(a)], d: r * Math.sin(c) * (half ? 1.012 : 1) + (girdle / 2) * Math.cos(c), kind: half ? 2 : 1 });

    planes.push({ n: [Math.cos(a), 0, Math.sin(a)], d: r * (half ? 1.0 : 1.0), kind: 3 });

    planes.push({ n: [Math.sin(pv) * Math.cos(a), -Math.cos(pv), Math.sin(pv) * Math.sin(a)], d: r * Math.sin(pv) * (half ? 1.03 : 1) + (girdle / 2) * Math.cos(pv), kind: half ? 5 : 4 });
  }
  return { planes, r, top: crown + girdle / 2, bottom: pavilion + girdle / 2 };
}
function prism({ r = 4.6, half = 5.5, top = 7.5, bottom = 6, n = 6 } = {}) {
  const planes = [], ct = Math.atan2(top, r), cb = Math.atan2(bottom, r);
  for (let i = 0; i < n; i++) {
    const a = (i * TAU) / n;
    planes.push({ n: [Math.cos(a), 0, Math.sin(a)], d: r, kind: 6 });
    planes.push({ n: [Math.sin(ct) * Math.cos(a), Math.cos(ct), Math.sin(ct) * Math.sin(a)], d: Math.sin(ct) * r + Math.cos(ct) * half, kind: 7 });
    planes.push({ n: [Math.sin(cb) * Math.cos(a), -Math.cos(cb), Math.sin(cb) * Math.sin(a)], d: Math.sin(cb) * r + Math.cos(cb) * half, kind: 8 });
  }
  return { planes, r: r / Math.cos(Math.PI / n), top: half + top, bottom: half + bottom };
}
function drawGem(L, p, g, x, y, spin, C, { tilt = 0.32, white = false, a = 1, edges = true, gain = 1 } = {}) {
  const cs = Math.cos(spin), sn = Math.sin(spin), ct = Math.cos(tilt), st = Math.sin(tilt);
  const P = g.planes.map((q) => ({ n: [q.n[0] * cs - q.n[2] * sn, q.n[1], q.n[0] * sn + q.n[2] * cs], d: q.d, kind: q.kind }));

  const Lx = -0.55, Ly = 0.72, Lz = 0.42, D = [0, -st, -ct], V = [0, st, ct];
  const Hl = Math.hypot(Lx + V[0], Ly + V[1], Lz + V[2]), H = [(Lx + V[0]) / Hl, (Ly + V[1]) / Hl, (Lz + V[2]) / Hl];
  const X = Math.round(x), Y = Math.round(y), R = Math.ceil(g.r) + 2, top = Math.ceil(g.top + 2), bot = Math.ceil(g.bottom + 2);
  let best = -1, bx = X, by = Y;
  const ids = new Map();
  L.begin(X - R, Y - top);
  L.fill(X - R, Y - top, X + R, Y + bot, (px, py) => {
    const sx = px - X, sy = -(py - Y);

    const o = [sx, sy * ct, -sy * st];
    let t0 = -1e9, t1 = 1e9, hit = null;
    for (const q of P) {
      const nd = q.n[0] * D[0] + q.n[1] * D[1] + q.n[2] * D[2], no = q.n[0] * o[0] + q.n[1] * o[1] + q.n[2] * o[2];
      if (Math.abs(nd) < 1e-6) {
        if (no > q.d) return 0;
        continue;
      }
      const tt = (q.d - no) / nd;
      if (nd < 0) {
        if (tt > t0) (t0 = tt), (hit = q);
      } else if (tt < t1) t1 = tt;
    }
    if (!hit || t0 > t1) return 0;
    if (white) return WHITE;
    ids.set((Math.floor(px) + 500) * 1000 + Math.floor(py) + 500, P.indexOf(hit));
    const n = hit.n, pav = hit.kind === 4 || hit.kind === 5 || hit.kind === 8;

    const m = pav ? [n[0], -n[1] * 0.6, n[2]] : n, ml = Math.hypot(m[0], m[1], m[2]);
    const lam = Math.max(0, (m[0] * Lx + m[1] * Ly + m[2] * Lz) / ml), spec = Math.pow(Math.max(0, (m[0] * H[0] + m[1] * H[1] + m[2] * H[2]) / ml), 18);
    let b = pav ? 0.02 + 0.72 * Math.pow(lam, 2.4) : hit.kind === 3 ? 0.12 + 0.4 * lam : 0.04 + 0.66 * Math.pow(lam, 1.8);

    if (hit.kind === 6) b = 0.16 + 0.66 * Math.pow(Math.max(0, (n[0] * Lx + n[2] * Lz) / Math.hypot(Lx, Lz)), 1.3);
    else if (hit.kind === 7) b = 0.22 + 0.62 * Math.pow(lam, 1.2);

    else if (hit.kind === 9) b = 0.62 + 0.25 * lam;
    else if (hit.kind === 10) b = 0.3 + 0.5 * lam + (rand(Math.floor(px - X), Math.floor(py - Y), 43) - 0.5) * 0.08;
    if (hit.kind !== 9) b *= gain;
    if (hit.kind === 0) b -= 0.04;
    const s = b + spec * 0.6;
    if (s > best) (best = s), (bx = px), (by = py);
    if (spec > 0.8) return pav ? C[6] : WHITE;
    return C[Math.max(1, Math.min(6, Math.round(1 + s * 5.6)))];
  });

  if (!white && edges) {
    const out = [];
    for (const [key, id] of ids) {
      const kx = Math.floor(key / 1000), ky = key - kx * 1000, x = kx - 500, y = ky - 500, r = ids.get(key + 1000), d = ids.get(key + 1);
      if ((r !== undefined && r !== id) || (d !== undefined && d !== id)) {
        const c = L.get(x, y) >>> 0, i = C.findIndex((k) => k >>> 0 === c), pav = [4, 5, 8].includes(P[id].kind);
        if (i > 0) out.push([x, y, pav ? C[Math.max(1, i - 1)] : C[Math.min(7, i + 1)]]);
      }
    }
    for (const [x, y, c] of out) L.set(x, y, c);
  }
  L.outline(C[0]).draw(p, 0, 0, a);
  return { x: bx, y: by, k: best };
}
function coin3d(L, p, x, y, r, th, theta, C, { a = 1, white = false } = {}) {
  const ct = Math.cos(theta), st = Math.sin(theta), sg = ct < 0 ? -1 : 1, act = Math.abs(ct), ast = Math.abs(st);
  const xc = (th / 2) * st * sg, nfx = st * sg, Lx = -0.55, Ly = 0.45, Lz = 0.7, Ln = Math.hypot(Lx, Ly, Lz);

  const lam = (nfx * Lx + act * Lz) / Ln, Hx = Lx / Ln, Hz = Lz / Ln + 1, Hn = Math.hypot(Hx, Hz);
  const base = Math.max(2, Math.min(5, Math.round(2 + lam * 3.2)));
  const X = Math.round(x), Y = Math.round(y), B = Math.ceil(r + th) + 2;
  let flash = 0;
  L.begin(X - B, Y - B);
  L.fill(X - B, Y - B, X + B, Y + B, (px, py) => {
    const sx = px - X, sy = -(py - Y);
    if (Math.abs(sy) > r) return 0;
    const s = Math.sqrt(1 - (sy / r) ** 2), hw = r * s * act, xr = -(st < 0 ? -1 : 1) * s * r * ct, rw = (th / 2) * ast;
    if (white && (Math.abs(sx - xc) <= hw || Math.abs(sx - xr) <= rw + 0.05)) return WHITE;
    if (Math.abs(sx - xc) <= hw && act > 0.08) {

      const fx = (sx - xc) / act, fy = sy, d = Math.hypot(fx, fy) / r;

      const tx = nfx + (fx / r) * 0.3 * act, sp = Math.pow(Math.max(0, (tx * Hx + act * Hz) / Hn / Math.hypot(tx, act)), 130);
      flash = Math.max(flash, sp);


      const lit = (-fx * 0.6 + fy * 0.8) / Math.max(0.5, Math.hypot(fx, fy));
      let k;
      if (d > 0.76) k = base + (lit > 0.75 ? 2 : lit > 0.3 ? 1 : lit < -0.35 ? -1 : 0);
      else {
        const q = (Math.abs(fx) + Math.abs(fy)) / (r * 0.52);
        k = q >= 1 ? base - 1 : q < 0.45 ? base + 1 : fx <= 0 && fy >= 0 ? base + 1 : fx > 0 && fy < 0 ? base - 2 : base;
      }
      if (sp > 0.5) return sp > 0.8 ? WHITE : C[Math.min(7, k + 2)];
      return C[Math.max(2, Math.min(6, k))];
    }
    if (Math.abs(sx - xr) <= rw + 0.05) {

      const cphi = xr < 0 ? -s : s, n = [cphi * ct, sy / r, -cphi * st], l = (n[0] * Lx + n[1] * Ly + n[2] * Lz) / Ln;
      const groove = Math.floor((Math.asin(sy / r) + Math.PI) * 9) % 2;
      const edge = Math.abs(sx - xr) > rw - 0.6 && Math.sign(sx - xr) === Math.sign(xc - xr);
      return C[Math.max(1, Math.min(6, Math.round(2.6 + l * 2.6) - groove + (edge ? 1 : 0)))];
    }
    return 0;
  });
  L.outline(C[1]).draw(p, 0, 0, a);
  return flash;
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i0tjnak=__r(1);const Particles=__i0tjnak.Particles;const Lights=__i0tjnak.Lights;const P=__i0tjnak.P;const Rng=__i0tjnak.Rng;const fit=__i0tjnak.fit;const sparkle=__i0tjnak.sparkle;const clamp=__i0tjnak.clamp;const seg=__i0tjnak.seg;const ease=__i0tjnak.ease;const TAU=__i0tjnak.TAU;const WHITE=__i0tjnak.WHITE;const hex=__i0tjnak.hex;const scale=__i0tjnak.scale;const mix=__i0tjnak.mix;
const meta = {
  name: "Confetti",
  desc: "Two party poppers bang one after the other: paper bits and curly streamers burst out, stall, then tumble and flutter down, flipping, and settle on the floor.",
  tags: ["ui", "celebration", "confetti", "party", "reward", "one-shot"],
  size: [200, 140],
  origin: [100, 126],
  duration: 3.4,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#ff4a5a", "#ff9a2a", "#ffe03c", "#5ad84a", "#3cc8ff", "#7a6cff", "#f53cd1"], seed: 11 },
};
const POPPERS = [
  { x: -74, y: -1, a: -Math.PI / 2 + 0.62, t: 0.1 },
  { x: 74, y: -1, a: -Math.PI / 2 - 0.62, t: 0.26 },
];
const INK = hex("#141019");

function popper(p, x, y, a, k, C, alpha) {
  const ca = Math.cos(a), sa = Math.sin(a), bx = x - ca * k, by = y - sa * k;
  p.shade(bx - 12, by - 12, bx + 12, by + 12, (px, py, o) => {
    const dx = px - bx, dy = py - by, u = dx * ca + dy * sa, v = -dx * sa + dy * ca;

    if (u < 0 || u > 11) return;
    const hw = 0.8 + u * 0.32;
    if (Math.abs(v) > hw + 0.6) return;
    o.a = alpha;
    if (Math.abs(v) > hw - 0.4 || u > 10.2 || u < 0.8) return INK;
    const stripe = Math.floor((u + v * 0.6) / 2.2) % 2 === 0;
    return stripe ? (v < 0 ? C[2] : scale(C[2], 0.75)) : v < 0 ? WHITE : hex("#c8c0d8");
  });
}
function create(o) {
  const C = fit(o.palette, 7), R = new Rng(o.seed);
  const ps = new Particles({ rng: R, ground: () => 0, sparks: ["#ffffff", "#fff3a6", "#ffc23d", "#ff8a2a"] }), lights = new Lights();
  const bits = [], ribbons = [], fired = [false, false], end = meta.duration - 0.05;
  const kick = (t, pp) => (t < pp.t ? 0 : 3 * Math.exp(-(t - pp.t) * 14));
  function fire(pp) {
    const mx = pp.x + Math.cos(pp.a) * 11, my = pp.y + Math.sin(pp.a) * 11;
    lights.add(mx, my, 34, WHITE, 0.6, 0.12);
    lights.add(mx, my, 50, C[2], 0.4, 0.4);
    for (let i = 0; i < 6; i++) ps.spawn(P.SMOKE, mx, my, Math.cos(pp.a) * R.range(20, 60) + R.range(-10, 10), Math.sin(pp.a) * R.range(20, 60), R.range(0.6, 1), hex("#5d5660"), R.range(2.5, 4));
    for (let i = 0; i < 12; i++) {
      const an = pp.a + R.range(-0.5, 0.5), sp = R.range(120, 260);
      ps.spawn(P.SPARK, mx, my, Math.cos(an) * sp, Math.sin(an) * sp, R.range(0.1, 0.25));
    }

    for (let i = 0; i < 46; i++) {
      const an = pp.a + R.range(-0.38, 0.38), sp = R.range(200, 380);
      bits.push({ x: mx, y: my, vx: Math.cos(an) * sp, vy: Math.sin(an) * sp, c: R.pick(C), w: R.range(2, 3), h: R.range(3, 4.6), ang: R.range(0, TAU), spin: R.range(-14, 14), flip: R.range(0, TAU), fs: R.range(5, 13), ph: R.range(0, TAU), amp: R.range(5, 12), fw: R.range(2, 3.4), x0: 0, mode: 0, rest: 0, fall: R.range(26, 40) });
    }

    for (let i = 0; i < 4; i++) {
      const an = pp.a + R.range(-0.25, 0.25), sp = R.range(220, 330), n = 11;
      ribbons.push({ pts: Array.from({ length: n }, () => [mx, my]), vx: Math.cos(an) * sp, vy: Math.sin(an) * sp, c: R.pick(C), ph: R.range(0, TAU), amp: R.range(6, 12), fw: R.range(1.5, 2.4), mode: 0, x0: 0, curl: R.range(0.7, 1.1), fall: R.range(22, 32) });
    }
  }
  let t = 0;
  return {
    update(dt) {
      t += dt;
      POPPERS.forEach((pp, i) => !fired[i] && t >= pp.t && ((fired[i] = true), fire(pp)));
      for (const b of bits) {
        if (b.mode === 2) {
          b.rest += dt;
          continue;
        }
        b.flip += b.fs * dt;
        if (b.mode === 0) {

          b.vx -= b.vx * 3.4 * dt;
          b.vy -= b.vy * 3.4 * dt - 140 * dt;
          b.x += b.vx * dt;
          b.y += b.vy * dt;
          b.ang += b.spin * dt;
          if (Math.hypot(b.vx, b.vy) < 40) (b.mode = 1), (b.x0 = b.x - Math.sin(b.ph) * b.amp);
        } else {
          b.ph += b.fw * dt;
          b.x0 += b.vx * dt;
          b.vx -= b.vx * 2 * dt;
          b.x = b.x0 + Math.sin(b.ph) * b.amp;
          b.y += b.fall * (0.4 + 0.9 * Math.abs(Math.cos(b.ph))) * dt;
          b.ang = Math.cos(b.ph) * 0.9;
          if (b.y >= -1) (b.y = -0.5), (b.mode = 2), (b.ang = R.range(-0.3, 0.3)), (b.flip = 0);
        }
      }
      for (const r of ribbons) {
        const h = r.pts[0];
        if (r.mode === 0) {
          r.vx -= r.vx * 3 * dt;
          r.vy -= r.vy * 3 * dt - 120 * dt;
          h[0] += r.vx * dt;
          h[1] += r.vy * dt;
          if (Math.hypot(r.vx, r.vy) < 35) (r.mode = 1), (r.x0 = h[0] - Math.sin(r.ph) * r.amp);
        } else if (h[1] < -1) {
          r.ph += r.fw * dt;
          r.x0 += r.vx * dt;
          r.vx -= r.vx * 2 * dt;
          h[0] = r.x0 + Math.sin(r.ph) * r.amp;
          h[1] += r.fall * (0.5 + 0.7 * Math.abs(Math.cos(r.ph))) * dt;
        }

        for (let i = 1; i < r.pts.length; i++) {
          const a = r.pts[i - 1], b = r.pts[i];
          b[1] = Math.min(-0.5, b[1] + 20 * dt);
          const dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1;
          if (d > 2.6) (b[0] = a[0] + (dx / d) * 2.6), (b[1] = a[1] + (dy / d) * 2.6);
        }
      }
      ps.update(dt);
      lights.update(dt);
    },
    drawBack(p) {
      ps.draw(p, "back");
    },
    draw(p) {
      const fade = 1 - seg(t, end - 0.45, end - 0.05);
      for (const pp of POPPERS) {
        const k = kick(t, pp);
        popper(p, pp.x, pp.y, pp.a, k, C, 1 - seg(t, 2.5, 2.9));
        const ft = t - pp.t;
        if (ft > 0 && ft < 0.12) sparkle(p, pp.x + Math.cos(pp.a) * 13, pp.y + Math.sin(pp.a) * 13, 7 * (1 - ft / 0.12), WHITE, C[2], 0.7);
      }

      for (const r of ribbons) {
        const pts = r.pts.map(([x, y], i) => [x + Math.sin(i * r.curl + t * 9 + r.ph) * (i ? 1.6 : 0), y]);
        for (let i = 1; i < pts.length; i++) {
          const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], front = Math.sin(i * r.curl + t * 9 + r.ph) > 0;
          p.line(x0, y0, x1, y1, front ? r.c : scale(r.c, 0.6), fade);
          p.line(x0 + 1, y0, x1 + 1, y1, front ? mix(r.c, WHITE, 0.35) : scale(r.c, 0.45), fade);
        }
      }

      for (const b of bits) {
        if (b.y > 1) continue;
        const fw = b.mode === 2 ? 1 : Math.cos(b.flip), w = Math.max(0.5, Math.abs(fw) * b.w), ca = Math.cos(b.ang), sa = Math.sin(b.ang);
        const c = fw >= 0 ? b.c : scale(b.c, 0.62), a = fade;
        if (b.mode === 2) {
          p.dot(b.x, b.y, scale(b.c, 0.8), a);
          p.dot(b.x + 1, b.y, scale(b.c, 0.6), a);
          continue;
        }
        p.shade(b.x - 4, b.y - 4, b.x + 4, b.y + 4, (x, y, out) => {
          const dx = x - b.x, dy = y - b.y, u = dx * ca + dy * sa, v = -dx * sa + dy * ca;
          if (Math.abs(u) > w / 2 + 0.2 || Math.abs(v) > b.h / 2) return;
          out.a = a;
          return Math.abs(fw) > 0.92 && v < -b.h / 2 + 1 ? WHITE : c;
        });

        if (Math.abs(fw) > 0.97) p.glow(b.x, b.y, 5, mix(b.c, WHITE, 0.5), 0.35 * fade);
      }
      ps.draw(p, "front");
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"create",{enumerable:true,configurable:true,get:()=>create});
const __i37mnhm=__r(1);const Lights=__i37mnhm.Lights;const Rng=__i37mnhm.Rng;const fit=__i37mnhm.fit;const clamp=__i37mnhm.clamp;const ease=__i37mnhm.ease;const TAU=__i37mnhm.TAU;const WHITE=__i37mnhm.WHITE;
const __itihyfq=__r(76);const glint=__itihyfq.glint;
const meta = {
  name: "Collect burst",
  desc: "The moment of pickup: a white flash and a cross of light, a thin ring snapping out ahead of a softer one, twinkles thrown wide on curving paths that brake, hang and wink out.",
  tags: ["pickup", "collect", "burst", "sparkle", "reward", "one-shot"],
  size: [112, 108],
  origin: [56, 94],
  duration: 1.35,
  loop: false,
  fps: 30,
  bg: "ground",
  options: { palette: ["#1a0516", "#3d0a33", "#701560", "#b0228f", "#f53cd1", "#ff86e6", "#ffd2f6", "#ffffff"], seed: 3 },
};
const CY = -30;
function create(o) {
  const C = fit(o.palette, 8), R = new Rng(o.seed), lights = new Lights();
  lights.add(0, CY, 36, C[5], 0.85, 0.32);
  lights.add(0, CY, 14, WHITE, 0.75, 0.08);

  const stars = Array.from({ length: 14 }, (_, i) => {
    const a = (i / 14) * TAU + R.range(-0.2, 0.2), sp = R.range(145, 225) * (i % 3 === 0 ? 1.12 : 0.85);
    return { x: 0, y: CY, a, sp, turn: (i % 2 ? 1 : -1) * R.range(2.5, 5), life: R.range(0.75, 1.15), age: 0, size: i % 3 === 0 ? 2.6 : R.range(1.2, 2), tr: [], c: i % 4 === 0 ? WHITE : i % 2 ? C[6] : C[5], ph: R.range(0, TAU) };
  });
  const motes = Array.from({ length: 7 }, () => ({ x: R.range(-8, 8), y: CY + R.range(-4, 6), vy: -R.range(12, 30), life: R.range(0.5, 0.9), d: R.range(0.05, 0.25), w: R.range(0, TAU) }));
  let t = 0;
  return {
    update(dt) {
      t += dt;
      for (const s of stars) {
        if (s.age > s.life) continue;
        s.age += dt;
        s.tr.unshift([s.x, s.y]);
        if (s.tr.length > 4) s.tr.pop();
        s.a += s.turn * dt * Math.max(0, 1 - s.age * 1.5);
        s.sp -= s.sp * 4.3 * dt;
        s.x += Math.cos(s.a) * s.sp * dt;
        s.y += Math.sin(s.a) * s.sp * dt + 6 * s.age * dt;

        if (s.y > -2) (s.y = -2), (s.a = -Math.abs(s.a)), (s.sp *= 0.5);
      }
      lights.update(dt);
    },
    draw(p) {

      if (t < 0.07) p.circle(0, CY, 5.5 * (1 - t / 0.07) + 1, WHITE);
      if (t < 0.16) {
        const k = 1 - t / 0.16, L = 26 * ease.outCubic(Math.min(1, t / 0.03 + 0.4)) * k;
        for (const [dx, dy, l] of [[1, 0, 1], [-1, 0, 1], [0, 1, 0.6], [0, -1, 0.6]])
          p.line(0, CY, dx * L * l, CY + dy * L * l, (u) => (u < 0.3 ? WHITE : u < 0.65 ? C[6] : C[5]), (u) => (u < 0.5 ? 1 : (1 - u) * 2) * (0.5 + k));
        p.glow(0, CY, 20 * k + 4, C[5], 0.6 * k);
      }

      const u1 = t / 0.32;
      if (u1 < 1) {
        const r = 3 + 23 * ease.outExpo(u1);
        p.ring(0, CY, r, 1, u1 < 0.3 ? WHITE : C[6], 1.3 - u1 * 1.2);
        p.glowRing(0, CY, r, 4, C[5], 0.4 * (1 - u1));
      }
      const u2 = (t - 0.04) / 0.5;
      if (u2 > 0 && u2 < 1) {
        const r = 2 + 16 * ease.outCubic(u2);
        p.ring(0, CY, r, Math.max(1, 2.6 * (1 - u2)), C[5], 1 - u2);
      }

      for (const s of stars) {
        if (s.age > s.life) continue;
        const k = 1 - s.age / s.life, tw = 0.65 + 0.35 * Math.sin(s.age * 26 + s.ph);
        s.tr.forEach(([x, y], i) => i > 0 && p.dot(x, y, i < 2 ? C[5] : C[4], (1 - i / 4) * k * 1.4));
        if (k < 0.3 && Math.sin(s.age * 40 + s.ph) < 0) continue;
        glint(p, s.x, s.y, Math.round(s.size * tw * Math.min(1, k * 2.5)), s.c, 0.45 * k);
      }

      for (const m of motes) {
        const a = t - m.d;
        if (a < 0 || a > m.life) continue;
        const k = 1 - a / m.life, x = m.x + Math.sin(a * 6 + m.w) * 1.5, y = m.y + m.vy * a;
        p.dot(x, y, k > 0.5 ? C[6] : C[5], k * 1.5);
        p.glow(x + 0.5, y + 0.5, 3, C[5], 0.3 * k);
      }
      lights.draw(p);
    },
  };
}
},
function(__e){Object.defineProperty(__e,"meta",{enumerable:true,configurable:true,get:()=>meta});Object.defineProperty(__e,"draw",{enumerable:true,configurable:true,get:()=>draw});
const __ir1cqdu=__r(1);const fit=__ir1cqdu.fit;const clamp=__ir1cqdu.clamp;const cycle=__ir1cqdu.cycle;const TAU=__ir1cqdu.TAU;
const meta = {
  name: "Sword wave",
  desc: "A tall crescent of sword light flying right: white leading rim, tinted body, three afterimages trailing and dithering out, motes peeling off the tips.",
  tags: ["melee", "projectile", "slash", "wave", "crescent", "directional", "loop"],
  size: [120, 72],
  origin: [84, 36],
  duration: 0.4,
  loop: true,
  fps: 30,
  bg: "dark",
  options: {
    palette: ["#1d2240", "#3a4a86", "#6a86c8", "#a8c4f0", "#dce8ff", "#ffffff"],
    radius: 20,
    seed: 3,
  },
};
function crescent(p, cx, R, C, a, hot) {
  const off = R * 0.55, hr = R * 0.92;
  p.shade(cx - R - 1, -R - 1, cx + R + 1, R + 1, (x, y, out) => {
    const dx = x - cx, r = Math.hypot(dx * 1.6, y);
    if (r > R) return;
    const hd = Math.hypot((dx + off) * 1.6, y);
    if (hd < hr) return;
    const edge = Math.min(R - r, hd - hr), q = clamp(edge / 3.5);
    const tip = Math.abs(y) / R;
    const step = hot ? Math.round(q * 2) : Math.round(1 + q * 2 + tip * 1.5);
    out.c = C[clamp(5 - step, 0, 5)];
    out.a = a;
  });
}
function draw(p, t, o) {
  const C = fit(o.palette, 6), R = o.radius, ph = t / meta.duration;
  for (let k = 3; k >= 1; k--) crescent(p, -k * R * 0.55, R * (1 - k * 0.06), C.slice(0, 5).concat(C[3]), 0.55 - k * 0.15, false);
  crescent(p, 0, R, C, 1, true);
  p.glow(R * 0.3, 0, R * 1.6, C[3], 0.45);
  p.glowLine(-R * 2, 0, R * 0.4, 0, 4, C[2], 0.25);
  cycle(t, meta.duration, 10, o.seed, 0.4, (age, life, r) => {
    const k = age / life, side = r.range(-1, 1) < 0 ? -1 : 1, x = R * 0.3 - k * R * 2.2, y = side * (R * 0.8 + k * r.range(2, 8));
    p.dot(x, y, k < 0.4 ? C[5] : C[3], 1 - k);
  });
  void ph; void TAU;
}
}];
function __star(t,s){for(const k of Object.keys(s))if(k!=="default"&&!(k in t))Object.defineProperty(t,k,{enumerable:true,configurable:true,get:()=>s[k]});}
function __r(i){if(__c[i])return __c[i];const e=__c[i]={};__f[i](e);return e;}
return __r(0);})();
