function paintGallery() {

    let value = document.querySelector('.cars').value;

    fetch(`https://pixabay.com/api/videos/?key=8926995-b3cf67a8358d2bae1ce02867a&q=${value}&video_type=all&per_page=9`)
        .then(function (cars) {
            return cars.json();
        })
        .then(function (cars) {
            console.log(cars);
            create(cars.hits);
        })
}
function create(array) {
    let div = document.querySelector('#container');

    let gallery = array.reduce((acc,elem) => {
        return acc +` <div class="one">

    <p>${elem.tags}</p>
<video src=${elem.videos.tiny.url }  controls ></video>

    </div>`
    },'');
    div.innerHTML = gallery;
}

let search = document.querySelector('.btn');
search.addEventListener('click', paintGallery);

window.addEventListener('DOMContentLoaded',  paintGallery);

window.addEventListener('keypress', function (event) {
    if(event.keyCode === 13) {
        paintGallery()
    }
    else {
        return;
    }
});



// <div class="one">
//
//     <p>Div Number One</p>
// <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScNGxPKZ4fO60NpFVXNPvmD-1QAv7SbfkVFfUdUmMp4VtDI1Ri" />
//
//     </div>





// function returnCash() {
//     fetch(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//         .then(function (data) {
//             return data.json()
//         }).then(function (resulst) {
//         console.log(resulst);
//         createHtml(resulst);
//     })
// }
// function returnBank() {
//     fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//         .then(data => data.json())
//         .then(result => createHtml(result));
// }
//
// function createHtml(resulst) {
//     let reduceResult = resulst.reduce(function (acc, elem, i) {
//         return acc +  `
// <tr scope="row">
// <td >${i+1}</td>
//     <td>${elem.ccy}</td>
//     <td>${elem.buy}</td>
//      <td>${elem.sale}</td>
//
//    </tr>`
//     },``);
//
//     let table = `<table class="table table-dark">
//     <thead>
//     <tr>
//         <th scope="col">#</th>
//         <th scope="col">Валюта</th>
//         <th scope="col">Покупка</th>
//         <th scope="col">Продаж</th>
//     </tr>
//     </thead>
//     ${reduceResult}
//     </table>`
//
// document.querySelector('.container').innerHTML = table;
// }
//
// let button1 = document.querySelector('.btn1');
// let button2 =  document.querySelector('.btn2');
//
// button1.addEventListener('click',returnCash );
// button2.addEventListener('click',returnBank );
//
//
//
// //5018958-ed49ccd90878e6614abdf24a6
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
