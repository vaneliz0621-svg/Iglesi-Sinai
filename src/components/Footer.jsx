import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container text-center">
        <h3 className="fs-5 fw-bold mb-3 d-flex align-items-center justify-content-center gap-2" style={{ color: 'var(--text-heading)' }}>
          <img src="/logo-iglesia.jpg" alt="IGLE SINAI Logo" width="45" height="45" className="rounded-circle shadow-sm" style={{ objectFit: 'contain', backgroundColor: '#000', padding: '2px' }} />
          IGLE SINAI
        </h3>
        <p className="mb-0" style={{ color: 'var(--text-light)', fontWeight: '400', opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} IGLE SINAI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
