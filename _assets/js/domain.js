var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

(function ($) {
    "use strict";

    

    
    $(window).load(function () {
        // ----------------------------------------------------------------------------------------------------------------------->
        // SITE LOADER                     ||----------- 
        // ----------------------------------------------------------------------------------------------------------------------->
        $('#loader').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });


    })


    // ---------------------------------------------------------------------------------------------------------------------------->
    // GENERAL SCRIPTS FOR ALL PAGES    ||----------- 
    // ---------------------------------------------------------------------------------------------------------------------------->

    $(document).ready(function () {
        openSite();
            
      $('.open-send-us-a-message').on('click', function() {
        _gscq.push(['trackPage','/open/send-us-a-message']);  
      })

      $('.open-request-a-callback').on('click', function() {
        _gscq.push(['trackPage','/open/request-a-callback']);  
      })



        $('.embed-link').on('click', function(event) {
            event.preventDefault();
            var pdfURL = this.getAttribute("href");

            var options = {
                pdfOpenParams: {
                    view: "FitV"
                }
            };

            var myPDF = PDFObject.embed(pdfURL, "#pdf", options);
            
        });
    

    });

    function openSite() {
        fullScreenSlider();
        header();
        scroll();
        winResize();
        pushmenu();
        sliderHero();
        sliderAll();
        scrollCallbackEle();
        shortcodeElements();

    };

    // ---------------------------------------------------------------------------------------------------------------------------->
    // RESIZE FUNCTIONS   ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->
    function winResize() {
        $(window).resize(function () {

        })
    };


})(jQuery);


// ---------------------------------------------------------------------------------------------------------------------------->
// SCROLL FUNCTIONS   ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->

function scroll() {

    // //Click Event to Scroll to Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }


    });
    $('.scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Scroll Down Elements
    $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $('#goto-about').on('click', function() {
            
        $('html, body').animate({ scrollTop: $('#about').offset()['top'] - 100 }, 800);
    })



};


// ---------------------------------------------------------------------------------------------------------------------------->
// HEADER FUNCTIONS   ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->

function header() {

    // Sticky Header Elements
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("sticky");
            $('.inner-inro').css('z-index', '-1');
        }
        else {
            $('.header').removeClass("sticky");
            $('.inner-inro').css('z-index', 'auto');
        }
    });
    heightElement();
    function heightElement() {

        // windowWidth = $(window).width();
        var windowHeight = $(window).height();
        if ($(window).width() > 767) {
            // $('.inner-inro').css('height', windowHeight - 200);
        }
        else {
            // $('.inner-inro').css({ 'height': '400px', 'padding-top': '64px' });
        }
    }

    $(window).resize(function () {
        heightElement();
    });
};


// ---------------------------------------------------------------------------------------------------------------------------->
// PUSHMENU FUNCTIONS (Top, Bottom, Right, Left)  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->

function pushmenu() {
    $('.toggle-menu').jPushMenu();
};


// ---------------------------------------------------------------------------------------------------------------------------->
// FULLSCREEN SLIDER FUNCTIONS  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->

function fullScreenSlider() {
    if ($('.fullscreen-carousel').length > 0) {

        $('.fullscreen-carousel').flexslider({
            animation: "slide",
            //  startAt: 0,
            animationSpeed: 700,
            animationLoop: true,
            slideshow: true,
            easing: "swing",
            controlNav: false,
            before: function (slider) {
                //   $('.fullscreen-carousel .overlay-hero .caption-hero').fadeOut();
                $('.fullscreen-carousel .overlay-hero .caption-hero').fadeOut().animate({ top: '80px' }, { queue: false, easing: 'easeOutQuad', duration: 700 });
                slider.slides.eq(slider.currentSlide).delay(400);
                slider.slides.eq(slider.animatingTo).delay(400);

            },
            after: function (slider) {
                //$('.fullscreen-carousel .flex-active-slide').find('.caption-hero').delay().fadeIn(1500);
                $('.fullscreen-carousel .flex-active-slide').find('.caption-hero').fadeIn(2000).animate({ top: '0' }, { queue: false, easing: 'easeOutQuad', duration: 1200 });
                BackgroundCheck.refresh();


            },
            start: function (slider) {
                $('body').removeClass('loading');
                BackgroundCheck.init({
                    targets: '.full-intro',
                    images: '.flexslider li img',

                });
            },
            useCSS: true,
        });
    };
    fullScreenCarousel();
    function fullScreenCarousel() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        if ($(window).width() > 767) {
            $('.hero-slider-1 .slides li').css("height", windowHeight);
        }
        else {
            $('.hero-slider-1 .slides li').css("height", '400px');
        }

    };
    $(window).resize(function () {
        fullScreenCarousel();
    });


};



// ---------------------------------------------------------------------------------------------------------------------------->
// SLIDER FUNCTIONS   ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->


function sliderAll() {

    // fullwidth Slider
    $('.fullwidth-slider').owlCarousel({
        slideSpeed: 400,
        singleItem: true,
        autoHeight: true,
        navigation: true,  // Show next and prev buttons
        pagination: true,  // Show pagination buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        
    });

    // Image Slider
    $('.image-slider').owlCarousel({
        navigation: true,  // Show next and prev buttons
        pagination: true,  // Show pagination buttons
        slideSpeed: 350,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoPlay: false,
        autoHeight: true,
        responsive: true
    });

    // Testimonial Slider
    $('.testimonial-carousel').owlCarousel({
        autoPlay: true,
        autoHeight: false,
        stopOnHover: true,
        singleItem: true,
        slideSpeed: 350,
        pagination: true,  // Show pagination buttons
        navigation: false,  // Hide next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        //  responsive: true
    });

    // Team Carousel
    $('.team-carousel').owlCarousel({
        autoPlay: false,
        stopOnHover: true,
        items: 3,
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: false,  // Hide pagination buttons
        navigation: false,  // Hide next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Client Carousel
    $('.client-carousel').owlCarousel({
        autoPlay: 2500,
        stopOnHover: true,
        items: 5,
        itemsDesktop: [1170, 4],
        itemsDesktopSmall: [1024, 3],
        itemsTabletSmall: [768, 2],
        itemsMobile: [480, 1],
        pagination: false,  // hide pagination buttons
        navigation: false,  // hide next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Content Slider
    $('.content-carousel').owlCarousel({
        autoPlay: true,
        autoHeight: true,
        stopOnHover: true,
        singleItem: true,
        slideSpeed: 500,
        pagination: false,  // Hide pagination buttons
        navigation: true,   // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: true
    });

    // Item-5 Carousel
    $('.item5-carousel').owlCarousel({
        autoPlay: 2500,
        stopOnHover: true,
        items: 5,
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: true,  // Show pagination buttons
        navigation: true,  // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Item-4 Carousel
    $('.item4-carousel').owlCarousel({
        autoPlay: 2500,
        stopOnHover: true,
        items: 4,
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: false,  // Hide pagination buttons
        navigation: true,  // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Item-3 Carousel
    $('.item3-carousel').owlCarousel({
        autoPlay: false,
        stopOnHover: true,
        items: 3,
        itemsDesktop: [1170, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTabletSmall: [768, 1],
        itemsMobile: [480, 1],
        pagination: true,  // show pagination buttons
        navigation: true,  // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Item-1 Carousel
    $('.item1-carousel').owlCarousel({
        autoPlay: false,
        autoHeight: true,
        stopOnHover: true,
        singleItem: true,
        slideSpeed: 350,
        pagination: true,  // Show pagination buttons
        navigation: true,  // Show next and prev buttons
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: true
    });


};



// ---------------------------------------------------------------------------------------------------------------------------->
// SLIDER-HERO FUNCTIONS   ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->

function sliderHero() {

    $('.slider-hero').owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 700,
        paginationSpeed: 400,
        pagination: true,
        addClassActive: true,

        touchDrag: true,
        singleItem: true,
        navigationText: false,
        autoPlay: false,
        autoHeight: false,

        //responsive: true,
        //itemsDesktop: [3000, 1],
        //itemsDesktopSmall: [1440, 1],
        //itemsTablet: [1024, 1],
        //itemsTabletSmall: [600, 1],
        //itemsMobile: [360, 1],

        beforeMove: beforeMove,
        afterMove: afterMove,
        afterInit: afterInit

    });
    function beforeMove() {
        $('.slider-hero .overlay-hero .caption-hero').fadeOut(1);

    }
    function afterMove() {
        $('.slider-hero .owl-item.active ').find('.caption-hero').delay(500).fadeIn(1500);
        BackgroundCheck.refresh();

    }
    function afterInit() {
        $('.slider-hero .owl-item.active ').find('.caption-hero').delay(500).fadeIn(1500);
        BackgroundCheck.init({
            targets: '.full-intro',
            images: '.owl-carousel .item img',

        });

    }

    $(window).height(function () {
        heroResize();
        function heroResize() {
            var windowHeight = $(window).innerHeight();
            $('.slider-hero, .full-screen-intro').css('height', windowHeight);
        };
        $(window).resize(function () {
            heroResize();
        });
    });

};








// ---------------------------------------------------------------------------------------------------------------------------->
// SCROLL CALLBACK FUNCTION  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->
function scrollCallbackEle() {
    //scroll Callback Element
    $('.load-ele-fade').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100,
        callbackFunction: function (elem, action) {
        }
    });
    //scroll Animate Element
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    })
    wow.init();
};

// ---------------------------------------------------------------------------------------------------------------------------->
// SHORTCODE ELEMENTS  ||-----------
// ---------------------------------------------------------------------------------------------------------------------------->

shortcodeElements();
function shortcodeElements() {


    //Parallax Function element
    $('.parallax').each(function () {
        var $el = $(this);
        $(window).scroll(function () {
            parallax($el);
        });
        parallax($el);
    });


    function parallax($el) {
        var diff_s = $(window).scrollTop();
        var parallax_height = $('.parallax').height();
        var yPos_p = (diff_s * 0.5);
        var yPos_m = -(diff_s * 0.5);
        var diff_h = diff_s / parallax_height;

        if ($('.parallax').hasClass('parallax-section1')) {
            $el.css('top', yPos_p);
        }
        if ($('.parallax').hasClass('parallax-section2')) {
            $el.css('top', yPos_m);
        }
        if ($('.parallax').hasClass('parallax-static')) {
            $el.css('top', (diff_s * 1));
        }
        if ($('.parallax').hasClass('parallax-opacity')) {
            $el.css('opacity', (1 - diff_h * 1));
        }

        if ($('.parallax').hasClass('parallax-background1')) {
            $el.css("background-position", 'left' + " " + yPos_p + "px");
        }
        if ($('.parallax').hasClass('parallax-background2')) {
            $el.css("background-position", 'left' + " " + -yPos_p + "px");

        }
    };

    //Parallax plugin Js Function element
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 500
    });


    // Skills Progressbar Elements
    skillsProgressBar();
    function skillsProgressBar() {
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    };

    // Tooltip
    $(".tipped").tipper();

    //Counter
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
        {
            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
    });

};


// Accordion Function Elements
accordion();
function accordion() {

    $('.accordion-title').click(function (e) {

        $(this).next().slideToggle('easeOut');
        $(this).toggleClass('active');
        $("accordion-title").toggleClass('active');
        $(".accordion-content").not($(this).next()).slideUp('easeIn');
        $(".accordion-title").not($(this)).removeClass('active');

    });
    $(".accordion-content").addClass("defualt-hidden");

};

// Jquery UI Elements
jqueryUi();
function jqueryUi() {

    // Tab Function
    $(function () {
        $(".tabs").tabs();
    });

    // Price Filter Slider
    $(function () {
        $("#range-slider").slider({
            range: true,
            min: 0,
            max: 500,
            values: [0, 300],
            slide: function (event, ui) {
                $(".price-amount-from").text("$" + ui.values[0]);
                $(".price-amount-to").text("$" + ui.values[1]);

            }
        });
        $(".price-amount-from").text("$" + $("#range-slider").slider("values", 0));
        $(".price-amount-to").text("$" + $("#range-slider").slider("values", 1));
    });
};



// ---------------------------------
// Extra Jquery
// ---------------------------------
$(window).load(function () {
    // $(".all-demos-link").attr("href", "../demo.html");
});























(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
          cssmenu.prepend('<div id="menu-button"><a class="mobile-menu-icon bar-icon"><i class="fa fa-bars"></i></a></div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('nav-has-sub');

        multiTg = function() {
          cssmenu.find(".nav-has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
                
            }
            else {
                $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 991) {
              cssmenu.find('ul').show();
              
          }

          if ($(window).width() <= 991) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

  $(".navigation").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

});
})(jQuery);
