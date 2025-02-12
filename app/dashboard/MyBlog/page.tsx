"use client";
import DataTable from "@/app/ui/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";

const data = [
  { id: 1, name: "Alice", age: 25, createdAt: "2024-02-12" },
  { id: 2, name: "Bob", age: 30, createdAt: "2023-11-05" },
  { id: 1, name: "Alice", age: 25, createdAt: "2024-02-12" },
  { id: 1, name: "Alice", age: 25, createdAt: "2024-02-12" },
  { id: 1, name: "Alice", age: 25, createdAt: "2024-02-12" },
  { id: 1, name: "Alice", age: 25, createdAt: "2024-02-12" },
  { id: 1, name: "Alice", age: 25, createdAt: "2024-02-12" },
  { id: 3, name: "Charlie", age: 28, createdAt: "2022-08-21" },
];

const columns: ColumnDef<typeof data[0]>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nom" },
  { accessorKey: "age", header: "Âge" },
  { accessorKey: "createdAt", header: "Date d'inscription", cell: (info) => new Date(info.getValue() as string).toLocaleDateString() },
];

export default function Page() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Liste des Utilisateurs</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
}