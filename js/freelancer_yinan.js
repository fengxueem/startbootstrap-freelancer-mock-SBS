// Closes the Responsive Menu on Menu Item Click
$('#yinan-navbar-collapse-1 ul li a').click(function(){ 
	$('.navbar-toggle:visible').click();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

// activate scrollspy
$('body').scrollspy({ target: '#yinan-navbar-collapse-1', offset: 150 })