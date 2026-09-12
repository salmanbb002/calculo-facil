// Calculadora gráfica — plots y = f(x) on a canvas using ENG.sci to parse
// and evaluate the user's function expression (radians mode, standard for
// graphing trig functions).
(function () {
  var fnInput = document.getElementById('graphFn');
  var xMinInput = document.getElementById('graphXMin');
  var xMaxInput = document.getElementById('graphXMax');
  var plotBtn = document.getElementById('graphPlot');
  var canvas = document.getElementById('graphCanvas');
  var resultBox = document.getElementById('graphResult');
  if (!canvas || !plotBtn) return;
  var ctx = canvas.getContext('2d');

  function draw() {
    var W = canvas.width, H = canvas.height;
    var expr = (fnInput.value || 'x').replace(/×/g, '*').replace(/÷/g, '/');
    var xMin = CF.parseNum(xMinInput.value);
    var xMax = CF.parseNum(xMaxInput.value);
    if (isNaN(xMin) || isNaN(xMax) || xMin >= xMax) {
      CF.showResult(resultBox, 'Erro', 'Informe um intervalo válido (x mínimo < x máximo)', true);
      return;
    }
    var ast;
    try { ast = ENG.sci.parse(expr); } catch (e) {
      CF.showResult(resultBox, 'Erro', 'Não foi possível interpretar a função', true);
      return;
    }
    var N = 600;
    var xs = [], ys = [];
    var yMin = Infinity, yMax = -Infinity;
    for (var i = 0; i <= N; i++) {
      var x = xMin + (xMax - xMin) * (i / N);
      var y = ENG.sci.evaluate(ast, { x: x, angleMode: 'rad' });
      xs.push(x);
      if (isFinite(y)) { ys.push(y); if (y < yMin) yMin = y; if (y > yMax) yMax = y; }
      else ys.push(null);
    }
    if (!isFinite(yMin) || !isFinite(yMax)) {
      CF.showResult(resultBox, 'Erro', 'A função não produziu valores numéricos válidos nesse intervalo', true);
      return;
    }
    if (yMin === yMax) { yMin -= 1; yMax += 1; }
    var padY = (yMax - yMin) * 0.1 || 1;
    yMin -= padY; yMax += padY;

    function toPx(x, y) {
      var px = (x - xMin) / (xMax - xMin) * W;
      var py = H - (y - yMin) / (yMax - yMin) * H;
      return [px, py];
    }

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, W, H);

    // grid
    ctx.strokeStyle = '#e6e6e6'; ctx.lineWidth = 1;
    var gridLinesX = 10, gridLinesY = 8;
    for (var gx = 0; gx <= gridLinesX; gx++) {
      var px = W * gx / gridLinesX;
      ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke();
    }
    for (var gy = 0; gy <= gridLinesY; gy++) {
      var py = H * gy / gridLinesY;
      ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(W, py); ctx.stroke();
    }

    // axes (x=0 / y=0 if within range)
    ctx.strokeStyle = '#9aa5b1'; ctx.lineWidth = 1.5;
    if (xMin <= 0 && xMax >= 0) {
      var zx = toPx(0, yMin)[0];
      ctx.beginPath(); ctx.moveTo(zx, 0); ctx.lineTo(zx, H); ctx.stroke();
    }
    if (yMin <= 0 && yMax >= 0) {
      var zy = toPx(xMin, 0)[1];
      ctx.beginPath(); ctx.moveTo(0, zy); ctx.lineTo(W, zy); ctx.stroke();
    }

    // curve
    ctx.strokeStyle = '#00469e'; ctx.lineWidth = 2.5; ctx.beginPath();
    var started = false;
    for (var j = 0; j < xs.length; j++) {
      if (ys[j] === null) { started = false; continue; }
      var p = toPx(xs[j], ys[j]);
      if (!started) { ctx.moveTo(p[0], p[1]); started = true; }
      else ctx.lineTo(p[0], p[1]);
    }
    ctx.stroke();

    CF.showResult(resultBox, 'Gráfico gerado', 'f(x) = ' + expr + '  •  x ∈ [' + CF.fmt(xMin, 2) + ', ' + CF.fmt(xMax, 2) + ']  •  y ∈ [' + CF.fmt(yMin + padY, 2) + ', ' + CF.fmt(yMax - padY, 2) + ']');
  }

  plotBtn.addEventListener('click', draw);
  draw(); // plot the default function on page load
})();
