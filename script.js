/**
 * Created by udit01 on 21/5/17.
 */


var bgvid = document.getElementById("bgvid");
var bgimg = document.getElementById("backgroundImage");
var endText = document.getElementById("endText");
var rdvLogo = document.getElementById("rdvLogo");


bgvid.addEventListener('loadstart', loadingPageDisplay);
bgvid.addEventListener('loadeddata', loadingPageEnd);

bgvid.addEventListener('ended', endHandler);

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

}

function endHandler(e) {
    console.log("ended function is called");
    rdvLogo.style.display = "block";
    // rdvLogo.fadeIn;

    console.log("");
    rdvLogo.style.top = "10%";
    console.log("");
    endText.style.display = "block";
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