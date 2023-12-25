function Maximum(numbers: number[]): number {
    
    var  maxNumber: number = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    return maxNumber;
}

var  numbers: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
var  result: number = Maximum(numbers);


 console.log("The maximum number is:", result);
