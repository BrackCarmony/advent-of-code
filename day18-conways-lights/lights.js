var input = require('./initialconfig');

var lights = [];
var part = 2;

function makeInitialGrid(input){
  lights = [];
  input.split("|").forEach(function(item){
    lights.push(item.replace(/#/g,"1").replace(/\./g,"0").split("").map(function(item){
      return item*1;
    }));
  });
  //console.log(lights);
}

function displyGraph(){
  lights.forEach(function(item){
    console.log(item.join(""));
  })
}
function step(){
  lights=lights.map(function(item, i1, arry){
    return item.map(function(item, i2, arry){
      var neighboors = evalNeigh(i1,i2);
      if (item==1){
        if(neighboors==2 || neighboors==3){
          return 1;
        }else{
          return 0;
        }
      }
      if (neighboors == 3){
        return 1;
      }
      return 0;
    })
  })
}

function evalNeigh(i1,i2){
  var neighs = 0;
  if (lights[i1-1]){
    neighs += lights[i1-1][i2-1] || 0;
    neighs += lights[i1-1][i2] || 0;
    neighs += lights[i1-1][i2+1] || 0;
  }
  neighs += lights[i1][i2-1] || 0;
  neighs += lights[i1][i2+1] || 0;
  if(lights[i1+1]){
    neighs += lights[i1+1][i2-1] || 0;
    neighs += lights[i1+1][i2] || 0;
    neighs += lights[i1+1][i2+1] || 0;
  }
  return neighs;
}

makeInitialGrid(input);
for (var i=0;i<100;i++){
  step();
  if (part == 2){
    lights[0][0] =1 ;
    lights[0][99] =1 ;
    lights[99][0] =1 ;
    lights[99][99] =1 ;
  }
  displyGraph();
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
}


function countLights(){
  console.log(lights.reduce(function(prev,cur){
    return prev + cur.reduce(function(prev,cur){
      return prev+cur*1;
    },0)
  },0));
}

countLights();
