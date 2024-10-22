$(document).ready(function(){

    let wt = $(window).width()

    if(wt>800){
        pc()
    }else{
        mo()
    }
    


    function mo(){
    let onoff = true;
    $(".btn_open").on("click",function(){
        onoff = !onoff
        if(onoff == false){
            $(".util").animate({"right":0})
        }else{
            $(".util").animate({"right":"-100%"})
        }  
        
    })

    $(".util>li>a").on("click",function(){
        onoff = !onoff
        if(onoff == false){
        $(this).siblings().stop().slideDown()
        }else{
         $(this).siblings().stop().slideUp()
        }
    })
    }//모바일 끝
    

    function pc(){
    $('.util>li').on('mouseover',function(){
        $('.sub>li, .bg').stop().slideDown();
      }).on('mouseout',function(){
        $('.sub>li, .bg').stop().slideUp()
      })
    }

    $(window).on("resize",function(){
        document.location.reload()
    })//pc끝
})//document끝