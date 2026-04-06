import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import treeFelling12 from '../images/tree felling 12.jpeg';

const Home = () => {
  const services = [
    {
      title: 'Tree Felling Services',
      description: 'Safe and efficient tree removal with professional equipment and trained experts.',
      icon: '',
      link: '/tree-felling'
    },
    {
      title: 'Landscaping Services',
      description: 'Transform your outdoor spaces with beautiful landscaping and design solutions.',
      icon: '',
      link: '/landscaping'
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency response for urgent tree and landscape emergencies.',
      icon: '',
      link: '#contact'
    },
    {
      title: 'Maintenance Plans',
      description: 'Regular maintenance packages to keep your property looking pristine year-round.',
      icon: '',
      link: '#contact'
    }
  ];

  const features = [
    {
      icon: <Users size={32} />,
      title: 'Expert Team',
      description: 'Highly trained professionals with years of industry experience'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Guaranteed',
      description: 'We deliver only the highest quality workmanship'
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Service',
      description: 'Quick turnaround times without compromising quality'
    }
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 15, 19, 0.9) 0%, rgba(24, 24, 27, 0.85) 100%), url(${treeFelling12})`
        }}
      >
        <div className="hero-content">
          <h1 className="animate-fade-in-up">
            Professional Tree Felling &<br />
            <span className="text-accent">Landscaping Services</span>
          </h1>
          <p className="animate-fade-in-up">
            Transform your outdoor spaces with expert care and precision. Serving Capetown with excellence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/tree-felling" className="btn btn-primary">
              Explore Tree Felling <ArrowRight size={20} />
            </Link>
            <Link to="/landscaping" className="btn btn-secondary">
              View Landscaping
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="section-padding section-dark-bg"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17, 15, 19, 0.95) 0%, rgba(24, 24, 27, 0.9) 100%), url('https://images.unsplash.com/photo-1578574494267-08af42f54802?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
              What We Do
            </p>
            <h2>Our Services</h2>
            <div className="accent-line" style={{ margin: '1rem auto' }}></div>
          </div>

          <div className="grid grid-4">
            {services.map((service, index) => (
              <div key={index} className="card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="text-muted">{service.description}</p>
                <Link to={service.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#f97316', fontWeight: '600', marginTop: '1rem' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="section-padding section-image-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')`
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f97316', marginBottom: '1rem' }}>
              Why Choose Us
            </p>
            <h2 style={{ marginBottom: '2rem' }} className="text-light">Experience & Expertise</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', gap: '1.5rem', animationDelay: `${index * 0.1}s` }} className="animate-slide-in-left">
                  <div style={{ color: '#f97316', flexShrink: 0 }}>{feature.icon}</div>
                  <div>
                    <h3 style={{ marginBottom: '0.5rem', color: '#fafafa' }}>{feature.title}</h3>
                    <p className="text-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Get Free Quote <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding section-gradient-bg">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '3rem' }}>
            {[
              { number: '1000+', label: 'Projects Completed' },
              { number: '500+', label: 'Satisfied Clients' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div style={{ fontSize: '3rem', fontFamily: "'Anton', sans-serif", color: '#f97316', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <p className="text-light" style={{ fontSize: '1.1rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};

export default Home;