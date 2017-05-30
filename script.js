/**
 * Created by udit01 on 21/5/17.
 */


var vid = document.getElementById("bgvid");
var bgimg = document.getElementById("backgroundImage");


function Front() {
    vid.classList.add("videoFade");
    bgimg.classList.add("imageSurface");
}
function renderIcons() {
    //shift the rdv logo upwards and enter text here

}

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed
//     vid.pause();
// // to capture IE10
//     vidFade();
// });

document.getElementById('myVideo').addEventListener('ended',endHandler);
function endHandler(e) {
    vid.pause();
    imageFront();
    renderIcons();
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