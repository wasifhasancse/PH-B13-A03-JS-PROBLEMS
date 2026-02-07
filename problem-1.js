// Discount Price for Eid Sale
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
console.log(newPrice(2000, 15)); // 1700.000

// Test Cases:
// (1500, 20): -> 1200.0;
// (2000, 15): -> 1700.0;
// (1200, 7): -> 1116.0;
// ("1000", 10): -> Invalid;
// (2000, 17.17): -> 1656.6;
// (500, "5"): -> Invalid;