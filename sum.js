// let a=4;
// let b=4;
// let sum=a+b;
// console.log(sum);


function factorial(n) {
    // if (n === 0) return 1;  // Base case: factorial of 0 is 1
    let result = 1,i=1;

    for (i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120
