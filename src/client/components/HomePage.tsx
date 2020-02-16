import React, {Component} from "react";
import {Link} from "react-router-dom";
import LogoPNG from "/png/logo.png";

interface IHomePageProps {

}

interface IHomePageState {

}

class HomePage extends Component<IHomePageProps, IHomePageState> {
    public render() {
        console.log(process.env.PUBLIC_URL);
        return (
            <div className="home row h-100">
                <div className="home-logo col-xl-12">
                    <img src={LogoPNG} alt="Lese Bedre" />
                </div>
                <div className="reading-button col-xl-12">
                    <Link to="/reading">Lese</Link>
                </div>
                <div className="overview-button col-xl-12">
                    <Link to="/overview">Oversikt</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;
