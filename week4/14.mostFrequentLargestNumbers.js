function sorting(arrNumber) {
    // code di sini
    // for (let i=0; i< arrNumber.length ; i++){
    //   for
    //   arrNumber[i].
    // }
    arrNumber.sort(function(value1, value2) { return value1 > value2 });
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var temp=  arrNumber[arrNumber.length-1];
    var counter=1;
    for(var i=arrNumber.length-2 ; i>=0 ;i--){
      if (arrNumber[i]== temp){
        counter+=1;
      }
      else 
        break;
    }
    if (arrNumber.length<=0){
      return "";
    }
    return 'angka paling besar adalah '+ temp  +' dan jumlah kemunculan sebanyak '+ counter +' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''