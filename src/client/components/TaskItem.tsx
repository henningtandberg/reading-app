import React, {Component} from "react";

export interface ITaskItem {
    id: string;
    task: string;
    pages: number;
    complete: boolean;
}

interface ITaskItemProps {
    taskItem: ITaskItem;
    handleTaskComplete(id: string): void;
}

interface ITaskItemState {

}

class TaskItem extends Component<ITaskItemProps, ITaskItemState> {
    constructor(props: ITaskItemProps, state: ITaskItemState) {
        super(props);
    }

    public render() {
        return(
            <li className="list-group-item">
                <div className="task-item"
                onClick={() => this.props.handleTaskComplete(this.props.taskItem.id)}>
                    <div className="task-item-task">{this.props.taskItem.task}</div>
                    {this.props.taskItem.complete ?
                    <div className="task-item-complete fa fa-check-square" /> :
                    <div className="task-item-complete fa fa-square" />}
                </div>
            </li>
        );
    }
}

export default TaskItem;
