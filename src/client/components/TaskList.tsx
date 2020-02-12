import React, {Component} from "react";
import TaskItem, {ITaskItem} from "./TaskItem";

interface ITaskListProps {
    taskList: ITaskItem[];
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
                            task: ti.task,
                            pages: ti.pages,
                            complete: ti.complete,
                        }}
                    />
                ))}
            </ul>
        );
    }
}

export default TaskList;
