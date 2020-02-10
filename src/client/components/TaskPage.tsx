import React, {Component} from "react";

interface ITaskPageProps {

}

interface ITaskPageState {

}

class TaskPage extends Component<ITaskPageProps, ITaskPageState> {
    public render() {
        return (
            <div className="task">
                <h1>Task</h1>
            </div>
        );
    }
}

export default TaskPage;
