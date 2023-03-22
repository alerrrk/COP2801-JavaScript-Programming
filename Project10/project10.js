// Set repeatedly called document elements to variables
const submitBtn = document.getElementById("submit-btn");
const actionMsg = document.getElementById("action-message");
const contactForm = document.getElementById("contact-form");

// Set inital condition for button
let submitPressed = false;

// Write message on paste event
contactForm.addEventListener("paste", (event) => {
    actionMsg.innerHTML = "Pasted from clipboard.";
});

// Remove previous text on any change
contactForm.addEventListener("change", (event) => {
    actionMsg.innerHTML = "";
});

// Write message and change button color on form submit event
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("action-message").innerHTML = "Form submitted!"
    submitBtn.style.backgroundColor = "green";
    submitPressed = true;
});

// Set color on event mouseenter
submitBtn.addEventListener("mouseenter", () => {
    if (submitPressed != true) {
        submitBtn.style.backgroundColor = "DeepSkyBlue";
        submitBtn.style.color = "white";
    }   
});

// (Re)Set color on event mouseleave
submitBtn.addEventListener("mouseleave", () => {
    if (submitPressed != true) {
            submitBtn.style.backgroundColor = "";
            submitBtn.style.color = "black";
    }
});