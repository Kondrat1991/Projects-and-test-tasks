function returnCash() {
    fetch(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(function (data) {
            return data.json()
        }).then(function (resulst) {
        console.log(resulst);
        createHtml(resulst);
    })
}
function returnBank() {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        .then(data => data.json())
        .then(result => createHtml(result));
}

function createHtml(resulst) {
    let reduceResult = resulst.reduce(function (acc, elem, i) {
        return acc +  `
<tr scope="row">  
<td >${i+1}</td>
    <td>${elem.ccy}</td>
    <td>${elem.buy}</td>
     <td>${elem.sale}</td>
     
   </tr>`
    },``);

    let table = `<table class="table table-dark">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Валюта</th>
        <th scope="col">Покупка</th>
        <th scope="col">Продаж</th>
    </tr>
    </thead>
    ${reduceResult}
    </table>`

document.querySelector('.container').innerHTML = table;
}

let button1 = document.querySelector('.btn1');
let button2 =  document.querySelector('.btn2');

button1.addEventListener('click',returnCash );
button2.addEventListener('click',returnBank );

//

//5018958-ed49ccd90878e6614abdf24a6















