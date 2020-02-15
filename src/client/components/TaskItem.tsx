import React, {Component} from "react";
import * as Icon from "./Icons";

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
                    {this.props.taskItem.complete ?
                    <Icon.Checked text={this.props.taskItem.task} /> :
                    <Icon.Unchecked text={this.props.taskItem.task} />}
                </div>
            </li>
        );
    }
}

export default TaskItem;
