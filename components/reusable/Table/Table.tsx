"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import ReusablePagination from "./Pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { 
    ColumnDef,
    createPaginatedRowModel,
    flexRender,
    RowData,
    rowPaginationFeature,
    TableFeatures,
    tableFeatures,
    useTable,
    type PaginationState }
from "@tanstack/react-table";

const features: TableFeatures = tableFeatures({
    rowPaginationFeature,
    paginatedRowModel: createPaginatedRowModel(),
});

interface TableProps<T extends RowData> {
    columns: ColumnDef<typeof features, T, unknown>[];
    data: T[],
    footerTitle: string
}

const ReusableTable = <T extends RowData>({ columns, data, footerTitle }: TableProps<T>) => {
    
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 8,
    });
    const table = useTable({
        features,
        columns,
        data,
        state: { pagination },
        onPaginationChange: setPagination,
    });

    const totalPages = table.getPageCount();
    // TanStack's pageIndex is zero-based; the pagination UI displays 1-based pages.
    const currentPage = pagination.pageIndex + 1;
    const startRow = data.length === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1;
    const endRow = Math.min(
        (pagination.pageIndex + 1) * pagination.pageSize,
        data.length,
    );

    // Generate a compact page list, using ellipses when there are many pages.
    const renderPageNumbers = () => {
        const pages: (number | "...")[] = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let page = 1; page <= totalPages; page += 1) {
                pages.push(page);
            }
        } else if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
            pages.push(
                1,
                "...",
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            );
        } else {
            pages.push(
                1,
                "...",
                currentPage - 1,
                currentPage,
                currentPage + 1,
                "...",
                totalPages,
            );
        }

        return pages.map((page, index) => {
            if (page === "...") {
                return (
                    <span
                        key={`ellipsis-${index}`}
                        className="px-1 text-xs text-[#888888]"
                        aria-hidden="true"
                    >
                        ...
                    </span>
                );
            }

            return (
                <Button
                    key={`page-${page}`}
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    onClick={() => table.setPageIndex(page - 1)}
                    className={`h-7 w-7 text-xs transition-colors ${currentPage === page
                        ? "bg-white/10 text-white hover:bg-white/15"
                        : "text-[#888888] hover:bg-white/5 hover:text-white"
                        }`}
                >
                    {page}
                </Button>
            );
        });
    };

    return (
        <div className="flex w-full flex-col rounded-xl border border-white/5 bg-[#0F0F0F]">
            <div className="overflow-x-auto scrollbar-thin [scrollbar-color:rgba(255,255,255,0.1)_transparent] [&::-webkit-scrollbar]:w-0.2">
                <Table className="min-w-225">
                    <TableHeader className="border-b border-white/5 hover:bg-transparent">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className="border-none hover:bg-transparent"
                            >
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className="h-11 pl-6 text-[13px] font-normal text-[#888888] first:pl-6 last:pr-6"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    className="group cursor-pointer border-b border-white/3 transition-colors hover:bg-white/2"
                                >
                                    {row.getAllCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="py-3 pl-6 first:pl-6 last:pr-6"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center text-[#888888]"
                                >
                                    No {typeof data} found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination Footer */}
            <ReusablePagination
                startRow={startRow}
                endRow={endRow}
                table={table}
                pagination={pagination}
                data={data}
                renderPageNumbers={renderPageNumbers}
                footerTitle={footerTitle}
            />
        </div>
    )
}

export default ReusableTable;