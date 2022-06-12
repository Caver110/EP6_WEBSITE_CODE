var nutel = document.getElementById("2");
nutel.setAttribute('class', "item");

var newElement = document.createElement("li")
var newText = document.createTextNode("Frozen Mangoes")

newElement.appendChild(newText);

var position = document.querySelector("ul");
position.appendChild(newElement);

var changeText = document.getElementById("1");

function myEvent() {
    document.write("Hey you did it!");
}

changeText.addEventListener("click", myEvent, 0);