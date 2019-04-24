//In Bubble sort we bubble out the largest element in the array
function bubbleSort(array){
    for(var i=array.length;i>0;i--){
        for(var j=0;j<i;j++){
            if(array[j]>array[j+1]){
                var temp = array[j];
                array[j] =array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([5,3,8,2,1,4]));
console.log(bubbleSort([3,-9,-12,-1,8,4]));