function Summation(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
var inputNumbers = [23, 6, 7, 4, 5, 7];
var result = Summation(inputNumbers);
console.log("The summation is:", result);
