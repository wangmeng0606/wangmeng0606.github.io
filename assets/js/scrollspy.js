/* Highlight the navigation link of the section currently in view on the one-page home. */
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.masthead a[href*="#"]'));
  if (!links.length) return;

  var sections = links
    .map(function (link) {
      var id = link.getAttribute('href').split('#')[1];
      return { link: link, el: id ? document.getElementById(id) : null };
    })
    .filter(function (item) { return item.el; });
  if (!sections.length) return;

  function update() {
    var offset = window.innerHeight * 0.3;
    var current = null;
    sections.forEach(function (item) {
      if (item.el.getBoundingClientRect().top <= offset) current = item;
    });
    sections.forEach(function (item) {
      var active = item === current;
      item.link.classList.toggle('is-current', active);
      if (active) item.link.setAttribute('aria-current', 'true');
      else item.link.removeAttribute('aria-current');
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
