/*
  Ознакомьтесь в вкладкой HTML и CSS.

  Напишите скрипт который:
    - При клике по изображению, меняет значение атрибута alt на 'Image has been clicked on!'
    - При клике по изображению, выводит alert со значением атрибута src
    - При клике на ссылку с надписью Google, в консоль выводится значение атрибута href.
    - Каждый клик по ссылке должен поочередно добавлять и удалять класс link-active
    - При этом не должен происходить переход по ссылке!

    - При фокусе текстового поля, в консоль должна выводится строка "Input is in focus!"
    - При наборе текста в текстовое поле, текущее его значение должно отображаться в
      абзаце с классом js-input-value
*/

let img = document.querySelector('.js-img');
function heandleImg(ev) {
    img.alt = 'Image has been clicked on!';
    alert('https://placeimg.com/480/320/animals')
}
img.addEventListener('click', heandleImg);

let a = document.querySelector('.js-link');
function heandleA(ev) {
    console.log('https://google.com');
    ev.preventDefault();
    a.classList.toggle('link-active')

}
a.addEventListener('click', heandleA);

let input = document.querySelector('.js-input');
// function heandleInput(ev){
//     console.log('Input is in focus!')
// }
// input.addEventListener('focus', heandleInput);

let p = document.querySelector('.js-input-value')
function heandleChange(ev){
    let target = ev.target;
    p.innerText = target.value;
    // p.innerText = input.value; // - 2 version
}
input.addEventListener('input', heandleChange)