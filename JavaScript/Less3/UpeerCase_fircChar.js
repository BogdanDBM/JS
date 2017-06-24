/*
function upperSim(n){
var text = (n.substring(0,1)).toUpperCase();  
var upper = n.substring(1); 
  return text + upper;
}
console.log(upperSim('hello'));

*/

function upperSim(str){
return str[0].toUpperCase() + str.substring(1);;

}
console.log(upperSim('hello'));
