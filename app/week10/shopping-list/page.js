import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    try {
      if (user) {
        const items = await getItems(user.uid);
        setItems(items);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  function handleAddItem(newItem) {
    addItem(user.uid, newItem)
      .then((itemId) => {
        const updatedItem = { ...newItem, id: itemId };
        setItems((prevItems) => [...prevItems, updatedItem]);
      })
      .catch((error) => {
        console.error("Error adding item:", error);
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
      <button
        onClick={firebaseSignOut}
        className="text-white bg-red-600 p-2 rounded-lg m-4"
      >
        Logout
      </button>
      <div className="w-full sm:w-1/2 p-4">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <MealIdeas ingredients={[selectedItemName]} />
      </div>
    </main>
  );
}