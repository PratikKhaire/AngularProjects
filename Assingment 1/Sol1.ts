// 1. Write a typescript program which contains one function
// named as Maximum. That function accepts three parameters and
// it should returns largest value from three input parameters.
// 23
// 89
// 6
//  Output Maximum number is 89

// solution

function Maximum(no1: number, no2: number, no3: number): number {
  if (no1 > no3 && no1 > no2) {
    return no1;
  } else if (no2 > no3 && no2 > no1) {
    return no2;
  } else {
    return no3;
  }
}

const result: number = Maximum(23, 89, 6);
console.log(result);
