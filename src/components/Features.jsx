import React from 'react';

const Features = () => {
  const features = [
    {
      image: "/comunidad.jpg",
      icon: "bi-people-fill",
      title: "Comunidad de Fe",
      description: "Unidos en Cristo, compartimos momentos de comunión, oración y crecimiento espiritual, fortaleciendo los lazos que nos ayudan a caminar juntos en la fe."
    },
    {
      image: "/casa-de-dios.jpg",
      icon: "bi-book-half",
      title: "Casa de Dios",
      description: "Este es un lugar apartado para adorar, buscar la presencia de Dios y crecer espiritualmente. Una casa donde cada persona puede acercarse al Señor con un corazón sincero y dispuesto a escuchar su voz."
    },
    {
      image: "/alabanza.jpg",
      icon: "bi-music-note-beamed",
      title: "Himno de Igle Sinai",
      description: "Un canto que expresa nuestra fe, nuestra identidad y el mensaje de esperanza que caracteriza a Sinai, Hospital del Alma.",
      link: "https://youtu.be/PHhXEjdFHVs?si=cuyRfq1CPUDVQkY2"
    }
  ];

  return (
    <section id="QuienesSomos" className="py-5" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <div className="container py-5">
        <div className="text-center mb-5 pb-3">
          <span className="text-gradient fw-bold text-uppercase tracking-wide">Lo que nos define</span>
          <h2 className="display-5 fw-bold mt-2 mb-4">¿Por qué elegir <span style={{ color: 'var(--accent-color)' }}>Igle Sinai?</span></h2>
          <p className="lead text-white mx-auto" style={{ maxWidth: '700px' }}>
            No importa quiénes fuimos ni las circunstancias que hemos enfrentado. Dios sigue transformando vidas, restaurando corazones y renovando la esperanza.
            "Sinai, Hospital del Alma" es el reflejo de nuestra fe en un Dios que sana, guía y da propósito a quienes caminan cerca de Él.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => {
            const CardContent = (
              <div className="feature-card h-100 overflow-hidden p-0 pb-4" style={feature.link ? { cursor: 'pointer' } : {}}>
                <div className="overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="feature-image m-0 rounded-top" style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
                </div>
                <div className="px-4 pt-4">
                  <div className="icon-box">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3">{feature.title}</h3>
                  <p className={`text-light opacity-75 ${feature.link ? 'mb-4' : 'mb-0'}`}>
                    {feature.description}
                  </p>
                  {feature.link && (
                    <div className="mt-3 mb-2">
                      <span className="btn w-100 py-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'var(--accent-color)', color: '#fff', borderRadius: '8px', fontWeight: '600', transition: 'all 0.3s ease' }}>
                        <i className="bi bi-play-circle-fill me-2 fs-5"></i> Escuchalo.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );

            return (
              <div className="col-md-4" key={index}>
                {feature.link ? (
                  <a href={feature.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
