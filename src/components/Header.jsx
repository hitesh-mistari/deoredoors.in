import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Header is transparent on all pages initially, becomes solid when scrolled
  const shouldShowDark = isScrolled;

  const dynamicHeaderStyle = {
    ...headerStyle,
    background: shouldShowDark ? '#121212' : 'transparent',
    boxShadow: shouldShowDark ? 'var(--shadow-md)' : 'none',
    position: shouldShowDark ? 'fixed' : 'absolute',
    transition: 'all 0.3s ease',
  };

  return (
    <header style={dynamicHeaderStyle}>
      <div className="container" style={navContainerStyle}>
        <Link to="/" style={logoStyle} onClick={closeMobileMenu}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>DEORE DOOR</h1>
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>And Modular Furniture</p>
        </Link>
        
        {/* Desktop Navigation */}
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li><Link to="/" style={pathname === '/' ? activeLinkStyle : {}}>Home</Link></li>
            <li><Link to="/about" style={pathname === '/about' ? activeLinkStyle : {}}>About Us</Link></li>
            <li><Link to="/products" style={pathname === '/products' ? activeLinkStyle : {}}>Our Products</Link></li>
            <li><Link to="/gallery" style={pathname === '/gallery' ? activeLinkStyle : {}}>Gallery</Link></li>
            <li><Link to="/contact" style={pathname === '/contact' ? activeLinkStyle : {}}>Contact Us</Link></li>
          </ul>
        </nav>
        
        {/* Desktop CTA Button */}
        <Link to="/contact" className="btn btn-primary desktop-cta" style={{ padding: '10px 20px' }}>Get a Quote</Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          style={mobileMenuToggleStyle} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div style={mobileMenuStyle}>
          <nav style={mobileNavStyle}>
            <ul style={mobileUlStyle}>
              <li><Link to="/" style={pathname === '/' ? { ...mobileLinkStyle, ...activeLinkStyle } : mobileLinkStyle} onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/about" style={pathname === '/about' ? { ...mobileLinkStyle, ...activeLinkStyle } : mobileLinkStyle} onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/products" style={pathname === '/products' ? { ...mobileLinkStyle, ...activeLinkStyle } : mobileLinkStyle} onClick={closeMobileMenu}>Our Products</Link></li>
              <li><Link to="/gallery" style={pathname === '/gallery' ? { ...mobileLinkStyle, ...activeLinkStyle } : mobileLinkStyle} onClick={closeMobileMenu}>Gallery</Link></li>
              <li><Link to="/contact" style={pathname === '/contact' ? { ...mobileLinkStyle, ...activeLinkStyle } : mobileLinkStyle} onClick={closeMobileMenu}>Contact Us</Link></li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }} onClick={closeMobileMenu}>Get a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const headerStyle = {
  padding: '20px 0',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 100,
  color: 'white',
};

const navContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoStyle = {
  flex: '0 0 auto',
};

const navStyle = {
  flex: '1 1 auto',
  display: 'flex',
  justifyContent: 'center',
};

const ulStyle = {
  display: 'flex',
  gap: '30px',
  margin: 0,
  padding: 0,
  fontSize: '0.9rem',
  fontWeight: 500,
};

const activeLinkStyle = {
  color: 'var(--primary)',
};

const mobileMenuToggleStyle = {
  display: 'none',
  background: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  padding: '8px',
};

const mobileMenuStyle = {
  position: 'fixed',
  top: '80px',
  left: 0,
  right: 0,
  background: '#121212',
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  zIndex: 99,
  animation: 'slideDown 0.3s ease',
};

const mobileNavStyle = {
  padding: '20px',
};

const mobileUlStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  margin: 0,
  padding: 0,
};

const mobileLinkStyle = {
  display: 'block',
  padding: '15px 10px',
  fontSize: '1rem',
  fontWeight: 500,
  borderBottom: '1px solid rgba(255,255,255,0.1)',
};

// Add media query styles via CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 992px) {
      nav[style*="flex: 1 1 auto"] {
        display: none !important;
      }
      .desktop-cta {
        display: none !important;
      }
      button[aria-label="Toggle menu"] {
        display: block !important;
      }
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

export default Header;
