// -------------------------------------------------------------------------------------------
// Event listener for print btn
document.getElementById("print").addEventListener("click", function() {
    // Call the window print method
    window.print();
    // Write message into document
    document.getElementById("output").innerHTML = "Opened printing dialog for window.<br>";
    // Write into document after timer expires
    setTimeout(function() {
        document.getElementById("output").innerHTML = "";
    }, 15000);
});

// --------------------------------------------------------------------------------------------
// Function to get elements offset from top
function getOffsetTop(element) {
    let top = 0;
    // Loop while "element" has a value
    while (element) {
        // Add and assign the offset from top of element to top
        top += element.offsetTop;
        // Set element to its parent property
        element = element.offsetParent;
    }
    // Return value
    return top;
  }

// Function to find user inputed string on page and move to the element in which found
function findOnPage() {
    // Get the value of the search term
    const searchQuery = document.getElementById("find-box").value;
    // If search term is string
    if (searchQuery) {
        // Find string in window
        const isFound = window.find(searchQuery);
        // If string is found
        if (isFound) {
            // Write message into document
            document.getElementById("found?").innerHTML = "Found text"
            // Use the window moveTo method to move to the element containing the found query using getOffTop function
            window.moveTo(0, getOffsetTop(document.querySelector(":focus")) - 100);
        } else {
            // Else write message into document
            document.getElementById("found?").innerHTML = "Couldn't find text"
        }
    }
}
// Event click listener for find btn
document.getElementById("find-btn").addEventListener("click", function() {
    // Call the find function defined above
    findOnPage();
    // Write message into document
    document.getElementById("output-1").innerHTML = "Searched for first instance of query.";
    // Write into document after timer expires
    setTimeout(function() {
        document.getElementById("output-1").innerHTML = "";
    }, 15000);
});

// -----------------------------------------------------------------------------------------------------------
// Event listener for hyperlink click
document.getElementById("nps-link").addEventListener("click", function(event) {
    // Prevent default event to execute below
    event.preventDefault();
    // If user click yes on confirm dialog
    if (confirm("This link leads to an external site. Are you sure you want to continue?")) {
        // Open link in a new tab
        linkOpened = window.open(event.target.href, "_blank");
        // Write message into document when new the new tab is opened
        linkOpened.opener.document.getElementById("has-opened").innerHTML = "The link has opened in a new tab.";
    }
    // Write into document after timer expires
    setTimeout(function() {
        document.getElementById("has-opened").innerHTML = "";
    }, 15000);
});

// ------------------------------------------------------------------------------------------------------------
// Function to display screen size in px
function dispScreenSize() {
    const windowSize = document.getElementById("window-size");
    // Get width and height of window
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    // Write the width and height into document
    windowSize.innerHTML = `Screen size: ${screenWidth}x${screenHeight}.`;
}
// Event listener for when window is resized
window.addEventListener("resize", dispScreenSize);

// ------------------------------------------------------------------------------------------------------------
// Get the language of the window
let language = window.navigator.language;
// Write the given language into document
document.getElementById("lang").innerHTML = `Lang: ${language}`;