var col = 3029;
var row = 2947;
var mult = 252533;
var mod = 33554393;
var start = 20151125;
function iFromRowAndCol(row, col){
  var ind=0;
  for (var i=1;i<=col;i++){
    ind+=i;
  }
  for (var j=0;j<row-1;j++){
    ind+=j+col;
  }
  return ind;
}

var index = iFromRowAndCol(row, col)-1;
var step = start;
for (var i=0;i<index;i++){
  step = (step*mult)%mod;
}
console.log(step);
