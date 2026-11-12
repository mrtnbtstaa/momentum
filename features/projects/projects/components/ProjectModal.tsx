"use client";

import ReusableDelete from "@/components/reusable/Delete/Delete";
import CreateProjectModal from "./Modal/CreateProjectModal";
import { useDialogStore } from "@/store/useDialogStore";
import { DIALOG_KEY } from "@/lib/dialog-key";

const ProjectModal = () => {

    const dialogKey = useDialogStore((state) => state.dialogKey);
    const dialogType = useDialogStore((state) => state.dialogType);
    const openDialog = useDialogStore((state) => state.openDialog);
    return (
        <>
            <CreateProjectModal dialogType={dialogType ?? ""} />
            <ReusableDelete
                isOpen={dialogKey === DIALOG_KEY.DELETE_PROJECT_DIALOG}
                onOpenChange={(value) => openDialog(value ? DIALOG_KEY.DELETE_PROJECT_DIALOG : null)}
                onDelete={() => openDialog(null)}
            />
        </>
    )
}

export default ProjectModal;