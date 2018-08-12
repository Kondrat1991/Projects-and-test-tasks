
//immutable array

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



/*(function() {
    var x = 1;

    function x() {};

    console.log(x);
})();*/


// var dog = {
//     name: 'Frodo',
//     sayName:  function sayName() {
//         console.log(this.name);
//     }
// };
//
// console.log(dog.sayName());
//
// let puppy = {
//     name: 'bobik',
//     func:dog.sayName
// };
//
// console.log(puppy.func());
/*let res = puppy.sayName();
console.log(res);

/*let res = dog.sayName.call(puppy);
console.log(res);*/


/*var obj = {
    a: 1
};

(function(obj) {
    obj = {
        a: 2
    };

})(obj);

console.log(obj.a);*/


/*var foo = 'foo';

(function bar () {
    console.log('in function bar');
})();

console.log(foo);*/


/*var x = 10;
function foo(a) {
    var b = 20;

    function bar(c) {
        var d = 30;
        return boop(x + a + b + c + d);
    }

    function boop(e) {
        return e * -1;
    }

    return bar;
}*/
/*
var moar = foo(5);*/ // Closure
/*

*/
/*moar(15);*/

/*var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

console.log(foo.x);*/
//undefined







//ha-ha classic
/*
for (var i = 0; i < 10; i++) {
    setTimeout((function (i) {
        return function () {
            console.log(i);
        }
    }) (i));
}*/

/*const foo = () => {
    var i = 0;
    const foo2 = (i) => {
        return (i);
    }
    console.log(i);
}

foo()*/



//two arrays
//const array = [1,2,[2,3,[12,[2,[22,[1,[22]]]]]],[21,[22]]];

/*const flatten = (array) => array.reduce((flat, toFlatten) =>  flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);

console.log(flatten(array));*/





//class prototyping


/*class Cat {
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

console.log(david.getName());*/

/*console.log(('123' > '7'));

console.log((null == 0));*/










