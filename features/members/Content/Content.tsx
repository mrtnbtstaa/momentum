import TeamView from "../components/TeamTable";
import { mockTeamMembers } from "../data/mock-members";

const Content = () => {
    return (
        <TeamView data={mockTeamMembers} />
    )
}

export default Content;