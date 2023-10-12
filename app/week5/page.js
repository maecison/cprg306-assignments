import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-blue-100 pt-12">
            <h1 className="text-4xl text-blue-800 mb-8">
                Shopping List
            </h1>
            <ItemList />
        </main>
    );
}