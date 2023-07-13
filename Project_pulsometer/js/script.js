$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 600,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../icons/previous-arrow.png" alt="previous_arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../icons/next-arrow.png" alt="next_arrow"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
