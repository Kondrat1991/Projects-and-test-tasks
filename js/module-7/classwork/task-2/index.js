/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
function createPostCard() {
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'post');
    let img = document.createElement('img');
    img.setAttribute('src', 'http://via.placeholder.com/400x150');
    img.setAttribute('alt', 'post image');
    img.classList.add('post__image');
    mainDiv.appendChild(img);
    let h2 = document.createElement('h2');
    h2.setAttribute('class', 'post__title');
    h2.classList.add('post__title');
    h2.innerText = 'Lorem ipsum dolor';
    mainDiv.appendChild(h2);
    let p = document.createElement('p');
    p.classList.add('post__text');
    p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate esse iusto laudantium necessitatibus reiciendis voluptatibus? Non reprehenderit repudiandae voluptatum? Nesciunt.';
    mainDiv.appendChild(p);
    let ul = document.createElement('ul');
    ul.classList.add('actions,post__actions');
    let li1 = document.createElement('li');
    li1.classList.add('actions__item');
    let btn = document.createElement('button');
    btn.classList.add('actions__btn');
    let span1 = document.createElement('span');
    span1.classList.add('actions__icon','actions__icon--like');
    let span2 = document.createElement('span');
    span2.classList.add('actions__count');
    span2.innerText = '0';
    btn.appendChild(span1);
    btn.appendChild(span2);
    li1.appendChild(btn);
    let li2 = li1.cloneNode(true);
    let li3 = li1.cloneNode(true);
    li1.children[0].children[0].classList.add('actions__icon--like');
    li2.children[0].children[0].classList.add('actions__icon--like');
    li3.children[0].children[0].classList.add('actions__icon--like');
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    mainDiv.appendChild(ul);



    //console.log(mainDiv);
    return mainDiv;
}

//(createPostCard());


document.body.appendChild((createPostCard()));

