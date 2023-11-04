"use client";
import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default browser submit action
        
        const newItem = { // create a new item object
            name,
            quantity,
            category
        };
        console.log(newItem); // log the new item object to the console

        onAddItem(newItem);

        setName(""); // reset the name to an empty string
        setQuantity(1); // reset the quantity to 1
        setCategory("Produce"); // reset the category to Produce
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
    <main className="flex flex-col items-center">
            <div className="w-full max-w-md bg-white px-8 pt-8 pb-4 rounded-lg shadow-md">
            <h1 className="text-3xl text-gray-800 font-bold mb-4 text-center">
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

                        <option value="produce">produce</option>
                        <option value="dairy">dairy</option>
                        <option value="bakery">bakery</option>
                        <option value="meat">meat</option>
                        <option value="frozen foods">frozen foods</option>
                        <option value="canned goods">canned goods</option>
                        <option value="dry goods">dry goods</option>
                        <option value="beverages">beverages</option>
                        <option value="snacks">snacks</option>
                        <option value="household">household</option>
                        <option value="other">other</option>
                    </select>
                </label>

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none">
                    Add Item
                </button>
            </form>
        </div>
    </main>
);
}