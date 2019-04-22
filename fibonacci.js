function fibonacci(pstn){
    if(pstn<3)return 1;
    else return fibonacci(pstn-1)+fibonacci(pstn-2);
}
console.log(fibonacci(10));