"use strict";

let laptops = [
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

const filter = {
    size: [],
    color: [],
    releaseDate: []
};

function uniqItems(arr, filter) {
    for (let key in filter) {
        for (let item of arr) {
            if (!filter[key].includes(item[key])) {
                filter[key].push(item[key])
            }
        }
    }
}

uniqItems(laptops, filter);

// function createForm(obj) {
//     const bodyForm = document.querySelector('.js-form');
//     const form = document.querySelector('#form').innerHTML.trim();
//     const template = Handlebars.compile(form);
//     const markup = template(obj);
//     bodyForm.innerHTML = markup;
// }
//
// createForm(filter);

const bodyCard = document.querySelector('.body__card');
let btn = document.querySelectorAll('.module-card-button');

function createCard(arr) {
    const bodyCard = document.querySelector('.body__card');
    const card = document.querySelector('#card').innerHTML.trim();
    const template = Handlebars.compile(card);
    const markup = arr.reduce((acc,el) => acc + template(el),'');
    bodyCard.innerHTML = markup;
    btn = document.querySelectorAll('.module-card-button');
    bodyCard.addEventListener('click', handleInfo);
}
createCard(laptops);

let form = document.querySelector('.form');
let btnFilter = document.querySelector('.filter');

function handleCreateFilter() {
    let arrFilters = {
        color: [],
        size: [],
        releaseDate: [],
    };
    for (let item of form){
        if (item.checked){
            arrFilters[item.name].push(item.value);
        }
    }
    console.log(arrFilters);

    let newCards = laptops;
        for (let key in arrFilters) {
            for (let item of arrFilters[key]) {
                newCards = newCards.filter(el => el[key]+'' === item);
            }
            }

    createCard(newCards);
}

btnFilter.addEventListener('click', handleCreateFilter);

    function handleInfo(event) {
    console.log(event.target);
    if(Array.from(btn).includes(event.target)){
        event.target.previousElementSibling.classList.toggle('active');
    } else {
        return
    }
}