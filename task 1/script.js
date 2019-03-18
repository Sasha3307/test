'use strict'

let money, time;

money = prompt('Ваш бюджет на месяц?');

time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: prompt('Введите обязательную статью расходов в этом месяце') + ' : ' + prompt('Во сколько обойдется?'),
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);

alert('Ваш бюджет на 1 день составляет ' + (money / 30));