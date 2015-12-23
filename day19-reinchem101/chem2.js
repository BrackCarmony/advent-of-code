var input = require("./chemicals");

var replacements = input.split("|");

var goal = replacements[replacements.length-1];
replacements.pop();

replacements = replacements.map(function(item){
  return item.split(" => ");
})

function step(posibilities){
  var newPosibilities={};
  for (chemical in posibilities){
      replacements.forEach(function(item){
      var exp = new RegExp(item[1],'g');
      var myArray;
      while((myArray = exp.exec(chemical))!==null){
        //console.log(myArray.index);
        var newString = spliceSlice(chemical, myArray.index,item[1].length,item[0]);
        newPosibilities[newString] = true;
      }
    });
  }
  return newPosibilities;
}
posibilities = {};
posibilities[goal] = true;
var steps = 0;
do {
  steps++;
  posibilities = step(posibilities);
  posibilities = downScope(posibilities);
  console.log(steps, Object.keys(posibilities).length);
}while (!posibilities['e'])

console.log(steps);
console.log(posibilities);


console.log(Object.keys(posibilities).length);
function spliceSlice(str, index, count, add) {
  return str.slice(0, index) + (add || "") + str.slice(index + count);
}


function downScope(obj){
  var newObj = {};
  var keys = Object.keys(obj);
  if (keys.length<1000){
    return obj;
  }
  for (var i = 0;i<1000;i++){
    newObj[keys[Math.floor(Math.random()*keys.length)]] = true;
  }
  console.log(Object.keys(newObj).length);
  return newObj;
}
