$(document).ready(function () {
  /* **** AOS **** */
  AOS.init({
    duration: 1000,
    once: true,
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $("header").addClass("nav-new");
    } else {
      $("header").removeClass("nav-new");
    }
  });

  $(".navbar-toggler").on("click", function () {
    $("body").toggleClass("add-fix");
  });

  $(".btn-bar").on("click", function () {
    $(".navbar-nav-row").toggleClass("show");
    $(".btn-bar").toggleClass("show");
  });
  /* **** End AOS **** */

  window.addEventListener("scroll", function () {
    // const section = document.querySelector(".parallax-img");
    // const rect = section.getBoundingClientRect();
    // const offset = rect.top * 0.1; // 0.3 = slow speed

    // section.querySelectorAll("img").forEach((img) => {
    //   img.style.transform = `translateY(${offset}px)`;
    // });
    const section = document.querySelector(".parallax-img");

    if (section) {
      window.addEventListener("scroll", () => {
        const rect = section.getBoundingClientRect();
        const offset = rect.top * 0.1;

        section.querySelectorAll("img").forEach((img) => {
          img.style.transform = `translateY(${offset}px)`;
        });
      });
    }
  });

  // ============================================== [ Init Logo Slider ] ==============================================
  function initLogoSlider() {
    let logoSlider = new Swiper(".logoSlider", {
      slidesPerView: "auto",
      spaceBetween: 40,
      loop: true,
      speed: 5000,
      freeMode: true,
      allowTouchMove: false,
      loopAdditionalSlides: 2,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      breakpoints: {
        0: {
          spaceBetween: 40,
        },
        768: {
          spaceBetween: 50,
        },
        992: {
          spaceBetween: 60,
        },
        1200: {
          spaceBetween: 70,
        },
      },
    });
  }
  initLogoSlider();

  // ============================================== [ Init References Slider ] ==============================================
  function initReferencesSlider() {
    let referencesSlider = new Swiper(".referencesSlider", {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3.45,
          spaceBetween: 45,
        },
      },
    });
  }
  initReferencesSlider();

  // ============================================== [ Init Fancybox ] ==============================================
  Fancybox.bind("[data-fancybox]", {});
});
