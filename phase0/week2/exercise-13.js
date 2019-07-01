// Exercise 13 - Logic Challenges X & O
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Compare X counter and O counter
function xo(str) {
    let strLength = str.length;
    let xCounter = 0;
    let oCounter = 0;

    for (let counter = 0; counter < strLength; counter++) {
        if (str[counter] == 'x') {
            xCounter += 1;
        }
        else if (str[counter] == 'o') {
            oCounter += 1;
        } 
    }

    if (xCounter === oCounter) {
        return true;
    }
    else return false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true