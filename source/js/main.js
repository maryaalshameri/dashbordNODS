const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlider() {
      slides.forEach((slide, i) => {
        if (i === currentIndex) {
          slide.classList.remove('hidden');
          slide.classList.add('flex');
        } else {
          slide.classList.add('hidden');
          slide.classList.remove('flex');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 3000); // ← كل 3 ثواني
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });

    document.addEventListener('DOMContentLoaded', () => {
      updateSlider();
      startAutoSlide();
    });