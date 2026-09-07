(function () {
  var screen = document.getElementById('calcTotalChiffre');
  var carried = document.getElementById('calcCarriedValue');
  var historyBody = document.querySelector('#historyTable tbody');
  if (!screen) return;

  var current = '0';
  var pendingOp = null;
  var storedValue = null;
  var justEvaluated = false;

  function render() {
    screen.textContent = current;
    carried.textContent = pendingOp && storedValue !== null
      ? CF.fmt(storedValue) + ' ' + pendingOp
      : '';
  }

  function inputDigit(d) {
    if (justEvaluated) { current = '0'; justEvaluated = false; }
    if (current === '0' && d !== '.') current = d;
    else if (d === '.' && current.indexOf('.') !== -1) return;
    else current += d;
    render();
  }

  function clearEntry() { current = '0'; justEvaluated = false; render(); }
  function clearAll() { current = '0'; pendingOp = null; storedValue = null; justEvaluated = false; render(); }

  function apply(a, b, op) {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? NaN : a / b;
    }
  }

  function setOp(op) {
    var val = CF.round5(parseFloat(current.replace(',', '.')) || 0);
    if (pendingOp && storedValue !== null && !justEvaluated) {
      var res = CF.round5(apply(storedValue, val, pendingOp));
      logHistory(storedValue + ' ' + pendingOp + ' ' + val, res);
      storedValue = res;
      current = String(res);
    } else {
      storedValue = val;
    }
    pendingOp = op;
    justEvaluated = false;
    render();
  }

  function equals() {
    if (pendingOp === null || storedValue === null) return;
    var val = CF.round5(parseFloat(current.replace(',', '.')) || 0);
    var res = CF.round5(apply(storedValue, val, pendingOp));
    logHistory(storedValue + ' ' + pendingOp + ' ' + val, res);
    current = String(res);
    storedValue = null;
    pendingOp = null;
    justEvaluated = true;
    render();
  }

  function logHistory(op, result) {
    if (!historyBody) return;
    if (isNaN(result)) result = 'Erro';
    var tr = document.createElement('tr');
    var now = new Date();
    var time = now.toLocaleTimeString('pt-BR');
    tr.innerHTML =
      '<td contenteditable="true">' + op + '</td>' +
      '<td contenteditable="true">' + result + '</td>' +
      '<td contenteditable="true">' + time + '</td>' +
      '<td contenteditable="true"></td>';
    historyBody.prepend(tr);
    document.getElementById('historyWrap').style.display = 'block';
  }

  document.querySelectorAll('.btnCalc[data-digit]').forEach(function (b) {
    b.addEventListener('mousedown', function (e) { e.preventDefault(); inputDigit(b.getAttribute('data-digit')); });
  });
  document.querySelectorAll('.btnCalc[data-op]').forEach(function (b) {
    b.addEventListener('mousedown', function (e) { e.preventDefault(); setOp(b.getAttribute('data-op')); });
  });
  var btnCE = document.getElementById('btnCE');
  var btnC = document.getElementById('btnC');
  var btnEqual = document.getElementById('btnEqual');
  if (btnCE) btnCE.addEventListener('mousedown', function (e) { e.preventDefault(); clearEntry(); });
  if (btnC) btnC.addEventListener('mousedown', function (e) { e.preventDefault(); clearAll(); });
  if (btnEqual) btnEqual.addEventListener('mousedown', function (e) { e.preventDefault(); equals(); });

  // thousands separator — press and hold
  var btnThousands = document.getElementById('btnThousands');
  var thousandsOn = false;
  function applyThousands(on) {
    var num = parseFloat(current.replace(/\./g, '').replace(',', '.'));
    if (isNaN(num)) return;
    screen.textContent = on ? num.toLocaleString('pt-BR') : current;
  }
  if (btnThousands) {
    btnThousands.addEventListener('mousedown', function () { thousandsOn = true; applyThousands(true); });
    ['mouseup', 'mouseleave'].forEach(function (evt) {
      btnThousands.addEventListener(evt, function () { if (thousandsOn) { thousandsOn = false; render(); } });
    });
  }

  // editable screen
  screen.addEventListener('blur', function () {
    var txt = screen.textContent.trim();
    if (/^-?\d+([.,]\d+)?$/.test(txt)) {
      current = txt.replace(',', '.');
      justEvaluated = false;
    }
    render();
  });

  // keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    if (document.activeElement === screen) {
      if (e.key === 'Enter') { e.preventDefault(); screen.blur(); }
      return;
    }
    if (e.key >= '0' && e.key <= '9') inputDigit(e.key);
    else if (e.key === '.' || e.key === ',') inputDigit('.');
    else if (e.key === '+') setOp('+');
    else if (e.key === '-') setOp('-');
    else if (e.key === '*') setOp('×');
    else if (e.key === '/') { e.preventDefault(); setOp('÷'); }
    else if (e.key === 'Enter' || e.key === '=') equals();
    else if (e.key === 'ArrowLeft') clearEntry();
    else if (e.key === 'ArrowRight') clearAll();
  });

  // history export
  var exportCsv = document.getElementById('historyExportCsv');
  var exportPdf = document.getElementById('historyExportPdf');
  if (exportCsv) exportCsv.addEventListener('click', function () {
    var rows = [['Operacao', 'Resultado', 'Hora', 'Nota']];
    document.querySelectorAll('#historyTable tbody tr').forEach(function (tr) {
      rows.push(Array.prototype.map.call(tr.children, function (td) { return '"' + td.textContent.replace(/"/g, '""') + '"'; }));
    });
    var csv = rows.map(function (r) { return r.join(','); }).join('\n');
    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'historico-calculadora.csv'; a.click();
    URL.revokeObjectURL(url);
  });
  if (exportPdf) exportPdf.addEventListener('click', function () {
    var w = window.open('', '_blank');
    var rows = document.querySelectorAll('#historyTable tbody tr');
    var html = '<html><head><title>Historico</title><style>table{border-collapse:collapse;width:100%;font-family:sans-serif}td,th{border:1px solid #ccc;padding:6px;font-size:13px}</style></head><body>' +
      '<h2>Historico de calculos</h2><table><tr><th>Operacao</th><th>Resultado</th><th>Hora</th><th>Nota</th></tr>';
    rows.forEach(function (tr) {
      html += '<tr>' + Array.prototype.map.call(tr.children, function (td) { return '<td>' + td.textContent + '</td>'; }).join('') + '</tr>';
    });
    html += '</table></body></html>';
    w.document.write(html);
    w.document.close();
    w.focus();
    w.print();
  });

  render();
})();
