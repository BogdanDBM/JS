/*
Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.

checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false
*/
/*
var spamText = ["sex","Sex","spam","SPAM"];
function checkSpam(argument) {
	for (var i = 0; i <= 5; i++) {
		if (argument == spamText.indexOf(i)){
			return ( argument +  " true");
		}
	else {
		console.log("not spam")
	}
	}

}
console.log(checkSpam("get new Sex videos"));

// -1, не найдено, так как поиск учитывает регистр  
console.log( str.indexOf("widget") ); 

*/
/*
 var spamText = ["sex","Sex","spam","SPAM"];
function checkSpam(argument) {
	for (i=0; i<= spamText.length-1; i++){
		spam = spamText[i];
		if ( argument.indexOf(spam) >= 0 ){
	return true;
	} 
	}
	return false;	
	
}
console.log(checkSpam("[SPAM] How to earn fast money?"));
*/


function always(n) {
return () => n;
}

console.log(always("ds"));


