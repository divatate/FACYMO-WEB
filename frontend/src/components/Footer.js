import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800" data-testid="main-footer">
      <div className="px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="border-r-0 md:border-r border-zinc-800 pr-0 md:pr-8">
            <h3 className="font-display text-2xl uppercase tracking-tight text-zinc-50 mb-4">
              FACYMO<span className="text-orange-500">.</span>
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Professional tree felling and landscaping services. 
              Transforming outdoor spaces with expertise and care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="border-r-0 md:border-r border-zinc-800 pr-0 md:pr-8">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-orange-500 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" data-testid="footer-home-link">
                Home
              </Link>
              <Link to="/tree-felling" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" data-testid="footer-tree-felling-link">
                Tree Felling Services
              </Link>
              <Link to="/landscaping" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors" data-testid="footer-landscaping-link">
                Landscaping Services
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-orange-500 mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <Mail size={16} className="text-orange-500" />
                <span data-testid="footer-email">theotakhul12@icloud.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <Phone size={16} className="text-orange-500" />
                <span data-testid="footer-phone">+27 62 120 6681</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <MapPin size={16} className="text-orange-500" />
                <span data-testid="footer-location">51 Vlei Street, Kraaifontein, Cape Town</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-6 text-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Facymo Pvt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;