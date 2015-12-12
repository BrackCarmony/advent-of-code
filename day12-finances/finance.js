var input = require('./input.JSON');
var _ = require('underscore');

console.log(evalNode(input));

function evalNode(inp){
  var type = typeof inp;

  switch(type){
    case 'number':
      return inp;
    case 'string':
      return 0;
    case 'object':

      var sum =0;
      for (var key in inp){

        if (isNaN(key*1) && inp[key]==='red'){ //Remove if block for part1
          console.log('key', key, 'inp',inp, 'inp[key]',inp[key]);
          return 0;
        }
        sum += evalNode(inp[key]);
      }
      return sum;
  }
}
