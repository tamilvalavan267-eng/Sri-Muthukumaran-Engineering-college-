import React from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Shield,
  Award,
  Globe,
  Share2,
  Compass,
  MessageSquare,
  Video,
  ArrowRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveNav, quickLogin, setIsLoginModalOpen } = useApp();

  return (
    <footer style={{ backgroundColor: '#071f3d', color: '#cbd5e1', paddingTop: '4rem', borderTop: '4px solid #1d61b6' }}>
      <div className="container">
        
        {/* Top Highlight Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(29, 97, 182, 0.3) 0%, rgba(10, 58, 123, 0.4) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '2rem',
            marginBottom: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
          className="md-flex-col"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
              <Award size={18} />
              <span>Admissions 2026 - 2027 Open</span>
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>
              Shape Your Engineering Future at SMEC Chennai
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '0.35rem 0 0 0' }}>
              Affiliated to Anna University | NAAC Accredited | Counseling Code 1110
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveNav('admissions')}
              className="btn btn-accent"
              style={{ padding: '0.75rem 1.5rem', fontWeight: 700 }}
            >
              <span>Explore Programs & Apply</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="btn btn-outline-white"
              style={{ padding: '0.75rem 1.25rem' }}
            >
              <span>Portal Login</span>
            </button>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
          }}
          className="md-grid-cols-1"
        >
          {/* Col 1: About & Trust */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#1d61b6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <GraduationCap size={26} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.1 }}>
                  Sri Muthukumaran
                </div>
                <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                  ENGINEERING COLLEGE
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Established under the aegis of Sri Muthukumaran Educational Trust, committed to nurturing ethical engineers, dynamic tech leaders, and innovative researchers with global competencies.
            </p>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a href="#" aria-label="Website" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Share" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <Share2 size={18} />
              </a>
              <a href="#" aria-label="Portal" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <Compass size={18} />
              </a>
              <a href="#" aria-label="Connect" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <MessageSquare size={18} />
              </a>
              <a href="#" aria-label="Media" style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                <Video size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', position: 'relative' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => setActiveNav('about')} style={{ color: '#94a3b8' }}>
                  About Institution & Vision
                </button>
              </li>
              <li>
                <button onClick={() => setActiveNav('admissions')} style={{ color: '#94a3b8' }}>
                  Engineering Courses (UG/PG)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveNav('facilities')} style={{ color: '#94a3b8' }}>
                  Campus Facilities & Labs
                </button>
              </li>
              <li>
                <button onClick={() => setActiveNav('fees')} style={{ color: '#94a3b8' }}>
                  Online Fee Payment Portal
                </button>
              </li>
              <li>
                <button onClick={() => setActiveNav('gallery')} style={{ color: '#94a3b8' }}>
                  Photo & Event Gallery
                </button>
              </li>
              <li>
                <button onClick={() => setActiveNav('contact')} style={{ color: '#94a3b8' }}>
                  Contact Campus & Route Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Student SIMS Portal Roles */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Student Information Portal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                onClick={() => quickLogin('student')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#93c5fd',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'left',
                }}
              >
                <span>🎓 Student Dashboard</span>
                <span style={{ fontSize: '0.75rem', color: '#60a5fa' }}>Demo ↗</span>
              </button>
              <button
                onClick={() => quickLogin('parent')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#93c5fd',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'left',
                }}
              >
                <span>👨‍👩‍👦 Parent Portal</span>
                <span style={{ fontSize: '0.75rem', color: '#60a5fa' }}>Demo ↗</span>
              </button>
              <button
                onClick={() => quickLogin('teacher')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#93c5fd',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'left',
                }}
              >
                <span>👨‍🏫 Teacher / Staff Portal</span>
                <span style={{ fontSize: '0.75rem', color: '#60a5fa' }}>Demo ↗</span>
              </button>
              <button
                onClick={() => quickLogin('admin')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#fcd34d',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(252,211,77,0.2)',
                  textAlign: 'left',
                }}
              >
                <span>🛡️ Main Admin Dashboard</span>
                <span style={{ fontSize: '0.75rem', color: '#fcd34d' }}>Demo ↗</span>
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Campus Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={20} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Chikkarayapuram, Near Mangadu, Kundrathur Road, Chennai, Tamil Nadu - 600069
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>+91 44 2478 0002 / +91 94441 55000</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>principal@smec.ac.in</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Globe size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>Working Hours: 08:30 AM - 04:30 PM (Mon-Sat)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Accreditation Line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1.5rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.825rem',
            color: '#64748b',
          }}
          className="md-flex-col gap-2"
        >
          <div>
            © 2026 Sri Muthukumaran Engineering College. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>AICTE Approved</span>
            <span>•</span>
            <span>Anna University Affiliated</span>
            <span>•</span>
            <span>NAAC Accredited</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
