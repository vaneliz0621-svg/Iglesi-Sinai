import React from 'react';

const Carousel = () => {
  const images = [
    { id: 1, src: "/Igle1.jpeg", alt: "Imagen 1" },
    { id: 2, src: "/igle2.jpeg", alt: "Imagen 2" },
    { id: 3, src: "/Igle3.jpeg", alt: "Imagen 3" },
    { id: 4, src: "/igle4.jpeg", alt: "Imagen 4" },
    { id: 5, src: "/igle5.jpeg", alt: "Imagen 5" },
    { id: 6, src: "/igle6.jpeg", alt: "Imagen 6" },
    { id: 7, src: "/igle7.jpeg", alt: "Imagen 7" },
    { id: 8, src: "/igle8.jpeg", alt: "Imagen 8" },
    { id: 9, src: "/igle9.jpeg", alt: "Imagen 9" },
    { id: 10, src: "/igle10.jpeg", alt: "Imagen 10" },
    { id: 11, src: "/igle11.jpeg", alt: "Imagen 11" },
    { id: 12, src: "/igle12.jpeg", alt: "Imagen 12" }
  ];

  return (
    <section id="galeria" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-gradient fw-bold text-uppercase tracking-wide">Nuestra Comunidad</span>
          <h2 className="display-5 fw-bold mt-2 mb-4">Galería de <span style={{ color: 'var(--accent-color)' }}>Imágenes</span></h2>
          <p className="lead text-light opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            Momentos especiales vividos en nuestra congregación.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div 
              id="mainCarousel" 
              className="carousel slide carousel-fade shadow-lg" 
              data-bs-ride="carousel" 
              data-bs-interval="4500"
              style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--secondary-color)' }}
            >
              {/* Indicadores (Dots) */}
              <div className="carousel-indicators">
                {images.map((img, index) => (
                  <button 
                    key={`indicator-${img.id}`}
                    type="button" 
                    data-bs-target="#mainCarousel" 
                    data-bs-slide-to={index} 
                    className={index === 0 ? "active" : ""} 
                    aria-current={index === 0 ? "true" : "false"} 
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Imágenes del Carrusel */}
              <div className="carousel-inner">
                {images.map((img, index) => (
                  <div key={img.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    {/* 
                      ************************************************************************
                      SI DESEAS CAMBIAR CÓMO SE VE LA IMAGEN, PUEDES AJUSTAR EL OBJECT-FIT AQUÍ.
                      ESTÁ CONFIGURADO PARA CUBRIR EL ÁREA SIN DEFORMARSE.
                      ************************************************************************
                    */}
                    <img 
                      src={img.src} 
                      className="d-block w-100" 
                      alt={img.alt} 
                      style={{ width: '100%', height: 'auto', maxHeight: '700px', objectFit: 'contain', backgroundColor: '#000' }}
                    />
                  </div>
                ))}
              </div>

              {/* Flechas de Navegación */}
              <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '50%', backgroundSize: '50%' }}></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '50%', backgroundSize: '50%' }}></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
