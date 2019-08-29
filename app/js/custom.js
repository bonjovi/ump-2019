$(document).ready(function(){
    var owl = $(".slider").owlCarousel({
        items: 1,
        autoplay: true,
        nav: true,
        animateOut: 'fadeOut',
        dots: true,
        dotsData: true
    });

    $('.owl-dot').click(function(){owl.trigger('to.owl.carousel', [$(this).index(), 300]);});




    $('.topmenu__link.products').on('click', function(e) {
        e.preventDefault();
        $('.dropdown-topmenu__top').toggleClass('visible');
    });

    $('.dropdown-topmenu__top, .dropdown-topmenu__center').hover(function() {
        $('.dropdown-topmenu__center').toggleClass('visible');
    });

    $('.dropdown-topmenu__top ul a').click(function(e) {
        e.preventDefault();
        $('.dropdown-topmenu__center ul').removeClass('visible');
        $('.dropdown-topmenu__center ul[counter=' + $(this).attr('counter') + ']').toggleClass('visible');
    });

    $('.slider').hover(function() {
        $('.dropdown-topmenu__top').removeClass('visible');
    });

});