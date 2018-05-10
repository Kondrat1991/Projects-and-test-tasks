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

let sizeArr = [...new Set(laptops.map( el => el.size === 13 || el.size === 15 || el.size === 17 ? el.size : null))];

let colorArr = [...new Set(laptops.map( el => el.color === 'white' || el.color === 'black' || el.color === 'gray' ? el.color : null))];

let releaseDateArr = [...new Set(laptops.map( el => el.releaseDate === 2015 || el.releaseDate === 2016 || el.releaseDate === 2017 ? el.releaseDate : null))];

console.log(filter.size = sizeArr);
console.log(filter.color = colorArr);
console.log(filter.releaseDate = releaseDateArr);
console.log(filter);


const source = document.querySelector('#size').innerHTML.trim();

const template = Handlebars.compile(source);

const markup = filter.size.reduce((acc, el) => acc + template(el), '' );

console.log(markup);
const sizeBox = document.querySelector('.size-box');
sizeBox.innerHTML = markup;

//Homework
const color = document.querySelector('#color').innerHTML.trim();
const colorTemplate = Handlebars.compile(color);
const colorMarkup = filter.color.reduce((acc, el) => acc + colorTemplate(el), '' );
console.log(colorMarkup);
const  colorBox = document.querySelector(".color-box");
colorBox.innerHTML = colorMarkup;


const release = document.querySelector('#release_date').innerHTML.trim();
const releaseTemplate = Handlebars.compile(release);
const releaseMarkup = filter.releaseDate.reduce((acc, el) => acc + releaseTemplate(el), '' );
console.log(releaseMarkup);
const releaseBox = document.querySelector(".release_date");
releaseBox.innerHTML = releaseMarkup;






