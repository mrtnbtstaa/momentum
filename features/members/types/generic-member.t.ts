import { TabsOption } from "@/components/reusable/Tabs/tabs.types"

export const TEAM_MEMBER_TABS: TabsOption<string> = {
    options: [
        { tab: "All" },
        { tab: "Administrators" },
        { tab: "Managers" },
        { tab: "Members" },
        { tab: "Active" },
        { tab: "Suspended" },
    ]
}

export const PROJECT_ASSIGNMENT = [
    { label: "Atlas Core System", value: "atlas core system" },
    { label: "Mobile Client Overhaul", value: "mobile client overhaul" },
    { label: "Cloud Infra Security", value: "cloud infra security" }
] as const satisfies SelectOption<string>[]