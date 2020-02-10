import React, {Component} from "react";
import {Link} from "react-router-dom";
import StopWatch from "./StopWatch";

interface IReadingPageProps {

}

interface IReadingPageState {

}

class ReadingPage extends Component<IReadingPageProps, IReadingPageState> {
    public render() {
        return (
            <div className="reading">
                <div className="home-button">
                    <Link to="/">BACK</Link>
                </div>
                <h1>Reading</h1>
                <div className="stopwatch-wrapper">
                    <StopWatch />
                </div>
                <div className="task-button">
                    <Link to="/task">Leseoppgaver</Link>
                </div>
            </div>
        );
    }
}

export default ReadingPage;
