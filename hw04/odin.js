/**
 * Odin - библиотека, добавляющая в javascript ООП в схожем с ООП-языками виде.
 * Позволяет определять классы, добавлять поля, методы (экземпляра и статические),
 * наследовать один класс от другого, создавать экземпляры класса.
 */

var Odin = {
  className: undefined,

	define: function(clsName, obj) {

    for(var key in obj.staticMethods) {
     obj[key] = obj.staticMethods[key];
    }
    for(var key in obj.staticFields) {
      obj[key] = obj.staticFields[key];
    }
    window[clsName] = new Object(obj);
	},

	create: function(clsName, cfg) {

    var newObj = window[clsName];
    var curObj = new Object();

    for(var key in newObj.fields) {
      curObj[key] = newObj.fields[key];
    }
    for(var key in newObj.methods) {
      curObj[key] = newObj.methods[key];
    }
    for(var key in cfg) {
      curObj[key] = cfg[key];
    }

    return curObj;
	}
};

/**
 * @method Odin.def
 * Объявление класса.
 * @example
 *      // Объявление класса
 *      Odin.def('MyClass', {
 *			// Конструктор класса
 *			constructor: function(cfg){
 *				this.name = cfg.name;
 *			},
 *
 *          staticMethods: {
 *              someStaticMethod: function(){
 *
 *              }
 *          },
 *
 *          staticFields: {
 *              frenchGreeting: 'Bonjour',
 *              englishGreeting: 'Hello'
 *          },
 *
 *          fields: {
 *              name: 'MyClassName'
 *          },
 *
 *          methods: {
 *              greeting: function(){
 *                  console.log(MyClass.frenchGreeting + ', ' + this.name);
 *
 * 					// вызов переопределенного метода из родительского класса
 *					this.greeting.callSuper();
 *              }
 *          }
 *      });
 *
 *      var myClass = Odin.create('MyClass');
 *      myClass.greeting(); // В консоли должно быть напечатано 'Bonjour, MyClass'
 *
 * @param className Имя класса
 * @param config Объект, содержащий конфигурацию объявляемого класса.
 */

/**
 * @method Odin.create
 * Создание экземпляра класса.
 * @param className Имя класса
 * @params config Объект, содержащий конфигурацию создаваемого экземпляра.
 * При создании объекта будет передан в конструктор класса.
 * @example
 *     Odin.create('MyClass', {name: 'Odin'});
 */