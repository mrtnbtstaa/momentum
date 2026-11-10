import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PaginationState, ReactTable, RowData, TableFeatures, tableFeatures } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JSX } from "react/jsx-runtime";

interface PaginationProps<T extends RowData>{
    data: T[],
    startRow: number,
    endRow: number,
    renderPageNumbers: () => JSX.Element[],
    pagination: PaginationState,
    table: ReactTable<TableFeatures, T>,
    footerTitle: string
}

const ReusablePagination = <T extends RowData, > ({data, startRow, endRow, renderPageNumbers, pagination, table, footerTitle}: PaginationProps<T>) => {
    return (
        <div className="flex items-center justify-between border-t border-white/5 px-6 py-3">
            <div className="flex items-center gap-4">
                <span className="text-[13px] text-[#888888]">
                    Showing <span className="text-white">{startRow}-{endRow}</span> of{" "}
                    <span className="text-white">{data.length}</span> {footerTitle}
                </span>

                <div className="flex items-center gap-2">
                    <span className="text-[13px] text-[#888888]">Rows per page:</span>
                    <Select
                        value={`${pagination.pageSize}`}
                        onValueChange={(value) => table.setPageSize(Number(value))}
                    >
                        <SelectTrigger className="h-7 w-16 rounded-md border-white/10 bg-[#1A1A1A] text-xs text-white focus:ring-1 focus:ring-white/20">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="min-w-16 border-white/10 bg-[#1A1A1A] text-gray-300">
                            {[8, 16, 24].map((pageSize) => (
                                <SelectItem
                                    key={pageSize}
                                    value={`${pageSize}`}
                                    className="text-xs focus:bg-white/10 focus:text-white"
                                >
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex items-center gap-1">
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Previous page"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="h-7 w-7 text-[#888888] hover:bg-white/5 hover:text-white disabled:opacity-50"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                {renderPageNumbers()}

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Next page"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="h-7 w-7 text-[#888888] hover:bg-white/5 hover:text-white disabled:opacity-50"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default ReusablePagination;