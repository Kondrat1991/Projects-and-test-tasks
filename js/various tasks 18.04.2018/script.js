/*function two(array, element) {


    for (let item of array ) {
        console.log(item);
        if (item === element) {

            return true;
        }
    }
    return false;
}

console.log(two(["a", "b", "c", "d", "e"],  "f"));*/


/*function order(number) {
    number = number.reverse();

    return number;
}


console.log(order(12345));*/


// solution

/*function order(number) {

    number = number +'';

    return number = number.split('').reverse().join("");
}
console.log(order(12345));*/

// check whether a polindrom

/*function checkPalindrome(string) {
    let modString = string.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
    let palindrom = modString.split('').reverse().join('');
    if (modString === palindrom) {
        return true
    } else {
        return false
    }
    // return modString === palindrom ? true : false;
    // return modString === palindrom;
}

console.log(checkPalindrome("A man, a plan, a canal. Panama"));*/



//Write a JavaScript function that generates all combinations of a string
// function order(word) {
// let array = [];
//
//   for (let i = 0, a = 1; i < word.length; i++,a++)
// {
//     array[i]=word.substring(i, a);
//     console.log(array);
//     // return array;
// }
//
//     for (let i = 0, a = 2; i < word.length; i++,a++)
//     {
//         array[i]=word.substring(i, a);
//         console.log(array);
//         // return array;
//     }
//
//
// }
// console.log(order('dog'));
// console.log(order('dog'));


// solution

/*function combo(insertString){
    let strArr = insertString.split("");
    let temp = "";
    for(let i = 0; i < strArr.length; i++){
        temp = strArr[i];
        console.log(temp);
        for(let j = i + 1; j < strArr.length; j++){
            temp += strArr[j];
            console.log(temp);
        }
    }
}
combo("doggo");*/

// Randomfool function


/*let arr = ["Mick", "Nathan", "Lena"];
function getRandomFool (list ) {

    let result = (Math.floor(Math.random() * list.length));
    return (list[result]);
}
console.log(getRandomFool(arr));*/


//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

/*let string = 'fear being average';


function capitalize(text) {
let arr = [];
let cupCut = text.split(" ");
    // console.log(cupCut);
    for(let item of cupCut) {
        item = item.replace(item[0],item[0].toUpperCase());
        // console.log(item);
        arr.push(item);
    }
    // arr.join(",");
    return arr.join(" ");
}
// capitalize(string);
console.log(capitalize(string));*/

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

/*let string = 'eioau';
let input = 'WriteE';

function countVowels(input) {
    let arrVowels = string.split('');
    let arrInput = input.toLowerCase().split('');
    let count = 0;
    for(let letter of arrInput)  {
        if(arrVowels.includes(letter)) {
            count += 1;
        }

    }
   return count;
}
countVowels(input);
 console.log(countVowels(input)) ;*/



// Smart Way

// let vowels = 'eioau';
// let input = 'WriteE';
//
// function countVowels(input, vowels) {
//     // let arrVowels = string.split('');
//     // let arrInput = input.toLowerCase().split('');
//     let count = 0;
//     for(let letter of input)  {
//         if(vowels.toLowerCase().indexOf(letter.toLowerCase()) !== -1) {
//             count += 1;
//         }
//     }
//    return count;
// }
// countVowels(input, vowels);
//  console.log(countVowels(input, vowels)) ;

/*function fn() {
    let num = 0;
    function counter() {
        ++num;
        alert('I am alert 0' + num);
    }
    return counter;
}

let vasya =  fn();
let petya =  fn();

vasya();
petya();*/



// "user strict";

let checkWachek = ['Henry Every', 'Mick', 'Rotman', 'Keis', 'Den', 'Alex', 'Michael', 'Vova flip-flops', 'Katya', 'pvg', 'Danya', 'Elena MmMmM', 'Mr. Incredible'];

let check = (checkWachek[(Math.floor(Math.random()*checkWachek.length))]);
alert(check);


// function isPolindrom(polindrom) {

//     let string = polindrom.split(" ").join("");
// //  Порезали наш полиндром по пробелам слепили в одно получили  nursesesrun
//     console.log(string);

//     let reversedString = string.split("").reverse().join("");
//     // Наше слитное слово nursesrun порезали по буквам превернули сшили в одно

//     if (string === reversedString) {
//         // сравнили наш полиндром nurses run, который уже хранится в string без пробела
//         //  то есть nursesrun c reversedString, в котором хранится преобразованное значение
//         // поилиндрома наоборот на данный момент значение nursesrun

//         return true;
//     }
//     return false;


// }

// console.log(isPolindrom("nurses run"));

// let string = 'the quick brown fox';

// function capitalize(text) {
//     let cupCut = text.split(" "); // делаем из строки string - массив cupCut;
//     let arr = []; // создаем пустой массив, в которой в последствии будем добавлять изменённые слова;
//     // console.log(cupCut);

//     for (let item of cupCut) { // создаем цикл
//         // let bigLetter = item[0].toUpperCase();
//         item = item.replace(item[0], item[0].toUpperCase()); // в этой строке, мы заменяем первую букву элемента массива со строчной на заглавную
//         console.log(item);
//         arr.push(item); // добавляем изменённые элементы в массив
//     }
// return arr.join(' '); // преобразовываем массив в строку и возвращаем как результат работы функции
// }
// console.log(capitalize(string)); // запускаем функцию

// let vowels = 'EioAu';
// let input = 'WrIte';

// function countVowels(input, vowels) {
//     let count = 0; // Объявили счетчик
//     for (let letter of input) { // Запустили цикл по
//         if (vowels.toLowerCase().indexOf(letter.toLowerCase()) !== -1) { // Преобразовываем в нижний регистр и сравниваем
//             count += 1; //Увеличиваем счетчик на единицу
//         }
//     }
//     return count; //Возвращаем результат
// }

// console.log(countVowels(input, vowels)); // Вызов функции countVowels передаем в console.log как аргумент

// function primeNumber(num) { //
//     if (!Number.isInteger(num) || num < 2) { // проверка: если число дробное или меньше 2 - false
//         return false;
//     } else if (num === 2) { // еще если аргумент 'num' строго равен 2 - true
//         return true;
//     }

//     for (let i = 2; i < num; i++) { // создаем цикл. счетчик начинается с цифры 2, и если 'i' меньше аргумента, то счетчик работает
//         if (num % i == 0) { // если аргумент делится без остатка, то false
//             return false;
//         }
//         else { // если аргумент поделится с остатком
//             return true;
//         }
//     }
// }

// console.log(primeNumber(194));

// function type (input){
//     return typeof input;
// }
// console.log(type(5)); //null, object и массив имеют тип object

// //замыкание
/*function fn() {
    let num = 0;
    function counter() {
        ++num;
        alert('I am alert #' + num);
    }
    return counter;
}

let vasya = fn();
let petya = fn();

document.querySelector('#vasya').addEventListener('click', vasya);
document.querySelector('#petya').addEventListener('click', petya);*/

/*

function secretPassword() {
    let password = 'xh38sk';
    function guessPassword(guess) {
        if (guess === password) {
            return true;
        } else {
            return false;
        }
    }
    return guessPassword;
}
let passwordGame = secretPassword();
console.log(passwordGame);
let tryOne = passwordGame('heyisthisit?');
let tryTwo = passwordGame('xh38sk');
console.log(tryOne);
console.log(tryTwo);

*/


// function sum(a,b) {
//     return a + b;
// }


// arrow function
/*let sum = (a, b , c) => a +b;

console.log(sum);*/




/*const guessNumber = (num) => {
    const userNumber = Number( prompt('Введите число', '') );

    return num === userNumber
        ? "Поздравляем! Вы угадали секретное число"
        : "Сожалеем! Вы не угадали секретное число";
};

const showMessage = (cb) => {
    const secretNumber = 15;
    const msg = cb(secretNumber);

    alert(msg);
};
showMessage(guessNumber);*/



// factorial
/*function factorial(num) {
    if(num ===0)
    {return 1
    }

    return num * factorial(num-1)
}
console.log (factorial(5));*/


/*const numbers = [0, 2, 4, 6, 8, 10];

const flipFlop =  numbers.map(function (element, index) {
    return element + index;

});
console.log(flipFlop);*/


// const numbers = [0, 2, 4, 6, 8, 10];
//
// // const flipFlop =  numbers.map(function (element, index) {
// //     return element + index;
// //
// // });
//
// const  flipFlop = numbers.map( (element, index) =>);
// return element + index;
//
// console.log(flipFlop);

/*const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = numbers.filter(function (el) {

    // if(el > 5 ) {
    //     return el;
    // }
 return el > 5 ? el: null;
});
console.log(even);*/

//Classwork
//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр

/*function getDigitsSum(digit) {
    let sum = 0;
    for (let i = 0; i < digit.length; i++) {
        sum +=(digit[i]);
    }
    return sum;
}

console.log(getDigitsSum(123));*/
/*function getDigitsSum(digit) {
    let sum = digit.toString().split('');
    let result = 0;
    // console.log(sum);
    for(number of sum) {
        result = result +(+number);
    }return result;
}
console.log(getDigitsSum(123));
//Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
let arr = [];
    for(let i = 1; i <= 2018; i++) {
        if((getDigitsSum(i) === 13)) {
            arr.push(i);
        }
    }
console.log(arr);*/

// let year = '';
// $arr = [];
// for ($i = 1; $i < $year; $i++) {
//     if(getDigitsSum($i) == 13) {
//         $arr[] = $i;
//     }
// }
//
// var_dump($arr);



//
// function getDigitsSum(digit) {
//
//
//     let go =
//
// }
//
// console.log(getDigitsSum([1, 2, 3]));




/*let arr = [5, 6, 7, 8, 9];
let newArr = arr.map(el =>  {
    return el * el;
}).filter(el => {return el > 40}).reduce((current, element) => {
    return current + element});
console.log(newArr);*/


/*let arr = [5, 6, 7, 8, 9];
let newArr = arr.map(el => { return el*el; }) // квадрат
    .filter( el => { return el > 40 }) // фільтр більше 40
    .reduce((curent, item) => { return curent + item }); // додавання
console.log(newArr)*/




/*const hotel = {
    name: "Resort Hotel",
    stars: 5,
    capacity: 100,
    'status': 'Lux',
};

console.log(hotel.stars);
console.log(hotel['stars']);

const keys = Object(.keys,values, entries) (hotel);*/

//object.assign is додавання

//Якщо ключі співпадають, то вони перезапишуться


//clone


/*const c = {
    ...a,
    ...b,

};*/


// let state = {
//     a:5,
//     b:7,
//     c:4,
// };

/*
let newState = {

    ...state,
    c:8,

};
*/


/*
  Напишите код, который, для объекта user, последовательно:
 - добавляет поле mood со значением 'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user
    циклом в формате ключ: значение
*/


/*const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};

user.address = "happy";
console.log(user);
user.hobby = "javascript";
console.log(user);
delete user.premium;
console.log(user);
const entries = Object.entries(user);
console.log(entries);

for (const key in user) {
    if (user.hasOwnProperty(key)) {
      console.log('Value: ',user[key]);
    }
  }*/


/*
  Создайте функцию isObjectEmpty(obj), которая получает
  единственный аргумент obj - объект, и проверяет
  пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/


// const obj = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     'status': 'Lux',
//  };

// function isObjectEmpty(obj) {
//     let result = Object.keys(obj);
//
//     for (let key in result) {
//
//         if (result === undefined) {
//             return true
//
//         }
//             if(key) {
//                 return false;
//             }
//         }return true;
//     }


//console.log(obj);

/*function isObjectEmpty(obj) {
    let result = Object.keys(obj);
    console.log(result);

    if(result === []) {
        return true;
    }

}*/

// let isObjectEmpty = obj => {
//     return Object.keys(obj).length === 0;
// };

// function isObjectEmpty(obj) {for (let key in obj) {return false;}return true;}
//
//
// console.log('empty obj', isObjectEmpty({}));
//
// console.log('not empty obj', isObjectEmpty({a: 1}));


//  let isObjectEmpty = obj => {
//     return Object.keys(obj).length;
// };


/*let countOwnProps = obj => {
    return Object.keys(obj).length;
};


console.log('empty obj',
    countOwnProps({})
); // 0

console.log( 'not empty obj',
    countOwnProps({a: 1, b: 3, c: 'hello'})
); // 3*/





/*
  Напишите функцию countTotalSalary(salaries),
  считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию,
  имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
//
//   const keys = Object.values(hotel);
//
// console.log(keys);

/*
function countTotalSalary(salaries) {
return Object.values(salaries).length === 0 ?  0 : Object.values(salaries).reduce((current, next) => current + next);
}


// Вызовы функции для проверки
console.log(
    countTotalSalary({})
); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80
    })
); // 330
*/




/*
  Напишите функцию getAllPropValues(prop),
  которая берет массив объектов и
  возвращает массив значений определенного поля prop
*/



/*const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
];*/

// let entries = Object.values(users);
// console.log(entries);



// function getAllPropValues(prop) {
//
//   let newArr = users.map(function (item) {
//       return item[prop];
//   });
//     return newArr;
// }

/*function getAllPropValues(prop) {
    let result = [];
    if (prop in users[0]) {
        for (let i = 0; i < users.length; i++) {
            result.push(users[i][prop]);

        }
        return result;
    }

        return [];

}*/



/*function getAllPropValues(prop) {
    let result = [];
    if (prop in users[0]) {

        let newArr = users.map(function (obj) {
            return obj[prop];
        });
        return newArr;
    }
    return [];
};*/

/*function getAllPropValues(prop) {
    let result = [];
    if (prop in users[0]) {

        return  users.map(function (obj) {
            return obj[prop];
        });

    }
    return [];
};*/


/*function getAllPropValues(prop) {
    return prop in users[0] ? users.map(obj =>  obj[prop]) : [];
    }*/


 // getAllPropValues();

 // Вызовы функции для проверки
/*console.log(getAllPropValues('name'));
// // ['Poly', 'Mango', 'Ajax']
//
console.log(
    getAllPropValues('mood'));
// ['happy', 'blissful', 'tired']
//
console.log(
    getAllPropValues('active'));

// []*/


/*
    1. Используя метод map, пройдите по массиву guests,
    и составьте новый массив, заменив значение
    поля isActive на противоположное.

    2. Напишите функцию setGuestState(guests, period), где
    guests - массив гостей, period - кол-во дней после
    которого считается что гость не активен.

    Если значение поля inactiveDays болше чем period,
    поставить для isActive значение false (если там еще не false)

    Если же значение inactiveDays меньше чем period,
    поставить для isActive значение true (если там еще не true)
*/

// const guests = [
//     {name: 'Mango', inactiveDays: 15, isActive: true},
//     {name: 'Poly', inactiveDays: 8, isActive: false},
//     {name: 'Ajax', inactiveDays: 32, isActive: false},
//     {name: 'Chelsey', inactiveDays: 85, isActive: true}
// ];



// let newArr = guests.map(function (item) {
//     //  if( item.isActive === true) {
//     //     return item.isActive = false;
//     // }
//     // else {
//     //      return true;
//     //  }
//     return item.isActive === true ? item.isActive = false : item.isActive = true;
// })
//
// console.log(newArr);


// const guests = [
//     {name: 'Mango', inactiveDays: 15, isActive: true},
//     {name: 'Poly', inactiveDays: 8, isActive: false},
//     {name: 'Ajax', inactiveDays: 32, isActive: false},
//     {name: 'Chelsey', inactiveDays: 85, isActive: true}
// ];

/*let newArr = guests.map(function (item) {
    return item.isActive === true ? item.isActive = false : item.isActive = true;
});
function setGuestState(guests, period) {
    return guests.map(function (element) {
            if (element.inactiveDays > period && element.inactiveDays !== false) {
                return {
                    ...element,
                    isActive: false,
                }
            }
            else {
                return {
                    ...element,
                    isActive: true
                }
            }
        }
    )
}*/



// Вызовы функции для проверки
// console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true
//
// console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true
//
// console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true



// let newArr = users.map(function (obj) {
//     return obj[prop];
// });
// return newArr;



/*let setGuestState = (guests, period) =>
    guests.map((element) =>
        element.inactiveDays > period && element.inactiveDays !== false ?
            {
                ...element,
                isActive: false,
            }
            :
            {
                ...element,
                isActive: true
            }
    )*/

/*let setGuestState = (guests, period) => {
    guests.map((element) =>
        element.inactiveDays > period && element.inactiveDays !== false ?
            element.isActive = false
            :
            element.isActive = true
    );
    return guests;
}


// Вызовы функции для проверки
console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получит isActive false, а Poly наоборот true

console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получит isActive false, а Mango и Poly наоборот true

console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true*/


