// Assign basic vars
var storageLeft = 20;
var device = "iPhone XS";
var customer = "Jeff";

// Customer message with previous vars
var storageAlert =`Hello ${customer}, you have less than ${storageLeft}GB left on your ${device}.Please review your files or join a iCloud storage plan if you want continued storage.`;

// Write alert into document  
document.getElementById("notification").innerHTML = storageAlert;

// Additional text
document.write("Thank you for your continued support.\n Apple, Inc.");