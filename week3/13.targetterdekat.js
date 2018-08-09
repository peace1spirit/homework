function targetTerdekat(arr) {
    // you can only write your code here!
    var index_x=[];
    var index_o;
    
    for (var i=0 ; i< arr.length;i++){
        if (arr[i] == 'x'){
           index_x.push(i);
        } 
        else if (arr[i] == 'o'){
            index_o= i;
        }
    }
    if (index_x.length==0){
        return 0;
    }
    var jarak=[];
    for (var i=0 ; i< index_x.length;i++){
      jarak[i]=Math.abs(index_x[i]-index_o)
    }
    jarak.sort();
    return (jarak[0]);
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2