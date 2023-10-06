"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    const [itemAdded, setItemAdded] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default browser submit action
        
        const newItem = { // create a new item object
            name,
            quantity,
            category
        };
        console.log(newItem); // log the new item object to the console

        alert(`Item "${name}" with a quantity of "${quantity}" has been added to the "${category}" category.`);
        // alert the user that the item has been added

        setItemAdded(true); // this indicates that an item has been added

        setName(""); // reset the name to an empty string
        setQuantity(1); // reset the quantity to 1
        setCategory("Produce"); // reset the category to Produce

        setItemAdded(false); // sets the itemAdded state back to false, indicating the process has been completed
    };

    const handleNameChange = (event) => { // this function is called when the name input field is changed
        setName(event.target.value); // set the name to the value of the input field
    };

    const handleQuantityChange = (event) => { // this function is called when the quantity input field is changed
        setQuantity(event.target.value); // set the quantity to the value of the input field
    };

    const handleCategoryChange = (event) => { // this function is called when the category input field is changed
        setCategory(event.target.value); // set the category to the value of the input field
    };

return (
    <main className="flex justify-center items-center h-screen bg-gray-800">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl text-gray-800 font-bold mb-8 text-center">
                Add New Item
            </h1>
                <form onSubmit={handleSubmit}>
                    
                    <label className="block mb-4">
                        <span className="text-gray-800">Item Name:</span>
                        <input
                            required
                            onChange={handleNameChange}
                            value={name}
                            className="mt-1 p-2 block w-full rounded-md text-gray-800 bg-gray-200 focus:bg-white focus:outline-none"
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-800">Quantity:</span>
                        <input
                            required
                            onChange={handleQuantityChange}
                            value={quantity}
                            className="mt-1 p-2 block w-full rounded-md text-gray-800 bg-gray-200 focus:bg-white focus:outline-none"
                            type="number"
                            min="1"
                            max="99"
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-800">Category:</span>
                        <select
                            required
                            onChange={handleCategoryChange}
                            value={category}
                            className="mt-1 p-2 block w-full rounded-md text-gray-800 bg-gray-200 focus:bg-white focus:outline-none">

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

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                        Add Item
                    </button>
                </form>
        </div>
    </main>
);
}