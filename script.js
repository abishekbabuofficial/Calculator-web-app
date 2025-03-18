const display = document.getElementById('display');

// Function to append input to the display
function todisplay(input) {
    display.value += input;
}

// Function to clear the screen
function clearscreen() {
    display.value = "";
}

// Function to evaluate the expression
function calc() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Listen for "Enter" key press on the entire document
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calc();  // Call calc() when Enter is pressed
    }
});
