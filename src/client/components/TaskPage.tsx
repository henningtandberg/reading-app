import React, {Component} from "react";
import {Link} from "react-router-dom";
import {ITaskItem} from "./TaskItem";
import TaskList from "./TaskList";

interface ITaskPageProps {

}

interface ITaskPageState {
    taskList: ITaskItem[];
}

class TaskPage extends Component<ITaskPageProps, ITaskPageState> {
    constructor(props: ITaskPageProps, state: ITaskPageState) {
        super(props);

        this.state = {
            taskList: [],
        };
    }
    public componentDidMount() {
        fetch('/api/read/tasks')
        .then(response => response.json())
        .then(data => this.setState({taskList: data}));
    }

    public render() {
        return (
            <div className="task">
                <div className="home-button">
                    <Link to="/">BACK</Link>
                </div>
                <h1>Task</h1>
                <div className="task-list-wrapper">
                    <TaskList taskList={this.state.taskList} />
                </div>
            </div>
        );
    }
}

export default TaskPage;
