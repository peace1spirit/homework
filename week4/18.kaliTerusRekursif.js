function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka.toString().length<=1){
        return angka;
    }
    else{
        let temp= angka.toString();
        let temp2=parseInt(temp[0])*kaliTerusRekursif(parseInt(temp.substr(1)));
        return kaliTerusRekursif(temp2);
        // if (temp2.toString().length <=1)           
        //     return temp2;
        // else
        //     return kaliTerusRekursif(temp2);
    }

  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6