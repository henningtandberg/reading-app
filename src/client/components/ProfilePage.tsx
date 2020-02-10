import React, {Component} from "react";

interface IProfilePageProps {

}

interface IProfilePageState {

}

class ProfilePage extends Component<IProfilePageProps, IProfilePageState> {
    public render() {
        return (
            <div className="profile">
                <h1>Profile</h1>
            </div>
        );
    }
}

export default ProfilePage;
