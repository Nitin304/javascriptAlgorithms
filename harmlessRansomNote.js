//This algorithm will check if the first string is presnet in the othe string or not
//Code 1 : Using nested for loops.

function HarmlessRansomNote(notetext, magazineText){
    var noteArray = notetext.toLowerCase().split(' ');
    var magazineArray = magazineText.toLowerCase().split(' ');
    for(var i=0;i<noteArray.length;i++){
        var found = false;
        for(var j=0;j<magazineArray.length;j++){
            if(noteArray[i]===magazineArray[j]){
                found=true;
                magazineArray.splice(j,1);
                break;
            }
        }
        if(!found){
            return false;
        }
    }
    return true;
}

//Code2: using Hash Table: key/value pair
function hashHarmlessRansomNote(notetext,magazineText){
    var noteArr = notetext.split(' ');
    var magazineArr = magazineText.split(' ');

    var magObj = {};

    magazineArr.forEach((word)=>{
        if(!magObj[word])magObj[word]=0;
        magObj[word]++;
    })
    //console.log(magObj);
    var noteIfpossible =true;
    noteArr.forEach((word)=>{
        if(magObj[word]){
            magObj[word]--;
            if(magObj[word]<0){
               noteIfpossible = false;
            }
        }
        else{
            noteIfpossible = false;
        }
    })

    return noteIfpossible;
}



var notetext = "this is a ransom note which is formed from magazine";
var magazineText = "this is a magazine note which is used for making ransom note formed from magazine";

console.log(hashHarmlessRansomNote(notetext,magazineText));