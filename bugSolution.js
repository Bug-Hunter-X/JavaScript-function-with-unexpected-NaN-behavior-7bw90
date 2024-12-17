function foo(a, b) {
  // Use Number.isNaN to check for NaN values and handle them
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return 0; // Or handle NaN as needed
  } else if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(NaN, 5)); // Output: 0
console.log(foo(5, NaN)); // Output: 0
console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10