import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SideBar = () => {
  const navigateTo = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigateTo('/')
  }

  return (
    <div>
      <Link>Home</Link>
      <Link>Menu</Link>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default SideBar
