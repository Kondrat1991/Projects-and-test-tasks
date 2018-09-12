




// Local storage work example

/*const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
});

data.forEach(item => {
    liMaker(item);
});

button.addEventListener('click', function () {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
});*/

//end of example








/*let username = localStorage.getItem("username");
if(!username){
    username = prompt("Please enter username");
    localStorage.setItem("username", username);
}*/


/*function localStorage() {
    let myName = prompt("What is your name, friend?");
    localStorage.setItem('username', myName);
    let username = localStorage.getItem('username');
    alert(username);
}*/


/*
let myName = prompt("What is your name, friend?");
let country = prompt("What is your country, friend?");

const person = {
    name: myName,
    location: country,
};

console.log('look at person',person);



window.localStorage.setItem('user', JSON.stringify(person));
*/


/*
let myName = prompt("What is your name, friend?");
let country = prompt("What is your country, friend?");





function localStorage(myName=myName,country=country) {

    let obj = {
        item1: myName,
        item2: country,
    };

    let serialObj = JSON.stringify(obj);
    localStorage.setItem(Math.random().toString(), serialObj);
}

function clearStorage(number){
    localStorage.clear();
    money = 0;
    document.getElementById ("money").innerHTML = money;
}
*/

// localStorage.setItem(Math.random().toString(), serialObj);


/*let returnObj = JSON.parse(localStorage.getItem("myKey"));*/



/*let info =prompt(' Write name');

console.log('look at info',info);


let addItem = function (info) {

    localStorage.setItem('key', );
};



addItem();*/

/*localStorage.setItem('Кіт', 'Барсик');

let cat = localStorage.getItem('Кіт');*/
