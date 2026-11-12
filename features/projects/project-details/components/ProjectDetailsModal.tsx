"use client";

import ReusableDelete from "@/components/reusable/Delete/Delete";
import CreateTaskModal from "./Modal/CreateTaskModal";
import EditTaskModal from "./Modal/EditTaskDetailsModal";
import TaskDetailsModal from "./Modal/TaskDetailsModal";
import { DIALOG_KEY } from "@/lib/dialog-key";
import { Task } from "../../projects/types/projects.t";
import { useDialogStore } from "@/store/useDialogStore";

interface ProjectDetailsModalProps {
    task: Task | undefined
}

const ProjectDetailsModal = ({task}: ProjectDetailsModalProps) => {
    const dialogKey = useDialogStore((state) => state.dialogKey);
    const openDialog = useDialogStore((state) => state.openDialog);
    return (
        <>
            <TaskDetailsModal task={task ?? null} />
            <EditTaskModal task={task ?? null} />
            <CreateTaskModal />
            <ReusableDelete
                isOpen={dialogKey === DIALOG_KEY.DELETE_PROJECT_TASK_DIALOG}
                onOpenChange={(value) => openDialog(value ? DIALOG_KEY.DELETE_PROJECT_TASK_DIALOG : null)}
                onDelete={() => openDialog(null)}
                title="Task"
                name={task?.title}
            />
        </>
    )
}

export default ProjectDetailsModal;