//  Loop for elements with specified class and edit items in the created array
const elementsArray = document.getElementsByClassName("grocery_items");
// Loop through the created array
for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].style.textDecoration = "line-through";
    
}



//Write the document's header from the title in head
let docTitle = document.title;
document.getElementById("doc_head_title").innerHTML = docTitle;

// Write the document's location, this should be local
let theURL = document.URL;
document.getElementById("URL").innerHTML = `
The document location is <i>${theURL}</i>.`;

// Write the document's specified encoding type 
let encodingType = document.inputEncoding;
document.getElementById("encoding").innerHTML =`
The encoding type is <i>${encodingType}</i>.`;



// Function to blur document when not in focus and vice versa
function focusBlur() {
    if (document.hasFocus()) {
        body.style.filter = "none";
    } else {
        body.style.filter = "blur(1.5px)";
    }
}
// Call the blur function initially
focusBlur();
// Event listener for the page focus events and call blur function
window.addEventListener("focus", focusBlur);
window.addEventListener("blur", focusBlur);

// Function to change first element with specified class selector 
function changeFirst() {
    newGrocery = prompt("Change the first item to a new grocery item.");
    document.querySelector("#grocery_item").innerHTML = newGrocery;
}

// Function to find all elements with specified class and edit CSS
function clearStrikethroughs() {
    qForGroceries = document.querySelectorAll(".grocery_items");
    qForGroceries[0].style.textDecoration = "none";
}