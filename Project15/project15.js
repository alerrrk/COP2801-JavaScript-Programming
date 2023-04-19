// Set document element variables
const fname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const zip = document.getElementById("zip");
const range = document.getElementById("range");

// Function to "validate" name
function valName(nameString) {
    // Set name pattern variable
    let namePattern = /^[a-zA-Z\s]*$/;
    // Condition if name matches or not, display by color
    if (nameString === "") {
        fname.style.borderColor = "red";
        fname.style.borderWidth = "thick";
        return false;
    }else if(namePattern.test(nameString)) {
        fname.style.borderColor = "green";
        fname.style.borderWidth = "thick";
        return true;
    }else {
        fname.style.borderColor = "red";
        fname.style.borderWidth = "thick";
        return false;
    }
}

// Function to validate email 
function valEmail(emailAddress) {
    // Set email pattern variable
    let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // Condition if email matches or not, display by color
    if (emailAddress === "") {
        email.style.borderColor = "";
        email.style.borderWidth = "";
        return false;
    } else if (emailPattern.test(emailAddress)){
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

function valPhone(phoneNumber) {
    // Set phone pattern variable
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    // Condition if phone number matches or not, display by color
    if (phoneNumber === "") {
        phone.style.borderColor = "";
        phone.style.borderWidth = "";
        return false;
    } else if (phonePattern.test(phoneNumber)) {
        phone.style.borderColor = "green";
        phone.style.borderWidth = "thick";
        return true;
    } else {
        phone.style.borderColor = "red";
        phone.style.borderWidth = "thick";
        return false;
    }
}

// Function to validate ZIP code
function valZIP(ZIPCode) {
    // Set ZIP pattern variable
    let ZIPPattern = /^(00[5-9]\d{2}|0[1-9]\d{3}|[1-8]\d{4}|9[0-8]\d{3}|999[0-4]\d|999[0-5]0)$/;
    // Condition if ZIP matches or not, display by color
    if (ZIPCode === "") {
        zip.style.borderColor = "";
        zip.style.borderWidth = "";
        return false;
    }else if(ZIPPattern.test(ZIPCode)) {
        zip.style.borderColor = "green";
        zip.style.borderWidth = "thick";
        return true;
    }else {
        zip.style.borderColor = "red";
        zip.style.borderWidth = "thick";
        return false;
    }
}

// Set initial state of variable
let isRangeValid = false;
// Function to validate range selected
function valRange(rangeSelected) {
    // Set range pattern variable
    let rangePattern = /^([1-9]\d{3}|[1-4]\d{4}|50000)$/;
    // Condition if range num matches or not
    if (rangePattern.test(rangeSelected)) {
        return true;
    }else {
        return false;
    }
}

// Event listener for form inputs
document.getElementById("update-form").addEventListener("input", function() {
    // Get values of function returns
    isNameValid = valName(fname.value);
    isEmailValid = valEmail(email.value);
    isPhoneValid = valPhone(phone.value);
    isZIPValid = valZIP(zip.value);
    isRangeValid = valRange(range.value);
    // Condition if inputs are valid, display a message
    if (!isNameValid || !isEmailValid || !isPhoneValid || !isZIPValid || !isRangeValid) {
        document.getElementById("form-status").innerHTML = "Please enter valid info.";
    } else {
        document.getElementById("form-status").innerHTML = "";
    }
    // Diplay the current range value
    let budgetRange = range.value;
    document.getElementById("budget-display").innerHTML = `$${budgetRange}`;
    // Call the progress bar function
    updateProgressBar();
});

// Set progress bar element to variable
const progressBar = document.getElementById("progress-bar");
// Function to update progress bar
function updateProgressBar() {
    // Set function return variables into array
    let count = 0;
    const validationArray = [isNameValid,isEmailValid,isPhoneValid,isZIPValid,isRangeValid]
    // Iterate through array and add to the progress for each true value
    for (let i = 0; i < validationArray.length; i++) {
        const isValidElement = validationArray[i];
        if (isValidElement) {
            count++;
        }
    }
    // Amount to add
    progressBar.value = (count / validationArray.length) * 100;
}

// Event listener to write actions into document
let output = document.getElementById("output");
document.getElementById("see-actions").addEventListener("click", (event) => {
    event.preventDefault();
    output.innerHTML += `Validated name with /^[a-zA-Z\s]*$/.test(), required, placeholder, 
                                type="text".<br><br>`
    output.innerHTML += `Validated email with /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(), required, placeholder, 
                                type="email".<br><br>`
    output.innerHTML += `Validated phone number with /^\d{3}-\d{3}-\d{4}$/.test(), required, placeholder, 
                                type="tel".<br><br>`
    output.innerHTML += `Validated ZIP code with /^(00[5-9]\d{2}|0[1-9]\d{3}|[1-8]\d{4}|9[0-8]\d{3}|999[0-4]\d|999[0-5]0)$/.test(), 
                                required, placeholder, type="text".<br><br>`
    output.innerHTML += `Validated range with /^([1-9]\d{3}|[1-4]\d{4}|50000)$/.test(), required, 
                                type="range".<br><br>`
    output.innerHTML += `Form uses "autocomplete" attribute.<br>`
    output.innerHTML += `Form uses progress element to display completion progress of form.`
})