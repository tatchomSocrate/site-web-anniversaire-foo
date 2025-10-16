document.addEventListener('DOMContentLoaded', function () {
  // --- Gestion du header au scroll ---
  const header = document.querySelector('.header');
  const mainSection = document.getElementById('main-section');

  function checkScroll() {
    const mainSectionHeight = mainSection ? mainSection.offsetHeight : 0;
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > mainSectionHeight - 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();

  // --- Initialisation du carrousel Swiper (Coverflow 3D) ---
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      spaceBetween: 0,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 30,          // Angle de rotation des slides
        stretch: 0,          // Écart horizontal entre les slides
        depth: 120,          // Profondeur 3D
        modifier: 1,         // Intensité de l’effet
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          coverflowEffect: { rotate: 25, depth: 100 },
        },
        768: {
          slidesPerView: 2,
          coverflowEffect: { rotate: 35, depth: 120 },
        },
        1024: {
          slidesPerView: 3,
          coverflowEffect: { rotate: 45, depth: 150 },
        },
      },
    });
  } else {
    console.error('⚠️ Swiper non chargé. Vérifie que le script Swiper est bien importé avant ce fichier.');
  }
});
