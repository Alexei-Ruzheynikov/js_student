let money = 50000;
let income = "Фриланс";
let addExpenses = "Интернет, Оборудование, Обучение";
let deposit = true;
let mission = 600000;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " " + "месяцев");
console.log("Цель заработать " + mission + " рублей");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(", "));

let budgetDay = money / 30;
console.log(budgetDay);

/*let myVar;

myVar = 10;
console.log(typeof myVar);

myVar = "Hello world";
console.log(typeof myVar);

myVar = true;
console.log(typeof myVar);

// считается глюком то, что выводит тип данных object, но так заведено
myVar = null;
console.log(typeof myVar);

myVar = undefined;
console.log(typeof myVar);

//редко используется на практике и нужен - для идентификаторов имен - это уникальное и неизменнное значение, создать 2 одинаковых "Symbol" нельзя, на курсе не будем изучать, т.к. применяется в очень нетипичных ситуациях
myVar = Symbol();
console.log(typeof myVar);

// вернет false, т.к. они не одинаковы
let mySymbol1 = Symbol("hello");
let mySymbol2 = Symbol("hello");
console.log(mySymbol1 == mySymbol2); */

/*//fallse
console.log(null > 0);
//fallse
console.log(null == 0);
//true
console.log(null >= 0);
//true - потомучто больше или равно нулю -все возможно
//unefined - значение полностью отстутсвует
// null - пустая переменная

//выведет undefined - пустую переменную
console.log("myVar: ", myVar);

//выведет undefined - пустую переменную
let obj = {};
console.log("obj.prop: ", obj.prop);

//выведет undefined - пустую переменную
let arr = [1, 2, 3];
console.log("arr[5]: ", arr[5]);
*/

/*
let myTrue = true;
let myFalse = false;

console.log(2 === 2);
console.log(2 === 3);

//Boolean - с его помощью преобразуем в булевый тип и принимает значение true
console.log(Boolean(5));
console.log(Boolean("Hello"));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function () {}));

//Исключения - число 0 принимает false и другие примеры тоже false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));*/

/*
// || - оператор или, && - оператор и, ! - оператор отрицания

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(!true);
console.log(!false);

// целые числа
console.log(50);
// дробные
console.log(8.5);
//еще числа
//typeof - посмотреть тип данных
console.log(typeof 5e6);
console.log(typeof 0b1111);
console.log(typeof 0o11);
console.log(typeof 0x22aacc);
//Infinity может быть отрицательным -Infinity инфинити - это бесконечность, очень большое число и оно может быть отрицательным
console.log(typeof Infinity);
console.log(typeof NaN);
// бесконечность также получится делением числа на 0
console.log(-5 / 0);
// получим Nan -не число, хоть и останется тип данных - число
//NaN также получится если выполнять арифметические данные со строкой
//или деление бесконечности на бесконечность
console.log(0 / 0);
console.log("javascript" / 5);

// унарные операторы + и -
console.log(+5);
console.log(-5);

//префиксная - перед переменной ++ , сначало увеличивает, потом возвращает
//постфиксная - после переменной ++ , сначало вернет текущее значение, затем увеличивает
// Это инкремент ++, так же работает и декремент --
let i = 5;
console.log(++i);*/

//бинарные операторы
// console.log(3 + 4);
// console.log(4 - 3);
// console.log(2 * 3);
// console.log(9 / 2);
// console.log(9 % 2);

// let n = 15;
// // n = n + 3;
// n += 3;
// console.log("n: ", n);
// // n = n - 6;
// n -= 6;
// console.log("n: ", n);
// // n /= 3;
// n /= 3;
// console.log("n: ", n);

//Равенства, === - строгое соответствие - проверка на равенство  без привеедения типов, == сравнение типов, где один из типов приводится к другому и происходит сравнение
// лучше использовать равенство, без приведения типов - строго соответствие ===

// console.log(3 > 2);
// console.log(3 < 2);
// console.log(5 >= 3);
// console.log(10 <= 5);
// console.log(5 === 5);
// console.log(5 == "5");
// console.log(5 != "5");

/*
// объект math создержит математические методы
// sqrt - метод извлечения корня
console.log(Math.sqrt(25));
// pow -возведение в степень
console.log(Math.pow(5, 3));
// для возведения в степень - появился новый оператор, нужно будет его найти для дз

// метод для проверки - является ли число целым
console.log(Number.isInteger(5)); */

// строки пишутся в кавычках, одинарных или двойных - неважно
// let myString = "Hello world!";
// \t - табуляция, \n - перенос на следующую строку
//let myString = "Hello \"my\" world!"; обратными слэшами можно экранировать кавычки

// console.log('Hello "my" friends!');

// оператор + будет в роли канкатенации если один из типов строка
// console.log(5 + "10");

// let str = " Hello my friends!";
// console.log(myString + str);

/*
//length - возвращает количетсво символов с пробелами без кавычек
let str = "Hello my Friends!";
console.log(str.length);

// метод toUpperCase - переведет всю строку в верхний регистр
console.log(str.toUpperCase());
// метод toLowerCase - переведет всю строку к нижнему регистру
console.log(str.toLowerCase());
// метод charAt - возвращает букву, индекс которой казали в скобках, НО этот метож давно не используют - есть альтернатива
console.log(str.charAt(1));
// аналог метода charAt - квадратные скобки
console.log(str[0]);

// метод substring(index) - вернет подстроку начиная с индекса указанного в скобках
console.log(str.substring(6));
// второй необязательный параметр метода substring - до какой буквы
console.log(str.substring(9, 15));
// метод slice - аналог метода subsring
console.log(str.slice(6));
// отличие метода slice можно указать отрицательное значение, что означает с конца -8 - 8 символов с конца
console.log(str.slice(-8));
// метод substr в скобках указываем с какого символа начать и сколько символов нужно
console.log(str.substr(6, 9));
//эти методы часто используются при работе со строками и не меняют исходную строку, а возвращают новую
console.log(str); */
// let str = "Hello my Friends!";
//метод indexOf нужен для поиска подстроки, вернет индекс первого символа из найденной подстркои, если буквы или символа в строке нет, то получим -1
// console.log(str.indexOf("Friends"));
// метод replace нужен для замены подстроки, где 1 параметр - то, что нужно изменить, 2 параметр - на что нужно изменить
// console.log(str.replace("my Friends", "World!"));

// let str = "apple, kiwi, orange";
// метод split - разбивает строку на массив
// при перечислении , нужно определить какой может быть разделитель и указать его в разделителе
// console.log(str.split(", "));
