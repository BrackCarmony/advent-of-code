
var containers = [43, 3, 4, 10, 21, 44, 4, 6, 47, 41, 34, 17, 17, 44, 36, 31, 46, 9, 27, 38];

containers = containers.sort(function(a,b){return b-a;});
function numberOfCombination(arry, liters){
  if(liters==0){
    return 1;
  }
  if(arry.length == 1){
    return (liters == arry[0]?1:0);
  }
  return numberOfCombination(arry.slice(0,-1), liters) + numberOfCombination(arry.slice(0,-1), liters - arry[arry.length-1]);
}

console.log(numberOfCombination(containers,150)); //Part 1

function limUseCombination(arry, liters, n){
  if(liters==0){
    return 1;
  }
  if(arry.length == 1){
    return (liters == arry[0] && n==1?1:0);
  }
  if(n==0){
    return 0;
  }
  return limUseCombination(arry.slice(0,-1), liters, n) + limUseCombination(arry.slice(0,-1), liters - arry[arry.length-1], n-1);
}

console.log(limUseCombination(containers, 150,4)); //Part 2
