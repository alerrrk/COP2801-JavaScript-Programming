// Create array
let fruits = [
    "yuzu", 
    "orange", 
    "banana", 
    "strawberry", 
    "blueberry", 
    "pineapple", 
    "grape", 
    "watermelon", 
    "apple", 
    "blackberry"
];

// Display array for the first time
displayArray();

// Function to display the array in the table
function displayArray() {
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    for (let i = 0; i < fruits.length; i++) {                                               // Increment over number of array elements
        let row = document.createElement("tr");                                             // Create table row
        let indexCell = document.createElement("td");                                       // Create table data cells for index
        let fruitCell = document.createElement("td");                                       // Create table data cells for elements
        indexCell.textContent = i+1;                                                        // Populate cells with index numbers plus one
        fruitCell.textContent = fruits[i];                                                  // Populate cells with elements per index
        row.appendChild(indexCell);                                                         // Attach cells to rows
        row.appendChild(fruitCell);                                                         // Attach cells to rows
        tableBody.appendChild(row);                                                         // Attach rows to table
    }
}

// Function to add an element to the array
function addToArray() {
    let element = prompt("Enter a fruit to add:");                                          // Prompt user for their input
    if (element !== null || element !== "") {                                               // If input not null or empty
        fruits.push(element);                                                               // "Add" input to array"
        displayArray();                                                                     // Display array again
        document.getElementById("action_performed").innerHTML =`
            Added "${element}" to the array using "push()".
            `;                                                                              // Display message of action performed
    }
}

// Function to update an element in the array
function updateArray() {
    let userIndex = prompt("Enter the index of the fruit to update:");                      // Prompt user for their input
    let element = prompt(`Enter a new name for the fruit at index ${userIndex}:`);          // Prompt user for their input
    if (userIndex !== null || element !== null || userIndex !== "" || element !== "") {     // If input not null or empty
        fruits[userIndex-1] = element;                                                      // Update element to user entered element at user entered index number minus one
        displayArray();                                                                     // Display array again
        document.getElementById("action_performed").innerHTML =`
            Updated index number ${userIndex} to "${element}" using "array[index] = value".
            `;                                                                              // Display message of action performed
    }
}

// Function to remove an element from the array
function removeFromArray() {
    let userIndex = prompt("Enter the userIndex of the fruit to remove:");                  // Prompt user for their input
    if (userIndex !== null || userIndex !== "") {                                           // If input not null or empty
        let removedElement = fruits.splice(userIndex-1, 1)[0];                              // Remove one array element from user entered index number minus one
        displayArray();                                                                     // Display array again
        document.getElementById("action_performed").innerHTML = `
            Removed "${removedElement}" from index number ${userIndex} using splice().
            `;                                                                              // Display message of action performed
    }
}

// Function to sort array alphabetically
function sortArray() {
    fruits.sort();                                                                          // Sort array alphabetically
    displayArray();                                                                         // Display array again
    document.getElementById("action_performed").innerHTML = `
        Sorted array in alphabetical order using "sort()".
        `;                                                                                  // Display message of action performed
}

// Function to reverse array
function reverseArray() {
    fruits.reverse();                                                                       // Reverse order of array
    displayArray();                                                                         // Display array again
    document.getElementById("action_performed").innerHTML = `
        Reversed array order using "reverse()".
        `;                                                                                  // Display message of action performed
}

// Function to remove last value from array
function removeLast() {
    let lastInList = fruits.pop();                                                          // Remove the last element in the array
    displayArray();                                                                         // Display array again
    document.getElementById("action_performed").innerHTML = `
        Removed last fruit in array ("${lastInList}") using "pop()".
        `;                                                                                  // Display message of action performed
}