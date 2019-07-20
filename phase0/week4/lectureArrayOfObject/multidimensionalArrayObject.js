/*
Multidimensional data
Array
Object
*/

let people = ['data1', 'data2', 'data3']
let person = [
  {
    name: 'antonio',
    age: 25,
    salary: 10000000,
    skills: {
      frontend: {
        language: 'javascript',
        level: 'advance'
      },
      backend: {
        language: 'java',
        level: 'intermediate'
      }
    }
  },
  {
    name: 'celine',
    age: 25,
    salary: 10000000,
    skills: {
      frontend: {
        language: 'javascript',
        level: 'intermediate'
      },
      backend: {
        language: 'java',
        level: 'intermediate'
      }
    }
  },
  {
    name: 'andre',
    age: 28,
    salary: 13000000,
    skills: {
      frontend: {
        language: 'html',
        level: 'advance'
      },
      backend: {
        language: 'java',
        level: 'intermediate'
      }
    }
  },
  {
    name: 'anna',
    age: 35,
    salary: 13000000,
    skills: {
      frontend: {
        language: 'css',
        level: 'advance'
      },
      backend: {
        language: 'php',
        level: 'intermediate'
      }
    }
  }
]

function nextYear (person) {
  // Increase salary for all personel by Rp 1,000,000.00
  for (let i = 0; i < person.length; i++) {
    person[i].salary += 1000000
  }
  return person
}

function getSalaryMoreThan (person, salary) {
  let result = []
  // Check each personel salary that has same or bigger salary than requested
  for (let i = 0; i < person.length; i++) {
    if (person[i].salary >= salary) {
      result.push(person[i])
    }
  }
  return result
}

function hasJavaScriptFrontEnd (person) {
  let result = []
  // Find personel with skills of javascript only
  for (let i = 0; i < person.length; i++) {
    if (person[i].skills !== undefined) {
      if (person[i].skills.frontend !== undefined) {
        if (person[i].skills.frontend.language !== undefined) {
          if (person[i].skills.frontend.language === 'javascript') {
            result.push(person[i])
          }
        }
      }
    }
  }
  return result
}

function changeSkillDataIntoArray (person) {
  let result = []
  for (let i = 0; i < person.length; i++) {
    let personel = person[i]
    personel.skills.frontend = [person[i].skills.frontend]
    personel.skills.backend = [person[i].skills.backend]
    result.push(personel)
  }
  return result
}

// Array
console.log(people[0].toUpperCase())
people[0] = people[0].toUpperCase()
console.log(people)

// Object
console.log(person)
console.log(person[0].name)

// Function next year increase salary
person = nextYear(person)
console.log(person)

// Function find personel with salary above Rp 12,000,000.00
console.log('\n Salary above Rp 12,000,000.00')
console.log(getSalaryMoreThan(person, 12000000))

// Object in object
console.log(person[0])
console.log(JSON.stringify(person, null, 2)) // Change all parameter inside object into string

// Manipulate object
console.log(person[0].skills)

// Function JavaScript Front End
console.log(hasJavaScriptFrontEnd(person))
console.log(JSON.stringify(hasJavaScriptFrontEnd(person), null, 2))

// Function change single skill into array
console.log(JSON.stringify(changeSkillDataIntoArray(person), null, 2))
