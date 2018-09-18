/*function mul(a,b) {
    return a *b;
}

let double = mul.bind(null,2);

console.log(double(2));
console.log(double(3));
console.log(double(4));

let triple = mul.bind(null,3);

console.log(triple(4));*/


/*
function greet(gender, age, name) {
    let salutation = gender === "male" ? "Mr" : "Ms";

    if (age > 25) {
        return `Hello   ${salutation} ${name}` ;
    }
    else {
        return "Hey" + name + ".";
    }
}

let greetAdultMale = greet.bind(null, "male", 45);

console.log(greetAdultMale("John HeartLove"));

let greetYoungMale = greet.bind(null, "", 16);

console.log(greetYoungMale("Alex"));*/


/*function a(phrase) {
    return function (name) {
        console.log( `${name},  ${phrase}`)
    }
}

const name = a("Go to shop");
name("Vasya");*/

function sum(a,b) {
    return a +b;
}

function carry(a) {
  return function (b) {
      return sum(a,b)
  }
}

const first = carry(5);
const second = first(2);

console.log(first);
console.log(second);
