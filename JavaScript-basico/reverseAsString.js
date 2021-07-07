  
let newStr = '';
function reverseAsString(str) {
  for(let i = str.length-1; i >=0 ; i--){
    newStr += str[i];
    }
    console.log(newStr);
}

let stringRevertida = reverseAsString('Hello Gama Academy');
