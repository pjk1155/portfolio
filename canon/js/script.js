$(document).ready(function(){
    $(window).resize(function(){
        document.location.reload()
      })
    // 스와이프
    var swiper = new Swiper(".swBox .mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
            speed:7000,
            centeredSlides:true,
            autoplay:{
                delay:1000,
            },
            loop:true,
            allowTouchMove:false,
            disavbleOnInteraction:true
      });
      
  gsap.from('.row_1 .imgBox',3,{
    autoAlpha:0, y:100, duration:2,
    scrollTrigger:{
        trigger:'.row_1',
        start:'top 40%',
        end:'top 30%',
        scrub:true
    }
  })
  gsap.from('.row_2 .imgBox',3,{
    autoAlpha:0, y:100, duration:2,
    scrollTrigger:{
        trigger:'.row_2',
        start:'top 40%',
        end:'top 30%',
        scrub:true,
    }
  })
  gsap.from('.row_3 .imgBox',3,{
    autoAlpha:0, y:100, duration:2,
    scrollTrigger:{
        trigger:'.row_3',
        start:'top 40%',
        end:'top 30%',
        scrub:true,
    }
  })

  let wt = $(window).width();
  if(wt > 1200){
    pc()
  }else{
    mo()
  }
  function mo(){

    var swiper1 = new Swiper(".best_p .mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $('.ham').on('click',function(){
      $(this).parent().siblings('.menu').slideToggle()//css('right',0)
    })
  }
  function pc(){
    const ani = gsap.timeline();
    ani.from('.row_4 .swiper-slide',{autoAlpha:0,y:100,
        ease:'back.out(1)',
        y:100,
        stagger:{
            // amount:2,from:'random'
        }
    })
    ScrollTrigger.create({
        animation:ani,
        trigger:'.row_4',
        start:'top 80%',
        end:'+=700',
        scrub:true,
      
    })
  }

})

