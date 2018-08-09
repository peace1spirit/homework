function angkaPalindrome(num) {
    // you can only write your code here!
    if (num >= 0 && num <= 8) {
        return (num + 1); //angkaPalindrome 0-9 
    } else { 
        num += 1;
        for (var i = num;; i++) { //looping angka mulai dari >=10

            angkastr = i.toString();
            len_angka = angkastr.length;
            batas_j = Math.floor(len_angka / 2)

            for (j = 0; j < batas_j; j++) { //looping cek angka Palindrome dengan banding kan angka pertama dan akhir
                if (angkastr[j] != angkastr[len_angka - 1 - j])
                    break;
            }
            if (j == batas_j)
                return (i)


        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001