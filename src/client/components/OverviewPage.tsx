import React, {Component} from "react";
import {Link} from "react-router-dom";

interface IHomePageProps {

}

interface IHomePageState {

}

class OverviewPage extends Component<IHomePageProps, IHomePageState> {
    public render() {
        return (
            <div className="overview">
                <div className="home-button">
                    <Link to="/">BACK</Link>
                </div>
                <h1>Overview</h1>
            </div>
        );
    }
}

export default OverviewPage;
