import users from '../api/api';

export function addUser(data) {
    return {
        type:'ADD_USER',
        data: data
    }


}

export const getUser = () => dispatch => {
   return users().then(data => dispatch(addUser(data.data.here)));
};




