import usersFetch from '../api/api';

export function addUser(data) {
    return {
        type:'ADD_USER',
        data: data
    }

}

export const getUser = () => dispatch => {
   return usersFetch().then(data => {
       console.log(data);
       return dispatch(addUser(data.data.results))
   });
};

export function deleteCard(sha256) {
    return {
        type: 'DELETE_CARD',
        sha256
    }
}







