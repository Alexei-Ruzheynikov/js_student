// let money;
// let income;
// let addExpenses;
// let deposit;
// let mission;
// let period;
// alert("Любой текст модно вывести в модальном окне");
// console.log("Любой текст в консоли");
"use strict";
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
// console.log(budgetDay);

// Домашнее задание #3

money = prompt("Ваш месячный доход?");
addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1 = prompt("Введите обязательную статью расходов");
let amount1 = prompt("Во сколько это обойдётся?");
let expenses2 = prompt("Введите обязательную статью расходов");
let amount2 = prompt("Во сколько это обойдётся?");
let budgetMonth = money - amount1 - amount2;
console.log("Бюджет на месяц: " + budgetMonth);
let missionAchieved = Math.ceil(mission / budgetMonth);
console.log("Цель будет достигнута за " + missionAchieved + " месяцев(-a)");
budgetDay = budgetMonth / 30;
console.log("Бюджет на день: " + budgetDay);
if (budgetDay >= 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay <= 1200) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay <= 600 && budgetDay >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log("Что-то пошло не так");
}
