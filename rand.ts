/*
The Math.random() function built into JS is not
easy to work with. Your goal is to make function
that takes a min value and a max value and returns
a number in that range.
For example:
random(1, 3) returns 1 or 2 or 3
random(5, 9) returns 5 or 6 or 7 or 8 or 9
*/

function rand(min: number, max:number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(1,3))

module.exports.rand = rand;