// Exercise 15 - Grouping Numbers
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to group numbers in a multidimensional array
function groupAnimals (animals) {
  let groupingArray = []
  let tempArray = []

  // Use sort() method to sort the animals array first
  animals = animals.sort()

  // Grouping animals according to alphabet using forEach() method
  animals.forEach(function (element) {
    let name = element.toUpperCase() // to ignore upper and lower case
    let id = name.charAt(0)
    if (!(tempArray[id] && tempArray[id].length)) {
      tempArray[id] = [] // create new array group if not yet created
    }
    tempArray[id].push(element)
  })

  // Using for-in statement to push the grouped animals to new array
  for (let counter in tempArray) {
    groupingArray.push(tempArray[counter])
  }
  return groupingArray
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']))
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
