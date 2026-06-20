import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (window.innerWidth < 992) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3" style={{ backgroundColor: 'rgba(62, 39, 35, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2" href="#" style={{ color: 'var(--text-heading)' }}>
          <img src="/logo-iglesia.jpg" alt="IGLE SINAI Logo" width="55" height="55" className="rounded-circle shadow-sm" style={{ objectFit: 'contain', backgroundColor: '#000', padding: '2px' }} />
          <span className="text-uppercase tracking-wider">IGLE SINAI</span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 align-items-lg-center mt-3 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link fs-5" aria-current="page" href="#inicio" onClick={closeMenu}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#QuienesSomos" onClick={closeMenu}>Quienes Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#horarios" onClick={closeMenu}>Horarios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#contacto" onClick={closeMenu}>Contacto</a>
            </li>
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <a className="btn btn-custom px-4 w-100 d-flex align-items-center justify-content-center gap-2" href="https://whatsapp.com/channel/0029Vb6TQsZFHWpvv5K0Kx01" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <i className="bi bi-whatsapp"></i> Únete a nuestro canal
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
