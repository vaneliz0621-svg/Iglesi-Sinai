import React from 'react';

const VideoGallery = () => {
  const videos = [
    { id: 1, src: "/Monte sinai.mp4", title: "Conoce quiénes somos y el significado de Monte Sinaí, el lugar que representa nuestra identidad, nuestra fe y el propósito que Dios ha puesto en nuestra iglesia." },
    { id: 2, src: "/David.mp4", title: "Escucha el himno de nuestra iglesia mientras recorres momentos especiales a través de imágenes y videos que reflejan el crecimiento, la unidad y el amor de nuestra congregación." },
    { id: 3, src: "/danza meraki.mp4", title: "Conoce al Ministerio de Danza Meraki, un grupo que honra y adora a Dios a través de la danza, expresando con alegría, entrega y pasión." }
  ];

  return (
    <section id="videos" className="py-5" style={{ backgroundColor: 'rgba(93, 64, 55, 0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-gradient fw-bold text-uppercase tracking-wide">Multimedia</span>
          <h2 className="display-5 fw-bold mt-2 mb-4">Galería de <span style={{ color: 'var(--accent-color)' }}>Videos</span></h2>
          <p className="lead text-light opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            Revive nuestros mejores momentos, mensajes y eventos especiales.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {videos.map((video) => (
            <div className="col-md-6 col-lg-4" key={video.id}>
              <div className="feature-card p-3 h-100">
                <div style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <video
                    controls
                    className="w-100"
                    style={{ height: 'auto', maxHeight: '400px', objectFit: 'contain' }}
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Tu navegador no soporta el formato de video.
                  </video>
                </div>
                <h4 className="mt-3 mb-1 text-center h5" style={{ color: 'var(--text-heading)' }}>{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
