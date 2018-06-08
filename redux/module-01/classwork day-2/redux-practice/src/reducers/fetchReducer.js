

export default  function Gallery(state = [], action) {
    switch(action.type) {
        case 'DOWNLOADED':
            return state = [...state, ...action.data];
        default:
            return state
    }
}

