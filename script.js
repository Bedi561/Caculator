let input = document.getElementById("input");
let buttons = document.querySelectorAll("button"); // Select all buttons

buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        let btnValue = e.target.textContent; // Get the button value

        console.log(btnValue); // Log the button value for debugging

        // Perform different actions based on the button text
        if (btnValue === "C") {
            input.innerText = ""; // Clear the input
        } else if (btnValue === "<") {
            input.innerText = input.innerText.slice(0, -1); // Backspace functionality
        } else if (btnValue === "=") {
            try {
                input.innerText = eval(input.innerText); // Evaluate the expression
            } catch {
                input.innerText = "Error"; // Handle invalid expressions
            }
        } else {
            input.innerText += btnValue; // Append button value to the input
        }

        // Ensure the input stays scrolled to the right for long inputs
        input.scrollLeft = input.scrollWidth;
    });
});


/*  
eval("2")
2

let a = eval("4")
typeof a
'number'

let a = "4"
typeof a
'string'


eval sbko number ke format mei convert krdeta hai
*/