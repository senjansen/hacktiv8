// Live Coding Week 3 - Question 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
  ////////////
  Tiket Konser
  ////////////

  Buatlah suatu algoritma untuk pembelian tiket konser.

  [INSTRUCTIONS]
    1. Peserta konser akan membeli berdasarkan uang yang dia miliki, dan asumsi
       akan memilih harga yang paling mahal.
    2. Apabila peserta konser memiliki uang yang lebih rendah dari tiket konser,
       maka dia akan pulang ke rumah.
    3. Harga jenis kursi konser, antara lain:
      - VVIP 1000000
      - VIP  700000
      - Reguler 300000
    4. Apabila membeli tiket, tampilkan dalam format [nama]-[jenis kursi] dan [kembalian]

  [RULES]
    1. Hanya tulis Algoritma saja
*/

/*
================================================================

Algorithm:
----------
1. Set the name of the ticket buyer in 'name'.
2. Store value of 'cash' according to the user's money.
3. Set value of 'VVIP' seat class as 1000000, 'VIP' seat class as 700000 and 'Reguler' seat class as 300000.
4. Check if 'cash' is equal or more than 'VVIP'. If true, buy 'VVIP' seat class.
5. If not, check again if 'cash' is equal or more than 'VIP' value. If true, buy 'VIP' seat class.
6. If not, check again if 'cash' is equal or more than 'Reguler' value. If true, buy 'Reguler' seat class.
7. If user do not have enough 'cash' to buy ticket, display 'user will go home'.
8. If user buy a ticket, subtract the cash with the ticket price.
9. Store the subtraction value to 'moneyChange'
10. Display the bought 'ticket' in this format [name]-[seatClass]-[moneyChange].

================================================================
*/
