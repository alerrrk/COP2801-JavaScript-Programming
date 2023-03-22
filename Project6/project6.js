// Assign messages to variables
const noCup = "<p class='center'>Please place your cup on the tray.</p>";
const refillCup = "<p class='center'>Custom Refillable cup: Please make your selection.</p>";
const firstNonRefill = "<p class='center'>Custom Non-Refillable cup: You have one fill remaining; Please make your selection.</p>";
const secondNonRefill = "<p class='center'>Custom Non-Refillable cup: You have zero fills remaining; Please leave.</p>";
const invalidCup = "<p class='center'>This is an invalid cup; Please leave.</p>";


let cupType = prompt("Enter the type of cup you are using.");                                   // Prompt user input for their cup type

if (cupType == "") {                                                                            // Check if no cup is placed
    document.write(noCup);                                                                          // Write no cup
}
else {                                                                                          // Else
    checkCupType();                                                                                 // call function below
}

// Function to loop through cup checks
function checkCupType() {
    while (typeof cupType === "string") {                                                       // loop statements while there is a cup placed
        if ((cupType === "refillable") || (cupType === "non-refillable")) {                     // Check if cup if valid, else --> line 36
            if (cupType === "refillable") {                                                     // Check if cup is refillable, else --> line 38
                document.write(refillCup);                                                          // Write refillable cup
            }
            else if (cupType === "non-refillable") {                                            // Check if cup is non-refillable, else --> line 34
                let filledYet = prompt(`Has this cup been filled yet? Try: "yes" or "no".`);    // Prompt user input for if their cup has been used
                if ((filledYet === 'No') || (filledYet === 'no')) {                             // Check if answer is no
                    document.write(firstNonRefill);                                                 // Write unused non-refillable
                }
                else if ((filledYet === 'Yes') || (filledYet === 'yes')) {                      // Check if answer is yes
                    document.write(secondNonRefill);                                                // Write used non-refillable
                }
                else {                                                                          // Answer is invalid
                    document.write(`<p class="center">Reload the page and try again.</p>`);         // Write try again
                }
            }
        }
        else {                                                                                  // Cup is invalid
            document.write(invalidCup);                                                             // Write invalid cup
        }
        break;                                                                                  // Break out of loop
    }
}