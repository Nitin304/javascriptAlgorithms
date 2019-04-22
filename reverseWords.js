//Reverse the complete string
function reverseWords(str){
    return str.split('').reverse().join('');
}

//Reverse a particular word in the string, not the whole string
function reverseWord(str){
    strArr = str.split(' ');
    let ret = [];
    strArr.forEach(word => {
        var wordRev = '';
        word.split('').forEach((char)=>{
            wordRev = char+wordRev;
        })
        ret.push(wordRev);
    });
    return ret.join(' ');
}
console.log(reverseWord('Coding Javascript'));