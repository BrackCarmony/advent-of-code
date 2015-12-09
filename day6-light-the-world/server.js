var input = require("./output");

var instruction = input.split("|");
instruction = require('./steven');

var lights = makeBoard(1000);


//console.log(lights);
instruction.forEach(runInstruction);

function makeBoard(n){
    var board = [];
    for (var i=0;i<n;i++){
      board.push(Array.apply(null, Array(n)).map(function () {return 0;}));
    }
    return board;
}

function runInstruction(item,index){
  //console.log(index);
  var instruction;
  switch(item[6]){
    case 'f':
    //console.log('off', item);
      instuction = function(item){return Math.max(0,item-1);};
    break;
    case 'n':
    //item);
      instuction = function(item){return item+1;};
    break;
    default:
    //e', item);
      instuction = function(item){return item+2;};
    break;
  }
  var corners = item.match(/[0-9]*,[0-9]*/g);
  var x1 = corners[0].split(",")[0]*1;
  var y1 = corners[0].split(",")[1]*1;
  var x2 = corners[1].split(",")[0]*1;
  var y2 = corners[1].split(",")[1]*1;
  //console.log(x1,x2,y1,y2);
  var temp;
  if (x1>x2){
    //console.log("swap");
    temp = x2;
    x2=x1;
    x1=temp;
  }
  if (y1>y2){
    //console.log("swap");
    temp = y2;
    y2=y1;
    y1=temp;
  }

  for (var i=x1;i<=x2;i++){
    for( var j=y1;j<=y2;j++){
      lights[i][j] = instuction(lights[i][j]);
    }
  }
}

lightsOn = lights.reduce(function(prev, cur){
  return prev+cur.reduce(function(prev, cur){return prev+cur;},0);
},0);
console.log(lightsOn);
console.log(1000*1000);
