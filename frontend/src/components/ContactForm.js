import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:8000';
const API = `${BACKEND_URL}/api`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We\'ll contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-zinc-950 border-t border-zinc-800" data-testid="contact-section">
      <div className="px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-orange-500 mb-4" data-testid="contact-overline">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-tight text-zinc-50" data-testid="contact-heading">
            Contact Us
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-none p-8" data-testid="contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:border-orange-500 focus:outline-none transition-colors"
                data-testid="contact-name-input"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:border-orange-500 focus:outline-none transition-colors"
                data-testid="contact-email-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:border-orange-500 focus:outline-none transition-colors"
                data-testid="contact-phone-input"
              />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2" htmlFor="service">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:border-orange-500 focus:outline-none transition-colors"
                data-testid="contact-service-select"
              >
                <option value="">Select a service</option>
                <option value="tree-felling">Tree Felling</option>
                <option value="landscaping">Landscaping</option>
                <option value="both">Both Services</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-none px-4 py-3 text-zinc-100 focus:border-orange-500 focus:outline-none transition-colors resize-none"
              data-testid="contact-message-textarea"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-zinc-950 rounded-none font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors px-8 py-4 flex items-center justify-center gap-2 disabled:opacity-50"
            data-testid="contact-submit-button"
          >
            <Send size={20} />
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;