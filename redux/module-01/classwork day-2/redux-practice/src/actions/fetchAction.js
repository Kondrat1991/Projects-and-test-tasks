import {getGallery} from '../api/api';

export function addImg(data) {
    return {
        type:'DOWNLOADED',
        data,
    }
}

export const fetchData = () => dispatch => {
    return getGallery().then(data=> dispatch(addImg(data.data.hits)))
};




