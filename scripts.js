// First project without any tutorial guide 🎊
// Uses the mathjs library from a cdn

const btns = document.querySelectorAll("button");

btns.forEach(button => {
  button.addEventListener("click", () => {
    const output = document.getElementById("calculator-output");
    const value = button.value;


    // I tried using a switch statement, but for some reason you cant use compare a regex expression there

    if (/[0-9]/.test(value)) {
      output.insertAdjacentText("beforeend", value);
    } else if (value === "=") {
      output.innerText = math.evaluate(output.innerText);
    } else if (value === "<<") {
      output.innerText = output.innerText.slice(0, -1);
    } else if (/[\*\+\-x\/]/.test(value)) {
      if (/[\*\+\-x\/]$/.test(output.innerText)) {

      } else { output.insertAdjacentText("beforeend", value); }

    } else if (value === "clear") {
      output.innerText = "";
    }
  })

})