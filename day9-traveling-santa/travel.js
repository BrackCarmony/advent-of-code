
var input = require('./output');


var instructions = input.split("|");

var distances = instructions.map(function(item){
  var temp = item.split("=");
  temp[0]=temp[0].trim();
  return temp;
});

var locations = distances.reduce(function(prev, cur){
  var temp = cur[0].split(" to ");
  //console.log(temp);
  if (prev.indexOf(temp[0].trim())===-1){
    prev.push(temp[0].trim());
  }
  if (prev.indexOf(temp[1].trim())===-1){
    prev.push(temp[1].trim());
  }
  return prev;
},[]);

//console.log(locations.length);


var paths = permuteArray(locations);
//console.log(paths.length);


var shortestPath = paths.reduce(function(prev,cur){
  var pathLength = evalPath(cur);
  prev = (prev<pathLength?pathLength:prev);
  return prev;
},0);

console.log(shortestPath);

function evalPath(path){
  var pathLength =0;
  var legLength = 0;
  for (var i=0;i<path.length-1;i++){
    for (var j=0;j<distances.length;j++){
      //console.log(path[i] + " to " + path[i+1]);
      if (distances[j][0] === path[i] + " to " + path[i+1]||distances[j][0] === path[i+1] + " to " + path[i]){

        legLength = distances[j][1]*1;
        //console.log(legLength);
        break;
      }
    }
    pathLength += legLength*1;
  }
  return pathLength;
}




function permuteArray(arry){
  var permArr = [],
  usedChars = [];

  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }

  return permute(arry);
}
