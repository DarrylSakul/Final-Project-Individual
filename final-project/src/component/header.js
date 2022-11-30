import React from 'react'

function Header() {
  return (
    <header id="home" className="header">
    <div className="overlay" />
    <div className="header-content container">
      <h1 className="header-title">
        <span className="up">Hello!</span>
        <span className="down">My Name is Darryl Sakul</span>
      </h1>
      <p className="header-subtitle">Student</p>            
    </div>              
  </header>
  )
}

export default Header