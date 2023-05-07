$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".shopping-card").removeClass("shoppingToggle")
        $(".home-content").animate({"right":"-100%"},500)
        $(this).toggleClass("close")
    });

    // Product list show
    $("#btnToggel").click(function(){
        $(".product-list").toggleClass("navShow")
    })


    $('#partner-home .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })

    // wow.js
    new WOW().init();
})