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
    slidesPerGroup: 3,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
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
      1024: {},

      768: {},

      320: {},
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

  const editionsySwiper = new Swiper(".swiper2", {
    autoHeight: true,
    slidesPerGroup: 3,
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,
    initialSlide: 0,

    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },

    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },

    breakpoints: {
      1024: {},

      768: {},

      320: {},
    },
  });

  const projectssySwiper = new Swiper(".swiper3", {
    loop: true,
    autoHeight: true,
    slidesPerGroup: 3,
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,
    initialSlide: 0,

    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },

    breakpoints: {
      1024: {},

      768: {},

      320: {},
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
      center: [55.760748, 37.64083],
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
