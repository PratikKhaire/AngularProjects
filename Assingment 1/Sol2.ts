//  Write a typescript program which contains
// one function named as Area. That function should
//  calculate area of circle. Accept value of radius
//  from user and return its area. Default value of PI
//  should be 3.14 if it is not provided by the caller.
// Input:
// 5

function Area(radius: number, pi: number = 3.14): number {
  //   var result: number = radius * 3.14;

  var ans: number = 0;
  ans = pi * radius * radius;
  return ans;
}

var value: number = 5;

console.log("Area of cricle is ", Area(5));
