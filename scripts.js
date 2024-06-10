
const output = document.getElementsByClassName("calculator-output")

const btns = document.querySelectorAll("button");


/* I used a switch statement for buttons and read the id of the button as it was clicked
 I wasnt sure if I should haves stored each button into a variable or used a switch statement*/
btns.forEach(button => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case typeof button.id === 'number':
      // insert numb into output
      case "<<":
        alert("<<");
        break;
      /////////////
      case "7":
        alert("7");
        break;
      case "8":
        alert("8");
        break;
      case "9":
        alert("9");
        break;
      /////////////
      case "4":
        alert("4");
        break;
      case "5":
        alert("5");
        break;
      case "6":
        alert("6");
        break;
      case "x":
        alert("x");
        break;
      /////////////

    }
  })
})