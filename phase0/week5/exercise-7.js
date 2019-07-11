// Exercise 7 - Melee Range Grouping
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to group heroes according to their attack class (ranged or melee)
function meleeRangedGrouping (str) {
  let grouping = []
  let rangedHero = []
  let meleeHero = []
  let arrInput = str.split(',')

  // If input string is empty, return empty array
  if (str === '') {
    return grouping
  } else { // Separate each hero according to their class (ranged or melee)
    for (let i = 0; i < arrInput.length; i++) {
      let hero = arrInput[i].split('-')
      if (hero[1] === 'Ranged') {
        rangedHero.push(hero[0])
      } else if (hero[1] === 'Melee') {
        meleeHero.push(hero[0])
      }
    }
    grouping.push(rangedHero, meleeHero)
    return grouping
  }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'))
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'))
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')) // []
