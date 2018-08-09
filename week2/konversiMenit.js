function konversiMenit(menit) {
    // you can only write your code here!
    text ='';
    text = Math.trunc(menit/60).toString();
    text += ':';
    var sisa =menit % 60
    if (sisa !=0)
    {
        if (sisa <10)
            text += '0' + sisa
        else
        text +=  sisa
    }
    else 
        text += '00' 
      
    return text ;

  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00