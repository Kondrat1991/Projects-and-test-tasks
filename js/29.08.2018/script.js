/*function Person() {
    // Конструктор Person() определяет `this` как экземпляр самого себя.
    this.age = 0;

    setInterval(function growUp() {
        // Без использования `use strict`, функция growUp() определяет `this`
        // как глобальный объект, который отличается от `this`,
        // определённого конструктором Person().
        this.age++;
    }, 1000);
}
var p = new Person();
console.log(p);*/

function makeGreeting() {
    let myName = "Alex";

    function greeting(personName) {
        return "Hello" + personName + "My name is" + myName + ".";
    }

    return greeting;

}

let newGreeting = makeGreeting();

console.log(newGreeting("Bill"));






