"use client";
import { useState } from "react";
import Item from "./item.js";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    
    let items = itemsData;

    items.sort ((a, b) => a[sortBy].localeCompare(b[sortBy]));

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
            <div className="space-y-4">
                Sort by:
                <button
                    className={`px-2 py-1 ${sortBy === 'name' ? 'bg-blue-500' : 'bg-blue-200 text-blue-800'}`}
                    onClick={() => setSortBy("name")}>
                    Sort by Name
                </button>

                <button
                    className={`px-2 py-1 ${sortBy === 'category' ? 'bg-blue-500' : 'bg-blue-200 text-blue-800'}`}
                    onClick={() => setSortBy("category")}>
                    Sort by Category
                </button>

                {items.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />

                ))}
            </div>
        </div>
    )
}
