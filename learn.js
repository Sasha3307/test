// Условия
/*let num = 50; 

if (num < 49) {
	console.log('Неверно');
} else if (num > 100) {
	console.log('Много');
} else {
	console.log('Верно');
};

(num == 50) ? console.log('Верно') : console.log('Неверно');// условие ? соблюдается : не соблюдается

switch (num) {
	case num < 49:
		console.log('Неверно');
		break;// обязательно ставить для выхода из условия. в противном случае будет выполняться бесконечно
	case num > 100:
		console.log('Много');
		break;
	case 50:// условие на момент "равно" прописывается в таком формате
		console.log('Верно');
		break;
	default: // не обязательно ставить. на случай если ни одно из условий не соблюдается
		console.log('Что-то пошло не так');
		break;
};
*/
// Циклы

/*
let num = 50; 
while (num < 55) {// в то время как
	console.log(num);
	num++;// увеличить на 1
}//50 51 52 53 54
*/

/*
// Если нам нужно что-то сделать, а затем проверить условие
let num = 50;
do {// сделай что-то
	console.log(num);
	num++;
}
while (num < 55);
*/
/*
for (let i = 1; i < 8; i++) {// 1. начало цикла / 2. условие при котором цикл остановится / 3. что будет происходить каждый раз в новом цикле
	console.log(i);
} // 1 2 3 4 5 6 7

for (let i = 1; i < 8; i++) {
	if (i == 6) {
		break;
	};
	console.log(i);
} // 1 2 3 4 5

for (let i = 1; i < 8; i++) {
	if (i == 6) {
		continue;// пропустит 6
	};
	console.log(i);
} // 1 2 3 4 5 7
*/

// Функции


/*
let num = 20; //глобальная
// имя функции должна быть глаголом
function showFirstMessage(text) {
	alert(text);
	num = 10; // видна только в функции. локальная
	let num; // это уже новая переменная
	console.log(num);// сначала ищет внутри функции

}
showFirstMessage('hello');
console.log(num); // 10
*
console.log(calc(3, 4)); // можно вызывать функцию до кода. function declaration

function calc(a, b) {
	return (a + b);
}

console.log(calc(3, 4));

function retVar() {
	let num = 50;
	return num;
}

let anotherNum = retVar();
console.log(anotherNum);


let calc2 = function(a, b) {// function expression функциональное выражение. функция создается только тогда, когда код к ней доходит
	return (a + b);
};

// ES6

let calc3 = (a,b) => a+b;
let calc4 = (a,b) => {a+b};

console.log(calc3(3,4));

let str = 'test';
console.log(str.length);

console.log(str.toUpperCase()); // буквы заглавными
console.log(str.toLowerCase()); // буквы маленькими

let twelve = '12.2';
console.log(Math.round(twelve)); // 12

let twelve2 = '12.2px';
console.log(parseInt(twelve2)); // 12
console.log(parseFloat(twelve2)); // 12.2

*/

// Callback-функции
/*
function first() {
	// что-то делаем
	setTimeout( function(){
		console.log(1);
	}, 500 );
}

function second() {
	console.log(2);
}

first(); // функция выполняется с задержкой в полсекунды
second();

function learnJS(lang, callback) {
	console.log('Я учу ' + lang);
	callback();
}

function done() {
	console.log('Я прошел 3-й урок');
}

learnJS('Javascript', function() {
	console.log('Я прошел 3-й урок');
})


learnJS('Javascript', done);

*/

// Объекты
/*
let options = {
	widht: 1024,
	height: 1024,
	name: 'test'
};

console.log(options.name);

options.bool = false; // добавить свойство

options.colors = {
	border: 'black',
	bg: 'red'
};

delete options.bool; // удалить свойство

console.log(options);

// цикл

// key - каждое свойство или метод из обьекта
// перебираем объект

for (let key in options) {
	console.log('Свойство ' + key + ' имеет значение ' + options[key]);
};

console.log(Object.keys(options).length); // сколько свойств у обьекта
*/



// Массивы и псевдомассивы
/*
let arr = ['first', 2, 3, 'four', 5];


//arr.pop(); // удаляет последний элемент
//arr.push('5'); // добавляет элемент в конец массива

//arr.shift(); // удаляет первый элемент
//arr.unshift('1'); // добавляет элемент в начало массива

/*
arr[99] = 99; // нельзя указывать номер елемента
console.log(arr.length); // 100

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
*/


// forEach - выполняет одну и ту же функцию к каждому элементу массива
// в скобках. не все обязательные
// item - каждый элемент из массива
// номер элемента
// массив
/*
arr.forEach(function(item, i, mass) {
	console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});


console.log(arr);

let mass = [1, 3, 4, 6, 7];

for (let key in mass) {
	console.log(key);// 0, 1, 2, 3, 4
}

for (let key of mass) {
	console.log(key);// 1, 3, 4, 6, 7
}

*/
/*
let ans = prompt('', ''),
	arr = [];

arr = ans.split(','); // разносит элементы по массиву разделенные запятой
//метод split(s), который позволяет превратить строку в массив, разбив ее по разделителю s.

console.log(arr);
*/
/*
let arr = ['dfdf', 'dfdf d', 'dfdf', 'gh'],
	i = arr.join(', '); // склеивает все в одну строку
console.log(i);
*/
/*
let arr = ['dfdf', 'dfdf d', 'dfdf', 'gh'],
	arrNum = [1, 21, 15, 4],
	i = arr.sort(), // выставляет по алфавиту
	y = arrNum.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}
console.log(arr);
console.log(arrNum);
*/

// Объектно Ориентированное Программирование (ООП)

let soldier = {
	health: 400,
	armor: 100
};

let john = {
	health: 100
};

john.__proto__ = soldier

console.log(john);
console.log(john.armor);






































































