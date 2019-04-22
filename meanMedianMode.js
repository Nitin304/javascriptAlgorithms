function getMeanMedianMode(arr){
    return {
        mean:getMean(arr),
        median:getMedian(arr),
        mode:getMode(arr)
    }
}
function getMean(arr){
    let sum = 0;
    arr.forEach(element => {
        sum +=element;
    });
    return sum/arr.length;
}

function getMedian(arr){
    arr.sort(function(a,b){
        return a-b; 
    })
    if(arr.length%2==0){
        return (arr[arr.length/2 -1] + arr[arr.length/2])/2
    }
    else{
        return arr[Math.floor(arr.length/2)];
    }
}


var maxFrq = 0;
var modes = [];
function getMode(arr){
    var retObj = {};
    arr.forEach(elm=>{
        if(!retObj[elm])retObj[elm]=0;
        retObj[elm]++;
    })
    for(var elm in retObj){
        if(retObj[elm]>maxFrq){
            modes = [elm];
            maxFrq = retObj[elm];
        }
        else if(retObj[elm]==maxFrq){
            modes.push(elm);
        }
    }

    if(modes.length == Object.keys(retObj)){
        modes = [];
    }
    return modes;
}


console.log(getMeanMedianMode([1,2,3,4,6,7,2,1,2]));