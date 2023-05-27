let icon = document.querySelector(".openBtn");
let history = document.querySelector(".history");
icon.addEventListener("click", () => {
  history.classList.add("expand");
  document.querySelector(".all").classList.add("blur");
  document.querySelector("#inputNum").classList.add("blur");
});

function closeBtn() {
  history.classList.remove("expand");
  document.querySelector(".all").classList.remove("blur");
  document.querySelector("#inputNum").classList.remove("blur");
}

let buttons = document.querySelectorAll(".button");
for (let index = 0; index < buttons.length; index++) {
  let btn = buttons[index];
  btn.addEventListener("click", () => {
    
    btn.style.backgroundColor = "#ff2e63";
    btn.style.transform = "scale(1.1)"
    setTimeout(() => {
      btn.style.backgroundColor = "#b0daff";
      btn.style.transform = "scale(1)"
    }, 200);
    let myInput = document.querySelector("#inputNum");
    if (btn.value == "BS") {
      backspace(myInput);
    } else if (btn.value == "C") {
      erase(myInput);
    } else if (btn.value == "=") {
      calculateResult(myInput);
    } else {
      append(myInput, btn);
    }
  });
}

function append(input, btn) {
  input.innerHTML += btn.value;
}
function erase(input) {
  input.innerHTML = "";
  console.clear();
}

function backspace(input) {
  let val = input.innerHTML;
  input.innerHTML = val.substring(0, val.length - 1);
}

function calculateResult(myInput) {
  let result = eval(myInput.innerHTML);
  if (result == undefined) {
    alert("Perform operations");
  } else {
    result = result.toFixed(2);
    addToHistory(myInput.innerHTML, result);
    myInput.innerHTML = result;
  }
}

function addToHistory(expression, result) {
  history.innerHTML +=
    "<p class='myText'>" +
    formatExpression(expression) +
    " = " +
    result +
    "</p>";
}

function formatExpression(expression) {
  let formattedExpression = "";
  for (let index = 0; index < expression.length; index++) {
    if (
      expression[index] == "+" ||
      expression[index] == "-" ||
      expression[index] == "*" ||
      expression[index] == "/"
    ) {
      formattedExpression = formattedExpression + " " + expression[index] + " ";
    } else {
      formattedExpression += expression[index];
    }
  }
  return formattedExpression;
}