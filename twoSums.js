//Code1: O(n^2) complexity

function twoSum(arr,sum){
    var ret = [];
    for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
            if(arr[i]+arr[j]===sum){
                ret.push([arr[i],arr[j]]);
            }
        }
    }
    return ret;
}

//Code2: O(n) complexity

function twoSum(numArray, sum) {
    var pairs = [];
    var hashTable = [];
   
    for (var i = 0; i < numArray.length; i++) {
      var currNum = numArray[i];
      var counterpart = sum - currNum;
      if (hashTable.indexOf(counterpart) !== -1) {
        pairs.push([ currNum, counterpart ]);
      }
      hashTable.push(currNum);
    }
    
    return pairs;
  }
console.log(twoSum([40,11,19,17,-12],28));