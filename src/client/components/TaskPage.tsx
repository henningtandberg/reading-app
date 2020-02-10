import React, {Component} from "react";
import {Link} from "react-router-dom";

interface ITaskPageProps {

}

interface ITaskPageState {

}

class TaskPage extends Component<ITaskPageProps, ITaskPageState> {
    public render() {
        return (
            <div className="task">
                <div className="home-button">
                    <Link to="/">BACK</Link>
                </div>
                <h1>Task</h1>
            </div>
        );
    }
}

export default TaskPage;
