function reverseArrayInPlace(arr){
    //Do not use a new array
    //Do it using the array that is passed

    for(var i =0;i<arr.length/2;i++){
        var val =arr[i];
        arr[i]= arr[arr.length-1-i];
        arr[arr.length-1-i] = val;
    }
    return arr;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6]));