function displayFactors(number) {
    console.log("Factors of :" + number);
    var i = 0;
    for (i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}
var inputNumber = 20;
displayFactors(inputNumber);
