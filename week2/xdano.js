function xo(str) {
    var jum_x=0;
    var jum_o=0;
  
    for (i=0; i<str.length;i++){
      if ( str[i].toLowerCase()=='x'){
          jum_x+=jum_x+1;
      }
      else if( str[i].toLowerCase()=='o') {
          jum_o+=jum_o+1;
      }
      else{
          return 'salah input'
      }
          
    }
    if (jum_x==jum_o)
      return true
    else  
      return false


}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true