import React from "react";

function Header() {
  return (
    <header style={{
      background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)',
      color: '#fff',
      padding: '32px 0',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      borderRadius: '0 0 16px 16px',
      marginBottom: '32px',
      letterSpacing: '1px',
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '2px',
        textShadow: '1px 2px 8px rgba(0,0,0,0.10)'
      }}>
        📝 To-Do List
      </h1>
      <p style={{
        margin: '12px 0 0 0',
        fontSize: '1.1rem',
        fontWeight: 400,
        opacity: 0.9
      }}>
        Basic React Workshop Project
      </p>
    </header>
  );
}

export default Header;