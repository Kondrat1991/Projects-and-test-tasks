





// function greet(person) {
//     if (person == { name: 'amy' }) {
//         return 'hey amy'
//     } else {
//         return 'hey arnold'
//     }
// }
//
// console.log(greet({name: 'amy'}));
//
//
//
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
//

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
// // var x = 1;
// // function test() {
// //     console.log(x);
// //     var x = 2;
// // }
// //
// // console.log(test());
// //
// // var a = {},b = {index:1}, c = {index:2}
// // a[b] =1;
// // a[c] = 2;
// // console.log(a[b]);
// //
// // console.log((false == '0'));
// // console.log((1 || 2));
// // console.log((1 && 2));
// // console.log((1 + 2 + '3'));
//
// // console.log(1);
// // setTimeout(function () {
// //     console.log((2));
// // },1000);
// //
// // setTimeout(function () {
// //     console.log((3));
// // },0);
// // console.log(4);
//
// // let cat =  {
// //     vough: "1"
// // };
// // cat.sayHello();
//
// // var dog = {
// //     name: 'Frodo',
// //     sayName: function () {
// //         console.log(this.name);
// //     }
// // }
// // var dogNameFunction = dog.sayName;
// // console.log(dogNameFunction());;
//
//
//
// /*function Dog(name) {
//     this.name = name;
// }
// let dog = new Dog('Bruno');
// dog.sayHello = function() {
//     console.log('Hello, I am' + this.name);
// };
// dog.sayHello();*/
//
// // 'use strict'
// // var x =y= 3;
// // console.log(y);
//
// // new Promise( (resolve, reject) => {
// //     reject()
// // }  ).then(() => console.log('Success 1')),
// // () => console.log('Error 1')).then
//
//
// /*
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
