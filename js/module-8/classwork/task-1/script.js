function CalcConstructor (){}

CalcConstructor.prototype.getValue = function () {
    this.a = +prompt('enter a number');
    this.b = +prompt('enter b number');
    if(isNaN(this.a) || isNaN(this.b)){
        return alert('number incorrect');
    }
    console.log(this.a, this.b);
    console.log(this);
    let a = document.querySelector('#a');
    a.textContent = `your first number ${this.a}`;
    let b = document.querySelector('#b')
    b.textContent = `your second number ${this.b}`

};

CalcConstructor.prototype.sum = function () {
    let sum = document.querySelector('#sum');
    sum.textContent = `sum: number a + number b = ${this.a + this.b}`;
    console.log(this.a, this.b);
    console.log(this)
};

CalcConstructor.prototype.minus = function () {
    let minus = document.querySelector('#minus');
    minus.textContent = this.a - this.b;
};

CalcConstructor.prototype.mult = function () {
    let mult = document.querySelector('#mult');
    mult.textContent = this.a * this.b;
};

CalcConstructor.prototype.divide = function () {
    let divide = document.querySelector('#divide');
    divide.textContent = this.a / this.b;
};
CalcConstructor.prototype.pow = function () {
    let pow = document.querySelector('#pow');
    pow.textContent = Math.pow(this.a, this.b)
};


let calculator = new CalcConstructor();

let start = document.querySelector('.get-Value');

start.addEventListener('click', calculator.getValue.bind(calculator));

document.querySelector('.sum').addEventListener('click', calculator.sum.bind(calculator));
console.log(calculator);

document.querySelector('.minus').addEventListener('click', calculator.minus.bind(calculator));

document.querySelector('.mult').addEventListener('click', calculator.mult.bind(calculator));

document.querySelector('.divide').addEventListener('click', calculator.divide.bind(calculator));

document.querySelector('.pow').addEventListener('click', calculator.pow.bind(calculator));

