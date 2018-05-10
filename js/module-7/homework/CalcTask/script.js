class CalcConstructor {
    constructor() {
    }
    getValue () {
        this.a = +prompt('enter a number');
        this.b = +prompt('enter b number');
        if(isNaN(this.a) || isNaN(this.b)){
            return alert('number incorrect');
        }
        console.log(this.a, this.b);
        console.log(this);
        let a = document.querySelector('#a');
        a.textContent = `your first number ${this.a}`
        let b = document.querySelector('#b')
        b.textContent = `your second number ${this.b}`
    };
    sum () {
        let sum = document.querySelector('#sum');
        sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
        console.log(this.a, this.b);
        console.log(this)
    };
    minus () {
        let minus = document.querySelector('#minus');
        minus.textContent = this.a - this.b;
    };
    mult () {
        let mult = document.querySelector('#mult');
        mult.textContent = this.a * this.b;
    };
    static divide () {
        let divide = document.querySelector('#divide');
        divide.textContent = this.a / this.b;
    };
    static pow () {
        let pow = document.querySelector('#pow');
        pow.textContent = Math.pow(this.a, this.b)
    };


}
let calculator = new CalcConstructor();

let start = document.querySelector('.get-Value');

start.addEventListener('click', calculator.getValue.bind(calculator));

document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
console.log(calculator);

document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));

document.querySelector('.mult').addEventListener('click', calculator.mult.bind(calculator));

document.querySelector('.divide').addEventListener('click', CalcConstructor.divide.bind(calculator));

document.querySelector('.pow').addEventListener('click', CalcConstructor.pow.bind(calculator));










// function CalcConstructor (){}
//
// CalcConstructor.prototype.getValue = function () {
//     this.a = +prompt('enter a number');
//     this.b = +prompt('enter b number');
//     if(isNaN(this.a) || isNaN(this.b)){
//         return alert('number incorrect');
//     }
//     console.log(this.a, this.b);
//     console.log(this);
//     let a = document.querySelector('#a')
//     a.textContent = `your first number ${this.a}`
//     let b = document.querySelector('#b')
//     b.textContent = `your second number ${this.b}`
//
// };
//
// CalcConstructor.prototype.sum = function () {
//     let sum = document.querySelector('#sum');
//     sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
//     console.log(this.a, this.b);
//     console.log(this)
// };
//
// CalcConstructor.prototype.minus = function () {
//     let minus = document.querySelector('#minus');
//     minus.textContent = this.a - this.b;
// };
//
// CalcConstructor.prototype.mult = function () {
//     let mult = document.querySelector('#mult');
//     mult.textContent = this.a * this.b;
// };
//
// CalcConstructor.prototype.divide = function () {
//     let divide = document.querySelector('#divide');
//     divide.textContent = this.a / this.b;
// };
// CalcConstructor.prototype.pow = function () {
//     let pow = document.querySelector('#pow');
//     pow.textContent = Math.pow(this.a, this.b)
// };
//
//
// let calculator = new CalcConstructor();
//
// let start = document.querySelector('.get-Value')
//
// start.addEventListener('click', calculator.getValue.bind(calculator));
//
// document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
// console.log(calculator);
//
// document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));
//
// document.querySelector('.mult').addEventListener('click', calculator.mult.bind(calculator));
//
// document.querySelector('.divide').addEventListener('click', calculator.divide.bind(calculator));
//
// document.querySelector('.pow').addEventListener('click', calculator.pow.bind(calculator));






// function CalcConstructor() {
//      this.getValue = function() {
//         this.a = +prompt('enter a number');
//         this.b = +prompt('enter a number');
//
//         if (isNaN(this.a) || isNaN(this.b)); {
//             return alert('number is incorrect');
//          }
//          //console.log(b);
//      }
//     this.sum = function () {
//         let sum = document.querySelector('#sum');
//         sum.textContent = `number a + number b = ${this.a +this.b}`;
//     }
//     this.minus = function () {
//         let minus = document.querySelector('#minus');
//         minus.textContent = `${this.a - this.b}`
//     }
//
//     // this.mult = function () {
//     //     let mult = document.querySelector('#mult');
//     //     mult.textContent = `${this.a * this.b}`
//     // }
//
//     this.mult = () => {
//         let mult = document.querySelector('#mult');
//         mult.textContent = `${this.a * this.b}`
//     }
//
//     this.divide = () => {
//         let divide = document.querySelector('#divide');
//         divide.textContent = `${this.a / this.b}`
//     }
//
//     this.pow = () => {
//          let pow = document.querySelector(('#pow'));
//          pow.textContent = Math.pow(this.a, this.b);
//     }
// }
// let calculator = new CalcConstructor();
// let start = document.querySelector('.get-Value');
// start.addEventListener('click', calculator.getValue.bind(calculator));
//
// document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
// document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));
// document.querySelector('.mult').addEventListener('click', calculator.mult);
// document.querySelector('.divide').addEventListener('click', calculator.divide);
// document.querySelector('.pow').addEventListener('click', calculator.pow);
//
//
//
// //console.log(calculator);
//
// // function CalculatorConstructor(){
// //
// //     this.getValue = function (){
// //         this.firstNumber = +prompt('enter first number');
// //         this.secondNumber = +prompt('enter second number');
// //     }
// //     this.sum = () => {
// //         let result = this.firstNumber + this.secondNumber;
// //         console.log(result)
// //         const sum = document.querySelector('#sum');
// //         sum.textContent = `Result sum: first number + second number = ${result}`;
// //         console.log(this);
// //     }
// //     this.minus = function() {
// //         let result = this.firstNumber - this.secondNumber;
// //         console.log(result)
// //         const minus = document.querySelector('#minus');
// //         minus.textContent = `Result minus: first number - second number = ${result}`;
// //     }
// //     this.mult = function() {
// //         let result = this.firstNumber * this.secondNumber;
// //         console.log(result)
// //         const mult = document.querySelector('#mult');
// //         mult.textContent = `Result mult: first number * second number = ${result}`;
// //     }
// //     this.divide = function() {
// //         let result = this.firstNumber / this.secondNumber;
// //         console.log(result)
// //         const divide = document.querySelector('#divide');
// //         divide.textContent = `Result divide: first number / second number = ${result}`;
// //     }
// //     this.pow = function() {
// //         let result = Math.pow(this.firstNumber, this.secondNumber);
// //         console.log(result)
// //         const pow = document.querySelector('#pow');
// //         pow.textContent = `Result pow: first number pow second number = ${result}`;
// //     }
// // }
// //
// // let calculator = new CalculatorConstructor();
// //
// // let start = document.querySelector('.get-Value');
// // start.addEventListener('click', calculator.getValue.bind(calculator));
// //
// // let btnSum = document.querySelector('.sum');
// // btnSum.addEventListener('click', calculator.sum);
// //
// // let btnMinus = document.querySelector('.minus');
// // btnMinus.addEventListener('click', calculator.minus.bind(calculator));
// //
// // let btnMult = document.querySelector('.mult');
// // btnMult.addEventListener('click', calculator.mult.bind(calculator));
// //
// // let btnDivide = document.querySelector('.divide');
// // btnDivide.addEventListener('click', calculator.divide.bind(calculator));
// //
// // let btnPow = document.querySelector('.pow');
// // btnPow.addEventListener('click', calculator.pow.bind(calculator));
