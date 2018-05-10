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
        },
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
        hamon: {
            name: 'hamon',
            price: 30,
            calories: 50,
        },
    },
    additives: {
        mayo: {
            name: 'mayo',
            price: 7,
            calories: 50,
        },
        ketchup: {
            name: 'ketchup',
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
        },
    }
};

const BIG = menu.size.large,
    SMALL = menu.size.small;

const CHEESE = menu.fillings.cheese;
const SALAD = menu.fillings.salad;
const POTATO = menu.fillings.potato;
const CUCUMBER = menu.fillings.cucumber;
const HAMON = menu.fillings.hamon;

const MAYO = menu.additives.mayo;
const KETCHUP = menu.additives.ketchup;
const SPICE = menu.additives.spice;
const MUSTARD = menu.additives.mustard;


function Burger(size, filling) {
    this.size = size;
    this.fillings = [filling];
    this.price = size.price + filling.price ;
    this.calories = size.calories + filling.calories;
    this.additives = [];
}

Burger.prototype.addAdditives = function (additive) {
    if (this.additives.includes(additive)) {
        alert(`You already choose this additive ${additive.name}`);
        return;
    }
    else {
        this.additives.push(additive);
        this.price += additive.price;
        this.calories += additive.calories;
    }
};
Burger.prototype.additivesList = function () {

    return this.additives.map( pieces => pieces.name);
};
Burger.prototype.burgerSize = function () {
    return this.size.name;
};
Burger.prototype.totalPrice = function () {
    return this.price
};
Burger.prototype.totalFat = function () {
    return this.calories
};
Burger.prototype.mainInfo = function () {
    return `U are weclome, your ordered ${this.size.name} burger, the price is ${this.price} your calories is ${this.calories}.
    Congrat, u are fucking FAT basstard`
};

Burger.prototype.removeAdditives = function (additive) {
    this.price -= additive.price;
    this.calories -= additive.calories;
    return this.additives= this.additives.filter(elem => elem === additive ? null : elem)

};
Burger.prototype.addFilling = function (filling) {
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



let cheeseburger = new Burger(BIG, CUCUMBER);
console.log(cheeseburger);
cheeseburger.addAdditives(MAYO);
cheeseburger.addAdditives(SPICE);
console.log(cheeseburger.additivesList());
console.log(cheeseburger.burgerSize());
console.log(cheeseburger.totalPrice());
console.log(cheeseburger.totalFat());
console.log(cheeseburger.mainInfo());
console.log(cheeseburger.removeAdditives(MAYO));
console.log(cheeseburger.removeAdditives(SPICE));
cheeseburger.addFilling(POTATO);
console.log(cheeseburger)
//cheeseburger.addAdditives(MAYO);
console.log(cheeseburger.showFilling());
cheeseburger.removeFilling(CUCUMBER)
console.log(cheeseburger);
cheeseburger.removeFilling(POTATO)
console.log(cheeseburger);