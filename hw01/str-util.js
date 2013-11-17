	/**
 * Результатом выполнения этих заданий будет набор функций-утилит
 * для работы со строками.
 */

/**
 * Задание 1. Создать функцию format, позволяющую форматировать строку.
 * В качестве первого параметра принимается строка-шаблон в форамте 'blah-blah {0}, blah {1}...',
 * следом в функцию передаются параметры, общее количество которых должно соответствовать вставок {x}
 * в строке-шаблоне. Возможно здесь пригодятся регулярные выражения 
 * см. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * Если передаваемых параметров не хватает (см. пример ниже), то выбрасывается исключение
 * (для этого используйте след. код: throw new Error("Invalid arguments count")).
 *
 * @example
 * var txt = format('Hello, {0} {1}', 'JS', 'World'); // значение txt равно 'Hello, JS World'
 * var errorArgs = format('Hello, {0} {1}', 'JS'); // в консоли ошибка 'Error: Invalid arguments count'
 *
 * @param {String} token
 * Строка-шаблон.
 *
 * @param {Mixed...} values
 * Значения, которые заменят {0}, {1}... в строке-шаблоне.
 *
 * @return {String} отформатированная строка.
 */

function format(str){
	var reg = /\{\d\}*/;
	var newStr = "";
	if(!reg.test(str)){
		return "without wildcards";
	}
	if(str.split(reg).length != arguments.length){
		throw new Error("Invalid arguments count");
	}
	for(i = 0; i < arguments.length-1; i++){
		newStr += str.split(reg)[i] + arguments[i+1]; 
	}
	return newStr;
}

/**
 * Задание 2. Создать функцию repeat.
 *
 * @example
 * var txt = repeat('hello', 3, '-'); // 'hello-hello-hello'
 * var txt2 = repeat('hello', 3); // 'hellohellohello'
 *
 * @param {String} str
 * Строка, которая будет повторяться.
 *
 * @param {Number} count
 * Количество повторений.
 *
 * @param {String} [sep]
 * Разделитель (необязательный параметр).
 *
 * @return {String} Строка с повотрениями.
 */

 function repeat(str, count){	
 	var newStr = "";
 	console.log(arguments.length);
 	if(arguments.length > 3){
 		throw new Error("Invalid arguments count");
 	}if(arguments.length ==3){
	 	if(typeof arguments[0] !== "string" || typeof arguments[2] !== "string"){
	 		throw new Error("Invalid arguments");
	 	}
 	}
 	if((typeof arguments[1] !== "number") && isNaN(arguments[1]) && !isFinite(arguments[1])){
 		throw new Error("Invalid arguments");
 	}
 	if(arguments.length > 2){
 		for(var i = 0; i < count; i++){
 			if(i == count - 1){
 				newStr += str;
 			}else{
 				newStr += str + arguments[2];
 			}
 		}
 		return newStr;
 	}else{
	 	for(var i = 0; i < count; i++){
	 		newStr += str;
	 	}
 	}
 	return newStr;
 }

/**
 * Задание 3. Создать функцию toGetParams, формирующую из
 * объекта строку параметров для GET-запроса.
 *
 * @example
 * var params = toGetParams({p1: 1, p2: 'hello'}); // p1=1&p2=hello
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} строка параметров.
 */

 function toGetParams(obj){
 	if(typeof obj !== "object"){
 		throw new Error("Invalid arguments");
 	}
 	var str = "";
 	var counter = 0;
 	for(var key in obj){
 		counter++;
 	}
 	var i = counter-1;
 	counter = 0;
 	for(var key in obj){
 		if(i == counter){
 			str += key + "="+obj[key];
 		}else{
 			str += key + "="+obj[key]+"&";
 		}
 		counter++;
 	}
 	return str;
 }

/**
 * Задание 4. Создать функцию formatUrl, формирующую из базового url и объекта
 * строку GET-запроса.
 *
 * @example
 * var getUrl = formatUrl('http://example.com', {a: 1, b: 2}); // 'http://example.com?a=1&b=2'
 *
 * @param {String} url
 * Базовый url
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} сформированный url.
 */

 function formatUrl(url, obj){
 	var newUrl = url+"?";
 	var counter = 0;
 	for(var key in obj){
 		counter++;
 	}
 	var i = counter-1;
 	counter = 0;
 	for(var key in obj){
 		if(i == counter){
 			newUrl += key + "="+obj[key];
 		}else{
 			newUrl += key + "="+obj[key]+"&";
 		}
 		counter++;
 	}
 	return newUrl;
 }

/**
 * Задание 5. Создать функцию startsWith, возвращающая true, если строка, переданная
 * в качестве первого аргумента начинается со строки, переданной в качестве второго аргумента,
 * false в противном случае.
 *
 * @example
 * var start = startsWith('homework', 'home'); // true
 * var dontStart = startsWith('homework', 'house'); // false
 *
 * @param {String} str
 * Строка для проверки.
 *
 * @param {String} prefix
 * Строка - кандидат на роль префикса.
 *
 * @return {Boolean} Результат проверки.
 */

 	function startsWith(str1, str2){
 		if(typeof str1 !== "string" || typeof str2 !== "string"){
 			throw new Error("Invalid arguments");
 		}
 		if(arguments.length > 2){
 			throw new Error("Invalid arguments count")
 		}
 		var reg = new RegExp("^"+str2);
 		return reg.test(str1);
 	}

/**
 * Задание 6. Создать функцию endsWith, возвращающая true, если строка, переданная
 * в качестве первого аргумента оканчивается на строку, переданную в качестве второго аргумента,
 * false в противном случае.
 *
 * @example
 * var end = endsWith('homework', 'work'); // true
 * var dontEnd = endsWith('homework', 'task'); // false
 *
 * @param {String} str
 * Строка для проверки.
 *
 * @param {String} suffix
 * Строка - кандидат на роль суффикса.
 *
 * @return {Boolean} Результат проверки.
 */

 function endsWith(str1, str2){
 	if(typeof str1 !== "string" || typeof str2 !== "string"){
 			throw new Error("Invalid arguments");
 	}
 	if(arguments.length > 2){
 		throw new Error("Invalid arguments count")
 	}
 	var reg = new RegExp(str2+"$");
 	return reg.test(str1);
 }