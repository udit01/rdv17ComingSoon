/**
 * Created by udit01 on 21/5/17.
 */


var bgvid = document.getElementById("bgvid");
var bgimg = document.getElementById("backgroundImage");


function imageFront() {
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

bgvid.addEventListener('ended',endHandler);
bgvid.addEventListener('loadstart',loadingPageDisplay);
bgvid.addEventListener('loadeddata',loadingPageEnd);


function loadingPageDisplay(e)
{
    console.log("loading");
    options = document.querySelectorAll(".navigation")
    for (var i = 0, len = options.length; i < len; i++)
    {
        options[i].style.display = "none";
    }
}

function loadingPageEnd(e)
{
    console.log("loading end");
    options = document.querySelectorAll(".navigation");
    for (var i = 0, len = options.length; i < len; i++)
    {
        options[i].style.display = "block";
    }
    document.getElementById("loading_page").style.display="none";

}

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