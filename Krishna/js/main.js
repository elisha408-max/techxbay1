$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
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
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function(){

$('#myCarousel').carousel({
interval: 3000,
})

});


$(document).ready(function() {
    $("#border-1").click(function() {
        $("#featured").css("display", "flex");
        $("#new-arrivals").css("display", "none");
        $("#popular").css("display", "none");

        $("#border-1").css({"border-bottom":"2px solid #e97e10","color":"black"});
        $("#border-2").css({"border-bottom":"transparent","color":"black"});
        $("#border-3").css({"border-bottom":"transparent","color":"black"});

    });
    $("#border-2").click(function() {
         $("#featured").css("display", "none");
        $("#new-arrivals").css("display", "none");
        $("#popular").css("display", "flex");

        $("#border-2").css({"border-bottom":"2px solid #e97e10","color":"black"});
        $("#border-1").css({"border-bottom":"transparent","color":"black"});
        $("#border-3").css({"border-bottom":"transparent","color":"black"});

    });
    $("#border-3").click(function() {
        $("#featured").css("display", "none");
        $("#new-arrivals").css("display", "flex");
        $("#popular").css("display", "none");

        $("#border-1").css({"border-bottom":"transparent","color":"black"});
        $("#border-2").css({"border-bottom":"transparent","color":"black"});
        $("#border-3").css({"border-bottom":"2px solid #e97e10","color":"black"});

    });

});





