function isPallindrome(string){
   var reverseStr = string.toLowerCase().split('').reverse().join('');
   return string === reverseStr;
}

console.log(isPallindrome('ntini'));