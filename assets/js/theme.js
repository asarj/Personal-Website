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
     
   // var scroll_start = 0;
   // var startchange = $('#about-me');
   // var offset = startchange.offset();
   //  // if (startchange.length){
   //     $(document).scroll(function() { 
   //        scroll_start = $(this).scrollTop();
   //        if(scroll_start > offset.top - 50) {
   //            $("#navBar").addClass('navBar-def');
   //         } else {
   //            $('#navBar').css('background-color', 'transparent');
   //         }
   //     });
    // }
$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    var $home = $("#welcome");
    if (scrollPos> $home.height() - 90) {   
        $('#navBar').removeClass('navBar-solid').addClass('navBar-def');
    } 
    if (scrollPos < $home.height() - 90){   
        $('#navBar').removeClass('navBar-def').addClass('navBar-solid');      
    }
});