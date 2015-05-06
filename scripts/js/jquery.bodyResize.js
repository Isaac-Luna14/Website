$(document).ready(function() {
    
    $('.div').css('height', ($(window).innerHeight() - 85) + 'px');
    $('.div').css('width', ($(window).innerWidth()) + 'px');
    
    
    $('#dots').css('height', ($(window).innerHeight() + 256) + 'px');
    $('#dots').css('width', ($(window).innerWidth()) + 'px');  
    $('#dots').css('top', "-" + ($(window).innerHeight()) + 'px');

    $('#AboutTheTable').css('height', ($(window).innerHeight() - 85) + 'px');
    $('#AboutTheTable').css('width', ($(window).innerWidth()) + 'px');
    $('.tdtd').css('height', ($(window).innerHeight() - (85 + 50)) + 'px');
    
    $('#ContactTheTable').css('width', ($(window).innerWidth()) + 'px');
    
    //$('#parallaxism').css('height', ($(window).innerHeight() * (1 / 2)) + 'px');
    //$('#parallaxism').css('width', ($(window).innerWidth()) + 'px');
    
    $('#SocialTheTable').css('width', ($(window).innerWidth()) + 'px');
    
    $('#profileUL').css('height', ($(window).innerHeight() - (85 + 55)) + 'px');
    
    $.stellar({
        horizontalScrolling: false,
        responsive: false,
        verticalOffset: 1000,
        horizontalOffset: 0
    });
});
