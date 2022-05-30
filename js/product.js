$(document).ready(function() {

   
    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show(); 
    $(".tab_content:first").show(); 

  
    $("ul.tabs li").click(function() {

        $("ul.tabs li").removeClass("active"); 
        $(this).addClass("active");
        $(".tab_content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });

});

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