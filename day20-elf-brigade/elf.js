

var bar =29000000;
var house =665280-1;
do {
  house++
  tot = 0;
  for (var i=1;i<=house/2;i++){
    if (house%i==0){
      tot+=i;
    }
  }
  tot += house;
  tot *=10;
  //console.log(house, " " ,tot);
} while (tot<bar)

console.log(house);
