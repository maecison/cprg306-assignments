import React, { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const { user, firebaseSignOut } = useUserAuth();

    function handleAddItem(newItem) {
        setItems((prevItems) => {
            return [...prevItems, newItem];
        });
    }

    function handleItemSelect(item) {
        const cleanedItemName = item.name.trim().toLowerCase();
        setSelectedItemName(cleanedItemName);
    }

    if (!user) {
        return null;
    }

    return (
        <main className="flex flex-wrap justify-around min-h-screen bg-blue-100 pt-12">
            <h1 className="text-4xl text-blue-800 mb-2 w-full text-center">
                Shopping List
            </h1>
            <button onClick={firebaseSignOut} className="text-white bg-red-600 p-2 rounded-lg m-4">
                Logout
            </button>
            <div className="w-full sm:w-1/2 p-4">
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className="w-full sm:w-1/2 p-4">
                <MealIdeas ingredients={[selectedItemName]}/>
            </div>
        </main>
    );
}