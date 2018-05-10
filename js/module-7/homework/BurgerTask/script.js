function BurgerConstructor(size, filling) {
    this.menu = {
        size: {
            small: {
                price: 100,
                calories: 100,
            },
            large: {
                price:250,
                calories:350,
            },
        },
        fillings: {
            cheese: {
                price:15,
                calories:50,
            },
            salad: {
                price:10,
                calories:10,
            },
            potato: {
                price:10,
                calories:50,
            },
            cucumber: {
                price:20,
                calories:30,
            },
            hamon: {
                price:30,
                calories:50,
            },
        },
        additives: {
            mayo: {
                price:7,
                calories:50,
            },
            ketchup: {
                price:6,
                calories:40,
            },
            spice: {
                price:5,
                calories:0,
            },
            mustard: {
                price:5,
                calories:5,
            },
        }
    };
    this.size = size;
    this.fillings = [filling];
    this.additives = [];
    this.calories = this.menu.size[size].calories + this.menu.fillings[filling].calories;
    this.price = this.menu.size[size].price + this.menu.fillings[filling].price;
    this.addFillings = function (filling) {
        if(this.menu.fillings[filling] && !this.additives.includes(filling)){
            this.fillings.push(filling);
            this.price += this.menu.fillings[filling].price;
            this.calories += this.menu.fillings[filling].calories;
        }

    }
    this.removeFillings = function(filling) {
        if(this.menu.fillings[filling] && this.fillings.includes(filling)) {
            this.fillings = this.fillings.filter(item => item !== filling);
            this.price -= this.menu.fillings[filling].price;
            this.calories -= this.menu.fillings[filling].calories;
        }
    }



    this.addAdditives = function (additive) {
        if(this.menu.additives[additive] && !this.additives.includes(additive)){
            this.additives.push(additive);
            this.price += this.menu.additives[additive].price;
            this.calories += this.menu.additives[additive].calories;
        }

    };

    this.showAdditives = function() {
        console.log(this.additives);
    }
}


let burger = new BurgerConstructor('small', 'cheese');

console.log(burger);
burger.addAdditives('ketchup');
burger.addFillings('salad');
console.log('add salad',burger);
burger.removeFillings('salad');
console.log('remove salad',burger);
burger.showAdditives();
console.log(burger);


