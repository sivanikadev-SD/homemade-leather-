/* ━━━━━━━━━━━━━━━━ MAIN.JS – Cordovan Atelier ━━━━━━━━━━━━━━━━ */

/* Apply saved theme & direction immediately on load to avoid flash */
(function () {
  var savedTheme = localStorage.getItem('ca-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  var savedDir = localStorage.getItem('ca-dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
})();

/* ─── Theme ─── */
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('ca-theme', next);
}

/* ─── RTL / LTR Direction ─── */
function toggleRTL() {
  var current = document.documentElement.getAttribute('dir') || 'ltr';
  var next = current === 'rtl' ? 'ltr' : 'rtl';
  document.documentElement.setAttribute('dir', next);
  localStorage.setItem('ca-dir', next);

  /* Update the button label if present */
  var btn = document.getElementById('rtl-toggle-btn');
  if (btn) btn.title = next === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';
}

/* ─── Mobile Menu ─── */
function toggleMobile() {
  var menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/* ─── Password Visibility ─── */
function togglePwd(id) {
  var el = document.getElementById(id);
  if (el) el.type = el.type === 'password' ? 'text' : 'password';
}
