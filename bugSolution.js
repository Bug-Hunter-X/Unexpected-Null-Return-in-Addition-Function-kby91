function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  // Explicitly handle 0 and empty string cases
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // or throw an error
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(0,2)); //2
console.log(foo('', 2)); //NaN