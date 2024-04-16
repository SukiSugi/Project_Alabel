let numberZero = document.getElementById("number_zero");
let numberOne = document.getElementById("number_one");
let numberTwo = document.getElementById("number_two");
let numberThree = document.getElementById("number_three");
let numberFour = document.getElementById("number_four");
let numberFive = document.getElementById("number_five");
let numberSix = document.getElementById("number_six");
let numberSeven = document.getElementById("number_seven");
let numberEight = document.getElementById("number_eight");
let numberNine = document.getElementById("number_nine");

let numberDot = document.getElementById("number_dot");
let numberAC = document.getElementById("number_ac");
let numberAdd = document.getElementById("number_add");
let numberMinus = document.getElementById("number_minus");
let numberMultiply = document.getElementById("number_multiply");
let numberDivision = document.getElementById("number_division");
let numberEquals = document.getElementById("number_equals");

let numberBackspace = document.getElementById("number_backspace");

let inputScreen = document.getElementById("input-screen");
let inputScreenTop = document.getElementById("input-screen-top");
let inputPercent = document.getElementById("number_percent");





numberZero.value = 0;
numberOne.value = 1;
numberTwo.value = 2;
numberThree.value = 3;
numberFour.value = 4;
numberFive.value = 5;
numberSix.value = 6;
numberSeven.value = 7;
numberEight.value = 8;
numberNine.value = 9;

numberDot.value = ".";
numberAC.value = "";
numberAdd.value = " + ";
numberMinus.value = " - ";
numberMultiply.value = " * ";
numberDivision.value = " / ";

inputScreen.value = ""

// inputScreen.value = "";




numberZero.onclick = function(){functionZero()};
numberOne.onclick = function(){functionOne()};
numberTwo.onclick = function(){functionTwo()};
numberThree.onclick = function(){functionThree()};
numberFour.onclick = function(){functionFour()};
numberFive.onclick = function(){functionFive()};
numberSix.onclick = function(){functionSix()};
numberSeven.onclick = function(){functionSeven()};
numberEight.onclick = function(){functionEight()};
numberNine.onclick = function(){functionNine()};

numberDot.onclick = function(){functionDot()};
numberAC.onclick = function(){functionAC()};
numberAdd.onclick = function(){functionAdd()};
numberMinus.onclick = function(){functionMinus()};
numberMultiply.onclick = function(){functionMultiply()};
numberDivision.onclick = function(){functionDivision()};
numberEquals.onclick = function(){functionEquals()};

numberBackspace.onclick = function(){functionBackspace()};

numberEquals.onclick = function(){onclickEqual()};

inputPercent.onclick = function(){functionPercent()};


// function functionZero() {
//   let input = numberZero.value;
//   // if(inputScreen.value != 0){
//   //   inputScreen.value += input;
//   // }
  
// }

// function functionOne(){
//   let input = numberOne.value;
//   inputScreen.value = input;
//   inputScreenTop.value += input;
// }

// function functionTwo(){
//   let input = numberTwo.value;
//   inputScreen.value = input;
//   inputScreenTop.value += input;
// }

function functionZero() {
  let input = numberZero.value;

  if(inputScreen.value != 0) {
    // inputScreen.value = "";
    inputScreen.value += input;
  }
  
}

function functionOne(){
  let input = numberOne.value;
  inputScreen.value += input;

  // if(inputScreen.value != result) {
  //   inputScreen.value = "";
  // }

  
}


function functionTwo(){
  let input = numberTwo.value;
  inputScreen.value += input;
}

function functionThree(){
  let input = numberThree.value;
  inputScreen.value += input;
}

function functionFour(){
  let input = numberFour.value;
  inputScreen.value += input;
}

function functionFive(){
  let input = numberFive.value;
  inputScreen.value += input;
}

function functionSix(){
  let input = numberSix.value;
  inputScreen.value += input;
}

function functionSeven(){
  let input = numberSeven.value;
  inputScreen.value += input;
}

function functionEight(){
  let input = numberEight.value;
  inputScreen.value += input;
}

function functionNine(){
  let input = numberNine.value;
  inputScreen.value += input;
}





function functionDot(){
  let input = numberDot.value;
  if(inputScreen.value != "."){
    inputScreen.value += input;
  }

}

function functionAC(){
  inputScreen.value = "";
  inputScreenTop.value = " ";
  inputScreen.placeholder = "0";
}

function functionAdd(){
  let input = numberAdd.value;
  if(inputScreen.value != "") {
    inputScreenTop.value = inputScreen.value;
    inputScreen.value = "";
    inputScreen.placeholder = inputScreenTop.value;
    inputScreenTop.value += input;
  }
  // if(inputScreenTop.value != ""){
  //   inputScreenTop.value += inputScreen.value;
  //   console.log("Hi");
  // }

  
}

function functionMinus(){
  let input = numberMinus.value;
  if(inputScreen.value != ""){
    inputScreenTop.value = inputScreen.value;
    inputScreen.value = "";
    inputScreen.placeholder = inputScreenTop.value;
    inputScreenTop.value += input;
  }
}

function functionMultiply(){
  let input = numberMultiply.value;
  if(inputScreen.value != "") {
    inputScreenTop.value = inputScreen.value;
    inputScreen.value = "";
    inputScreen.placeholder = inputScreenTop.value;
    inputScreenTop.value += input;
  }
}

function functionDivision(){
  let input = numberDivision.value;
  if(inputScreen.value != "") {
    inputScreenTop.value = inputScreen.value;
    inputScreen.value = "";
    inputScreen.placeholder = inputScreenTop.value;
    inputScreenTop.value += input;
  }
}

function onclickEqual() {
  console.log("Equal Clicked!");
  if(inputScreen.value != "") {
    inputScreenTop.value += inputScreen.value;
    inputScreen.placeholder = eval(inputScreenTop.value);
    inputScreen.value = ""
  }
}

// function functionPercent() {
//   inputScreen.value - inputScreen.value*2;
// }

// function functionEquals(){
//   let result = eval(inputScreen.value);
//   inputScreen.value = result;
// }



// if (inputScreen.value >= 9 && inputScreen.value <= 0) {
//   numberEquals.onclick.value = "1";
// }

// if(inputScreen.value > 9 && inputScreen.value <0)
//   let inputScreen.value = input;




function functionBackspace(){
  inputScreen.value = "";
  inputScreen.placeholder = "0";
}





// B  I  G      B  R  E  A  K







 
 
