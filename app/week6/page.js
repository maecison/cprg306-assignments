"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems((prevItems) => {
            return [...prevItems, newItem];
        });
    }

    return (
        <main className="flex flex-col items-center min-h-screen bg-blue-100 pt-12">
            <h1 className="text-4xl text-blue-800 mb-2">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
}