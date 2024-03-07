// 1. Prompt the user to input a string of text
let inputText = prompt("Enter a string of text:");

// 2. Count the number of characters, words, and sentences in the input text
let characterCount = inputText.length;
let wordCount = inputText.split(/\s+/).filter(word => word.length > 0).length;
let sentenceCount = inputText.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;

// 3. Identify the most frequent word and display its occurrence count
let words = inputText.split(/\s+/).filter(word => word.length > 0);
let wordFrequency = {};
let mostFrequentWord = '';
let maxFrequency = 0;

words.forEach(word => {
  word = word.toLowerCase();
  wordFrequency[word] = (wordFrequency[word] || 0) + 1;

  if (wordFrequency[word] > maxFrequency) {
    mostFrequentWord = word;
    maxFrequency = wordFrequency[word];
  }
});

// 4. Determine the average word length in the text
let totalWordLength = words.reduce((total, word) => total + word.length, 0);
let averageWordLength = totalWordLength / wordCount;

// 5. Output the analyzed results using console.log()
console.log("Input Text:", inputText);
console.log("Character Count:", characterCount);
console.log("Word Count:", wordCount);
console.log("Sentence Count:", sentenceCount);
console.log("Most Frequent Word:", mostFrequentWord);
console.log("Frequency of Most Frequent Word:", maxFrequency);
console.log("Average Word Length:", averageWordLength.toFixed(2));
