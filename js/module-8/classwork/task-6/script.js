/*
  Создать класс Account с полями login,
  email и friendsCount.

  Для класса Account, создать метод getAccountInfo(),
  который выводит в консоль значения всех полей.

  Создать несколько экземпляров с разными
  значениями свойств, вывести их в консоль.

/*
/*email*/
/*логін*/
/*імя*/
/*країну*/
/*місто*/
/*дату народження*/
/*Опис про себе*/
/*силка на аватар*/

class Account {
    constructor(login, email,friendsCount){
        this.login = login;
        this.email = email;
        this.friendsCount = friendsCount;
    }
    getAccountInfo() {
        return (`My login ${this.login} My email${this.email} Friends${this.friendsCount}`);
    }
}

let arrAccounts = [];
function getFormValue(){
    event.preventDefault();
    let login = document.querySelector(`[name='your-login']`).value;
    let email = document.querySelector(`[name='E-mail']`).value;
    let count = document.querySelector(`[name='countfriend']`).value;
    
    // console.log(count);
    //console.log(email);
    //console.log(count);

    let account = new Account (login,email,count);

    let result = arrAccounts.some(function (elem) {
        return elem.login === account.login ||elem.email === account.email;
    })
    console.log(result);
    // if(!arrAccounts.includes(account)) {
    //     arrAccounts.push(account);
    // }

    if(!result) {
        arrAccounts.push(account);
    }
    //
    else {
        alert('Already used');

    }
    console.log(arrAccounts);
    //console.log(account);
}
document.querySelector('.submit').addEventListener('click', getFormValue);




// let human = new Account('Chapy', 'vasua.com', 18);
// console.log(human);
//
// let primate = new Account('Bob', 'Bob.com', '20');
// console.log(primate);
//
// // let hominide = new Account('Pet', 'Pet.com', '24');
// // console.log(hominide);
//
//
// let form = document.querySelector(".form");
// let total = document.querySelector(".total");
//
// function loginForm() {
//     let login =  document.querySelector("#login").value;
//     let email =  document.querySelector("#email").value;
//     let friends =  document.querySelector("#friends").value;
//     console.log(login);
//
//     total.textContent= `${login} is your login ${email} email ${friends} friends`;
//
// }
//
// let next = new Account();
//
//
//
// form.addEventListener("input", loginForm);





