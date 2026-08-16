/* Lightweight, dependency-free dot carousel for the /portfolio/ research figures.
   Dots are the primary visible navigation; clicking the left/right half of the
   image is an optional shortcut to the previous/next slide. */
(function () {
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var slides = carousel.querySelectorAll('.research-carousel__slide');
    var dots = carousel.querySelectorAll('.research-carousel__dot');
    var total = slides.length;

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

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(parseInt(dot.getAttribute('data-slide-index'), 10));
      });
    });

    if (total > 1) {
      slides.forEach(function (slide) {
        var img = slide.querySelector('img');
        if (!img) {
          return;
        }

        img.addEventListener('click', function (event) {
          var rect = img.getBoundingClientRect();
          var clickX = event.clientX - rect.left;
          var goingNext = clickX > rect.width / 2;
          var current = activeIndex();
          var next = goingNext ? (current + 1) % total : (current - 1 + total) % total;
          showSlide(next);
        });
      });
    }
  });
})();
