$(document).ready(function () {
    
    let screenHeight = $(window).height();
    console.log(screenHeight);
    $(window).scroll(function () {
        let currPosition = $(this).scrollTop();
        if (currPosition > screenHeight-150) {
            $('.hero').addClass("hero-scroll");
        } else {
            $('.hero').removeClass("hero-scroll");
            setActive('home');
        }
    })
});


function setActive(x) {
    $('.nav-link').removeClass("current");
    $(`.nav-link[href='#${x}']`).addClass("current");
}

function navScroll() {
    let currentSection = $("div[id]");
    currentSection.waypoint(function (direction) {
        if (direction == "down") {
            let currentSection = $(this.element).attr('id');
            setActive(currentSection);
        }
    }, { offset: '120px' });
    
     currentSection.waypoint(function (direction) {
         if (direction == "up") {
             let currentSection = $(this.element).attr('id');
             setActive(currentSection);
         }
     },{ offset: '150px'});
}

navScroll();


$(window).on('load', function () {
    $('.loading').fadeOut(500, function () {
        $(this).remove();
    });
});














