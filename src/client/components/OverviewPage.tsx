import React, {Component} from "react";

interface IHomePageProps {

}

interface IHomePageState {

}

class OverviewPage extends Component<IHomePageProps, IHomePageState> {
    public render() {
        return (
            <div className="overview">
                <h1>Overview</h1>
            </div>
        );
    }
}

export default OverviewPage;
