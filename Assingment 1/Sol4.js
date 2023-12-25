function chkPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
var inputNumber = 11;
var isPrime = chkPrime(inputNumber);
if (isPrime) {
    console.log(+inputNumber + " is a prime number.");
}
else {
    console.log(+inputNumber + " is not prime number.");
}
