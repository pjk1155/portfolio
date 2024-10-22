$(document).ready(function(){
  
  $(window).resize(function(){
    document.location.reload()
  })

    let wt = $(window).width();
    if(wt > 1440){
      pc()
    }else if(wt < 1440){
      tap()
    }else if(wt < 800){
      mo()
    }
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay:{delay:2500,
        disableOnInteraction: false
      },
      loop:false,
    });


    function pc(){
   
      $(".boxNav>li").on("click",function(){
        var i = $(this).index();
        console.log(i)
        $(this).parent().siblings(".row3").children(".box").eq(i).css("display","block")
        .siblings().css("display","none")
        $(this).addClass('on').siblings().removeClass('on')
      })
      gsap.to('.row2 .img',3,{
        x:'-85%',
        scrollTrigger:{
          trigger:'.row2',
          start:'top 20%',
          end:'bottom 20%',
          scrub:true,
        }
      })
      gsap.from('.box1 h2',{
        autoAlpha:0, x:-500, duration:2,
        backgroundColor:'transparent', 
        scrollTrigger:{
          trigger:'.row3',
          start:'top 50%',
          end:"top 60%",
          scrub:true,
          
        }
      })
      gsap.from('.box2 h2',{
        autoAlpha:0, x:-500, duration:2,
        backgroundColor:'transparent', 
        scrollTrigger:{
          trigger:'.row3',
          start:'top 50%',
          end:"top 60%",
          scrub:true,
         
        }
      })
      gsap.from('.box3 h2',{
        autoAlpha:0, x:-500, duration:2,
        backgroundColor:'transparent', 
        scrollTrigger:{
          trigger:'.row3',
          start:'top 50%',
          end:"top 60%",
          scrub:true,
          
        }
      })
      gsap.from('.row3 p',2,{
        y:500,autoAlpha:0,
        scrollTrigger:{
          trigger:'.row3',
          start:'top 50%',
          end:"center 60%",
          scrub:true,
      }
      })
    }//pc함수

    function tap(){
      gsap.to('.row2 .img',3,{
      x:'-95%',
      scrollTrigger:{
        trigger:'.row2',
        start:'top 20%',
        end:'bottom 20%',
        scrub:true,
      }
    })

    }//태블릿 함수
    
    function mo(){
      gsap.to('.row2 .img',3,{
        x:'-50%',
        scrollTrigger:{
          trigger:'.row2',
          start:'top 20%',
          end:'bottom 20%',
          scrub:true,
        }
      })
      gsap.from('.box1 h2',{
        autoAlpha:0, x:-500, duration:2,
        backgroundColor:'transparent',
        scrollTrigger:{
          trigger:'.row3',
          start:'top 100%',
          end:"top 70%",
          scrub:true,
        }
      })
      gsap.from('.box2 h2',{
        autoAlpha:0, x:500, duration:2,
        backgroundColor:'transparent', 
        scrollTrigger:{
          trigger:'.row3 .box2',
          start:'top 70%',
          end:"top 70%",
          scrub:true,
        }
      })
      gsap.from('.box3 h2',{
        autoAlpha:0, x:-500, duration:2,
        backgroundColor:'transparent', 
        scrollTrigger:{
          trigger:'.row3 .box3',
          start:'top 70%',
          end:"top 70%",
          scrub:true,
        }
      })
      gsap.from('.box1 p',2,{
        y:500,autoAlpha:0,
        scrollTrigger:{
          trigger:'.row3 .box1',
          start:'top 60%',
          end:"top 60%",
          scrub:true,
      
      }
      })
      gsap.from('.box2 p',2,{
        y:500,autoAlpha:0,
        scrollTrigger:{
          trigger:'.row3 .box2',
          start:'top 50%',
          end:"top 50%",
          scrub:true,
        
      }
      })
      gsap.from('.box3 p',2,{
        y:500,autoAlpha:0,
        scrollTrigger:{
          trigger:'.row3 .box3',
          start:'top 50%',
          end:"top 50%",
          scrub:true,
      }
      })
    }//모바일 함수


      gsap.from('.row1 .box',2,{
        y:500,autoAlpha:0
      })
      gsap.from('.row2 p',2,{
        y:500,autoAlpha:0,
        scrollTrigger:{
          trigger:'.row2',
          start:'top 50%',
          end:"top 60%",
          scrub:true,
        
        }
      })
      gsap.from('.row1>h2',{
        autoAlpha:0, x:-500, duration:2,
        backgroundColor:'transparent',
       }
      );
      gsap.from('.row2 h2',{
        autoAlpha:0, x:-500, duration:2,
        backgroundColor:'transparent',
        scrollTrigger:{
          trigger:'.row2',
          start:'top 50%',
          end:"top 50%",
          scrub:true,
        }
      })
      
      
      

      const ani = gsap.timeline();
      ani.from('.row4 h3',{autoAlpha:0, y:50, duration:1})
      ani.from('.row4 p',{autoAlpha:0, y:50, duration:1})
      ScrollTrigger.create({
        animation:ani,
        trigger:'.row4',
        start:'top 50%',
        end:'+=500',    
      })

})