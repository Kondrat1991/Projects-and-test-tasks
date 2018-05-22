import React from 'react';
import PropTypes from "prop-types";
const  Input = ({type, placeholder, value, children, ...props}) => {
    return <input className={type} placeholder={placeholder} value={value} {...props}>
        {children}
    </input>
};
Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    children: PropTypes.string
};
Input.defaultProps = {
    type: "default-input",
    placeholder: "some text",
    value: "some text"
}
export default Input;

//     class Input extends React.Component{
//
//     static propTypes = {
//         value: PropTypes.string.isRequired,
//         placeholder: PropTypes.string.isRequired
//     }
//     static defaultProps = {
//         value: "write-here"
//     }
//
//
//     render() {
//         const {value, placeholder, ...props} = this.props;
//         return ( <input
//                 type="text"
//                 className = "input"
//                 value=""
//                 placeholder=""
//             />
//         )
//
//     }
//
// }