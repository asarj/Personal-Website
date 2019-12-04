$('.datepicker').each(function(){
	var picker = new Pikaday({
		field: this
	});
});

$(".explore-about-me").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-me").offset().top},
        2000);
});

$(".back-to-home").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        2000);
});

$(".back-to-projects").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        2000);
});
$('#resumeBtn').removeClass('hover');

$(".back-to-cv").click(function() {
    $('html,body').animate({
        scrollTop: $("#cv").offset().top},
        2000);
});