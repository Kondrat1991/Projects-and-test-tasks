import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
    return (
        <form onSubmit={props.getRecipe} style={{marginBottom:"2rem"}}>
            <input className="form__input" type="text" name = "recipeName"/>
            <button className="form__button">  Search  </button>
        </form>
    );
};

Form.propTypes = {};
Form.defaultProps = {};

export default Form;
