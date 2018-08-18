function countProfit(shoppers) {
  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  // you can only write your code here!
  var obj = [];
  if (shoppers.length > 0) {
    for (let i = 0; i < listBarang.length; i++) {
      obj[i] = {
        product: listBarang[i][0],
        shoppers: [],
        leftOver: listBarang[i][2],
        totalProfit: 0
      }
    }
  }
  for (var i = 0; i < shoppers.length; i++) {
    switch (shoppers[i].product) {
      case listBarang[0][0]:
        if (obj[0].leftOver - shoppers[i].amount >= 0) {
          obj[0].shoppers.push(shoppers[i].name);
          obj[0].leftOver = obj[0].leftOver - shoppers[i].amount;
          obj[0].totalProfit = obj[0].totalProfit + (listBarang[0][1] * shoppers[i].amount);
        }
        break;
      case listBarang[1][0]:
        if (obj[1].leftOver - shoppers[i].amount >= 0) {
          obj[1].shoppers.push(shoppers[i].name);
          obj[1].leftOver = obj[1].leftOver - shoppers[i].amount;
          obj[1].totalProfit = obj[1].totalProfit + (listBarang[1][1] * shoppers[i].amount);
        }
        break;
      case listBarang[2][0]:
        if (obj[2].leftOver - shoppers[i].amount >= 0) {
          obj[2].shoppers.push(shoppers[2].name);
          obj[2].leftOver = obj[2].leftOver - shoppers[i].amount;
          obj[2].totalProfit = obj[2].totalProfit + (listBarang[2][1] * shoppers[i].amount);
        }
        break;
    }
  }
  return obj;

}

// TEST CASES
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 2
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 3
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 8
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 10
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 1
}, {
  name: 'Devi',
  product: 'Baju Zoro',
  amount: 1
}, {
  name: 'Lisa',
  product: 'Baju Zoro',
  amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Naiki',
  amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]