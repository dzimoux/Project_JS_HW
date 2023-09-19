function User (id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let ar = [

    new User(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(12322, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(14354, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(12322, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(122, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(22334, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(32134, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(2341, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(4324, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453),
    new User(756234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453)

    ]
// -------------------------------------

console.log(ar.filter(a => a.id % 2 === 0))

console.log(ar.sort((a,b) => a.id - b.id))

class Product{
    constructor (id, name, surname , email, phone, order){
        this.id = id
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let Client =
    [
       new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 33223),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 23123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 23123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453, 123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453,123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453,123123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453,123123123123),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453,342342342),
        new Product(1234, 'katya', 'prokopchuk', 'kat_123@gmail.com', 973475453,453245345245)
    ]

console.log(Client.sort((c,d) =>
c.order - d.order))









function constructorCar (model, brand, year, maxSpeed, engine){
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        return `We are going at speed ${maxSpeed}/hour`;
    };
    this.info = function (a){
        console.log(a)
    }
    this.increaseMaxSpeed = function (newSpeed){
        return `We are going at speed ${newSpeed}/hour`
    }

    this.changeYear = function (newValue){
return newValue;
    }


    this.addDriver = function (driver, age, company){
return `Hello, we have suggestion from ${this.brand} for model ${this.model}. It was created in ${this.year} year. Max speed ${this.maxSpeed}, engine is ${this.engine}
Driver ${driver} which age is ${age} is waiting for you in ${company} car.`
    }

}

let firstCar = new constructorCar('X6', 'BMW', 2023, 350, 3.3);


let secondCar = {
    model: 'GLS',
    brand: 'Mercedes',
    year: 2022,
    maxSpeed: 345,
    engine: 3.5
}

let newSpeed = {
    Speed: 400,
}

console.log(firstCar.increaseMaxSpeed(newSpeed.Speed))

console.log(firstCar.changeYear(1932))

console.log(firstCar.addDriver.call(secondCar, 'Sam Imrich', '34', 'Porsche'))




class BuildCar {
    function

    constructor(model, brand, year, maxSpeed, engine) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.drive = function () {
            return `We are going at speed ${maxSpeed}/hour`;
        };
        this.info = function (a) {
            console.log(a)
        }
        this.increaseMaxSpeed = function (newSpeed) {
            return `We are going at speed ${newSpeed}/hour`
        }

        this.changeYear = function (newValue) {
            return newValue;
        }


        this.addDriver = function (driver, age, company) {
            return `Hello, we have suggestion from ${this.brand} for model ${this.model}. It was created in ${this.year} year. Max speed ${this.maxSpeed}, engine is ${this.engine}
Driver ${driver} which age is ${age} is waiting for you in ${company} car.`
        }

    }


}


let firstCar2 = new constructorCar('X6', 'BMW', 2023, 350, 3.3);


let secondCar2 = {
    model: 'GLS',
    brand: 'Mercedes',
    year: 2022,
    maxSpeed: 345,
    engine: 3.5
}

let newSpeed2 = {
    Speed: 400,
}

console.log(firstCar2.increaseMaxSpeed(newSpeed2.Speed))

console.log(firstCar2.changeYear(1932))

console.log(firstCar2.addDriver.call(secondCar2, 'Sam Imrich', '34', 'Porsche'))




 class CinderClass {
     constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}




let cinderella = [
    new CinderClass('Olesya', 22, 39),
    new CinderClass('Olesya', 25, 38),
    new CinderClass('Olesya', 27, 35),
    new CinderClass('Olesya', 23, 34.5),
    new CinderClass('Olesya', 23, 36.5),
    new CinderClass('Olesya', 28, 35),
    new CinderClass('Olesya', 32, 37),
    new CinderClass('Olesya', 18, 37.5),
    new CinderClass('Olesya', 20, 38.5),
    new CinderClass('Olesya', 21, 39)

]

let prince = new CinderClass('Volodya', 27, 37)

for (let i = 0; i < cinderella.length; i++) {
    let coupleAr = [];
    const cinderElement = cinderella[i];
    if(cinderElement.footSize === prince.footSize){
        console.log(cinderElement,'efwwfd')
    }

}

console.log(cinderella.find((trueCin => trueCin.footSize === prince.footSize)))























