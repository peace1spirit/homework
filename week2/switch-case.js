
var hari = 22;
var bulan = 7;
var namabulan='';
var tahun = 2018;

if ( hari >=1 && hari <=31){
    if (bulan >=1 && bulan <=12)
    {
        switch(bulan) {
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
      if (tahun >=1900 && tahun <=2200 ) {
          console.log(hari + ' ' + namabulan +' '+ tahun)
      }else console.log('Data inputan tahun salah , pilih angka (1900-2200)')
      
    }else console.log('Data inputan bulan salah , pilih angka (1-12)')


}
else 
    console.log('Data inputan tanggal salah , pilih angka (1-12)');


