/**
 * Created by udit01 on 21/5/17.
 */


var bgvid = document.getElementById("bgvid");
var bgimg = document.getElementById("backgroundImage");
// var endText = document.getElementById("endText");
// var rdvLogo = document.getElementById("rdvLogo");


bgvid.addEventListener('loadstart', loadingPageDisplay);
bgvid.addEventListener('loadeddata', loadingPageEnd);
bgvid.addEventListener('ended', endHandler);

// window.onload = function() {
//  I HAVE REMOVED THE ONLOAD FUNCTION WHICH MAY TURN OUT TO BE A BAD DECISION

    document.getElementById("skipVideoText").addEventListener('click', function (e) {
        // alert("contact us is clicked");
        // $("#contactUsImage").css("display" , "block");
        // $("#contactUsImage").css("opacity" , "1");
        bgvid.currentTime = 17.2;
        //the above time is hardcoded which is a very bad thing but i couldnt find a end time function
    });


// };

function loadingPageDisplay(e) {
    console.log("loading");
    options = document.querySelectorAll(".navigation");
    for (var i = 0, len = options.length; i < len; i++) {
        options[i].style.display = "none";
    }
}

function loadingPageEnd(e) {
    console.log("loading end");
    options = document.querySelectorAll(".navigation");
    for (var i = 0, len = options.length; i < len; i++) {
        options[i].style.display = "block";
    }
    document.getElementById("loading_page").style.display = "none";
    $("#overlayImage").css("opacity",".7");
}

//now the video ends

function endHandler(e) {
    console.log("ended function is called");
    // rdvLogo.style.display = "block";
    $("#overlayImage").css("opacity","0");
    $("#skipVideoText").css("display","none");
    $("#endBackground").css("opacity",".8");
     $("#rdvLogo").fadeIn("slow",function () {
         //this function loaded once the animation is complete
         // rdvLogo.style.transform = "translate3d(0%, -140px , 0)";
         $("#rdvLogo").css("transform" , "translate3d(0%, -140px , 0)" );
                                                ///THE ABOVE PIXEL VALUE IS HARDCODED WHICH IS A BAD THING
         // endText.style.display = "block";
         $("#endText").css("opacity","1");
     });
}

// $(document).ready(function() {
//     $("#fireAnimate").hover(
//         function() {
//             $(this).attr("src", "images/fire-animated.gif");
//         },
//         function() {
//             $(this).attr("src", "images/fire-static.png");
//         }
//     );
//
//     $("#tentAnimate").hover(
//         function() {
//             $(this).attr("src", "images/tent-animated.gif");
//         },
//         function() {
//             $(this).attr("src", "images/tent-static.svg");
//         }
//     );
//
// });