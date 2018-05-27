import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Nav = ({items}) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.path}>
                    <Link to={item.path}>{item.text}</Link>
                </li>))}

        </ul>

)
};


Nav.propTypes = {

    items: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
    }).isRequired)

};
Nav.defaultProps = {};

export default Nav;




