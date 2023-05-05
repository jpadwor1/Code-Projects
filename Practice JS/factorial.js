//Factorial Challenge
// Create a function that takes a number parameter and returns the factorial of it.

// Factorial has a very specific definition. Learn more here. As an overview though, a factorial is the result of multiplying a sequence of descending numbers down to 0. Factorials are only defined for non-negative integer numbers. This definition includes zero. Though 0! is equal to 1, so treat it as an edge case.


//Create the function
function factorial (input){ //It should take an integer as an input.
    let result = 1;
    if (input === 0) {
        return 1; //If input == 0 then it should be 1. 0! = 1
    } else { //We should loop down until the input is 0.
        for (let i = input; i > 0; i--){
            result *= i;
        }
    }
    return result;
}

factorial(4); //24 (4 * 3 * 2 * 1)