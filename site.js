// Bascule de langue : arabe par défaut (comme l'application), mémorisée.
(function () {
  var KEY = 'zagori.site.lang';
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var lang = saved === 'fr' ? 'fr' : 'ar';

  function apply(l) {
    lang = l;
    document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', l);
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('is-ar', l === 'ar' && btn.dataset.langBtn === 'ar');
      btn.classList.toggle('is-fr', l === 'fr' && btn.dataset.langBtn === 'fr');
    });
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(lang);
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.dataset.langBtn); });
    });
  });
})();
