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

    

    // Центрируем картинки в главном навигационном меню
    $('.dropdown-topmenu__level2 .dropdown-topmenu__link').each(function( index ) {
        $(this).find('img').css('margin-left', '-' + $(this).width()/2 + 'px');
    });

    // Подсвечиваем ссылки родителей в главном навигационном меню
    $('.dropdown-topmenu__list').hover(function() {
        $(this).parent('li').toggleClass('dropdown-topmenu__item_active');
    }, function() {
        $(this).parent('li').toggleClass('dropdown-topmenu__item_active');
    });

    $('.header__link').on('click', function() {
        $('.fancybox-container').hide();
    });








});