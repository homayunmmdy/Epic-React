"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
    const router = useRouter();
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("TicketMaster");
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, []);
    return (
        <div>
            {children}
        </div>
    );
}