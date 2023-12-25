function SecondLargest(numbers) {
    var _a;
    var largest = numbers[0];
    var secondLargest = numbers[1];
    if (secondLargest > largest) {
        _a = [secondLargest, largest], largest = _a[0], secondLargest = _a[1];
    }
    for (var i = 2; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        }
        else if (numbers[i] > secondLargest) {
            secondLargest = numbers[i];
        }
    }
    return secondLargest;
}
var inputNumbers = [23, 89, 6, 29, 56, 45, 77, 32];
var result = SecondLargest(inputNumbers);
console.log("The second largest number is:", result);
