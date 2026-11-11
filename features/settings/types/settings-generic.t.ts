/*
    - Using const it will preserved literal type preservation
    - Using satisfies will preserved type validation
*/

import { TabsOption } from "@/components/reusable/Tabs/tabs.types";

export const PASSWORD_POLICY = [
    {
        label: "Strong (12+ chars, mixed case, numbers, symbols)",
        value: "Strong (12+ chars, mixed case, numbers, symbols)"
    },
    {
        label: "Standard (8+ chars, mixed case)",
        value: "Standard (8+ chars, mixed case)"
    },
    {
        label: "Strict Enterprise (16+ chars, periodic rotation)",
        value: "Strict Enterprise (16+ chars, periodic rotation)"
    }
] as const satisfies SelectOption<string>[];

export const SESSION_TIMEOUT = [
    {
        label: "After 8 hours of inactivity",
        value: "After 8 hours of inactivity"
    },
    {
        label: "After 24 hours of inactivity",
        value: "After 24 hours of inactivity"
    },
    {
        label: "After 7 days of inactivity",
        value: "After 7 days of inactivity"
    },
    {
        label: "Never expire",
        value: "Never expire"
    }
] as const satisfies SelectOption<string>[]

export const SETTINGS_TABS = {
    options: [
        { tab: "Workspace" },
        { tab: "Security" },
        { tab: "Danger Zone" },
    ]
} as const satisfies TabsOption<string>