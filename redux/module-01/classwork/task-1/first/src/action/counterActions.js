export function  add() {
    return {
        type: 'INCREMENT'
    }
}

export function  min() {
    return {
        type: 'DECREMENT'
    }
}

export function reset() {
    return {
        type: 'RESET'
    }
}


export function incAsync() {
   return function (dispatch) {
       setTimeout(()=> {
           dispatch(add())
       }, 2000)
   }
}
