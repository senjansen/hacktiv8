// Exercise 9 - Find The Perpretator (Regex)
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to find the frequency that 'abc' appears in a string using Regex
function cariPelaku (str) {
  return str.match(/abc/g).length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')) // 2
console.log(cariPelaku('abcdabdc')) // 1
console.log(cariPelaku('bcabcac')) // 1
console.log(cariPelaku('abcabcabc')) // 3
console.log(cariPelaku('babcbacabc')) // 2
