// ===== Operators====
let a = 25;
let b = 14;
document.getElementById("add").innerHTML = a + b;

document.getElementById("sub").innerHTML = a - b;

document.getElementById("mul").innerHTML = a * b;

document.getElementById("div").innerHTML = a / b;

// ===conditional=== mini-project===start====


const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");
let age;

myButton.onclick = function () {
  age = myInput.value;
  age = Number(age);
  if (age >= 100) {
    resultElement.textContent = "You are too old to enter this site";
  } else if (age == 0) {
    resultElement.textContent = "You can't enter, you were just born.";
  } else if (age >= 18) {
    resultElement.textContent = "You are old enough to enter this site";
  } else if (age < 0) {
    resultElement.textContent = "You age can't be below 0 ";
  } else {
    resultElement.textContent = "You must be 18+ to enter this site";
  }
};

// ===conditional=== mini-project===end====

// ===For loop===

let num = 7;

for (let i = 1; i <= 10; i++) {
  document.writeln(num, "*", i, "=", num * i, "<br>");
}

// === while===

// ===Do while===
("<br>");
let i = 1;
let main = 5;
do {
  document.writeln(main, "+", i, "=", main + i, "<br>");
  i++;
} while (i <= 20);

// === while===
let v = 1;
while (v <= 50) {
  document.writeln("" + v);
  v++;
}


// ===callback===function===

sum(displayConsol, 20, 30);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsol(result) {
  document.writeln(result);
}
function display(result) {
  document.getElementById("my-roll").textContent = result, '<br>';
}