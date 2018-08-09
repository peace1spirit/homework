//SOAL NO 1
var rows1 = 5;
for (i = 0; i < rows1; i++) {
    console.log('*')

}
console.log('\n')
//SOAL NO 2
var rows2 = 5;
var text='';
for (i = 0; i < rows2; i++) {
    for (j = 0; j < rows2; j++) {
        text+=  '*'
    }
    console.log(text)
    text='';    
}
console.log('\n')
//SOAL NO 3
var rows3 = 5;
var text='';
for (i = 0; i < rows3; i++) {
    for (j = 0; j <= i; j++) {
        text+=  '*'
    }
    console.log(text)
    text='';    
}
