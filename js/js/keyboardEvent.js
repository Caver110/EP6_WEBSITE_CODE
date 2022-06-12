var elText = document.getElementById("message");
var elChars = document.getElementById("chars_remaining");
var lastKey = document.getElementById("last_char")

//functions

function charCount(e){
    var textEntered, charDisplay, counter, lastKey;

    lastKey.innerHTML = "Chars Remaining: " + String.fromCharCode(e.keycode);
    

}


//event listeners

elText.addEventListener('keypress', charCount, false);