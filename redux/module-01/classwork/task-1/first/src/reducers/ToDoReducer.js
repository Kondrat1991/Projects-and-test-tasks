export default function tasks(state = [], action) {

    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.data];
        case 'DELETE_TASK':
            return state.filter(el => el.id !== action.id);
        default:
            return state;
    }
};


