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

let budgetDay = money / 30;
// console.log(budgetDay);

// Домашнее задание #3

money = +prompt("Ваш месячный доход?");
addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
deposit = confirm("Есть ли у вас депозит в банке?");

let expenses1 = prompt("Введите обязательную статью расходов");
let amount1 = +prompt("Во сколько это обойдётся?");
let expenses2 = prompt("Введите обязательную статью расходов");
let amount2 = +prompt("Во сколько это обойдётся?");
// console.log("Бюджет на день: " + budgetDay);
// if (budgetDay >= 1200) {
//   console.log("У вас высокий уровень дохода");
// } else if (budgetDay >= 600 && budgetDay <= 1200) {
//   console.log("У вас средний уровень дохода");
// } else if (budgetDay <= 600 && budgetDay >= 0) {
//   console.log("К сожалению у вас уровень дохода ниже среднего");
// } else {
//   console.log("Что-то пошло не так");
// }

// Домашнее задание #4
let showTypeOf = function (data) {
  console.log(typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth(a, b) {
  return a + b;
}
let result = getExpensesMonth(amount1, amount2);
console.log("Расходы за месяц: ", result);

console.log(addExpenses.toLowerCase().split(","));

function getAccumulatedMonth(a, b) {
  return a - b;
}
let accumulatedMonth = getAccumulatedMonth(money, result);
// console.log("Накопления за месяц: ", accumulatedMonth);

function getTargetMonth(a, b) {
  return a / b;
}
console.log(
  "Сроки достижения цели в месяцах ",
  getTargetMonth(mission, accumulatedMonth)
);

budgetDay = accumulatedMonth / 30;
console.log("Бюджет на день ", budgetDay);

let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    console.log("У вас средний уровень дохода");
  } else if (budgetDay <= 600 && budgetDay >= 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
  } else {
    console.log("Что-то пошло не так");
  }
};

getStatusIncome();

//удалил из кода переменную budgetMonth, вычисления и выводы с ней и прочие выводы
