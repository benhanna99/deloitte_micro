// PRELOADER
window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});

// Count Down
$(function () {
    $('#hms_timer').countdowntimer({
        startDate: "2021/04/01 12:00:00",
        dateAndTime: "2021/04/30 12:00:00",
        days: 13,
        hours: 13,
        minutes: 10,
        seconds: 10,
        displayFormat: "DHMS",
        size: "lg",
        responsiveWidth: 768,
        timeSeparator: "<span>:</span>",
    });
});

// OWL One
$(function () {
    var owl = $('.owl-carousel'),

        owlOptions = {
            loop: true,
            center: true,
            slideSpeed: 2000,
            nav: true,
            items: 1,
            dots: false,
            navText: ['<span class="arrow-left fas fa-chevron-left fa-2x"></span>', '<span class="arrow-right fas fa-chevron-right fa-2x"></span>'],
        };

    if ($(window).width() < 992) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function () {
        if ($(window).width() < 992) {
            if ($('.owl-carousel').hasClass('off')) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if (!$('.owl-carousel').hasClass('off')) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});

// Award slider
$(function () {
    var owl = $('.award-carousel'),

        owlOptions = {
            loop: true,
            slideSpeed: 2000,
            nav: true,
            items: 3,
            dots: false,
            navText: ['<span class="arrow-left fas fa-chevron-left fa-2x"></span>', '<span class="arrow-right fas fa-chevron-right fa-2x"></span>'],
            responsive : {

             1024 : {
                 items: 3,
                },
               
              992 : {
                 items:3,
                },

                768 : {
                    items: 1,
                },
                0 : {
                    items: 1,
                }
            }
        };

    if ($(window).width() < 1250) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function () {
        if ($(window).width() < 992) {
            if ($('.award-carousel').hasClass('off')) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if (!$('.award-carousel').hasClass('off')) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});