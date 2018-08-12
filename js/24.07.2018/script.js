
/*function Dog(name) {
    this.name = name;
}

Dog.sayHello = function() {
    console.log('Hello, I am' + this.name);
};

console.log(Dog.sayHello());

var dog = new Dog('Bruno');
console.log(dog);

console.log(Dog.sayHello.call(dog));*/



/*function greet(person) {
    if (person.name = 'amy' ) {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}

console.log(greet({name: 'amy'}));*/

/*let dog = {
    name: 'doggo',
    sayName() {
        console.log(this.name)
    }
};
let sayName = dog.sayName;
sayName.call(dog);*/

/*let dog = {
    name: 'doggo',
    sayName() {
        console.log(this.name)
    }
};
dog.sayName();*/

/*function Dog (name) {
    this.name = name
}
Dog.bark = function () {
    console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()*/

/*function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function () {
    console.log((this.name + 'say woof'));
};

let fido = new Dog('fido');
fido.bark()*/

/*class Dog {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    bark () {
        console.log((`${this.name}  ${this.weight} say woof`));
    }
}

let fido = new Dog('fido',50);
fido.bark();*/


/*function isBig (thing) {
    if (thing == 0 || thing == 1 || thing == 2) {
        return false
    }
    return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true*/



//immutable arrays

/*const heroes = [

  { name: 'Wolverine', isReady: false, /!* ... others properties ... *!/ },
{ name: 'Deadpool', isReady: false,  /!* ... others properties ... *!/ },
{ name: 'Magneto', isReady: false,   /!* ... others properties ... *!/ },
{ name: 'Gandalf', isReady: true,   /!* ... others properties ... *!/ }


];

let newArr = heroes.map(hero => {
    const newHero = Object.assign({}, hero);
    newHero.isReady = true;
    return newHero
});

console.log(newArr);*/




