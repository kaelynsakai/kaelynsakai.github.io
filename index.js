var width = $(window).width();
window.onscroll = function () {
    if ((width >= 1000)) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").css("background", "#fff");
            $("#header").css("color", "#000");
            $("#header").css("box-shadow", "0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding", "4vh 4vw");
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid rgb(223, 142, 168)");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
        } else {
            $("#header").css("background", "transparent");
            $("#header").css("color", "#fff");
            $("#header").css("box-shadow", "0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding", "6vh 4vw");
            $("#navigation a").hover(function () {
                $(this).css("border-bottom", "2px solid #fff");
            }, function () {
                $(this).css("border-bottom", "2px solid transparent");
            });
        }
    }
}

function magnify(imglink) {
    $("#img_here").css("background", `url('${imglink}') center center`);
    $("#magnify").css("display", "flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function () {
        $("#magnify").removeClass("animated fadeIn");
    }, 800);
}

function closemagnify() {
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function () {
        $("#magnify").css("display", "none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background", `url('') center center`);
    }, 800);
}

setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 1650);

$(document).ready(function () {
    $('#thumbnail7').removeClass('thumbnail7');
    $('#thumbnail2').removeClass('thumbnail2');
    $('#thumbnail3').removeClass('thumbnail3');
    $('#thumbnail4').removeClass('thumbnail4');
    $('#thumbnail5').removeClass('thumbnail5');
    $('#thumbnail6').removeClass('thumbnail6');
    $('#thumbnail1').removeClass('thumbnail1');
    $('#thumbnail8').removeClass('thumbnail8');
    $('#thumbnail9').removeClass('thumbnail9');
    $('#thumbnail10').removeClass('thumbnail10');
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });
});

var figure = $(".video").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).load();
    $('video', this).get(0).pause();
}

document.querySelectorAll('button[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});