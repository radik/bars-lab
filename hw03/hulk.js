<<<<<<< HEAD
var hulk = { 
 	elem: undefined,

 	select: function(selector) {

 		this.elem = document.querySelectorAll(selector);

 		return this;
 	},

 	addClass: function(clsNames) {

 		for(var i = 0; i < this.elem.length; i++) {
 			if(this.elem[i].className != '') {
	 			this.elem[i].className = this.elem[i].className + ' ' + clsNames;
	 		}else{
	 			this.elem[i].className = clsNames;
	 		}
 		}
 		
 		return this;
 	},

 	append: function(tag) {

 		var newElem = document.createElement(tag);

 		for(var i = 0; i < this.elem.length; i++) {
 			this.elem[i].appendChild(newElem);
 		}

 		return this;
 	},

 	attr: function() {

 		if(arguments.length == 1) {
 			for(var i = 0; i < this.elem.length; i++) {
 				console.log(this.elem[i].getAttribute(arguments[0]));
 			}
 		}
 		if(arguments.length == 2) {
 			for(var i = 0; i < this.elem.length; i++) {
 				this.elem[i].setAttribute(arguments[0], arguments[1]);
 			}
 		}

 		return this;
 	},

 	children: function() {

 		var childrens = this.elem[0].childNodes;

 		for(var i = 0; i < childrens.length; i++) {
 			console.log(childrens[i]);
 		}

 		return this;
 	},

 	css: function() {

 		if(arguments.length ==1) {
 			for(var i = 0; i < this.elem.length; i++) {
 				var cssStyle = this.elem[i].style[arguments[0]];
 				if(cssStyle != '') {
 					console.log(cssStyle);
 				}
 			}
 		}
 		if(arguments.length == 2) {
 			for(var i = 0; i < this.elem.length; i++) {
 				var cssStyle = this.elem[i].style[arguments[0]] = arguments[1];
 			}
 		}

 		return this;
 	},

 	empty: function() {

 		for(var i = 0; i < this.elem.length; i++) {
 			while(this.elem[i].firstChild) {
 				this.elem[i].removeChild(this.elem[i].firstChild);
 			}
 		}

 		return this;
 	},

 	find: function(selectorCss) {
 		
 		var childrens;

 		for(var i = 0; i < this.elem.length; i++) {
 			childrens = this.elem[i].childNodes;
 			for(var j = 0; j < childrens.length; j++) {
 				if(typeof(childrens[j].style) != 'undefined') {
 					if(childrens[j].style[selectorCss]) {
 						console.log(childrens[j]);
 					}
 				}
 			}
 		}

 		return this;
 	},

 	hasClass: function(className) {

 		for(var i = 0; i < this.elem.length; i++) {
 			if(this.elem[i].className != className) {
 				return false;
 			}
 		}

 		return true;
 	},

 	html: function() {
 	
 		return this.elem[0].innerHTML;

 	},

 	on: function(eventName, func) {

 		for(var i = 0; i < this.elem.length; i++) {
 			this.elem[i].addEventListener(eventName, func, false);
 		}

 		return this;
 	},

 	parent: function() {

 		return this.elem[0].parentNode;

 	},

 	remove: function() {

 		while(this.elem.length) {
 			this.elem[0].parentNode.removeChild(this.elem[0]);

 		}

 		return this;
 	},

 	removeAttr: function(attrName) {

 		for(var i = 0; i < this.elem.length; i++) {
 			this.elem[i].removeAttribute(attrName);
 		}

 		return this;
 	},

 	removeClass: function(clsNames) {

 		var classes = [];
 		var delCls = clsNames.split(' ');

 		for(var i = 0; i < this.elem.length; i++) {
	 		if(this.elem[i].className != '') {
	 			classes = this.elem[i].className.split(' ');
	 			for(var j = 0; j < delCls.length; j++) {
	 				if(classes.indexOf(delCls[j]) != -1) {
	 					classes = classes.join(' ').replace(delCls[j], '').split(' ');
	 				}
	 			}
	 			this.elem[i].className = '';
	 			for(var j = 0; j < classes.length; j++) {
	 				if(classes[j] != ''){
	 					if(this.elem[i].className == '') {
	 						this.elem[i].className += classes[j];
	 					}else{
	 						this.elem[i].className += ' ' + classes[j];
	 					}
	 				}
	 			}
	 			classes = [];
	 		}
 		}

 		return this;
 	},

 	toggleClass: function(clsNames) {
 		
 		var classes = [];
 		var delCls = clsNames.split(' ');

 		for(var i = 0; i < this.elem.length; i++) {
	 		if(this.elem[i].className != '') {
	 			classes = this.elem[i].className.split(' ');
	 			for(var j = 0; j < delCls.length; j++) {
	 				if(classes.indexOf(delCls[j]) != -1) {
	 					classes = classes.join(' ').replace(delCls[j], '').split(' ');
	 				}else {
	 					classes.push(' ' + delCls[j]);
	 				}
	 			}
	 			this.elem[i].className = '';
	 			for(var j = 0; j < classes.length; j++) {
	 				if(classes[j] != ''){
	 					if(this.elem[i].className == '') {
	 						this.elem[i].className += classes[j];
	 					}else{
	 						this.elem[i].className += ' ' + classes[j];
	 					}
	 				}
	 			}
	 			classes = [];
	 		}
 		}

 		return this;
 	},

 	unbind: function(eventName, func) {

 		for(var i = 0; i < this.elem.length; i++) {
 			this.elem[i].removeEventListener(eventName, func, false);
 		}

 		return this;
 	},

 	wrap: function(tagName) {

 		var elem;
 		var newElem;
 		var body = document.getElementsByTagName('body')[0];

 		for(var i = 0; i < this.elem.length; i++) {
 			elem = this.elem[0];
 	 			newElem = document.createElement(tagName);
	 			newElem.appendChild(elem);
	 			body.appendChild(newElem);
 		}

 		return this;
 	} 
};
=======
/**
 * hulk - библиотека для манипуляции DOMом.
 * Ниже описаны функции, которые должны присутствовать в данной библиотеке.
 * Реализовать hulk таким образом, чтобы можно было вызывать цепочку функций:
 * @example hulk.select('some-selector').addClass('cls').append('div')
 */

/**
 * @method select
 * Функция, с которой начинается манипуляция dom-объектов.
 * Возвращает hulk-объект, который содержит массив html-элементов, удовлетворяющих переданному селектору.
 * Все дальнейшие манипуляции из цепочки вызовов будут применены к элементам из данной выборки.
 * @param {String} selector css-селектор.
 */

/**
 * @method addClass
 * Добавляет классы каждому элементу выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */

/**
 * @method append
 * Добавляет дочерний html-элемент каждому элементу выборки.
 * @param {String} Имя тега, добавляемого элемента.
 */

/**
 * @method attr Если при вызове передается один аргумент, возвращается значение атрибута,
 * если передается два аргумента, то атрибуту присваивается значение второго аргумента.
 * @param {String} attrName Имя атрибута.
 * @param {Number/String} [value] Значение атрибута.
 */

/**
 * @method children
 * Возвращает всех непосредственных наследников первого элемента из выборки, обернутых в hulk-объект.
 */

/**
 * @method css Если при вызове передается один аргумент, возвращается значение css-атрибута,
 * если передается два аргумента, то css-атрибуту присваивается значение второго аргумента.
 * @param {String} cssAttrName Имя css-атрибута.
 * @param {Number/String} value Значение css-атрибута.
 */

/**
 * @method empty
 * Очищает все внутреннее содержимое элементов из выборки.
 */

/**
 * @method find
 * Производит выборку по дочерним элементам выборки, удовлетворяющим переданному селектору.
 * @param {String} selector css-селектор для выборки.
 */

/**
 * @method hasClass
 * Проверяет наличие класса для элементов выборки.
 * @param {String} className Имя класса, наличие которого проверяется.
 * @return {Boolean} Возвращает true, если все элементы выборки содержат переданный класс.
 */

/**
 * @method html
 * Возвращает html-содержимое первого элемента выборки.
 * @return {HTMLElement} html-содержимое первого элемента из выборки.
 */

/**
 * @method on
 * Добавляет подписчика на событие для элементов выборки.
 * @param {String} eventName Имя события, на которое будет производиться подписка.
 * @param {Function} func Функция-подписчик.
 */

/**
 * @method parent
 * Возвращает родительский элемент первого элемента выборки.
 */

/**
 * @method remove
 * Удаляет из документа все DOM-элементы выборки.
 */

/**
 * @method removeAttr
 * Удаляет атрибут из элементов выборки.
 * @param {String} attrName Удаляемый атрибут.
 */

/**
 * @method removeClass
 * Удаляет css-классы для элементов выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */

/**
 * @method toggleClass
 * Добавляет (если классы отсутствуют) и удаляет (если классы присутствуют) у элементов выборки.
 * @param {String} clsNames Имена классов, разделенных пробелом.
 */

/**
 * @method unbind
 * Удаляет подписчика на событие для элементов выборки.
 * @param {String} eventName Имя события, для которого будет производиться удаление подписчика.
 * @param {Function} func Удаляемая функция-подписчик.
 */

/**
 * @method wrap
 * Оборачивает каждый элемент выборки тегом, имя которого передано в качестве первого аргумента.
 * @param {String} tagName Имя тега.
 */
>>>>>>> bars-lab/master
