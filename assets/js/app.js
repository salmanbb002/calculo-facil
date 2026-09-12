// Shared header/nav behaviour for every page.
(function () {
  var hamburger = document.getElementById('menu_hamburger');
  var navEl = document.querySelector('nav');
  var navDetails = document.getElementById('navDetails');

  if (hamburger && navEl && navDetails) {
    hamburger.addEventListener('click', function () {
      navEl.classList.toggle('open');
      if (!navEl.classList.contains('open')) closeAllPanels();
    });
  }

  function closeAllPanels() {
    if (!navDetails) return;
    navDetails.classList.remove('open');
    navDetails.querySelectorAll(':scope > div').forEach(function (p) {
      p.classList.remove('open');
    });
    if (navEl) navEl.querySelectorAll(':scope > div').forEach(function (b) {
      b.classList.remove('active');
    });
  }

  if (navEl && navDetails) {
    navEl.querySelectorAll(':scope > div').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-panel');
        var target = targetId ? document.getElementById(targetId) : null;
        var isOpen = target && target.classList.contains('open');

        navEl.querySelectorAll(':scope > div').forEach(function (b) { b.classList.remove('active'); });
        navDetails.querySelectorAll(':scope > div').forEach(function (p) { p.classList.remove('open'); });

        if (target && !isOpen) {
          target.classList.add('open');
          navDetails.classList.add('open');
          btn.classList.add('active');
        } else {
          navDetails.classList.remove('open');
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!navEl.contains(e.target) && !navDetails.contains(e.target)) {
        closeAllPanels();
      }
    });
  }
})();

// Shared helpers reused by tool pages.
var CF = {
  round5: function (n) {
    return Math.round((n + Number.EPSILON) * 1e5) / 1e5;
  },
  fmt: function (n, maxDecimals) {
    if (!isFinite(n)) return '—';
    var d = maxDecimals === undefined ? 5 : maxDecimals;
    var r = Math.round((n + Number.EPSILON) * Math.pow(10, d)) / Math.pow(10, d);
    return r.toLocaleString('pt-BR', { maximumFractionDigits: d });
  },
  parseNum: function (v) {
    if (typeof v !== 'string') return NaN;
    var cleaned = v.trim().replace(/\./g, '').replace(',', '.');
    if (cleaned.indexOf('.') === -1 && v.indexOf(',') === -1) cleaned = v.trim();
    var n = parseFloat(cleaned);
    return isNaN(n) ? parseFloat(v.replace(',', '.')) : n;
  },
  showResult: function (boxEl, bigText, subText, isError) {
    boxEl.classList.toggle('error', !!isError);
    boxEl.innerHTML = '<div class="big">' + bigText + '</div>' + (subText ? '<div class="sub">' + subText + '</div>' : '');
  },
  money: function (n) {
    if (!isFinite(n)) return '—';
    return 'R$\u00a0' + n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
};
