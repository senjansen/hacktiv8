// Live Coding Week 4 - Question 4
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  ///////////////////
  richestGroupDynamic
  ///////////////////
  Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
  Function ini akan mengembalikkan nilai string.

  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B', 'C'],
      ['A', 'A', 'D', 'D', 'D']
    ]
  [PROCESS]
  Pada array ['A', 'B', 'C'] tidak ada yang unggul.
  Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.
  [OUTPUT]
    [ 'D' ]
  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['Z', 'Z'],
      ['B']
    ]
  [PROCESS]
  Pada array ['Z', 'Z'] Z unggul.
  Pada array ['B'] B unggul.
  [OUTPUT]
    [ 'Z', 'B' ]
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/

function richestGroupDynamic (groups) {
  let result = []
  // First loop to check each array inside multidimensional array
  for (let i = 0; i < groups.length; i++) {
    let totalVotes = []
    let counter = 0
    let name = []
    let mostName = ''
    let mostVotes = 0
    let status = false
    // Sort each array in multidimensional array
    groups[i] = sorting(groups[i])
    // Define the first person in array
    name.push(groups[i][0])
    name.push(1)
    totalVotes.push(name)
    // Check the next persons in array
    for (let j = 1; j < groups[i].length; j++) {
      if (groups[i][j] === groups[i][j - 1]) {
        totalVotes[counter][1] += 1
      } else {
        name = []
        name.push(groups[i][j])
        name.push(1)
        totalVotes.push(name)
        counter++
      }
    }
    // Check the most riches person in the array
    for (let k = 0; k < totalVotes.length; k++) {
      if (totalVotes[k][1] > mostVotes) {
        mostVotes = totalVotes[k][1]
        mostName = totalVotes[k][0]
        status = true
      } else if (totalVotes[k][1] === mostVotes) {
        status = false
      }
    }
    // Add the most riches person in each array to result array
    if (status) {
      result.push(mostName)
    }
  }
  return result
}
// Create function to sort an array input
function sorting (arr) {
  let arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(richestGroupDynamic([
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]))
// [ 'D' ]

console.log(richestGroupDynamic([
  ['A', 'A'],
  ['B']
]))
// [ 'A', 'B' ]

console.log(richestGroupDynamic([
  ['Z', 'Z'],
  ['B', 'X']
]))
// [ 'Z' ]

console.log(richestGroupDynamic([]))
// []
