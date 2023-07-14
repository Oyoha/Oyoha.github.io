// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 600,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/previous-arrow.png" alt="previous_arrow"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/next-arrow.png" alt="next_arrow"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
});

document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
});

$(document).ready(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active ")
        .closest("div.container") //родительский класс
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");
});
