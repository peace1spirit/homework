function changeMe(arr) {
  // you can only write your code here!

  var temp = {};
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i][3] == undefined)
       birth = 'Invalid Birth Year';
    else 
    {
      birth = new Date().getFullYear()-arr[i][3];
    }
    console.log(i+1 +'. ' + arr[i][0] + ' ' + arr[i][1] + ':' );
    temp = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: birth
    };
    console.log(temp);

  }

}

// TEST CASES
changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""