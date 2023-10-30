export default function Item({name, quantity, category, onSelect}) {
    return (
        <li 
            className="list-none bg-white rounded-lg shadow-lg p-4 mb-4 cursor-pointer" 
            onClick={onSelect}
        >
            <ul>
                <li className="text-gray-800">Name: {name}</li>
                <li className="text-gray-800">Quantity: {quantity}</li>
                <li className="text-gray-800">Category: {category}</li>
            </ul>
        </li>
    );
}