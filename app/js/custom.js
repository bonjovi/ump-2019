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
});