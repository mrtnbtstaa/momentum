import { ViewType } from "@/types/grid.types";
import { create } from "zustand";

interface ViewModeState{
    type: ViewType;
    setViewMode: (value: ViewType) => void;
    setDefaultMode: () => void;
}

export const useViewModeStore = create<ViewModeState>((set) => ({
    type: "grid",
    setViewMode: (value) => set({type: value}),
    setDefaultMode: () => set({type: "grid"})
}))