'use strict'

let 
    money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '')
;

let appData = {
    budjet: money,
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', '')
;

appData.expenses = a1 + ' : ' + a2;

console.log(appData);

alert('Ваш бюджет на 1 день составляет ' + (money / 30));