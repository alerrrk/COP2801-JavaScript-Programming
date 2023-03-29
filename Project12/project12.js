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
// Event listener for button click to call the today's date function
document.getElementById("todays-date-btn").addEventListener("click", function() {
    today = new Date();
    setToday();
    // Call the RYCD status function
    RCYDstatus();
});

// ----------------------------------------------------------------------------------------------------------
// Function to set a random date
function setRandDate() {
    // "UNIX epoch"
    const start = new Date(1970, 0, 1);
    // Generate random date with math methods
    const randomDate = new Date(start.getTime() + Math.random() * (today.getTime() - start.getTime()));
    // Get random date numbers for writing into document
    const month = randomDate.getMonth() + 1;
    const day = randomDate.getDate();
    const year = randomDate.getFullYear();

    // Write the set date into document
    document.getElementById("display-date").innerHTML = `${month}/${day}/${year}`;
    // Set the global variable to rand. date
    today = randomDate;
}

// Event listener for button click to call random date function
const setRandDateBtn = document.getElementById("rand-date-btn");
setRandDateBtn.addEventListener("click", function() {
    setRandDate();
    // Call the RYCD status function
    RCYDstatus();
});

// ---------------------------------------------------------------------------------

// Event listener for button click to execute function to set date to Respect Your Cat Day 2023
document.getElementById("RYCD-date-btn").addEventListener("click", function() {
    
    // Set March 28, 2023 to new date object
    let march28 = new Date();
    march28.setFullYear(2023);
    march28.setMonth(2);
    march28.setDate(28);

    // Get date numbers for writing into document 
    const month = march28.getMonth() + 1;
    const day = march28.getDate();
    const year = march28.getFullYear();
    
    // Write the set date into document
    document.getElementById("display-date").innerHTML = `${month}/${day}/${year}`;
    // Assign the new date to the global date
    today = march28;
    // Call the RYCD status function
    RCYDstatus();
});

// ------------------------------------------------------------------------------------
// Function to display check if it is RYCD
function RCYDstatus() {

    // Set variables for target date on current year
    const currentYear = today.getFullYear();
    const targetDate = new Date(currentYear, 2, 28);
    
    const catJam = document.getElementById("cat-jam");

    // Conditional statement to check if target month or day in month has passed
    if (today.getMonth() > 2 || (today.getMonth() === 2 && today.getDate() > 28)) {
        // Set year to next
        targetDate.setFullYear(currentYear + 1);
    }
    // How many day until target date in now the next year
    const diffInTime = targetDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

    // Conditional statement to check if the date is March 28
    if (today.getMonth() === 2 && today.getDate() === 28) {
        document.getElementById("RYCD-status").innerHTML = "Today is Respect Your Cat Day!!";
        catJam.src = "catjam.gif";
      } else {
        document.getElementById("RYCD-status").innerHTML = `
            Today is not Respect Your Cat Day. <br>
            There are ${diffInDays} days until the next Respect Your Cat Day.`;
        catJam.src = "";
      }
}
RCYDstatus();

// ----------------------------------------------------------------------------------
// Set variables for the user inputs
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
const response = document.getElementById("response");
const catQuery = document.getElementById("cat-query");

// Function for response user inputs
function catResponse() {
    event.preventDefault();
    // Ensure user inputs are numbers
    let q1Value = Number.parseInt(q1.value);
    let q2Value = Number.parseInt(q2.value);
    let q3Value = Number.parseInt(q3.value);

    // Conditional statement to give feedback based on the user inputed values
    if (((q1Value >= 10)&&(q1Value <= 100)) || ((q2Value >= 4)&&(q2Value <= 30)) || ((q3Value >= 5)&&(q3Value <= 15))) {
        response.innerHTML = "Awesome! You must really love your cat.";
        console.log("Query success.");
    } else if ((q1Value > 100) || (q2Value > 30)) {
        response.innerHTML = "Maybe give your cat a rest.";
    } else if (q3Value > 15) {
        response.innerHTML = "Careful, too many treats will make you cat sick!!";
    } else {
        response.innerHTML = "Hmmm, give your kitty some more love!";
    }
}

// Event listener for user submition
catQuery.addEventListener("submit", catResponse);

// ------------------------------------------------------------------------------------------------------------
// Function to get the user's current UTC time and update every second
function getUTCTime() {
    const currentTime = new Date();
    const hours = currentTime.getUTCHours().toString().padStart(2, '0');
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
    const UTCtime = `${hours}:${minutes}:${seconds}`;
    // Write Time into document
    document.getElementById("UTC-time").innerHTML = `${UTCtime} UTC Time`;
}
// Update function every second
setInterval(getUTCTime, 1000);




