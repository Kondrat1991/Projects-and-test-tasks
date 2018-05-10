//by reduce

const listItems = [
    { name: 'item 1', count: 2 },
    { name: 'item 2', count: 4 },
    { name: 'item 3', count: 12 },
    { name: 'item 4', count: 29 }
];


let container = document.querySelector(".container");

let input = document.querySelector("#list").innerHTML.trim();
let template = Handlebars.compile(input);

let getResult = listItems.reduce(function(acc, item,) {
    return acc + template(item)},"");

container.innerHTML = getResult;



//by each

// const listItems = {
//     itemsArr:[
//         { name: 'item 1', count: 2 },
//         { name: 'item 2', count: 4 },
//         { name: 'item 3', count: 12 },
//         { name: 'item 4', count: 29 }
//     ]
// };
//
//
// let container = document.querySelector(".container");
// let input = document.querySelector("#list").innerHTML.trim();
// let template = Handlebars.compile(input);
//
// let result = template(listItems);
// console.log(result);


//container.innerHTML = result;


// const galleryItems = [
//     {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//     {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//     {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//     {img: 'https://placeimg.com/300/150/people', text: 'people'},
//     {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//     {img: 'https://placeimg.com/300/150/any', text: 'random'}
// ];
//
// const container = document.querySelector('.gallery-content');
// const source = document.querySelector('#gallery-item').innerHTML.trim();
// const template = Handlebars.compile(source);
//
// const markup = galleryItems.reduce((acc, item) => acc + template(item), '');
// console.log(markup);


