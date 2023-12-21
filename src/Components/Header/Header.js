import React from 'react'

function Header() {
  return (
    <div>
      <nav style={{
        display:"flex",
        listStyle:"none",
        gap:"50px"
      }}>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </nav>
    </div>
  )
}

export default Header
