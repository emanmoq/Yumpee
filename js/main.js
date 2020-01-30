
$(document).ready(function () {
    new WOW().init();
    scrollShow = false;

    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            if (scrollShow)
                return;
            console.log(scrollShow);
            scrollShow = true;
            $('.navbar').addClass('scrollNav');
            $('.navbar').css('opacity', 0)
                .slideDown('slow').animate({ opacity: 1 },
                    { queue: false, duration: 'slow' }
                );
        }
        else {
            $('.navbar').removeClass('scrollNav');
            /*console.log('false');*/
            scrollShow = false;
        }
    });

    /* call slick nav*/
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLisnks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="lni-chevron-right"></i>',
        openedSymbol: '<i class="lni-chevron-down"></i>',
    });


/**Call Carousel*/
$('.categOwl').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    margin:10,
    autoplayHoverPause:true,
    smartSpeed:350,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        575:{
            items:2,
            nav:true
        },
        
        800:{
            items:2,
            nav:true
        },
        1025:{
            items:5,
            nav:true,
            loop:true
        }
    }
})
$('.FeaturesOwl').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    margin:10,
    autoplayHoverPause:true,
    smartSpeed:350,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        575:{
            items:2,
            nav:false,
            loop:true
        },
        991:{
            items:3,
            nav:true,
            loop:true,
        }
    }
})
    /**Call Carousel*/
    $('.testemonialOwl').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        margin: 10,
        autoplayHoverPause: true,
        smartSpeed: 350,
        left: true,
        responsiveClass: true,
        responsive: {
            0:{
                items: 1,
                nav: true,
                loop:true,
            },
            1025:{
                items:2,
                nav: true,
                loop: true
            }

        }
    });
    $('.listPageOwl').owlCarousel({
        autoplay: true,
        loop: true,
        dots: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
            }
        }
    })
    /* home3 owl main owl*/
     /*Top OWL */
  
     $(".topSlide").owlCarousel({
        autoplay: false,
        loop: true,
        dots: true,
        nav: false,
        dotsEach:true,
        responsive: {
            0: {
                items: 1,
                loop: true,
            }
        }

    });
    /**********Home3 product Owl *******/
    $('.prod-owl-home3').owlCarousel({
        autoplay: true,
        loop: true,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
            }
        }
    }); 

    $(".predictOwl").owlCarousel({
        autoplay: false,
        loop: false,
        dots: false,
        nav: true,
        dotsEach:true,
        responsive: {
            0: {
                items: 1,
                loop: true,
            },
            1000:{
                items: 4,
                loop: true,
            }
        }

    });
/* home 3 deals Owl*/
/******Mobile  home 3Category  */ 
$('.categorie-title,.mobile-categorei-menu').on('click', function () {
    $('.vertical-menu-list,.mobile-categorei-menu-list').slideToggle();
});

$('#cate-toggle li.has-sub a,#cate-mobile-toggle li.has-sub a').on('click', function () {
    $(this).removeAttr('href');
    var element = $(this).parent('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
    } else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
    }
});

/***End Mobile Menu ***********************************************/
$('.dealsOwl').owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive:{
        0: {
            items: 1,
            loop: true,
        },
        1000:{
            items: 2,
            loop: true,
        }
        
    }
}); 
$('.home3FcategoriesOwl').owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            loop: true,
        },
        1000:{
            items: 5,
            loop: true,
        }
        
    }
});
$('.ElectronicOffersOwl').owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items:1,
            loop: true,
        },
        1000:{
            items: 5,
            loop: true,
        }
        
    }
});
$('.brandOwl').owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items:1,
            loop: true,
        },
        1000:{
            items: 5,
            loop: true,
        }
        
    }
});
/**footer owl */
$('.footSlide').owlCarousel({
    autoplay: false,
    loop: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items:1,
            loop: true,
        }
      
    }
});
/*************************************************** */
   $('.CatTitle').on('click', function () {
    $('.vertical-List').slideToggle();
});	  
/******* */
$('.more-less').on('click', function(){
    $('.hideChild').slideToggle();
    $(this).toggleClass('rx-change');
    
});	 
    /**Editor */
    $('#summernote').summernote({
        tabsize: 2,
        height: 250
    });
/************************************************back top*********************************************/ 
$(".up").on("click",function(){$("html, body").animate({scrollTop:0},"slow");return false;});
    /********************FAQ callapse********************************/
    $('.accordion-panel').click(function () {
        $('.accordion-panel').not(this).find('span:first').removeClass(' fas fa-minus  ').addClass('fas fa-plus ');
        $(this).find('span:first').toggleClass('fas fa-minus fas fa-plus');
    })

    $('.faqHeader').click(function () {
        $(this).parent().find('.faqbody').slideToggle(400);
    });
    $(".faqHeader").on("click", "a", function(e) { e.preventDefault() });

       /*ٌremove defult checkboxes */ 
       var checkboxes = document.getElementsByTagName('input');

       for (var i = 0; i < checkboxes.length; i++) {
           if (checkboxes[i].type == 'checkbox') {
               checkboxes[i].checked = false;
           }
       };


});
