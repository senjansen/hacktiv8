// Exercise 2 - Accessing Value in Array
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to reverse value in array
function balikString(kata) {
    let arrayLength = kata.length;
    let reverseWord = '';

    for (let counter = 1; counter <= wordLength; counter++) {
        reverseWord += kata[wordLength-counter];
    }
    return reverseWord;
}

// Declare variable array
let words =  

console.log(balikString('hello world!'));

//input "hello world!"
//output "!dlrow olleh"