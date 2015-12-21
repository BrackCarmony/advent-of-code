var boss = {hp:109, dmg:8, def:2};

var char = {};

var weapons = [[8,4,0],[10,5,0],[25,6,0],[40,7,0],[74,8,0]];
var armors = [[0,0,0],[13,0,1],[31,0,2],[53,0,3],[75,0,4],[102,0,5]];
var rings = [[0,0,0],[0,0,0],[25,1,0],[50,2,0],[100,3,0],[20,0,1],[40,0,2],[80,0,3]];

function battle(weapon, armor,ring1,ring2){
  boss.hp = 109;
  char.hp = 100;
  char.dmg = weapons[weapon][1] + rings[ring1][1]+rings[ring2][1];
  char.def = armors[armor][2] + rings[ring1][2]+rings[ring2][2];
  char.cost = weapons[weapon][0]+armors[armor][0] + rings[ring1][0]+rings[ring2][0];

  do{
      boss.hp -= Math.max(1,char.dmg - boss.def)
      if (boss.hp<=0){
        return 0;
      }
      char.hp -= Math.max(1,boss.dmg - char.def)
  }while(char.hp >0 && boss.hp >0)
  return char.cost;
}

var minCost = 0;
for (var weapon = 0;weapon<weapons.length;weapon++){
  for (var armor = 0;armor<armors.length;armor++){
    for (var ring1 = 0;ring1<rings.length;ring1++){
      for (var ring2 = 0;ring2<rings.length;ring2++){
          if (ring1!=ring2){
            var cost = battle(weapon, armor, ring1, ring2);
            if (cost>=minCost){
              minCost = cost;
            }
          }
      }
    }
  }
}
console.log(minCost);
