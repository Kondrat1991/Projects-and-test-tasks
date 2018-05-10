// Додати на сторінку бібліотеку
// Створити шаблон
// Вибрати його в скрипті
// Рендер з данними

// const source = document.querySelector('#menu').innerHTML.trim();
// //
// // console.log(source);
// //
// const template = Handlebars.compile(source);
// // console.log(typeof template);
// //
// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };
// const markup = template(menuData);
// // console.log(markup);
// const container = document.querySelector('#menu-container');
// container.innerHTML = markup;


// const source = document.querySelector('#gallscript').innerHTML.trim();
// // console.log(source);
// const template = Handlebars.compile(source);
// // console.log(template);
// const galleryItems = {
//     images:[
//         {img:'https://placeimg.com/300/150/animals', text:'animals'},
//         {img:'https://placeimg.com/300/150/arch', text:'architecture'},
//         {img:'https://placeimg.com/300/150/nature', text:'nature'},
//         {img:'https://placeimg.com/300/150/people', text:'people'},
//         {img:'https://placeimg.com/300/150/tech', text:'tech'},
//         {img:'https://placeimg.com/300/150/any', text:'random'}
//     ]
// }; 
// const markup = template(galleryItems);
// // console.log(galleryItems);
// const container = document.querySelector('.gallery-content');
// container.innerHTML = markup;

// const galleryItems = [
//     {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//     {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//     {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//     {img: 'https://placeimg.com/300/150/people', text: 'people'},
//     {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//     {img: 'https://placeimg.com/300/150/any', text: 'random'}
// ];

// const container = document.querySelector('.gallery-content');
// const source = document.querySelector('#gallery-item').innerHTML.trim();
// const template = Handlebars.compile(source);

// const markup = galleryItems.reduce((acc, item) => acc + template(item), '');
// console.log(markup);

// const listItems = [
//     { name: 'item 1', count: 2 },
//     { name: 'item 2', count: 4 },
//     { name: 'item 3', count: 12 },
//     { name: 'item 4', count: 29 },
//   ];
// const container = document.querySelector('.list-container');
// const source = document.querySelector('#listscript').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = listItems.reduce((acc, item) => acc + template(item), '');
// container.innerHTML = markup;

// const listItems = {
//     itemsArr:[
//         { name: 'item 1', count: 2 },
//         { name: 'item 2', count: 4 },
//         { name: 'item 3', count: 12 },
//         { name: 'item 4', count: 29 },
//     ]
// }
// const source = document.querySelector('#listscript').innerHTML.trim();
// // console.log(source);
// const template = Handlebars.compile(source);
// // console.log(template);
// const markup = template(listItems);
// // console.log(galleryItems);
// const container = document.querySelector('.list-container');
// container.innerHTML = markup;

let phones = [
    {
        id: "1",
        categoryId: "1",
        name: "Apple iPhone 5c",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 823,
        image: 'uploads/iphone5c-selection-hero-2013.png',
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "2",
        categoryId: "1",
        name: "Apple iPhone 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 953,
        image: "uploads/51u6y9Rm8QL._SY300_.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "3",
        categoryId: "4",
        name: "Lenovo A6000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 764,
        image: "uploads/_35%20(1).JPG",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "4",
        categoryId: "5",
        name: "Nokia Lumia 1520",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "uploads/Lumia1520-Front-Back-png.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "5",
        categoryId: "3",
        name: "HTC One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "uploads/htc-one-m7-802w-dual-sim-silver.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "6",
        categoryId: "2",
        name: "Samsung Galaxy S6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    }
];
const container = document.querySelector('.phones-container');
const source = document.querySelector('#phonesscript').innerHTML.trim();
const template = Handlebars.compile(source);

function markup(arr) {
    return arr.reduce((acc, item) => acc + template(item), '');
}
// let markup = phones.reduce((acc, item) => acc + template(item), '');
container.innerHTML = markup(phones);



function handleClick(event) {
    let btn = document.querySelectorAll('.module-card-button');
    console.log(btn);
    let btnArr = Array.from(btn);
    console.log(btnArr);
    if (btnArr.includes(event.target)) {
        event.target.previousElementSibling.classList.toggle('hide');
    } else {
        return
    }
}
container.addEventListener('click', handleClick)

let iPhones = phones.filter(function (el) {
    if (el.categoryId === '1') {
        return el
    }
    return null;
});
console.log(iPhones);

let iphoneBtn = document.querySelector('.iphone');

iphoneBtn.addEventListener('click', function () {
    markup(iPhones);
    container.innerHTML = markup(iPhones);
});
container.addEventListener('click', handleClick)

let allBtn = document.querySelector('.all');

allBtn.addEventListener('click', function () {
    markup(phones);
    container.innerHTML = markup(phones);
});
container.addEventListener('click', handleClick)
