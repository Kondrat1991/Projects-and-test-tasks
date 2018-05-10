//let className = document.querySelector('.nav');
//console.log(className);

// console.log(nav);
// let sticky = nav.offsetTop;
// let y = window.scrollY;
// console.log(y);

// window.onscroll = function() {scrollTask()};

// function scrollTask() {
//     // console.log(window.scrollY);
//     let nav = document.querySelector('#navigation');
//
//     console.log(nav.offsetTop);
//     if (window.scrollY >= nav.offsetTop) {
//         nav.classList.add("fixed-nav")
//     } else {
//         nav.classList.remove("fixed-nav");
//     }
// }
//
//
// window.addEventListener('scroll',scrollTask);
let nav = document.querySelector('.nav');
let navTop = nav.offsetTop;

function scrollTask() {
    console.log(window.scrollY);

    console.log(nav.offsetTop);
    if (window.scrollY >= navTop) {
        document.body.style.paddingTop = `${nav.offsetHeight}px`
        nav.classList.add("fixed-nav")
    } else {
        nav.classList.remove("fixed-nav");
    }
}
window.addEventListener('scroll', scrollTask);










