import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import landscaping2 from '../images/landscapping 2.jpeg';
import landscaping3 from '../images/landscapping 3.jpeg';
import landscaping4 from '../images/landscapping 4.jpeg';
import landscaping11 from '../images/landscapping 11.jpeg';
import landscaping12 from '../images/landscapping 12.jpeg';
import landscaping14 from '../images/landscapping 14.jpeg';
import landscaping18 from '../images/landscapping  18.jpeg';
import landscaping19 from '../images/landscappingg 19.jpeg';
import landscaping21 from '../images/landscapping 21.jpeg';
import landscaping24 from '../images/landscapping 24.jpeg';
import landscaping26 from '../images/landscapping 26.jpeg';

const Landscaping = () => {
  const defaultImages = [
    [
      { id: '2-14-1', src: landscaping2, name: 'Landscaping 2' },
      { id: '2-14-2', src: landscaping14, name: 'Landscaping 14' }
    ],
    [
      { id: '21-26-1', src: landscaping21, name: 'Landscaping 21' },
      { id: '21-26-2', src: landscaping26, name: 'Landscaping 26' }
    ],
    [
      { id: '19-18-1', src: landscaping19, name: 'Landscaping 19' },
      { id: '19-18-2', src: landscaping18, name: 'Landscaping 18' }
    ],
    [
      { id: '3-4-1', src: landscaping3, name: 'Landscaping 3' },
      { id: '3-4-2', src: landscaping4, name: 'Landscaping 4' },
      { id: '3-11-3', src: landscaping11, name: 'Landscaping 11' }
    ],
    [
      { id: '12-24-1', src: landscaping12, name: 'Landscaping 12' },
      { id: '12-24-2', src: landscaping24, name: 'Landscaping 24' }
    ]
  ];
  const [gallery, setGallery] = useState(defaultImages);

  const services = [
    'Garden Design & Installation',
    'Lawn Maintenance & Care',
    'Hardscaping (Pathways, Patios)',
    'Ready Mix Concrete',
    'Concrete Paving'
  ];

  /*const handleImageUpload = (e) => {
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
  }*/

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
      <section
        className="section-padding section-gradient-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <p
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#f97316',
                marginBottom: '1rem'
              }}
            >
              Portfolio
            </p>
            <h2>Our Previous Projects</h2>
            <div className="accent-line" style={{ margin: '1rem auto' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* Pair 1: landscaping 18 & 19 */}
            <div>
              <p
                style={{
                  textAlign: 'center',
                  color: '#f97316',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem'
                }}
              >
                Garden Transformation
              </p>
              <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                A stunning before-and-after showcasing our full garden overhaul — lush planting meets clean structure.
              </p>
              <div
                style={{
                  backgroundColor: '#1a2e1a',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping18}
                    alt="Landscaping 18"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping19}
                    alt="Landscaping 19"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
              <p style={{ textAlign: 'center', color: '#a1a1aa', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.75rem' }}>
                A complete garden redesign — from bare soil to a thriving green retreat.
              </p>
            </div>

            {/* Pair 2: landscaping 24 & 12 */}
            <div>
              <p
                style={{
                  textAlign: 'center',
                  color: '#f97316',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem'
                }}
              >
                🪨 Hardscaping & Paving
              </p>
              <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Precision paving and concrete work that adds lasting elegance and durability to any outdoor space.
              </p>
              <div
                style={{
                  backgroundColor: '#1e1e2e',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping24}
                    alt="Landscaping 24"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping12}
                    alt="Landscaping 12"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
              <p style={{ textAlign: 'center', color: '#a1a1aa', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.75rem' }}>
                Clean lines, solid foundations — our hardscaping work speaks for itself.
              </p>
            </div>

            {/* Pair 3: landscaping 14 & 26 */}
            <div>
              <p
                style={{
                  textAlign: 'center',
                  color: '#f97316',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem'
                }}
              >
                Lawn & Pathway Design
              </p>
              <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Beautiful pathways and manicured lawns that guide the eye and invite you outdoors.
              </p>
              <div
                style={{
                  backgroundColor: '#1a2810',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping14}
                    alt="Landscaping 14"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping26}
                    alt="Landscaping 26"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
              <p style={{ textAlign: 'center', color: '#a1a1aa', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.75rem' }}>
                Every path tells a story — designed to flow naturally through your landscape.
              </p>
            </div>

            {/* Pair 4: landscaping 2 & 4 */}
            <div>
              <p
                style={{
                  textAlign: 'center',
                  color: '#f97316',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem'
                }}
              >
                Residential Landscaping
              </p>
              <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Transforming private residences with thoughtful planting schemes and outdoor living features.
              </p>
              <div
                style={{
                  backgroundColor: '#2a1e10',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping2}
                    alt="Landscaping 2"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping4}
                    alt="Landscaping 4"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
              <p style={{ textAlign: 'center', color: '#a1a1aa', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.75rem' }}>
                Your home deserves an exterior as beautiful as its interior.
              </p>
            </div>

            {/* Pair 5: landscaping 21 & 11 */}
            <div>
              <p
                style={{
                  textAlign: 'center',
                  color: '#f97316',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.5rem'
                }}
              >
                Feature Gardens
              </p>
              <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Statement garden features that create a wow factor and become the heart of your outdoor space.
              </p>
              <div
                style={{
                  backgroundColor: '#1c1c2a',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping21}
                    alt="Landscaping 21"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div
                  style={{
                    flex: '1 1 calc(50% - 0.5rem)',
                    minWidth: '220px',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={landscaping11}
                    alt="Landscaping 11"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
              <p style={{ textAlign: 'center', color: '#a1a1aa', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.75rem' }}>
                Bold designs that leave a lasting impression on every visitor.
              </p>
            </div>

          </div>
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