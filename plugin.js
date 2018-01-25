//1.Названия для переменных (var)

let price = 10;
const MAX_NUM = 100;
const USER_NAME = 'Maxim';
let userInfo = 'developer';

//Что будет в консоли:
console.log(test);
var test = "string";
//ответ: undefined - еффект всплытия.

var x = 'string';
var x = 'string #2';
console.log(x);
//ответ: string #2 - переменная х была перезаписана.

//2. Переменные (let, const)

//Что будет в консоли:
console.log(test);
let test = 'string';
//ответ: будет ошибка т.к. let не имеет эффекта всплытия,а console.log был раньше чем была обьявлена переменная.

const x = 'string';
x = 'string #2';
console.log(x);
//Ответ: будет ошибка, т.к. переменную const нельзя изменять. Поэтому попытка ее перезаписать выдаст ошибку.

let someVariable = 15;
let someVariable = 10;
//ответ: будет ошибка, т.к. два одинаковых let`a не может быть в одном блоке.

// 3. Строки

let string = 'some test string';
let value;
value = string[0] + string[string.length-1]; //задание 1
value = string[0].toUpperCase() + string.slice(1,-1) + string[string.length-1].toUpperCase(); //задание 2
value = string.indexOf('string'); //задание 3
value = string.indexOf(' ', 5); //задание 4
value = string.substr(4, 4); //задание 5
value = string.slice(4, 9); //задание 6
value = string.slice(0, -6); //задание 7
// задание 8
let string = 20 + '' + 16;

//4.Числа

// задание 1

let number = Math.PI.toFixed(2);
// задание 2
const maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
const minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log('Максимальное число:', maxNumber, 'Минимальное число:', minNumber);
// Задание 3
//a.

let randNum = Math.random().toFixed(2);
//b.
let x = 27;
let randNum = Math.round(Math.random()*x);
//Задание 4
let result = ((0.6 * 10 + 0.7 * 10) / 10);
//Задание 5

let num = parseInt('100$');

//5. Oбъекты
// задание 1
let infoObj ={
    product:'iphone'
};
// задание 2
infoObj.price = 1000;
infoObj.currency = 'dollar';
// задание 3
infoObj.detalis = {};
infoObj.detalis.model = '7s';
infoObj.detalis.color = 'black';

console.log(infoObj);