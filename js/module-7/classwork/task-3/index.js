/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// function createPostCard() {
//     let mainDiv = document.createElement('div');
//     mainDiv.setAttribute('class', 'post');
//     let img = document.createElement('img');
//     img.setAttribute('src', 'http://via.placeholder.com/400x150');
//     img.setAttribute('alt', 'post image');
//     img.classList.add('post__image');
//     mainDiv.appendChild(img);
//     let h2 = document.createElement('h2');
//     h2.setAttribute('class', 'post__title');
//     h2.classList.add('post__title');
//     h2.innerText = 'Lorem ipsum dolor';
//     mainDiv.appendChild(h2);
//     let p = document.createElement('p');
//     p.classList.add('post__text');
//     p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate esse iusto laudantium necessitatibus reiciendis voluptatibus? Non reprehenderit repudiandae voluptatum? Nesciunt.';
//     mainDiv.appendChild(p);
//     let ul = document.createElement('ul');
//     ul.classList.add('actions,post__actions');
//     let li1 = document.createElement('li');
//     li1.classList.add('actions__item');
//     let btn = document.createElement('button');
//     btn.classList.add('actions__btn');
//     let span1 = document.createElement('span');
//     span1.classList.add('actions__icon','actions__icon--like');
//     let span2 = document.createElement('span');
//     span2.classList.add('actions__count');
//     span2.innerText = '0';
//     btn.appendChild(span1);
//     btn.appendChild(span2);
//     li1.appendChild(btn);
//     let li2 = li1.cloneNode(true);
//     let li3 = li1.cloneNode(true);
//     li1.children[0].children[0].classList.add('actions__icon--like');
//     li2.children[0].children[0].classList.add('actions__icon--like');
//     li3.children[0].children[0].classList.add('actions__icon--like');
//     ul.appendChild(li1);
//     ul.appendChild(li2);
//     ul.appendChild(li3);
//     mainDiv.appendChild(ul);
//
//
//
//     //console.log(mainDiv);
//     return mainDiv;
// }
//
// //(createPostCard());
//
//
// document.body.appendChild((createPostCard()));

// const posts = [
//     {
//         img: "https://placeimg.com/400/150/arch",
//         title: "Post title 1",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//         stats: {
//             likes: 6,
//             dislikes: 2,
//             fav: 3
//         }
//     },
//     {
//         img: "https://placeimg.com/400/150/nature",
//         title: "Post title 2",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//         stats: {
//             likes: 124,
//             dislikes: 8,
//             fav: 36
//         }
//     },
//     {
//         img: "https://placeimg.com/400/150/arch",
//         title: "Post title 3",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//         stats: {
//             likes: 800,
//             dislikes: 36,
//             fav: 147
//         }
//     }
// ];
//
// function createPostCard(post) {
//
//  let typicalString = `    <div class="post">
//         <img class="post__image" src="${post.img}" alt="post image">
//         <h2 class="post__title">${post.title}</h2>
//         <p class="post__text">${post.text}</p>
//
//         <ul class="actions post__actions">
//             <li class="actions__item">
//                 <button class="actions__btn ">
//                     <span class="actions__icon actions__icon--like"></span>
//                     <span class="actions__count">${post.stats.likes}</span>
//                 </button>
//             </li>
//             <li class="actions__item">
//                 <button class="actions__btn">
//                     <span class="actions__icon actions__icon--dislike"></span>
//                     <span class="actions__count">${post.stats.dislikes}</span>
//                 </button>
//             </li>
//             <li class="actions__item">
//                 <button class="actions__btn">
//                     <span class="actions__icon actions__icon--fav"></span>
//                     <span class="actions__count">${post.stats.fav}</span>
//                 </button>
//             </li>
//         </ul>
//     </div>
// `;
//
//
//  return typicalString;
// }
//console.log(createPostCard(posts[0]));
// document.body.innerHTML = createPostCard(posts[0]);
// document.body.insertAdjacentHTML('beforeEnd',createPostCard(posts[1]));
// document.body.insertAdjacentHTML('beforeEnd',createPostCard(posts[2]));

// - Создайте функцию makeCards(posts), которая принимает массив
// объектов-карточек, вызывает функцию createPostCard(post) столько
// раз, сколько объектов в массиве, сохраняя общий результат
// и возвращает строку с разметкой всех постов.

// function makeCards(posts) {
//     let result = '';
//     for (let i = 0; i < posts.length; i++) {
//         result = result + createPostCard(posts[i]);
//     }
//     return result;
// }
//     document.body.insertAdjacentHTML('beforeend', makeCards(posts));
// makeCards(posts);



// const makeCards = function (posts) {
//     let allCode = `<ul>${posts.reduce((acc, item) => acc + `<li>${createPostCard(item)}</li>`,'')}</ul>`;
//     document.body.insertAdjacentHTML('beforeend', allCode);
// };
// makeCards(posts);


// let myBtn = document.querySelector('#btn');
// let obj = {
//     name: 'Chuck',
//     showName: function (event) {
//         alert(this.name);
//     }
// }
// myBtn.addEventListener('click', obj.showName.bind(obj));


/*let parent = document.querySelector("ul");
 function handleClick (event) {
     console.log('current-target', event.currentTarget);
     console.log('target', event.target);
     event.target.classList.toggle('active');
 }
 parent.addEventListener('click', handleClick);*/

let input = document.querySelector("#inp");
function handleMouseMove(ev) {
    let target = ev.target;
    if (target.tagName !== 'LI'){
        input = (`x: ${ev.clientX} y: ${ev.clientY}`);
    }
}
document.addEventListener('mousemove', handleMouseMove );
//console.log(input);


// - Модифицируйте готовую функцию createPostCard()  так,
//     чтобы она использовала не createElement, а возвращала
// строку с тегами, которую потом можно будет поставить в документ
// используя innerHTML или insertAdjacentHTML. Грубо говоря - шаблон поста.
//
// - Модифицировать createPostCard(post) так,
//     чтобы она принимала объект post с данными для заполнения
// полей в карточке. Используя createUserCard создать
// карточки для 3-х разных постов по данному массиву
// объектов и повесить их в документ.
//
// - Создайте функцию makeCards(posts), которая принимает массив
// объектов-карточек, вызывает функцию createPostCard(post) столько
// раз, сколько объектов в массиве, сохраняя общий результат
// и возвращает строку с разметкой всех постов.
//
// - Повесьте все посты в какой-то уже существующий DOM-узел.
//
// - Подсказка: для того чтобы создать список ,
//     необходимо в интерполяции использовать reduce,
//     вернув строку с разметкой. Например:
//
// const string = `<ul>${[1, 2, 3].reduce((acc, x) => acc + `<li>${x}</li>`, '')}</ul>`;
//
// Таким образом на место вызова reduce верентся строка с тегами,
//     которую можно поставить через innerHTML или insertAdjacentHTML.
//
// console.log(string); // '<ul><li>1</li><li>2</li><li>3</li></ul>'
// */




