// Exercise 11 - Shopping Time!
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create function to show object literal that has firstName, lastName, gender and age properties
function shoppingTime (memberId, money) {
  // Sale items
  let sale = {
    'Sepatu Stacattu': 1500000,
    'Baju Zoro': 500000,
    'Baju H&N': 250000,
    'Sweater Uniklooh': 175000,
    'Casing Handphone': 50000
  }

  // Define member
  let member = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: 0
  }

  // Find cheapest product from the sale list
  let cheapest = null
  for (let key in sale) {
    if (cheapest === null) {
      cheapest = sale[key]
    }
    if (sale[key] < cheapest) {
      cheapest = sale[key]
    }
  }

  // Check input
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  if (money < cheapest) {
    return 'Mohon maaf, uang tidak cukup'
  }

  // Calculate changeMoney
  member.changeMoney = member.money
  for (let key in sale) {
    if (member.changeMoney >= sale[key]) {
      member.changeMoney -= sale[key]
      member.listPurchased.push(key)
    }
  }
  return member
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000))
// { memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000))
// { memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)) // Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)) // Mohon maaf, uang tidak cukup
console.log(shoppingTime()) /// /Mohon maaf, toko X hanya berlaku untuk member saja
