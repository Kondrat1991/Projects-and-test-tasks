// const InfoAbout = () => {
//     return  (
//         <table className="tg">
//             <tbody>
//             <tr>
//                 <th className="tg-yw4l">first</th>
//                 <th className="tg-yw4l">second</th>
//             </tr>
//             <tr>
//                 <td className="tg-yw4l">{aboutMe.name}</td>
//                 <td className="tg-yw4l">{aboutMe.surname}</td>
//             </tr>
//             <tr>
//                 <td className="tg-yw4l">{aboutMe.description}</td>
//
//             </tr>
//             </tbody>
//         </table>
//
//     )
// };

import React, {Component} from 'react';
import {aboutMe} from './about-me';
import TableItem from './TableItem';


class ClassAndFunction extends Component {
    render() {

        return (
            <table className="tg">
                <tbody>
                {aboutMe.map((item) => {
                    return (
                        <TableItem  name={item.name} surname={item.surname} description={item.description}  />
                    )
                })}

                </tbody>
            </table>

        )
    }
}

export default ClassAndFunction;


//
// import den from './aboutme.js';
//
// const TableAboutMe = (props) => {
//     let code = [];
//     for (let key in props.user) {
//         code.push(<tr>
//             <td>{key}:</td>
//             <td>{props.user[key]}</td>
//         </tr>)
//     }
//     return(
//         <table>
//             <tbody>
//             {code}
//             </tbody>
//         </table>
//     )
// };
//
// ReactDOM.render(<TableAboutMe user={den} />, document.getElementById('root'));
// registerServiceWorker();