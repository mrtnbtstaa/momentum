import { ProjectsFilters } from "../components/ProjectsFilters";
import { ProjectsHeader } from "../components/ProjectsHeader";
import { ProjectsListView } from "../components/ProjectsListView";
import ViewRenderer from "@/components/reusable/ViewRenderer/ViewRenderer";
import { projectsData } from "../data/mockProjects";
import Wrapper from "@/components/reusable/Wrapper/Wrapper";
import ProjectModal from "../components/ProjectModal";
import ProjectGrid from "../components/ProjectGrid";

const Content = () => {
    return (
        <>
            <Wrapper>
                <ProjectsHeader
                    projectCount={12}
                    activeCount={4}
                />
                <ProjectsFilters />
                <ViewRenderer
                    gridView={<ProjectGrid />}
                    listView={<ProjectsListView projects={projectsData} />}
                />
            </Wrapper>
            <ProjectModal />
        </>
    );
}

export default Content;