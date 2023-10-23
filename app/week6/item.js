export default function Item({name, quantity, category}) {
    return (
        <li className="list-none bg-white rounded-lg shadow-lg p-4 mb-4">
            <ul>
                <li className="text-gray-800">Name: {name}</li>
                <li className="text-gray-800">Quantity: {quantity}</li>
                <li className="text-gray-800">Category: {category}</li>
            </ul>
        </li>
    );
}