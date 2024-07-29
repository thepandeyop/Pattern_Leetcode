/**
 * @param {string} digits
 * @return {string[]}
 */
   var letterCombinations = function (digits) {
    let combinations = [];

    // If the input is empty, immediately return an empty
    // answer array
    if (digits.length == 0) {
        return [];
    }

    //  Mapping the digits to their corresponding letters
    let digitsMapping = {
        1: [""],
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };

    // Initiate backtracking with an empty path and
    // starting index of 0

    backtrack(0, [], digits, digitsMapping, combinations);
    return combinations;
};

// Use backtrack function to generate all possible
// combinations
function backtrack(
    index,
    path,
    digits,
    letters,
    combinations
) {
    
    if (path.length === digits.length) {
       
        combinations.push(path.join(""));
        return; // Backtrack
    }
   
    let possibleLetters = letters[digits[index]];

    if (possibleLetters) {
        for (let i = 0; i < possibleLetters.length; i++) {
            let letter = possibleLetters[i];
            path.push(letter);
        
            backtrack( index + 1,path,digits,letters,combinations);
            path.pop();
        }
    }
}
    