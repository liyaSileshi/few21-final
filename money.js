/*
Challenge 7: Convert value to dollars
The goal is to make a function that converts an
input number to a string in dollar format.
It should include the $, and round to 2 decimal places.
For example: toDollars(23) returns "$23.00"
*/
function toDollars(value) {
    // round to 2 places
    var fixed_value = value.toFixed(2);
    return "$" + fixed_value;
}

/*
Challenge 8: Convert value to dollars unit test
Write a unit test for toDollars.
*/


module.exports.toDollars = toDollars;
