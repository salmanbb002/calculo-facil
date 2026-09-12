// Calculadora científica — UI wiring. Uses ENG.sci (engines.js) for parsing
// and evaluating the expression typed/tapped into the display.
(function () {
  var display = document.getElementById('sciDisplay');
  var resultBox = document.getElementById('sciResult');
  var modeBtn = document.getElementById('sciModeToggle');
  if (!display || !resultBox) return;

  var angleMode = 'deg';
  var lastAnswer = 0;

  function insertAtCursor(text) {
    var start = display.selectionStart !== null ? display.selectionStart : display.value.length;
    var end = display.selectionEnd !== null ? display.selectionEnd : display.value.length;
    var val = display.value === '0' ? '' : display.value;
    if (display.value === '0') { start = 0; end = 0; }
    display.value = val.slice(0, start) + text + val.slice(end);
    var newPos = start + text.length;
    display.focus();
    display.setSelectionRange(newPos, newPos);
  }

  document.querySelectorAll('.sciKeys [data-ins]').forEach(function (btn) {
    btn.addEventListener('click', function () { insertAtCursor(btn.getAttribute('data-ins')); });
  });

  var delBtn = document.getElementById('sciDel');
  if (delBtn) delBtn.addEventListener('click', function () {
    var start = display.selectionStart || display.value.length;
    if (start === 0) return;
    display.value = display.value.slice(0, start - 1) + display.value.slice(start);
    display.focus();
    display.setSelectionRange(start - 1, start - 1);
    if (display.value === '') display.value = '0';
  });

  var acBtn = document.getElementById('sciAC');
  if (acBtn) acBtn.addEventListener('click', function () {
    display.value = '0';
    resultBox.classList.remove('error');
    resultBox.innerHTML = '<div class="sub">O resultado aparecerá aqui</div>';
    display.focus();
  });

  var eqBtn = document.getElementById('sciEq');
  function evaluate() {
    var expr = display.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/\bans\b/gi, String(lastAnswer));
    var r = ENG.sci.run(expr, { angleMode: angleMode, ans: lastAnswer });
    if (isNaN(r) || !isFinite(r)) {
      CF.showResult(resultBox, 'Erro', 'Expressão inválida — verifique parênteses e operadores', true);
      return;
    }
    lastAnswer = r;
    CF.showResult(resultBox, CF.fmt(r, 8), expr + ' =');
    display.value = String(r);
  }
  if (eqBtn) eqBtn.addEventListener('click', evaluate);

  display.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); evaluate(); }
  });

  if (modeBtn) modeBtn.addEventListener('click', function () {
    angleMode = angleMode === 'deg' ? 'rad' : 'deg';
    modeBtn.textContent = angleMode.toUpperCase();
  });
})();
