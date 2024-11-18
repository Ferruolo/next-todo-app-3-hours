'use client'
import {useState} from "react";
import {Card} from '@/components/ui/card'
import {TableHeader, TableRow, Table, TableCell} from "@/components/ui/table";
import {Checkbox} from "@/components/ui/checkbox";


export interface TodoListItem {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

export default function Home() {
    const [items, setItems] = useState<TodoListItem[]>([]);


    return (
    <div className="">
      <main className="">
        <Card>
            <Table>
                <TableHeader>
                    <TableCell>Index</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Completed</TableCell>
                </TableHeader>
                {items.map((item, index) => (
                     <TableRow key={index}>
                         <TableCell>{item.id}</TableCell>
                         <TableCell>{item.name}</TableCell>
                         <TableCell>{item.description}</TableCell>
                         <Checkbox checked={item.completed} onCheckedChange={checked => {
                             if (checked.valueOf())
                                 setItems()
                        }></Checkbox>
                     </TableRow>
                ))}
            </Table>
            <button>Create New Item</button>
        </Card>
      </main>
    </div>
  );
}
