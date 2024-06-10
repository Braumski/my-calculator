import { evaluate } from "mathjs";

let output = document.getElementsByClassName("calculator-output")[0]

const btns = document.querySelectorAll("button");


/* I used a switch statement for buttons and read the id of the button as it was clicked
 I wasnt sure if I should haves stored each button into a variable or used a switch statement*/
btns.forEach(button => {
  button.addEventListener("click", () => {

    if (button.id === "=") {
      output = math.evaluate(output);
    }
    output.insertAdjacentText("beforeend", button.id);

  })
})