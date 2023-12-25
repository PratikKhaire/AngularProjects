function chkPrime(number: number): boolean {
  if (number <= 1) {
    return false; 
  }

  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true; 
}


var inputNumber : number  = 11;
var  isPrime : boolean = chkPrime(inputNumber);

if (isPrime) {
  console.log(+inputNumber+" is a prime number.");
} else {
  console.log(+inputNumber + " is not prime number.");
}
