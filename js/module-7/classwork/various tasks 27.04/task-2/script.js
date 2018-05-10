/*
1) Створити в HTML 5 кнопок
2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
3) Нова позиція кнопок має бути випадковою
4) Кнопки не повинні виїжати за межі екрану
5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
6) Переміщення кнопок зробити плавним за допомогою transition
7) Визначати кнопку на якій відбулася подія двома способами:
    7.1) event
7.2) this
8) Корисні команди:
    window.innerWidth
window.innerHeight
clientHeight
clientWidth
mouseenter*/

// function random(num) {
//     return Math.floor(Math.random() * num);
// }
//
//
// function handleMouseEnter(event) {
//     console.log(event.target.tagName);
//     if(event.target.tagName === 'BUTTON') {
//         event.target.style.top = random(window.innerHeight) + 'px';
//         event.target.style.left = random(window.innerWidth) + 'px';
//         // console.log(event.target.style.top);
//         // console.log(event.target.style.left);
//     }
// }
// document.body.addEventListener('mouseenter', handleMouseEnter);

function random(num) {
    return Math.floor(Math.random() * num);
}


function handleMouseEnter(event) {
    //console.log(event.target.tagName);

        event.target.style.top = random(window.innerHeight - event.target.clientHeight) + 'px';
        event.target.style.left = random(window.innerWidth- event.target.clientWidth) + 'px';
        // console.log(event.target.style.top);
        // console.log(event.target.style.left);
}
Array.from(document.body.children).forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter);
});





// document.body.children.forEach()
//
// document.body.addEventListener('mouseenter', handleMouseEnter);






