//리뷰 아코디언만들기
$(function(){
	$(".review_content> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
	});
	$(".review_content> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});


});
	//페이지넘어가는 형태 만들기
$(function(){
	$("ul.page>li").click(function(){
		$(this).addClass("page_on").siblings().removeClass("page_on");
	});
});

//부드럽게 움직이기

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	if (target.length) {
	$('html, body').animate({
	scrollTop: target.offset().top
	}, 500);//움직이는 시간 조정
	return false;
	}
	}
	});
	});