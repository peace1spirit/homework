function fpb(angka1, angka2) {
    // you can only write your code here!
    var smallest= angka1;
    var biggest=angka2;
    if (angka2<angka1){
        smallest=angka2;
        biggest=angka1;
    }
    var fpb=1;
    for(var i=2; i<=smallest; i++){
        if (smallest%i == 0 && biggest%i == 0){
                fpb=i;
        }
    }
    return fpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1