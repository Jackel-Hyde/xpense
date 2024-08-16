$(document).ready(function(){
    $('.s-comment_cards').slick({
        dots: true,
        infinite: true,
        loop: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: false,
        variableWidth: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });

    document.querySelector('.menu_btn').addEventListener('click', function() {
        document.querySelector('.header_menu').classList.toggle('header_menu--active');
        document.querySelector('.header_btn').classList.toggle('header_btn--active');
    });
});