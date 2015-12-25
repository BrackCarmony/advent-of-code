var presents = require('./inout');

var total = presents.reduce(function(prev,cur){return prev+cur;},0);
console.log (total);
var part =2;
var piece = (part==2?total/4:total/3);
console.log(piece);

function makePartition(array, size){
  //console.log(size," ",array);
  if (array[0]==size){
    return [[array[0]]];
  }else if(size<0 || array.length ==1){
    return [];
  }else{
      var returnAry = [];
      var withMe = makePartition(array.slice(-(array.length-1)),size-array[0]);
      var withoutMe = makePartition(array.slice(-(array.length-1)),size);
      withMe.forEach(function(item){
        item.push(array[0]);
        returnAry.push(item);
      })
      withoutMe.forEach(function(item){
        returnAry.push(item);
      })
      return returnAry;
  }
  return [];
}

var paritions = makePartition(presents,piece);

function quant(arry){
  return arry.reduce(function(prev, cur){return prev*cur},1);
}

paritions.sort(function(a,b){return quant(a)-quant(b)});
paritions.sort(function(a,b){return a.length-b.length});
// console.log(paritions);
// paritions.forEach(function(item){
//   console.log(quant(item));
// })

console.log(quant(paritions[0]));
for (var i=0;i<10;i++){
  console.log(quant(paritions[i]));
}
