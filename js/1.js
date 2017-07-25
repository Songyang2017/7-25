$(".swiper-wrapper").css({
						width: $(window).width(),
						height: $(window).height()
					})


		var mySwiper = new Swiper ('.swiper-container-v', {
	    direction: 'vertical',
	    // loop: true,
	    freeMode:false,
	   
	 	
	 	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		  }, 
		onSlideChangeEnd: function(swiper){ 
			console.log(swiper.activeIndex);

			$(".f img").css({width:"1.31rem"});
	    	$(".f1 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".f2 img").css({left:"3.75rem",top:"6rem",width:"0.02rem",height:"0.02rem"});
	    	$(".f3 img").css({right:"3.75rem",bottom:"7.75rem",width:"0.05rem",height:"0.05rem"});
	    	$(".f4 img").css({left:"3.75rem",bottom:"7.75rem",width:"0.03rem",height:"0.03rem"});
	    	$(".f5 img").css({right:"3.75rem",top:"6rem",width:"0.04rem",height:"0.04rem"});
	    	$(".f6 img").css({left:"3.75rem",top:"6rem",width:"0.1rem",height:"0.1rem"});
	    	$(".f7 img").css({left:"3.75rem",bottom:"7.75rem",width:"0.015rem",height:"0.015rem"});
	    	$(".f8 img").css({right:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	
	    	$(".ass1 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass2 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass3 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass4 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass5 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass6 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass7 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass8 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass9 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass10 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass11 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass12 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass13 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass14 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass15 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass16 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
	    	$(".ass17 img").css({left:"3.75rem",top:"6rem",width:"0rem",height:"0rem"});
		    	
    		if(swiper.activeIndex==3){
    		$(".f1 img").animate({left:"0.3412rem",top:"2.2rem",width:"1.31rem",height:"1.31rem"},2000);
	    	$(".f2 img").animate({left:"2.17515rem",top:"1.03213rem",width:"1.31rem",height:"1.31rem"},2000);
	    	$(".f3 img").animate({right:"0.6824rem",bottom:"4rem",width:"1.31rem",height:"1.31rem"},2000);
	    	$(".f4 img").animate({left:"0.6824rem",bottom:"3.8385rem",width:"1.31rem",height:"1.31rem"},2000);
	    	$(".f5 img").animate({right:"0.512rem",top:"1.9rem",width:"1.31rem",height:"1.31rem"},2000);
	    	$(".f6 img").animate({left:"0.81rem",top:"4.48rem",width:"1.31rem",height:"1.31rem"},2000);
	    	$(".f7 img").animate({left:"2.456rem",bottom:"2.9rem",width:"1.31rem",height:"1.31rem"},2000);
	    	$(".f8 img").animate({right:"0.3412rem",top:"4.3rem",width:"1.31rem",height:"1.31rem"},2000);
    		
    		$(".ass1 img").animate({left:"0.256rem",top:"-0.21325rem",width:"0.63rem",height:"0.63rem"},2000);
    		$(".ass2 img").animate({left:"5.118rem",top:"0.0853rem",width:"1rem",height:"1rem"},2000);
    		$(".ass3 img").animate({left:"1.706rem",top:"3.8385rem",width:"0.31rem",height:"0.31rem"},2000);
    		$(".ass4 img").animate({left:"6.1416rem",top:"2.2178rem",width:"0.67rem",height:"0.67rem"},2000);
    		$(".ass5 img").animate({left:"3.412rem",top:"2.7296rem",width:"0.6rem",height:"0.6rem"},2000);
    		$(".ass6 img").animate({left:"3.79585rem",top:"0.5971rem",width:"0.36rem",height:"0.36rem"},2000);
    		$(".ass7 img").animate({left:"0.3412rem",top:"8.7859rem",width:"2.03rem",height:"2.03rem"},2000);
    		$(".ass8 img").animate({left:"-1.02rem",top:"4.9474rem",width:"1.84rem",height:"1.84rem"},2000);
    		$(".ass9 img").animate({left:"4.50384rem",top:"4.14rem",width:"0.17rem",height:"0.17rem"},2000);
    		$(".ass10 img").animate({left:"0.38385rem",top:"3.85rem",width:"0.11rem",height:"0.11rem"},2000);
    		$(".ass11 img").animate({left:"2.62724rem",top:"3.173rem",width:"0.11rem",height:"0.11rem"},2000);
    		$(".ass12 img").animate({left:"4rem",top:"4.9rem",width:"0.07rem",height:"0.07rem"},2000);
    		$(".ass13 img").animate({left:"2.57606rem",top:"5.61274rem",width:"0.11rem",height:"0.11rem"},2000);
    		$(".ass14 img").animate({left:"3.25846rem",top:"6.13307rem",width:"0.025rem",height:"0.025rem"},2000);
    		$(".ass15 img").animate({left:"4rem",top:"7.57rem",width:"0.63rem",height:"0.63rem"},2000);
    		$(".ass16 img").animate({left:"4.5rem",top:"5.1rem",width:"0.418rem",height:"0.418rem"},2000);
    		$(".ass17 img").animate({left:"5.57rem",top:"8.5rem",width:"0.24rem",height:"0.24rem"},2000);
    		
    		$(".hand1 img").addClass("xianshi");
    		} 	






			$('.p8-1').animate({
				top: '0.4rem',left: '2.1rem'
			},400)
			$('.p8-2').animate({
				left: '0.9rem'
			},400)
			$('.p8-3').animate({
				left: '0'
			},400)
			$('.p8-4').animate({
				right: '0'
			},400)
			$('.p8-5').animate({
				top: '1.55rem',right: '0.5rem'
			},400)
			$('.p8-6').animate({
				top: '0.3rem',left: '3.8rem'
			},400)
			if(swiper.activeIndex!=7){
				$('.p8-1').animate({
				top: '3rem',left: '7rem'
			},1)
				$('.p8-2').animate({
				top: '0.28rem',left: '7rem'
			},1)
				$('.p8-3').animate({
				top: '0.3rem',left: '-1rem'
			},1)
				$('.p8-4').animate({
				top: '-0.5rem',right: '-1rem'
			},1)
				$('.p8-5').animate({
				top: '2rem',right: '-0.68rem'
			},1)
				$('.p8-6').animate({
				top: '3rem',left: '-2.5rem'
			},1)
			}
			var time=null,i=1;
			time=setInterval(function(){
				i++;
				$('.p2-1 img').eq(i).show().siblings().hide();
				if(i>47){
					i=1;
				}
				if(swiper.activeIndex!=1){
					clearInterval(time);
				}
			},80)
			
			if(swiper.activeIndex==6){
				setTimeout(function(){$('.p7-9').slideDown(1500)},1200)
				
			}else{
				$('.p7-9').css({display:'none'})
			}
			


			$('.p6-1').animate({
				top: '0.4rem',
    			left: '2.1rem',
    			width:'2.2rem'
			},1500)
			if(swiper.activeIndex!=5){
				$('.p6-1').animate({
				position:'absolute',
				top: '1.5rem',
				left: '6.5rem',
				width:'4rem'},0)
			}


swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

			if(swiper.activeIndex==5){
						$(".slide_6_sanjiaoti").children().css("display","block");
						$(".slide_6_s1").css("animation","ss1 1.5s linear both");
						$(".slide_6_s2").css("animation","ss2 1.5s linear both");
						$(".slide_6_s3").css("animation","ss3 1.5s linear both");
						$(".slide_6_s4").css("animation","ss4 1.5s linear both");
						$(".slide_6_s5").css("animation","ss5 1.5s linear both");
					}else{
						$(".slide_6_sanjiaoti").children().css("display","none");
					}

			} 
		  }) 
			

					//第四
$(".f").on("click",function(){
	var index = $(".slide4>.f").index($(this)[0]);
	var i=index;
	$(".v").eq(i).css("display","block").siblings().css("display","none");
	$(".f").css("display","none");
	$(".close1").css("display","block");
	$(".rig").css("display","block");
	$(".lef").css("display","block");
	$(".x").css("display","none");
	$(".hand1").css("display","none");
})
$(".swiper-button-next").on("click",function(){
	i++;
	if(i==7){
		i=7;
	}
	$(".v").eq(i).css("display","block").siblings().css("display","none");
})
$(".close1").on("click",function(){
	$(".swiper-container-h .v").css("display","none");
	$(".f").css("display","block");
	$(".close1").css("display","none");
	$(".rig").css("display","none");
	$(".lef").css("display","none");
})
//第五
$(".men").on("click",function(){
	$(".men1").css("display","none");
})
$(".mayue").on("click",function(){
	$(".ma").fadeIn(500);
	$(".close").click(function(){
		$(".ma").fadeOut(500);
	})
})
$(".bi").on("click",function(){
	$(".bili").slideDown(500);
	$(".close").click(function(){
		$(".bili").slideUp(500);
	})
})
$(".tang").on("click",function(){
	$(".tanghuai").slideDown(500);
	$(".close").click(function(){
		$(".tanghuai").slideUp(500);
	})
})
$(".yi").on("click",function(){
	$(".yixiaoxing").slideDown(500);
	$(".close").click(function(){
		$(".yixiaoxing").slideUp(500);
	})
})
$(".zhou").on("click",function(){
	$(".zhoushou").slideDown(500);
	$(".close").click(function(){
		$(".zhoushou").slideUp(500);
	})
})
$(".yu").on("click",function(){
	$(".yujianjun").slideDown(500);
	$(".close").click(function(){
		$(".yujianjun").slideUp(500);
	})
})
$(".hao").on("click",function(){
	$(".haochang").slideDown(500);
	$(".close").click(function(){
		$(".haochang").slideUp(500);
	})
})
$(".huang").on("click",function(){
	$(".huangjixin").slideDown(500);
	$(".close").click(function(){
		$(".huangjixin").slideUp(500);
	})
})
$(".li").on("click",function(){
	$(".lizhiming").slideDown(500);
	$(".close").click(function(){
		$(".lizhiming").slideUp(500);
	})
})
$(".ming").on("click",function(){
	$(".limingwei").slideDown(500);
	$(".close").click(function(){
		$(".limingwei").slideUp(500);
	})
})
		
var mySwiper1 = new Swiper(".swiper-container-h",{
				nested:true,
				resistanceRatio: 0,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			})
		
		


