import Link from "next/link";
import EventList from "./event-list";

export default function Page() {
    return (
        <main>
            <h1>My Shopping List</h1>
            <Link href="/">Back to Home</Link>
            <EventList />
        </main>
    )
}