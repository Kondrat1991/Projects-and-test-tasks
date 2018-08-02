/*function verify(str) {
    str = str.replace(/[^\(\)\[\]\{\}]/g, '');

    let strPrevious = '';
    while (str.length !== strPrevious.length) {
        strPrevious = str;
        str = str.replace('()', '').replace('[]', '').replace('{}', '');
    }
    return !str.length;
}

console.log(verify(("---((++++)----")));
console.log(verify("(  [  <>  ()  ]  <>  )"));*/


/*
(function() {
    var x = 1;

    function x() {};

    console.log(x);
})()*/

/*var obj = {
    a: 1
};


obj = {
        a: 2
    }



console.log(obj.a);*/

// var a = 2;
//
// console.log(a);


// console.log(b);
// b = 3;

/*
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};


var vad = {
    _name: 'Vasya'
};



console.log(hero.getSecretIdentity.call(vad));*/


/*
(() => {
    for(var i = 0, len = 10; i < len; i++) {
        function f(i) {
            return setTimeout(() => {
                console.log(i);


            });
        } f(i)
    }
})();*/


// function B() {
//     console.log(this)
// }
//
// B();
// new B();
/*

function f1(a,b) {
    console.log(a, b);
}

var f2 = f1.bind(null,'foo');

f2('bar', 'baz');*/


/*
const arr = [10, 5, 50, 48];

let newArr = arr.reduce((curr,next)=> curr + next
);

console.log(newArr);*/

/*function f1(a,b) {
    console.log(a, b);
}

var f2 = f1.bind(null,'foo');

f2('bar', 'baz');*/

/*if(true) {
    function f() {
        console.log("foo");
    }

} else {
    function f() {
        console.log('bar');
    }
}

f();*/

// Question 4
/*
const $$ = function (selector) {

}

$$('li') instanceof Array === true // True
$$('li') instanceof $$ === true // True

$$('li').hide().map(node => console.log(node))*/

/*var a = 90100;
function someFunc(){
    if(false){
        var a = 1;
    } else {
        var b = 2;
    }
    console.log(b);
    console.log(a); //(1)
}
someFunc();*/

/*myname = "global";
function func() {
    console.log(myname);
    var myname = "local";
    console.log(myname);
}
func();*/

// a(); //ok
// b(); //error

/*var b = function(){
    alert( 'function b');
}

function a(){
    alert( 'function a' );
}*/

/*let array = [1,2,3,1,2,5,4,1];

let newArr = Array.from(new Set(array));
console.log(newArr);*/

/*var b = 5;
var a = function() {

    alert(b);
};
a();*/

/*function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();*/


// (() => {
// //     for(var i = 0, len = 10; i < len; i++) {
// //         function f(i) {
// //             return setTimeout(() => {
// //                 console.log(i);
// //
// //
// //             });
// //         } f(i)
// //     }
// // })();
// //
// // (() => {
// //     for(var i = 0, len = 10; i < len; i++) {
// //
// //         setTimeout((i) => {
// //             function
// //
// //             console.log(i);
// //         });
// //     }
// //
// //
// // })();


/*
function B() {
    console.log(this);
}

B.call(1);
new B();*/

/*
let y = 10;
let z = 3;
x = (y %5>0)?(z == 3)? z*2:y+3:(z < 3)? y-z: z++;
console.log(x);*/

/*
myFunc = function (x,y) {
    x = 10;
    y = y||x--;
    alert(y);
}

console.log(myFunc(11));*/
