import React, { useState, useEffect } from 'react';
import { useApp, NavPage } from '../context/AppContext';
import {
  GraduationCap,
  Menu,
  X,
  LogIn,
  User,
  Phone,
  Mail,
  Award,
  ChevronRight,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeNav,
    setActiveNav,
    currentUser,
    logout,
    setIsLoginModalOpen,
    setSelectedApplyModalCourse,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: NavPage }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Facilities', page: 'facilities' },
    { name: 'Admissions', page: 'admissions' },
    { name: 'Fee Payment', page: 'fees' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: NavPage) => {
    setActiveNav(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div style={{ backgroundColor: '#07244c', color: '#cbd5e1', fontSize: '0.8rem', padding: '0.35rem 0' }} className="md-hide">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Award size={14} color="#f59e0b" />
              <span>TNEA Counseling Code: <strong>1110</strong></span>
            </span>
            <span style={{ color: '#64748b' }}>|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} color="#10b981" />
              <span>NAAC 'A' Grade Accredited • Anna University Affiliated</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+914424780002" className="flex items-center gap-1 hover:text-white" style={{ transition: 'color 0.2s' }}>
              <Phone size={13} />
              <span>+91 44 2478 0002 / 0003</span>
            </a>
            <span style={{ color: '#64748b' }}>|</span>
            <a href="mailto:info@smec.ac.in" className="flex items-center gap-1 hover:text-white" style={{ transition: 'color 0.2s' }}>
              <Mail size={13} />
              <span>admissions@smec.ac.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 4px 20px -2px rgba(10, 45, 90, 0.12)' : '0 1px 3px rgba(0,0,0,0.06)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="container flex items-center justify-between" style={{ padding: isScrolled ? '0.65rem 1.25rem' : '0.85rem 1.25rem', transition: 'padding 0.3s' }}>
          
          {/* College Crest & Title */}
          <div
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0a3a7b 0%, #1d61b6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(10, 58, 123, 0.3)',
                color: '#ffffff',
                flexShrink: 0,
              }}
            >
              <GraduationCap size={28} />
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Sri Muthukumaran
              </div>
              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#0284c7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Engineering College
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 500 }} className="md-hide">
                Chikkarayapuram, Near Mangadu, Chennai - 600069
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="flex items-center gap-1 md-hide">
            {navLinks.map((link) => {
              const isActive = activeNav === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  style={{
                    padding: '0.5rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.925rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#0a3a7b' : '#334155',
                    backgroundColor: isActive ? 'var(--primary-subtle)' : 'transparent',
                    borderBottom: isActive ? '2px solid #0a3a7b' : '2px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = '#f1f5f9';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action / Auth Buttons */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('portal')}
                  className="btn btn-primary btn-sm"
                  style={{ gap: '0.4rem', textTransform: 'capitalize' }}
                >
                  <User size={15} />
                  <span>{currentUser.role} Portal</span>
                </button>
                <button
                  onClick={logout}
                  className="btn btn-secondary btn-sm"
                  title="Logout"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="btn btn-primary btn-sm"
                  style={{
                    boxShadow: '0 4px 14px rgba(10, 58, 123, 0.35)',
                    padding: '0.55rem 1.05rem',
                  }}
                >
                  <LogIn size={16} />
                  <span>Student Portal / Login</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedApplyModalCourse('Computer Science and Engineering');
                  }}
                  className="btn btn-accent btn-sm md-hide"
                  style={{
                    fontWeight: 700,
                    fontSize: '0.85rem',
                  }}
                >
                  Apply 2026
                </button>
              </div>
            )}

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                padding: '0.5rem',
                borderRadius: '8px',
                color: '#0a3a7b',
                backgroundColor: '#f1f5f9',
              }}
              className="md-show-button"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid var(--border-light)',
              padding: '1rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  textAlign: 'left',
                  fontWeight: activeNav === link.page ? 700 : 500,
                  backgroundColor: activeNav === link.page ? 'var(--primary-subtle)' : 'transparent',
                  color: activeNav === link.page ? 'var(--primary)' : 'var(--text-main)',
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} color="#94a3b8" />
              </button>
            ))}

            <div style={{ height: '1px', backgroundColor: 'var(--border-light)', margin: '0.5rem 0' }} />

            {!currentUser ? (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <LogIn size={18} />
                  <span>Student / Staff Login</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedApplyModalCourse('Computer Science and Engineering');
                    setMobileMenuOpen(false);
                  }}
                  className="btn btn-accent"
                  style={{ width: '100%' }}
                >
                  <BookOpen size={18} />
                  <span>Apply for Admission 2026</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  handleNavClick('portal');
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Go to {currentUser.role.toUpperCase()} Dashboard
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
};
