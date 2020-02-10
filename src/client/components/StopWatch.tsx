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
        const seconds = ("0" + (Math.floor(this.state.timerTime / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(this.state.timerTime / 60000) % 60)).slice(-2);
        const hours = ("0" + Math.floor(this.state.timerTime / 3600000)).slice(-2);

        return (
            <div>
                <div>
                    {hours} : {minutes} : {seconds}
                </div>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.resetTimer}>Reset</button>
                {this.state.timerTime > 0 && !this.state.timerOn &&
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Antall sider:
                                <input type="text" name="pages" />
                            </label>
                            <input type="submit" value="submit" />
                        </form>
                    </div>
                }
            </div>
        );
    }

    private async handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        alert((event.target as HTMLTextAreaElement).value);
        //fetch("/api/add", {
        //    body: (event.target as HTMLTextAreaElement).value,
        //    method: "POST",
        //});
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
