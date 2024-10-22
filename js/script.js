$(document).ready(function(){
  AOS.init();

    $(window).resize(function(){
        document.location.reload()
      })
      
    $('.mySwiper .slide1').on('click',function(){
      $('.view1').stop().fadeIn();
    })

    $('.mySwiper .slide3').on('click',function(){
      $('.view3').stop().fadeIn();
    })

    $('.mySwiper .slide4').on('click',function(){
      $('.view4').stop().fadeIn();
    })

    $('.viewX , .bgClose').on('click',function(){
      $('.view').stop().fadeOut();
    })

    let wt = $(window).width();
    if(wt >= 1024){
      pc()
    }else{
      mo()
    }
    function pc(){
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      let vertical = new Swiper('.vertical',{
        spaceBetween: 10,
        speed:7000,
        centeredSlides:true,
        autoplay:{
            delay:1,
        },
        loop:true,
        slidesPerView: 4,
        allowTouchMove:false,
        disavbleOnInteraction:true,
        diection:'vertical',
        freemode : false
    })
    // $('.row1 img').on('mouseover',function(){
    //   $(this).siblings('.txt_box').stop().opacity(1)
    // })
    // $('.row1 .txt_box').on('mouseout',function(){
    //   $(this).stop().hide()
    // })

    let sections = gsap.utils.toArray(".row2 .swiper-slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length -1),//section요소들에 대해 가로축으로 이동시킴,마지막요소를 제외하고 이동시킴
      ease: "none",
      scrollTrigger: {
          trigger: ".row2",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length -1),
          end: '+=500' 
      }
  })
  
   
    }
    function mo(){
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    }
})