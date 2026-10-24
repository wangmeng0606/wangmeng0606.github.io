/* Click a research figure to view it full size. Arrow keys / buttons move between the
   figures of the same project; Esc, the close button, or a click outside closes it. */
(function () {
  var groups = Array.prototype.slice.call(document.querySelectorAll('.research-carousel'));
  if (!groups.length) return;

  var root = document.documentElement;
  var overlay = null;
  var imgEl, capEl, prevBtn, nextBtn, closeBtn;
  var items = [];
  var index = 0;
  var lastFocus = null;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Figure viewer');
    overlay.hidden = true;
    overlay.innerHTML =
      '<button type="button" class="lightbox__close" aria-label="Close">&times;</button>' +
      '<button type="button" class="lightbox__nav lightbox__nav--prev" aria-label="Previous figure">&#8249;</button>' +
      '<figure class="lightbox__figure"><img class="lightbox__img" alt=""><figcaption class="lightbox__caption"></figcaption></figure>' +
      '<button type="button" class="lightbox__nav lightbox__nav--next" aria-label="Next figure">&#8250;</button>';
    document.body.appendChild(overlay);

    imgEl = overlay.querySelector('.lightbox__img');
    capEl = overlay.querySelector('.lightbox__caption');
    prevBtn = overlay.querySelector('.lightbox__nav--prev');
    nextBtn = overlay.querySelector('.lightbox__nav--next');
    closeBtn = overlay.querySelector('.lightbox__close');

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    nextBtn.addEventListener('click', function (e) { e.stopPropagation(); step(1); });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('lightbox__figure')) close();
    });
  }

  function show(i) {
    index = ((i % items.length) + items.length) % items.length;
    var item = items[index];
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    capEl.textContent = item.caption;
    var multiple = items.length > 1;
    prevBtn.hidden = !multiple;
    nextBtn.hidden = !multiple;
  }

  function step(delta) {
    if (items.length > 1) show(index + delta);
  }

  function open(carousel, slideIndex) {
    if (!overlay) build();
    items = Array.prototype.slice.call(carousel.querySelectorAll('.research-carousel__slide')).map(function (slide) {
      var img = slide.querySelector('img');
      var cap = slide.querySelector('figcaption');
      return { src: img.currentSrc || img.src, alt: img.alt, caption: cap ? cap.textContent : img.alt };
    });
    lastFocus = document.activeElement;
    overlay.hidden = false;
    root.classList.add('lightbox-open');
    show(slideIndex);
    closeBtn.focus();
  }

  function close() {
    if (!overlay || overlay.hidden) return;
    overlay.hidden = true;
    imgEl.removeAttribute('src');
    root.classList.remove('lightbox-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('keydown', function (e) {
    if (!overlay || overlay.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  groups.forEach(function (carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.research-carousel__slide'));
    slides.forEach(function (slide, i) {
      var img = slide.querySelector('img');
      if (!img) return;
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'View figure full size: ' + (img.alt || 'research figure'));
      img.addEventListener('click', function () { open(carousel, i); });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(carousel, i);
        }
      });
    });
  });
})();
