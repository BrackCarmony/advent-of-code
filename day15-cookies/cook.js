/*Sugar: capacity 3, durability 0, flavor 0, texture -3, calories 2
Sprinkles: capacity -3, durability 3, flavor 0, texture 0, calories 9
Candy: capacity -1, durability 0, flavor 4, texture 0, calories 1
Chocolate: capacity 0, durability 0, flavor -2, texture 2, calories 8*/

var ing =[[3,0,0,-3,2],[-3,3,0,0,9],[-1,0,4,0,1],[0,0,-2,2,8]];
var maxScore = 0;
for (var sugar = 0;sugar<=100;sugar++){
  for (var sprinkles =0;sprinkles + sugar<=100;sprinkles++){
    for (var candy =0;candy + sprinkles + sugar<=100;candy++){
      for (var chocolate =0;chocolate + candy + sprinkles + sugar<=100;chocolate++){
          maxScore = Math.max(maxScore,eval([sugar, sprinkles, candy, chocolate]));
      }
    }
  }
  console.log(maxScore);
}

function eval(ingArry){
    finalArry = [0,0,0,0,0];
    for (var i=0;i<ing.length;i++){
      finalArry = addArrays(finalArry, scaleArray(ing[i],ingArry[i]));
    }
    if (finalArry[4]!==500){
      return 0;
    }
    return Math.max(0,finalArry[0])*Math.max(0,finalArry[1])*Math.max(0,finalArry[2]) *Math.max(0,finalArry[3]);
}

function scaleArray(arry,scale){
  return arry.map(function(item){return item*scale});
}
function addArrays(arry1, arry2){
  return arry1.map(function(item, index){
    return item+arry2[index];
  })
}
