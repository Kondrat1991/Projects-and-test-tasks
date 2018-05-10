'use strict'


class Account {
    constructor ( name, lastName, email, password, country, town, birthday, self, img){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.country = country;
        this.town = town;
        this.birthday = birthday;
        this.self = self;
        this.img = img;
    }
    // getAccountInfo () {
    //
    // }
}

// let result = new Account ('me', 'last', 'ema', 'pass', 'cou', 'tow', 'day', 'elf')
// console.log (result)

// let arrAccounts = [];

let arrAccounts;

if(JSON.parse(localStorage.getItem('arrAccounts')) === null) {
    arrAccounts = [];
} else {
    arrAccounts = JSON.parse(localStorage.getItem('arrAccounts'));
}

function getFormValue () {
    event.preventDefault();
    let name = document.querySelector('.name').value;
    let lastName = document.querySelector('.last-name').value;
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    let country = document.querySelector('.country').value;
    let town = document.querySelector('.town').value;
    let birthday = document.querySelector('.birthday').value;
    let self = document.querySelector('#self').value;
    let img = document.querySelector('.img').value;

    let account = new Account(name, lastName, email, password, country, town, birthday, self, img);
    console.log(arrAccounts);
    let accountError = arrAccounts.some(el => el.name === account.name || el.email === account.email);

    if(!accountError){
        arrAccounts.push(account);
        localStorage.setItem('arrAccounts', JSON.stringify(arrAccounts));
    }
    console.log(arrAccounts);

}

document.querySelector('.submit').addEventListener('click', getFormValue);

// document.addEventListener('DOMContentLoaded', function () {
//     if (JSON.parse(localStorage.getItem('arrAccounts')) !== null){
//         arrAccounts = JSON.parse(localStorage.getItem('arrAccounts'))
//     }
// });


// localStorage.setItem('let', JSON.stringify(let));
// JSON.parse(localStorage.getItem('let'));
// localStorage.removeItem('let');
// localStorage.clear();



// let app = document.querySelector('.app-ctrls');

// let select = document.createElement('select');
// select.classList.add('app-ctrls__select');
// app.appendChild(select);

// for(let el of arrAccounts) {
//     let option = document.createElement('option');
//     option.setAttribute('value', el['name']);
//     option.textContent = el['name'];
//     select.appendChild(option);
// }

// let button = document.createElement('button');
// button.classList.add('app-ctrls__btn');
// button.textContent = 'Show Profile'
// app.appendChild(button);


let app = document.querySelector('.app-ctrls');

function  create(tag, classTag, attributeName, attributeValue, text, position) {
    let select = document.createElement(tag);
    select.classList.add(classTag);
    select.setAttribute(attributeName, attributeValue);
    select.textContent = text;
    position.appendChild(select);
    return select;
}


let select = create('select', 'app-ctrls__select', null, null, null, app);

for(let el of arrAccounts) {
    create('option', null, 'value', el['name'], el['name'], select);
}

let button = create('button', 'app-ctrls__btn', null, null, 'Show Profile', app);







button.addEventListener('click', function ()
{
    let formNone = document.querySelector('.user-ac');
    formNone.style.display = 'none';

    let userAc = document.querySelector('.account-user');
    userAc.innerHTML = '';
    userAc.style.display = 'block';


    let newSelect = document.querySelector('.app-ctrls__select').value;
    console.log(newSelect);

    let findSelect = arrAccounts.find(el => el.name === newSelect);
    console.log(findSelect);

    let div = document.createElement('div');
    div.setAttribute('id', 'card');
    userAc.appendChild(div);

    let img = document.createElement('img');
    img.setAttribute('id', 'userImage');
    img.setAttribute('alt', 'user-image');
    img.setAttribute('src', findSelect.img);
    div.appendChild(img);

    let i = create('i', 'fa', 'id', 'badge', null, div);
    let h4 = create('h4', null, 'id', 'playerName', findSelect.name, div);

    let divStates = create('div', null, 'id', 'states', null, div);

    let ul = create('ul', null, 'id', 'info', null, divStates);

    // let li = create('li', null, null, null, findSelect.country, ul);

    // let liTwo = create('li', null, null, null, findSelect.town, ul);

    for (let el in findSelect){
        if ( el !== 'password' && el !== 'name' && el !== 'lastName' && el !== 'img') {
            let li = create('li', null, null, null, el, ul);
            console.log(el !== 'password');
            console.log(el !== 'name');

        }
    }


    let ulNew = create('ul',null, 'id', 'values', null, divStates);
    for (let el in findSelect){
        if ( el !== 'password' && el !== 'name' && el !== 'lastName' && el !== 'img') {
            let li = create('li', null, null, null, findSelect[el], ulNew);
            console.log(el !== 'password');
            console.log(el !== 'name');

        }
    }

    let btn = create('button', null, 'id', 'contactBtn', 'Exit', div);
    console.log(btn)

    btn.addEventListener('click', function (){
        formNone.style.display = 'block';
        userAc.style.display = 'none';
    })
})


//(tag, classTag, attributeName, attributeValue, text, position)


/* <div id='card'>
  <img alt='user-image' id='userImage' src='https://randomuser.me/api/portraits/men/62.jpg'>
  <i class='fa fa-gamepad' id='badge'></i>
  <h4 id='playerName'>sn4ever</h4>
  <div id='states'>
    <ul id='info'>
      <li>
        Followers
      </li>
      <li>
        Following
      </li>
      <li>
        Reputation
      </li>
      <li>
        Rank
      </li>
    </ul>
    <ul id='values'>
      <li>150k</li>
      <li>1820</li>
      <li>98%</li>
      <li>Expert</li>
    </ul>
  </div>
  <a href='#' id='contactBtn'>
    <i class='fa fa-paper-plane spin'></i>
    Contact
  </a>
</div> */