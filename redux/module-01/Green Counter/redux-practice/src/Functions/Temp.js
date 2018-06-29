// let array = [1,2,3,4,5];

export default function minTemp(){
    let arr = Array.from(arguments);
    let module = arr.map(el => Math.abs(el));
    return arr.every(el => el < 0) ? Math.max(...arr) :Math.min(...module);
}

// minTemp(1,-2,-8,4,5);
// console.log(minTemp(1,-2,-8, 4, 5));


