// Exercise 12 - Converse Minutes
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Converting minutes display
function konversiMenit(menit) {
    let hour;
    let minute;
    let newMinutesDisplay;

    hour = Math.floor(menit/60);
    minute = menit%60;
    newMinutesDisplay = hour + ':' + minute;
    return newMinutesDisplay;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00