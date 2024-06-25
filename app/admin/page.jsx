'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
const Tickets = () => {
  const router = useRouter()
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('checkLogin');
    router.push('/')
  }
  return (
    <div>
      <button className='btn btn-error m-3' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Tickets
