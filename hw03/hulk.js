	/**
 * hulk - библиотека для манипуляции DOMом.
 * Ниже описаны функции, которые должны присутствовать в данной библиотеке.
 * Реализовать hulk таким образом, чтобы можно было вызывать цепочку функций:
 * @example hulk.select('some-selector').addClass('cls').append('div')
 */
var hulk = {};


/**
 * @method select
 * Функция, с которой начинается манипуляция dom-объектов.
 * Возвращает hulk-объект, который содержит массив html-элементов, удовлетворяющих переданному селектору.
 * Все дальнейшие манипуляции из цепочки вызовов будут применены к элементам из данной выборки.
 * @param {String} selector css-селектор.
 */

hulk.select = function() {
	var obj = {"arr": document.querySelectorAll(arguments[0])};
	
	/**
	 * @method addClass
	 * Добавляет классы каждому элементу выборки.
	 * @param {String} clsNames Имена классов, разделенных пробелом.
	 */

	obj.addClass = function(){
		for(var i = 0; i < obj.arr.length;i++){
			obj.arr[i].className += " " + arguments[0];
		}
	}
	/**
	 * @method append
	 * Добавляет дочерний html-элемент каждому элементу выборки.
	 * @param {String} Имя тега, добавляемого элемента.
	 */
	obj.append = function(){
		for(var i = 0; i < obj.arr.length;i++){
			obj.arr[i].innerHTML = arguments[0];
		}
	}
	/**
	 * @method attr Если при вызове передается один аргумент, возвращается значение атрибута,
	 * если передается два аргумента, то атрибуту присваивается значение второго аргумента.
	 * @param {String} attrName Имя атрибута.
	 * @param {Number/String} [value] Значение атрибута.
	 */
	obj.attr = function(){
		if(arguments.length == 1){
			var str = "";
			for(var i = 0; i < obj.arr.length;i++){
				str += obj.arr[i][arguments[0]];
			}
			return str;
		}
		for(var i = 0; i < obj.arr.length;i++){
			obj.arr[i][arguments[0]] = arguments[1];
		}
		
	}
	/**
	 * @method children
	 * Возвращает всех непосредственных наследников первого элемента из выборки, обернутых в hulk-объект.
	*/
	obj.children = function(){
		return obj.arr[0].childNodes;
	}
	/**
	 * @method css Если при вызове передается один аргумент, возвращается значение css-атрибута,
	 * если передается два аргумента, то css-атрибуту присваивается значение второго аргумента.
	 * @param {String} cssAttrName Имя css-атрибута.
	 * @param {Number/String} value Значение css-атрибута.
	 */
	obj.css = function(){
		if(arguments.length == 1){
			var str = "";
			for(var i = 0; i < obj.arr.length;i++){
				str += obj.arr[i].style[arguments[0]];
			}
			return str;
		}
		for(var i = 0; i < obj.arr.length;i++){
			obj.arr[i].style[arguments[0]] = arguments[1];
		}
		
	}
		
	/**
	 * @method empty
	 * Очищает все внутреннее содержимое элементов из выборки.
	 */
	 obj.empty = function(){
		for(var i = 0; i < obj.arr.length;i++){
				obj.arr[i].innerHTML = "";
		}
	 }
	 
	/**
	 * @method find
	 * Производит выборку по дочерним элементам выборки, удовлетворяющим переданному селектору.
	 * @param {String} selector css-селектор для выборки.
	 */
	obj.find = function(){
		var array = [];
		for(var i = 0; i < obj.arr.length;i++){
			var mass = obj.arr[i].querySelectorAll(arguments[0]);	
			for(var i = 0; i < mass.length;i++){
				array.push(mass[i]);
			}
		}
		return array;
	}
	/**
	 * @method hasClass
	 * Проверяет наличие класса для элементов выборки.
	 * @param {String} className Имя класса, наличие которого проверяется.
	 * @return {Boolean} Возвращает true, если все элементы выборки содержат переданный класс.
	 */
	 obj.hasClass = function(){
		for(var i = 0; i < obj.arr.length;i++){
				if(obj.arr[i].className.indexOf(arguments[0]) < 0){
					return false;
				};
			return true;
		}
	 }
		
	/**
	 * @method html
	 * Возвращает html-содержимое первого элемента выборки.
	 * @return {HTMLElement} html-содержимое первого элемента из выборки.
	 */
	obj.html = function(){
		return obj.arr[0];
	}
		
	/**
	 * @method on
	 * Добавляет подписчика на событие для элементов выборки.
	 * @param {String} eventName Имя события, на которое будет производиться подписка.
	 * @param {Function} func Функция-подписчик.
	 */
	 obj.on = function(){
		for(var i = 0; i < obj.arr.length;i++){
			if(obj.arr[i][arguments[0]] == null){
				obj.arr[i][arguments[0]] = new Function(arguments[1] + ";");
			}else{
                var str = obj.arr[i][arguments[0]].toString();
                obj.arr[i][arguments[0]] = new Function(arguments[1] + ";" + str.substring(22,str.length-1));
            }
		}
	}
	
	/**
	* @method parent
	* Возвращает родительский элемент первого элемента выборки.
	*/
	obj.parent = function(){
		return obj.arr[0].parentNode;
	}
		
	/**
	 * @method remove
	 * Удаляет из документа все DOM-элементы выборки.
	 */
	obj.remove = function(){
		for(var i = 0; i < obj.arr.length;i++){
				obj.arr[i].parentNode.removeChild(obj.arr[i]);
		}
	}
		
	/**
	 * @method removeAttr
	 * Удаляет атрибут из элементов выборки.
	 * @param {String} attrName Удаляемый атрибут.
	 */
	obj.removeAttr = function(){
		for(var i = 0; i < obj.arr.length;i++){
				obj.arr[i].removeAttribute(arguments[0]);
		}
	} 
		
	/**
	 * @method removeClass
	 * Удаляет css-классы для элементов выборки.
	 * @param {String} clsNames Имена классов, разделенных пробелом.
	 */
	 obj.removeClass = function(){
		for(var i = 0; i < obj.arr.length;i++){
			var array = arguments[0].split(" ");
			for(var j = 0; j < array.length; j++){
				var index = obj.arr[i].className.indexOf(array[j]);
				obj.arr[i].className = obj.arr[i].className.substr(0,index) + obj.arr[i].className.substr(index + array[j].length);
			}
		}
	}
	/**
	 * @method toggleClass
	 * Добавляет (если классы отсутствуют) и удаляет (если классы присутствуют) у элементов выборки.
	 * @param {String} clsNames Имена классов, разделенных пробелом.
	 */
	 obj.toggleClass = function(){
		for(var i = 0; i < obj.arr.length;i++){
			var array = arguments[0].split(" ");
			for(var j = 0; j < array.length; j++){
				var index = obj.arr[i].className.indexOf(array[j]);
				if(index < 0){
					obj.arr[i].className += " " + array[j];
				}else{
					obj.arr[i].className = obj.arr[i].className.substr(0,index) + obj.arr[i].className.substr(index + array[j].length);
				}
			}
		}
	}
	
	/**
	 * @method unbind
	 * Удаляет подписчика на событие для элементов выборки.
	 * @param {String} eventName Имя события, для которого будет производиться удаление подписчика.
	 * @param {Function} func Удаляемая функция-подписчик.
	 */
	 obj.unbind = function(){
			for(var i = 0; i < obj.arr.length;i++){
                if(obj.arr[i][arguments[0]] != null){
                    var str = obj.arr[i][arguments[0]].toString();
                    var index = str.indexOf(arguments[1]);
                    if(index > -1){
                        obj.arr[i][arguments[0]] = new Function(str.substring(22,index) + str.substring(index + arguments[1].length, str.length-1));
                    }
                }
            }
	 }
	/**
	 * @method wrap
	 * Оборачивает каждый элемент выборки тегом, имя которого передано в качестве первого аргумента.
	 * @param {String} tagName Имя тега.
	 */
	 obj.wrap = function(){
		for(var i = 0; i < obj.arr.length;i++){
			var el = document.createElement(arguments[0]);
			var parent = obj.arr[i].parentNode;
			obj.arr[i].parentChild = undefined;
			el.appendChild(obj.arr[i]);
			parent.appendChild(el);			
		}
	 }
	return obj;
};

