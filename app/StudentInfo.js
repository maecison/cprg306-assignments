import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p>Name: Mae Ison</p>
            <p>Course section: CPRG 306 B</p>
            <Link href='https://github.com/maecison'> For my GitHub Profile, click me! </Link>
        </div>
    );
}