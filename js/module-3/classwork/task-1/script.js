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


"use strict";
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
console.log('allTeams',result);




