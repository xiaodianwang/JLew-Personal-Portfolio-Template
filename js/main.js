$(document).ready(function(){
	var hoverEnabled=true;
	var bkgndImgMap = {
		0: "url('../img/sewing_machine.jpg')",
		1: "url('../img/denim-fabric.jpg')",
		2: "url('../img/sewing_machine.jpg')",
		3: "url('../img/denim-fabric.jpg')",
		4: "url('../img/sewing_machine.jpg')"				
	};

	$('.main-content, .menu-indicator, .role, .org, .date').hide();
	
	$('.menu-item').one('click', function(){
		var clickIndex = $(this).index();
		$('.menu-item').each(function(index) {
			if (index != clickIndex) {
				$(this).addClass('inactive');
				$(this).hide(700);
			}
			else {
				$('nav').removeClass('vert-centered');
				$(this).addClass('active');
				$(this).find('.arrow').fadeOut(700, function() {
					$(this).addClass('hidden-symbol');
					$(this).next('.hamburger-menu').removeClass('hidden-symbol');
				});
			}
			hoverEnabled=false;
			$('.main-content').show(700);		
		});	
	});

	$('.hamburger-menu').one('click', function(){
		$('.main-content').fadeOut();
		$('.menu-item').each(function(index){
			$(this).find('.hamburger-menu').addClass('hidden-symbol');
			$(this).removeClass('inactive');
			$(this).removeClass('active');
			$(this).fadeIn(500*index);
		});
		$('nav').addClass('vert-centered');
		hoverEnabled=true;
	});

	$('.menu-item').hover(
		//mouseover event
		function (){
			if (hoverEnabled==true) {
				$(this).children('.menu-arrow').toggle("slide");
				var hoverIndex = $(this).index();
				$('.menu-item').each(function(index){
					if (index == hoverIndex) {
						$(this).children(':not(.project)').fadeIn();
						$('.fadeInBkgnd').css('background-image', bkgndImgMap[index]);
						$(body).addClass('fadeInBkgnd');
/*						$(body).animate({})*/
					}
				});
			}
			//mouse out event 
		}, function (){
			if (hoverEnabled==true) {
				$(this).children(':not(.project)').fadeOut();
				$('#main-wrapper').removeClass('menu-bkgnd');
				$(this).children('.menu-arrow').toggle("slide");
			}
		});
});

/*need js to compute the distance from a menu
element to the top. Then move the element that distance
to the top
Also need to make sure that all elements get to the
top at the same rate (so need a set rate, and after
	the distance is calculated, then calculate the
	time it takes)
Need to set a timeout time, after the timer goes off, then
for sure change the css property of the element*/

//come up w a good way to make the timer work...