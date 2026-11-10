import MainContent from "@/components/reusable/MainContent";
import { ActiveProjects } from "../components/ActiveProjects";
import { AiInsights } from "../components/AiInsights";
import { MyRecentTasks } from "../components/MyRecentTasks";
import { StatsRow } from "../components/StatsRow";
import { TeamActivity } from "../components/TeamActivity";
import { UpcomingDeadlines } from "../components/UpcomingDeadlines";
import DashboardIntro from "../components/DashboardIntro";

const Content = () => {
    return (
        <MainContent>
            <DashboardIntro />
            <StatsRow />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <UpcomingDeadlines />
                <AiInsights />
            </div>

            {/* Lower Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <MyRecentTasks />
                <TeamActivity />
            </div>

            {/* Footer Section */}
            <ActiveProjects />
        </MainContent>
    )
}

export default Content;