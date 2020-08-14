$(window).scroll(function(){
	var ratio = ( $(document).scrollTop() / ($(document).height() - $(window).height()) ) * 100;
	$('#bar').css('width', ratio + '%');
	$('img').css({'transform': 'translate('+($(window).width()-94) * ratio / 100+'px,0px)'});
});