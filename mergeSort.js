//Takes in a single, unsorted array as parameter.
//Split the array into two halves.
function mergeSort(arr){
    if(arr.length<2)return arr;
    var middleIndex = Math.floor(arr.length/2);
    var firstHalf = arr.slice(0,middleIndex);
    var secondHalf = arr.slice(middleIndex);
    return merge(mergeSort(firstHalf),mergeSort(secondHalf));
}

//takes in two sorted array as parameters.
//merges those two sorted arrays into one sorted array.
//returns one sorted array
function merge(arr1,arr2){
    var result = [];
    while(arr1.length && arr2.length){
        if(arr1[0]<arr2[0])result.push(arr1.shift())
        else result.push(arr2.shift())
    }
    if(arr1.length)result = result.concat(arr1);
    else result = result.concat(arr2);
    return result;
}

console.log(mergeSort([13,5,88,20,12,21,12,17]))