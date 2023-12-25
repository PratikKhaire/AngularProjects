var ChkArmstrong = (number: number): boolean => {
    var originalNumber: number = number;
    let result: number = 0;
    var n: number = String(number).length;

    while (number > 0) {
        var digit: number = number % 10;
        result += Math.pow(digit, n);
        number = Math.floor(number / 10);
    }

    return result === originalNumber;
};

// Input number
var inputNumber: number = 153;

// Call the ChkArmstrong function and print the result
var isArmstrong: boolean = ChkArmstrong(inputNumber);

if (isArmstrong) {
    console.log(`${inputNumber} is an Armstrong number.`);
} else {
    console.log(`${inputNumber} is not an Armstrong number.`);
}
