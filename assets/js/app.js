$(document).ready(function(){
    $('#slider').slick({
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"></ion-icon></button>`
    });
  });