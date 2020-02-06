import React, { Component } from "react";

interface IStopwatchProps {

}

interface IStopwatchState {
    timerOn: boolean;
    timerStart: number;
    timerTime: number;
}

class Stopwatch extends Component<IStopwatchProps, IStopwatchState> {

    private timer: NodeJS.Timeout;

    constructor(props: IStopwatchProps, state: IStopwatchState) {
        super(props);
        this.timer = setInterval(() => { }, 10);
        clearInterval(this.timer);

        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
        };
    }

    public render() {
        const timerTime = this.state.timerTime;
        const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <div>
                <div>
                    {hours} : {minutes} : {seconds}
                </div>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.resetTimer}>Reset</button>
            </div>
        );
    }

    private startTimer = () => {
        if (this.state.timerOn === true) {
            return;
        }

        this.setState({
            timerOn: true,
            timerStart: Date.now() - this.state.timerTime,
            timerTime: this.state.timerTime,
        });

        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart,
            });
        }, 10);
    }

    private stopTimer = () => {
        if (this.state.timerOn === false ) {
            return;
        }

        this.setState({ timerOn: false });
        clearInterval(this.timer);
    }

    private resetTimer = () => {
        if (this.state.timerOn === true) {
            this.stopTimer();
        }

        this.setState({
            timerStart: 0,
            timerTime: 0,
        });
    }
}

export default Stopwatch;
