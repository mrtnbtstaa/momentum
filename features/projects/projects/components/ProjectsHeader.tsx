"use client";

import { useDialogStore } from "@/store/useDialogStore";
import { DIALOG_KEY } from "@/lib/dialog-key";

import HeaderSection from "@/components/reusable/HeaderSection/HeaderSection";

interface ProjectsHeaderProps {
  projectCount?: number;
  activeCount?: number;
}



export function ProjectsHeader({
  projectCount = 12,
  activeCount = 4,
}: ProjectsHeaderProps) {

  const openDialog = useDialogStore((state) => state.openDialog);
  const setDialogType = useDialogStore((state) => state.setDialogType);

  return (
    <HeaderSection
      title="Projects"
      subTitle={`${projectCount} projects · ${activeCount} active`}
      onButtonClicked={() => {
        openDialog(DIALOG_KEY.CREATE_PROJECT_DIALOG);
        setDialogType("create");
      }}
      buttonContent="Create project"
      hasViewMode={true}
    />

  );
}