const menu = {
    size: {
        small: {
            name: 'small',
            price: 100,
            calories: 100,
        },
        large: {
            name: 'large',
            price: 250,
            calories: 350,
        }
    },
    fillings: {
        cheese: {
            name: 'cheese',
            price: 15,
            calories: 50,
        },
        salad: {
            name: 'salad',
            price: 10,
            calories: 10,
        },
        potato: {
            name: 'potato',
            price: 10,
            calories: 50,
        },
        cucumber: {
            name: 'cucumber',
            price: 20,
            calories: 30,
        },
        humbug: {
            name: 'humbug',
            price: 30,
            calories: 50,
        }
    },
    additives: {
        mayo: {
            name: 'mayo',
            price: 7,
            calories: 50,
        },
        ketchup: {
            name: 'ketcup',
            price: 6,
            calories: 40,
        },
        spice: {
            name: 'spice',
            price: 5,
            calories: 0,
        },
        mustard: {
            name: 'mustard',
            price: 5,
            calories: 5,
        }
    }
}


const BIG = menu.size.large,
    SMALL = menu.size.small,
    CHEESE = menu.fillings.cheese,
    SALAD = menu.fillings.salad,
    POTATO = menu.fillings.potato,
    CUCUMBER = menu.fillings.cucumber,
    HUMBUG = menu.fillings.humbug,
    MAYO = menu.additives.mayo,
    KETCHUP = menu.additives.ketchup,
    SPICE = menu.additives.spice,
    MUSTARD = menu.additives.mustard;

const arrMenu  = [BIG, SMALL, CHEESE, SALAD, POTATO, CUCUMBER, HUMBUG, MAYO, KETCHUP, SPICE, MUSTARD];

function Burger(size, filling) {
    this.size = size;
    this.fillings = [filling];
    this.additives = [];
    this.price = size.price + filling.price;
    this.calories = size.calories + filling.calories;
}

Burger.prototype.addAdditives = function (additive) {
    if(this.additives.includes(additive)){
        alert(`you already choose this additive ${additive.name}`)
        return;
    } else {
        this.additives.push(additive);
        this.price += additive.price;
        this.calories += additive.calories;
    }

}

Burger.prototype.showAdditives = function (){
    return this.additives.map(el => el.name);

}
Burger.prototype.showSize = function (){
    return this.size.name;
}

Burger.prototype.totalPrice = function (){
    return this.price;
}

Burger.prototype.totalCalories = function (){
    return this.calories;
}

Burger.prototype.cheeseburger = function (){
    return `You are welcome! Your ordered ${this.size.name} cheeseburger, total price ${this.price}uah,  ${this.calories}calories`;
}

Burger.prototype.removeAdditives = function (additive){
    return this.additives = this.additives.filter(el => el === additive ? null : el)
}

Burger.prototype.addFilling = function (ev) {
    let data = ev.currentTarget.dataset.fillings;
    let filling;
    // console.log(filling);
    for(let key in menu.fillings) {
        if(data === key) {
            filling = menu.fillings[key]
        }
        console.log(key);
    }
    console.log(this);
    if(!this.fillings.includes(filling)){
        this.fillings.push(filling)
        this.price += filling.price;
        this.calories += filling.calories;

    } else {
        alert('this filling add')
    }

}

Burger.prototype.showFilling = function () {
    return this.fillings.map( el => el.name);
}

Burger.prototype.removeFilling = function (filling) {
    if(this.fillings.length === 1){
        alert('you can\'t delete last filling')
        return;
    }
    this.price -= filling.price;
    this.calories -= filling.calories;
    return this.fillings = this.fillings.filter(el => el === filling ? null : el);
}
let cheeseburger = new Burger(BIG,CUCUMBER);
console.log(cheeseburger);
// cheeseburger.addAdditives(MAYO);
// cheeseburger.addAdditives(KETCHUP);
// cheeseburger.addFilling(HUMBUG);
console.log(cheeseburger.showAdditives());
console.log(cheeseburger.showSize());
console.log(cheeseburger.totalPrice());
console.log(cheeseburger.totalCalories());
console.log(cheeseburger.cheeseburger());
//console.log(cheeseburger.removeAdditives(MAYO))
// console.log(cheeseburger.removeAdditives(KETCHUP))
console.log(cheeseburger.showAdditives());
// cheeseburger.addFilling(POTATO);
console.log(cheeseburger)
//cheeseburger.addAdditives(MAYO);
console.log(cheeseburger.showFilling());
// cheeseburger.removeFilling(CUCUMBER)
console.log(cheeseburger);
// cheeseburger.removeFilling(POTATO)
// console.log(cheeseburger);

let btnCheese = document.querySelector('.cheese');
// btnCheese.addEventListener('click', function(){cheeseburger.addFilling(CHEESE)});
console.log(btnCheese)
btnCheese.addEventListener('click', cheeseburger.addFilling.bind(cheeseburger));

let btnSmall = document.querySelector('.small');
console.log(btnSmall);
btnSmall.addEventListener('click', cheeseburger.showSize.bind(cheeseburger));
