var consoleLine = "<p class=\"console-line\"></p>";

console = {
    log: function (text) {
        $("#console-log").append($(consoleLine).html(text));
    }
};


var userChoice = prompt("Do you choose rock, paper or scissors?");


var computerChoice = Math.random();

if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if (computerChoice > 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

console.log("Computer: " + computerChoice);

var areThey = function (value1, value2, choice1, choice2) {
    if (value1 === choice1 && value2 === choice2) {
        return (true);
    } else if (value1 === choice2 && value2 === choice1) {
        return (true);
    }
    return (false);
}


var compare = function (choice1, choice2) {
    if (areThey("paper", "rock", choice1, choice2)) {
        return ("paper wins");
    } else if (areThey("paper", "scissors", choice1, choice2)) {
        return ("scissors wins");
    } else if (areThey("scissors", "rock", choice1, choice2)) {
        return ("rock wins");
    }
    return ("it's a tie!");
}


console.log(compare(userChoice, computerChoice));