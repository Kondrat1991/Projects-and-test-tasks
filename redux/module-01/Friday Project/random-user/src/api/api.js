import axios from 'axios';

//const END_POINT = 'https://randomuser.me/api/?results=5';
// const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

export default function usersFetch() {
return axios.get(`https://randomuser.me/api/?results=5`);
}

