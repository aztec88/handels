$(document).foundation();

//SLIDER FOR HOME
$('.autoplay').slick({
  slidesToShow: 1,
  lazyLoad: 'ondemand',
  dots: true,
  arrows: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

//PRODUCT GALLERY
$('.slider-for').slick({
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  arrows: false,
  centerMode: false,
  focusOnSelect: true
});
