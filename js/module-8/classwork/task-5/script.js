// audio.currentTime = 0;
// audio.play();


// window.addEventListener('keydown', function(event) {
//     console.log(event);
//     event.classList.add('playing');
// });

/*window.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
    let arr = document.querySelector(`[data-key='${event.keyCode}']`);
    console.log(arr);
    arr.classList.add('playing');
    //event.classList.add('playing');
});

window.addEventListener('keyup', function (event) {
    console.log(event.keyCode);
    let arr = document.querySelector(`[data-key='${event.keyCode}']`);
    console.log(arr);
    arr.classList.remove('playing');
});*/

window.addEventListener('keydown', function(event) {
    //console.log(event.keyCode);
    let key = event.keyCode;
    let arr = document.querySelector(`[data-key='${key}']`);
    let audio= document.querySelector(`audio[data-key='${key}']`);
    console.log(audio);


    if(arr) {
        arr.classList.add('playing');
        audio.play();
        audio.currentTime = 0;

    }

    else {
        return
    }
    // if(!arr) {
    //     return
    // }
    // //console.log(arr);
    // arr.classList.add('playing');
    //event.classList.add('playing');
});

window.addEventListener('transitionend', function (event) {
    //console.log(event.keyCode);
    let arr = document.querySelector(`[data-key='${event.target.dataset.key}']`);
    console.log(arr);
    arr.classList.remove('playing');
});






