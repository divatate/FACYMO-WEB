import React, { useState } from 'react';
import { ArrowRight, Upload, Trash2, Trees } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const TreeFelling = () => {
  const [gallery, setGallery] = useState([]);

  const services = [
    'Large Tree Removal',
    'Stump Grinding & Removal',
    'Emergency Tree Removal',
    'Tree Trimming & Pruning',
    'Dead Tree Removal',
    'Storm Damage Cleanup',
    'Branch Removal',
    'Tree Risk Assessment',
    'Land Clearing',
    'Hazardous Tree Removal',
    'Root Removal & Treatment'
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setGallery([...gallery, {
          id: Date.now(),
          src: event.target.result,
          name: file.name
        }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const deleteImage = (id) => {
    setGallery(gallery.filter(img => img.id !== id));
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 15, 19, 0.9) 0%, rgba(24, 24, 27, 0.85) 100%), url('https://images.unsplash.com/photo-1581092365005-ec70bfe4a7fd?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="hero-content">
          <h1 className="animate-fade-in-up">
            Professional <span className="text-accent">Tree Felling</span><br />
            & Removal Services
          </h1>
          <p className="animate-fade-in-up">
            Safe, efficient, and professional tree removal solutions for residential and commercial properties.
          </p>
          <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Get Quote Now <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding section-dark-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
              Our Expertise
            </p>
            <h2>Tree Services We Offer</h2>
            <div className="accent-line" style={{ margin: '1rem auto' }}></div>
          </div>

          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Trees size={24} style={{ color: '#f97316', marginTop: '0.25rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#fafafa' }}>{service}</h4>
                    <p style={{ margin: 0, color: '#a1a1aa', fontSize: '0.875rem' }}>
                      Professional and safe service
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Service Section */}
      <section
        className="section-padding section-image-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
              Safety First
            </p>
            <h2 style={{ marginBottom: '2rem' }} className="text-light">Certified & Insured Professionals</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                'Licensed arborists with years of experience',
                'Fully insured for all types of work',
                'State-of-the-art equipment and technology',
                'Emergency response available 24/7',
                'Safe removal of hazardous trees'
              ].map((feature, index) => (
                <div key={index} style={{ display: 'flex', gap: '1rem' }} className="animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div style={{ color: '#f97316', flexShrink: 0, fontSize: '1.5rem' }}>✓</div>
                  <p className="text-light" style={{ margin: 0 }}>{feature}</p>
                </div>
              ))}
            </div>

            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Schedule Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding section-gradient-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
              Portfolio
            </p>
            <h2>Project Gallery</h2>
            <div className="accent-line" style={{ margin: '1rem auto' }}></div>
          </div>

          {/* Upload Section */}
          <div className="card" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Upload size={24} className="text-accent" />
              <h4 style={{ margin: 0 }}>Upload Project Photos</h4>
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              style={{
                padding: '1rem',
                border: '2px dashed #f97316',
                borderRadius: '0',
                backgroundColor: '#18181b',
                color: '#fafafa',
                cursor: 'pointer'
              }}
            />
          </div>

          {/* Gallery Grid */}
          {gallery.length > 0 ? (
            <div className="gallery">
              {gallery.map(image => (
                <div key={image.id} style={{ position: 'relative' }} className="gallery-item">
                  <img src={image.src} alt={image.name} />
                  <button
                    onClick={() => deleteImage(image.id)}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: '#dc2626',
                      color: '#fff',
                      border: 'none',
                      padding: '0.75rem',
                      borderRadius: '0',
                      cursor: 'pointer'
                    }}
                    className="btn"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center" style={{ padding: '3rem', color: '#a1a1aa' }}>
              <p>No images uploaded yet. Showcase your tree removal projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding section-dark-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
              Client Reviews
            </p>
            <h2>What Our Clients Say</h2>
            <div className="accent-line" style={{ margin: '1rem auto' }}></div>
          </div>

          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {[
              {
                name: 'David Johnson',
                company: 'Residential Client',
                comment: 'They safely removed a large oak tree that was threatening our roof. Professional and efficient work!',
                rating: 5
              },
              {
                name: 'Emily Brown',
                company: 'Property Manager',
                comment: 'Quick response time for emergency tree removal. Highly skilled and professional team.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                company: 'Commercial Property',
                comment: 'Excellent service from start to finish. They cleaned up everything afterwards.',
                rating: 5
              },
              {
                name: 'Lisa Anderson',
                company: 'Residential Client',
                comment: 'Fair pricing and top-quality work. Will definitely use their services again!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div style={{ marginBottom: '1rem' }}>
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="text-light" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                  "{testimonial.comment}"
                </p>
                <h4 style={{ margin: '0 0 0.25rem 0' }}>{testimonial.name}</h4>
                <p style={{ margin: 0, color: '#f97316', fontSize: '0.875rem' }}>{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding section-image-bg text-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="container">
          <h2 className="text-light" style={{ marginBottom: '1rem' }}>Need Professional Tree Service?</h2>
          <p className="text-light" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Get a free estimate today. Available 24/7 for emergencies.
          </p>
          <button className="btn btn-primary">
            Request Free Estimate <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default TreeFelling;