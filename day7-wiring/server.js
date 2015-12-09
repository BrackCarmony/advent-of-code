var input = require('./output');
var instructions = input.split("|");
var _ = require('underscore');

var gates = {};

instructions.forEach(runInstruction);




function runInstruction(item, index, array){

  var gate = item.match(/([0-9a-z]+) ([A-Z]+) ([0-9a-z]+) -> ([a-z]*)/);
  if (gate){
    //console.log(gate);
    makeGate(gate);
    return true;
  } else{
    var gate2 = item.match(/NOT ([0-9a-z]+) -> ([a-z]+)/);
    if (gate2){
      //console.log(gate2);
      makeGate2(gate2);
      return true;
    }else{
      var gate3 = item.match(/([0-9a-z]+) -> ([a-z]+)/);
      makeGate3(gate3);
      return true;
      //console.log(gate3);
    }
  }
  //console.log(item);
  return false;
}

function makeGate(match){
  //console.log(gates);
  gates[match[4]]={
    gate:match[2],
    input1:match[1],
    input2:match[3]
  };
}

function makeGate2(match){
  //console.log(match);
  gates[match[2]] = {
    gate:"NOT",
    input1:match[1]
  };
}

function makeGate3(match){
  //console.log(match);
  gates[match[2]]={
    gate:"IS",
    input1:match[1]
  };
}

//console.log(gates);
//console.log(Object.keys(gates).length);
var lastA = 0;
var currentA = 0;
do{
    lastA = currentA;
    var evalGate =_.memoize(function(key){

    if(!key){
      console.log("I shouldn't be running");
      return 0;
    }
    if (key.match(/[0-9]+/)){
      //console.log("I get here");
      return key*1;
    }
    var gate = gates[key];
    //console.log(key, gate);
    switch(gate.gate){
      case 'IS':
        return evalGate(gate.input1);
      case 'AND':
        return evalGate(gate.input1) & evalGate(gate.input2);
      case 'OR':
        return evalGate(gate.input1) |/*|*/ evalGate(gate.input2);
      case 'RSHIFT':
        return evalGate(gate.input1) >>/*>>*/evalGate(gate.input2);
      case 'LSHIFT':
        return evalGate(gate.input1) <</*<<*/evalGate(gate.input2);
      case 'NOT':
        return ~ evalGate(gate.input1);
      default:
      console.log("Ummm I forgot about ", gate.gate ," apparently");
      break;
    }

  });
  //console.log(gates);
   currentA = evalGate('a');
  gates.b.input1 = currentA.toString();
  //console.log(lastA);
}while (currentA != lastA);
console.log(lastA);
//console.log(gates.f);
