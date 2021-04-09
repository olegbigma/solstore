$(document).ready(function () {
  $("#lightgallery").lightGallery();
});
$(document).ready(function () {
  $("#lightgallery2").lightGallery();
});
$(document).ready(function () {
  $("#lightgallery3").lightGallery();
});
$(document).ready(function () {
  $("#lightgallery4").lightGallery();
});
$(document).ready(function () {
  $("#lightgallery5").lightGallery();
});
$(document).ready(function () {
  $("#lightgallery6").lightGallery();
});
$(document).ready(function () {
  $("#lightgallery7").lightGallery();
});
$(document).ready(function () {
  $("#lightgallery8").lightGallery();
});

let sections;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    sections = document.querySelector(this.getAttribute("href"));
    sections.scrollIntoView({
      behavior: "smooth",
    });
  });
});

new WOW({
  mobile: false,
}).init();

$(".single-slider").slick({
  prevArrow:
    '<button class="slick-prev" aria-label="Previous" type="button"><img src="images/chevron-left.svg"/></button>',
  nextArrow:
    '<button class="slick-next" aria-label="Next" type="button"><img src="images/chevron-right.svg"/></button>',
});
