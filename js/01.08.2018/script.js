/*
(function() {
    f();

    f = function() {
        console.log(1);
    }
})()

function f() {
    console.log(2)
}

f();*/



function lookThis() {
    return this;
}


console.log(lookThis());