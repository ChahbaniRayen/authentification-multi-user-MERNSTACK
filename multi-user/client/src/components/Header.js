import React from 'react';
import '../css/Header.css'; 

function Header() {
  return (
    <header className="header-container">
      {/* Colonne gauche (désormais sans image) */}
      <div className="header-image">
        {/* Vous pouvez ajouter un fond unicolore si nécessaire */}
      </div>

      {/* Colonne droite avec le contenu */}
      <div className="header-content">
        <h1>Explore Adventure & Activities</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
