// 1. Prompt the user to input two strings and save them in variables
let firstString = prompt("Enter the first string:");
let secondString = prompt("Enter the second string:");

// 2. Concatenate the prompted strings using the "+" operator
let concatenatedString = firstString + secondString;

// 3. Use string methods
let concatenatedLength = concatenatedString.length;
let uppercasedString = concatenatedString.toUpperCase();
let lowercasedString = concatenatedString.toLowerCase();
let substringResult = concatenatedString.substring(0, 5); // Change the indices as needed

// 4. Perform string interpolation using template literals
let interpolationResult = `The concatenated string is: ${concatenatedString}`;

// 5. Implement basic string comparison using comparison operators
let areStringsEqual = firstString === secondString;

// 6. Use the split() method to divide a string into an array of substrings
let splitStringArray = concatenatedString.split(' '); // Split by space

// Output the results using console.log()
console.log("Concatenated String:", concatenatedString);
console.log("Concatenated String Length:", concatenatedLength);
console.log("Uppercased String:", uppercasedString);
console.log("Lowercased String:", lowercasedString);
console.log("Substring Result:", substringResult);
console.log("Interpolation Result:", interpolationResult);
console.log("Are Strings Equal?", areStringsEqual);
console.log("Split String Array:", splitStringArray);
