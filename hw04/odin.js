/**
 * Odin - библиотека, добавляющая в javascript ООП в схожем с ООП-языками виде.
 * Позволяет определять классы, добавлять поля, методы (экземпляра и статические),
 * наследовать один класс от другого, создавать экземпляры класса.
 */

/**
 * @method Odin.def
 * Объявление класса.
 * @example
 *      Odin.def('MyClass', {
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
 *              }
 *          },
 *      });
 *
 *      var myClass = Odin.create('MyClass');
 *      myClass.greeting(); // В консоли должно быть напечатано 'Bonjour, MyClass'
 * @param className Имя класса
 * @param config Объект, содержащий конфигурацию объявляемого класса.
 */

/**
 * @method Odin.create
 * Создание экземпляра класса.
 * @param className Имя класса
 * @params config Объект, содержащий конфигурацию создаваемого экземпляра.
 */