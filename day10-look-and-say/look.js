var input = "1113122113"

var fs = require('fs');




function lookItteration(str){
  var newStr = "";
  var count =1;
  console.log(input);
  for (var i=0;i<str.length;i++){
    if (str[i] === str[i+1]){
      count++;
    }
    else{
      newStr = newStr + count + str[i];
      count = 1;
    }
  }
  console.log(count);
  console.log(newStr);
  return newStr;
}

for (var i=0;i<50;i++){
  input = lookItteration(input);
}

console.log(input.length);

// fs.writeFile("test.txt", input, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//
//     console.log("The file was saved!");
// });
