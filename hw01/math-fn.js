/**
 * Результатом выполнения этих заданий будет набор некоторых математических функций.
 */


/**
 * Задание 0. Создать функцию multiply, перемножающаю два числа, 
 * переданных в качестве аргументов. Если переданные аргументы не являются
 * конечными числами, выбрасывать ошибку "Invalid arguments" 
 * (используйте throw new Error("Invalid arguments")).
 *
 * @example
 * var result = multiply(1,2); // 2
 * 
 * @param {Number} a
 * Первое число для перемножения.
 * 
 * @param {Number} b
 * Второе число для перемножения (необязательный параметр).
 * 
 * @return {Number} Факториал числа.
 */

 function multiply(a, b){
 	
 	function isNumber(x){
 		return (typeof x === "number") && !isNaN(x) && isFinite(x);
 	}

 	if(arguments.length < 2){
 		throw new Error("Invalid arguments");
 	}

 	if(!isNumber(a) || !isNumber(b)){
 		throw new Error("Invalid arguments");
 	}

 	return a*b;
 }


/**
 * Задание 1. Создать функцию factorial для подсчета факториала. Функция в качестве параметра
 * принимает целое число. Результатом выполнения будет факториал (произведение всех чисел,
 * начиная с 1 до самого числа включительно) этого числа.
 *
 * @example
 * var fact = factorial(5); // 1*2*3*4*5 = 60
 *
 * @param {Number} n
 * Число, для которого считается факториал.
 * 
 * @return {Number} факториал числа.
 */

 	function factorial(a){
 		var x=1;

 		function isNumber(x){
 			return (typeof x === "number" && !isNaN(x) && isFinite(x));
 		}

 		if(!isNumber(a)){
 			throw new Error("Invalid arguments");
 		}

 		if(arguments.length < 1){
 			throw new Error("Invalid arguments");
 		}

 		if(a < 0){
 			throw new Error("Invalid arguments");
 		}

 		if(a == 0){
 			return 1;
 		}
 		
 		for(i = 1; i <= a; i++){
 			x*=i;
 		}

 		return x;
 	}

/**
 * Задание 2. Создать функцию nfib для подсчета n-го числа Фибоначчи
 * (http://ru.wikipedia.org/wiki/Числа_Фибоначчи)
 * Функция в качестве параметра принимает целое число n.
 * Результатом выполнения будет число Фибоначчи, порядковый номер которого равен n.
 *
 * @example
 * var fith = nfib(5); // 3 (числа Фибоначчи - 0 1 1 2 3 5...)
 *
 * @param {Number} n
 * Порядковый номер.
 *
 * @return {Number} Число Фибоначчи.
 */

 function nfib(a){

 	function isNumber(x){
 			return (typeof x === "number" && !isNaN(x) && isFinite(x));
 		}

 	if(!isNumber(a)){
 		throw new Error("Invalid arguments");
 	}

 	if(arguments.length < 1){
 		throw new Error("Invalid arguments");
 	}

 	if(a < 0){
 		throw new Error("Invalid arguments");
 	}

 	if(a == 0){
 		return a;
 	}

 	if(a == 1){
 		return a;
 	}

 	var x = 0;
 	var y = 1;
 	var nfib;

 	for(i = 2; i < a; i++){
 		nfib = y+x;
 		x = y;
 		y = nfib;
 	}

 	return nfib;
 	
 }