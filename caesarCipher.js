var alphabets = 'abcdefghijklmnopqrstuvwxyz';

function caesarCipher(str,num){
    num = num%26;
    var aphArr = alphabets.split('');
    var strArr = str.toLowerCase().split('');
    var returnArr = '';
    strArr.forEach(e => {
        if(e==' '){
            returnArr+=" ";
        }
        else {
            var val = aphArr.indexOf(e)+num;
            if(val>25){
                val = val - 26;
            }
            else if(val<0){
                val = 26+val;
            }
            returnArr+=aphArr[val];
        }
        
        //console.log(val);
    });
    return returnArr;
}

console.log(caesarCipher('abcd efz',-2));