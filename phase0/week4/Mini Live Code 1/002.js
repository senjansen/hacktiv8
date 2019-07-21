/*
=================
StandBackTriangle
=================

Standback Triangle adalah program untuk men-generate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga.

[Example]
jika width = 3 maka :

123 <-- width
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

*/

function standBackTriangle (width) {
  // Do looping (width * 2) -1 --> to make row
  for (let i = 0; i < (width * 2) - 1; i++) {
    // Reset temporary string variable for every loop
    let string = ''
    // Do looping to make column
    for (let j = 0; j < width; j++) {
      // If (width-1-i) === j -> display 'o' from right to left
      // If (i-width+1) === j -> display 'o' from left to right
      // If j === (width - 1) --> j the last index, display 'o'
      if ((width - 1 - i) === j || (i - width + 1) === j || j === (width - 1)) {
        string += 'o'
      } else { // Display ' '
        string += ' '
      }
    }
    console.log(string)
  }
}

standBackTriangle(3)
standBackTriangle(5)

/*
 input:5

     o
    oo
   o o
  o  o
 o   o
  o  o
   o o
    oo
     o

 input:3

   o 02=3 -> width-1-j
  oo 11=3 -> width-1-j = i
 o o 20=3 -> width-1-j = i or i-width+1 = j
  oo 31=3 -> i-width+1 = j
   o 42=3 -> i-width+1 = j
 */

// OLD FUNCTION
// function standBackTriangle (width) {
//   // Display the upper half
//   for (let i = width; i > 0; i--) {
//     let string = ''
//     for (let j = 0; j < width; j++) {
//       // 1st condition : j === width - 1
//       // 2nd condition : j === (i - 1)
//       if (j === (i - 1) || j === width - 1) {
//         string += 'o'
//       } else {
//         string += ' '
//       }
//     }
//     console.log(string)
//   }
//   // Display the lower half
//   for (let i = 1; i < width; i++) {
//     let string = ''
//     for (let j = 0; j < width; j++) {
//       if (i === j || j === width - 1) {
//         string += 'o'
//       } else {
//         string += ' '
//       }
//     }
//     console.log(string)
//   }
// }
