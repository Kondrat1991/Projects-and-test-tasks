// Объект это асоциативный массив.
// У объектов всегда есть ключи(свойства) и их значения.
// Доступ к свойствам объекта осуществляется через точку или через квадратные скобки.
// Проверка собственный свойств user.hasOwnProperty('name')
// user.name

// let user = {
//     name: 'petya',
//     age: 23,
//     sayName: () => user.name, // метод объекта
// }

// let user1 = {
//     name: 'Chuck',
//     age: 34,
//     lastName: 'Noris',
//     sayName: () => user.name, // метод объекта
// }

// console.log(user.sayName());
// console.log(user);
// console.log('Entries: ', Object.entries(user));

// // let newName = user.name;
// // let age = user.age;

// let {
//     name: newName, // деструктурирование свойства name c переименованием в newName
//     age = 23 // деструктурирование с присвоением значения по умолчанию
// } = user1; // объект из которого деструктурируем свойства

// console.log(newName);
// name = 'Bill';
// console.log(user1.name);

// // Object.assign()

// // let user2 = Object.assign({}, user, user1);
// let user2 = {...user, ...user1}; // Более короткая запись Object.assign();
// console.log('Копия объекта user1: ', user2);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let newArr = [...arr1, ...arr2]; // Array.concat(arr1, arr2)
// console.log('newArr: ', newArr);


// const chuck = {
//     name: 'Chuck',
// };

// const bill = {
//     name: 'Bill2',
// };

// function showName() {
//     return this.name;
// }

// chuck.showName = showName;
// bill.showName = showName;

// console.log(chuck.showName());
// console.log(bill.showName());
// console.log(showName());

// const petya = {
//     name: 'Petya',
//     showThis() {
//       console.log(this);
//     },
//     showName() {
//       console.log(this.name);
//     },
//   };

//   petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
//   petya.showName(); // 'Petya'

// function showName() {
//     console.log('this in showName: ', this);
//     console.log("this.name: ", this.name);
//   }

//   // Вызываем в глоабльном контексте
//   showName();
//   // this in showName: Window
//   // this.name:

//   const user = { name: "Mango" };
//   // Записываем ссылку на функцию в свойство объекта
//   // Обратите внимание, что это не вызов - нет ()
//   user.show = showName;

//   // Вызываем функцию в контексте объекта
//   // this будет указывать на текущий объект, в контексте
//   // которого осуществляется вызов, а не на глобальный объект.
//   user.show();
//   // this in showName: {name: "Mango", show: ƒ}
//   // this.name:  Mango

// const petya = {
//     name: 'Petya',
//     showThis: () => { // this будет window так как контекст в стрелочной функции берется по месту создания
//       console.log('this', this);
//     },
//     showName: () => {
//       console.log('this.name', this.name);
//     },
//   };

//   petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
//   petya.showName(); // 'Petya'

// const hotel = {
//     showThis: function () {
//       const fn = () => this;
//       console.log( fn() );
//     }
//   }

//   hotel.showThis(); // {showThis: ƒ}

// let checkWachek = ['Henry Every', 'Mick', 'Keis', 'Den', 'Alex', 'Michael', 'Katya', 'pvg', 'Danya', 'Elena MmMmM', 'Mr. Incredible'];

// let check = (checkWachek[(Math.floor(Math.random()*checkWachek.length))]);
// alert(check);


// // BIND
// let user11 = {
//     name: 'Henry',
//     lastName: 'Every',
//     showName: function () {
//         return `${this.name} ${this.lastName}`
//     }
// }
// let user2 = {
//     name: 'Chuck',
//     lastName: 'Norris'
// }

// let bindedShowName = user11.showName.bind(user2); //bind вызваный на методе showName подставляет вместо this обьект user2(привязывает контекст) и возвращает новую функцию.
// console.log(bindedShowName());

// function Hotel(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
// }

//   // В результате вызова :
//   const hotel1 = new Hotel("Resort Hotel", 5, 100);
//   const hotel2 = new Hotel("Resort ", 4, 400);
//   // получаем такой объект
//   console.log( hotel1 );
//   console.log( hotel2 );
//   // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

/*function Student(pass, name, course, age, email) {
    let password = pass;
    this.name = name;
    this.course = course;
    this.age = age;
    this.email = email;
    this.changeEmail = function () {
        this.email = prompt('New email')
        alert('Your new email changed')
    }
    this.changePassword = function () {
        let checkPass = prompt('Enter your password');
        if (checkPass === password) {
            password = prompt('Enter new pass');
            // console.log(password);
            alert ('Password changed');
        } else {
            alert(false)
        };
    }
}

const student1 = new Student('123qwe',  "Steven", 'bootcamp', 25, 'steven@com');
// const student2 = new Student("Max", 'java', 27, 'max@com');
console.log(student1);
// console.log(student2);
// student1.changePassword();

let bindedChangeEmail = student1.changeEmail.bind(student1); // привязываем контекст выполнения student1.changeEmail к объекту student1 что бы не терялся контекст при передаче этого метода как каллбек функции


let passBtn = document.querySelector('#changePass');
passBtn.addEventListener('click', student1.changePassword);
let emailBtn = document.querySelector('#changeEmail');
emailBtn.addEventListener('click', bindedChangeEmail);*/


