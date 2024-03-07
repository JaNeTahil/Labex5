// 1. Prompt the user to input a string to be encrypted
let inputString = prompt("Enter a string to be encrypted:");

// 2. Define a simple encryption algorithm (Caesar Cipher)
function encryptCaesar(input, shift) {
  let encryptedString = "";

  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);

    if (char.match(/[a-zA-Z]/)) {
      let isUpperCase = char === char.toUpperCase();
      let charCode = char.charCodeAt(0);
      let baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

      // Perform the Caesar Cipher shift
      char = String.fromCharCode(((charCode - baseCharCode + shift) % 26) + baseCharCode);
    }

    encryptedString += char;
  }

  return encryptedString;
}

// 3. Implement the encryption algorithm
let shiftAmount = 3; // You can change this value for a different shift
let encryptedResult = encryptCaesar(inputString, shiftAmount);

// 4. Encrypt the input string and display the result
console.log("Original String:", inputString);
console.log("Encrypted Result:", encryptedResult);

// 5. Allow the user to decrypt the encrypted string
let decryptInput = confirm("Do you want to decrypt the string?");
if (decryptInput) {
  // Implement the reverse process for decryption
  let decryptedResult = encryptCaesar(encryptedResult, -shiftAmount);
  console.log("Decrypted Result:", decryptedResult);
} else {
  console.log("Decryption skipped.");
}
