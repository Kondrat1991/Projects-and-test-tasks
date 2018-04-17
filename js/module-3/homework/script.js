/*const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";*/

let keyboard = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

let newArr =(keyboard.split(""));
let pos = newArr.indexOf("a")
let pos2 = newArr.indexOf("z")
// just check
console.log(pos);
console.log(pos2);

letterArr1 = (newArr.slice(0, pos ));
console.log(letterArr1);

letterArr2 = (newArr.slice(pos, pos2 ));
console.log(letterArr2);


letterArr3 = (newArr.slice(pos2) );
console.log(letterArr3);


let containerArr = [];
containerArr.push(letterArr1, letterArr2, letterArr3);
// let containerArr  = [ letterArr1, letterArr2, letterArr3 ];
console.log(containerArr);

let hello = containerArr[1][5]+containerArr[0][2]+ containerArr[1][8]+containerArr[1][8]+containerArr[0][8];
console.log(hello);

let javascript = containerArr[1][6]+containerArr[1][0]+containerArr[2][3]+containerArr[1][0]+containerArr[1][1]+containerArr[2][2]+containerArr[0][3]+containerArr[0][7]+containerArr[0][9]+containerArr[0][4];
console.log(javascript);

let trainer = containerArr[0][4]+containerArr[0][3]+containerArr[1][0]+containerArr[0][7]+containerArr[2][5]+containerArr[0][2]+containerArr[0][3];
console.log(trainer);


// let contone = (containerArr[0]);
// console.log(contone);
// console.log(contone[0]+[1]);
// console.log(contone[1]);
// console.log(containerArr[0][2]);
// console.log(find(containerArr, "]"));
// console.log(letterArr1.charAt("]"));
/*let firstvar = newArr.indexOf(']');
console.log(firstvar);*/
/*let firstWord =  newArr[newArr.indexOf('h')]+newArr[newArr.indexOf('e')]+newArr[newArr.indexOf('l')]+newArr[newArr.indexOf('l')]+newArr[newArr.indexOf('o')];
console.log(firstWord);*/
/*console.log(keyboard[0]);*/
