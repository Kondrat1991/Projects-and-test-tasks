// let arr =[];
// let a = new Array();

/*let firstArray = [1, 2, 3];
let secondArray = new Array(5,6,7,8);
console.log(firstArray, secondArray);*/


/*let firstArray = [1, 2, 3];
console.log(firstArray.length);
console.log(firstArray[0]);
console.log(firstArray[2]);
let arr = [1,2,3,];*/


/*
let users = ['Jon', 'Frank', 'Mick'];
let newUser = prompt('Enter name');
console.log(users.includes(newUser));*/





// let beast = prompt('Write a name of the animal');
//
// let animals = ["cat","dog","rabbit","bird","fish"];
//
// let result = Math.floor(Math.random()*animals.length);
//
// let number = animals[result];
// console.log(result);
// console.log(number);
//
// // by if&else
// // if(beast === number )   {
// //
// //     alert('You\'re Right!')
// // }
// //
// // else {
// //
// //     alert(`Fuck up ${number}`);
// // }
//
//

// beast === number ? alert('You\'re Right!') :alert(`Fuck up ${number}`);


/*let quotes = ['Почніть робити те, що потрібно. Потім робіть те, що можливо. І ви раптом виявите, що робите неможливе. – Св.Франциск Асізський','Ніщо не є більш обтяжливим для мудрої людини і ніщо не доставляє йому більшого занепокоєння, ніж необхідність витрачати на дрібниці і непотрібні речі більше часу, ніж вони того заслуговують. – Платон', 'Кращий спосіб почати робити – перестати говорити і почати робити. – Уолт Дісней', 'Ваш час обмежений, не витрачайте його, проживаючи чуже життя. Не попадайтеся на гачок віровчення, яке існує на уявленнях інших людей. Не дозволяйте поглядам інших заглушати свій власний внутрішній голос. І дуже важливо мати мужність слідувати своєму серцю та інтуїції. Вони, так чи інакше, вже знають, що ви дійсно хочете зробити. Все інше – другорядне. – Стів Джобс','Ваш мозок може все. Абсолютно все. Головне, переконати себе в цьому. Руки не знають, що вони не вміють віджиматися, ноги не знають, що вони слабкі. Це знає ваш мозок. Переконавши себе в тому, що ви можете все, ви зможете дійсно все. – Роберт Кіосакі', 'Ви отримуєте від життя лише те, що наважуєтеся попросити. Не бійтеся підвищувати планку. – Опра Уїнфрі', 'Щаслива людина занадто задоволена сьогоденням, щоб занадто багато думати про майбутнє. – Альберт Эйнштейн','Іноді щось може йти не так, як хотілося-б, але ви не повинні зупинятися. – Майкл Джордан','Будь собою, інші ролі зайняті. – Оскар Уайльд'];




let result = Math.floor(Math.random()*quotes.length);
let number = quotes[result];
console.log(number);
alert(number);*/


/*let number = 1;
let arr = [];
while(number < 4) {

    let result = prompt('Enter number')
    arr.push(result);
    number++;
}
console.log(arr);*/



/*for (let i = 0; i < 10; i++) {
    console.log(i);
}*/

/*for (let i = 2; i <= 10; i+=2) {

    console.log(i);

}*/

/*for (let i = 2; i <= 10; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    else {
        continue
    }
}*/





/*
newArr = [];
let animals = ["cat","dog","rabbit","bird","fish"];
for (let i = 0, max = animals.length; i <max; i++) {
    if (animals[i] === 'rabbit') {
        continue
    }
    console.log(animals[i]);
    newArr.push(animals[i]);
}

console.log(newArr);*/

/*let students = [1,2,3,4,5,6,7,8,9,10,11,12];
let result = [
    [1,5,7,4]
    [2,6,3,9]
]*/


/*"use strict";

let students = ['katya', 'mick', 'vasiliy', 'danya', 'alex', 'iryna', 'elena', 'drake', 'rotman', 'sasha', 'pvg', 'volodymyr'];
let team1 = [];
let team2 = [];
let team3 = [];
let result = [];
let maxQuantity = 4;
for (let i = 0, max = students.length; i < max; i++) {
    let iRandom = Math.floor(Math.random() * students.length);
    if (team1.length < maxQuantity) {
        team1.push((students.splice(iRandom, 1)).join(','));
        result[0] = team1;
    } else if (team2.length < maxQuantity) {
        team2.push((students.splice(iRandom, 1)).join(','));
        result[1] = team2;
    } else {
        team3.push((students.splice(iRandom, 1)).join(','));
        result[2] = team3;
    }
}
console.log('team1',team1);
console.log('team2',team2);
console.log('team3',team3);
console.log('allTeams',result);*/


/*
Напишите скрипт авторизации пользователя.

    Необходимо чтобы пользователь ввел свой пароль.
    Правильный пароль известен заранее, это строка "qwerty123".
    Пароль можно ввести не верно всего 3 раза (кол-во раз может изменяться).

Если пароль был введен верно, вывести alert с текстом 'Добро пожаловать!'

Если был введен не верный пароль, отнять от лимита попыток единицу,
    вывести alert с текстом "Неверный пароль, у вас осталось n попыток",
    где n это оставшийся лимит.
    После того как пользователь закрыл alert, запросить пароль снова.

    Продолжать запрашивать пароль до тех пор, пока пользователь не введет верный
пароль, пока не кончатся попытки или пока пользователь на нажмет Cancel в prompt.

    Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
Если же пользователь нажмет Cancel, прекратить выполнение скрипта.

*/

/*
1 Створити форму для введення пароля
2 Задати співставлення із правильним паролем
3 задати кількість спроб вводу пароля
4 Якщо пароль правильний-вивести текст "Добро пожаловать".
5 при невірному введенні зменшити ліміт на одну спробу. Якщо закінчилися у сі спроби, вивести текст  що спроб більше нема і припинити код.
6 задати можливість відмовитися від вводу пароля.
*/



/*let correctPassword = 'qwerty123';
let number = 3;
for(let i = 1; i <= number;i++) {
    let userInfo = prompt('Введіть Пароль');

    if (userInfo === null) {
        alert("Ви відмовилися");
        break;
    }
    else if (userInfo === correctPassword) {
        alert('Пароль правильний');
        break;
    }

    else if(userInfo !== correctPassword && i === number) {
        alert('Спроби закінчилися');
        // break;
    }
    else  {
        alert(`У вас залишилося  ${number -i} спроб`);
    }
}*/


// alert(userInfo);

// console.log(correctPassword);


/*
  Написать скрипт, который проверяет произвольную строку
  и находит самое длинное слово в строке.
*/
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































