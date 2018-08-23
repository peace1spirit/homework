function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    
    const biaya =2000;
    var arr=[];
    for (let i = 0; i < arrPenumpang.length; i++) {
        var obj={};
        obj.penumpang= arrPenumpang[i][0];
        obj.naikDari=arrPenumpang[i][1];
        obj.tujuan=arrPenumpang[i][2];
        //bisa pakai indexOf
        obj.bayar=(rute.indexOf(arrPenumpang[i][2])-rute.indexOf(arrPenumpang[i][1]))* biaya;
       // obj.bayar= Math.abs(arrPenumpang[i][2].charCodeAt(0)-arrPenumpang[i][1].charCodeAt(0))*biaya;
        arr.push(obj);
    }
    return arr;


  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]