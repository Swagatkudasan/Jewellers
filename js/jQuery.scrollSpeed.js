$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 1;			//Scroll time
	var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2
//!function(t){jQuery.scrollSpeed=function(e,n,i){var o,l,r,u=t(document),h=t(window),a=t("html, body"),c=i||"default",d=0,f=!1;if(window.navigator.msPointerEnabled)return!1;h.on("mousewheel DOMMouseScroll",function(t){var i=t.originalEvent.wheelDeltaY,s=t.originalEvent.detail;return o=u.height()>h.height(),l=u.width()>h.width(),f=!0,o&&(r=h.height(),(i<0||s>0)&&(d=d+r>=u.height()?d:d+=e),(i>0||s<0)&&(d=d<=0?0:d-=e),a.stop().animate({scrollTop:d},n,c,function(){f=!1})),l&&(r=h.width(),(i<0||s>0)&&(d=d+r>=u.width()?d:d+=e),(i>0||s<0)&&(d=d<=0?0:d-=e),a.stop().animate({scrollLeft:d},n,c,function(){f=!1})),!1}).on("scroll",function(){o&&!f&&(d=h.scrollTop()),l&&!f&&(d=h.scrollLeft())}).on("resize",function(){o&&!f&&(r=h.height()),l&&!f&&(r=h.width())})},jQuery.easing.default=function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n}}(jQuery);