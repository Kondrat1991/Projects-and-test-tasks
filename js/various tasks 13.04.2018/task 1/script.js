// array, null, object = null;

// array, null, object = null;

// array, null, object = null;

// array, null, object = null;

// array, null, object = null;

// array, null, object = null;


// Task 1
/*const string = "May the force be with you";

let margin = string.split(' ');
console.log(margin);
let longestWord = 0;
let word = null;
for (let i = 0; i < margin.length;i++) {
    if(margin[i].length > longestWord) {
        word  = margin[i];
        longestWord = margin[i].length;

    }
}
console.log(word);*/



/*
  Создайте игру угадай число.
  Есть массив чисел numbers, содержащий "верные" числа.

  Числа в массиве всегда идут по возрастанию,
  1-5, 20-40, 2-100 и т.п.

  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Пусть prompt говорит
  "Введите цифру между x и y", где x и y соотвественно самый
  маленький и самый большой элемент массива.

  Но пользователь может ввести что угодно,
  необходимо проверить что было введено.
  Преобразовать input в числовой тип и проверить число ли это.

  Если нет - выводим alert с сообщением о том,
  что было введено не число.

  Если да - проверить содержит ли в себе массив numbers это число.

  Если содержит - выводим alert с сообщением
  'Поздравляем, Вы угадали!'.

  Есл не содержит - выводим alert с сообщением
  'Сожалеем, Вы не угадали!'.
*/



// Task 2

/*let cont = [];
let number = +prompt('Введіть номер від одного до ста') ;
let result = 0;

for (let i = 0; i <= 100; i++) {
    cont.push(Math.floor(Math.random() * 100+1));
}
if(!(Number.isInteger(number))) {
    alert('Це не номер');
}
else if(Number.isInteger(number) ) {
    //alert('number');
    result = number;
    let boolean = (cont.includes(result));
    console.log(boolean);

    if(boolean === true) {
        alert('Ви вгадали')
    }

    else {
        alert('Ви не вгадали')
    }
}
console.log(cont);*/




// Task 3

/*
  Напишите цикл, который предлагает, через prompt,
  ввести число, большее 100.

  Если посетитель ввёл другое число –
  попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо
  посетитель не введёт число, большее 100,
  либо не нажмёт кнопку Cancel.
*/

/*let number = prompt('Введіть число більше за 100');
// let result = 0;
for (let i = 0; i <= Infinity; i++) {
    if(number >= 100) {
        alert('Ви ввели нормальне число');
        break;
    }
    else if(number === null) {
        break
    }
    else {
        number = prompt('Спробуйте ще раз') ;
        console.log(number);
    }


}*/


// Task 4


/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt
    и сохраняет их в массиве.

  - Заканчивает запрашивать числа, как только посетитель
    введёт пустую строку, не число или нажмёт Cancel.

  - При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - Выводит сумму всех значений массива.
    "Сумма: <сумма всех значений в массиве>"
*/

/*1 Створити форму для вводу числа, починаючи від нуля.
2 Зробити так, щоб вони добавлялися у масив
3 Зупинити при вводі пустої строки або при вводі Cancel
4 Додати суму всіх значень масиву
5 Вивести в консоль*/

/*
let number = +prompt('Введіть число');
let newArr = [];
let result = 0;


for (let i = 0; i <=Infinity; i++) {
    newArr.push(i);
}
*/


/*let arr = [];
let sum = 0;
for (let i = 0; i < Infinity; i++){
    let number = prompt('Enter number');

    if(number === "" || isNaN(number) || number === null){

        for (let item of arr ) {
         sum += +item;
        }
        break;
    }
    arr.push(number);

}
console.log(arr);
console.log(sum);*/

// 40 tasks
// 1 task
// let number = +prompt('Введіть число');
// if(number === 10) {
//     alert('You win');
// }
// else {
//     alert('You loose');
// }


// 2 task
//
// 2) В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).


/*
let min = +prompt('Введіть число від 0 до 59');
console.log(min);

if(min>=0 && min<=14) {
    alert('1 чверть');
}

else if(min>=15 && min<=30) {
    alert('2 чверть');
}

else if(min>=31 && min<=45) {
    alert('3 чверть');
}

else if(min>=46 && min<=59) {
    alert('4 чверть');
}*/


// task 3
//
// 3) Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

/*

let a = +prompt('Введіть число');
if(a === 0){
    alert('True')
}

else {
    alert('False')
}
console.log(a);*/


// task 4

// 4) Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.


/*let a = +prompt('Введіть число');

if(a > 0){
    alert('True');
}

else {
    alert('False') ;
}*/


// task 12

// 12) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2

// let a = +prompt('Введіть число');
//
// if(a >0 && a < 5) {
//     alert('True');
// }
// else {
//     alert('False')
// }



/*13) Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.*/

// task 13

/*let a = +prompt('Введіть число');
let sum = 0;

if(a == 0 || a == 2) {
    let sum = (a+7);
    console.log(sum);
}

else {
    let sum = (a/10);
    console.log(sum);
}*/


// 14) Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// let a = +prompt('Введіть число');
// let b = +prompt('Введіть число');
// if(a <=1&& b >=3) {
//     let sum = (a+b);
//     console.log(sum);
// }
//
// else {
//     let sum = (a-b);
//     console.log(sum);
// }


/*

Task 16


Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.*/

// let result = prompt('Введіть номер від одного до чотирьох');
// let num = (+prompt('Введіть номер від одного до чотирьох'));
// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'лето';
//         break;
//     case 4:
//         result = 'осень';
//         break;
// }
// alert(result);


// task 18


/*let month = +prompt("Enter here your number");

if (month > 0 && month <=2 || month === 12) {
    alert('Winter');
}

else if(month >=3 && month <=5) {
    alert('Spring');
}

else if(month >=6 && month <=8) {
    alert('Summer');
}


else if(month >=9 && month <=11) {
    alert('Autumn');
}

else {
    alert('Try again');
}*/





/*
Task 19

19) Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.*/


/*let a = 'abcde';
if (a[0] = a) {
    alert('True');
}

else {
    alert('False');
}*/

// let  str = "Я - современный браузер!";
// alert( str[0] ); // "Я"

/*Task  38*/
// let  str = "Я - современный браузер!";
// console.log(str.slice(-1));


/*
function sum() {
    const max = arguments.length;
    let res = 0;

    for (let i = 0; i < max; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(`sum = ${sum(1, 2, 3, 4, 5, 6, 7, 8 ,9, 10)}`); //*/

/*
function showMessage() {
    alert( 'Лол' );
}

showMessage();
showMessage();*/

/*function calcD(a, b, c) {
    return b*b - 4*a*c;
}

let test = calcD(-4, 2, 1);
alert(test);*/



/*
function calc() {
    console.log('You');
}
calc();*/


/*
function add() {
    console.log(a + b);
}

add();*/


/*function showText() {

    let a = 5;
    let b = 6;
    return a+b;
}

let result = showText();
console.log(showText);*/


/*
function calc (number1, number2) {
    return number1+ number2;
}

console.log(calc(8, 10));
console.log(calc(8, 40));

function minus (a, b) {
    return a -b;
}

console.log(minus(5, 2));
*/


// function showText(name = 'Jim', days =30)   {
//     return` ${name}trial ${days} `
// }
//
// // console.log(showText());
// console.log(showText('Tim', 15));



/*function showText(name) {

    let lower = name.toLowerCase().split(' ').join('').split(',').join('').split('.').join('');
    let check = lower.split('').reverse().join('');
    console.log(check);
    console.log(lower);
    // if (lower === check) {
    //     alert('True')
    // }
    //
    // else if (lower !== check) {
    //     alert('False')
    // }

    return lower === check;

    /!*return lower === check ? true : false;*!/
}
console.log(showText('A man, a plan, a canal. Panama'));
console.log(showText('never odd or even'));
console.log(showText('My age is 0, 0 si ega ym'));
console.log(showText("0_0 (: /-\\ :) 0_0"));
console.log(showText);*/


/*еребір массиву
function arg() {
    let arr = Array.from(arguments);
console.log('Array arguments', arr);
    let sum = "";
    for(let item of arr) {
        sum += item+ ' ';
    }
    return(sum);
}

console.log(arg('test', 'hello', 'lol'));*/

// function getPx(str) {
//     if (typeof str !== "string") {
//         return null;
//     }
//     return parseFloat(str);
//     // else if (typeof str === "string") {
//     //     return str;
//     // }
// }
//
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


/*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/


// Вызовы функции для проверки
// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'
//
// console.log(
//     findLongestWord("Google do a roll")
// ); // вернет 'Google'
//
// console.log(
//     findLongestWord("May the force be with you")
// ); // вернет 'force'


/*function findLongestWord(str) {
    let word ="";
    let longestWord = 0;

    if (typeof str !== "string") {
        return null;
    }
     let array = str.split('');
     for(let el of array) {
     if (el.length > word) {
         word = el.length;

     }
     }

}*/


/*function findLongestWord(str) {

    let strSplit = str.split(' ');



    let longestWord = 0;


    for(let i = 0; i < strSplit.length; i++){
        console.log(strSplit.length);
    }
        if(strSplit[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
            longestWord = strSplit[i].length; // ...then longestWord takes this new value
        }
    }*/

/*
function findLongestWord(string) {
    let longestWord;
    let wordLength = 0;
    let newString = string.split(' ');
    console.log(newString);
    for (let i = 0; i < newString.length; i++) {
        if (newString[i].length > wordLength){
            wordLength = newString[i].length;
            longestWord = newString[i];

        }
    }
    return longestWord;
}
*/


/*
  Создайте функцию titleCase(str), которая
  получает строку и возвращает предоставленную строку
  с первой буквой каждого слова, заглавными.
  Остальные буквы слова должны быть не заглавными.
*/

// function titleCase(str){
//     if (typeof str !== "string") {
//         return;
//     }
//
//    let lowCa = str.toLowerCase();
//     let splCa = lowCa.split(' ');
//     let newArray =[];
//     for(let word of splCa) {
//
//         let custom = word.replace(word[0], word[0].toUpperCase());
//         newArray.push(custom);
//     }
//
//
//     return newArray.join(" ");
//
//
// }console.log(
//     titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
// ); // вернет "Here Is My Handle Here Is My Spout".

/*console.log(
    titleCase("I'm a little tea pot")); // вернет "I'm A Little Tea Pot"*/

// console.log(
//     titleCase("sHoRt AnD sToUt")
// ); // вернет "Short And Stout".
//



/*
  Есть массив уникальных чисел uniqNumbers.
  
  Написать функцию, addUniqNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/

// const uniqNumbers  = [2, 1, 4, 9];
// function addUniqNumbers(){
//     let arr = Array.from(arguments);
//     console.log(arr);
//     for (let number of arr ) {
//         if(!uniqNumbers.includes(number)) {
//             uniqNumbers.push(number);
//         }
//         // return uniqNumbers;
//     }
// }
// // console.log(b.includes('r'));
// //
// // // Вызовы функции для проверки
// addUniqNumbers(1, 2, 3);
// console.log(uniqNumbers);

//
// addUniqNumbers(12, 2, 3, 19);
// console.log(uniqNumbers);
//
//
// addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqNumbers);



/*
  Создайте функцию removeFromArray(arr),
  которая получает 1 параметр, исходный массив arr.

  При вызове функции, первым аргументов всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Удалите все элементы из исходного массива,
  которые имеют такое же значение, что и аргументы.
*/

// Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // вернет [1, 3, 5]
//
// console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // вернет [12, 8, 17]
//
//
// function removeFromArray(arr) {
//
// }



// My task

// function removeFromArray(arr) {
//     let newArr = Array.from(arguments);
//     console.log("newArr1", newArr);
//     newArr.shift();
//     console.log("newArr2", newArr);
//     for (let item of newArr){
//         if(arr.includes(item) ) {
//             let index = arr.indexOf(item);
//             arr.splice(index,1);
//         }
//     }
//     return arr;
// }




// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// // login = ('');
// function addLogin() {
//     function checkLoginValidity(login) {
//
//         let arr = Array.from(arguments);
//         console.log(arr);
//
//         if(login.length <=3 || login.length >=17) {
//           alert('Ошибка! Логин должен быть от 4 до 16 символов');
//             return;
//         }
//         alert('True');
//
//
//
//
//     }
//
// }
//
// addLogin(1, 2, 3);
// console.log(addLogin());

//task 41
// let word = ("Enter here your word");
// let result = (Math.floor(Math.random() * word.length));
// let randomLetter = word[result];
// console.log(randomLetter);

//Найдите суму всех товаров в корзине магазина без мелочи, с мелочью



/*let basket = [54.5, 40.5, 32,5, 85,678, 21 ];
let sum1 = 0;
let sum2 = 0;

for(let number of basket) {
    sum1 =sum1 +( parseInt(number));
    sum2 = sum2 + number;

}
console.log(sum1);
console.log(sum2);*/
// Task 43
//Составте строку из 5-ти случайных букв алфавита

/*let alphabet = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
let result = '';
let num = 0;
// let container = alphabet.split('');
// console.log(container);

for (let i = 0; i < 5; i++) {
    num = Math.floor(Math.random() * alphabet.length);
    // console.log(alphabet[num]);
    result = result + alphabet[num];
    // console.log(result);
}
console.log(result);*/
// Task 45
//
// Перевірити введену інфу число, чи воно є ціле і додатнє.

/*let userNumber = prompt('Enter here your number');
if(Number.isInteger(+userNumber) && +userNumber > 0 ) {
    alert('True');

}

else {
    alert('False');

}*/

// Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.

// let alphabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./';
//
// function addKeyboardLayout(alphabet)  {
//
//     let newArr =(alphabet.split(""));
//     let pos = newArr.indexOf("a");
//     let pos2 = newArr.indexOf("z");
// // just check
//     console.log(pos);
//     console.log(pos2);
//
//     letterArr1 = (newArr.slice(0, pos ));
//     // console.log(letterArr1);
//
//     letterArr2 = (newArr.slice(pos, pos2 ));
//     // console.log(letterArr2);
//
//
//     letterArr3 = (newArr.slice(pos2) );
//     // console.log(letterArr3);
//
//
//     let containerArr = [];
//     containerArr.push(letterArr1, letterArr2, letterArr3);
//
//     return containerArr;
//
// }
//
// function randomLetter(alphabet) {
//     let result = (Math.floor(Math.random() * alphabet.length));
//     randomLetter = (alphabet[result]);
//
// }
// randomLetter(alphabet);
// console.log(randomLetter);
//
//
// addKeyboardLayout(alphabet);
// console.log(addKeyboardLayout(alphabet));


// array, null, object = object;


