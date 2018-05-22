import React, {Component} from 'react';
import './Timer.css';
import Button from './Button';

class Timer extends Component {
    state = {
        time: 60,
        isStarted: false,
        progressBar: 100
    };
    timerID = null;
    get timerValues() {
        let min = Math.floor(this.state.time / 60);
        let sec = this.state.time % 60;

        min = (min < 10) ? '0' + min : min;
        sec = (sec < 10) ? '0' + sec : sec;
        return {
            minutes: min,
            seconds: sec,
        };
    }
    startHandler = () => {
        if (this.timerID !== null) {
            return;
        }
        this.setState({
            progressBar: 100,
            time: 60
        });
        this.timerID = setInterval(() => {
            if (this.state.time === 0) {
                this.setState({});
                this.stopHandler();
                return;
            }
            this.setState((prevState) => {
                return {
                    time: prevState.time - 1,
                    progressBar: prevState.progressBar - (prevState.progressBar / prevState.time)
                }
            });
        }, 1000);
        this.setState({
            isStarted: true,
        })
    };
    stopHandler = () => {
        clearInterval(this.timerID);
        this.timerID = null;
        this.setState({
            isStarted: false,
        })
    };
    render() {
        return (
            <div>
                <h3>{this.timerValues.minutes}:{this.timerValues.seconds}</h3>
                <Button started=
                            {this.state.isStarted}
                        startHandler={this.startHandler}
                        stopHandler={this.stopHandler}
                />

                <div className='progressBar' style={{width: this.state.progressBar + '%'}}>;


                </div>


            </div>
        )
    }
}
export default Timer;



