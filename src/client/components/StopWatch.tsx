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
                <div className="stopwatch-time col-md-12">
                    <p>{hours} : {minutes} : {seconds}</p>
                </div>
                <div className="stopwatch-button-wrapper col-md-12">
                    <button className="stopwatch-button-start btn btn-primary fa fa-play" onClick={this.startTimer} />
                    <button className="stopwatch-button-stop btn btn-primary fa fa-stop" onClick={this.stopTimer} />
                    <button className="stopwatch-button-reset btn btn-primary fa fa-refresh" onClick={this.resetTimer} />
                </div>
                <div className="stopwatch-time-text col-xl-12">
                    <p> Start tiden når du begynner å lese, stopp når du er ferdig. Reset stiller tiden til null. Når du trykker på stopp, vil du bli spurt om antall sider lest.</p>
                    </div>
                {this.state.timerTime > 0 && !this.state.timerOn &&
                    <div className="col-xl-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="stopwatch-form-group form-group row">
                                <div className="col-xl-12">
                                <label className="stopwatch-form-label form-check-label">Antall sider:</label>
                                </div>
                                <div className="col-xl-12">
                                <input type="text" className="stopwatch-form-input form-control" name="pages" onChange={this.onChange}/>
                                </div>
                                <div className="col-xl-12">
                                <button type="submit" className="stopwatch-form-submit btn btn-primary">Ferdig</button>
                                </div>
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
                time: (Math.floor(this.state.timerTime / 1000) / 60), // Seconds
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
        })
    .then(() => {
        this.forceUpdate();
        })
        .then(() => {
            alert("Din lesetid " +  (Math.floor(this.state.timerTime / 1000) + "og antall sider har blitt registrert!");
        })
        .then(() => {
            window.location.reload();
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
        // window.location.reload();
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
