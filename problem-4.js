function gonoVote(array) {
  //write your code here
  if (Array.isArray(array)) {
    let haCount = 0;
    let naCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "ha") {
        haCount++;
      } else if (array[i] === "na") {
        naCount++;
      }
    }
    if (haCount === naCount) {
      return "equal";
    } else if (haCount > naCount) {
      return true;
    } else {
      return false;
    } 
  } else {
    return "Invalid";
  }
}
console.log(gonoVote(["ha", "na", "ha", "na"])); // equal
console.log(gonoVote(["ha", "na", "na"])); // false
console.log(gonoVote(["ha", "ha", "ha", "na"])); // true
console.log(gonoVote("ha, na")); // Invalid
console.log(gonoVote(12345)); // Invalid  
console.log(gonoVote(["ha", "ha", "ha", 2, 5])); // true
console.log(gonoVote([2, 5])); // true

// Test caches:
// ["ha", "na", "ha", "na"]: -> equal
// ["ha", "na", "na"]: -> false
// ["ha", "ha", "ha", "na"]: -> true
// "ha, na": -> Invalid
// 12345: -> Invalid
