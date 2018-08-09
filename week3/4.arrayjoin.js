
function dataHandling2 (input){
    input.splice(4,1,"Pria","SMA Internasional Metro")

    input[1]="Roman Alamsyah Elsharawy"
    input[2]="Provinsi Bandar Lampung"
    var namabulan;
    var tgl = input[3].split('/')

    switch(parseInt(tgl[1])) {
        case 1:   { namabulan="Januari"; break; }
        case 2:   { namabulan='Februari'; break; }
        case 3:   { namabulan='Maret'; break; }
        case 4:   { namabulan='April'; break; }
        case 5:   { namabulan='Mei'; break; }
        case 6:   { namabulan='Juni'; break; }
        case 7:   { namabulan='Juli'; break; }
        case 8:   { namabulan='Agustus'; break; }
        case 9:   { namabulan='September'; break; }
        case 10:   { namabulan='Oktober'; break; }
        case 11:   { namabulan='November'; break; }
        case 12:   { namabulan='Desember'; break; }
    
      }
    console.log(input) 
    console.log(namabulan)
    console.log([tgl[2],tgl[1],tgl[0]])
    console.log(tgl.join('-'))
    console.log(input[1].slice(0,14))

}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);



/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */