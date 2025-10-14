function Lottery() {
    try {
    // if 
var luckyNumbers = [];
for (i = 1; i <= 6; i++) {
    let num = Math.floor(Math.random() * 90 + 1);
    console.log(num);
    if (luckyNumbers.includes(num)) {
        i--;
        continue;
    } else {
        luckyNumbers.push(num);
        console.log(luckyNumbers);
    }    
}


var userguess = [];
for (i = 1; i <= 6; i++) {
    let user = prompt("Enter a random number from 1 to 90: ");
    user === user.trim();
    console.log(user)

    let num = Number(user)
    if (i >= 2) {
        let decision = prompt(
                "You can quit this game by typing 'Q' or 'Quit' OR \n " +
                "Continue by guessing 4(four) more numbers"
            )
            if (decision.trim().toLowerCase() == "q" || decision.trim().toLowerCase() == "quit" ) {
                alert("You quit.");
                break;
            } else {
                continue;
            }
    }

    if (!user || Number(user)> 90 || Number(user) < 1 || isNaN(Number(user)) || user.includes(".") ) {
       alert("Invalid input. Please enter a whole number between 1 and 90.");
        i--;
        continue;
    } 

    if (userguess.includes(num)) {
        alert(`You have already guessed this number: ${num}!`)
        i--;
        continue;
    } else {
        userguess.push(num);
        console.log(userguess)
    }
}

var wins = [] 
for (u of userguess) {
    if(luckyNumbers.includes(u)) {
        wins.push(u)
    }
}


if (userguess.length >= 2) {
    alert(
   `Lucky Numbers: ${luckyNumbers} \n ` +
   `User Entries: ${userguess} \n ` +
   `Winning Numbers: ${wins}`
    );
}

if (userguess.length >= 2) {
  let lottery = userguess.filter((user) => luckyNumbers.includes(user))
    if (lottery.length == 0) {
        alert("Sorry, none of your guesses are correct.")
    } else if (lottery.length == 1) {
        alert("Sorry, you guess only one correctly")
    } else if (lottery.length == 2) {
        alert("Congratulations, you guess 2 correctly")
    } else if (lottery.length == 3) {
        alert("Congratulations, you guess 3 correctly")
    } else if (lottery.length == 4) {
        alert("Congratulations, you guess 4 correctly")
    } else if (lottery.length == 5) {
        alert("Congratulations, you guess 5 correctly")
    } else if (lottery.length == 6) {
        alert("Congratulations, you just won a jackpot")
    
   }
}
    } catch (error) {
        return `The error is ${error.message}`
    }
}



// You cant quit after 1 number
// a hurray prompt...
// play again feature...
// apparently, this accepts empty values...
//  // the i == 2, it doesnt register my next number
 // repititive....
