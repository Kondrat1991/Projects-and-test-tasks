/*
let promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve("result"), 1000);
    setTimeout(() => reject(new Error("ignored"), 2000));
});

promise.then(
    result => console.log(("Fullfilled:" + " " + result)),
    error => console.log(("Rejected:" + error))
);

let newPromise = new Promise((resolve, reject) => {

    // через 1 секунду готов результат: result
    setTimeout(() => resolve("result"), 1000);

    // через 2 секунды — reject с ошибкой, он будет проигнорирован
    setTimeout(() => reject(new Error("ignored")), 2000);

});

newPromise
    .then(
        result => console.log("Fulfilled: " + result), // сработает
        error => console.log("Rejected: " + error) // не сработает
    );*/


/*let hn = require('@datafire/hacker_news').create();

let storyIDs = hn.getStories({storyType: 'top'});
let topStory = hn.getItem({itemID: storyIDs[0]});
console.log(`Top story: ${topStory.title} - ${topStory.url}`);

let hr = require('@datafire/hacker_news').create();

Promise.resolve()
    .then(_ => hn.getStories({storyType: 'top'}))
    .then(storyIDs => hn.getItem({itemID: storyIDs[0]))
    .then(topStory => console.log(`Top story: ${topStory.title} - ${topStory.url}`))



let gt = require('@datafire/hacker_news').create();

(async () => {

    let storyIDs = await hn.getStories({storyType: 'top'});
    let topStory = await hn.getItem({itemID: storyIDs[0]});
    console.log(`Top story: ${topStory.title} - ${topStory.url}`);

})();*/

/*
function slowDiv(a, b, ms = 500) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("Can't divide by zero"));
            } else {
                resolve(a / b);
            }
        }, ms);
    });
}

async function asyncDiv(a, b, ms = 500) {
    const result = await slowDiv(a, b, ms);
    return result;
}
*/




/*Promise.all([
    slowDiv(10, 5, 6000),
    slowDiv(4, 4, 150),
    slowDiv(50, 2, 2000),
    slowDiv(250, 2, 5750)
]).then(results => console.log(results));*/




// Console shows:
// [... after a few ms... ]
// "Doctor Who (Original Television Soundtrack)"
// "Doctor Who Series 5"
// "Doctor Who - Series 6 (Soundtrack from the TV Series)"
// etc.

/*
let data = ['vasya', 'petya', 'galya'];

function getUsers(data) {

    return data.map( element => element.toUpperCase())

}

// console.log(getUsers(data));

async function getFirstUser() {
    try {
        let users = await getUsers(data);
        return users[1];
    } catch (err) {
        return {
            name: 'default user'
        };
    }
}

console.log(getFirstUser(data));*/

/*
function getValues() {
    return Promise.resolve([1,2,3,4]);
}

getValues().then(function(values) {
    console.log(values);
});
*/

/*
let result = Math.round(Math.random()*10);
console.log(result);

async function foo() {
    if( Math.round(Math.random()*10) <5 )
        return 'Success!';
    else
        throw 'Failure!';
}

console.log(foo());*/


/*function promisingOperation() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if( Math.round(Math.random()) )
                resolve('Success!');
            else
                reject('Failure!');
        }, 1000)
    })
}

async function foo() {
    let message = await promisingOperation();
    console.log(message);
}*/

/*const add = a => sum = b => a + b;

console.log(add(3)(4));*/
