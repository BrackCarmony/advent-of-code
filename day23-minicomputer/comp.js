var input = require("./input");
var instructions = input.split("|").map(function(item){
  return [item.slice(0,3),item.slice(4-item.length)]
});

var funcs = {};
var part = 2;

var regs = {a:0,b:0};
var instPoint = 0;

if (part == 2){
  reqs.a = 1;
}

funcs.inc = function(reg){
  regs[reg]++;
}

funcs.hlf = function(reg){
  regs[reg]/=2;
  regs[reg]=Math.floor(regs[reg]);
}

funcs.tpl = function(reg){
  regs[reg]*=3;
}

funcs.jmp = function(amt){
  amt = amt.replace("+","");
  instPoint += amt*1;
  instPoint--;
}

funcs.jie = function(amt){
  reg = amt.split(",")[0];
  if(regs[reg]%2===0){
    amt = amt.split(",")[1].replace("+","");
    instPoint += amt*1;
    instPoint--;
  }
}

funcs.jio = function(amt){
  reg = amt.split(",")[0];
  if(regs[reg]==1){
    amt = amt.split(",")[1].replace("+","");
    instPoint += amt*1;
    instPoint--;
  }
}

do{
  funcs[instructions[instPoint][0]](instructions[instPoint][1]);
  console.log(regs);
  instPoint++;
}while (instPoint<instructions.length)



console.log(instructions);
