import React, {Component} from "react";
import {Link} from "react-router-dom";

interface IProfilePageProps {

}

interface IProfilePageState {

}

class ProfilePage extends Component<IProfilePageProps, IProfilePageState> {
    public render() {
        return (
            <div className="profile">
                <div className="home-button">
                    <Link to="/">BACK</Link>
                </div>
                <h1>Profile</h1>
            </div>
        );
    }
}

export default ProfilePage;
