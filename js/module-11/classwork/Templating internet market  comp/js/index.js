const laptops = [
    {
        size: 13,
        color: 'white',
        price: 28000,
        releaseDate: 2015,
        name: 'Macbook Air White 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'gray',
        price: 32000,
        releaseDate: 2016,
        name: 'Macbook Air Gray 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 13,
        color: 'black',
        price: 35000,
        releaseDate: 2017,
        name: 'Macbook Air Black 13"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'white',
        price: 45000,
        releaseDate: 2015,
        name: 'Macbook Air White 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'gray',
        price: 55000,
        releaseDate: 2016,
        name: 'Macbook Pro Gray 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 15,
        color: 'black',
        price: 45000,
        releaseDate: 2017,
        name: 'Macbook Pro Black 15"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'white',
        price: 65000,
        releaseDate: 2015,
        name: 'Macbook Air White 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'gray',
        price: 75000,
        releaseDate: 2016,
        name: 'Macbook Pro Gray 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
        size: 17,
        color: 'black',
        price: 80000,
        releaseDate: 2017,
        name: 'Macbook Pro Black 17"',
        img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
        descr:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
];
console.log(laptops);

let filter = {
    size: [],
    color: [],
    releaseDate: [],
};
let arraySize = laptops.map(item => item.size === 13 || item.size === 15 || item.size === 17 ? item.size : null);

let newArraySize = [...newSet(arraySize)];
console.log(newArraySize);
filter.size = newArraySize;


let arrayColor = laptops.map(item => item.color === 'black' || item.color === "gray" || item.color === "white" ? item.color : null);
let newArrayColor = [...newSet(arrayColor)];
filter.color = newArrayColor;

let arrayReleaseDate = laptops.map(item => item.releaseDate === 2015 || item.releaseDate === 2016 || item.releaseDate === 2017 ? item.releaseDate : null);

let newArrayReleaseDate = [...new Set(arrayReleaseDate)];
filter.releaseDate = newArrayReleaseDate;
console.log(filter);
//перезаписуем отфильтрованнй массив объекта со значениями
const source = document.querySelector("#size").innerHTML.trim();
const template = Handlebars.compile(source);
const markup = filter.size.reduce((acc, item) => acc + template(item), "");
document.querySelector(".size-box").innerHTML = markup;


// function render(data) {
//     const source = document.querySelector('#card-id').innerHTML.trim();
//     const template = Handlebars.compile(source);
//     const markup = data.reduce((acc, item) => acc + template(item), '');
//
//     const container = document.querySelector('#card');// в который вставляем всю разметку
//     container.innerHTML = markup;
//
//     //
//
//     let addCard = document.querySelectorAll(".module-card-button");//Возвращает всвдомассив
//     let btnArray = Array.from(addCard);
//
//     function clickOn(event) {
//         if (btnArray.includes(event.target)) {
//             event.target.previousElementSibling.classList.toggle("show");
//         }
//         else {
//             return
//         }
//     }
//
//     container.addEventListener("click", clickOn);
// }
//
// render(laptops);
//
// function clickOnApple() {
//     let showApple = laptops.filter(item => item.categoryId === "1");
//     render(showApple)
// }
// let cardApple = document.querySelector(".card-apple");//Достучались дод второй кнопки
// cardApple.addEventListener("click", clickOnApple);