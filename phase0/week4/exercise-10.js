// Exercise 10 - Change Me!
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to show object literal that has firstName, lastName, gender and age properties
function changeMe (arr) {
  // Object-oriented Programming (OOP)
  let person = {}
  // Get the current year using Date.getFullYear()
  let today = new Date()
  let date = today.getFullYear()

  if (arr.length === 0) {
    console.log('')
  } else {
    for (let counter = 0; counter < arr.length; counter++) {
      console.log((counter + 1) + '.', arr[counter][0], arr[counter][1] + ':')
      person.firstName = arr[counter][0]
      person.lastName = arr[counter][1]
      person.gender = arr[counter][2]
      person.age = date - arr[counter][3]
      if (arr[counter][3] === undefined || arr[counter][3] > date) {
        person.age = 'Invalid Birth Year'
      }
      console.log(person)
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]) // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]) // ""
