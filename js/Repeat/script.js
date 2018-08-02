/*let lonC=lon1/2+lon2/2;
let latC=lat1/2+lat2/2;
let scaleX=(screenWidth-leftOffset-rightOffset)*(lon2-lon1);
let scaleY=(screenHeight-topOffset-bottomOffset)*(lat2-lat1);

let scale;
if(scaleX<scaleY)
    scale=scaleX;
else scale=scaleY;*/
//Linking
/*let a = {
    get: 'Out'
};

console.log(a);

let b = 'Hello World';
console.log(b);

b = a;

console.log(b);
a.wise = 'false;';
b.hereMan = "true";

console.log(b);
console.log(a);*/

//Object Methods
/*let person = {
    name:'John',
    sayHello: function () {
        return ('Hello' + this.name)
    }
};
person.sayHello();

let anotherPerson = {
    name: 'Galyna',

};

console.log(person.sayHello.call(anotherPerson));*/

// anotherPerson.sayHello = person.sayHello;
//
// console.log(anotherPerson.sayHello());;


//by call


/*let employee1 = {
    name:'John',
    position: 'Project manager',
    salary: 10000
};


let employee2 = {
    name: 'Galyna',
    position: 'Junior',
    salary: 8000
};

function promote(newPosition, salaryRice) {
  this.position = newPosition;
  this.salary += salaryRice;
    console.log(`${this.name}  is in  ${this.position}  and with salary ${this.salary}`);
    return this.name +'is in' + this.position + 'and with salary' + this.salary;

}

promote.call(employee1, 'DepHead', 15000)
promote.call(employee2, 'Middle', 20000);*/

//by apply

/*let employee1 = {
    name:'John',
    position: 'Project manager',
    salary: 10000
};


let employee2 = {
    name: 'Galyna',
    position: 'Junior',
    salary: 8000
};

function promote(newPosition, salaryRice) {
    this.position = newPosition;
    this.salary += salaryRice;
    console.log(`${this.name}  is in  ${this.position}  and with salary ${this.salary}`);
    return this.name +'is in' + this.position + 'and with salary' + this.salary;

}

promote.apply(employee1, ['DepHead', 15000])
promote.apply(employee2, ['Middle', 20000]);*/

//bind
/*
let employee1 = {
    name:'John',
    position: 'Project manager',
    salary: 10000
};


let employee2 = {
    name: 'Galyna',
    position: 'Junior',
    salary: 8000
};

function promote(newPosition, salaryRice) {
    this.position = newPosition;
    this.salary += salaryRice;
    console.log(`${this.name}  is in  ${this.position}  and with salary ${this.salary}`);
    return this.name +'is in' + this.position + 'and with salary' + this.salary;

}


let promoteHanna = promote.bind(employee2);


let result = promoteHanna( 'DepHead', 20700);
console.log(result);*/


/*let getAnswer = (function () {
    let answer = 42;

    return function inner() {

        return answer
    }

}());

console.log(getAnswer());*/


/*function Animal(name, species){
    this.name = name;
    this.species = species;
}
function getName(){
    return this.name ;
}
Animal.prototype.getName = getName;


function Dog(name){
    Animal.call(this, name, "Aban");
}

Dog.prototype = new Animal();

Dog.prototype.bark = function(){
    console.log(this.name +'is barking');
};*/









//ES5 standart



//Es6 standart

/*/*
function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function () {
    if (this.name === 'Aban') {
        alert(`Right, that's ${this.name}`);
        return this.name;
    }
    else {
        alert('Name is not correct')
    }

};

function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function () {
    if (this.name === 'Aban') {
        alert(`${this.name} is barking`);
        return (`${this.name} is barking`);
    }
};
Dog.prototype.__proto__ = Animal.prototype;

let name = prompt("Write Aban and nothing else");
var dog = new Dog(name);
dog.getName();
dog.bark();
*/

/*
class Animal {
    constructor(name) {
        this.name = name;

        this.getName = function () {
            if (this.name === 'Aban') {
                alert(`Right, that's ${this.name}`)
            }
            else {
                alert('Name is not correct')
            }

        }

    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        if (this.name === 'Aban') {
            alert(`${this.name} is barking`);
        }
    }
}
let name = prompt("Write Aban and nothing else");
dog = new Dog(name);
dog.getName();
dog.bark();
*/











/*console.log('foo' > 'bar');
console.log('14' < '2');

console.log(({} === {}));
console.log("A" > "B");*/

/*function f1(a,b) {
    console.log(a, b);
}

let f2 = f1.bind(null,'foo');

console.log('f2 func',f2('bar', 'baz'));*/

// let x = 7;
// console.log(++x);

// console.log(0.1 + 0.2 - 0.2 == 0.1);


// console.log('21' === 21);

/*if(true) {
    function f() {
        console.log("foo");
    }

} else {
    function f() {
        console.log('bar');
    }
}

f();*/

/*console.log(5 && 2 || 3);
console.log(2 && (5 || 3));
console.log((2 && 3) || 5);
console.log('A' > 'B');*/
//
// var a = {name: 'Vasya'};
// var b = {name: 'Vasya'};
//
// console.log((a === b));





