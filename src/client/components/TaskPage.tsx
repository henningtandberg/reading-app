import React, {Component} from "react";
import {Link} from "react-router-dom";
import HomeButton from "./HomeButton"; 

interface ITaskPageProps {

}

interface ITaskPageState {

}

class TaskPage extends Component<ITaskPageProps, ITaskPageState> {
    public render() {
        return (
            <div className="task">
                <HomeButton />
                <h1>Leseoppgaver</h1>
                <div className="task-list-wrapper">
                    <h1>heo</h1>
                </div>
            </div>
        );
    }
}

export default TaskPage;
