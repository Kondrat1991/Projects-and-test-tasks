export default function gallery (state = [], action) {
    switch (action.type){
        case 'DOWNLOADED':
            return [...state,...action.data];
        default:
            return state
    }
}