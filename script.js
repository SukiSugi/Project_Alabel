const zero = document.getElementById("number_zero");
const one = document.getElementById("number_one");
const two = document.getElementById("number_two");
const three = document.getElementById("number_three");
const four = document.getElementById("number_four");
const five = document.getElementById("number_five");
const six = document.getElementById("number_six");
const seven = document.getElementById("number_seven");
const eight = document.getElementById("number_eight");
const nine = document.getElementById("number_nine");

const add = document.getElementById("number_add");
const sub = document.getElementById("number_minus");
const mult = document.getElementById("number_multiply");
const div = document.getElementById("number_division");
const sign = document.getElementById("number_sign");
const equal = document.getElementById("number_equals");

const ac = document.getElementById("number_ac");
const bs = document.getElementById("number_backspace");
const dot = document.getElementById("number_dot");

const inputScreen = document.getElementById("input-screen");
const inputScreenTop = document.getElementById("input-screen-top");


zero.onclick = function(){zeroFunction()};
one.onclick = function(){oneFunction()};
two.onclick = function(){twoFunction()};
three.onclick = function(){threeFunction()};
four.onclick = function(){fourFunction()};
five.onclick = function(){fiveFunction()};
six.onclick = function(){sixFunction()};
seven.onclick = function(){sevenFunction()};
eight.onclick = function(){eightFunction()};
nine.onclick = function(){nineFunction()};

add.onclick = function(){addFunction()};
sub.onclick = function(){subFunction()};
mult.onclick = function(){multFunction()};
div.onclick = function(){divFunction()};
sign.onclick = function(){signFunction()};
equal.onclick = function(){equalFunction()};

ac.onclick = function(){acFunction()};
bs.onclick = function(){bsFunction()};
dot.onclick = function(){dotFunction()};


function zeroFunction() {
  console.log("zero(0)");
  zero.value = 0;
  if (inputScreen.value != 0)
  inputScreen.value += zero.value;
  // inputScreen.placeholder = "";
}
function oneFunction() {
  console.log("one(1)");
  one.value = 1;
  inputScreen.value += one.value;
  inputScreen.placeholder = "";
}
function twoFunction() {
  console.log("two(2)");
  two.value = 2;
  inputScreen.value += two.value;
  inputScreen.placeholder = "";
}
function threeFunction() {
  console.log("three(3)");
  three.value = 3;
  inputScreen.value += three.value;
  inputScreen.placeholder = "";
}
function fourFunction() {
  console.log("four(4)");
  four.value = 4;
  inputScreen.value += four.value;
  inputScreen.placeholder = "";
}
function fiveFunction() {
  console.log("five(5)");
  five.value = 5;
  inputScreen.value += five.value;
  inputScreen.placeholder = "";
}
function sixFunction() {
  console.log("six(6)");
  six.value = 6;
  inputScreen.value += six.value;
  inputScreen.placeholder = "";
}
function sevenFunction() {
  console.log("seven(7)");
  seven.value = 7;
  inputScreen.value += seven.value;
  inputScreen.placeholder = "";
}
function eightFunction() {
  console.log("eight(8)");
  eight.value = 8;
  inputScreen.value += eight.value;
  inputScreen.placeholder = "";
}
function nineFunction() {
  console.log("nine(9)");
  nine.value = 9;
  inputScreen.value += nine.value;
  inputScreen.placeholder = "";
}


function addFunction() {
  console.log("addition(+)");
  add.value = " + ";
  if 
  (inputScreen.value == 0 || inputScreen.value == "") {
    console.log("add 1if");
    inputScreenTop.value += inputScreen.placeholder;
    inputScreenTop.value = 
    eval(inputScreenTop.value)
    inputScreenTop.value += add.value;
  }
  if 
  (inputScreen.placeholder != inputScreenTop.value.substring(0, (inputScreenTop.value.length-3))) {
    console.log("add 2if")
    inputScreenTop.value += inputScreen.value;
    inputScreenTop.value = eval(inputScreenTop.value);
    inputScreenTop.value += add.value;
    inputScreen.placeholder = inputScreen.value;
    inputScreen.value = "";
  }
  else {
    console.log("add else")
    inputScreen.value += add.value;
    inputScreenTop.value += inputScreen.value;
    inputScreen.placeholder = inputScreen.value;
    inputScreen.value = "";
    console.log((inputScreen.placeholder).length);
    inputScreen.placeholder = (inputScreen.placeholder).substring(0, (inputScreen.placeholder).length-3);
  }
}

function subFunction() {
  console.log("subtraction(-)");
  sub.value = " - ";
  if 
  (inputScreen.value == 0 || inputScreen.value == "") {
    console.log("sub 1if");
    inputScreenTop.value += inputScreen.placeholder;
    inputScreenTop.value = 
    eval(inputScreenTop.value)
    inputScreenTop.value += sub.value;
  }
  if 
  (inputScreen.placeholder != inputScreenTop.value.substring(0, (inputScreenTop.value.length-3))) {
    console.log("sub 2if")
    inputScreenTop.value += inputScreen.value;
    inputScreenTop.value = eval(inputScreenTop.value);
    inputScreenTop.value += sub.value;
    inputScreen.placeholder = inputScreen.value;
    inputScreen.value = "";
  }
  else {
    console.log("sub else")
    inputScreen.value += sub.value;
    inputScreenTop.value += inputScreen.value;
    inputScreen.placeholder = inputScreen.value;
    inputScreen.value = "";
    console.log((inputScreen.placeholder).length);
    inputScreen.placeholder = (inputScreen.placeholder).substring(0, (inputScreen.placeholder).length-3);
  }
}
function multFunction(){
  console.log("multiplication(x)");
  mult.value = " * ";
   if 
  (inputScreen.value == 0 || inputScreen.value == "") {
    console.log("mult 1if");
    inputScreenTop.value += inputScreen.placeholder;
    inputScreenTop.value = 
    eval(inputScreenTop.value)
    inputScreenTop.value += mult.value;
  }
  if 
  (inputScreen.placeholder != inputScreenTop.value.substring(0, (inputScreenTop.value.length-3))) {
    console.log("mult 2if")
    inputScreenTop.value += inputScreen.value;
    inputScreenTop.value = eval(inputScreenTop.value);
    inputScreenTop.value += mult.value;
    inputScreen.placeholder = inputScreen.value;
    inputScreen.value = "";
  }
  else {
    console.log("mult else")
    inputScreen.value += mult.value;
    inputScreenTop.value += inputScreen.value;
    inputScreen.placeholder = inputScreen.value;
    inputScreen.value = "";
    console.log((inputScreen.placeholder).length);
    inputScreen.placeholder = (inputScreen.placeholder).substring(0, (inputScreen.placeholder).length-3);
  }
}

function divFunction(){
  console.log("division(/)")
  div.value = " / ";
  if 
  (inputScreen.value == 0 || inputScreen.value == "") {
    console.log("div 1if");
    inputScreenTop.value += inputScreen.placeholder;
    inputScreenTop.value = 
    eval(inputScreenTop.value)
    inputScreenTop.value += div.value;
  }
  if 
  (inputScreen.placeholder != inputScreenTop.value.substring(0, (inputScreenTop.value.length-3))) {
    console.log("div 2if")
    inputScreenTop.value += inputScreen.value;
    inputScreenTop.value = eval(inputScreenTop.value);
    inputScreenTop.value += div.value;
    inputScreen.placeholder = inputScreen.value;
    inputScreen.value = "";
  }
  else {
    console.log("div else")
    inputScreen.value += div.value;
    inputScreenTop.value += inputScreen.value;
    inputScreen.placeholder = inputScreen.value;
    inputScreen.value = "";
    console.log((inputScreen.placeholder).length);
    inputScreen.placeholder = (inputScreen.placeholder).substring(0, (inputScreen.placeholder).length-3);
  }
}

function signFunction(){
  if (inputScreen.value > 1 ) {
    inputScreen.value = eval(inputScreen.value - inputScreen.value - inputScreen.value);
    inputScreen.placeholder = inputScreen.value;
    console.log("1");
  } 
  else {
    inputScreen.value = Math.sqrt( eval((inputScreen.value)**2)); 
    console.log("2");
  }
}



function equalFunction(){
  console.log("equal(=)");
  inputScreenTop.value += inputScreen.placeholder;
  inputScreenTop.value += inputScreen.value;
  inputScreen.value = "";
  inputScreen.placeholder = eval(inputScreenTop.value);
}


function acFunction(){
  console.log("ac(AC)");
  inputScreen.value = "";
  inputScreen.placeholder = 0;
  inputScreenTop.value = "";
}
function bsFunction(){
  console.log("backspace(BACKSPACE)");
  inputScreen.placeholder = 0;
  inputScreen.value = (inputScreen.value.substring(0, (inputScreen.value.length-1)));
}
function dotFunction(){
  console.log("dot(.)");
  dot.value = ".";
  inputScreen.value += dot.value;
}


