var hi = "123";
var md5 = require("md5");

function check(i){
  var hash = md5("bgvyzdsv"+i);
  if(hash.substr(0,6)=="000000"){
    console.log(i);
    console.log(hash);
  }
}

for(var i=0;i<10000000000;i++){
  check(i);
  if(i%10000000===0){
    console.log(i);
  }
}
