import React, {Component} from "react";

export interface ITaskItem {
    task: string;
    pages: number;
    complete: boolean;
}

interface ITaskItemProps {
    taskItem: ITaskItem;
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
                <div className="task-item-task">{this.props.taskItem.task}</div>
                <div className="task-item-pages">{this.props.taskItem.pages}</div>
            </li>
        );
    }
}

export default TaskItem;
