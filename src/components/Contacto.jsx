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
              <a href="https://www.facebook.com/share/1ETaFZ1rwU/" target="_blank" rel="noopener noreferrer" className="btn rounded-circle btn-social-icon">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              {/* Ícono de WhatsApp con enlace y efecto hover suave */}
              <a href="https://wa.link/bp155t" target="_blank" rel="noopener noreferrer" className="btn rounded-circle btn-social-icon">
                <i className="bi bi-whatsapp fs-5"></i>
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
                <li className="d-flex gap-3 align-items-start mt-4">
                  <div className="icon-box m-0" style={{ width: '50px', height: '50px', fontSize: '22px', flexShrink: 0 }}>
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <strong className="d-block fs-5 mb-1" style={{ color: 'var(--text-heading)' }}>Envíanos un Mensaje</strong>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=j7000r.jr@gmail.com&su=Contacto%20desde%20la%20Web" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-2 text-light opacity-75 text-decoration-none" style={{ transition: 'all 0.3s' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.opacity = '1'}} onMouseOut={(e) => {e.currentTarget.style.color = ''; e.currentTarget.style.opacity = '0.75'}}>
                      j7000r.jr@gmail.com
                      <span className="badge rounded-pill" style={{ backgroundColor: 'var(--accent-color)', color: '#fff', fontSize: '0.75rem', fontWeight: '500' }}>
                        ¡Haz clic aquí!
                      </span>
                    </a>
                    <small className="d-block mt-1 text-light opacity-50" style={{ fontSize: '0.8rem' }}>Al hacer clic se abrirá tu correo listo para escribirnos.</small>
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
