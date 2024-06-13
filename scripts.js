// First project without any tutorial guide 🎊
// Uses the mathjs library from a cdn

const btns = document.querySelectorAll("button");
const output = document.getElementById("calculator-output");
const value = button.value;

btns.forEach(button => {
  button.addEventListener("click", () => {


    // I tried using a switch statement, but for some reason you cant use compare a regex expression there

    if (/[0-9]/.test(value)) {
      output.insertAdjacentText("beforeend", value);
    } else if (value === "=") {
      output.innerText = math.evaluate(output.innerText);
    } else if (value === "<<") {
      output.innerText = output.innerText.slice(0, -1);
    } else if (/[\*\+\-x\/]/.test(value)) {
      if (/[\*\+\-x\/]$/.test(output.innerText)) {
        // If the last input was a symbol, skip the input and do not allow a 2nd symbol
      } else { output.insertAdjacentText("beforeend", value); }

    } else if (value === "clear") {
      output.innerText = "";
    }
  })

})

