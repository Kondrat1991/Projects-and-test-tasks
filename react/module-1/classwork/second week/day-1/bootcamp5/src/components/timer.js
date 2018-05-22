import React, {Component} from 'react';
//import Button from './Button';
import RenderIf from "../common/renderIf";
import './timer.css';
import PropTypes from 'prop-types';

class Timer extends Component {

    static propTypes = {
        time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        autoStart: PropTypes.bool,
        reverse: PropTypes.bool,
        onTimeOut: PropTypes.func,

    };

    static defaultProps = {
        time: 50,
        step: 1,
        autoStart: false,
        reverse: true,
        onTimeOut: console.log.bind(console, "Time out")
    };

    state = {
        time: this.props.time,
        isStarted: false,
        progressBar: 100,
    };

    get timerValues() {
        let min = Math.floor(this.state.time / 60);
        let sec = this.state.time % 60;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        return {
            minutes: min,
            seconds: sec
        }
    }

    reverseTick = () => {

        this.setState((prevState) => {
            return {
                time: prevState.time - 1,
                progressBar: prevState.progressBar - (prevState.progressBar / prevState.time)
            }

        })

    };

    normalTick = () => {
        this.setState((prevState) => {
            return {
                time: parseInt(prevState.time) + 1,

            }

        })
    };

    timerTick = () => {
        if (this.state.time <= 0 && this.props.reverse) {
            this.props.onTimeOut(this.state.time);
            this.stopHandler();

            return;
        }
        this.props.reverse ? this.reverseTick() : this.normalTick();

    };

    initialState = () => {
        this.setState({
            progressBar: 100,
            isStarted: true,
            time: 60
        });
    };

    toggleIsStarted = (bool) => {
        this.setState({
            isStarted: bool,
        })
    };


    startHandler = () => {
        if (this.timerId) {
            return;
        }
        if (this.state.time <= 0 && this.props.reverse) {
            this.initialState();
        }
        this.toggleIsStarted(true);
        this.timerId = setInterval(this.timerTick, 1000);
    };

    stopHandler = () => {
        clearInterval(this.timerId);
        this.timerId = null;
        this.toggleIsStarted(false);

        // this.setState({
        //     isStarted: false,
        // })
    };
    resetHandler = () => {
        this.setState({
            time: 0
        })
    };

    componentDidMount() {
        if (this.props.autoStart) {
            this.startHandler();
        }
    }

    shouldComponentUpdate(NextProps, nextState) {
        return nextState.time % this.props.step === 0;
    }

    componentWillUnmount() {
        this.stopHandler();
    }

    render() {
        return (
            <div>
                <h3>{this.timerValues.minutes}:{this.timerValues.seconds}</h3>
                <RenderIf condition={this.state.isStarted}>
                    <button onClick={this.stopHandler}>Stop</button>
                </RenderIf>
                <RenderIf condition={!this.state.isStarted}>
                    <button onClick={this.startHandler}>Start</button>
                </RenderIf>

                <RenderIf condition={this.props.reverse}>
                    <div className='progressBar' style={{width: this.state.progressBar + '%'}}></div>
                </RenderIf>


            </div>

        )
    }
}

export default Timer;