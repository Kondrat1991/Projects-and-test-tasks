const galleryItems = {
    images:[
        { img: 'https://placeimg.com/300/150/animals', text: 'animals' },
        { img: 'https://placeimg.com/300/150/arch', text: 'architecture' },
        { img: 'https://placeimg.com/300/150/nature', text: 'nature' },
        { img: 'https://placeimg.com/300/150/people', text: 'people' },
        { img: 'https://placeimg.com/300/150/tech', text: 'tech' },
        { img: 'https://placeimg.com/300/150/any', text: 'random' }
    ]
};

let div = document.querySelector(".gallery-content");
let input = document.querySelector("#gallery-item").innerHTML.trim();
let template = Handlebars.compile(input);
let result = template(galleryItems);
console.log(result);
div.innerHTML = result;

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

