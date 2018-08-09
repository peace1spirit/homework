function pasanganTerbesar(num) {
    // you can only write your code here!
    numstr=num.toString();
    angka1=numstr[0]+numstr[1]
    for (var i=1;i<numstr.length;i++){
        angka2=numstr[i]+numstr[i+1]
        if (angka1<angka2)
        {
            angka1=angka2
        }
    }
    return angka1; 
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99