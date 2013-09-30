$(document).ready(function() {
	/* homepage slider parameters */						   
	$('.home-slider').after('<div id="nav">').cycle({ 
	fx:     'fade', 
	speed:  2000, 
	timeout: 5000, 
	pager:  '#nav' 
	});

	/* entire block clickable for latest news */						   
	$(".ln-list li").click(function(){
    	window.location=$(this).find("a").attr("href");
		return false;
	});

	$(".ln-list li").mouseover(function(){
		$(this).addClass('ln-active');
		$(this).find("a").attr("class", "ln-link");
	 
    }).mouseout(function(){
	    $(this).removeClass('ln-active');
		$(this).find("a").attr("class", "");
    });
	
	
	/* entire block clickable for header contact box(present in all interior pages) */	
	$(".header-contact").click(function(){
    	window.location=$(this).find("a").attr("href");
		return false;
	});	
	
});