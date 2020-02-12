import React, {Component} from "react";
import {Link} from "react-router-dom";

interface IHomePageProps {

}

interface IHomePageState {

}

class HomePage extends Component<IHomePageProps, IHomePageState> {
    public render() {
        return (
            <div className="home row h-100">
                <div className="home-title col-md-12">
                    <h1>Home</h1>
                </div>
                <div className="reading-button col-md-12">
                    <Link to="/reading">Lese</Link>
                </div>
                <div className="overview-button col-md-12">
                    <Link to="/overview">Oversikt</Link>
                </div>
                <div className="profile-button col-md-12">
                    <Link to="/profile">Profil</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;
