// Pure calculation engines shared by every tool page. No DOM access here —
// each tool's inline <script> wires these functions to its own form fields.
var ENG = {};

/* ---------------- math ---------------- */
ENG.math = {
  isPrime: function (n) {
    n = Math.trunc(n);
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    for (var i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
    return true;
  },
  primesUpTo: function (max) {
    max = Math.trunc(max);
    var sieve = new Array(max + 1).fill(true);
    sieve[0] = sieve[1] = false;
    for (var i = 2; i * i <= max; i++) if (sieve[i]) for (var j = i * i; j <= max; j += i) sieve[j] = false;
    var out = [];
    for (var k = 2; k <= max; k++) if (sieve[k]) out.push(k);
    return out;
  },
  gcd: function (a, b) { a = Math.abs(Math.trunc(a)); b = Math.abs(Math.trunc(b)); while (b) { var t = b; b = a % b; a = t; } return a; },
  lcm: function (a, b) { return Math.abs(a * b) / ENG.math.gcd(a, b); },
  linearEq: function (a, b) { // ax + b = 0
    if (a === 0) return b === 0 ? { infinite: true } : { none: true };
    return { x: -b / a };
  },
  quadraticEq: function (a, b, c) { // ax^2+bx+c=0
    if (a === 0) return ENG.math.linearEq(b, c);
    var d = b * b - 4 * a * c;
    if (d < 0) return { complex: true, re: -b / (2 * a), im: Math.sqrt(-d) / (2 * a) };
    var sq = Math.sqrt(d);
    return { x1: (-b + sq) / (2 * a), x2: (-b - sq) / (2 * a), discriminant: d };
  },
  ruleOfThree: function (a, b, c) { return (b * c) / a; }, // a is to b as c is to x
  log10: function (n) { return Math.log10(n); },
  slope: function (x1, y1, x2, y2) { return x2 === x1 ? null : (y2 - y1) / (x2 - x1); },
  decimalToFraction: function (dec, tolerance) {
    tolerance = tolerance || 1e-9;
    var sign = dec < 0 ? -1 : 1;
    dec = Math.abs(dec);
    var h1 = 1, h2 = 0, k1 = 0, k2 = 1, b = dec;
    do {
      var a = Math.floor(b);
      var h = a * h1 + h2; var k = a * k1 + k2;
      h2 = h1; h1 = h; k2 = k1; k1 = k;
      b = 1 / (b - a);
    } while (Math.abs(dec - h1 / k1) > dec * tolerance && isFinite(b));
    return { num: sign * h1, den: k1 };
  },
  simplifyFraction: function (num, den) {
    var g = ENG.math.gcd(num, den) || 1;
    return { num: num / g, den: den / g };
  },
  simplifySqrt: function (n) {
    n = Math.trunc(n);
    if (n < 0) return null;
    var outside = 1, inside = n;
    for (var i = 2; i * i <= inside;) {
      if (inside % (i * i) === 0) { inside /= (i * i); outside *= i; } else i++;
    }
    return { outside: outside, inside: inside };
  },
  scientificNotation: function (n) {
    if (n === 0) return { mantissa: 0, exponent: 0 };
    var exp = Math.floor(Math.log10(Math.abs(n)));
    var mant = n / Math.pow(10, exp);
    return { mantissa: mant, exponent: exp };
  },
  power: function (x, n) { return Math.pow(x, n); },
  sqrt: function (x) { return Math.sqrt(x); },
  cbrt: function (x) { return Math.cbrt(x); },
  longitudeToTime: function (deg) { var totalMin = (deg / 15) * 60; var h = Math.trunc(totalMin / 60); var m = Math.round(totalMin % 60); return { h: h, m: m }; },
  timeToLongitude: function (h, m) { return ((h + m / 60) / 24) * 360; }
};

/* ---------------- unit conversion ---------------- */
ENG.units = {
  distance: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, yd: 0.9144, ft: 0.3048, in: 0.0254, 'milha náutica': 1852 },
  mass: { g: 1, kg: 1000, mg: 0.001, t: 1e6, lb: 453.59237, oz: 28.349523125 },
  volume: { L: 1, mL: 0.001, 'm³': 1000, 'gal (US)': 3.785411784, 'pint (US)': 0.473176473 },
  energy: { J: 1, kJ: 1000, cal: 4.184, kcal: 4184, Wh: 3600, kWh: 3.6e6, MWh: 3.6e9 },
  bytes: { B: 1, KB: 1024, MB: 1024 ** 2, GB: 1024 ** 3, TB: 1024 ** 4 },
  convert: function (table, value, from, to) { return value * table[from] / table[to]; },
  celsiusToFahrenheit: function (c) { return c * 9 / 5 + 32; },
  fahrenheitToCelsius: function (f) { return (f - 32) * 5 / 9; },
  celsiusToKelvin: function (c) { return c + 273.15; },
  kwToCv: function (kw) { return kw * 1.35962; },
  cvToKw: function (cv) { return cv / 1.35962; },
  thermalResistance: function (thicknessM, lambda) { return thicknessM / lambda; },
  stepsToDistance: function (steps, strideM) { return steps * strideM; },
  paceToSpeed: function (minPerKm, secPerKm) { var totalMin = minPerKm + (secPerKm || 0) / 60; return totalMin === 0 ? 0 : 60 / totalMin; },
  speedToPace: function (kmh) { if (kmh === 0) return { min: 0, sec: 0 }; var totalMin = 60 / kmh; return { min: Math.floor(totalMin), sec: Math.round((totalMin % 1) * 60) }; }
};

/* ---------------- date & time ---------------- */
ENG.time = {
  isLeapYear: function (y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; },
  addDaysToDate: function (date, days) { var d = new Date(date); d.setDate(d.getDate() + days); return d; },
  dateDiff: function (d1, d2) {
    var a = new Date(d1), b = new Date(d2);
    var ms = Math.abs(b - a);
    var totalDays = Math.floor(ms / 86400000);
    var years = Math.abs(b.getFullYear() - a.getFullYear());
    var start = a < b ? a : b, end = a < b ? b : a;
    var y = end.getFullYear() - start.getFullYear();
    var m = end.getMonth() - start.getMonth();
    var dd = end.getDate() - start.getDate();
    if (dd < 0) { m--; dd += new Date(end.getFullYear(), end.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    return { totalDays: totalDays, years: y, months: m, days: dd };
  },
  age: function (birthDateStr) { return ENG.time.dateDiff(birthDateStr, new Date()); },
  hmsToDecimalHours: function (h, m, s) { return h + m / 60 + (s || 0) / 3600; },
  decimalHoursToHms: function (dec) {
    var sign = dec < 0 ? -1 : 1; dec = Math.abs(dec);
    var h = Math.floor(dec); var remMin = (dec - h) * 60;
    var m = Math.floor(remMin); var s = Math.round((remMin - m) * 60);
    if (s === 60) { s = 0; m++; } if (m === 60) { m = 0; h++; }
    return { h: sign * h, m: m, s: s };
  },
  durationToSeconds: function (h, m, s) { return h * 3600 + m * 60 + (s || 0); },
  secondsToDuration: function (totalSec) {
    var sign = totalSec < 0 ? -1 : 1; totalSec = Math.abs(Math.round(totalSec));
    var h = Math.floor(totalSec / 3600); var m = Math.floor((totalSec % 3600) / 60); var s = totalSec % 60;
    return { h: sign * h, m: m, s: s };
  },
  multiplyDuration: function (h, m, s, factor) { return ENG.time.secondsToDuration(ENG.time.durationToSeconds(h, m, s) * factor); },
  divideDuration: function (h, m, s, divisor) { return ENG.time.secondsToDuration(ENG.time.durationToSeconds(h, m, s) / divisor); },
  timestampToDate: function (ts) { return new Date(ts * 1000); },
  dateToTimestamp: function (dateStr) { return Math.floor(new Date(dateStr).getTime() / 1000); },
  convertDuration: function (value, fromUnit, toUnit) {
    var toSec = { segundos: 1, minutos: 60, horas: 3600, dias: 86400, semanas: 604800, meses: 2629800, anos: 31557600 };
    return value * toSec[fromUnit] / toSec[toUnit];
  }
};

/* ---------------- finance ---------------- */
ENG.finance = {
  applyVat: function (base, ratePct) { var vat = base * ratePct / 100; return { vat: vat, total: base + vat }; },
  removeVat: function (total, ratePct) { var base = total / (1 + ratePct / 100); return { base: base, vat: total - base }; },
  percentOf: function (part, whole) { return (part / whole) * 100; },
  percentValue: function (pct, whole) { return (pct / 100) * whole; },
  percentChange: function (from, to) { return ((to - from) / from) * 100; },
  splitBill: function (total, people, tipPct) {
    var tip = total * (tipPct || 0) / 100;
    return { perPerson: (total + tip) / people, tip: tip, total: total + tip };
  },
  loanPayment: function (principal, annualRatePct, months) {
    var r = annualRatePct / 100 / 12;
    if (r === 0) return principal / months;
    return principal * r / (1 - Math.pow(1 + r, -months));
  },
  loanTotalCost: function (principal, annualRatePct, months) {
    var pmt = ENG.finance.loanPayment(principal, annualRatePct, months);
    return { installment: pmt, totalPaid: pmt * months, totalInterest: pmt * months - principal };
  },
  compoundInterest: function (principal, annualRatePct, years, timesPerYear) {
    timesPerYear = timesPerYear || 12;
    var amount = principal * Math.pow(1 + (annualRatePct / 100) / timesPerYear, timesPerYear * years);
    return { amount: amount, interest: amount - principal };
  },
  doublingTime: function (annualRatePct) { return Math.log(2) / Math.log(1 + annualRatePct / 100); },
  stockGainLoss: function (buyPrice, sellPrice, shares, fees) {
    fees = fees || 0;
    var invested = buyPrice * shares + fees;
    var returned = sellPrice * shares;
    var gain = returned - invested;
    return { gain: gain, gainPct: (gain / invested) * 100, invested: invested, returned: returned };
  },
  cryptoConvert: function (amount, unitPriceInFiat) { return amount * unitPriceInFiat; }
};

/* ---------------- IT / text ---------------- */
ENG.it = {
  generatePassword: function (length, opts) {
    var lower = 'abcdefghijklmnopqrstuvwxyz', upper = lower.toUpperCase(), digits = '0123456789', symbols = '!@#$%^&*()-_=+[]{}';
    var pool = '';
    if (opts.lower) pool += lower;
    if (opts.upper) pool += upper;
    if (opts.digits) pool += digits;
    if (opts.symbols) pool += symbols;
    if (!pool) pool = lower + upper + digits;
    var out = '';
    var arr = new Uint32Array(length);
    (window.crypto || {}).getRandomValues ? crypto.getRandomValues(arr) : arr.forEach(function (_, i) { arr[i] = Math.floor(Math.random() * 4294967295); });
    for (var i = 0; i < length; i++) out += pool[arr[i] % pool.length];
    return out;
  },
  xorCipher: function (text, key) {
    var out = '';
    for (var i = 0; i < text.length; i++) out += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    return out;
  },
  encryptMessage: function (text, key) { return btoa(unescape(encodeURIComponent(ENG.it.xorCipher(text, key)))); },
  decryptMessage: function (b64, key) { try { return ENG.it.xorCipher(decodeURIComponent(escape(atob(b64))), key); } catch (e) { return null; } },
  decToBin: function (n) { return (n >>> 0).toString(2); },
  decToHex: function (n) { return (n >>> 0).toString(16).toUpperCase(); },
  binToDec: function (s) { return parseInt(s, 2); },
  hexToDec: function (s) { return parseInt(s, 16); },
  hexAdd: function (a, b) { return (parseInt(a, 16) + parseInt(b, 16)).toString(16).toUpperCase(); },
  hexSub: function (a, b) { return (parseInt(a, 16) - parseInt(b, 16)).toString(16).toUpperCase(); },
  hexToText: function (hex) { hex = hex.replace(/\s+/g, ''); var bytes = []; for (var i = 0; i < hex.length; i += 2) bytes.push(parseInt(hex.substr(i, 2), 16)); return decodeURIComponent(escape(String.fromCharCode.apply(null, bytes))); },
  textToHex: function (text) { var utf8 = unescape(encodeURIComponent(text)); var out = ''; for (var i = 0; i < utf8.length; i++) out += utf8.charCodeAt(i).toString(16).padStart(2, '0'); return out.toUpperCase(); },
  countChars: function (text) { return { chars: text.length, noSpaces: text.replace(/\s/g, '').length, words: (text.trim().match(/\S+/g) || []).length, lines: text.split(/\r\n|\r|\n/).length }; },
  removeSpaces: function (text, mode) {
    if (mode === 'all') return text.replace(/\s+/g, '');
    if (mode === 'trim') return text.trim();
    return text.replace(/\s+/g, ' ').trim();
  },
  subnetInfo: function (cidr) {
    var bits = parseInt(cidr, 10);
    var mask = bits === 0 ? 0 : (0xFFFFFFFF << (32 - bits)) >>> 0;
    var maskStr = [(mask >>> 24) & 255, (mask >>> 16) & 255, (mask >>> 8) & 255, mask & 255].join('.');
    var hosts = bits >= 31 ? 0 : Math.pow(2, 32 - bits) - 2;
    return { mask: maskStr, hosts: hosts, cidr: bits };
  },
  cidrToBinary: function (cidr) {
    var bits = parseInt(cidr, 10);
    var mask = bits === 0 ? 0 : (0xFFFFFFFF << (32 - bits)) >>> 0;
    var bin = mask.toString(2).padStart(32, '0');
    return bin.match(/.{8}/g).join('.');
  },
  ipToLong: function (ip) { return ip.split('.').reduce(function (a, o) { return (a << 8) + parseInt(o, 10); }, 0) >>> 0; },
  longToIp: function (long) { return [(long >>> 24) & 255, (long >>> 16) & 255, (long >>> 8) & 255, long & 255].join('.'); },
  ipRange: function (ip, cidr) {
    var bits = parseInt(cidr, 10);
    var ipLong = ENG.it.ipToLong(ip);
    var mask = bits === 0 ? 0 : (0xFFFFFFFF << (32 - bits)) >>> 0;
    var network = (ipLong & mask) >>> 0;
    var broadcast = (network | (~mask >>> 0)) >>> 0;
    return {
      network: ENG.it.longToIp(network),
      broadcast: ENG.it.longToIp(broadcast),
      firstHost: bits >= 31 ? ENG.it.longToIp(network) : ENG.it.longToIp(network + 1),
      lastHost: bits >= 31 ? ENG.it.longToIp(broadcast) : ENG.it.longToIp(broadcast - 1),
      totalHosts: bits >= 31 ? Math.pow(2, 32 - bits) : Math.pow(2, 32 - bits) - 2
    };
  }
};

/* ---------------- geometry ---------------- */
ENG.geometry = {
  rectArea: function (w, h) { return w * h; },
  rectPerimeter: function (w, h) { return 2 * (w + h); },
  circleArea: function (r) { return Math.PI * r * r; },
  circlePerimeter: function (r) { return 2 * Math.PI * r; },
  triangleAreaHeron: function (a, b, c) {
    var s = (a + b + c) / 2;
    var val = s * (s - a) * (s - b) * (s - c);
    return val > 0 ? Math.sqrt(val) : NaN;
  }
};

/* ---------------- scientific expression engine (shared by calculadora-cientifica and calculadora-grafica) ---------------- */
ENG.sci = {
  // Tokenizer + recursive-descent parser + evaluator for expressions like
  // "sin(x)+sqrt(2)^2-3!" . Supports: + - * / ^ % ! ( ) , functions
  // sin cos tan asin acos atan log ln sqrt abs exp, constants pi e, and a
  // free variable x (for graphing). angleMode: 'deg' | 'rad'.
  tokenize: function (expr) {
    var tokens = [], i = 0, s = expr.replace(/\s+/g, '');
    var isDigit = function (c) { return c >= '0' && c <= '9'; };
    var isAlpha = function (c) { return /[a-zA-Z]/.test(c); };
    while (i < s.length) {
      var c = s[i];
      if (isDigit(c) || (c === '.' && isDigit(s[i + 1]))) {
        var j = i; while (j < s.length && (isDigit(s[j]) || s[j] === '.')) j++;
        tokens.push({ t: 'num', v: parseFloat(s.slice(i, j)) }); i = j;
      } else if (isAlpha(c)) {
        var k = i; while (k < s.length && isAlpha(s[k])) k++;
        tokens.push({ t: 'id', v: s.slice(i, k) }); i = k;
      } else if ('+-*/^%!(),'.indexOf(c) !== -1) {
        tokens.push({ t: 'op', v: c }); i++;
      } else { i++; } // skip unknown char
    }
    return tokens;
  },
  parse: function (expr) {
    var tokens = ENG.sci.tokenize(expr), pos = 0;
    function peek() { return tokens[pos]; }
    function next() { return tokens[pos++]; }
    function parseExpr() { // + -
      var node = parseTerm();
      while (peek() && peek().t === 'op' && (peek().v === '+' || peek().v === '-')) {
        var op = next().v; node = { type: 'bin', op: op, a: node, b: parseTerm() };
      }
      return node;
    }
    function parseTerm() { // * /
      var node = parseUnary();
      while (peek() && peek().t === 'op' && (peek().v === '*' || peek().v === '/' || peek().v === '%')) {
        var op = next().v; node = { type: 'bin', op: op, a: node, b: parseUnary() };
      }
      return node;
    }
    function parseUnary() { // unary minus
      if (peek() && peek().t === 'op' && peek().v === '-') { next(); return { type: 'neg', a: parseUnary() }; }
      if (peek() && peek().t === 'op' && peek().v === '+') { next(); return parseUnary(); }
      return parsePow();
    }
    function parsePow() { // ^ (right-assoc) then postfix !
      var node = parsePostfix();
      if (peek() && peek().t === 'op' && peek().v === '^') { next(); node = { type: 'bin', op: '^', a: node, b: parseUnary() }; }
      return node;
    }
    function parsePostfix() {
      var node = parseAtom();
      while (peek() && peek().t === 'op' && peek().v === '!') { next(); node = { type: 'fact', a: node }; }
      return node;
    }
    function parseAtom() {
      var tk = peek();
      if (!tk) return { type: 'num', v: 0 };
      if (tk.t === 'num') { next(); return { type: 'num', v: tk.v }; }
      if (tk.t === 'op' && tk.v === '(') {
        next(); var node = parseExpr();
        if (peek() && peek().v === ')') next();
        return node;
      }
      if (tk.t === 'id') {
        next();
        var name = tk.v.toLowerCase();
        if (peek() && peek().t === 'op' && peek().v === '(') {
          next(); var arg = parseExpr(); var arg2 = null;
          if (peek() && peek().v === ',') { next(); arg2 = parseExpr(); }
          if (peek() && peek().v === ')') next();
          return { type: 'call', name: name, a: arg, b: arg2 };
        }
        return { type: 'id', name: name };
      }
      next(); return { type: 'num', v: 0 };
    }
    return parseExpr();
  },
  factorial: function (n) { n = Math.round(n); if (n < 0) return NaN; var r = 1; for (var i = 2; i <= n; i++) r *= i; return r; },
  evaluate: function (ast, ctx) {
    ctx = ctx || {};
    var angleMode = ctx.angleMode || 'deg';
    function toRad(v) { return angleMode === 'deg' ? v * Math.PI / 180 : v; }
    function ev(node) {
      switch (node.type) {
        case 'num': return node.v;
        case 'neg': return -ev(node.a);
        case 'fact': return ENG.sci.factorial(ev(node.a));
        case 'id':
          if (node.name === 'pi') return Math.PI;
          if (node.name === 'e') return Math.E;
          if (node.name === 'x' && ctx.x !== undefined) return ctx.x;
          if (node.name === 'ans' && ctx.ans !== undefined) return ctx.ans;
          return NaN;
        case 'bin':
          var a = ev(node.a), b = ev(node.b);
          if (node.op === '+') return a + b;
          if (node.op === '-') return a - b;
          if (node.op === '*') return a * b;
          if (node.op === '/') return a / b;
          if (node.op === '%') return a % b;
          if (node.op === '^') return Math.pow(a, b);
          return NaN;
        case 'call':
          var x1 = ev(node.a);
          switch (node.name) {
            case 'sin': return Math.sin(toRad(x1));
            case 'cos': return Math.cos(toRad(x1));
            case 'tan': return Math.tan(toRad(x1));
            case 'asin': return angleMode === 'deg' ? Math.asin(x1) * 180 / Math.PI : Math.asin(x1);
            case 'acos': return angleMode === 'deg' ? Math.acos(x1) * 180 / Math.PI : Math.acos(x1);
            case 'atan': return angleMode === 'deg' ? Math.atan(x1) * 180 / Math.PI : Math.atan(x1);
            case 'log': return Math.log10(x1);
            case 'ln': return Math.log(x1);
            case 'sqrt': return Math.sqrt(x1);
            case 'abs': return Math.abs(x1);
            case 'exp': return Math.exp(x1);
            case 'root': return node.b ? Math.pow(x1, 1 / ev(node.b)) : Math.sqrt(x1);
            default: return NaN;
          }
        default: return NaN;
      }
    }
    return ev(ast);
  },
  run: function (expr, ctx) {
    try { return ENG.sci.evaluate(ENG.sci.parse(expr), ctx); } catch (e) { return NaN; }
  }
};

/* ---------------- payroll (INSS / IRRF - Brazil, reference tables) ---------------- */
/* Valores de referência (tabelas progressivas vigentes em 2024–2025).
   As faixas de INSS e IRRF são reajustadas anualmente pelo governo federal
   — confira sempre a tabela vigente na Receita Federal / INSS antes de usar
   o resultado para decisões oficiais. */
ENG.payroll = {
  INSS_TABLE: [
    { limit: 1412.00, rate: 0.075 },
    { limit: 2666.68, rate: 0.09 },
    { limit: 4000.03, rate: 0.12 },
    { limit: 7786.02, rate: 0.14 }
  ],
  IRRF_TABLE: [
    { limit: 2259.20, rate: 0, deduction: 0 },
    { limit: 2826.65, rate: 0.075, deduction: 169.44 },
    { limit: 3751.05, rate: 0.15, deduction: 381.44 },
    { limit: 4664.68, rate: 0.225, deduction: 662.77 },
    { limit: Infinity, rate: 0.275, deduction: 896.00 }
  ],
  IRRF_DEPENDENT_DEDUCTION: 189.59,
  calcInss: function (gross) {
    var table = ENG.payroll.INSS_TABLE, total = 0, prevLimit = 0;
    for (var i = 0; i < table.length; i++) {
      var band = table[i];
      var bandTop = Math.min(gross, band.limit);
      if (bandTop > prevLimit) total += (bandTop - prevLimit) * band.rate;
      prevLimit = band.limit;
      if (gross <= band.limit) break;
    }
    // acima do teto, contribui sobre o teto da última faixa
    if (gross > table[table.length - 1].limit) {
      total = 0; prevLimit = 0;
      for (var j = 0; j < table.length; j++) {
        var b = table[j];
        total += (b.limit - prevLimit) * b.rate;
        prevLimit = b.limit;
      }
    }
    return total;
  },
  calcIrrf: function (base, dependents) {
    var deduction = (dependents || 0) * ENG.payroll.IRRF_DEPENDENT_DEDUCTION;
    var adjustedBase = base - deduction;
    if (adjustedBase <= 0) return 0;
    var table = ENG.payroll.IRRF_TABLE;
    for (var i = 0; i < table.length; i++) {
      if (adjustedBase <= table[i].limit) {
        var tax = adjustedBase * table[i].rate - table[i].deduction;
        return Math.max(0, tax);
      }
    }
    return 0;
  },
  netSalary: function (gross, dependents) {
    var inss = ENG.payroll.calcInss(gross);
    var irrfBase = gross - inss;
    var irrf = ENG.payroll.calcIrrf(irrfBase, dependents);
    var net = gross - inss - irrf;
    return { gross: gross, inss: inss, irrf: irrf, net: net };
  },
  vacationPay: function (monthlySalary, days, sellDays, dependents) {
    days = days || 30; sellDays = sellDays || 0; dependents = dependents || 0;
    var dailyRate = monthlySalary / 30;
    var vacationGross = dailyRate * days;
    var bonus = vacationGross / 3; // terço constitucional
    var grossTotal = vacationGross + bonus;
    var abono = 0, abonoBonus = 0;
    if (sellDays > 0) {
      abono = dailyRate * sellDays;
      abonoBonus = abono / 3; // o abono também recebe o terço, mas é isento de INSS/IRRF
    }
    var inss = ENG.payroll.calcInss(grossTotal);
    var irrfBase = grossTotal - inss;
    var irrf = ENG.payroll.calcIrrf(irrfBase, dependents);
    var net = grossTotal - inss - irrf;
    return {
      dailyRate: dailyRate, vacationGross: vacationGross, bonus: bonus, grossTotal: grossTotal,
      inss: inss, irrf: irrf, net: net,
      abono: abono, abonoBonus: abonoBonus, totalReceivable: net + abono + abonoBonus
    };
  }
};

/* ---------------- misc ---------------- */
ENG.misc = {
  average: function (nums) { return nums.reduce(function (a, b) { return a + b; }, 0) / nums.length; },
  weightedAverage: function (pairs) { // [[value, weight], ...]
    var sw = pairs.reduce(function (a, p) { return a + p[1]; }, 0);
    var sv = pairs.reduce(function (a, p) { return a + p[0] * p[1]; }, 0);
    return sw === 0 ? NaN : sv / sw;
  },
  median: function (nums) {
    var s = nums.slice().sort(function (a, b) { return a - b; });
    var mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
  },
  ohmsLaw: function (known) { // pass any two of {v,i,r,p}, returns all four
    var v = known.v, i = known.i, r = known.r, p = known.p;
    if (v !== undefined && i !== undefined) { r = v / i; p = v * i; }
    else if (v !== undefined && r !== undefined) { i = v / r; p = v * i; }
    else if (v !== undefined && p !== undefined) { i = p / v; r = v / i; }
    else if (i !== undefined && r !== undefined) { v = i * r; p = v * i; }
    else if (i !== undefined && p !== undefined) { v = p / i; r = v / i; }
    else if (r !== undefined && p !== undefined) { v = Math.sqrt(p * r); i = v / r; }
    return { v: v, i: i, r: r, p: p };
  },
  resistorColors: [
    { name: 'Preto', value: 0, color: '#000000' }, { name: 'Marrom', value: 1, color: '#7B3F00' },
    { name: 'Vermelho', value: 2, color: '#FF0000' }, { name: 'Laranja', value: 3, color: '#FFA500' },
    { name: 'Amarelo', value: 4, color: '#FFFF00' }, { name: 'Verde', value: 5, color: '#008000' },
    { name: 'Azul', value: 6, color: '#0000FF' }, { name: 'Violeta', value: 7, color: '#8F00FF' },
    { name: 'Cinza', value: 8, color: '#808080' }, { name: 'Branco', value: 9, color: '#FFFFFF' }
  ],
  resistorValue: function (band1, band2, band3, multiplierExp) {
    return (band1 * 10 + band2 + band3 / 10) * Math.pow(10, multiplierExp);
  },
  bmi: function (weightKg, heightM) { return weightKg / (heightM * heightM); },
  bmiCategory: function (bmi) {
    if (bmi < 18.5) return 'Abaixo do peso';
    if (bmi < 25) return 'Peso normal';
    if (bmi < 30) return 'Sobrepeso';
    return 'Obesidade';
  },
  macroCalories: function (protein, carbs, fat) { return protein * 4 + carbs * 4 + fat * 9; }
};
