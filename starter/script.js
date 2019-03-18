// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teather'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
    };

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teather');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john);
console.log(jane.lastName);
console.log(mark.lastName);



// Object.create
/*
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teather';

var jane = Object.create(personProto,
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});



// Primitives vs objects


// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


// Lecture: Passing function as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);




// Lecture: Functions returning functions


function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teather') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teatherQuestion = interviewQuestion('teather');
var designerQuestion = interviewQuestion('designer');

teatherQuestion('John');
designerQuestion('John');

interviewQuestion('teather')('Mark');

*/


// Lecture: IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5); 
})();


//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck); 
})(5);




// Lecture: Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1990);
//retirement(66)(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        }  else if (job === 'teather') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
        console.log('Hello ' + name + ', what do you do?');
        }
    }
}
    
interviewQuestion('teather')('John');


// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teather',
    presentation: function(style, timeOfday) {
        if (style === 'formal') {
            console.log('Good ' + timeOfday + ', Ladies and gentelmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfday + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

console.log(john);
/*
john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');

*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/
/*
var question = [
    'Is JS the coolest programming language in the world?', 
    'What\'s the name of this courses\' teather?',
    'What does best describe coding?'
    ];

var answer0 = ['Yes', 'No'];
var answer1 = ['John', 'Michael', 'Jonas'];
var answer2 = ['Boring', 'Hard', 'Fun', 'Tedious'];

var rightAnswer0 = 0;
var rightAnswer1 = 2;
var rightAnswer2 = 2;

var score = 0;

function answerFn() {
    var q = Math.round(Math.random() * 2);

    var answer = eval('answer' + q);
    var rightAnswer = eval('rightAnswer' + q);
    
    console.log(question[q]);
    for (var a = 0; a < answer.length; a++) {
        console.log(a + ': ' + answer[a] + '\n');
    }
    var result = prompt(question[q]);
    if (result == rightAnswer) {
        console.log('Correct answer!');
        score += 1;
    } else if (result === 'exit' || result == null) {
        return;
    } else {
        console.log('Wrong answer. Try again:)');
    }
    console.log('Your current score is: ' + score);
    console.log('------------------------------');
    answerFn();
}

answerFn();
*/

var Car = function(name, speed) {
    this.name = name;
    this.speed = speed;
};

Car.prototype.year = function(year) {
    this.year = 2019 - year;
};
var reno = new Car('reno', 200);

reno.year(2010);


console.log(reno);