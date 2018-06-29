export default function tasks(state = [], action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.data]
        default:
            return state
    }
}