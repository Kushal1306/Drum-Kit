/*document.querySelector("button").addEventListener("click",handleClick);
function handleClick()
{
   alert(" I got clicked");
}
*/
var x = document.querySelectorAll(".drum").length;
for (var i = 0; i < x; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var kkj = this.innerHTML;
        makesound(kkj);
        buttonAnimation(kkj);
        // switch (kkj) {
        //     case "k":
        //         var audio = new Audio("sounds/tom-1.mp3");
        //         audio.play();
        //         break;
        //     case "u":
        //         var audio = new Audio("sounds/tom-2.mp3");
        //         audio.play();
        //         break;
        //     case "s":
        //         var audio = new Audio("sounds/tom-3.mp3");
        //         audio.play();
        //         break;
        //     case "h":
        //         var audio = new Audio("sounds/tom-4.mp3");
        //         audio.play();
        //         break;
        //     case "a":
        //         var audio = new Audio("sounds/snare.mp3");
        //         audio.play();
        //         break;
        //     case "l":
        //         var audio = new Audio("sounds/crash.mp3");
        //         audio.play();
        //         break;
        //     case "j":
        //         var audio = new Audio("sounds/kick-bass.mp3");
        //         audio.play();
        //         break;

        //     default: console.log(kkj);

        // }



    });
}
//detecting keybosrd press
document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "k":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "u":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default: console.log(key);

    }

}
function buttonAnimation(currentKey)
{
   var activeButton =document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}










