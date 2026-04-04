import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 z-50" data-testid="main-navigation">
      <div className="px-6 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-display text-3xl uppercase tracking-tighter text-zinc-50" data-testid="logo-link">
            FACYMO<span className="text-orange-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                isActive('/') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-100'
              }`}
              data-testid="nav-home-link"
            >
              Home
            </Link>
            <Link
              to="/tree-felling"
              className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                isActive('/tree-felling') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-100'
              }`}
              data-testid="nav-tree-felling-link"
            >
              Tree Felling
            </Link>
            <Link
              to="/landscaping"
              className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                isActive('/landscaping') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-100'
              }`}
              data-testid="nav-landscaping-link"
            >
              Landscaping
            </Link>
            <a
              href="#contact"
              className="bg-orange-500 text-zinc-950 rounded-none font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors px-6 py-3"
              data-testid="nav-contact-button"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-zinc-800 pt-4" data-testid="mobile-menu">
            <Link
              to="/"
              className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                isActive('/') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tree-felling"
              className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                isActive('/tree-felling') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Tree Felling
            </Link>
            <Link
              to="/landscaping"
              className={`font-sans text-sm uppercase tracking-wider transition-colors ${
                isActive('/landscaping') ? 'text-orange-500' : 'text-zinc-400 hover:text-zinc-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Landscaping
            </Link>
            <a
              href="#contact"
              className="bg-orange-500 text-zinc-950 rounded-none font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors px-6 py-3 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;