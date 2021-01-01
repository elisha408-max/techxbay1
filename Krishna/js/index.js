
//     var swiper = new Swiper('.swiper-container', {
//       spaceBetween: 30,
//       centeredSlides: true,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,

//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });


//     $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         }
//     }
// })
 $(function () {

 $("#rateYo").rateYo({

 onSet: function (rating, rateYoInstance) {
 rating = Math.ceil(rating);
 $('#rating_input').val(rating);//setting up rating value to hidden field
 alert("Rating is set to: " + rating);
 }
 });
 });

//  // for gallery slider section
// $(document).ready(function() {

// $(".owl-carousel").owlCarousel({

// autoPlay: 3000,
// items : 4,
// itemsDesktop : [1199,3],
// itemsDesktopSmall : [979,3],
// center: true,
// nav:true,
// loop:true,
// responsive: {
// 600: {
// items: 4
// }
// }






// });

// });

// for vertical silder
$(document).ready(function () {

    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
});