const today = new Date();
const year = today.getFullYear();

var footerel = document.getElementById("footer");
var introel = document.getElementById("intro");
var dateel = document.getElementById("date");

class Birthday {
    constructor(day, month, year) {
        this.bDay = new Date(year, month - 1, day);

    }
    age() {
        let age = today.getFullYear() - this.bDay.getFullYear();
        if ((this.bDay.getMonth() > today.getMonth()) && ((this.bDay.getMonth() == today.getMonth()) && (this.bDay.getDay() > today.getDay()))) {
            return age;
        } else {
            return age = age - 1;
        }
    }
}

hunterBDay = new Birthday(26, 10, 2000);
spencerBDay = new Birthday(11, 04, 1994);
footerel.innerHTML = "<p>Copyright © Cave Laverty, " + year + "</p>";
introel.innerHTML = "<p>Spencer Cave, Age: " + (spencerBDay.age()).toString() + ", Hunter Laverty, Age: " + (hunterBDay.age()).toString() + " </p>";
dateel.innerHTML = "<p>Today's Date: " + today.toDateString() + ". Current Time: " + today.toLocaleTimeString() + ".</p>";