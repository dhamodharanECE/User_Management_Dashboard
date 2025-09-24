import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import UsersPage from './Pages/UserPage'
import AddUserPage from './Pages/AddUserPage'
import EditUserPage from './Pages/EditUserPage'
import './App.css'

export default function App() {
  const navigate = useNavigate()
  const [editingUser, setEditingUser] = useState(null)

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">User Management Dashboard</h1>
        </div>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<UsersPage navigateToEdit={(u)=>{setEditingUser(u); navigate('/edit')}} />} />
          <Route path="/add" element={<AddUserPage navigateBack={() => navigate('/')} />} />
          <Route path="/edit" element={<EditUserPage user={editingUser} navigateBack={() => navigate('/')} />} />
        </Routes>
      </main>
    </div>
  )
}
