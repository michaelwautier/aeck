import React from 'react';
import './header.css'

function Header() {
  return (
    <header className="App-header">
      <div className="wrapper flex">
        <div className="title">
          <h1>Julien Lebreton</h1>
          <h2>Photographer / Graphic Designer</h2>
        </div>
        <div>
          <a href="#" className="nav-link">
            Work*
          </a>
          <a href="#" className="nav-link">
            Bio / Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header