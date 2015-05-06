$(document).ready(function($) {
    $('#haulOut').bjqs({
        'height' : ($(window).innerHeight() - 85),
        'width' : $(window).innerWidth(),

        // width and height need to be provided to enforce consistency
        // if responsive is set to true, these values act as maximum dimensions
        //width : 700,
        //height : 300,

        // animation values
        animtype : 'fade', // accepts 'fade' or 'slide'
        animduration : 450, // how fast the animation are
        animspeed : 4000, // the delay between each slide
        automatic : true, // automatic

        // control and marker configuration
        showcontrols : false, // show next and prev controls
        centercontrols : false, // center controls verically
        nexttext : 'Next', // Text for 'next' button (can use HTML)
        prevtext : 'Prev', // Text for 'previous' button (can use HTML)
        showmarkers : false, // Show individual slide markers
        centermarkers : false, // Center markers horizontally

        // interaction values
        keyboardnav : false, // enable keyboard navigation
        hoverpause : false, // pause the slider on hover

        // presentational options
        usecaptions : false, // show captions for images using the image title tag
        randomstart : false, // start slider at random slide
        responsive : false // enable responsive capabilities (beta)
    });
});