var boss ={hp:71,dmg:10};
var effects = {};
var char = {hp:50,mana:500,armor:0};
var win = false;
var dead = false;
var manaSpent = 0;
var minMana = 999*999*999;
var part = 2;


var spells = {};
spells.magicMissle = function(){
  char.mana -= 53;
  manaSpent += 53;
  boss.hp -= 4;
}
spells.drain = function(){
  char.mana -= 73;
  manaSpent += 73;
  char.hp+=2;
  boss.hp-=2;
}
spells.shield = function(){
  var turns = 6;
  char.mana -= 113;
  manaSpent += 113;
  if (effects.shield){
    //console.log('spell Burn');
    char.hp-=1000;
  }else{
    char.armor = 7;
    effects.shield = function(){
      turns -=1;
      if (turns == 0){
        char.armor =0;
        delete effects.shield;
        //console.log("--------------------");
        //console.log(effects);
      }
    }
  }
}

spells.poison = function(){
  var turns = 6;
  char.mana -= 173;
  manaSpent += 173;
  if (effects.poison){
    //console.log('spell Burn');
    char.hp-=1000;
  }else{
    effects.poison = function(){
      turns -=1;
      boss.hp -=3;
      if (turns == 0){
        delete effects.poison;
      }
    }
  }
}

spells.recharge = function(){
  var turns = 5;
  char.mana -= 229;
  manaSpent += 229;
  if (effects.recharge){
    //console.log('spell Burn');
    char.hp-=1000;
  }else{
    effects.recharge = function(){
      turns -=1;
      char.mana +=101;
      if (turns == 0){
        delete effects.recharge;
      }
    }
  }
}


function battle(spellArray){

  boss ={hp:71,dmg:10};
  effects = {};
  char = {hp:50,mana:500,armor:0};
  win = false;
  dead = false;
  manaSpent = 0;

  for(var i=0;i<spellArray.length && win === false && dead === false;i++){
    if (part === 2){
    char.hp -=1;

      if (evalWin()){
        break;
      }
    }
    runEffects();
    if (evalWin()){
      break;
    }
    castSpell(spellArray[i]);
    if (evalWin()){
      break;
    }
    runEffects();
    if (evalWin()){
      break;
    }
    bossTurn();
    if (evalWin()){
      break;
    }
  }
  if (win){
    return manaSpent;
  }else{
    return 999*999*999;
  }
}

function evalWin(){
  ////console.log(char);
  ////console.log(boss);
  ////console.log(effects);
  if (char.mana<0){
    dead = true;
    return true;
  }
  if (char.hp<=0){
    dead = true;
    return true;
  }
  if (boss.hp<=0){
    win = true;
    return true;
  }
  if (manaSpent >= minMana){
    dead = true;
    return true;
  }
  return false;
}

function castSpell(spell){
  switch (spell){
    case 0:
      spells.magicMissle();
    return true;
    case 1:
      spells.drain();
    return true;
    case 2:
      spells.shield();
    return true;
    case 3:
      spells.poison();
    return true;
    case 4:
      spells.recharge();
    return true;
  }
}

function runEffects(){
  for (var key in effects){
    effects[key]();
  }
}

function bossTurn(){
  char.hp -= Math.max(boss.dmg - char.armor,1);
}
function makeArray(i){
  var ary = [];
  while (i>0){
    ary.push(i%5);
    i = Math.floor(i/5);
  }
  return ary;
}

for (var i=1;i<Math.pow(5,15);i++){
  var ary = makeArray(i);
  //console.log(ary);
  var cost = battle(ary);
  if (cost<minMana){
    console.log(cost);
    minMana = cost;
  }
}
