//SOAL no 1
var i=2
console.log('LOOPING PERTAMA')
while (i <= 20){
    console.log(i + '- I love coding')
    i=i+2
}

i=20
console.log('LOOPING KEDUA')
while (i >= 1){
    console.log(i + '- I love coding')
    i=i-2
}

console.log ('\n')
//SOAL no 2
console.log('LOOPING PERTAMA')
for (i = 1; i <=20; i++) { 
    console.log(i + '- I love coding')
}

console.log('LOOPING KEDUA')
for (i = 20; i>=1; i--) { 
    console.log(i + '- I love coding')
}

console.log ('\n')
//SOAL no 3

for (i = 1; i<=100; i++) { 
    if (i % 2 != 0){
        console.log('//Counter sekarang : '+ i +'\n' + 'Ganjil')
    }
        
    else 
        console.log('//Counter sekarang : '+ i +'\n' + 'Genap')
}

for (i = 1; i<=100; i+=2) { 
    if (i % 3 == 0)
        console.log(i + ' Kelipatan 3')

}
for (i = 1; i<=100; i+=5) { 
    if (i % 6 == 0)
        console.log(i + ' Kelipatan 6')

}
for (i = 1; i<=100; i+=9) { 
    if (i % 10 == 0)
        console.log(i + ' Kelipatan 10')

}

