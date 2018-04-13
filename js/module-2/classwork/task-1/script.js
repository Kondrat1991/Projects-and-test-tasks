// let a = 'Моє ім\'я';
// console.log(a);

// Щоб відображався слеш, треба два раза його записати

// when === this is typecheck


/*let a = '1';
let b = 1;
console.log(a !== b);
console.log(a == b);
console.log(a === b); check by type;*/


/*let q = 1, w = 2, e = 1, r = '1';
console.log(q !== w);
console.log(q != w);
console.log(q != e);
console.log(q != r);
console.log(q !== r);*/

/*
Nan==Nan =false;*/

// console.log(0 ||2||'0');

// || search first true
// && search first false


// control structures

/*
let condition = true;

if(condition) {

    console.log('Evrika');
}

let turn = prompt("Where are you go?")
if (!(turn === 'right')) {
    console.log('Metro');

}
else {
    console.log('No - metro');
}
*/


/*
let turn = prompt('Куди ти повернув').toLowerCase();
console.log(turn);
let buy = prompt('Чи купив ти жетон');
let take = prompt('Чи сів у вагон');


if (turn === 'right'&& buy === 'check' && take === 'yes') {
    console.log('You win');
}

else {
    alert('You\'re fucked up');
}
*/


/*let month  = +prompt('Enter month name');

if (month === 12||month === 1||month === 2) {

    console.log('winter');
}


else if (month === 3||month === 4||month === 5) {

    console.log('spring');
}


else if (month === 6||month === 7||month === 8) {

    console.log('summer');
}

else if  (month === 9||month === 10||month === 11) {

    console.log('autumn');
}

else {
    console.log('fuckup');
}*/
//
// else if  (3<=month<=5 );


/*homework
let hotel  = +prompt('Enter your number');

if (hotel === 1) {
    console.log('taba');
}

else if (hotel === 2) {
    console.log('sharm')
}

else if (hotel === 3) {
    console.log('hurgada')
}

else {
    console.log('fuckup');
}*/



/*let luckyNumber = 8;

switch (luckyNumber) {
    case 1:
        console.log('it is one');
      break;

    case 8:
        console.log('it is eight');
        break;
}*/


// ternirary operator

/*let result = a === b ? 'true' : 'false';
console.log(result);*/

// let test = 5 > 6 ?  'Evrika' : 'Too bad';
// console.log(test);

// let color = prompt('Choose your color');
// let result = color === 'white'||color === 'red' ? "Day" : "Night";
// console.log(result);


/*let hotel  = +prompt('Enter your number');

if (hotel === 1) {
    console.log('taba');
}

else if (hotel === 2) {
    console.log('sharm')
}

else if (hotel === 3) {
    console.log('hurgada')
}

else {
    console.log('fuckup');
}*/


/*let hotel  = +prompt('Enter your number');

switch (hotel) {
    case 1:
        console.log('taba');
    break;

    case 2:
        console.log('sharm');
        break;

    case 3:
        console.log('hurgada');
        break;

    default:
        console.log('fuck-up')
}*/


/*Число ціле і число плюсове-число приймається.
    Якщо ні-не приймається*/

/*My difficult task code*/
// let members  = +prompt('Enter your amount');
//
// if (!Number.isInteger(members) || !members > 0 ) {
//     alert('wrong number');
// }
//
//
//
// let sharm = 15;
// let hurgada = 25;
// let taba = 6;
//
// // if (!Number.isInteger(sharm) || members > 0||members < 15);
// if (members > sharm) {
//     confirm('согласен ли пользоваетель быть группе'+ sharm);
// }

// end of my difficult task code


// let positive =Math.sign(members);
// console.log(positive);


// let resort = +prompt('Введите число, от 1 до 3-х. 1 - Сответсвует курорту taba, 2 - курорту sharm, 3 - курорту hurgada.');
// switch (resort) {
//     case 1:
//         alert('Вы выбрали курорт taba');
//         break;
//     case 2:
//         alert('Вы выбрали курорт sharm');
//         break;
//     case 3:
//         alert('Вы выбрали курорт hurgada');
//         break;
//     default:
//         alert('Внимание! Введено число, варианта курорта для которого не было!');
//         break;
// }



/*
let groupNum = +prompt('Введите число участников группы, это должно быть целое число.');
let resortTaba = 6;
let resortSharm = 15;
let resortHurgada = 25;
let resort;
if (groupNum < 0 || parseInt(groupNum) !== groupNum) {
    alert('Вы ввели не целое число, поедет полтора землекопа?');
}
else if (groupNum <= 6) {
    resort = confirm('Для вашей группы есть место в отеле Taba, зарезервировать Вам место?');
    if (resort === true) {
        alert('Спасибо место зарезервировано.');
        resortTaba = resortTaba - groupNum;
        console.log(resortTaba);
    } else if (resort === false) {
        resort = confirm('Для вашей группы есть место в отеле Sharm, зарезервировать Вам место?');
        if (resort === true) {
            alert('Спасибо место зарезервировано.');
            resortSharm = resortSharm - groupNum;
            console.log(resortSharm);
        } else if (resort === false) {
            resort = confirm('Для вашей группы есть место в отеле Hurgada, зарезервировать Вам место?');
            if (resort === true) {
                alert('Спасибо место зарезервировано.');
                resortHurgada = resortHurgada - groupNum;
                console.log(resortHurgada);
            } else {
                alert('Или вы ошиблись, тогда начните поиск сначала или вы очень привередливы.');
            }
        }
    }
}
else if (groupNum > 6 && groupNum <= 15) {
    resort = confirm('Для вашей группы есть место в отеле Sharm, зарезервировать Вам место?');
    if (resort === true) {
        alert('Спасибо место зарезервировано.');
        resortSharm = resortSharm - groupNum;
        console.log(resortSharm);
    } else if (resort === false) {
        resort = confirm('Для вашей группы есть место в отеле Hurgada, зарезервировать Вам место?');
        if (resort === true) {
            alert('Спасибо место зарезервировано.');
            resortHurgada = resortHurgada - groupNum;
            console.log(resortHurgada);
        }else {
            alert('Или вы ошиблись, тогда начните поиск сначала или вы очень привередливы.');
        }
    }
}
else if (groupNum > 15 && groupNum <= 25) {
    resort = confirm('Для вашей группы есть место в отеле Hurgada,зарезервировать Вам место?');
    if (resort === true) {
        alert('Спасибо место зарезервировано.');
        resortHurgada = resortHurgada - groupNum;
        console.log(resortHurgada);
    }else {
        alert('Или вы ошиблись, тогда начните поиск сначала или вы очень привередливы.');
    }
}
else if (groupNum > 25) {
    alert('Вам нужна казарма! Мест нет!');
}*/

/*let year = +prompt('Enter year');
let century = Math.ceil((year+1)/100);
alert(century);*/

