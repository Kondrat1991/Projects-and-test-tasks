


/*var dog = {
    name: 'Frodo',
    sayName: function () {
        console.log(this.name);
    }
};

console.log(dog.sayName());

let puppy = {
    name: 'get',

};

let res = dog.sayName.call(puppy);
console.log(res);*/


/*function f1(a,b) {
    console.log(a, b);
}

let f2 = f1.bind(null,'foo');

console.log('f2 func',f2('bar', 'baz'));*/



/*function Person(name, lastname, born) {
    this.name = name;
    this.lastname = lastname;
    this.born = born;
    this.getAge = function getAge() {
        var today = new Date();
        var birthDate = new Date(this.born);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}



var iam = new Person('Yura', 'Fedot', 1990);

console.log(iam.getAge());*/


/*function getAge(DOB) {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

console.log(getAge("8/17/1991"));*/


/*
function f() {
    console.log(this);
}
*/

/*var o = {
    yo: f
};


console.log(o.yo());*/


/*function F() {
    console.log(this);
}

console.log(new F());

Object.create(null, {});*/




/*for(var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i*1000)
}*/


/*for(var i = 0; i < 10; i++) {
    setTimeout(function () {
        return function (){
            console.log(i);
        }

    }, i*1000)
}*/



//correct
/*for (var i = 0; i < 10; i++) {
    setTimeout((function (i) {
        return function () {
            console.log(i);
        }
    }) (i));
}*/





/*var o = {
    fn: function () {
        this.name = 'yura';
    }
};

console.log(o.fn());*/

/*function fn() {
    this.name = 'yura';
}

console.log(new fn);*/

/*var obj = {
    a:5,
    b: {
        c:10
    }
};

obj.__proto__ = {
    a:10,
    b: {
        c:20
    }
};*/

/*delete obj.a;
console.log(obj.a);

delete obj.a;
console.log(obj.a);

delete obj.b;
console.log((obj.b.c));



var b = obj.b;
console.log(b);

delete b.c;
console.log((obj.b.c));*/


/*for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }) (i)
}*/

/*var arr = [1,2];
var brr  = arr;
brr[0] = 42;

// brr = [42, 43];
console.log(arr[0]);*/

/*function bind(cb,context) {
return function () {
    cb.apply(context, arguments)
}
}

console.log(bind('gt', window));*/

/*let context = { name: "bar" };

// Функция, которая возвращает свойство «foo» контекста «this»
function returnFoo () {
    return this.name;
}

// Свойства не существует в текущей области видимости, поэтому undefined
console.log(returnFoo()); // => undefined

// Но если мы свяжем эту функцию с контекстом
let bound = returnFoo.bind(context);

// Свойство теперь в области видимости
console.log(bound());*/


/*
class Cat {
    constructor(catName) {
        this.name = catName;
    }

    getName () {
        return this.name
    }
}

class Bobcat extends Cat{
    constructor(catName, weight,color) {
        super(catName);

        this.weight = weight;
        this.color = color;
    }
}
let david = new Bobcat('Mursik', 10, 'white');

console.log(david.getName());

console.log(david);*/

/*
function B() {
    console.log(this); // 1
}

B();
new B();*/
/*
const a = [1,2,0,-11,-1, "11", "22"];

function f (a){
    return newArr = a.filter(value  =>  value > 0 &&typeof value  === "number");


}

console.log(f(a));*/

/*const b = [1,2,3];
let c = [...b];
console.log(c);

c.reverse();
console.log(c);

let d = [...b,...c];
console.log(d);*/

/*
const array = [1,2,[2,3,[12,[2,[22,[1,[22]]]]]],[21,[22]]];

const flatten = (array) => array.reduce((flat, toFlatten) =>  flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);

console.log(flatten(array));*/

/*
let foo = [];
foo.push(1);
foo.push(2);

console.log(foo.length);
 let res = "i'm a lasagna hog".split("").reverse().join("");

console.log(res);

console.log((window.foo || (window.foo = "bar")));*/
