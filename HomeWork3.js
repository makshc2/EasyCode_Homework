// Задача №1

function multiply() {
    let result = 1;
    for ( let i = 0; i < arguments.length; ++i ){
        result *= arguments[i];
    }
    return arguments.length === 0 ? 0 : result;
}

multiply (1, 2, 3, 4, 5);

// Задача №3

function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString('test');

// Задача №4

function getCodeStringFromText(str) {
    let string = '';
    for ( let i = 0; i < str.length; i++ ) {
        string += str.charCodeAt(i) + " ";
    }
    return string;   
}

getCodeStringFromText('hello');

// Задача №6

function getResult(arr, handler){
    let str = 'New value: ';
    for ( let i = 0; i < arr.length; i++ ) {
        str += handler(arr[i]);
    }
    return str;
}

// 1.
getResult(['my','name','is','Trinity'], array => array[0].toUpperCase() + array.substr(1));

// 2.
getResult(['10','20','30'], array => array * 10 + ',');

//3.
getResult([{age:45, name:'Jhon'},{age:20, name:'Aaron'}], array => (`${array.name} ${'is'} ${array.age} ${', '}`));

//4.
getResult(['abc','123'], array => array.split('').reverse().join('') + ',');

// Дополнительная задача на метод every для массива

function every (arr, handler) {
    for ( let i = 0; i < arr.length; i++ ){
        if(!handler(arr[i])) return false
    }
    return true;
}
every([1, 2, 'string'], el => typeof el === 'number');


//метод some немного улучшеный
function some (arr, handler) {
    for ( let i = 0; i < arr.length; i++ ) return !!handler(arr[i])
}

some([1, 2, 3], el => typeof el === 'number');



