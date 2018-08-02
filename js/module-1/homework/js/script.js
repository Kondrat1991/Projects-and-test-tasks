//Integracy


//Question 1

/*var x = 1;
function test() {
    console.log('first log',x);
    var x = 2;
}
console.log('first task',test());*/

//Answer 1- undefined,undefined

// Question 2

/*var a = {},b = {index:1}, c = {index:2};
a[b] =1;
a[c] = 2;
console.log('second task',a[b]);*/

//Answer-2

//Question 3

/*console.log(false == '0'); //true
console.log((1 || 2));//1
console.log((1 && 2));//2
console.log((1 + 2 + '3'));//33*/

// Question 4

/*console.log(1);
setTimeout(function () {
    console.log((2));
},1000);

setTimeout(function () {
    console.log((3));
},0);
console.log(4);*/

//Answer 1,4,3,2

//Question 5

/*function Dog(name) {
    this.name = name;
}
Dog.sayHello = function() {
    console.log('Hello, I am' + this.name);
};

var dog = new Dog('Bruno');
dog.sayHello();*/

//Answer - dog.sayHello is not a function

//Question 6

/*var dog = {
    name: 'Frodo',
    sayName: function () {
        console.log(this.name);
    }
}
var dogNameFunction = dog.sayName;

console.log(dogNameFunction());*/

//Answer  -undefined

//Question 7

/*console.log((0.1 + 0.2));*/

//Answer -0.30000000000000004

//Question 8

/*console.log(typeof null);//object
console.log(typeof  NaN);//number*/


// Question 9

/*new Promise((resolve, reject) => {
    reject()
}).then(
    () => console.log('Success 1'),
    () => console.log('Error 1'))
    .then(
        () => console.log('Success 2'),
        () => console.log('Error 2')
    );*/

//Answer - Error 1, Success 2

//Question 10

/*'use strict'
var x =y= 3;
console.log(y);*/

//Answer- y is not defined

//Second Block

// Question 1 Функція яка міняє порядок слів у реченні

/*let sentence = 'The quick brown fox jumps over lazy dog';

let reverse = (sentence)=> sentence.split(" ").reverse().join(' ');
console.log(reverse(sentence));*/

//Answer dog lazy over jumps fox brown quick The

//Question 2
//Напишіть функцію яка додає числа яка працює за принципом add(3)(4) вертає 7

/*const add = (a) => {
    let sum = a;
    const func = (b)=> {
          sum += b;
         return func;
    };
    func.valueOf = () => sum;
    return func;
};
console.log(add(3)(4));*/

//End

//Question 3 Перепишіть код з використанням синтаксису ES6

/*function(height, color){
    var height = height ||50;
    var color = color ||'red';
    ...
}*/

//Answer

/*function newFunc(height = 50, color = 'red') {
    console.log(height);
    console.log(color);
}

newFunc();*/


//Question 4 Перепишіть код з використанням синтаксису ES6

/*var _this = this;
$('btn').click(function (event) {
    this.sendData(event)
});*/

//Answer

/*document.querySelector('btn').addEventListener('click', function (_this = this) {
    _this.sendData('click');
} );*/

//Question 5 Дано масив цілих чисел arr. Потрібно обчислити його суму не використовуючи оператори циклу

//Answer

/*let arr = [1,2,3,4,5];
let result = arr.reduce((curr,next)=> curr +next);
console.log(result);*/

//Question 6 написати функцію вищого порядку яка приймає на вхід функцію f,що має довільну кількість параметрів  і повертає функцію, результат якої буде протилежний результату f;

//Answer Я не впевнений, чи це правильно, треба ж передати функцію, а не змінну.

/*let normal = function func1(a,b,c) {
    console.log(arguments);
     return Array.from(arguments);
     };

function revert(normal) {
    return normal.map(function (el) {
        return !el;
    })
}
console.log(revert(normal(true,true,true)));*/

//End

//Question 7  Наведену нижче функцію перепишіть із використанням синтаксису async/await;

/*const fs = require('fs');
const util = require('util');

function printFileData(path, options) {
    util.promisify(fs.readFile)(path, options)
        .then(data => console.log(`Data from file ${path}: ${data}`))
        .catch(err => console.error(`Error: ${err}`))
}*/

//Answer

/*async function printFileData(path, options) {
    try {
        const response = await(
            util.promisify((fs.readFile)(path, options)));
        const data = (await console.log(`Data from file: ${response}`))
    } catch (err) {
        console.log(err);
    }
}*/

//End


// console.log(f('a', 'b', 'c'));


// // Question 1
// (() => {
//     for(var i = 0, len = 10; i < len; i++) {
//         setTimeout(() => {
//             console.log(i);
//         });
//     }
// })();
//
// // Question 2
// function B() {
//     console.log(this)
// }
//
// B();
// new B();
//
// // Question 3
// const arr = [10, 5, 50, 48];
//
// const sum = (arr) => {
//     return arr.reduce(function(sum, current) {
//         return sum + current;
//     }, 0);
// }
//
// // Question 4
// const $$ = function (selector) {
//
// }
//
// $$('li') instanceof Array === true // True
// $$('li') instanceof $$ === true // True
//
// $$('li').hide().map(node => return )


// (() => {
//     for(var i = 0, len = 10; i < len; i++) {
//         setTimeout(() => {
//             console.log(i);
//         });
//     }
// })();


// let arr = [1, 2, 3, 4, 5];
//
//
// let result = arr.reduce(function(sum, current) {
//     return sum + current;
// }, 0);
//
// const sum = (arr) => {
//      arr.reduce(function(sum, current){
//          sum + current;
//     }, 0);
// };
//
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(reducer);
//
// console.log(sum());


// how to use reduce;

/*let newArr = [0, 1, 2, 3, 4];

let result1 = newArr.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});

console.log(result1);

let result2 = newArr.reduce(function (prev, current, index, array) {
    return prev + current;
});

console.log(result2);*/


//
//
//
//
// //  console.log(a);
// // var a = 2;
// //
// //  console.log(b);
// // b = 3;
//
// // var hero = {
// //     _name: 'John Doe',
// //     getSecretIdentity: function (){
// //         return this._name;
// //
// //     }
// // };
// //
// // var stoleSecretIdentity = hero.getSecretIdentity;
// //
// // console.log(stoleSecretIdentity());
// // console.log(hero.getSecretIdentity());
//
//

//
// const a = 'qwertyuiop[]';
// const b = 'asdfghjkl;';
// const c = 'zxcvbnm,./';
// console.log(a.length);
//
// // second task
// const d = (a.length);
// const e =(b.length);
// const f =(c.length);
// console.log(d, e, f);
//
// // third task
// let g = (a.charAt(0));
// console.log(g);
//
// let h = (a[a.length-1]);
// console.log(h);
//
// let i = (b.charAt(0));
// console.log(i);
//
// let j = (b[b.length-1]);
// console.log(j);
//
// let k = (c.charAt(0));
// console.log(k);
//
// let l = (c[c.length-1]);
// console.log(l);
//
// // fourth task
// let m = (a.indexOf('['));
// console.log(m);
//
// let n = (a.indexOf(']'));
// console.log(n);
// // fifth task
// console.log(`first string ${a}, second string ${b}, three string ${c}, four string ${d}, fifth string ${e}, sixth string ${f}, seventh string ${g}, eigth string ${h}, ninth string ${i}, tenth string ${g}, eleventh string ${k}, twelfth string ${l}, thirteenth string ${m}, fourteenth string ${n}`);
// */
// function greet(person) {
//     if (person == { name: 'amy' }) {
//         return 'hey amy'
//     } else {
//         return 'hey arnold'
//     }
// }
//
// console.log(greet({name: 'amy'}));