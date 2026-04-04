import React, { useState } from 'react';
import { ArrowRight, Upload, Trash2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Landscaping = () => {
  const [gallery, setGallery] = useState([]);

  const services = [
    'Garden Design & Installation',
    'Lawn Maintenance & Care',
    'Hardscaping (Pathways, Patios)',
    'Irrigation System Installation'
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
          backgroundImage: `linear-gradient(135deg, rgba(15, 15, 19, 0.9) 0%, rgba(24, 24, 27, 0.85) 100%), url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="hero-content">
          <h1 className="animate-fade-in-up">
            Beautiful <span className="text-accent">Landscaping</span><br />
            Transformations
          </h1>
          <p className="animate-fade-in-up">
            Create your perfect outdoor space with our expert landscaping design and construction services.
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
              Our Services
            </p>
            <h2>Landscaping Solutions</h2>
            <div className="accent-line" style={{ margin: '1rem auto' }}></div>
          </div>

          <div className="grid grid-2" style={{ gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {services.map((service, index) => (
              <div key={index} className="card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ color: '#f97316', fontSize: '1.5rem' }}>✓</div>
                  <h4 style={{ margin: 0 }}>{service}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding section-gradient-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=600&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
              Portfolio
            </p>
            <h2>Before & After Gallery</h2>
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
              <p>No images uploaded yet. Showcase your landscaping transformations.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding section-dark-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
              What Clients Say
            </p>
            <h2>Testimonials</h2>
            <div className="accent-line" style={{ margin: '1rem auto' }}></div>
          </div>

          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {[
              {
                name: 'Jane Doe',
                company: 'Private Residence',
                comment: 'Transformed our backyard into our dream garden. Excellent service and attention to detail!',
                rating: 5
              },
              {
                name: 'John Smith',
                company: 'Commercial Property',
                comment: 'Professional team, on-time delivery, and beautiful results. Highly recommended!',
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
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="container">
          <h2 className="text-light" style={{ marginBottom: '1rem' }}>Ready to Transform Your Outdoor Space?</h2>
          <p className="text-light" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Get a free landscaping consultation today
          </p>
          <button className="btn btn-primary">
            Request Free Consultation <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Landscaping;