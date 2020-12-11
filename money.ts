/*
Challenge 7: Convert value to dollars
The goal is to make a function that converts an 
input number to a string in dollar format. 
It should include the $, and round to 2 decimal places.
For example: toDollars(23) returns "$23.00"
*/

function toDollars(value: number): string {
  // round to 2 places
  const fixed_value = value.toFixed(2)
  return `$${fixed_value}`
}


module.exports.toDollars = toDollars;
