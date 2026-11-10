"use client";
import { CreateProjectCard } from "../components/CreateProjectCard";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectsFilters } from "../components/ProjectsFilters";
import { ProjectsHeader } from "../components/ProjectsHeader";
import { ProjectsListView } from "../components/ProjectsListView";
import ViewRenderer from "@/components/reusable/ViewRenderer/ViewRenderer";
import { useDialogStore } from "@/store/useDialogStore";
import CreateProjectModal from "../components/Modal/CreateProjectModal";
import ReusableDelete from "@/components/reusable/Delete/Delete";
import { DIALOG_KEY } from "@/lib/dialog-key";
import { projectsData } from "../data/mockProjects";
import Wrapper from "@/components/reusable/Wrapper/Wrapper";

const Content = () => {
    const dialogKey = useDialogStore((state) => state.dialogKey);
    const dialogType = useDialogStore((state) => state.dialogType);
    const openDialog = useDialogStore((state) => state.openDialog);
    return (
        <>
            <Wrapper>
                <ProjectsHeader
                    projectCount={12}
                    activeCount={4}
                />
                <ProjectsFilters />
                <ViewRenderer
                    gridView={
                        <>
                            {projectsData.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                            <CreateProjectCard
                                onClickProject={() => { }}
                            />
                        </>
                    }
                    listView={
                        <>
                            <ProjectsListView projects={projectsData} />
                        </>
                    }
                />
            </Wrapper>
            <CreateProjectModal dialogType={dialogType ?? ""} />
            <ReusableDelete
                isOpen={dialogKey === DIALOG_KEY.DELETE_PROJECT_DIALOG}
                onOpenChange={(value) => openDialog(value ? DIALOG_KEY.DELETE_PROJECT_DIALOG : null)}
                onDelete={() => openDialog(null)}
            />
        </>
    );
}

export default Content;