var input = "hxbxxyzz";

function incrementpassword(str){

  for (var i = str.length-1;i>=0;i--){
    if (str[i]==='z'){
      str = setCharAt(str, i, 'a');
    }else{
      //console.log(str.charCodeAt(i));
      //console.log(String.fromCharCode(str.charCodeAt(i)+1));
      str = setCharAt(str, i, String.fromCharCode(str.charCodeAt(i)+1));
      break;
    }
  }
  return str;
}

do{
input = incrementpassword(input);
}while(!checkpassword(input));

console.log(input);

function checkpassword(str){
  if(!str.match(/(.)\1.*(.)\2/)){
    return false;
  }
  if (str.match(/[iol]/)){
    return false;
  }
  if (!str.match(/abc|bcd|cde|def|efg|fgh|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/)){
    return false;
  }


  return true;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
