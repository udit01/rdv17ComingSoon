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
    // rdvLogo.style.display = "block";
    $("#overlayImage").css("opacity","0");
     $("#rdvLogo").fadeIn("slow",function () {
         //this function loaded once the animation is complete
         rdvLogo.style.transform = "translate3d(0%, -150px , 0)";
         // $('#rdvLogo').css("transform","translate3d(0%, -150px , 0)").promise().done(function(){
         //     alert( 'color is yellow!' );
         //     endText.style.display = "block";
         //
         // // });

         // endText.style.display = "block";

         $("#endText").css("opacity","1");
     });

    // console.log("TO make the logo fadeIn");
    // console.log("");
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