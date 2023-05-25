let icon = document.querySelector(".myIcon");
icon.addEventListener("click",()=>{
    let history = document.querySelector(".history");
    history.classList.toggle("expand");
    icon.classList.toggle("come");
    document.querySelector(".all").classList.toggle("blur");
    document.querySelector(".inputNumber").classList.toggle("blur");
})


let buttons = document.querySelectorAll(".button");
for (let index = 0; index < buttons.length; index++) {
  let btn = buttons[index];
  btn.addEventListener("click", () => {
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
  input.value += btn.value;
}
function erase(input) {
  input.value = "";
  console.clear();
}

function backspace(input) {
  let val = input.value;
  input.value = val.substring(0, val.length - 1);
}

function calculateResult(myInput) {
  let result = eval(myInput.value);
  if (result == undefined) {
    alert("Perform operations");
  } else {
    history(myInput.value, result);
    myInput.value = result;
  }
}

function history(expression, result) {
  let calcHistory = document.querySelector(".history");
  calcHistory.innerHTML +=
    "<div class='myText'>" + formatExpression(expression) + " = " + result + "</div>";
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
