function makeArray(firstArray, secondArray, maxLength) {
    let arr = [];
    for (let index = 0; index < firstArray.length; index++) {
        if (arr.length === maxLength) {
            break
        }
        arr.push(firstArray[index]);
    }
    for (let index = 0; index < secondArray.length; index++) {
        if (arr.length === maxLength) {
            break
        }
        arr.push(secondArray[index]);
    }
    return arr
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []