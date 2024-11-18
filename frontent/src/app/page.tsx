'use client'
import React, {useState} from "react";
import {Card} from '@/components/ui/card'
import {TableHeader, TableRow, Table, TableCell} from "@/components/ui/table";
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import { Plus } from 'lucide-react';


type TodoListSetter = React.Dispatch<React.SetStateAction<TodoListItem[]>>

const TodoItem: React.FC<{ item: TodoListItem, setter: TodoListSetter }> = React.memo(({item, setter}) => {
    return (<TableRow>
        <TableCell>{item.id}</TableCell>
        <TableCell>
            <Input
                value={item.name}
                onChange={(e) => {
                    setter((prevState) => {
                        return prevState.map((prevItem) =>
                            prevItem.id === item.id
                                ? { ...prevItem, name: e.target.value }
                                : prevItem
                        );
                    });
                }}
            />
        </TableCell>
        <TableCell>
            <Input
                value={item.description}
                onChange={(e) => {
                    setter((prevState) => {
                        return prevState.map((prevItem) =>
                            prevItem.id === item.id
                                ? { ...prevItem, description: e.target.value }
                                : prevItem
                        );
                    });
                }}
            />
        </TableCell>
        <TableCell>
            <Checkbox
                checked={item.completed}
                onCheckedChange={(checked: boolean) => {
                    setter(prevState => {
                        return prevState.map(prevItem => prevItem.id === item.id ? {
                            ...prevItem, completed: checked
                        } : prevItem);
                    });
                }}
            />
        </TableCell>
    </TableRow>);
});

TodoItem.displayName = 'TodoItem';

export interface TodoListItem {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

export default function Home() {
    const [items, setItems] = useState<TodoListItem[]>([]);


    const addNewItem = () => {
        setItems(prevState => [...prevState, {
            id: prevState.length, name: "", description: "", completed: false
        }]);
    }

    return (<div className="">
        <main className="">
            <Card>
                <Table>
                    <TableHeader>
                        <TableCell>Index</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Completed</TableCell>
                    </TableHeader>
                    {items.map((item, index) => (<TodoItem key={index} item={item} setter={setItems}/>))}
                </Table>
                <div className="flex justify-end">
                    <button onClick={addNewItem} className="m-auto">
                        <Plus color="black" size={24}/>
                    </button>
                </div>

            </Card>
        </main>
    </div>);
}
