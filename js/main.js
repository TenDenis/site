const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination

  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    // effect: 'coverflow',
  
  });
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination

  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__item--next',
      prevEl: '.reviews-slider__item--prev',
    },
  
  });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
  console.log('клик по кнопке меню');
  document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom--visible");
  });
