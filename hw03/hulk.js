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