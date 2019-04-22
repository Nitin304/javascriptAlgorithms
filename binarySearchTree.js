function binarySearchTree(numarray, num){
    var mid = Math.floor(numarray.length/2);
    if(numarray[mid]==num){
        return true;
    }
    else if(numarray[mid]>num && numarray.length>1){
        var newArr = numarray.splice(0,mid);
        console.log("new",newArr);
        return binarySearchTree(newArr,num);
    }
    else if(numarray[mid]<num && numarray.length>1){
        var newArr = numarray.splice(mid,numarray.length);
        console.log('csd',newArr)
        return binarySearchTree(newArr,num);
    }
    else return false;
}

console.log(binarySearchTree([2,5,13,45,50,56,78,90],90));