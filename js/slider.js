const slider = $('.slider__list').bxSlider({
  pager: false,
  controls: false
});

$('.slider__left-arrow').click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$('.slider__right-arrow').click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});