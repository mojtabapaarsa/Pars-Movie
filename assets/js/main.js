$('.carousel').carousel({
    interval: 3000
  })

$(document).ready(function(){
    $(".owl-one").owlCarousel();
    $(".owl-two").owlCarousel();
  });

$('.owl-one').owlCarousel({
    rtl:true,
    loop:true,
    margin:5,
    items:8,
    touchDrag:true,
    center:true,
    lazyLoad:true,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6,
            center:false
        }
    }
  })
  
//   Aside Carrosel
 

$('.owl-two').owlCarousel({
    rtl:true,
    loop:true,
    margin:3,
    items:5,
    touchDrag:true,
    center:false,
    lazyLoad:true,
    autoplay:false,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            
        }
    }
  })
  


$('#tooltips').tooltip('hover');

$('.collapse').collapse()
