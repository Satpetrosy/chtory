
/* sol-section2 */

$(document).ready(function(){

    $(".navbar-btn").click(function(){
        $(".nav-menu").toggleClass("open");
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        navText : ["<img src='images/Shtory_Landing32.png'>","<img src='images/Shtory_Landing31.png'>"],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

/* sol-section2 end*/


  /*video*/

var myVideo = document.getElementById("video1");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    myVideo.width = 560;
}

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 420;
}

/*video  end*/



/* sol-section2 */

$(document).ready(function(){

    $(".navbar-btn").click(function(){
        $(".nav-menu").toggleClass("open");
    });

    $('.owl-carousels').owlCarousel({
        loop:true,
        navText : ["<img src='images/Shtory_Landing32.png'>","<img src='images/Shtory_Landing31.png'>"],
        margin:5,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

/* sol-section2 end*/









