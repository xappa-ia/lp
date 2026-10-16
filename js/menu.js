// Fecha o menu mobile ao tocar num link ou ao pressionar Esc.
// Sem este script o menu continua funcionando (checkbox em CSS).
(function () {
  var toggle = document.getElementById('menu');
  if (!toggle) return;
  var close = function () { toggle.checked = false; };
  document.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
