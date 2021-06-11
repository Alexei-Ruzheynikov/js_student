"use strict";

// lection04//
// Такую функцию можно вызывать до и после ее объявления
// function outputMessage() {
//   console.log("Hello world");
// }
// // вызываем функцию - круглые скобки обязательные
// outputMessage();
//2 способ вызова функции через переменную, такую функцию можно вызвать только после ее объявления
// const consoleMessage = function () {
//   console.log("Hello, friend!");
// };
// consoleMessage();
// //3 способ с помощью конструктора - очень редко используется
// const alertMessage = new Function('alert("Hi!")');
// alertMessage();
//негласное правило функций - 1 функция - 1 действие
// параметры функций
// function outputMessage(name, age) {
//   console.log("Hello " + name);
//   console.log("My age: " + age);
// }
// outputMessage("Max", 30);
//переменные в функции нельзя использовать внешне, поэтому их нужно объявлять вне функции
// let res = 0;
// const sum = function (a, b) {
//   res = a + b;
//   console.log(a + b);
// };
// // переменная res примет значения, только после вызова функции
// console.log(res);
// sum(3, 5);
// console.log(res);
// const sum = function (a, b) {
//   return a + b;
// };
// let res = sum(3, 5);
// console.log("res: ", res);

// const sum = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// let res = sum(3, 5, 4, 4, 4, 3, 6);
// console.log("res: ", res);

//функции дз №3
// let showTypeOf = function (data) {
//   console.log(typeof data);
// };
// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);
// //функция дз №3. Чистая функция не должна ничего выводить в консоль
// // вместо console.log написать return
// let getStatusIncome = function () {
//   //здесь цикл дневного дохода
// };
// // при вызове функции оборачиваем ее в console.log
// console.log(getStatusIncome());

//Продолжение лекции- чистые, анонимные и callback функции
//Если после function - есть имя - то это именованная функция, в остальных случаях - она анонимна
// const sum = function (a, b) {
//   return a + b;
// };
//анонимная онструкция - с конструктором
// const sum2 = new Function("a", "b", "return a + b");
// console.log(sum);
// console.log(sum2);
//если после function есть имя, то функция именованная
// const sum3 = function sum3(a, b) {
//   return a + b;
// };
// console.log(sum3);
//анонимная функция хранится в памяти переменной, анонимная функция присваивается по ссылке в переменную

//анонимная функця может вызывать сама себя-для этого ее записывают в скобках и скобки в конце для вызова самой функции
// (function () {
//   console.log("Hello");
// })();
// callback функции - когда функции могут вызываться внутри функций(Еще называется - функция обратного вызова)
//Пример №1
// const doNum = function (a, b, callback) {
//   if (typeof a === "number" && typeof b === "number") {
//     callback(a, b);
//   }
// };
// doNum(5, 10, function (a, b) {
//   console.log(a + b);
// });
// function mult(a, b) {
//   console.log(a * b);
// }
// doNum(3, 5, mult);
// function one(callback) {
//   console.log("Делаем запрос на сервер");
//   setTimeout(function () {
//     console.log("Получаем данные от сервера");
//     callback();
//   }, 200);
// }
// function two() {
//   console.log("Выводим на страницу");
// }
// one(two);

//Детерминированные функции - зависят только от входных данных
// function foo(a, b) {
//   const sum = a + b;
//   return sum;
// }
// console.log(foo(2, 3));
// console.log(foo(2, 3));
// console.log(foo(2, 3));
//Эта функция перестает быть чистой, т.к меняет значение x, а значит имеет побочный эффект
// let x = 5;
// console.log("x: ", x);
// function foo(a, b) {
//   const sum = a + b;
//   x += sum;
//   return sum;
// }
// console.log(foo(2, 3));
// console.log("x: ", x);
//Эта функция не чистая т.к использует внешнюю переменную
let x = 5;
function foo(a) {
  const sum = a + x;
  return sum;
}
console.log(foo(2));

//чистая функция должна быть детерменированная - тоесть зависеть только от входных данных и не должна иметь побочных эффектов, тоесть не должна изменять входные данные и не изменять все что вне функции
//чистая функция похожа на математическую, например квадрат числа вернет всегда одно и то же число

//конец 4 лекции
//вызывает модальное окно ок или закрыть
// confirm();
//выведет true в консоль если нажать ок и false если отмена
// console.log(confirm("Тебе есть 18 лет?"));

// confirm можно задать в переменную и посмотреть переменную
// let question = confirm("Тебе есть 18 лет?");
//prompt - появляется модальное окно с текстом и инпутом, и то что введут, будет значением переменной, все значения от пользователя будут типа - строка
// второй параметр prompt - значение, которое будет по умолчанию
// при нажатии отмена в prompt - вернет значение null
// let question2 = prompt("Сколько тебе лет?");
// +prompt - тип данных будет число, но если будет слово, то вернет NaN в этом случае
// let question2 = +prompt("Сколько тебе лет?");

// console.log(typeof question2);
/*
console.log(5 + "5"); // тип даных приведет - к строке
console.log(typeof (5 + "5"));
// тип данных приведет - числу
console.log(typeof (5 - "5"));
console.log(typeof (5 - "5"));
console.log(typeof (5 / "5"));
// если тип данных нельзя преобразовать - получим ошибку вычисления - NaN
console.log("js" / "5");

//преобразование типов с помощью оператора сравнения
console.log(5 == "5");
console.log(Boolean(5)); // явное преобразование в булеан тип
console.log(!!5); //true - тоже преобразование в булеан тип

console.log(typeof String(10)); // конструктор преобразования данных в тип строка
console.log(typeof (10 + "")); // сложить с пустой строкой - преобразование в строку
// toString - метод, работающий с числами и булиновыми значениями - приведет к типу данных строка, нужно ставить пробел чтобы работало иои использовать 2 точки
console.log(typeof (10).toString());

//чтобы преобразовать значение в число
console.log(typeof Number("33"));
console.log(typeof +"10"); // тернарный оператор + преобразует в число
*/
/*
//умножение на 1 приведет к типу данных число
let n = "10";
n *= 1;
console.log(typeof n);
// parseInt - выведет число пока оно есть, parseFloat - выведет с точкой / до букв
// parseInt вторым параметром можно указать двоичную систему
console.log(parseInt("10 px"));
console.log(parseFloat("10.5 px"));
*/
/*Если (жарко) {
    одеваем шорты;
    одеваем футболку;
} иначе {
    одеваем джинсы;
    одеваем кофту;
}
*/
/*
let n = 3;
if (n === 5) {
  console.log("команда 1");
} else if (n === 4) {
  console.log("команда 2");
} else {
  console.log("команда 3");
}
// switch - всегда проверяет на строгое соответствие
switch (n) {
  //группировка case
  case 3:
  case 4:
  case 5:
    console.log("3 - 5");
    break;
  case 6:
    console.log(6);
    break;
  default:
    console.log("не верно");
}

let result = n === 4 ? "верно" : "не верно";
console.log("result:", result);
*/
/*
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
console.log(budgetDay); */

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
