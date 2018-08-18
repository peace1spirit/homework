function urutkanAbjad(str) {
  // you can only write your code here!
  var temp=str.split('');
  var t;
  for(var i=0; i< temp.length-1; i++){
      
      for (var j=i+1 ; j < temp.length ; j++){
          if(temp[j].charCodeAt(0)<temp[i].charCodeAt(0)){
              t=temp[i];
              temp[i]= temp[j];
              temp[j]= t;
          }
          
      }
  }
  return temp.join("");

}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'