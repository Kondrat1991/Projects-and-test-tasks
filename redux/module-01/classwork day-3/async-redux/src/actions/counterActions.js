export function add() {
    return {
        type: 'INCREMENT'
    }
}

export function min() {
    return {
        type: 'DECREMENT'
    }
}

export const reset = {
    type: 'RESET'
};
// export function reset () {
//     return {
//         type: 'RESET'
//     }
// }

// export function addAsync() {
//     setTimeout(()=>{
// //add
//     },2000)
// }

export const incAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(add());
    },2000)
};

// export function incAsync() {
//     return function (dispatch) {
//         setTimeout(() => {
//             dispatch(add());
//         },2000)
//     }
// }

//
// export function down(step) {
//     return {
//         type: 'DECREMENT',
//         payload: step,
//     };
// }

// export const reset  = {
//     type: 'RESET'
// };