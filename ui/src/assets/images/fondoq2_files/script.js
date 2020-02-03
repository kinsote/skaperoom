$(document).ready(function(){
    beginrefresh();
    Menu();

});

function Menu() {
    $('.menu-bar').click(function (e) {
        e.preventDefault();

        $('.MenuContenedor').toggleClass("active");
        $('.MenuContenedor2').toggleClass("active");
        $(".fondomenu").toggleClass("active");
        $(".fondomenu").hasClass("active") ? $("div.title").text("Contenido") : $("div.title").text("Menu");
    });

    $('.vista-not h3').click(function () {
        $(this).siblings('.desc').slideToggle('fast');
    });
}

function beginrefresh() {
    //set the id of the target object
    var marquee = document.getElementById("marquee_text");
    if (marquee.scrollLeft >= (marquee.scrollWidth - marquee.clientWidth)) {
        setTimeout(function () { marquee.scrollLeft = 0 }, 2000);
        setTimeout(beginrefresh, 3000);
    }
    else {
        marquee.scrollLeft += 1;
        // set the delay (ms), bigger delay, slower movement
        setTimeout(beginrefresh, 30);
    }
}