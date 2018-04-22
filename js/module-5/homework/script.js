/*
    1. Используя метод filter, пройдите по массиву guests
      и составьте массив только тех гостей, поле isActive
      которых true.

    2. Напишите функию getActiveGuests(guests), принимающую
      один параметр guests - массив объектов гостей.
      Функция должна возвращать массив объектов гостей,
      значение поля isActive которых true.

    3. Напишите функцию getGuestsOlderThan(guests, age), где
      guests - массив объектов гостей, age - предел возраста
      для сортировки. Функция возвращает массив объектов значение
      свойства age которых больше чем параметр age.
*/

/*const guests = [
    {name: 'Mango', age: 20, isActive: true},
    {name: 'Poly', age: 18, isActive: false},
    {name: 'Ajax', age: 30, isActive: true},
    {name: 'Chelsey', age: 45, isActive: false}
];*/

//1 Task

//1 and 2
/*function getActiveGuests(guests) {
    let result = guests.filter(function (el) {
    if(el.isActive === true) {
        return el;
    }
})
    return result;
}

*/

//ternar
//
// function getActiveGuests(guests) {
//     return result = guests.filter(el => {
//     return el.isActive === true; {
//
//     }
// })
//
// }
// console.log(getActiveGuests(guests));

//3 sub-task

/*function getGuestsOlderThan(guests, age) {
    let newArr = guests.filter(function (el) {
        if(el.age > age) {
            return el;
        }
    })
    return newArr;
}*/


//ternare


/*function getGuestsOlderThan(guests, age) {
    return newArr = guests.filter(el => {
        return el.age > age; {

        }
    })

}*/




//  Вызовы функции для проверки
// console.log(getActiveGuests(guests) ); // массив из 2-х объектов Mango и Poly
//
// console.log(
//     getGuestsOlderThan(guests, 25)
//); // массив из 2-х объектов Ajax и Chelsey
//
//console.log(
  //  getGuestsOlderThan(guests, 35)
//); // [{name: 'Chelsey', age: 45, isActive: false}]
//
// console.log(
//     getGuestsOlderThan(guests, 55)
// ); // []



/*
    1. Используя метод find, пройдите по массиву guests
      и найдите гостя с id равным 3.
      Результат будет {id: 3, name: 'Ajax', age: 30}

    2. Напишите функию getGuestById(guests, id), принимающую
      guests - массив объектов гостей, id - идентификатор (число).
      Функция должна возвращать объект гостя с совпадающим id.
*/

/*const guests = [
    {id: 1, name: 'Mango', age: 20},
    {id: 2, name: 'Poly', age: 18},
    {id: 3, name: 'Ajax', age: 30},
    {id: 4, name: 'Chelsey', age: 45}
];*/


/*function getGuestById(guests, id) {
  let newArr = guests.find(function (item) {
      if(item.id === id) {
          return item;
      }
  })
    return newArr;
}*/

//ternary
/*function getGuestById(guests, id) {
    return newArr = guests.find( item => {
      return item.id === id; {
      }
  })
}*/

//console.log(getGuestById(guests, 3)); // {id: 3, name: 'Ajax', age: 30}
// //

// Вызовы функции для проверки
// console.log(getGuestById(3));
// {id: 3, name: 'Ajax', age: 30}
// //
// console.log(
//     getGuestById(1)
// ); // {id: 1, name: 'Mango', age: 20}
//
// console.log(
//     getGuestById(5)
// ); // undefined




//Task 3
/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*/

// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
// };
// function getGuestById(sum) {
//     let total = Object.values(sum).reduce(function (that, next) {
//         if (typeof that === 'number') {
//             return that + next;
//         }
//         return 0;
//     })
//     return total;
// }
//
// console.log(getGuestById(order));
//ternare
//  total = Object.values(order).reduce((t, n) => t + n);
// console.log(total);



//Task 4
/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  Используя метод reduce, посчитайте
  общую сумму стоимости всех продуктов заказа.
*/
/*const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40,
};

const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1,
};

const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
};*/

// function getTotalPrice(products, order) {
//     let sum = {};
//       Object.keys(products).map(key => {
//         if (order.hasOwnProperty(key)) {
//             return sum[key] = products[key] * order[key];
//         }
//     })
//      return Object.values(sum).reduce((t, n) => t + n);
// }

//ternare

// function getTotalPrice(products, order) {
//     let sum = {};
//     Object.keys(products).map(key => {
//         if (order.hasOwnProperty(key)) {
//             return sum[key] = products[key] * order[key];
//         }
//     })
//     return Object.values(sum).reduce((t, n) => t + n);
// }


// Вызовы функции для проверки
//console.log(getTotalPrice(products, orderA)); // 140
//
//console.log(getTotalPrice(products, orderB)); // 130
//
//


/*
    1. Напишите функию allGuestsActive(guests), принимающую
      один параметр guests - массив объектов гостей.
      Функция должна возвращать true если значение
      поля isActive всех объектов true, в противном случае false.
*/

/*const guestsA = [
    {name: 'Mango', isActive: true},
    {name: 'Poly', isActive: false},
    {name: 'Ajax', isActive: true},
];

const guestsB = [
    {name: 'Mango', isActive: true},
    {name: 'Poly', isActive: true},
    {name: 'Ajax', isActive: true},
];*/

/*function allGuestsActive(guests) {

    let newArr = guests.every(function (element) {
        if (element.isActive !== true) {
            return false;
        }
        else {
            return true;
        }
    })
    return newArr;
}*/
//ternary

/*function allGuestsActive(guests) {

    return newArr = guests.every(function (element) {
        return element.isActive === true;
    })

}*/

//let newArr = guests.map(function (item) {
//     return item.isActive === true ? item.isActive = false : item.isActive = true;
// })

//Вызовы функции для проверки
//console.log(allGuestsActive(guestsA)); // false

//console.log(allGuestsActive(guestsB));
// true














