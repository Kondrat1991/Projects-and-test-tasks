import axios from 'axios';

const END_POINT = 'https://pixabay.com/api/?key=';
const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';

export function getGallery() {
    return axios.get(`${END_POINT}${API_KEY}&category=food&order=popular&per_page=9`)
}





// fetch(endPoint + apiKey + '&category=food&order=popular&per_page=9')
//     .then(res => {
//         return res.json();
//     })
//     .then(
//         data =>
//             // console.log(data.hits)
//             data.hits,
//     )
//     .then(result => {
//         this.setState({
//             gallery: [...this.state.gallery, ...result],
//         });
//     });
// }