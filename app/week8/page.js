"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/page";

export default function AuthenticationComponent() {
    const { user, gitHubSignIn } = useUserAuth();
    const [page, setPage] = useState();

    useEffect(() => {
        async function authenticate() {
            await gitHubSignIn();
            setPage("page");
        }
        authenticate();
    }, [gitHubSignIn]);

    if (!user) {
        return (
            <main className="flex flex-wrap justify-center items-center min-h-screen bg-blue-100 pt-12">
                <p className="text-2xl text-red-800 mb-2 w-full text-center">
                    No user is logged in.
                </p>
                <button onClick={gitHubSignIn} className="text-white bg-blue-600 p-2 rounded-lg m-4">
                    Login with GitHub
                </button>
            </main>
        );
    }

    if (page === "page") {
        return <ShoppingList />;
    }

    return (
        <main className="flex flex-wrap justify-center items-center min-h-screen bg-blue-100 pt-12">
            <p className="text-2xl text-green-800 mb-2 w-full text-center">
                Welcome, {user.displayName} ({user.email})
            </p>
        </main>
    );
}