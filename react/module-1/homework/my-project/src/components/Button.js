import React,{Component} from 'react';
import PropTypes from 'prop-types';

const Button = ({isStarted, startHandler, stopHandler}) => {
    const start = <button onClick={startHandler}>Start</button>;
    const stop = <button className='start' onClick={stopHandler}>Stop</button>;
    return isStarted ? stop : start
};
Button.propTypes = {
    startHandler: PropTypes.func.isRequired,
    stopHandler: PropTypes.func.isRequired,
    isStarted: PropTypes.bool,
};
export default Button;


