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
