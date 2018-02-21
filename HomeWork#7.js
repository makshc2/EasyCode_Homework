//this
//задача №1

const rectangle = {
    width: 10,
    height: 20,
    getSquare: function () {
        return this.width * this.height
    }
};

rectangle.getSquare();

// задача №2

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWidthDiscount: function () {
        return this.getPrice() - (this.getPrice() * parseInt(this.discount) / 100);
    }
};

price.getPrice();
price.getPriceWidthDiscount();

//Задача №3

getUserName = function () {
    return this.name;
};

const user = {
    name: 'Abraham',
    getName: getUserName
};

user.getName();

//Задача №4

let object = {
    height: 10,
    getHeightCount: function () {
        this.height = this.height + 1;
        return this;
    }
};

object.getHeightCount();


//Задача №5

const numerator = {
    value: 1,
    double: function () {
        this.value = this.value * 2;
        return this;
    },
    plusOne: function () {
        this.value = this.value + 1;
        return this;
    },
    minusOne: function () {
        this.value = this.value - 1;
        return this;
    }
};

numerator
    .double()
    .plusOne()
    .plusOne()
    .minusOne();

//Задача №6

// Данная запись равносильна const user = {...} и const otherUser = {...} т.е. два обьекта.
const user = {name: 'Abraham'},
      otherUser = {
          name: 'John',
          getName: function () {
               return this.name;
           }
        };

user.getName; // undefined потому, что у этого обьекта нет такого метода. Этот метод есть только у второго обьекта
// otherUser.
user.getName = otherUser.getName; // тут происходит "одалживание" метода у второго обьекта.
user.getName(); // т.к. сверху мы произвели одалживание метода, то у первого обьекта тоже появился
// такой метод и мы можем его вызвать. В результате мы получим имя из первого обьекта - Abraham
otherUser.getName(); // а тут мы сделали вызов метода у второго обьекта, результатом которого будет имя John.

//Задача №7

function getList () {
    return this.list;
}

let users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
}

getList();//в данном случае у нас будет undefined (потеря контекста), т.к. функция вызвана в глобальном окружении
users.getList = getList;// тут мы передаем контекст в нашу функцию
users.getList();// и вызываем ее, результатом будет вывод нашего массива, но можно сделать короче и проще
getList.call(users);// принудительно указываем функции какой контекст использовать, такой способ аналогичен примеру выше.

//Задача №8

const items = {
    price: 10,
    itemsCount: 30,
    getItems: function () {
        return this.price * this.itemsCount;
    }
}

items.getItems();

//Задача №9

const items = {
    price: 10,
    itemsCount: 30,
    getItems: function () {
        return this.price * this.itemsCount;
    }
},
    details = {
        price: 11,
        itemsCount: 20
    }

details.getItems = items.getItems;
details.getItems();

//Задача №10

let sizes = {
    width: 5,
    height: 10
}
getSquare = function () {
    return this.width * this.height;
};

getSquare.call(sizes);

//задача №11

let numbers = [4, 12, 0, 10, -2, 4];

Math.min.apply(null, numbers);

//задача №12

const element = {
        height: '15px',
        marginTop: '5px',
        marginBottom: '5px',
        getFullHeight: function () {
            return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
        }
    },
    block = {
        height:'5px',
        marginTop: '3px',
        marginBottom: '3px'
    }

element.getFullHeight();
element.getFullHeight.call(block);

//задача №13

let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();

//closure
//задача №1

getBigName(userName);

function getBigName(name) {
    name = name + '';
    return name.toUpperCase();
}

var userName = 'Ivan';
// результатом вызова этой функции будет 'UNDEFINED', т.к. переменная name не обьявлена,
// функция ее не находит в своем окружении - начинает искать ее снаружи функции, находит userName, но т.к. она обявлена
// уже после вызова функции результатом будет undefined, к нему применится верхний регистр.

//задача №2

function test() {
    var name = 'Vasiliy';
    return getBigName(userName);
}

function getBigName(name) {
    name = name + '';
    return name.toUpperCase();
}

var userName = 'Ivan';
test();

//каждая функция создает свое лексическое окружение.Функция test своим результатом возвращет функцию getBigName,
// аргумент userName в своем окружении она не находит, и начинает его искать снаружи, там она находит userName,
// принимает его и передает в getBigName(user), а там применяется метод toUpperCase(); и выводится 'IVAN'

//задача №3

var food = 'cucumber';

(function () {
    var food = 'bread';
    getFood();
})();

function getFood() {
    console.log(food);
}

//две функции создают свое лексическое окружение, при вызове функция getFood ищит переменную food, не находит внутри
// своего окруженияб начинает искать его в окружении где была создана функция и находит переменную food = 'cucumber'.
// переменную food = 'bread' из другого лексического окружения функция getFood не видит.

//задача №4

var dollar,
    getDollar;

(function () {
    var dollar = 0;
    getDollar = function () {
        return dollar;
    }
}());

dollar = 30;
getDollar();

// результатом вызова функции будет 0, т.к. getDollar возвращает переменную dollar, внутри своего окружения не находит,
// поднимается выше и находит переменную dollar внутри другой функции в окружении которой была вызвана функция getDollar.
// если бы переменная dollar не была обьявленна внутри анонимной функции, то функция getDollar поднялась бы еще выше по
// области видимости и нашла бы переменную var dollar, которой ниже было присвоено значение 30 и вывело бы 30.

//задача №5

var greet = 'Hello';

(function () {
    var text = 'World';
    console.log(greet + text);
}());

console.log(greet + text);

// Функция будет искать перемнную greet сначала в своем окружении и когда не найдет -
// будет искать в окружении в котором создана. Найдет greet = 'Hello' и выдаст результат 'HelloWorld'.
// Вторая консоль выдаст ошибку т.к. не найдет переменную text, потому, что она недоступна из этого лексического
// окружения.

//задача №5

let minus = (a = 0) => (b = 0) => a - b;

minus(10)(6);
minus(5)(6);
minus(10)();
minus()(6);
minus()();

//задача №6

function multiplyMaker(a) {
    let num = a;
    return function (b) {
        num *= b;
        return num;
    };
}

const multiply = multiplyMaker(2);

multiply(2);
multiply(1);
multiply(3);
multiply(10);

//задача №7

const module = (function () {

    let string = '';

    function setString(result) {
        if(typeof result === 'number'){
            string = '' + result;
        }else{
            string = result;
        }
    }
    function getString() {
        return string;
    }
    function getStringLength() {
        return string.length;
    }
    function getStringReverse() {
        return string.split('').reverse().join('');
    }
    return{
        setString,
        getString,
        getStringLength,
        getStringReverse
    }

})();

module.setString(1234567890);
module.getString();
module.getStringLength();
module.getStringReverse();

//задача №8

const calculator = (function () {

    let result;

    function setNum(value) {
        result = value;
        return this;
    }
    function plusNum(value) {
         result += value;
         return this;
    }
    function minusNum(value) {
        result -= value;
        return this;
    }
    function multiplyNum(value) {
        result *= value;
        return this;
    }
    function divideNum(value) {
        result /= value;
        return this;
    }
    function squareNum(value) {
        result *= result;
        return this;
    }
    function getNum() {
        console.log(result.toFixed(2));
    }
    return{
        setNum: setNum,
        plusNum: plusNum,
        minusNum: minusNum,
        multiplyNum: multiplyNum,
        divideNum: divideNum,
        squareNum: squareNum,
        getNum: getNum
    }

})();

calculator.setNum(10);
calculator.plusNum(5);
calculator.multiplyNum(2);
calculator.getNum();

calculator.setNum(10).squareNum(2).getNum();
