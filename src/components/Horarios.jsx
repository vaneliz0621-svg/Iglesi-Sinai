import React from 'react';

const Horarios = () => {
  const horarios = [
    {
      dia: "Martes",
      hora: "6:30 PM",
      actividad: "Servicio General",
      icon: "bi-sun-fill"
    },
    {
      dia: "Miercoles",
      hora: "6:00 AM",
      actividad: "Ayunos y oracion. Realizado de manera personal desde el lugar donde cada miembro se encuentre.",
      icon: "bi-book-fill"
    },
    {
      dia: "Viernes",
      hora: "6:30 PM",
      actividad: "Servicio General",
      icon: "bi-lightning-charge-fill"
    }
  ];

  return (
    <section id="horarios" className="py-5" style={{ backgroundColor: 'rgba(93, 64, 55, 0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-gradient fw-bold text-uppercase tracking-wide">Acompáñanos</span>
          <h2 className="display-5 fw-bold mt-2 mb-4">Nuestros <span style={{ color: 'var(--accent-color)' }}>Horarios</span></h2>
          <p className="lead text-light opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            Te esperamos con los brazos abiertos en cualquiera de nuestros servicios regulares. Ven tal como eres y sé parte de nuestra familia.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {horarios.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-card h-100 p-4 text-center d-flex flex-column align-items-center">
                <div className="icon-box mb-4" style={{ width: '70px', height: '70px', fontSize: '32px' }}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className="h4 fw-bold mb-2">{item.dia}</h3>
                <h4 className="h5 text-gradient mb-3">{item.hora}</h4>
                <p className="text-light opacity-75 mb-0">
                  {item.actividad}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Horarios;
