

var bar =29000000;
var houses = {}
var running = true;

var elf = 1;
var minHouse = 999*999*999;
do{
  for (var i=1;i<=50&&i*elf<=minHouse;i++){
    houses[i*elf] = houses[i*elf] || 0;
    houses[i*elf]+=elf*11;
    if (houses[i*elf]>=bar){
      if (i*elf <=minHouse){
          minHouse - i*elf;
      }
    }
  }
  elf++;
}while (elf <= 249481*20)

for (var key in houses){
  if (houses[key]>=bar){
    if (key*1 <minHouse){
      minHouse = key*1;
    }
  }
}

console.log(minHouse);
