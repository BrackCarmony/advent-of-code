var input = require('./start.js');

reindeer = input.split("|").map(function(item){
  var matchAry = item.match(/(.*) can fly (.*) km\/s for (.*) seconds, but then must rest for (.*) seconds./);
  console.log(matchAry);
  return {
    name:matchAry[1],
    speed:matchAry[2],
    flyDuration:matchAry[3],
    restDuration:matchAry[4],
    position:0,
    runTime:matchAry[3],
    restTime:0,
    points:0
  }
});


for (var i=0;i<2503;i++){
  reindeer.forEach(function(item){
    if (item.runTime>0){
      item.runTime--;
      item.position+=item.speed*1;
      item.restTime = item.restDuration;
    } else{
      item.restTime--;
      if (item.restTime == 0){
        item.runTime = item.flyDuration;
      }
    }
  })
  var maxPos = reindeer.reduce(function(prev, cur){
    if (cur.position>prev){
      return cur.position;
    }
    return prev;
  },0);
  reindeer.forEach(function(item){
    if (item.position == maxPos){
      item.points++;
    }
  })
}

console.log(reindeer);
