//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  // Your code here
  if (
    typeof currentPrice === "number" &&
    typeof discount === "number" &&
    discount >= 0 &&
    discount <= 100
  ) {
    return (currentPrice - (currentPrice * discount) / 100).toFixed(3);
  } else {
    return "Invalid";
  }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  // Your code here
  if (typeof otp === "string") {
    if (otp.length === 8 && otp.startsWith("ph-")) {
      return true;
    }
    return false;
  }
  return "Invalid";
}

//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  //write your code here
  if (Array.isArray(array)) {
    let haCount = 0;
    let naCount = 0;
    for (let vote of array) {
      if (vote === "ha") {
        haCount++;
      } else if (vote === "na") {
        naCount++;
      }
    }
    if (haCount > naCount) {
      return true;
    } else if (haCount === naCount) {
      return "equal";
    } else {
      return false;
    }
  }
  return "Invalid";
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  // Your code here
  if (typeof str === "string" && str.trim() !== "") {
    let words = str.split(" ");
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
