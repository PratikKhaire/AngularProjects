var ChkArmstrong = function (number) {
    var originalNumber = number;
    var result = 0;
    var n = String(number).length;
    while (number > 0) {
        var digit = number % 10;
        result += Math.pow(digit, n);
        number = Math.floor(number / 10);
    }
    return result === originalNumber;
};
// Input number
var inputNumber = 153;
// Call the ChkArmstrong function and print the result
var isArmstrong = ChkArmstrong(inputNumber);
if (isArmstrong) {
    console.log("".concat(inputNumber, " is an Armstrong number."));
}
else {
    console.log("".concat(inputNumber, " is not an Armstrong number."));
}
