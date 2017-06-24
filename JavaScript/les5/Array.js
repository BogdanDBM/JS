/*
var matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
]
console.log(matrix[2][0]);
*/

/*
function lastName(arr, element) {
	// body...
//console.log(arr.length);
	arr.push(element);
	return (arr); 
}

arr = [
1,2,3,5
]
//arr.push(6)
var element = 'dfs';
console.log(lastName(arr, element));
*/

/*
//task 3 Fruits
fruits = ['apple','orange'];
fruits.push('kivi')
//console.log(fruits);
fruits[fruits.length - 2] = ('pear')
//console.log(fruits);
console.log(fruits.shift());
//console.log(fruits);
fruits.unshift('apricot','peach');
console.log(fruits);
*/

// TASK 4

function chekDif(arr){
max = arr.length - 1;
console.log(max);
min = 0;
var rand = min + Math.floor(Math.random() * (max +1 - min));
console.log(rand);
return arr[rand];
}

var arr = ['bogdan', 'dovzhuk', 28, 'november', 1988]
console.log(chekDif(arr));








