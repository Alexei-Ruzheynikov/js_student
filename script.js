// let money;
// let income;
// let addExpenses;
// let deposit;
// let mission;
// let period;
// alert("Любой текст модно вывести в модальном окне");
// console.log("Любой текст в консоли");

let money = 50000;
let income = "Фриланс";
let addExpenses = "Интернет, Оборудование, Обучение";
let deposit = true;
let mission = 600000;
let period = 12;

// console.log(typeof money);
// console.log(typeof income);
// console.log(typeof deposit);
// console.log(addExpenses.length);
// console.log("Период равен " + period + " " + "месяцев");
// console.log("Цель заработать " + mission + " рублей");
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(", "));

let budgetDay = money / 30;
// console.log(budgetDay);

// Домашнее задание #3

money = prompt("Ваш месячный доход?");
console.log("Месячный доход " + money);
addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
console.log("Возможные расходы " + addExpenses);
deposit = confirm("Есть ли у вас депозит в банке?");
console.log("Банковский депозит " + deposit);

let expenses1 = prompt("Введите обязательную статью расходов");
console.log("Первая статья расходов " + expenses1);
let amount1 = prompt("Во сколько это обойдётся?");
console.log("Во сколько обойдется первая статья расходов " + amount1);
let expenses2 = prompt("Введите обязательную статью расходов");
console.log("Вторая статья расходов " + expenses2);
let amount2 = prompt("Во сколько это обойдётся?");
console.log("Во сколько обойдется вторая статья расходов " + amount2);
let budgetMonth;
console.log(
  "Месячный бюджет с учетом расходов " +
    (budgetMonth = money - amount1 - amount2)
);
let missionAchieved = mission / budgetMonth;
console.log("Период равен " + Math.ceil(missionAchieved) + " месяцам");
budgetDay = budgetMonth / 30;
console.log("Дневной бюджет " + budgetDay);
if (budgetDay >= 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay <= 1200) {
  console.log("У вас средний уровень дохода");
} else if (budgetDay <= 600 && budgetDay >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log("Что-то пошло не так");
}
