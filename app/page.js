import StudentInfo from "./StudentInfo";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50 font-sans">
      <h1 className="text-4xl text-blue-800 font-bold mb-4 border border-none rounded-2xl bg-sky-200 p-4 relative">CPRG 306: Web Development 2 - Assignments</h1>
      
      <div className="text-center m-4">
        <StudentInfo />
      </div>

      <div className="border border-none rounded-2xl bg-sky-200 p-4 mb-4 relative">
        <p className="text-xl text-blue-600 mb-2 text-center">Assignments:</p>
        <p className="mb-2 text-center">
          <Link href="/week2" className="text-blue-500 hover:text-blue-700">Week 2</Link>
        </p>
        <p className="mb-2 text-center">
          <Link href="/week3" className="text-blue-500 hover:text-blue-700">Week 3</Link>
        </p>
        <p className="mb-2 text-center">
          <Link href="/week4" className="text-blue-500 hover:text-blue-700">Week 4</Link>
        </p>
        <p className="mb-2 text-center">
          <Link href="/week5" className="text-blue-500 hover:text-blue-700">Week 5</Link>
        </p>
        <p className="mb-2 text-center">
          <Link href="/week6" className="text-blue-500 hover:text-blue-700">Week 6</Link>
        </p>
        <p className="mb-2 text-center">
          <Link href="/week7" className="text-blue-500 hover:text-blue-700">Week 7</Link>
        </p>
        <p className="mb-2 text-center">
          <Link href="/week8" className="text-blue-500 hover:text-blue-700">Week 8</Link>
        </p>
        <p className="mb-2 text-center">
          <Link href="/week10" className="text-blue-500 hover:text-blue-700">Week 10</Link>
        </p>
      </div>

    </main>
  );
}