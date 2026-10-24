/* Lightweight, dependency-free dot carousel for the /portfolio/ research figures.
   Dots are the navigation; clicking an image opens it full size (lightbox.js). Autoplay advances
   on a timer, loops, and resets whenever the user interacts manually. */
(function () {
  var AUTOPLAY_DELAY_MS = 2000;
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var slides = carousel.querySelectorAll('.research-carousel__slide');
    var dots = carousel.querySelectorAll('.research-carousel__dot');
    var total = slides.length;
    var timer = null;

    if (total < 2) {
      return;
    }

    function activeIndex() {
      var found = 0;
      slides.forEach(function (slide, i) {
        if (slide.classList.contains('is-active')) {
          found = i;
        }
      });
      return found;
    }

    function showSlide(index) {
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === index);
      });
      dots.forEach(function (dot, i) {
        var active = i === index;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });
    }

    function goTo(index) {
      showSlide(((index % total) + total) % total);
    }

    function stopAutoplay() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function startAutoplay() {
      if (prefersReducedMotion) {
        return;
      }
      stopAutoplay();
      timer = window.setInterval(function () {
        if (document.documentElement.classList.contains('lightbox-open')) {
          return;
        }
        goTo(activeIndex() + 1);
      }, AUTOPLAY_DELAY_MS);
    }

    function restartAutoplay() {
      startAutoplay();
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        goTo(parseInt(dot.getAttribute('data-slide-index'), 10));
        restartAutoplay();
      });
    });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
  });
})();
