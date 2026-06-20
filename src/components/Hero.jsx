import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="hero-gradient position-relative">
      <div className="container position-relative z-1 text-center text-md-start">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 pt-5 pt-lg-0" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            <span className="badge bg-white text-dark border border-white rounded-pill px-4 py-2 mb-4 d-inline-block shadow-sm" style={{ textShadow: 'none', letterSpacing: '1px', fontWeight: '600' }}>
              Bienvenido a tu hogar
            </span>
            <h1 className="display-2 fw-bolder mb-4 text-white">
              Un lugar de <span className="text-gradient" style={{ textShadow: 'none' }}>esperanza</span> y <br className="d-none d-md-block" /> renovación
            </h1>
            <p className="lead mb-5 text-white fw-medium fs-4" style={{ maxWidth: '600px' }}>
              Más que un lugar, la fe es un camino hacia Dios. Permite que Él guíe tu vida, fortalezca tu corazón
              y te muestre su propósito para ti.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <a href="#horarios" className="btn btn-custom btn-lg px-5">
                Nuestros Horarios <i className="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="#contacto" className="btn btn-outline-custom btn-lg px-5">
                Saber más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
