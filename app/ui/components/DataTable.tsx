"use client";
import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { MoveLeft, MoveRight } from "lucide-react";

type DataTableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
  pageSizeOptions?: number[];
};

export default function DataTable<T>({
  columns,
  data,
  pageSizeOptions = [5, 10, 20],
}: DataTableProps<T>) {
  const [globalFilter, setGlobalFilter] = useState(""); // 🔍 Recherche globale
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  const table = useReactTable({
    data,
    columns,
    state: { pagination: { pageIndex, pageSize }, globalFilter },
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater;
      setPageIndex(newState.pageIndex);
      setPageSize(newState.pageSize);
    },
    onGlobalFilterChange: setGlobalFilter, // 🔍 Gestion de la recherche
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), // 🔀 Tri des colonnes
    getFilteredRowModel: getFilteredRowModel(), // 🔽 Filtres
  });

  return (
    <div className="w-full bg-primary p-4 rounded-xl flex flex-col items-center gap-4">
      {/* 🔍 Barre de recherche Ligne */}
      <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center justify-center mb-6 gap-2">
          <p>Resultat :</p>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="px-4 py-2 border-[.5px] bg-transparent border-secondary rounded-lg shadow-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:-blue-500 transition-all duration-200"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} lignes
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          placeholder="Rechercher..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full sm:w-[250px] px-4 py-2 border-[.5px] bg-transparent border-secondary rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:-blue-500 transition-all duration-200"
        />
      </div>

      <table className="min-w-full text-center">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-transparent">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className=" p-2 cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === "asc"
                    ? " 🔼"
                    : header.column.getIsSorted() === "desc"
                    ? " 🔽"
                    : ""}
                </th>
              ))}
              <th className="p-2">Actions</th>{" "}
              {/* 📌 Colonne des boutons */}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-secondary">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className=" p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              {/* 📌 Boutons View / Edit / Delete */}
              <td className="p-2 flex gap-2 items-center justify-center">
                <button className="px-2 py-1 bg-blue-500 text-white rounded">
                  👁️ Voir
                </button>
                <button className="px-2 py-1 bg-yellow-500 text-white rounded">
                  ✏️ Éditer
                </button>
                <button className="px-2 py-1 bg-red-500 text-white rounded">
                  🗑️ Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📌 Pagination */}
      <div className="w-full text-gray-200 flex items-center mt-4 justify-between">
        <div className="text-gray-200 px-4 py-2 border-[0.5px] border-secondary rounded-lg">
          <span>
            Page {pageIndex + 1} sur {table.getPageCount()}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            className="px-4 py-2 text-gray-200 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
           <MoveLeft size={16} />
          </button>

         <div className="bg-secondary text-gray-200 rounded-md w-8 h-8 flex items-center justify-center">
         <span>
           {pageIndex + 1}
          </span>
         </div>

          <button
            className="px-4 py-2 text-gray-200 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
             <MoveRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
