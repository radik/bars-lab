/**
 * Odin - библиотека, добавляющая в javascript ООП в схожем с ООП-языками виде.
 * Позволяет определять классы, добавлять поля, методы (экземпляра и статические),
 * наследовать один класс от другого, создавать экземпляры класса.
 */
function Odin(){}
Odin.define = function(a,b){
    window[a] = function(){
        for(var i in b.fields){
            this[i] = b.fields[i];
        }
        for(var i in b.methods){
            this[i] = b.methods[i];
        }
    }
    for(var i in b.staticFields){
        window[a][i] = b.staticFields[i];
    }
    for(var i in b.staticMethods){
        window[a][i] = b.staticMethods[i];
    }

}
Odin.create = function(a,b){
    var myObj = new window[a];
    for(var i in b){
        myObj[i] = b[i];
    }
    return myObj;
}
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