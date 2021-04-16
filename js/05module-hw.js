// /*1. Измени код так, чтобы объект parent 
// стал прототипом для объекта в переменной сhild.*/

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// Пиши код ниже этой строки

// const child = Object.create(parent);
// console.log(child);

// Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

/* 2. Измени код, построив цепочку прототипов так, чтобы объект 
ancestor был прототипом для parent, а тот в свою очередь был 
прототипом для child. */

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;


// console.log(child);

// /*3. Объяви функцию-конструктор Car которая принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, 
// model и price, значениями которых должны быть переданные аргументы во 
// время её вызова с оператором new. */

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const myCar = new Car();

// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700));

/* 4. Выполни рефакторинг функции-конструктора Car так, чтобы она принимала 
один параметр - объект со свойсвами brand, model и price. 
Деструктуризируй объект в сигнатуре (подписи) функции. */

// function Car({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const myCar1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const myCar2 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(myCar);
// console.log(myCar1);
// console.log(myCar2);

// /*5. Добавь в свойство prototype функции-конструктора Car два метода:
// getPrice() - возвращает значение свойства price из объекта который 
// его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта 
// который его будет вызывать на newPrice. */

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function(){
//   return this.price;
// }

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// }

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// console.log(Car.prototype.hasOwnProperty('getPrice'));
// console.log(Car.prototype.hasOwnProperty('changePrice'));
// console.log(myCar.getPrice());
// myCar.changePrice(35000);
// console.log(myCar.getPrice());

// /*6. С помощью Function Declaration напиши функцию-конструктор Storage, 
// которая будет создавать объекты для управления складом товаров. 
// Функция ожидает только один аргумент - начальный массив товаров, 
// который записывается на создаваемый объект в свойство items.
// Добавь методы на прототип:
// getItems() - возвращает массив текущих товаров в свойстве items объекта, 
// который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его 
// в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров 
// в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов 
// в той последовательности, в которой твой код будут проверять тесты. 
// Пожалуйста ничего там не меняй. */

// function Storage(items) {
//   [
//     this.items = items,
//   ]
// }
// Storage.prototype.getItems = function (){
//   return this.items;
// }
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// }

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
//   return this.items;
// }


// Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

/* 7. С помощью Function Declaration напиши функцию-конструктор StringBuilder, 
которая принимает один параметр baseValue - произвольную строку, которая 
записывается на создаваемый объект в свойство value.
Добавь методы на прототип:
getValue() - возвращает текущее значение свойства value.
padEnd(str) - получает парметр str (строку) и добавляет её в конец значения 
свойства value объекта, который вызывает этот метод.
padStart(str) - получает парметр str (строку) и добавляет её в начало значения 
свойства value объекта, который вызывает этот метод.
padBoth(str) - получает парметр str (строку) и добавляет её в начало и 
в конец значения свойства value объекта, который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в 
той последовательности, в которой твой код будут проверять тесты. 
Пожалуйста ничего там не меняй. */

// function StringBuilder(baseValue) {
//     this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function (){
//   return this.value;
// }

// StringBuilder.prototype.padEnd = function (str){
//     this.value += str;
// }

// StringBuilder.prototype.padStart = function (str){
//     this.value = str + this.value;
// }

// StringBuilder.prototype.padBoth = function (str){
//     this.padStart(str);
//     this.padEnd(str);
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

/*8. Используя ключевое слово class объяви класс Car с пустым телом. */

// class Car {
  
// }

/*9. Выполни рефакторинг кода, заменив функцию-конструктор 
Car на класс с методом-конструктором, принимающим объект. */

// class Car{
//     brand;
//     model;
//     price;

//   constructor({ brand, model, price }){
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     }
// }

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const myCar1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const myCar2 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// console.log(myCar);
// console.log(myCar1);
// console.log(myCar2);

/* 10. Добавь классу Car две метода.
getPrice() - возвращает значение свойства price из объекта 
который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у 
объекта который его будет вызывать на newPrice. */

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    }

    getPrice() {
        return this.price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }
}

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

console.log(myCar.getPrice());
myCar.changePrice(35000);
console.log(myCar.getPrice());

/*11. Выполни рефакторинг класса Car так, чтобы свойство brand было 
приватным и добавь два метода для публичного интерфейса, для чтения 
и изменения этого свойства.
getBrand() - возвращает значение приватного свойства brand.
changeBrand(newBrand) - изменяет значение приватного свойства brand 
на newBrand. */

// class Car {
//     #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//     }
    
//     getBrand() {
//         return this.#brand;
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
// }

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const myCar1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const myCar2 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

// console.log(myCar.getBrand());
// myCar.changeBrand('Honda');
// console.log(myCar.getBrand());
// console.log(myCar1.getBrand());
// myCar1.changeBrand('Honda');
// console.log(myCar1.getBrand());
// console.log(myCar2.getBrand());
// myCar2.changeBrand('Honda');
// console.log(myCar2.getBrand());

/*12.Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. 
Сделай так, чтобы свойство items было приватным.
Под комментарием мы добавили инициализацию экземпляра и вызовы 
методов в той последовательности, в которой твой код будут проверять тесты. 
Пожалуйста ничего там не меняй. */

// class Storage {
//     #items;

//     constructor(items) {
//         this.#items = items;
//     }

//     getItems() {
//         return this.#items;
//     }

//     addItem(newItem) {
//         this.#items.push(newItem);
//     }

//     removeItem(item) {
//         const itemIndex = this.#items.indexOf(item);
//         this.#items.splice(itemIndex, 1)
//     }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

/*13.Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс 
с методами. Сделай так, чтобы свойство value было приватным.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той 
последовательности, в которой твой код будут проверять тесты. 
Пожалуйста ничего там не меняй. */

// class StringBuilder {
//     #value;

//     constructor(baseValue) {
//         this.#value = baseValue;
//     }

//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     }

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

/*14. Выполни рефакторинг класса Car. Сделай свойства model и price 
приватными, также как #brand. Стандартизируй публичный интерфейс класса
заменив уже объявленные методы на геттеры и сеттеры brand, model и price 
для взаимодействия с приватными свойствами.*/

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

/*15.Выполни рефакторинг класса Car. Добавь публичное статическое 
свойство MAX_PRICE со значением 50000 - максимально допустимая 
цена автомобиля.
Добавь сеттеру price проверку передаваемого значения параметра newPrice. 
Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше 
или равно, то перезаписывает цену автомобиля. */

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//         if (Car.MAX_PRICE < newPrice) {
//             return;
//       }
//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

/*16. Добавь классу Car публичный статический метод checkPrice(price), 
принимающий цену автомобиля. Метод должен сравнить значения параметра 
price и приватного статического свойства MAX_PRICE.
Если цена автомобиля превышает максимальную, метод должен вернуть 
строку 'Внимание! Цена превышает допустимую.'.
В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, 
чтобы показать как будет использоваться метод checkPrice(price). */

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//     static checkPrice(price) {
//         if (Car.#MAX_PRICE < price) {
//             return 'Внимание! Цена превышает допустимую.'
//         }
//         return 'Всё хорошо, цена в порядке.'
//     }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

/*17. В приложении нужен администратор с возможностью добавлять почты 
пользователей в чёрный список.
Объяви класс Admin, который наследует от класса User.
Добавь классу Admin публичное статическое свойство AccessLevel 
(уровень доступа), значение которого это объект { BASIC: 'basic', 
SUPERUSER: 'superuser' }. */

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     }
// }

// console.log(Admin.AccessLevel.BASIC);

/*18. Добавь классу Admin метод constructor, который принимает 
один параметр - объект настроек с двумя свойствами email и accessLevel. 
Добавь классу Admin публичное свойсво accessLevel, значение которого 
будет передаваться при вызове конструктора.
Чтобы показать как будет использоваться класс Admin, мы добавили 
инициализацию экземпляра под объявлением класса. */

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//      constructor({email, accessLevel}) {
//          super(email);
//          this._accessLevel = accessLevel;
//     }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   static accessLevel;

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango._accessLevel); // superuser

/*19.Добавь классу Admin следующие свойства и методы.
Публичное свойство blacklistedEmails для хранения чёрного 
списка почтовых адресов пользователей. Значение по умолчанию 
это пустой массив.
Публичный метод blacklist(email) для добавления почты 
в чёрный список. Метод должен добавлять значение параметра 
email в массив хранящийся в свойстве blacklistedEmails.
Публичный метод isBlacklisted(email) для проверки почты 
в чёрном списке. Метод должен проверять наличие значения 
параметра email в массиве хранящемся в свойстве 
blacklistedEmails и возвращать true или false.
После объявления класса мы добавили инициализацию экземпляра 
и вызовы методов в той последовательности, в которой твой код 
будут проверять тесты. Пожалуйста ничего там не меняй. */

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  blacklistedEmails = [];

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
   }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 