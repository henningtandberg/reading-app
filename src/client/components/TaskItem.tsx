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
            <li className="list-group-item task-item">
                <div className="task-item-complete"
                onClick={() => this.props.handleTaskComplete(this.props.taskItem.id)}>X</div>
                <div className="task-item-task">{this.props.taskItem.task}</div>
                <div className="task-item-pages">{this.props.taskItem.pages}</div>
                {this.props.taskItem.complete ?
                <div className="task-item-complete">C</div> :
                <div className="task-item-not-complete">n</div>
                }
            </li>
        );
    }
}

export default TaskItem;
