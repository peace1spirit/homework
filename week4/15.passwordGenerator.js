function changeVocals (str) {
    //code di sini
    var text="";
    for (let i=0 ; i< str.length;i++){
      if (str[i] == 'a' || str[i] == 'e' || str[i] === 'i' || str[i] == 'u' || str[i] === 'o' || str[i] == 'A' || str[i] == 'E' || str[i] === 'I' || str[i] == 'U' || str[i] === 'O') {
        text += String.fromCharCode((str[i].charCodeAt(0)+1));
      }else {
        text += str[i];
      }
    }
    return text;
  }
  
  function reverseWord (str) {
    //code di sini

    return str.split("").reverse().join("");

  }
  
  function setLowerUpperCase (str) {
    //code di sini
    str=str.split("");
    for(var i=0; i<str.length;i++){
      if (str[i]==str[i].toUpperCase()){
        str[i]= str[i].toLowerCase();
      }
      else
        str[i]= str[i].toUpperCase();
    }
    return str.join("");
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.replace(" ","");
  }
  
  function passwordGenerator (name) {
    if (name.length<5)
      return "Minimal karakter yang diinputkan adalah 5 karakter";
    name= changeVocals (name);
    name= reverseWord(name);
    name= setLowerUpperCase(name);
    name= removeSpaces(name);
    //code di sini
    return name;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  