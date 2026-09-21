/* vanilla JS (jQuery removed) */
(function () {
  'use strict';

  function hidePreloader() {
    var pre = document.getElementById('preloader');
    if (!pre || pre.dataset.hidden) return;
    pre.dataset.hidden = '1';
    pre.style.transition = 'opacity .6s ease';
    pre.style.opacity = '0';
    setTimeout(function () { pre.style.display = 'none'; }, 600);
  }

  // Hide once the page finishes loading (short delay matches the original fade)
  window.addEventListener('load', function () { setTimeout(hidePreloader, 200); });
  // Safety net: never let the preloader trap the page
  setTimeout(hidePreloader, 3000);
})();
