let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = "Фриланс";
let addExpenses = "Интернет, Оборудование, Обучение";
let deposit = true;
let mission = 600000;
let period = 12;

let budgetDay = money / 30;
// console.log(budgetDay);

// Домашнее задание #3

addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
deposit = confirm("Есть ли у вас депозит в банке?");

// let expenses1, expenses2;
let expenses = [];

// Домашнее задание #5
let start = function () {
  money = prompt("Ваш месячный доход?");
  // while (isNaN(money) || money.trim() === "" || money === null) {
  //   money = prompt("Ваш месячный доход?");
  // }

  // while (isNaN(parseFloat(money)) {
  //   money = prompt("Ваш месячный доход?");
  // }
  while (!isNumber(money)) {
    money = prompt("Ваш месячный доход?");
  }
};
start();

let showTypeOf = function (data) {
  console.log(typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    // if (i === 0) {
    //   expenses1 = prompt("Введите обязательную статью расходов");
    // } else if (i === 1) {
    //   expenses2 = prompt("Введите обязательную статью расходов");
    // }
    expenses[i] = prompt("Введите обязательную статью расходов");

    sum += +prompt("Во сколько это обойдётся?");
  }
  console.log(expenses);
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log("Расходы за месяц " + expensesAmount);

console.log(addExpenses.toLowerCase().split(","));

let accumulatedMonth = function getAccumulatedMonth() {
  return money - expensesAmount;
};
// console.log("Накопления за месяц: ", accumulatedMonth());

let getTargetMonth = function () {
  return mission / accumulatedMonth();
};
console.log("Сроки достижения цели в месяцах ", getTargetMonth());

budgetDay = function () {
  return accumulatedMonth() / 30;
};
console.log("Бюджет на день ", budgetDay());

let getStatusIncome = function () {
  if (budgetDay() >= 1200) {
    return "У вас высокий уровень дохода";
  } else if (budgetDay() >= 600 && budgetDay() <= 1200) {
    return "У вас средний уровень дохода";
  } else if (budgetDay() <= 600 && budgetDay() >= 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else {
    return "Что-то пошло не так";
  }
};

console.log(getStatusIncome());

//удалил из кода переменную budgetMonth, вычисления и выводы с ней и прочие выводы
