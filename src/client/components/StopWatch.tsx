import React, { Component } from "react";

interface IStopwatchProps {

}

interface IStopwatchState {
    pages: number;
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
            pages: 0,
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    public render() {
        const seconds = ("0" + (Math.floor(this.state.timerTime / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(this.state.timerTime / 60000) % 60)).slice(-2);
        const hours = ("0" + Math.floor(this.state.timerTime / 3600000)).slice(-2);

        return (
            <div className="row h-100">
                <div className="col-md-12">
                    {hours} : {minutes} : {seconds}
                </div>
                <div className="col-md-12">
                    <button className="btn btn-primary" onClick={this.startTimer}>Start</button>
                    <button className="btn btn-primary" onClick={this.stopTimer}>Stop</button>
                    <button className="btn btn-primary" onClick={this.resetTimer}>Reset</button>
                </div>
                {this.state.timerTime > 0 && !this.state.timerOn &&
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="form-check-label">Antall sider:</label>
                                <input type="text" className="form-control" name="pages" onChange={this.onChange}/>
                                <button type="submit" className="btn btn-primary">Ferdig</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        );
    }

    private validateForm(): boolean {
        return true;
    }

    private async submitForm(): Promise<void> {
        await fetch("/api/read/session", {
            body: JSON.stringify({
                pages: this.state.pages,
                time: this.state.timerTime / 1000, // Seconds
            }),
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            mode: "cors",
            redirect: "follow",
            referrerPolicy: "no-referrer",
        });
    }

    private async onChange(event: React.ChangeEvent<HTMLInputElement>): Promise<void> {
        event.preventDefault();

        // BAD
        // tslint:disable-next-line: radix
        const value = parseInt(event.target.value);

        return new Promise((resolve) => {
            this.setState({pages: value});
        });
    }

    private async handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (this.validateForm()) {
            await this.submitForm();
        }

        // BAD
        window.location.reload();
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
