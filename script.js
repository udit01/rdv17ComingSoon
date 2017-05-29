/**
 * Created by udit01 on 21/5/17.
 */


var vid = document.getElementById("bgvid");

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
    vid.pause();
// to capture IE10
    vidFade();
});



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