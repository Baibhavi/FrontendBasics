// Unit Conversion Script

// Part a: Convert 42 inches to feet
let inches = 42;
let feet = inches / 12; // 1 foot = 12 inches
console.log(`42 inches is equal to ${feet.toFixed(2)} feet.`);

// Part b: Convert dimensions of 60ft x 40ft plot into meters
let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048; // 1 foot = 0.3048 meters
let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
console.log(`The dimensions in meters are ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m.`);

// Part c: Calculate area of 25 such plots in acres
let singlePlotAreaFeet = lengthFeet * widthFeet; // Area in square feet
let totalAreaFeet = singlePlotAreaFeet * 25; // Total area for 25 plots
let squareFeetToAcres = 43560; // 1 acre = 43560 square feet
let areaInAcres = totalAreaFeet / squareFeetToAcres;
console.log(`The total area of 25 plots in acres is ${areaInAcres.toFixed(2)} acres.`);
