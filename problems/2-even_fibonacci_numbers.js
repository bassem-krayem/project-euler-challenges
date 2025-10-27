function fiboEvenSum(n) {
  // Running total for even-valued Fibonacci terms
  let sum = 0;

  // Start the sequence with F1 = 1, F2 = 2
  let a = 1;
  let b = 2;

  // Generate Fibonacci numbers until the current term exceeds n
  while (b <= n) {
    // If the current term is even, add it to the sum
    if (b % 2 === 0) sum += b;

    // Advance the sequence: next = a + b
    const next = a + b;
    a = b; // shift previous term
    b = next; // shift current term to next
  }

  // Return the accumulated sum of even terms
  return sum;
}

// tests - print a few example results to verify the function
console.log(
  "Sum of even Fibonacci numbers up to 4000000:",
  fiboEvenSum(4000000)
);
console.log("Sum of even Fibonacci numbers up to 10:", fiboEvenSum(10));
console.log("Sum of even Fibonacci numbers up to 34:", fiboEvenSum(34));
console.log("Sum of even Fibonacci numbers up to 100:", fiboEvenSum(100));
console.log("Sum of even Fibonacci numbers up to 1000:", fiboEvenSum(1000));
console.log("Sum of even Fibonacci numbers up to 5000:", fiboEvenSum(5000));
console.log("Sum of even Fibonacci numbers up to 20000:", fiboEvenSum(20000));
