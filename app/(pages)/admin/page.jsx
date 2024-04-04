'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
const Tickets = () => {
  const router = useRouter()
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("TicketMaster");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('TicketMaster');
    router.push('/')
  }
  return (
    <div>
      <button onClick={handleLogout}>خروج</button>
    </div>
  )
}

export default Tickets
