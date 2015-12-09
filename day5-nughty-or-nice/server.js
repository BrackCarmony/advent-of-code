function oldIsNice (str){
  if (str.match(/ab|cd|pq|xy/)){
    return false;
  }
  if(!str.match(/[aeiou].*[aeiou].*[aeiou]/)){
    return false;
  }//*/
  if(!str.match(/(.)\1/)){
    return false;
  }
  console.log(str);
  return true;
}

function isNice(str){
  if (!str.match(/(..).*\1/)){
    //console.log(str, " is nauhgty");
    return false;
  }
  if (!str.match(/(.).\1/)){
    return false;
  }//*/
  console.log(str);
  return true;
}




var input  = require("./input");
//var input = "arasaged";
var arry = input.split(" ");

var total = arry.reduce(function(prev, item){
  if (isNice(item)){
    prev++;
  }
  return prev;
},0);

console.log(total + " of " + arry.length);
