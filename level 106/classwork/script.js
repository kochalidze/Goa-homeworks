// https://www.codewars.com/kata/5750699bcac40b3ed80001ca/train/python

function matchMyHusband(husband, months) {

    const usefulness = husband.reduce((acc, ability) => acc + ability, 0);
    const needs = 100 * Math.pow((1 - 0.15), months);
    return usefulness >= needs ? "Match!" : "No match!";
}
console.log(matchMyHusband([15, 26, 19], 0));
console.log(matchMyHusband([15, 26, 19], 5));
console.log(matchMyHusband([15, 10, 5], 10));
