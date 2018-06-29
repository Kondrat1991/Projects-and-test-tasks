export default function users(state = [], action) {
    switch (action.type) {
        case 'ADD_USER':
            return [...state,...action.data];

        case 'DELETE_CARD':
            return state.filter((card) => card.login.sha256 !== action.sha256)
        default:
            return state
    }
}
