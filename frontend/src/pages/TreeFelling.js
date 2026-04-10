import React, { useState } from 'react';
import { ArrowRight, Trees } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import treeFelling1 from '../images/Tree felling 1.jpeg';
import treeFelling4 from '../images/tree felling 4.jpeg';
import treeFelling5 from '../images/tree felling 5.jpeg';
import treeFelling6 from '../images/tree felling 6.jpeg';
import treeFelling8 from '../images/tree felling 8.jpeg';
import treeFelling9 from '../images/tree felling 9.jpeg';
import treeFelling12 from '../images/tree felling 12.jpeg';
import treeFelling14 from '../images/tree felling 14.jpeg';

const TreeFelling = () => {
  const defaultImages = [
    { id: 1, src: treeFelling1, name: 'Tree felling 1' },
    { id: 2, src: treeFelling4, name: 'Tree felling 4' },
    { id: 3, src: treeFelling5, name: 'Tree felling 5' },
    { id: 4, src: treeFelling6, name: 'Tree felling 6' },
    { id: 5, src: treeFelling8, name: 'Tree felling 8' },
    { id: 6, src: treeFelling9, name: 'Tree felling 9' },
    { id: 7, src: treeFelling12, name: 'Tree felling 12' },
    { id: 8, src: treeFelling14, name: 'Tree felling 14' }
  ];
  const [gallery, setGallery] = useState(defaultImages);

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

  {/*const handleImageUpload = (e) => {
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
  };*/}

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
                <div key={index} style={{ display: 'flex', gap: '1rem', animationDelay: `${index * 0.1}s` }} className="animate-slide-in-left">
                  <div style={{ color: '#f97316', flexShrink: 0, fontSize: '1.5rem' }}>✓</div>
                  <p className="text-light" style={{ margin: 0 }}>{feature}</p>
                </div>
              ))}
            </div>
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
            <h2>Our Previous Projects</h2>
            <div className="accent-line" style={{ margin: '1rem auto' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          {/* Tree Felling 4 - Unwanted Tree */}
          <div>
            <p style={{ textAlign: 'center', color: '#f97316', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
               Unwanted Tree Removal
            </p>
            <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Removing trees that are out of place, overgrown, or no longer wanted on the property.
            </p>
            <div style={{ backgroundColor: '#1a2e1a', borderRadius: '12px', padding: '1.5rem' }}>
              <img src={treeFelling4} alt="Unwanted Tree Removal" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#14260a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                <p style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>✅ Advantages</p>
                <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Frees up space, improves curb appeal, eliminates root damage risks to paving or foundations.</p>
              </div>
              <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#2e1a1a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                <p style={{ color: '#f87171', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>⚠️ Disadvantages</p>
                <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Loss of shade and natural habitat. Stump may remain if not treated separately.</p>
              </div>
            </div>
          </div>

          {/* Tree Felling 1 - Old Tree */}
          <div>
            <p style={{ textAlign: 'center', color: '#f97316', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
               Old Tree Removal
            </p>
            <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Aging trees become structurally weak and pose serious safety risks — timely removal is essential.
            </p>
            <div style={{ backgroundColor: '#2a1e10', borderRadius: '12px', padding: '1.5rem' }}>
              <img src={treeFelling1} alt="Old Tree Removal" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#14260a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                <p style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>✅ Advantages</p>
                <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Eliminates hazard of falling branches, prevents pest infestation, opens space for new growth.</p>
              </div>
              <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#2e1a1a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
                <p style={{ color: '#f87171', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>⚠️ Disadvantages</p>
                <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Old trees often have deep root systems making removal complex and time-consuming.</p>
              </div>
            </div>
          </div>

          {/* Tree Felling 6 - Old Tree */}
          <div>
        <p style={{ textAlign: 'center', color: '#f97316', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
           Aged Tree Clearance
        </p>
        <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          Old trees left unattended can become dangerous to people and property nearby.
        </p>
        <div style={{ backgroundColor: '#1c1a10', borderRadius: '12px', padding: '1.5rem' }}>
          <img src={treeFelling6} alt="Aged Tree Clearance" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#14260a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>✅ Advantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Safer environment, reduced liability risk, allows better light penetration to surrounding plants.</p>
          </div>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#2e1a1a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#f87171', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>⚠️ Disadvantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Removal of established trees can disturb surrounding soil and nearby plant roots.</p>
          </div>
        </div>
      </div>

      {/* Tree Felling 8 - Unwanted Tree */}
      <div>
        <p style={{ textAlign: 'center', color: '#f97316', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
           Unwanted Tree Clearance
        </p>
        <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          Trees growing in the wrong place can cause major structural damage — we remove them safely and cleanly.
        </p>
        <div style={{ backgroundColor: '#1a2e1a', borderRadius: '12px', padding: '1.5rem' }}>
          <img src={treeFelling8} alt="Unwanted Tree Clearance" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#14260a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>✅ Advantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Protects walls, pipes, and driveways from root intrusion. Reclaims usable outdoor space.</p>
          </div>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#2e1a1a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#f87171', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>⚠️ Disadvantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Can reduce privacy screening and windbreak protection the tree may have been providing.</p>
          </div>
        </div>
      </div>

      {/* Tree Felling 9 - Bush Clearance */}
      <div>
        <p style={{ textAlign: 'center', color: '#f97316', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
           Bush Clearance
        </p>
        <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          Overgrown bush and shrub clearance to reclaim your land and restore order to your property.
        </p>
        <div style={{ backgroundColor: '#0f2212', borderRadius: '12px', padding: '1.5rem' }}>
          <img src={treeFelling9} alt="Bush Clearance" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#14260a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>✅ Advantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Reduces fire hazard, deters pests and rodents, opens up the property for development or landscaping.</p>
          </div>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#2e1a1a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#f87171', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>⚠️ Disadvantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Dense bush clearance can disturb wildlife habitats and expose bare soil to erosion.</p>
          </div>
        </div>
      </div>

      {/* Tree Felling 14 - Palm Removal */}
      <div>
        <p style={{ textAlign: 'center', color: '#f97316', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
           Palm Tree Removal
        </p>
        <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          Palms require specialist removal techniques — our team handles them safely from top to base.
        </p>
        <div style={{ backgroundColor: '#1e2a10', borderRadius: '12px', padding: '1.5rem' }}>
          <img src={treeFelling14} alt="Palm Tree Removal" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#14260a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>✅ Advantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Eliminates falling frond hazards, prevents root damage to nearby structures, improves sightlines.</p>
          </div>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#2e1a1a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#f87171', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>⚠️ Disadvantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Palms are tall and heavy, making removal complex — requires skilled climbers and proper equipment.</p>
          </div>
        </div>
      </div>

      {/* Tree Felling 12 - Stump Removal */}
      <div>
        <p style={{ textAlign: 'center', color: '#f97316', fontWeight: '600', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
           Stump Removal
        </p>
        <p style={{ textAlign: 'center', color: '#fafafa', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          Left-behind stumps are unsightly and dangerous — we grind and remove them completely.
        </p>
        <div style={{ backgroundColor: '#1c1410', borderRadius: '12px', padding: '1.5rem' }}>
          <img src={treeFelling12} alt="Stump Removal" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#14260a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>✅ Advantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Removes tripping hazards, prevents regrowth and pests, leaves the ground ready for replanting or paving.</p>
          </div>
          <div style={{ flex: '1 1 calc(50% - 0.5rem)', backgroundColor: '#2e1a1a', borderRadius: '8px', padding: '0.75rem 1rem' }}>
            <p style={{ color: '#f87171', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', margin: '0 0 0.4rem 0' }}>⚠️ Disadvantages</p>
            <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: 0 }}>Grinding leaves wood chip debris behind, and deep roots may still require chemical treatment.</p>
          </div>
        </div>
          </div>

          </div>
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