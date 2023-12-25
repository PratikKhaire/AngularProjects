function fibonacci(limit) {
    var firstTerm = 0;
    var secondTerm = 1;
    var nextTerm = 0;
    console.log("Fibonacci series up to :" + limit);
    while (firstTerm <= limit) {
        console.log(firstTerm);
        nextTerm = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;
    }
}
var value = 0;
fibonacci(11);
