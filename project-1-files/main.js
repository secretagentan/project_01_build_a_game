console.log("meow");

// =============================================
//    VARIABLES NEEDED
// =============================================

// vars for each card slot
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");

var spin = document.querySelector(".spin");

// vars for each card class / array item
// var red = document.classList.contains("red");
// var blue = document.classList.contains("blue");
// var yellow = document.classList.contains("yellow");

// ARRAY: Store class colors here
var colors = ["red", "blue", "yellow"];



// =============================================
//    "SPINNING" THE REEL
// =============================================

var handleSpin = function(event) {
// SELECT TH
var emptySlot = document.getElementsByClassName("empty");
// FOR EACH SLOT, LOOP THROUGH ARRAY OF "CARDS"
  for (var i=0; i < emptySlot.length; i++) {
    // RANDOMLY SELECTS A CLASS COLOR
    var selectColor = function() {
    // RETURN THE COLOR VALUE
    return colors[Math.floor(Math.random() * colors.length)];
    }
    // STORE RANDOMLY SELECTED VALUE INTO VARIABLE
    var selected = selectColor();
    console.log(selected);
    // SET THE VARIABLE VALUE AS A CLASS
    emptySlot[i].classList.add(selected);
    console.log(emptySlot[i].classList);
  }
};
// WHEN PLAYER PUSHES BUTTON TO SPIN
  // **EVENT LISTENER ON BUTTON**
spin.addEventListener("click", handleSpin);










// SELECT RANDOM CARD CLASS FROM ARRAY




// APPLY THAT CARD CLASS TO THE SLOT



// DELAY "SPINS" SO THAT SLOT 3 STOPS LAST




// =============================================
//    COMPARING THE SLOTS
// =============================================


// WHEN REELS HAVE STOPPED, COMPARE THE CLASSES
  // IMGS LOADED ??



// IF ALL 3 MATCH (1 == 2 && 1 == 3 && 2 == 3) ==> WIN



// IF ALL 3 ARE DIFFERENT (1 !== 2 && 1 !== 3 && 2 !== 3) ==> WIN



// ELSE ==> YOU LOSE




// NEXT STEPS
  // ADD PLAYER 2
  // ADD POINT COUNTER & BETTING






