/*
Задание 3 (Троеточие)

Напишите функцию, которая принимает на вход строку и возвращает 
ее неизменной если ее длина не превышает 20 символов.
 Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'
*/
function learn(argument) 
{
	if (argument.length < 20)
	{
		return argument;
	} 

else {
	return ((argument.substr(0,20) + '...'));
	}

}
console.log(learn('Loremi dslf;lflsd dsfk;sdlk  skfks;dk'));