# Unexpected Null Return in JavaScript Addition Function

This repository demonstrates a common JavaScript bug involving unexpected null returns in an addition function. The function `foo` is designed to add two numbers, but it incorrectly returns null if either input is falsy (including 0 and empty strings). This unexpected behavior can lead to errors in applications that rely on this function.

## Bug Description
The `foo` function returns null if either `a` or `b` is null. While this works correctly for null values, it also incorrectly returns null for other falsy values like 0 and "".  This behavior is likely unintended and may lead to unexpected results in your program.

## Solution
The solution involves a more robust check for null values. Instead of relying on loose equality (`===`) with null, we explicitly check for null using strict equality (`===`). This avoids unintentionally treating other falsy values as null.

## How to reproduce
1. Clone this repository.
2. Run the `bug.js` file using Node.js or a browser's developer console.
3. Observe that the function returns null for inputs of 0 and empty string, which may not be the expected behavior.