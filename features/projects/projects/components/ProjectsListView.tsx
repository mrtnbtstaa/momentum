"use client";

import ReusableTable from "@/components/reusable/Table/Table";
import { Project } from "../types/projects.t";
import { projectsData } from "../data/mockProjects";
import TableColumns from "./Columns";
import { useDialogStore } from "@/store/useDialogStore";
import { DIALOG_KEY } from "@/lib/dialog-key";
import { useParams, useRouter } from "next/navigation";

interface ProjectsListViewProps {
  projects?: Project[];
}

export function ProjectsListView({
  projects = projectsData,
}: ProjectsListViewProps) {

  const { id } = useParams()
  const router = useRouter();
  const openDialog = useDialogStore((state) => state.openDialog);
  const setDialogType = useDialogStore((state) => state.setDialogType);
  const project = projects.find((project) => project.id == id)

  return (
    <ReusableTable
      data={projects}
      columns={TableColumns({
        onEditProject: () => {
          openDialog(DIALOG_KEY.CREATE_PROJECT_DIALOG);
          setDialogType("edit");
        },
        onViewProject: () => router.push(`/projects/${project?.id}`),
        onDeleteProject: () => openDialog(DIALOG_KEY.DELETE_PROJECT_DIALOG),
      })}
      footerTitle="Projects"
    />
  )
}
