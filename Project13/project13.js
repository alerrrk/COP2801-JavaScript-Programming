// Function to replace valve with new value using replace
function fixAbbv() {
    let mainSub = document.getElementById("main-sub");
    // Replace the text content of element with given parameters
    let writeOutAbbv = mainSub.textContent.replace("GP", "Grand Prix");
    mainSub.innerHTML = writeOutAbbv;
    document.getElementById("main-sub-changes").innerHTML = `Replaced "GP" with "Grand Prix" with replace()`
}

// Function to capitalize the first two words in the paragraph using split and toUpperCase
function fixParagraph() {
    let para1 = document.getElementById("p1");
    // Split each word of paragraph contents into an array
    let first2Words = para1.textContent.split(" ");
    // Uppercase the first and second words in array
    first2Words[0] = first2Words[0].toUpperCase()
    first2Words[1] = first2Words[1].toUpperCase();
    // Join the array back together into paragraph
    para1.innerHTML = first2Words.join(" ");
    document.getElementById("p1-changes").innerHTML = "Capitalized the first two words in p1 using split() and toUpperCase()."
}

// Function to lowercase except first character of starting word using charAt, slice, and toLowerCase
function fixCaps() {
    let signUp = document.getElementById("sign-up");
    // Split each word of paragraph contents into an array
    let signUpWords = signUp.textContent.split(" ");
    // Loop through array and capitalize the first letter of first for the lowercase the rest of the characters
    for (let i = 0; i < signUpWords.length; i++) {
        if (i === 0) {
            signUpWords[i] = signUpWords[i].charAt(0).toUpperCase() + signUpWords[i].slice(1).toLowerCase();
        } else {
            signUpWords[i] = signUpWords[i].toLowerCase();
        }
    }
    // Join the array back together into paragraph
    signUp.textContent = signUpWords.join(" ");
    document.getElementById("sign-up-changes").innerHTML = "Fixed capitalization, keeping first letter capitalized using charAt(), slice(), and toLowerCase()."
}

// Event listner for button click to call all the above function to fix errors
document.getElementById("fix-errors").addEventListener("click", function() {
    fixAbbv();
    fixParagraph();
    fixCaps();
});

// ---------------------------------------------------------------------------
// Function to validate email 
let email = document.getElementById("email");
function valEmail(emailInp) {
    // Give email format
    let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // Condition if email matches or not, display by color
    if (emailInp.match(emailPattern)){
        email.style.borderColor = "green";
        email.style.borderWidth = "thick";
        return true;
    } else {
        email.style.borderColor = "red";
        email.style.borderWidth = "thick";
        return false;
    }
}

// Function to validate phone number
let phone = document.getElementById("phone-number");
function valPhone(phoneNumber) {
    // Give phone number format
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    // Condition if phone number matches or not, display by color
    if (phoneNumber.match(phonePattern)) {
        phone.style.borderColor = "green";
        phone.style.borderWidth = "thick";
        return true;
    } else {
        phone.style.borderColor = "red";
        phone.style.borderWidth = "thick";
        return false;
    }
}

// Event listener for input into form and give a message if input if incorrect
document.getElementById("update-form").addEventListener("input", function() {
    let isEmailValid = valEmail(email.value);
    let isPhoneValid = valPhone(phone.value);
    if (isEmailValid == false || isPhoneValid == false) {
        document.getElementById("form-status").innerHTML = "Please enter valid info."
    } else {
        document.getElementById("form-status").innerHTML = ""
    }
});

// ------------------------------------------------------------------------------------
// Set heading from doc title
let docTitle = document.title;
document.getElementById("doc_heading").innerHTML = docTitle;

// Set todays date to variable
let today = new Date();
//Function to set todays date into the document
function setToday() {
    // Get date numbers for writing into document
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();
    
    // Write the set date into document
    document.getElementById("display-date").innerHTML = `${month}/${day}/${year}`;
}
setToday();

// ------------------------------------------------------------------------------------------------------------
// Get the user's local time and update every second
function setLocalTime() {
    today = new Date();
    let currentTime = today.toLocaleTimeString();
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Write Time into document
    document.getElementById("time").innerHTML = `${currentTime} - ${timeZone}`;
}
// Update function every second
setLocalTime();
setInterval(setLocalTime, 1000);




