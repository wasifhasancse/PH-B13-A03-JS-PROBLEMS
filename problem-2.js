// OTP Validation 
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

console.log(validOtp("ph-10985")); // true
console.log(validOtp("ph-1234")); // false
console.log(validOtp("abc-12345")); // false
console.log(validOtp("ph-10985")); // Invalid
console.log(validOtp(12345678)); // Invalid

// Test Cases:
// "ph-10985"; -> true;
// ("ph-1234"); -> false;
// ("abc-12345"); -> false["ph-10985"]; -> Invalid;
// 12345678; -> Invalid;

