import React, {Component} from "react";

interface IHomePageProps {

}

interface IHomePageState {

}

class HomePage extends Component<IHomePageProps, IHomePageState> {
    public render() {
        return (
            <div className="home">
                <h1>Home</h1>
            </div>
        );
    }
}

export default HomePage;
