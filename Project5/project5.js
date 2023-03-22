// Assign sum to variable
let ninePlusTen = 9 + 10;
// Assign integer to variable after arithmetic operations
let minusNegative = 9 + 10 - -2;

// Write into document
document.getElementById("vine").innerHTML = `"What's nine plus ten minus negative two?"`;
document.getElementById("19").innerHTML = `"${ninePlusTen}."`

// Compare the value of two variables, in this case comparing numbers. Then assign to a variable
result = !(ninePlusTen == minusNegative); // true
// Write into document
document.getElementById("correct").innerHTML = `"That answer is ${result}..."`

// Compare two booleans
notSame = result && ninePlusTen === 21; // false

// Reassign variable after operation
ninePlusTen += 2;

// Write into document
document.getElementById("verdict").innerHTML = `"...be careful not to make the mistake of thinking 
that double negatives means omitting that part from the operation. 
Nine plus ten does not equal twenty one and is a ${notSame} statement. 
Nine plus ten will only be ${ninePlusTen} after you add two, the same as subtracting a negative two."`



// Total unique; 3 arithmetic, 2 assign, 2 comparison, 2 logical

// Arithmetic operators; +, -, *, /, %, ++, --
// Assignment operators; +=, -=, *=, /= 
// Comparison operators; ==, !=, ===, >=
// Logical operators   ; &&, ||, !
// Order of operations ; PUMA