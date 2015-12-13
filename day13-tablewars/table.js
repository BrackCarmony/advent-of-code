var input = require('./input');

var directives = input.split("|");

var sitting = {};
var people = {};
directives.forEach(function(item){
  var arry = item.match(/([a-zA-Z]*) would (....) (.*) happiness units by sitting next to (.*)\./);
  console.log(arry);
  sitting[arry[1]+"-"+arry[4]] = (arry[2]==="gain"?arry[3]*1:-arry[3]*1);
  people[arry[1]]=true;
})

people['Brack']=true; //remove this line for part 1;
people = Object.keys(people);
console.log(people);

console.log(sitting);

var tables = permuteArray(people);



console.log(tables.reduce(function(prev, cur){
  return Math.max(prev, evalTable(cur));
},-10000000));

function evalTable(table){
  var happy = 0;
  for(var i=0;i<table.length-1;i++){
    //console.log(sitting[table[i]+"-"+table[i+1]]);

    happy += sitting[table[i]+"-"+table[i+1]]||0;
    happy += sitting[table[i+1]+"-"+table[i]]||0;
  }
  happy += sitting[table[table.length-1]+"-"+table[0]]||0;
  happy += sitting[table[0]+"-"+table[table.length-1]]||0;
  return happy;
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
