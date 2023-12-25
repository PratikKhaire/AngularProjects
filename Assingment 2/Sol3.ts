function SecondLargest(numbers: number[]): number {
    

    var largest: number = numbers[0];
    var secondLargest: number = numbers[1];

    if (secondLargest > largest) {
       
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (var i = 2; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest) {
            secondLargest = numbers[i];
        }
    }

    return secondLargest;
}

const inputNumbers: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
const result: number = SecondLargest(inputNumbers);


    console.log("The second largest number is:", result);

