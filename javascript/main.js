document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });

  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      document
        .querySelector(".header__burger")
        .classList.toggle("header__burger-active");
      document
        .querySelector(".header__nav")
        .classList.toggle("header__nav-active");
      document
        .querySelector(".header__login")
        .classList.toggle("header__login-active");
    });

  document
    .querySelector(".header__search-x-btn")
    .addEventListener("click", function () {
      document
        .querySelector(".header__search-form")
        .classList.remove("header__search-form-active");
    });

  document
    .querySelector(".header__search")
    .addEventListener("click", function () {
      document
        .querySelector(".header__search-form")
        .classList.add("header__search-form-active");
    });

  document
    .querySelectorAll(".header__select-heading")
    .forEach(function (selectBtn) {
      selectBtn.addEventListener("click", function (event) {
        let path = event.currentTarget.dataset.path;

        document
          .querySelectorAll(
            `.header__select-heading:not([data-path="${path}"])`
          )
          .forEach(function (selectBtn) {
            selectBtn.classList.remove("header__select-heading-active");
          });

        event.target.classList.toggle("header__select-heading-active");

        document
          .querySelectorAll(
            `.header__select-content:not([data-target="${path}"])`
          )
          .forEach(function (selectContent) {
            selectContent.classList.remove("header__select-content-active");
          });

        document
          .querySelector(`[data-target="${path}"]`)
          .classList.toggle("header__select-content-active");
      });
    });

  document
    .querySelector(".header__burger")
    .addEventListener("click", function () {
      document.querySelector(".header__burger").classList.toggle("active");
      document.querySelector(".header-nav__list").classList.toggle("active");
    });

  const swiper = new Swiper(".hero__swiper-container", {
    loop: true,

    pagination: false,

    autoplay: {
      delay: 3000,
    },
  });

  $(document).ready(function () {
    $("#hero__content").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });

  const element = document.querySelectorAll(".gallery__filter-form-selects");
  element.forEach((element) => {
    const choices = new Choices(element, {
      placeholder: false,
      itemSelectText: "",
      searchEnabled: false,
      shouldSort: false,
      renderChoiceLimit: 3,
    });
  });

  const gallerySwiper = new Swiper(".swiper1", {
    autoHeight: true,
    initialSlide: 7,

    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },

    pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
    },

    breakpoints: {
      1920: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 50,
      },

      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
        spaceBetween: 34,
      },

      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
      },

      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
        spaceBetween: 30,
        initialSlide: 14,
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

  document.querySelector(".events__btn").addEventListener("click", function () {
    document
      .querySelector(".events__btn")
      .classList.add("events__btn-unactive");
    document.querySelectorAll(".events__item").forEach(function (allEvents) {
      allEvents.classList.add("events__item-active");
    });
  });

  const eventSwiperParametr = new Swiper(".event_swiper", {
    pagination: {
      el: ".event__swiper-pagination",
    },

    breakpoints: {
      1920: {
        allowTouchMove: false,
      },

      1024: {
        allowTouchMove: false,
      },

      768: {
        allowTouchMove: false,
      },

      320: {
        loop: true,
        allowTouchMove: true,
        slidesPerGroup: 1,
        slidesPerView: 1,
        grid: {
          rows: 1,
        },
        spaceBetween: 30,
      },
    },
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

  const editionsySwiper = new Swiper(".swiper2", {
    autoHeight: true,
    initialSlide: 0,
    spaceBetween: 50,

    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },

    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },

    breakpoints: {
      1920: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        slidesPerColumn: 1,
      },

      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        slidesPerColumn: 1,
      },

      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 34,
      },

      320: {
        slidesPerGroup: 7,
        slidesPerView: 7,
        grid: {
          rows: 4,
        },
        spaceBetween: 30,
      },
    },
  });

  const projectssySwiper = new Swiper(".swiper3", {
    autoHeight: true,
    slidesPerColumn: 1,
    spaceBetween: 50,
    initialSlide: 0,

    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },

    breakpoints: {
      1920: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },

      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },

      768: {
        spaceBetween: 34,
      },

      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 30,
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

      tel: {
        required: true,
        function: (nama, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
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
