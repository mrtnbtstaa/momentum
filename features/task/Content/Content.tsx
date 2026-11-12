import ViewRenderer from "@/components/reusable/ViewRenderer/ViewRenderer";
import TaskBoardView from "../components/TaskBoardView";
import TaskListView from "../components/TaskListView";
import TaskHeader from "../components/TaskHeader";
import Wrapper from "@/components/reusable/Wrapper/Wrapper";
import TaskFilter from "../components/TaskFilter";

const Content = () => {
    return (
        <Wrapper>
            {/* Header Area */}
            <TaskHeader />
            {/* Filters & Toggles */}
            <TaskFilter />
            <ViewRenderer
                gridView={<TaskBoardView />}
                listView={
                    <div className="flex flex-col gap-4 mt-2 w-full">
                        <TaskListView />
                    </div>
                }
                gridClassName="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
            />
        </Wrapper>
    );
}

export default Content;