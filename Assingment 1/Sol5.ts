function fibonacci(limit: number): void {
  var firstTerm: number = 0;
  var secondTerm: number = 1;
  var nextTerm: number = 0;

  console.log("Fibonacci series up to :" + limit);

  while (firstTerm <= limit) {
    console.log(firstTerm);
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }
}

var value: number = 0;
fibonacci(11);
