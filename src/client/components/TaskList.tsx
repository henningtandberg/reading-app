import React, {Component} from "react";
import TaskItem, {ITaskItem} from "./TaskItem";

interface ITaskListProps {
    taskList: ITaskItem[];
    handleTaskComplete(id: string): void;
}

interface ITaskListState {

}

class TaskList extends Component<ITaskListProps, ITaskListState> {
    constructor(props: ITaskListProps, state: ITaskListState) {
        super(props);
    }

    public render() {
        return(
            <ul className="list-group">
                {this.props.taskList.map((ti: ITaskItem) => (
                    <TaskItem
                        taskItem={{
                            id: ti.id,
                            task: ti.task,
                            pages: ti.pages,
                            complete: ti.complete,
                        }}
                        handleTaskComplete={this.props.handleTaskComplete}
                    />
                ))}
            </ul>
        );
    }
}

export default TaskList;
