$(document).ready(function(){

    let wt = $(window).width()

    if(wt<=500){
        mo()
    }else if(wt <=900){
        ta()
    }else{
        pc()
    }
    
    function mo(){
        var swiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
          });
          gsap.from(".txt",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".row2",
              // markers:true,
              start:"0% center",
              end:"100% 100%",
              scrub:true
            }
          })//row2 txt스크롤


           // row3 img_box 시작


      gsap.from(".box1",{
        y:200,autoAlpha:0,
        scrollTrigger:{
          trigger:".img_box01",
          // markers:true,
          start:"0% center",
          end:"90% 100%",
          scrub:true
        }
      })
      gsap.from(".box2",{
        y:200,autoAlpha:0,
        scrollTrigger:{
          trigger:".img_box01",
          // markers:true,
          start:"20% center",
          end:"110% 100%",
          scrub:true
        }
      })
      gsap.from(".box3",{
        y:200,autoAlpha:0,
        scrollTrigger:{
          trigger:".img_box01",
          // markers:true,
          start:"40% center",
          end:"130% 100%",
          scrub:true
        }
      })
      gsap.from(".box4",{
        y:200,autoAlpha:0,
        scrollTrigger:{
          trigger:".img_box02",
          // markers:true,
          start:"-30% center",
          end:"60% 100%",
          scrub:true
        }
      })
      gsap.from(".box5",{
        y:200,autoAlpha:0,
        scrollTrigger:{
          trigger:".img_box02",
          // markers:true,
          start:"-10% center",
          end:"80% 100%",
          scrub:true
        }
      })
      gsap.from(".box6",{
        y:200,autoAlpha:0,
        scrollTrigger:{
          trigger:".img_box02",
          // markers:true,
          start:"10% center",
          end:"100% 100%",
          scrub:true
        }
      })


      //img박스 스크롤 끝 mo



        }//모바일 끝

    function ta(){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
          });
          gsap.from(".txt",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".row2",
              // markers:true,
              start:"20% center",
              end:"80% 100%",
              scrub:true
            }
          })//row2 txt스크롤


          //img box 스크롤이벤트 시작
          gsap.from(".box1",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"0% center",
              end:"110% 100%",
              scrub:true
            }
          })
          gsap.from(".box2",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"30% center",
              end:"130% 100%",
              scrub:true
            }
          })
          gsap.from(".box3",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"60% center",
              end:"160% 100%",
              scrub:true
            }
          })
          gsap.from(".box4",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"0% center",
              end:"110% 100%",
              scrub:true
            }
          })
          gsap.from(".box5",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"30% center",
              end:"130% 100%",
              scrub:true
            }
          })
          gsap.from(".box6",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"60% center",
              end:"160% 100%",
              scrub:true
            }
          })
          //img box 스크롤 이벤트 끝


        }//ta끝



    function pc(){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
          });


          //pc스크롤이벤트 시작


          gsap.from(".box1",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"-15% center",
              end:"45% 100%",
              scrub:true
            }
          })
          gsap.from(".box2",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"15% center",
              end:"75% 100%",
              scrub:true
            }
          })
          gsap.from(".box3",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"35% center",
              end:"95% 100%",
              scrub:true
            }
          })
          gsap.from(".box4",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"-5% center",
              end:"55% 100%",
              scrub:true
            }
          })
          gsap.from(".box5",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"25% center",
              end:"85% 100%",
              scrub:true
            }
          })
          gsap.from(".box6",{
            y:200,autoAlpha:0,
            scrollTrigger:{
              trigger:".img_box",
              // markers:true,
              start:"45% center",
              end:"105% 100%",
              scrub:true
            }
          })


          //pc 스크롤이벤트 끝


        }//pc끝




        


/*gsap scrolltrigger*/




      gsap.from(".txt_01>h2",{
        y:200,autoAlpha:0,
        scrollTrigger:{
          trigger:".txt_01",
          // markers:true,
          start:"0% 100%",
          end:"0% 50%",
          scrub:true
        }
      })//row3 txt_01 h2 스크롤
      gsap.from(".txt_01>span",{
        y:200,autoAlpha:0,
        scrollTrigger:{
          trigger:".txt_01",
          // markers:true,
          start:"0% 50%",
          end:"50% 50%",
          scrub:true
        }
      })//row3 txt_01 span 스크롤






    
})//document끝