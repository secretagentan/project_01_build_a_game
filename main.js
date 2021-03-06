console.log("meow");

// =============================================
//    VARIABLES NEEDED
// =============================================

// var for container
var container = document.querySelector("#container");

// vars for each card slot
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

// var for buttons
var plusOne = document.querySelector(".plus-one");
var playAgain = document.querySelector(".play-again");
var reset = document.querySelector(".reset");

// var for h2 header quote
var quote = document.querySelector("h2");

// var for slot divs
var slots = document.getElementsByTagName("div");

// var for bet counter
var totalBet = document.querySelector(".total-bet");

// vars for audio
var cantina = document.getElementById("cantina");
// var jabba = document.getElementById("jabba");
var lightsaber = document.getElementById("lightsaber");
var chewy = document.getElementById("chewy");

var cards = [
  "assets/images/darthvader.jpg",
  "assets/images/bobafett.png",
  "assets/images/darthvader.jpg",
  "assets/images/yoda.jpg",
  "assets/images/darthvader.jpg",
  "assets/images/luke.jpg",
  "assets/images/darthvader.jpg",
  "assets/images/leia.jpg",
  "assets/images/darthvader.jpg",
  "assets/images/hansolo.jpg",
  "assets/images/darthvader.jpg"
  ];

// var cards = [
//   "assets/images/darthvader.jpg"
// ]

// =============================================
//    1. PLACE A BET
// =============================================

/**
 * Adds 1 to bet total
 * @param {Event} event - represents click event that calls on the function
 * @return {Number} - Sum of total bet plus 1
*/

var currentBet;

// Add 1 to the value in span.total-bet
var addOne = function(event) {
  event.preventDefault();

  // CONVERT TEXT IN totalBet PLACEHOLDER TO NUMBER
  var betValue = parseInt(totalBet.textContent);
  // ADD 1 TO THE VALUE, STORE IN betTotal VAR
  totalBet.textContent = betValue + 1;
  // UPDATE totalBet
  var currentBet = parseInt(totalBet.textContent);
  return currentBet;
};
// RUN WHEN BET +1 BUTTON IS PRESSED
plusOne.addEventListener("click", addOne);

// =============================================
//    2. "SPIN" THE REEL
// =============================================

var spin = document.querySelector(".spin");

var spinReel = function(event) {
  event.preventDefault();

  // PLAYS LIGHTSABER ON EFFECT
  function playLightsaber() {
    lightsaber.play();
  }
  playLightsaber();

  spin.classList.add("hidden");

  one.removeAttribute("class", "default");
  two.removeAttribute("class", "default");
  three.removeAttribute("class", "default");

  // ADDS CSS ANIMATION ID TO EACH SLOT
  one.setAttribute("id", "spin-one");
  two.setAttribute("id", "spin-two");
  three.setAttribute("id", "spin-three");

  setTimeout(stopReelOne, 1500);
  setTimeout(stopReelTwo, 2500);
  setTimeout(stopReelThree, 3500);
};
// WHEN PLAYER PUSHES BUTTON TO SPIN
spin.addEventListener("click", spinReel);


// =============================================
//    3. RANDOMLY SELECTS CLASSES FOR SLOTS
// =============================================

var images = [];
var img;

// LOOP THROUGH ARRAY OF DIVS
for (var i=0; i < slots.length; i++) {

  var stopReelOne = function() {

    // RANDOMLY SELECTS A CHARACTER FROM ARRAY
    var randomSelect = function() {
      return cards[Math.floor(Math.random() * cards.length)];
    };
    var selected = randomSelect();

    var img = document.createElement("IMG");
    img.setAttribute("src", selected);
    img.setAttribute("class", "remove-this-1");
    slots[0].appendChild(img);
    var imgSrc = img.src;
    images.push(imgSrc);
    return img.classList;
  };

  var stopReelTwo = function() {

    var randomSelect = function() {
      return cards[Math.floor(Math.random() * cards.length)];
    };
    var selected = randomSelect();

    var img = document.createElement("IMG");
    img.setAttribute("src", selected);
    img.setAttribute("class", "remove-this-2");
    slots[1].appendChild(img);
    var imgSrc = img.src;
    images.push(imgSrc);
    return img.classList;
  };

  var stopReelThree = function() {

    var randomSelect = function() {
      return cards[Math.floor(Math.random() * cards.length)];
    };
    var selected = randomSelect();

    var img = document.createElement("IMG");
    img.setAttribute("src", selected);
    img.setAttribute("class", "remove-this-3");
    slots[2].appendChild(img);
    var imgSrc = img.src;
    images.push(imgSrc);

    playAgain.classList.remove("hidden");
    reset.classList.remove("hidden");


    // console.log(images);

// // =============================================
// //    4. COMPARING THE SLOTS
// // =============================================

    for (var j = 0; j < images.length; j++) {

      var compareSlots = function() {
        // IF ALL 3 MATCH ==> ** WIN **
        if (images[0]===images[1] && images[0]===images[2] && images[1]===images[2]) {
          console.log("winner!");

          setTimeout(function() {
            revealQuoteWin();
          }, 1000);

          var revealQuoteWin = function() {
            quote.textContent = '"The Force is strong with this one."';

            var flashBackground = function() {
              container.setAttribute("class", "win");
            };
            flashBackground();

            function playCantina() {
              cantina.play();
            }
            playCantina();

          };

          setTimeout(addScore, 1000);
          return;

        } else {
        // ELSE ==> YOU LOSE
          console.log("you lose :(");
          setTimeout(function() {
            revealQuoteLose();
          }, 1000);

          var revealQuoteLose = function() {
            quote.textContent = '"The fear of loss is a path to the Dark Side."';

            // // PLAYS JABBA LAUGH
            // function playJabba() {
            //   jabba.play();
            // }
            // playJabba();

            // PLAYS CHEWY ROAR
            function playChewy() {
              chewy.play();
            }
            playChewy();
          };
        }
          setTimeout(minusScore, 1000);
        };
        compareSlots();
        return;
    }
  // compareSlots();
  return img.classList;
  };
}


// =============================================
//    5. TOTAL SCORE
// =============================================

// GRAB THE TOTAL-BET SPAN ELEMENT
var betSpan = document.querySelector("span.total-bet");

// GRAB THE TOTAL-SCORE SPAN ELEMENT
var scoreSpan = document.querySelector("span.total-score");

var addScore = function() {
  // CONVERT THAT SPAN ELEMENT TEXT ==> INTEGER
  var betInt = parseInt(betSpan.textContent);

  // CONVERT THAT SCORE SPAN ELEMENT TEXT ==> INTEGER
  var scoreInt = parseInt(scoreSpan.textContent);

  // IF ROUND === **WIN**
  // SCORE FOR THE ROUND = 100 PTS
  var roundScore = 100;

  // MULTIPLY THE ROUND SCORE BY THE BET TOTAL
  var totalRoundScore = betInt * roundScore;

  // CONVERT TOTAL ROUND SCORE ==> INTEGER
  var totalRoundScoreInt = parseInt(totalRoundScore);

  // ADD THAT TO THE CURRENT TOTAL SCORE
  scoreSpan.textContent = scoreInt + totalRoundScoreInt;
};

var minusScore = function() {

  // CONVERT THAT SPAN ELEMENT TEXT ==> INTEGER
  var betInt = parseInt(betSpan.textContent);

  // CONVERT THAT SCORE SPAN ELEMENT TEXT ==> INTEGER
  var scoreInt = parseInt(scoreSpan.textContent);

  // IF ROUND === **LOSE**
  var roundScore = -100;

  // MULTIPLY THE ROUND SCORE BY THE BET TOTAL
  var totalRoundScore = betInt * roundScore;

  // CONVERT TOTAL ROUND SCORE ==> INTEGER
  var totalRoundScoreInt = parseInt(totalRoundScore);

  // ADD THAT TO THE CURRENT TOTAL SCORE
  scoreSpan.textContent = scoreInt + totalRoundScoreInt;
};

// =============================================
//    6. NEW TURN
// =============================================

// CLICK PLAY AGAIN to:
var newTurn = function(event) {
  event.preventDefault();

  // PLAYS LIGHTSABER ON EFFECT
  function playLightsaber() {
    lightsaber.play();
  }
  playLightsaber();

  playAgain.classList.add("hidden");
  reset.classList.add("hidden");
  spin.classList.remove("hidden");
  container.removeAttribute("class", "win");

  // EMPTIES THE ARRAY
  images = [];

  // RESETS H2 QUOTE
  quote.textContent = '"The Force, it\'s calling to you."';

  // RESETS CLASSES OF SLOT DIVS
  one.classList = "";
  two.classList = "";
  three.classList = "";

  // RESETS DEFAULT IMAGE OF SLOTS
  one.setAttribute("class", "default");
  two.setAttribute("class", "default");
  three.setAttribute("class", "default");

  // REMOVES SLOT ANIMATION ID'S
  one.removeAttribute("id", "spin-one");
  two.removeAttribute("id", "spin-two");
  three.removeAttribute("id", "spin-three");

  // REMOVES DYNAMICALLY CREATED IMG'S IN SLOT DIVS
  function removeImgs() {
    // var div = document.querySelector(".default");
    var img1 = document.querySelector(".remove-this-1");
    var img2 = document.querySelector(".remove-this-2");
    var img3 = document.querySelector(".remove-this-3");
    img1.parentNode.removeChild(img1);
    img2.parentNode.removeChild(img2);
    img3.parentNode.removeChild(img3);
  }
  removeImgs();

  // RESETS BET COUNTER TO 1
  totalBet.textContent = 1;
};
playAgain.addEventListener("click", newTurn);

// =============================================
//    RESET ENTIRE BOARD & START OVER
// =============================================

var resetGame = function(event) {
  location.reload();
};
reset.addEventListener("click", resetGame);

// =============================================
//    TRY BUTTON ** OPTIONAL **
// =============================================

// var removeTry = function() {
//   var quote = document.querySelector("h2");
//   quote.textContent = '"Do or do not, there is no try"';
//   var buttons = document.querySelector(".buttons");
//   buttons.removeChild("tryBtn");
// }
// tryBtn.addEventListener("click", removeTry);
