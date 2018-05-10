let total = document.querySelector(".total");
let form = document.querySelector(".form");

function calc() {
    let price =  document.querySelector("#price").value;
    let range = document.querySelector("#quantity").value;
    document.querySelector(".amount").innerText = range;
    total.textContent= `${(price * range).toFixed(2)} грн`;
}

form.addEventListener("input", calc);
//1 method
//calc();

//second method
window.addEventListener("DOMContentLoaded", calc);



