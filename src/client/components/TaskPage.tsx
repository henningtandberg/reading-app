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

        this.handleTaskComplete = this.handleTaskComplete.bind(this);
    }

    public componentDidMount() {
        fetch("/api/read/tasks")
        .then((response) => response.json())
        .then((data) => this.setState({taskList: data}));
    }

    public handleTaskComplete(id: string) {
        const currentTaskList: ITaskItem[] = this.state.taskList;
        const completedTask = currentTaskList.find((taskItem) => taskItem.id === id);
        const newTaskList: ITaskItem[] = currentTaskList.map((taskItem) =>
            taskItem.id === id ? { ...taskItem, complete: true } : taskItem);

        fetch("/api/read/task/" + completedTask.id, {
            method: "PUT",
        })
        .then(() => {
            this.setState({
                taskList: newTaskList,
            });
        })
        .then(() => {
            window.location.reload();
        });
    }

    public render() {
        return (
            <div className="task">
                <div className="home-button">
                    <Link to="/">BACK</Link>
                </div>
                <h1>Task</h1>
                <div className="task-list-wrapper">
                    <TaskList
                        taskList={this.state.taskList}
                        handleTaskComplete={this.handleTaskComplete}
                    />
                </div>
            </div>
        );
    }
}

export default TaskPage;
