// const a = 0 || 2 ||0;
// //
// // console.log(a);

/*if(0 || 0 ||0) {
    console.log("kick");
}*/

/*function makeCounter() {
    var currentCount = 1;
    return function () {
return currentCount++
    }
}

var counter = makeCounter();*/
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

for (var i = 0; i < 10; i++) {
    setTimeout((function (i) {
        return function () {
            console.log(i);
        }
    }) (i), i * 1000);
}

/*
async function unicorn() {
    try {
        let rainbow = await.getRainbow();
    }
}*/
