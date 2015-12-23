var input = require("./chemicals");

var replacements = input.split("|");

var chemical = replacements[replacements.length-1];
replacements.pop();

replacements = replacements.map(function(item){
  return item.split(" => ");
})

console.log(replacements);
console.log(chemical);
var posibilities = replacements.reduce(function(obj, item){

  var exp = new RegExp(item[0],'g');
  var myArray;
  console.log("------------------------");
  while((myArray = exp.exec(chemical))!==null){
    console.log(myArray.index);
    var newString = spliceSlice(chemical, myArray.index,item[0].length,item[1]);
    obj[newString] = true;
  }
  console.log("------------------------");
  return obj;
},{})
console.log(posibilities);

console.log(Object.keys(posibilities).length);
function spliceSlice(str, index, count, add) {
  return str.slice(0, index) + (add || "") + str.slice(index + count);
}
