var letters = ["w", "a", "s", "d", "j", "k", "l"];
var sounds = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];


function playSound(key) {
    var letter = key;
    var soundIndex = letters.indexOf(letter);
    var sound = sounds[soundIndex] ;
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}

function animation(key) {
    var button = document.querySelector("."+key)
    button.classList.toggle("pressed")
    setTimeout(function() {
        button.classList.toggle("pressed")
    }, 100)
}

var drums = document.querySelectorAll(".drum");
for (var drum of drums) {
    drum.addEventListener("click", function(){
        key = this.innerHTML;
        playSound(key);
        animation(key);
});
    
}

document.addEventListener("keydown", function(et) {
        key = et.key;
        playSound(key);
        animation(key);
});
// hey! Rajpuria was here
