import HeaderSection from "@/components/reusable/HeaderSection/HeaderSection";

const TaskHeader = () => {
    return (
        <HeaderSection
            title="My Tasks"
            subTitle="16 tasks · 4 due this week"
            hasViewMode={true}
            buttonContent="Create task"
        />
    )
}

export default TaskHeader;