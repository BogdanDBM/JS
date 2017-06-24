/*
//task1 v1
user = {
name: 'Sergey',
surname: 'Petrov',
name: 'Andrey',
age: 30,
}

delete user.name;
console.log(user);
*/
/*
//task1 v2
user ={}
user.name = 'Sergey';
user.surname = 'Petrov';
user.name = 'Andrey';
user.edge = 30;
//delete user.name;
//console.log(user);
for ( var item in user){
	//console.log(item);
	//console.log(user[item]);
	console.log(item + " : " + user[item]);
}

*/
/*
// task2
function isEmpty(obj) {
		// body...
		var counter = 0;
		for (item in obj){
			counter +=1; 
		}
		if (counter > 0){
			return false;
		} else {
			return true;
		}
}
var todoList = {
	name: 'bogdan'
};
console.log(isEmpty(todoList))
*/

//task3
function selaries(obj) {
	// body...
counter = 0;
for (key in obj){

	counter = counter + obj[key];
}
return ('total pay = ' +  counter + '$');
}
var obj = {
junior : 500,
midle : 1500,
senior : 2000,
team : 5000,
}
console.log(selaries(obj));


