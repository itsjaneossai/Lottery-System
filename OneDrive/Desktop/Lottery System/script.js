let userguess = [];
let luckyNumbers = [];

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function handleGuessLogic(inputId, buttonId, displayId) {
  let guessCountDisplay = document.getElementById(displayId);
  let inputField = document.getElementById(inputId);
  let nextButton = document.getElementById(buttonId);

  let guess = inputField.value.trim();
  let num = Number(guess);
  inputField.value = "";

  if (!num || num > 90 || num < 1 || isNaN(num) || guess.includes(".")) {
    alert("Enter a whole number from 1-90");
    return;
  } else if (userguess.includes(num)) {
    alert("Already Guessed");
    return;
  } else {
    userguess.push(num);
    guessCountDisplay.textContent = userguess.join(", ");

    if (userguess.length === 2 && inputId === "guessinput-start") {
      hide("start");
      show("exit");
    }

    if (userguess.length === 6 && inputId === "guessinput-continue") {
      nextButton.disabled = true;
      alert(
        "You have entered 6 numbers! Please click 'Submit' to view your results.",
      );
    }
  }
}

function Rules() {
  let rules = document.querySelector(".rules");
  rules.style.display = "block";
  rules.classList.add("show");
}
// the toggle conveniently prevents the rules from
// showing up twice unless reloaded

function closeRules() {
  let rules = document.querySelector(".rules");
  rules.style.display = "none";
  rules.classList.remove("show");
  Start();
}

function LotteryNum() {
  luckyNumbers = [];
  for (let j = 1; j <= 6; j++) {
    let num = Math.floor(Math.random() * 90 + 1);
    console.log(num);
    if (luckyNumbers.includes(num)) {
      j--;
      continue;
    } else {
      luckyNumbers.push(num);
      console.log("Lucky numbers:", luckyNumbers);
    }
  }
}

function Start() {
  userguess = [];
  show("start");
  hide("exit");
  hide("continual");
  hide("final");
  hide("go");
  // my css...
}

function Continue() {
  hide("exit");
  show("continual");
   document.getElementById("guess-final").textContent = userguess.join(", ");
}

function handleSubmitClick() {
  Results();
  hide("start");
  hide("exit");
  hide("continual");
  show("final");
}

function Results() {
  let wins = userguess.filter((user) => luckyNumbers.includes(user));

  document.getElementById("lucky-final").textContent =
    `Lucky Numbers: ${luckyNumbers.join(", ")}`;
  document.getElementById("guess-finals").textContent =
    `Your Guesses: ${userguess.join(", ")}`;

  let message = "";
  if (wins.length === 0)
    message = "Sorry, none of your guesses matched. Better luck next time!";
  else if (wins.length === 6) message = "🎉 JACKPOT! You matched all 6!";
  else
    message = `You matched ${wins.length} number${wins.length > 1 ? "s" : ""}. Matching: ${wins.join(", ")}`;

  document.getElementById("wins").textContent = message;

  hide("exit");
  hide("continual");
  hide("start");
  show("final");
}

document.getElementById("retrybtn").addEventListener("click", function () {
  userguess = [];
  luckyNumbers = [];
  LotteryNum();

  // Clear all display elements
  document.getElementById("guess").textContent = "--";
  document.getElementById("guess-final").textContent = "--";
  document.getElementById("lucky-final").textContent = "******";
  document.getElementById("wins").textContent = "";

  // Reset disabled next guess button
  document.getElementById("nextguess-continue").disabled = false;

  hide("final");
  show("go");
});

document
  .getElementById("submitbtn")
  .addEventListener("click", handleSubmitClick);

document.getElementById("quitbtn-exit").addEventListener("click", Results);
document.getElementById("quitbtn-end").addEventListener("click", Results);
document.getElementById("continue").addEventListener("click", Continue);
document.getElementById("nextguess-start").addEventListener("click", () => {
  handleGuessLogic("guessinput-start", "nextguess-start", "guess");
});
document.getElementById("nextguess-continue").addEventListener("click", () => {
  // Call the new helper function with CONTINUE stage IDs
  handleGuessLogic("guessinput-continue", "nextguess-continue", "guess-final");
});

// hmm.
document.addEventListener("keypress", function (e) {
  // Check if the pressed key is 'Enter' (key code 13 or key 'Enter')
  if (e.key === "Enter" || e.keyCode === 13) {
    if (document.activeElement.id === "guessinput-start") {
      document.getElementById("nextguess-start").click();
      e.preventDefault();
    }

    if (document.activeElement.id === "guessinput-continue") {
      document.getElementById("nextguess-continue").click();
      e.preventDefault();
    }
  }
});

// You cant quit after 1 number
// a hurray prompt...
// play again feature...
// apparently, this accepts empty values...
//  // the i == 2, it doesnt register my next number
// repititive....

// var wins = [];
//   let matches = document.getElementById("wins");
//   for (u of userguess) {
//     if (luckyNumbers.includes(u)) {
//       wins.push(u);
//       matches.textContent = wins;
//     }
//   }
