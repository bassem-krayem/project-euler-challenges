function multiplesOf3Or5(number) {
  let sum = 0;
  let i = 1;

  // Loop from 1 to number - 1 and add numbers divisible by 3 or 5.
  while (i < number) {
    // Check divisibility by 3 or 5.
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i++;
  }

  return sum;
}

console.log("Sum of multiplesOf3Or5(1000):", multiplesOf3Or5(1000));
console.log("Sum of multiplesOf3Or5(10):", multiplesOf3Or5(10));
console.log("Sum of multiplesOf3Or5(20):", multiplesOf3Or5(20));
console.log("Sum of multiplesOf3Or5(30):", multiplesOf3Or5(30));
console.log("Sum of multiplesOf3Or5(40):", multiplesOf3Or5(40));
console.log("Sum of multiplesOf3Or5(50):", multiplesOf3Or5(50));
