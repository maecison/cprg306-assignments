export default function Item({ name, quantity, category }) {
    return (
        <div className="flex justify-center">
            <div className= "border border-slate-300 bg-slate-500 text-slate-800 text-center w-64 max-w-xs m-2 p-1 rounded">
                <p className= "font-bold"> {name}</p>
                <p>Buy {quantity} in {category}</p>
            </div>
        </div>
    );
}