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
        this.value = this.value* 2;
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


