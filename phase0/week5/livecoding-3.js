// Live Coding Week 5 - Question 3
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
===========
lotusRealms
===========
[INSTRUCTIONS]
lotusRealms adalah sebuah fungsi yang menerima parameter berupa array
of objects dan akan mengembalikan info siapa saja yang akan bertahan dari perang.
[EXAMPLE]
INPUT: [
  { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
  { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
  { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]
PROCESS:
  1. Serpent menyerang Samurai sebesar 300 => health Samurai menjadi 200
  2. Samurai menyerang Wolf sebesar 400 => health Wolf menjadi 200
  3. Wolf menyerang Serpent sebesar 300 => health Serpent menjadi 700
  4. Lotus menyerang Wolf sebesar 2000 => health Wolf menjadi -1800 dan Wolf gugur dalam realms
OUTPUT: [
  { clan: 'Serpent', totalHealth: 700 },
  { clan: 'Samurai', totalHealth: 200 },
  { clan: 'Lotus', totalHealth: 3000 }
]
[RULES]
  1. Diasumsikan pemenang akan selalu ada, dan clans tidak pernah kosong.
  2. Dilarang menggunakan built in function .filter(), .map(), .forEach(), dan .reduce()
*/

function lotusRealms (clans) {
  // Create array to accomodate the final result
  let result = []
  // Do looping to process the war for each clan -> totalHealth - totalAttack
  for (let i = 0; i < clans.length; i++) {
    // Do another looping to find each clan target
    for (let j = 0; j < clans.length; j++) {
      // Check the target -> if the target clan is found, reduce its health according to the damage
      if (clans[i].attack === clans[j].clan) {
        // Reduce totalHealth of the targeted clan with the totalAttack from the current clan
        clans[j].totalHealth -= clans[i].totalAttack
      }
    }
  }
  // Do another loop to add the final result of each clan to the result array
  for (let k = 0; k < clans.length; k++) {
    // If the clan is still alive (totalHealth > 0), push the clan's name and clan's final health
    if (clans[k].totalHealth > 0) {
      // Push new object literal with new key-value pair to new array-> { clan: , totalHealth: }
      result.push({ clan: clans[k].clan, totalHealth: clans[k].totalHealth })
    }
  }
  return result
}

console.log(lotusRealms([
  { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
  { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
  { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]))
/*
  [
    { clan: 'Serpent', totalHealth: 700 },
    { clan: 'Samurai', totalHealth: 200 },
    { clan: 'Lotus', totalHealth: 3000 }
  ]
*/

console.log(lotusRealms([
  { clan: 'Wolf', attack: 'Wolf', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]))
/*
  [ { clan: 'Lotus', totalHealth: 3000 } ]
*/
