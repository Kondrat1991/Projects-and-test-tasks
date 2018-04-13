// 1 task

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






// by switch
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


// Vasiliy task code

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



// second task


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
