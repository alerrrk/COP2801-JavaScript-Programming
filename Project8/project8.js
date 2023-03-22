// Define object constructor with properties and a method
function Computer(CPU, GPU, RAM) {
  this.CPU = CPU;
  this.GPU = GPU;
  this.RAM = RAM;
  this.build = function() {
    return "This PC build has a " + this.CPU + ", " + this.GPU + ", and " + this.RAM + " of memory.";
  };
}

// Create instances of my object
var build1 = new Computer("i9-13900k", "RTX 4090ti", "64GB");
var build2 = new Computer("Ryzen 5 7600", "RTX 3070", "16GB");

// Add property and method to prototype
Computer.prototype.Storage = "SSD";
Computer.prototype.whyIsThisWriting = function() {
  return "Writing function syntax.";
}

// Create function to display properties and method data into document
function outputObjects() {
  var output = "";
  // Loop for properties in first object instance and assign to output
  for (var property in build1) {
    output += `${property} -> ${build1[property]}` + "<br>";
  }
  // Assign first method instance to output
  output += build1.build() +"<br><br>";

  // Loop for properties in second object instance and assign to output
  for (var property in build2) {
    output += `${property} -> ${build2[property]}` + "<br>";
  }
  // Assign second method instance to output 
  output += build2.build() + "<br><br>";

  // Write to document
  document.getElementById("output").innerHTML = output;
}


// Use Navigator object properties
var browser = navigator.appName;
var browserVersion = navigator.appVersion;
var platform = navigator.platform;

// Display Navigator object properties
function windowNavigator() {
  document.getElementById("appName").innerHTML = "Browser: " + browser;
  document.getElementById("appVersion").innerHTML = "Browser Version: " + browserVersion;
  document.getElementById("platform").innerHTML = "Machine OS: " + platform;
}