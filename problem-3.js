//  BCS Final Score Calculator
function finalScore(omr) {
  //write your code here
  if (typeof omr === "object" && omr !== null && !Array.isArray(omr)) {
    let mark = 0;
    let totalQuestions = omr.right + omr.wrong + omr.skip;
    if (totalQuestions === 100) {
      mark = omr.right * 1 - omr.wrong * 0.5;
    } else {
      return "Invalid";
    }
    return Math.round(mark);
  }
  return "Invalid";
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 })); // 56
console.log(finalScore({ right: 80, wrong: 25, skip: 0 })); // Invalid
console.log(finalScore({ right: 50, wrong: 10, skip: 40 })); // 45
console.log(finalScore({ right: 30, wrong: 30, skip: 40 })); // 15
console.log(finalScore("!@#")); // Invalid
console.log(finalScore(["Raj"])); // Invalid
console.log(finalScore([10, 50, 82])); // Invalid

// Test caches:
// { right: 67, wrong: 23, skip: 10 }: -> 56
// { right: 80, wrong: 25, skip: 0 }: -> Invalid
// { right: 50, wrong: 10, skip: 40 }: -> 45
// { right: 30, wrong: 30, skip: 40 }: -> 15
// "!@#": -> Invalid
// ["Raj"]: -> Invalid
// [10, 50, 82]: -> Invalid