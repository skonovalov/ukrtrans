$(document).ready(function() {
	console.time('loading...');

    animateMain.init();
    scrollToTop();
    spoiler( '.main-about-text' );
    spoiler( '.about-top-text' );
    spoiler('.trans-text-inner');
    spoiler('.transportation-text-inner');

    preparePage();

    if( $('.first-row_gal').length > 0) {
        $('.first-row_gal').css('overflow', 'auto');
    }

    console.timeEnd('loading...');
});


function preparePage() {

    if( $('.slider-top-wrap').length > 0) {

        var sl = $('.slider-top-wrap ul');

        sl.owlCarousel({
            singleItem : true,
            transitionStyle : 'fade',
            autoPlay: true,
            navigation: false,
            pagination: true,
            mouseDrag: false
        });

        $('.slider-top-right').click(function() {
            sl.trigger('owl.next');
        });

        $('.slider-top-left').click(function() {
            sl.trigger('owl.prev');
        });

    }

    if( $('.blog-post-gallery-wrap').length > 0) {

        var gs = $('.blog-post-gallery-wrap ul');

        gs.owlCarousel({
            items: 3,
            autoPlay: false,
            navigation: false,
            pagination: false,
            mouseDrag: false
        });

        $('.blog-post-gallery-right').click(function() {
            gs.trigger('owl.next');
        });

        $('.blog-post-gallery-left').click(function() {
            gs.trigger('owl.prev');
        });

    }

    if( $('.callback').length > 0) {
       contactsModule.init(); 
    }

    if($('.service-slider-wrap').length > 0) {
        serviceModule.init();
    }

    if( $('form').length > 0) {
        hideLabel();
    }


    if( $('.about-team-wrap').length > 0){
        spoilerAbout();
    }
}



function selectActiveMenu() {
    var href = location.href/*.substr(87)*/,
        a    = $('.header-menu ul li a, .footer-nav ul li a');

    console.log(href);   

    a.each(function() {
      if( href.indexOf( $(this).attr('href') ) != -1 ) {
       /* if( $(this).attr('href') == 'index.html') {
            return;
        }*/

         if(!$(this).hasClass('active')) {
          $(this).parent().parent().find('.active').removeClass('active');
          $(this).parent().addClass('active');
         }
      }
    });    
}



function scrollToTop() {
    $('.right-widget ul li:last').on('click', function() {
        $('body, html').animate({
            scrollTop: 0
        }, 600);
    });
}


function spoiler(elem) {

    var h  = $(elem).css('height'),
        mh =  $(elem).css('min-height'),
        ch = parseInt(h) - parseInt(mh);  

    $(elem).css('height', mh).addClass('close-spoiler');    

    $('.spoiler').on('click', function(e) {
        e.preventDefault(); 

        if( $(this).siblings(elem).hasClass('close-spoiler')) {

            $('.spoiler-h').css({
                'height': parseInt($('.spoiler-h').css('height')) + ch + 'px'
            });

            $(elem).css({
                'height': parseInt($(elem).css('height')) + ch + 'px'
            }).removeClass('close-spoiler');

            

        } else {

            $('.spoiler-h').css({
                'height': parseInt($('.spoiler-h').css('height')) - ch + 'px'
            });

            $(elem).css({
                'height': parseInt($(elem).css('height')) - ch + 'px'
            }).addClass('close-spoiler');
        }
    });
}

function spoilerAbout() {

    var h  = $('.about-team-wrap').css('height'),
        mh =  $('.about-team-wrap').css('min-height'),
        ch = parseInt(h) - parseInt(mh);  

    $('.about-team-wrap').css('height', mh).addClass('close-spoiler-about');    

    $('.spoiler-about').on('click', function(e) {
        e.preventDefault(); 

        if( $(this).siblings('.about-team-wrap').hasClass('close-spoiler-about')) {

            $('.spoilera-h').css({
                'height': parseInt($('.spoilera-h').css('height')) + ch + 'px'
            });

            $('.about-team-wrap').css({
                'height': parseInt($('.about-team-wrap').css('height')) + ch + 'px'
            }).removeClass('close-spoiler-about');
        }

        $(this).remove();

        $('.four-row-about .left-side-icon').css('line-height', '975px');
        $('.four-row-about .right-side-icon').css('line-height', '975px');
    });
}


var animateMain = (function() {
    var i = 0;

    function _first() {
        $('.left-side-circle').css('transform', 'scale(1.3)');
        $('.left-side-icon img').css({
         'transform': 'scale(1.3)',
         'background-position': '30px center' 
        }); 

        $('.right-side-circle').css('transform', 'scale(1.5)');
        $('.right-side-icon img').css({
         'transform': 'scale(1.5)',
         'background-position': '30px center' 
        });         
    }

    function _second() {
        $('.left-side-text').css({
            'transform': 'scale(1)',
            'opacity': '1'    
        });
        $('.left-side-circle').css({
         'transform': 'scale(1.0)',
         'opacity': '1'
        }); 

        $('.right-side-text').css({
            'transform': 'scale(1)',
            'opacity': '1'    
        });
        $('.right-side-circle').css({
         'transform': 'scale(1.0)',
         'opacity': '1'
        }); 

    }

    function _third() {
        $('.left-side-icon2').css({
            'top': '0',
            'left': '0'
        });
        $('.left-side-icon2 img').css({
           'transform': 'scale(1)'
        });
        $('.left-side-circle2').css({
         'transform': 'scale(1.0)',
         'opacity': '1',
         'bottom':' -100px',
         'right': '-113px'
        }); 

        $('.right-side-icon2 img').css({
            'transform': 'scale(1)',  
        });
        $('.right-side-circle2').css({
         'transform': 'scale(1.0)',
         'opacity': '1'
        }); 
    }

    function _four() {
       $('.four-row-left-icon').css({
            'transform': 'scale(1.5)'
        }); 

       $('.four-row-right-circle').css({
            'top': '92px',
            'left': '163px'
        }); 
    }

    function _five() {
       $('.five-row-left-icon img').css({
            'transform': 'scale(1.5)'
        }); 

       $('.five-row-right-icon img').css({
            'transform': 'scale(1)'
        }); 

       $('.five-row-right-circle').css({
            'top': '51px',
            'left': '86px'
        }); 
    }

    function _i() {
        $(window).scroll(function() {
        
            if( $(this).scrollTop() > 150 && $(this).scrollTop() < 350 && i == 0) {

                _first();

                i = 1;
            }

            if( $(this).scrollTop() > 650 && $(this).scrollTop() < 750 && i == 1) {

                _second();

                i = 2;
            }

            if( $(this).scrollTop() > 1250 && $(this).scrollTop() < 1350 && i == 2) {

                _third();

                i = 3;
            }

            if( $(this).scrollTop() > 1650 && $(this).scrollTop() < 1750 && i == 3) {

                _four();

                i = 4;
            }

            if( $(this).scrollTop() > 2100 &&  i == 4) {

                _five();

                i = 5;
            }
        });
    }

    return {
        init: function() {
            _i();
        }
    };
})();


var contactsModule = ( function() {

    function _show() {
        $('.pop-call').fadeIn(400);
    }

    function _hide() {
        $('.pop-call').fadeOut(400);
    }

    function _hideForm() {
        $('.pop-call-wrap').fadeOut(400);
    }

    function _showThx() {

        setTimeout(function() {
             $('.pop-call-thx').fadeIn(400);
         }, 600);
       
    }

    function _i() {

        $('.callback').on('click', function() {
            _show();
        });

        $('.icon-close, .icon-close-blue').on('click', function() {
            _hide();
        });

        $('.pop-call').find('button').on('click', function(e) {
            e.preventDefault();

            _hideForm();

            _showThx();
        });

    }

    return {
        init: function() {
            _i();
        }
    };
} )();


var serviceModule = (function () {
    
    function _initSlider() {
        var s = $('.service-slider-wrap ul');

        s.owlCarousel({
            navigation: false,
            pagination: false,
            mouseDrag: false,
            items:6
        });

        $('.service-slider-right').click(function() {
            s.trigger('owl.next');
        });

        $('.service-slider-left').click(function() {
            s.trigger('owl.prev');
        });
    }    

    function _createSlider() {
        var i = 0;

        $('.service-slider-wrap ul').clone().appendTo( '.pop-slider-wrap' );

        var s = $('.pop-slider-wrap ul');

        s.owlCarousel({
            singleItem: true,
            transitionStyle : 'fade',
            navigation: false,
            pagination: false,
            mouseDrag: false
        });

        $('.pop-slider-right').click(function() {
            s.trigger('owl.next');
        });

        $('.pop-slider-left').click(function() {
            s.trigger('owl.prev');
        });
    }    

    function _i() {
        $('.service-slider-wrap ul li').on('click', function() {
            _show();
        });

        $('.icon-close').on('click', function() {
            _hide();
        });
/*
        $('.service-slider-wrap ul li').each(function(index) {
            $(this).click(function(e) {
                e.preventDefault(); 

                var i = $(this).data('item'),
                    owl = $(".owl-carousel").data('owlCarousel');
               
               owl.goTo(i);
            });
        }); */
    }


    function _show() {

        $('.pop-slider').fadeIn(600);
        console.log(  );
        $('.pop-slider-container').css({
            'width': ($('body').width() * 48) / 100 + 'px',
           /* 'height': ($('body').width() * 48) / 100 - 226 + 'px',*/
            'margin-top': ($('body').height() / 2) - ($('body').height() * 43) / 100 + 'px'
        });
    }

    function _hide() {
        $('.pop-slider').fadeOut(600);      
    }

    return {
        init: function() {
            _createSlider();
            _initSlider();

            _i();
        }
     };    
})();



function hideLabel() {
    $('.input, .input-txt').on('click', function() {

        $(this).find('label').fadeOut();
        $(this).find('input').focus()

        $(this).find('input').on('blur', function() {
            if( !$(this).val() ) {
               $(this).siblings('label').fadeIn(); 
           } else {
                $(this).siblings('label').fadeOut(); 
           }

        });

        $(this).find('textarea').on('blur', function() {
            if( !$(this).val() ) {
               $(this).siblings('label').fadeIn(); 
           } else {
                $(this).siblings('label').fadeOut(); 
           }

        });
    });
}