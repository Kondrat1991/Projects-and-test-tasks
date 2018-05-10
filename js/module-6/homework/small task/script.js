//написать функцию конструктор с помощь которой можно создавать  подобные объекты
// const mango = {
//     name: 'Mango',
//     sales: 5,
//     sell(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}.`;
//     }
// };
// console.log(mango);


//Task
// let Manager = function(name, sales) {
//     this.newArr =[];
//     this.name = name;
//     this.sales = sales;
//     this.sell = function(product) {
//         this.sales += 1;
//         !this.newArr.includes(product) ? this.newArr.push(product) : '';
//         return `Manager   ${this.name}  sold  ${product}.`;
//     };
// };
// let Vasya = new Manager('Vasya');
// let Petya = new Manager('Petya');
// //console.log(Vasya);
// console.log(Vasya.sell('apple'));
// console.log(Vasya.sell('mandarin'));
// console.log(Petya.sell('rice'));


//From Denis
// function Manager (name, sales = 0) {
//     this.name = name;
//     this.sales = sales;
//     this.soldProducts = [];
//     this.sell = function (product) {
//         this.sales +=1;
//         !this.soldProducts.includes(product) ? this.soldProducts.push(product) : '';
//         return `Manager ${this.name} sold ${product}.`;
//     }
// }
// const chuck = new Manager('Chuck' );
// // console.log(chuck);
// console.log(chuck.sell('spinach'));
// console.log(chuck.sell('garlic'));
// console.log(chuck.sell('garlic'));
// console.log(chuck);


//Another Approach

// ***** Домашка *****

// function Manager (name, sales = 0) {
//     this.name = name;
//     this.sales = sales;
//     // this.soldProducts = [];
//     this.soldProducts ={};
//     this.sell = function (product) {
//         this.sales +=1;
//         // !this.soldProducts.includes(product) ? this.soldProducts.push(product) : '';
//         // for (let key in this.soldProducts){
//         // if(key !== product){
//         // delete this.soldProducts.prod;
//         if (!Object.keys(this.soldProducts).includes(product)){
//             this.soldProducts[product] = 1;
//         } else {
//             this.soldProducts[product] += 1;
//         }
//         return `Manager ${this.name} sold ${product}.`;
//     }
// }
// const chuck = new Manager('Chuck');
// // console.log(chuck);
// console.log(chuck.sell('spinach'));
// console.log(chuck.sell('garlic'));
// console.log(chuck.sell('garlic'));
// console.log(chuck);

//call with arguments, apply with arrays

















