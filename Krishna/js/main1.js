// $(document).ready(function() {

//     $('#myCarousel').carousel({
//         interval: 3000,
//     })

// });
$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$(document).ready(function() {
    $('.card-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1026,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
// $(document).ready(function() {

//     $(".owl-carousel").owlCarousel({

//         autoPlay: 3000,
//         items: 3,
//         itemsDesktop: [1024, 2],
//         itemsDesktopSmall: [768, 2],
//         center: true,
//         nav: true,
//         loop: true,
//         responsive: {
//             600: {
//                 items: 4
//             }
//         }


//     });

// });

$(document).ready(function() {
    $("#Website-services").click(function() {
        $("#website-services-slide").show(1000).css("display", "block");
        $("#Web-Development-services-slide").css("display", "none");
        $("#Moblie-Development-services-slide").css("display", "none");
        $("#software-services-slide").css("display", "none");

        $("#Moblie-Development-services").css({"background-color":"transparent","color":"black"});
        $("#software-services").css({"background-color":"transparent","color":"black"});
        $("#Web-Development-services").css({"background-color":"transparent","color":"black"});
        $("#Website-services").css({"background-color":"rgba(2, 1, 4, 0.87)","color":"white"});
    });
    $("#Web-Development-services").click(function() {
        $("#Web-Development-services-slide").show(1000).css("display", "block");
        $("#website-services-slide").css("display", "none");
        $("#Moblie-Development-services-slide").css("display", "none");
        $("#software-services-slide").css("display", "none");

        $("#Web-Development-services").css({"background-color":"rgba(2, 1, 4, 0.87)","color":"white"});
        $("#Moblie-Development-services").css({"background-color":"transparent","color":"black"});
        $("#software-services").css({"background-color":"transparent","color":"black"});
        $("#Website-services").css({"background-color":"transparent","color":"black"});

    });
    $("#Moblie-Development-services").click(function() {
        $("#Moblie-Development-services-slide").show(1000).css("display", "block");
        $("#software-services-slide").css("display", "none");
        $("#website-services-slide").css("display", "none");
        $("#Web-Development-services-slide").css("display", "none");

        $("#software-services").css({"background-color":"transparent","color":"black"});
        $("#Moblie-Development-services").css({"background-color":"rgba(2, 1, 4, 0.87)","color":"white"});
        $("#Website-services").css({"background-color":"transparent","color":"black"});
        $("#Web-Development-services").css({"background-color":"transparent","color":"black"});

    });
    $("#software-services").click(function() {
        $("#software-services-slide").show(1000).css("display", "block");
        $("#Moblie-Development-services-slide").css("display", "none");
        $("#website-services-slide").css("display", "none");
        $("#Web-Development-services-slide").css("display", "none");

        $("#software-services").css({"background-color":"rgba(2, 1, 4, 0.87)","color":"white"});
        $("#Moblie-Development-services").css({"background-color":"transparent","color":"black"});
        $("#Website-services").css({"background-color":"transparent","color":"black"});
        $("#Web-Development-services").css({"background-color":"transparent","color":"black"});
    });

});
$(document).ready(function() {
    $("#mission-tab").click(function() {
        $("#mission").show(1000).css("display", "block");
        $("#vision").css("display", "none");
      

        $("#mission-tab").css({"background-color":"black","color":"white"});
        $("#vision-tab").css({"background-color":"transparent","color":"black"});
       
    });
    $("#vision-tab").click(function() {
        $("#vision").show(1000).css("display", "block");
        $("#mission").css("display", "none");

        $("#vision-tab").css({"background-color":"black","color":"white"});
        $("#mission-tab").css({"background-color":"transparent","color":"black"});
      
       

    });

});
$(document).ready(function() {
    $("#login-tab").click(function() {
        $("#login").show(1000).css("display", "block");
        $("#register").css("display", "none");
      

        $("#login-tab").css({"background-color":"black","color":"white"});
        $("#register-tab").css({"background-color":"transparent","color":"black"});
       
    });
    $("#register-tab").click(function() {
        $("#register").show(1000).css("display", "block");
        $("#login").css("display", "none");

        $("#register-tab").css({"background-color":"black","color":"white"});
        $("#login-tab").css({"background-color":"transparent","color":"black"});
      
       

    });

});


    // $('.portfolio-item').isotope({
        //      itemSelector: '.item',
        //      layoutMode: 'fitRows'
        //  });
         // $('.portfolio-menu ul li').click(function(){
         //    $('.portfolio-menu ul li').removeClass('active');
         //    $(this).addClass('active');
            
         //    var selector = $(this).attr('data-filter');
         //    $('.portfolio-item').isotope({
         //        filter:selector
         //    });
         //    return  false;
         // });

 $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
         });
         $(document).ready(function() {
         var popup_btn = $('.popup-btn');
         popup_btn.magnificPopup({
         type : 'image',
         gallery : {
            enabled : true
         }
         });
         });
