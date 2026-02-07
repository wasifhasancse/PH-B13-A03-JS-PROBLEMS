function analyzeText(str) {
  // Your code here
  if (typeof str === "string" && str.trim() !== "") {
    let words = str.split(" ");
    console.log(words);
    let longwords = words[0];
    let token = 0;
    for (let word of words) {
      token += word.length;
      if (word.length > longwords.length) {
        longwords = word;
      } else if (word.length === longwords.length) {
        continue;
      }
    }
    return {
      longwords,
      token,
    };
  }
  return "Invalid";
}
console.log(analyzeText("I am a little honest person")); // { longwords: "little", token: 22 }
console.log(analyzeText("Hello world")); // { longwords: "Hello", token: 10 }
console.log(analyzeText("Keep coding keep shining")); // { longwords: "shining", token: 21 }
console.log(analyzeText(12345)); // Invalid
console.log(analyzeText("Programming is fun")); // { longwords: "Programming", token: 16 }
console.log(analyzeText("A quick brown fox")); // { longwords: "quick", token: 14 }
console.log(analyzeText("")); // Invalid
console.log(analyzeText("                 ")); // Invalid

// Test Cases:
// "I am a little honest person": -> { longwords: "little", token: 22 }
// "Hello world": -> { longwords: "Hello", token: 10 }
// "Keep coding keep shining": -> { longwords: "shining", token: 21 }
// 12345: -> Invalid
// "Programming is fun": -> { longwords: "Programming", token: 16 }
// "A quick brown fox": -> { longwords: "quick", token: 14 }
// " ": -> Invalid
