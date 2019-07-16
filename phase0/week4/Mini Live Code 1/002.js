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
  // Display the upper half
  for (let i = width; i > 0; i--) {
    let string = ''
    for (let j = 0; j < width; j++) {
      // 1st condition : j === width - 1
      // 2nd condition :
      if ((i - 1) === j || j === width - 1) {
        string += 'o'
      } else {
        string += ' '
      }
    }
    console.log(string)
  }
  // Display the lower half
  for (let i = 1; i < width; i++) {
    let string = ''
    for (let j = 0; j < width; j++) {
      if (i === j || j === width - 1) {
        string += 'o'
      } else {
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

   o
  oo
 o o
  oo
   o
 */
