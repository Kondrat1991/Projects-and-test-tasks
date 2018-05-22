'use strict'
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

let sizeArr = [...new Set(laptops.map(el => el.size === 13 || el.size === 15 || el.size === 17 ? el.size : null))];

let colorArr = [...new Set(laptops.map(el => el.color === 'white' || el.color === 'black' || el.color === 'gray' ? el.color : null))];

let releaseDateArr = [...new Set(laptops.map(el => el.releaseDate === 2015 || el.releaseDate === 2016 || el.releaseDate === 2017 ? el.releaseDate : null))];

filter.size = sizeArr;
filter.color = colorArr;
filter.releaseDate = releaseDateArr;
console.log(filter);

const source = document.querySelector('#size').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = filter.size.reduce((acc, el) => acc + template(el), '');
const sizeBox = document.querySelector('.size-box');
sizeBox.innerHTML = markup;

//Homework
const color = document.querySelector('#color').innerHTML.trim();
const colorTemplate = Handlebars.compile(color);
const colorMarkup = filter.color.reduce((acc, el) => acc + colorTemplate(el), '');
const colorBox = document.querySelector(".color-box");
colorBox.innerHTML = colorMarkup;

const release = document.querySelector('#release_date').innerHTML.trim();
const releaseTemplate = Handlebars.compile(release);
const releaseMarkup = filter.releaseDate.reduce((acc, el) => acc + releaseTemplate(el), '');

const releaseBox = document.querySelector(".release_date");
releaseBox.innerHTML = releaseMarkup;

let container = document.querySelector("#container");//knock to ul
let input = document.querySelector("#store").innerHTML.trim();
let fullTemplate = Handlebars.compile(input);

//Sasha help

function render(laptops, template) {

    let getResult = laptops.reduce(function (acc, item,) {
        return acc + template(item)
    }, "");
    container.innerHTML = getResult;
}

render(laptops, fullTemplate);//default Html with all items

let form = document.querySelector("#form");
console.log(form);

// function paintHTML() {
//     let arrFilters = {
//         size: [],
//         color: [],
//         releaseDate: [],
//     };
//     for (let item of form) {
//         if (item.checked) {
//             arrFilters[item.name].push(item.value);
//         }
//     }
//     console.log(arrFilters);
//
//     let newCard = [...laptops];
//     console.log(newCard);
//     for (let key in arrFilters) {
//
//         if (arrFilters[key].length > 0) {
//             newCard = newCard.filter(function (elem) {
//                 for (let item of arrFilters[key]) {
//                     if (elem[key] + '' === item) {
//                         return true;
//                     }
//                 }
//             });
//         }
//     }
//
//     //Denis help
//     for (let key in arrFilters) {
//         for (let item in arrFilters[key]) {
//             newCard.reduce(el => el[key] + '' === item);
//             console.log("inner-newCard", newCard);
//         }
//     }
//     console.log("arrFilters", arrFilters);
//     console.log("newCard", newCard);
//     render(newCard, fullTemplate)
// }

function paintHTML() {
    let arrFilters = {
        size: [],
        color: [],
        releaseDate: [],
    };
    for (let item of form) {
        if (item.checked) {
            arrFilters[item.name].push(item.value);
        }
    }

    let newCard = [...laptops];

    for (let filter in arrFilters) {
        if (arrFilters[filter].length > 0) {
            newCard = newCard.reduce((acc, item) => {
                if (arrFilters[filter].includes(item[filter] + '')) {
                    acc.push(item);
                }
                //console.log(acc);
                return acc;
            }, []);
        }
        console.log(arrFilters);
        console.log(newCard);
    }
    render(newCard, fullTemplate)
}

document.querySelector("#filter").addEventListener("click", function () {
        event.preventDefault();
        paintHTML();
    }
);

// let ulSize = document.querySelectorAll(`.size-box [type="checkbox"]`);
// let ulColor = document.querySelectorAll(`.color-box [type="checkbox"]`);
// let ulReleaseDate = document.querySelectorAll(`.release_date [type="checkbox"]`);

// arrFilters = form.reduce((acc, item) => {
//     if (item.checked) {
//         acc.item[item.name].push(item.value);
//     }
//     console.log(arrFilters);
//     return acc;
// }, []);


// function paintHTML() {
//     let sizes = Array.from(ulSize).reduce((acc, item) => {
//         if(item.checked) {
//             acc.push(item.value);
//         }
//         return acc;
//     }, []);
//     let colors = Array.from(ulColor).reduce((acc, item) => {
//         if(item.checked) {
//             acc.push(item.value);
//         }
//         return acc;
//     }, []);
//     let dates = Array.from(ulReleaseDate).reduce((acc, item) => {
//         if(item.checked) {
//             acc.push(item.value);
//         }
//         return acc;
//     }, []);
//
//
//     let resultPaint = [...laptops];
//     if(sizes.length > 0) {
//         resultPaint =  resultPaint.filter((item) => {
//             for(let key in item) {
//                 if(sizes.includes('' +item [key])){
//                     return true;}
//             }
//         });
//     }
//     if(colors.length > 0) {
//         resultPaint =  resultPaint.filter((item) => {
//             for(let key in item) {
//                 if(colors.includes('' + item[key])){
//                     return true;}
//             }
//         });
//     }
//     if(dates.length > 0) {
//         resultPaint =  resultPaint.filter((item) => {
//             for(let key in item) {
//                 if(dates.includes('' + item[key])){
//                     return true;}
//             }
//         });
//     }
//     console.log(resultPaint);
//     render(resultPaint,fullTemplate);
// }




