// Exercise 13 - Most Frequent Largest Numbers
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to sort using bubble sort algorithm
function sorting (arrNumber) {
  let arrLength = arrNumber.length

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arrNumber[j] > arrNumber[j + 1]) {
        let temp = arrNumber[j]
        arrNumber[j] = arrNumber[j + 1]
        arrNumber[j + 1] = temp
      }
    }
  }
  return arrNumber
}

// Create function to display the largest number and its frequency
function getTotal (arrNumber) {
  let biggestNum = arrNumber[arrNumber.length - 1]
  let numFrequency = 0

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === biggestNum) {
      numFrequency++
    }
  }
  if (biggestNum) {
    return `angka paling besar adalah ${biggestNum} dan jumlah kemunculan sebanyak ${numFrequency} kali`
  } else {
    return ''
  }
}

function mostFrequentLargestNumbers (arrNumber) {
  var listSort = sorting(arrNumber)
  var countHighest = getTotal(listSort)
  return countHighest
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]))
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
)
// 'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]))
// 'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]))
// ''
