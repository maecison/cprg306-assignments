"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    const [itemAdded, setItemAdded] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newItem = {
            name,
            quantity,
            category
        };
        console.log(newItem);

        alert(name.toLowerCase() + " with the total quantity of " + quantity + " has been added to " + category.toLowerCase() + ".");

        setItemAdded(true);

        setName("");
        setQuantity(1);
        setCategory("Produce");

        setItemAdded(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

return (
    <main>
        <div className="flex justify-center"></div>
            {itemAdded && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    Item has been added!
                </div>
            )}

            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl text-gray-800 font-bold mb-8">
                Create New Item
            </h1>
                <form onSubmit={handleSubmit}>

                    <label className="block mb-4">
                        <span className="text-gray-800">Item Name:</span>
                        <input
                            required
                            onChange={handleNameChange}
                            value={name}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white">
                        </input>
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-800">Quantity:</span>
                        <input
                            required
                            onChange={handleQuantityChange}
                            value={quantity}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white">
                        </input>
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-800">Quantity:</span>
                        <select
                            required
                            onChange={handleCategoryChange}
                            value={category}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white">

                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>

                    <button type="submit" className="container">
                        Add Item
                    </button>
                </form>
        </div>
    </main>
);
}