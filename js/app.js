$(document).ready(function() {
    $('.food-slider').slick({
        // Now to show each image inside one slide we will do the configrations here
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow: '.prev-btn',
        nextArrow: '.next-btn',
        autoplay: true
    });
}); 