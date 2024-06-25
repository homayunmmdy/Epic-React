"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SideBar } from "./components";

export default function AdminLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <aside className="col-span-12  lg:col-span-3">
            <SideBar />
        </aside>
        <main className="col-span-12  lg:col-span-9">
          <div className=" w-full h-full px-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
