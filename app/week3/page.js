import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className = "flex justify-center text-4xl font-bold m-3 text-slate-800">Shopping List</h1>
            <ItemList />
        </main>
    );
}