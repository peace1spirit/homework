function cariModus(arr) {
    // you can only write your code here!
    arr.sort(function(value1, value2) { return value1 > value2 });
    var tampung=[];
    tampung[0]=1;
    var temp= arr[0];
    var indextemp=0;
    for (var i=1 ;i< arr.length; i++){
            if (arr[i]==temp){
                    tampung[indextemp]+=1;   
                
            }
            else{
                temp=arr[i];
                indextemp=i;
                tampung[i]=1;
            }

    }
    var terbesar=tampung[0];
    var i_terbesar=0;
    for (var j=1;j<tampung.length;j++){
        if(tampung[j]>terbesar){
            terbesar=tampung[j]
            i_terbesar= j;
        }
    }
    if (terbesar== arr.length || terbesar==1)
        return -1;
    return arr[i_terbesar];

  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1