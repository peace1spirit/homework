function meleeRangedGrouping(str) {
    //your code here
    var arr = [];
    var arrRanged = [];
    var arrMelee = [];
    var temp = str.split(",");
    for (let i = 0; i < temp.length; i += 1) {
        var temp2 = temp[i].split("-");

        if (temp2[1] == "Ranged") {
            arrRanged.push(temp2[0]);
        } else {
            arrMelee.push(temp2[0]);
        }
    }
    if (str.length <= 0)
        return arr;

    arr.push(arrRanged);

    arr.push(arrMelee);
    return arr;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []