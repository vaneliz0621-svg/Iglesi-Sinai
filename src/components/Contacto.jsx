import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-5" style={{ backgroundColor: 'var(--primary-color)' }}>
      <div className="container py-4">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <span className="text-gradient fw-bold text-uppercase tracking-wide">Saber Más</span>
            <h2 className="display-5 fw-bold mt-2 mb-4">Conócenos y <span style={{ color: 'var(--accent-color)' }}>Contáctanos</span></h2>
            <p className="lead text-light opacity-75 mb-4 mx-auto mx-lg-0" style={{ maxWidth: '500px' }}>
              Transformando vidas a través del amor de Cristo. Únete a nuestra familia y descubre tu propósito en un ambiente de paz.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-4 mb-lg-0">
              <a href="https://www.facebook.com/share/1ETaFZ1rwU/" target="_blank" rel="noopener noreferrer" className="btn rounded-circle" style={{ width: '50px', height: '50px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--accent-color)', color: 'var(--accent-color)', backgroundColor: 'transparent', transition: 'all 0.3s' }}>
                <i className="bi bi-facebook fs-5"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="feature-card p-4 p-md-5 text-start">
              <h4 className="fw-bold mb-4" style={{ color: 'var(--text-heading)' }}>Información de Contacto</h4>
              <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                <li className="d-flex gap-3 align-items-start">
                  <div className="icon-box m-0" style={{ width: '50px', height: '50px', fontSize: '22px', flexShrink: 0 }}>
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <strong className="d-block fs-5 mb-1" style={{ color: 'var(--text-heading)' }}>Nuestra Ubicación</strong>
                    <span className="text-light opacity-75">Colonia Nazareno, El lagarto<br /></span>
                  </div>
                </li>
                <li className="d-flex gap-3 align-items-center">
                  <div className="icon-box m-0" style={{ width: '50px', height: '50px', fontSize: '22px', flexShrink: 0 }}>
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <strong className="d-block fs-5 mb-1" style={{ color: 'var(--text-heading)' }}>Teléfono</strong>
                    <a href="tel:+12345678900" className="text-light opacity-75 text-decoration-none">+503 7239-9628</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
