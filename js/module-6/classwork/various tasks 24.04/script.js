/*
  Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.

  Это ОБЯЗАТЕЛЬНО должен быть объект со свойствами и методами. Для создания объекта
  используйте функцию-конструктор, принимающую следующие параметры:
    - users - массив пользователей. Каждый пользователь это объект с полями:
        id - уникальный идентификатор
        login - почта
        password - пароль
        isActive - статус активности
    - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойтсв
      являются массивы постов пользователя. Каждый пост состоит из:
        id - уникальный идентификатор
        text - текст поста
        likes - количество лайков поста
*/



/*
  Используйте следующий массив пользователей при создании экземпляра SocialBook
*/


// Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.

// массив пользователей при создании экземпляра
"user strict";

// Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.

// массив пользователей при создании экземпляра
const initialUsers = [
    {id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true},
    {id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true},
    {id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false}
];
// объект постов пользователей при создании экземпляра
const initialPosts = {
    "-s19a6hqce": [
        {id: "-5sgljaskg", text: "post #1", likes: 3},
        {id: "-199hb6igr", text: "post #2", likes: 5},
        {id: "-hy0eyw5qo", text: "post #3", likes: 13}
    ],
    "-qkpzenjxe": [
        {id: "-5tu69g5rf", text: "post #1", likes: 8},
        {id: "-bje766393", text: "post #2", likes: 15}
    ],
    "-e51cpd4di": [
        {id: "-9y6nkmlj4", text: "post #1", likes: 18},
        {id: "-i03pbhy3s", text: "post #2", likes: 45}
    ],
};
//вариант, когда выносим функцию в глоабльную область видимости
// const getId = () => "-" + Math.random().toString(36).substr(2, 9);


function SocialBook(users = [], posts = {}) {

    this.users = users;
    this.posts = posts;
    // возвращающую уникальную ID
    this.getId = () => "-" + Math.random().toString(36).substr(2, 9);
    // возвращает массив всех пользователей
    this.getAllUsers = function () {
        return this.users
    };
    // ищет и возвращает объект пользователя с совпадающим логином
    this.getUserByLogin = function (login) {
        for (let obj of this.users) {
            if (obj.login === login) {
                return obj
            }
        }
    };
    // ищет пользователя по id и возвращает 'active'
    // если isActive true, в противном случае возвращает 'inactive'.
    this.getUserStatus = function (userId) {
        for (let obj of this.users) {
            if (obj.id === userId) {
                if (obj.isActive === true) {
                    return 'active'
                }
                else {
                    return 'inactive'
                }

            }
        }
    };
    // принимает объект с полями и добавляет в свойство users.
    this.addUser = function (user) {
        user.id = this.getId();
        // user.id = "-" + Math.random().toString(36).substr(2, 9);
        this.users.push(user);
        return this.getAllUsers();
    }
    // возвращает общее количество пользователей
    // this.getUsersCount=function(){
    // }

    this.removeUserById = function(userId) {
        this.users = this.users.filter(function (item) {
            if(userId !== item.id ) {
                return item;
            }
        })
        console.log(this.users);
        //return this.users;

    }

    this.getUsersCount = function () {
        return this.users.length;
    }

       // - getUserPosts(userId) - возвращает массив постов пользователя с id равным userId
    this.getUserPosts = function (userId) {
        return this.posts[userId];
    }

        //- addPost(userId, post) - добавляет post в поле posts объекта socialBook по ключу userId.
    this.addPost = function (userId, text) {
        let defaultPostObject = {id: this.getId(), text: text, likes: 0};
        console.log(defaultPostObject);
        this.posts[userId].push(defaultPostObject);
        return this.posts;
    }
    this.removePost = function (userId, postId) {
        console.log('before post delete', this.posts[userId]);
        this.posts[userId] = this.posts[userId].filter((item) => item.id !== postId);
        console.log('after post delete', this.posts[userId]);
    }
    this.getAllLikes = function(userId) {
      return this.posts[userId].reduce((current, next) => current = current + next.likes, 0);
    }
    this.addPostLike = function(userId, postId) {
        for (let item of this.posts[userId]){
            if(item.id === postId){
                item.likes = item.likes + 1;
            }
        }
        return this.posts[userId];
    }
    this.getPostsCount = function(userId){
        return this.posts[userId].length;
    }
}
let acountManager = new SocialBook(initialUsers, initialPosts);
console.log("Создали экземпляр объекта SocialBook и сохранили его в переменной --->", acountManager);
console.log("возвращает массив всех пользователей", acountManager.getAllUsers());
console.log("ищет и возвращает объект пользователя с совпадающим логином", acountManager.getUserByLogin("mangozedog@mail.com"));
console.log("ищет пользователя по id и возвращает 'active'", acountManager.getUserStatus("-e51cpd4di"));
console.log("принимает объект с полями и добавляет в свойство users.", acountManager.addUser({
    id: "", login: "123@mail.com", password: "123", isActive: true
}));
//acountManager.removeUserById('-s19a6hqce');
//console.log(this.getId);
//acountManager.addPost("-e51cpd4di");
console.log(acountManager.addPost("-e51cpd4di", 'kerkestrumbe'));
//console.log(acountManager.getUserPosts("-e51cpd4di"));
//console.log(acountManager.getUsersCount());
acountManager.removePost("-s19a6hqce", "-hy0eyw5qo")
//
// // this.addUser = function (user)  в котором--> user.id = "-" + Math.random().toString(36).substr(2, 9);
// console.log("принимает объект с полями и добавляет в свойство users.", acountManager.addUser({
//     id: "", login: "123@mail.com", password: "123", isActive: true
// }));
console.log(acountManager.getAllLikes("-s19a6hqce"));
console.log(acountManager.addPostLike("-s19a6hqce", "-199hb6igr"));
console.log(acountManager.getAllLikes("-s19a6hqce"));
console.log(acountManager.getPostsCount("-s19a6hqce"));
///IMPORTANT!!!!!!!!!!!11111111
//How to knock to key
//initialPosts["-s19a6hqce"][0].likes


/*
  Для создания уникального идентификатора для поля id, используйте
  вспомогательную функцию getId(), возвращающую уникальную строку.

  К примеру: const user = { id: getId(), name: 'Mango' };
*/
//const getId = () => "-" + Math.random().toString(36).substr(2, 9);

/*
  Добавьте в SocialBook следующие методы для работы с пользователями:
    - getAllUsers() - возвращает массив всех пользователей

    - getUserByLogin(login) - ищет и возвращает объект пользователя с совпадающим логином

    - getUserStatus(userId) - ищет пользователя по id и возвращает 'active'
      если isActive true, в противном случае возвращает 'inactive'.

    - addUser(user) - принимает объект с полями и добавляет в свойство users.

    - removeUserById(userId) - удаляет пользователя из массива пользователей по полю id

    - getUsersCount() - возвращает общее количество пользователей
*/

/*
  ***ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - выполнять по желанию***
  Добавьте в SocialBook следующие методы для работы с постами пользователей:
    - getUserPosts(userId) - возвращает массив постов пользователя с id равным userId

    - addPost(userId, post) - добавляет post в поле posts объекта socialBook по ключу userId.

    - removePost(userId, postId) - удаляет post с id равным postId из поля posts
      объекта socialBook по ключу userId

    - getAllLikes(userId) - возвращает сумму всех полей likes постов пользователя с id равным userId

    - addPostLike(userId, postId) - увеличивает значение поля likes на 1 у поста с id равным postId,
      для пользователя с id равным userId

    - getPostsCount(userId) - возвращает общее количество постов пользователя с id равным userId
*/



