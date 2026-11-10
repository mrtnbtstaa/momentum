"use client";
import { useViewModeStore } from "@/store/useViewModeStore";

interface ViewRendererProps {
    gridView: React.ReactNode;
    listView: React.ReactNode;
    gridClassName?: string;
}

const ViewRenderer = ({ gridView, listView, gridClassName = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" }: ViewRendererProps) => {
    const viewMode = useViewModeStore((state) => state.type);

    return (
        viewMode === "grid" ? (
            <div className={gridClassName}>
                {gridView}
            </div>
        ) : listView
    )

}

export default ViewRenderer;