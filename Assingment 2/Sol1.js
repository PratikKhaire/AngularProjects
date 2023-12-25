function Maximum(numbers) {
    var maxNumber = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
var result = Maximum(numbers);
console.log("The maximum number is:", result);
