import {ITaskItem} from "./TaskItem";

class DummyTaskItem implements ITaskItem {
    public task: string;
    public pages: number;
    public complete: boolean;

    constructor(task: string, pages: number, complete: boolean) {
        this.task = task;
        this.pages = pages;
        this.complete = complete;
    }
}

export default DummyTaskItem;
