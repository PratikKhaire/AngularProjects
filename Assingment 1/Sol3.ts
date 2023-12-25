function displayFactors(number: number): void {
  console.log("Factors of :" + number);
  var i: number = 0;
  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}

var inputNumber: number = 20;
displayFactors(inputNumber);
