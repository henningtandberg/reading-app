import React, {Component} from "react";
import {Link} from "react-router-dom";

interface IHomePageProps {

}

interface IHomePageState {

}

class HomePage extends Component<IHomePageProps, IHomePageState> {
    public render() {
        return (
            <div className="home">
                <h1>Home</h1>
                <div className="reading-button">
                    <Link to="/reading">Lese</Link>
                </div>
                <div className="overview-button">
                    <Link to="/overview">Oversikt</Link>
                </div>
                <div className="profile-button">
                    <Link to="/profile">Profil</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;
