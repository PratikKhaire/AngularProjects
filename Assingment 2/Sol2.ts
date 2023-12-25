function Summation(numbers: number[]): number {
    var  sum: number = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
}

var  inputNumbers: number[] = [23, 6, 7, 4, 5, 7];
var  result: number = Summation(inputNumbers);

console.log("The summation is:", result);
