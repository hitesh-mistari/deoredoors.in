import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumb on homepage
  if (location.pathname === '/') {
    return null;
  }

  // Format path name for display
  const formatPathName = (str) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav style={breadcrumbContainerStyle}>
      <div className="container">
        <ol style={breadcrumbListStyle}>
          <li style={breadcrumbItemStyle}>
            <Link to="/" style={breadcrumbLinkStyle}>
              <Home size={16} />
              <span>Home</span>
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={name} style={breadcrumbItemStyle}>
                <ChevronRight size={16} style={separatorStyle} />
                {isLast ? (
                  <span style={breadcrumbActiveStyle}>{formatPathName(name)}</span>
                ) : (
                  <Link to={routeTo} style={breadcrumbLinkStyle}>
                    {formatPathName(name)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

const breadcrumbContainerStyle = {
  background: '#f8fafc',
  padding: '15px 0',
  borderBottom: '1px solid #e2e8f0',
  marginTop: '80px',
};

const breadcrumbListStyle = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '8px',
  margin: 0,
  padding: 0,
  listStyle: 'none',
};

const breadcrumbItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const breadcrumbLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  color: '#64748b',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'color 0.2s ease',
  fontWeight: 500,
};

const breadcrumbActiveStyle = {
  color: 'var(--primary)',
  fontSize: '0.9rem',
  fontWeight: 600,
};

const separatorStyle = {
  color: '#cbd5e1',
};

// Add responsive styles and hover effects
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('breadcrumb-styles');
  if (existingStyle) existingStyle.remove();

  const style = document.createElement('style');
  style.id = 'breadcrumb-styles';
  style.textContent = `
    nav a:hover {
      color: var(--primary) !important;
    }
    
    @media (max-width: 768px) {
      nav[style*="padding: 15px 0"] {
        padding: 12px 0 !important;
        margin-top: 70px !important;
      }
      
      nav ol {
        font-size: 0.85rem !important;
      }
      
      nav ol li span,
      nav ol li a {
        font-size: 0.85rem !important;
      }
    }
    
    @media (max-width: 480px) {
      nav[style*="padding: 15px 0"] {
        padding: 10px 0 !important;
        margin-top: 65px !important;
      }
      
      nav ol {
        font-size: 0.8rem !important;
        gap: 6px !important;
      }
      
      nav ol li span,
      nav ol li a {
        font-size: 0.8rem !important;
      }
      
      nav ol li svg {
        width: 14px !important;
        height: 14px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Breadcrumb;
