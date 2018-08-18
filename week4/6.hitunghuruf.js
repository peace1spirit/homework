function hitungHuruf(kata) {
    // you can only write your code here!
    var kata = kata.replace(/,/gi, "");
    var kata2 = kata.split(" ");
    var biggest = 0;
    var i_biggest = 0;
    for (var i = 0; i < kata2.length; i++) {
        var big = 0;
        var temp = [];
        for (let j = 0; j < kata2[i].length - 1; j++) {
            var same = 0;
            if (temp[j] != -1) {
                for (let k = j + 1; k < kata2[i].length; k++) {
                    if (kata2[i][j] == kata2[i][k]) {
                        temp[k] = -1;
                        same += 1;
                    }
                }
                if (same>0)
                    big += 1;
            }
        }
        if (biggest < big) {
            biggest = big;
            i_biggest = i;
        }

    }
    if (biggest==0)
        return -1;
    return kata2[i_biggest];


}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau