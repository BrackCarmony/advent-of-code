var aunts = require("./aunts").split("|");
/*
children: 3
cats: 7
samoyeds: 2
pomeranians: 3
akitas: 0
vizslas: 0
goldfish: 5
trees: 3
cars: 2
perfumes: 1
*/

var criteria = {children: 3, cats: 7, samoyeds: 2, pomeranians: 3, akitas: 0, vizslas: 0, goldfish: 5, trees: 3, cars: 2, perfumes: 1};
var part = 1; // Part of day's problem, 1 or 2. 

aunts = aunts.map(function(item){
  var arry = item.split(/[,:]+/);
  var aunt = {name:arry[0]};
  aunt[arry[1].trim()] = arry[2];
  aunt[arry[3].trim()] = arry[4];
  aunt[arry[5].trim()] = arry[6];
  return aunt;
});

//console.log(aunts);

for(key in criteria){
  auntFilter(key, criteria[key]);
}


function auntFilter(category, amount){
  var filteredAunts = [];
  for (var i=0;i<aunts.length;i++){
    if (aunts[i][category]){

      if(part ===2 && (category ==="trees" || category === "cats")){
        if(aunts[i][category]*1>amount*1){
          console.log("Hmmmm");
          filteredAunts.push(aunts[i]);
        }else{
          console.log("aunt Eliminated");
        }
      }else if(part === 2 && (category ==="pomeranians" || category ==="goldfish")){
        if(aunts[i][category]*1<amount*1){
          console.log("Hmmmm");
          filteredAunts.push(aunts[i]);
        }else{
          console.log("aunt Eliminated");
        }
      }else{
        if(aunts[i][category]==amount){
          console.log("Hmmmm");
          filteredAunts.push(aunts[i]);
        }else{
          console.log("aunt Eliminated");
        }
    }
    }else{
      filteredAunts.push(aunts[i]);
    }
  }
  aunts = filteredAunts;
}

console.log(aunts);
