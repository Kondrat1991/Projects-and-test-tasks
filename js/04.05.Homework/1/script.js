"use strict"
class Account {
    constructor(email,login,name,country,town,birthday,about,avatar, img) {
        this.email = email;
        this.login = login;
        this.name = name;
        this.country = country;
        this.town = town;
        this.birthday = birthday;
        this.about = about;
        this.avatar = avatar;
        this.img = img;
    }
}

let arrAccounts = JSON.parse(localStorage.getItem("newvalue")) ? JSON.parse(localStorage.getItem("newvalue")) : [];

function getFormValue () {
    event.preventDefault();
    let email = document.querySelector(`[name = 'email']`).value;
    let login = document.querySelector(`[name='login']`).value;
    let name = document.querySelector(`[name='name']`).value;
    let country = document.querySelector(`[name='country']`).value;
    let town = document.querySelector(`[name='town']`).value;
    let birthday = document.querySelector(`[name='birthday']`).value;
    let about = document.querySelector(`[name='about']`).value;
    let avatar = document.querySelector(`[name='avatar']`).value;
    let img = document.querySelector(`[name='img']`).value;
    console.log(img);

    let account = new Account (email,login,name,country,town,birthday,about,avatar);
    let result = arrAccounts.some(function (elem) {
        return elem.login === account.login || elem.email === account.email;
    });
    console.log(result);

    if(!result) {
        arrAccounts.push(account);
        let resultJSON = JSON.stringify(arrAccounts);
        console.log(resultJSON);
    }
    else {
        alert('Already used');
    }
    console.log(arrAccounts);
    localStorage.setItem( "newvalue", JSON.stringify(arrAccounts));
    //let result2 = JSON.parse(localStorage.getItem("values"));
    //console.log(result2);
}
document.querySelector('.submit').addEventListener('click', getFormValue);
arrAccounts[0].img = 'photo.jpg';
arrAccounts[1].img = 'data:image/jpeg;base64,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';

console.log(arrAccounts[0].img)
let div = document.querySelector('.app-ctrls');// достукалися до створеного діва
//console.log(div);
let select  = document.createElement('select');//створили елемент селект
select.classList.add('app-ctrls__select');//добавили клас
div.appendChild(select);// запхнули селект всередину діва



let button = document.createElement('button');//створили баттон
button.classList.add('app-ctrls__btn');//добавили клас
button.textContent = 'Show Profile';//добавили всередину текст
div.appendChild(button);//засунули в дів

//цикл перебору массиву аррАккаунтс
for(let element of arrAccounts) // в елемент потрапляє обєкт масива
{
    let option = document.createElement('option');//створюється опшин
    option.setAttribute('value', element.name ); //добавили атрибут
    option.textContent = element.name;//добавили текст всередину
    select.appendChild(option);//вставили опшин всередину селекта
    console.log(element.name);//подивилися на елементи при переборі
}

button.addEventListener('click', selectFunction )//При події клік, в консоль виводиться значення вибраної опції.


function selectFunction() {
    let newSelect = document.querySelector('.app-ctrls__select').value;
    console.log(newSelect);

    let findSelect = arrAccounts.find(elem => newSelect === elem.name);
    console.log(findSelect);
    // let knock = document.querySelector('app-ctrls');
    // knock.style.display = 'none';

    document.querySelector("form").style.display = "none";

    let cardDiv = document.querySelector('.account');

    let card = document.createElement('div');//створили тег елемента для картинки
    card.setAttribute('id', 'card');//добавили айді
    cardDiv.appendChild(card);// запхнули селект всередину діва

    let img = document.createElement('img');
    img.setAttribute('id', 'userImage');
    img.setAttribute('src', findSelect.img);
    img.setAttribute('alt', 'user-image');
    cardDiv.appendChild(img);

    let i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-gamepad');
    i.setAttribute('id', 'badge');
    cardDiv.appendChild(i);

    let h4 = document.createElement('h4');
    h4.setAttribute('id', 'playerName');
    h4.textContent = findSelect.name;
    cardDiv.appendChild(h4);

    let states = document.createElement('div');
    states.setAttribute('id', 'states');
    cardDiv.appendChild(states);

    let ul = document.createElement('ul');
    ul.setAttribute('id', 'states');
    states.appendChild(ul);
}


// }
//
// let option = arr.reduce((acc, item) => {
//     return `<option>&{item.name}</option>`
// }, '');
//
//
// let select = `<select>${option}</select>`;
//localStorage.clear();


// function selectFunction() {
//     let valuevar = document.querySelector('.app-ctrls__select').value;
//     console.log(valuevar);
// }








