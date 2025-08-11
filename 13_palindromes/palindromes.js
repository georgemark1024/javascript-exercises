const palindromes = function (str) {
    arr = str.split("");
    reversedArr = [...arr].reverse();

    punctuation = [",", ".", "!", " "];

    // return arr === reversedArr  ;
    let reverseIndex = 0;
    for(let i = 0; i < arr.length, reverseIndex < reversedArr.length; i++, reverseIndex++) {
        INNERLOOP:
        while (1) {
            if (punctuation.includes(arr.at(i) )) {
                i++;
                continue;
            }
            if (punctuation.includes(reversedArr.at(reverseIndex))) {
                reverseIndex++;
                continue;
            }
            break INNERLOOP;
        }

        if (arr.at(i).toLowerCase() != reversedArr.at(reverseIndex).toLowerCase())
            return false;
    }
    return true;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
