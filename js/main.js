document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });

  document.querySelectorAll(".header__popup-btn").forEach((item) => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(
        ".header__popup-dropdown"
      );

      document.querySelectorAll(".header__popup-btn").forEach((el) => {
        if (el != btn) {
          el.classList.remove("popup__active-btn");
        }
      });

      document.querySelectorAll(".header__popup-dropdown").forEach((el) => {
        if (el != dropdown) {
          el.classList.remove("popup__active-dropdown");
        }
      });
      dropdown.classList.toggle("popup__active-dropdown");
      btn.classList.toggle("popup__active-btn");
    });
  });

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__popup-list")) {
      document.querySelectorAll(".header__popup-dropdown").forEach((el) => {
        el.classList.remove("popup__active-dropdown");
      });
      document.querySelectorAll(".header__popup-btn").forEach((el) => {
        el.classList.remove("popup__active-btn");
      });
    }
  });

  new SimpleBar(document.querySelector(".simplebar-1"), {
    autoHide: false,
    scrollbarMaxSize: 25,
  });

  new SimpleBar(document.querySelector(".simplebar-2"), {
    autoHide: false,
    scrollbarMaxSize: 25,
  });

  new SimpleBar(document.querySelector(".simplebar-3"), {
    autoHide: false,
    scrollbarMaxSize: 25,
  });

  new SimpleBar(document.querySelector(".simplebar-4"), {
    autoHide: false,
    scrollbarMaxSize: 25,
  });

  new SimpleBar(document.querySelector(".simplebar-5"), {
    autoHide: false,
    scrollbarMaxSize: 25,
  });

  document
    .querySelector(".header__search-btn")
    .addEventListener("click", function () {
      document
        .querySelector(".header__search-form")
        .classList.add("header__form-active");
      this.classList.add("search__active");
      if (window.innerWidth <= 991) {
        document
          .querySelector(".header__search")
          .classList.add("header__search-active");
        document
          .querySelector(".header__search-form-btn-x ")
          .classList.add("header__search-form-btn-x-active");
      }
    });

  document.addEventListener("click", function (e) {
    let target = e.target;
    let form = document.querySelector(".header__search-form");
    if (!target.closest(".header__form-container")) {
      form.classList.remove("header__form-active");
      form.querySelector("input").value = "";
      document
        .querySelector(".header__search-btn")
        .classList.remove("search__active");
      document
        .querySelector(".header__search")
        .classList.remove("header__search-active");
    }

    if (target.closest(".header__search-form-btn-x")) {
      document
        .querySelector(".header__search-form")
        .classList.remove("header__form-active");
      document
        .querySelector(".header__search-btn")
        .classList.remove("search__active");
      document
        .querySelector(".header__search")
        .classList.remove("header__search-active");
    }
  });

  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      document
        .querySelector(".header__nav")
        .classList.add("header__nav-active");
      document
        .querySelector(".header__nav-close")
        .classList.add("header__nav-close-active");
      document
        .querySelector(".header__logIn")
        .classList.add("header__logIn-active");
      document.querySelector(".header__logIn-link").classList.add("btn-focus");
      document
        .querySelector(".header__logIn-link")
        .classList.remove("link-focus");
    });

  document.addEventListener("click", function (e) {
    let target = e.target;
    let nav = document.querySelector(".header__nav");
    if (!target.closest(".header__nav, .header__burger, .header__logIn")) {
      nav.classList.remove("header__nav-active");
      document
        .querySelector(".header__logIn")
        .classList.remove("header__logIn-active");
      document
        .querySelector(".header__nav-close")
        .classList.remove("header__nav-close-active");
    }

    if (target.closest(".header__nav-close")) {
      document
        .querySelector(".header__nav")
        .classList.remove("header__nav-active");
      document
        .querySelector(".header__logIn")
        .classList.remove("header__logIn-active");
      document
        .querySelector(".header__nav-close")
        .classList.remove("header__nav-close-active");
    }
  });

  $(document).ready(function () {
    $("#hero__content").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });

  const heroSwiper = new Swiper(".hero__swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 3000,
    autoplay: {
      delay: 2000,
    },
    effect: "fade",
    allowTouchMove: false,
  });

  const element = document.querySelector(".gallery__filter-form-selects");
  const choices = new Choices(element, {
    placeholder: false,
    itemSelectText: "",
    searchEnabled: false,
    shouldSort: false,
    renderChoiceLimit: 3,
  });

  let gallerySelects = document.querySelector(".choices__item--selectable");
  let galleryBlock = document.querySelector(".gallery__content");
  gallerySelects.addEventListener("click", function () {
    galleryBlock.classList.toggle("gallery__content-active");
  });

  const gallerySwiper = new Swiper(".gallery__swiper", {
    a11y: {
      nextSlideMessage: "Следующая группа картин",
      prevSlideMessage: "Предыдущая группа картин",
      slideLabelMessage: "'{{index}} из {{slidesLength}} картин'"
    },

    navigation: {
      nextEl: ".gallery__swiper-btn-next",
      prevEl: ".gallery__swiper-btn-prev",
    },

    pagination: {
      el: ".gallery__swiper-pagination",
      type: "fraction",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
        spaceBetween: 30,
      },
      620: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
      },

      1300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
        },
        spaceBetween: 34,
      },

      1500: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 50,
      },
    },
  });

  $(function () {
    $(".catalog__accordion-triger").accordion({
      collapsible: true,
      icons: false,
      heightStyle: "content",
      animate: {
        easing: "linear",
      },
    });
  });

  document
    .querySelectorAll(".catalog__header-btn")
    .forEach(function (catalogBtn) {
      catalogBtn.addEventListener("click", function (event) {
        let path = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".catalog__header-btn")
          .forEach(function (catalogBtn) {
            catalogBtn.classList.remove("catalog__header-btn-active");
          });

        event.target.classList.add("catalog__header-btn-active");

        document
          .querySelectorAll(".catalog__accordion")
          .forEach(function (catalogAccordion) {
            catalogAccordion.classList.remove("catalog__accordion-active");
          });

        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add("catalog__accordion-active");
      });
    });

  document
    .querySelectorAll(".catalog__accordion-triger-name-link")
    .forEach(function (trigerBtn) {
      trigerBtn.addEventListener("click", function (event) {
        let catalog_link = event.currentTarget.dataset.catalog_link;

        document
          .querySelectorAll(".catalog__accordion-triger-name-link")
          .forEach(function (trigerBtn) {
            trigerBtn.classList.remove(
              "catalog__accordion-triger-name-link-active"
            );
          });

        event.target.classList.add(
          "catalog__accordion-triger-name-link-active"
        );

        document
          .querySelectorAll(".catalog__accordion-content-item")
          .forEach(function (catalogContent) {
            catalogContent.classList.remove(
              "catalog__accordion-content-item-active"
            );
          });

        document
          .querySelector(`[data-catalog_content="${catalog_link}"]`)
          .classList.add("catalog__accordion-content-item-active");
      });
    });

  let eventsBtn = document.querySelector(".events__content-btn");
  const slider = document.querySelector(".events__swiper");
  let allitems = document.querySelectorAll(".events__slide");
  eventsBtn.addEventListener("click", function () {
    allitems.forEach((item) => {
      item.style.display = "block";
    });

    this.style.display = "none";
  });

  let eventsSwiper;

  function mobileSlider() {
    if (window.innerWidth <= 620 && slider.dataset.mobile == "false") {
      allitems.forEach((item) => {
        item.classList.add("events__slide-active");
      });

      eventsSwiper = new Swiper(slider, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
        spaceBetween: 15,
        loop: true,
        slideClass: "events__slide",
        pagination: {
          el: ".events__swiper-pagination",
          clickable: true,
        },
      });

      slider.dataset.mobile = "true";
    }

    if (window.innerWidth > 620 && slider.dataset.mobile == "true") {
      slider.dataset.mobile = "false";
      allitems.forEach((item) => {
        item.classList.remove("events__slide-active");
      });
      if (slider.classList.contains("swiper-initialized")) {
        eventsSwiper.destroy();
      }
    }
  }

  mobileSlider();

  window.addEventListener("resize", () => {
    mobileSlider();
  });

  const publicationBtn = document.querySelector(".editions__checkbox-heading");
  const publicationFormLabel = document.querySelectorAll(
    ".editions__checkbox-label"
  );
  const publicationFormInput = document.querySelectorAll(
    ".editions__checkbox-input"
  );
  const publicationBtnArrow = document.querySelector(
    ".editions__checkbox-heading-icon"
  );

  const showActiveCheckbox = () => {
    publicationFormInput.forEach((el) => {
      if (el.checked === true) {
        el.parentNode.classList.add("active_label");
      }
    });
  };

  const publicationAccordion = () => {
    publicationBtn.addEventListener("click", () => {
      publicationBtnArrow.classList.toggle("arrow-icon-active");
      publicationFormLabel.forEach((el) => {
        el.classList.toggle("active_label");
        showActiveCheckbox();
      });
    });
  };

  publicationAccordion();

  const publicationCheck = () => {
    for (let i = 0; i < publicationFormInput.length; i++) {
      const el = publicationFormInput[i];
      el.addEventListener("change", () => {
        if (
          !el.checked &&
          !publicationBtnArrow.classList.contains("arrow-icon-active")
        ) {
          el.parentNode.classList.remove("active_label");
        }

        showActiveCheckbox();
      });
    }

    showActiveCheckbox();
  };

  publicationCheck();

  const editionSlider = document.querySelector(".edition__swiper-container");
  let editionsSwiper;

  function desctopSlider() {
    if (window.innerWidth >= 620 && editionSlider.dataset.mobile == "true") {
      editionsSwiper = new Swiper(editionSlider, {
        a11y: {
          nextSlideMessage: "Следующая группа изданий",
          prevSlideMessage: "Предыдущая группа изданий",
          slideLabelMessage: "'{{index}} из {{slidesLength}} изданий'"
        },

        navigation: {
          nextEl: ".edition__swiper-btn-next",
          prevEl: ".edition__swiper-btn-prev",
        },

        pagination: {
          el: ".edition__swiper-pagination",
          type: "fraction",
        },

        breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 1,
            },
            spaceBetween: 34,
          },

          620: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 1,
            },
            spaceBetween: 34,
          },

          992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 1,
            },
            spaceBetween: 50,
          },

          1450: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
              rows: 1,
            },
            spaceBetween: 50,
          },
        },
      });

      editionSlider.dataset.mobile = "false";
    }

    if (window.innerWidth <= 620 && editionSlider.dataset.mobile == "false") {
      editionSlider.dataset.mobile = "true";
      if (editionSlider.classList.contains("swiper-initialized")) {
        editionsSwiper.destroy();
      }
    }
  }

  desctopSlider();

  window.addEventListener("resize", () => {
    desctopSlider();
  });

  tippy(".projects__description-tooltip-marker", {
    content(reference) {
      let id = reference.getAttribute("data-template");
      let template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML: true,
    theme: "purple",
  });

  const projectsSwiper = new Swiper(".projects__swiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
    },
    spaceBetween: 30,

    a11y: {
      nextSlideMessage: "Следующая группа партнёров",
      prevSlideMessage: "Предыдущая группа партнёров",
      slideLabelMessage: "'{{index}} из {{slidesLength}} партнёров'"
    },

    navigation: {
      nextEl: ".projects__swiper-btn-next",
      prevEl: ".projects__swiper-btn-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
        spaceBetween: 34,
      },
      620: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
        spaceBetween: 34,
      },

      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
        spaceBetween: 50,
      },
    },
  });

  let selector = document.getElementById("form_tel");
  let im = new Inputmask("+7(999) 999-99-99");

  im.mask(selector);

  new JustValidate(".contacts__form", {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 15,
      },

      phone: {
        required: true,
        function: (nama, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },

    messages: {
      name: {
        required: "обязательное поле",
        minLength: "Мин. количество символов: 3.",
        maxLength: "Макс. количество символов: 15.",
      },
      phone: "Недопустимый формат",
    },
  });

  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map("map", {
      center: [55.758463, 37.601079],
      zoom: 14,
    });

    let myPlacemark = new ymaps.Placemark(
      [55.758463, 37.601079],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/placemark.png",
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -25],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }

});
