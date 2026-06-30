import React from 'react';

const Horarios = () => {
  const horarios = [
    {
      dia: "Martes",
      hora: "6:30 PM",
      actividad: "Servicio General",
      icon: "bi-calendar-event-fill",
      // REEMPLAZAR AQUÍ: Ruta de la imagen principal para el horario del Martes
      image: "/Martes de adoración.jpeg"
    },
    {
      dia: "Viernes",
      hora: "6:30 PM",
      actividad: "Servicio General",
      icon: "bi-clock-fill",
      // REEMPLAZAR AQUÍ: Ruta de la imagen principal para el horario del Viernes
      image: "/Viernes de milagro.jpeg"
    }
  ];

  return (
    <section id="horarios" className="py-5" style={{ backgroundColor: 'rgba(93, 64, 55, 0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container py-4">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <span className="text-gradient fw-bold text-uppercase tracking-wide">Acompáñanos</span>
            <h2 className="display-5 fw-bold mt-2 mb-4">Nuestros <span style={{ color: 'var(--accent-color)' }}>Horarios</span></h2>
            <p className="lead text-light opacity-75 mx-auto mx-lg-0" style={{ maxWidth: '700px' }}>
              Te esperamos con los brazos abiertos en cualquiera de nuestros servicios regulares. Ven tal como eres y sé parte de nuestra familia.
            </p>
          </div>
          <div className="col-lg-6">
            {/* 
              ************************************************************************
              REEMPLAZA ESTA IMAGEN: 
              Cambia la ruta en 'src' por tu propia imagen de horarios general.
              ************************************************************************
            */}
            <img
              src="/Horario.jpeg"
              alt="Nuestros Horarios"
              className="w-100 shadow-lg"
              style={{ height: 'auto', maxHeight: '500px', objectFit: 'contain', borderRadius: '20px', border: '1px solid var(--secondary-color)', backgroundColor: '#000' }}
            />
          </div>
        </div>

        <div className="row justify-content-center g-4">
          {horarios.map((item, index) => (
            <div className="col-md-5 col-lg-4" key={index}>
              <div className="feature-card h-100 overflow-hidden p-0 pb-4 text-start">
                <div className="overflow-hidden" style={{ backgroundColor: '#000' }}>
                  <img src={item.image} alt={`Horario ${item.dia}`} className="feature-image m-0 rounded-top" style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }} />
                </div>
                <div className="px-4 pt-4">
                  <div className="icon-box">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h3 className="h4 fw-bold mb-2" style={{ color: 'var(--text-heading)' }}>{item.dia}</h3>
                  <h4 className="h5 text-gradient mb-3 notranslate" translate="no">{item.hora}</h4>
                  <p className="text-light opacity-75 mb-0">
                    {item.actividad}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Horarios;
