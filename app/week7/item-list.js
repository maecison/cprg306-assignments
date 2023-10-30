import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort ((a, b) => {
        let aValue = a[sortBy] || '';
        let bValue = b[sortBy] || '';
        return aValue.localeCompare(bValue);
    });

    return (
        <div className="flex flex-col items-center bg-blue-100">
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

                {sortedItems.map((item, index) => (
                    <Item
                        key={index}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                ))}
            </div>
        </div>
    );
}