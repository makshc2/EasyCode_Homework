// 1. Присваивание:
//
// Записать в коротком виде:
// a +=10;
// b *=18;
// c -=10;
// x +=a;
// y *=z;
// i *=5y;
// Как возвести переменную в квадрат.
// x *=x;
//2. Арифметические операторы:
//Сравнить записи:
let a = 5;
console.log(a++); // в этом случае инкремент покажет в консоле старое значение переменной (5), и только потом увеличит ее на 1.
let a = 5;
console.log(++a);// в этом случае инкремент покажет в консоле уже новое значение увеличеное на 1 (6),
// т.к. он берет старое значение переменной, увеличивает его сразу, и потом передает.

//Как с помощью оператора % узнать четное ли число:
let x = 5 % 2; // Надо при помощи оператора % поделить данное число на любое четное число. (в нашем случае я взял 2).
// Если остаток от деления дает цифру больше 0 значит число нечетное,
// если же число четное то остаток при делении всегда будет 0;

//3.Условные операторы:
let result = 'hidden';
result = result == 'hidden' ? 'visible' : 'hidden';
console.log(result);

//Используя if, записать условие:
let num = 1;
if( num == 0 ){
    num = 1
} else if( num < 0 ){
    num = 'less then zero';
}else{
    num *= 10;
}
//Тоже самое, но тернарным оператором:
let num = 1;
num = num == 0 ? num = 1 : num < 0 ? num = 'less then zero' : num *=10;

// Конструкция switch... case:
let a = 'maxim';
switch (a) {
    case 'block' : console.log ('block');
    break;
    case 'none' : console.log('none');
    break;
    case 'inline' : console.log('inline');
    break;
    default : console.log ('other');
}
//4. Преобразование типов.
let a = 0 || 'string'; // 'string' т.к. оператор || запинается на первом true, 0 - false, строка - true;
let a = 1 && 'string'; // 'string' т.к. оператор && запинается на первом false, либо если все true, то выводит последний
// true. В нашем случае все true, а последний true  это 'string';
let a = null || 25; // 25 т.к. это будет первый true.
let a = null && 25; // null т.к. это будет первый false
let a = null || 0 || 35; // 35 т.к. это будет первый true.
let a = null && 0 && 35; // null т.к. это будет первый false, на первом же false, сравнение закончится.

//Что отобразится в консоли:
12 + 14 + '12'; //Ответ: '2612'. Cначала произойдет операция сложения между числами 12 + 14 = 26,
// а потом число  26 сложится со строкой '12' и станет строкой.
3 + 2 -'1';  //Ответ:4. Сложение 3 + 2 = 5. 5 - '1' = 4. т.к. минус преобразует строку '1' в число 1.
// (Оператор "-" работает только с числами)
'3' + 2 - 1; //Ответ:31. Сначала произойдет сложение строки с числом '3' + 2 = '32', а после этого минус преобразует строку '32' в число и отнимет 1.
// (Оператор "-" работает только с числами)
true + 2; //Ответ: 3 т.к. true = 1, оператор + приведет true к числу.
+'10' + 1; //Ответ: 11, т.к. + который стоит перед строкой преобразует ее в число.
undefined + 2; //Ответ: NaN т.к. undefined при численном преобразовании равен NaN, NaN + любое число = NaN.
null + 5; //Ответ: 5. Null при численном преобразовании всегда равен 0. 0 + 5 = 5.
true + undefined; //Ответ: NaN. true при численном преобразовании всегда равен 1, undefined  - NaN. 1 + NaN = NaN.

//5. Задачи на циклы:

//1.
let string = 'I am in the easycode';
let str = '';
for (let i = 0; i < string.length; i++){
    if(string[ i -1 ] == ' '){
        str += string[i].toUpperCase();
    }else{
        str += string[i]
    }
}
console.log(str);
//2.
let string = 'tseb eht ma i';
let str = '';
for(let i = string.length ; i >= 0; i--){
    str += string.charAt(i) ;
}
console.log(str);
//3.
let result = 1;
for(let i = 1; i <= 10; i++ ){
    result *= i;
}
console.log(result);
//4.
let result = 1;
let str = 'Считаем до 10и:';
for(let i = 1; i <= 10; i++){
    str += i;
}
console.log(str);
//5.
let string = 'JavaScript is a pretty good language';
let str = '';
for (let i = 0; i < string.length; i++){
    if(string[ i -1 ] == ' '){
        str += string[i].toUpperCase();
    }else{
        str += string[i].split(' ').join('');
    }
}
console.log(str);

//.6
let num = 1;
for(let i = 1; i <= 15; i++){
    if( i % 2 == 0){
        continue;
    }
    console.log(i);
}