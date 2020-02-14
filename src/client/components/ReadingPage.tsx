import React, {Component} from "react";
import {Link} from "react-router-dom";
import StopWatch from "./StopWatch";
import HomeButton from "./HomeButton";

interface IReadingPageProps {

}

interface IReadingPageState {

}

class ReadingPage extends Component<IReadingPageProps, IReadingPageState> {
    public render() {
        return (
            <div className="reading row h-100">
                <HomeButton />
                <div className="reading-title col-md-12">
                    <h1>Lese</h1>
                </div>
                <div className="stopwatch-wrapper col-md-12">
                    <StopWatch />
                </div>
                <div className="task-button col-xl-12">
                    <Link to="/task">Leseoppgaver</Link>
                </div>
            </div>
        );
    }
}

export default ReadingPage;
