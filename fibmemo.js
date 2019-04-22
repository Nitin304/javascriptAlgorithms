//Fionacci memonization
function fibmemo(index,cache){
    cache = cache ||[];
    if(cache[index])return cache[index];
    else{
        if(index<3)return 1;
        else{
            cache[index] = fibmemo(index-1,cache)+fibmemo(index-2,cache);
        }
    }
    return cache[index];
}
console.log(fibmemo(4))