function groupAnimals(animals) {
    // you can only write your code here!
    var abjad = [];
    abjad[0] = animals[0][0]
    for (var i = 1; i < animals.length; i++) {//abjad yang ada

        for (var j = 0; j < abjad.length; j++) {
            if (abjad[j] == animals[i][0])
                break;            
        }
        if (j == abjad.length) {
            abjad.push(animals[i][0]);
        }
    }
    abjad.sort();
    var indexabj=[];
    for (var i = 0; i < abjad.length; i++) {
        indexabj[abjad[i]]=i;
    }
    var animals2D=[]; //declare 2D
    for (var i = 0; i < abjad.length; i++) {
        animals2D[i]=[];
    }
     for (var i = 0; i < animals.length; i++) {
         animals2D[indexabj[animals[i][0]]].push(animals[i])
     }
     return animals2D;
}



//   for (let i=0;i<26;i++)
//   console.log(String.fromCharCode(97+i));
//console.log(charCodeAt('a'))
// TEST CASES


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]