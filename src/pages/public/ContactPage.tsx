import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [department, setDepartment] = useState('Admissions Office');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast('Your message has been sent to the college administration desk.', 'success');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ backgroundColor: '#071f3d', color: '#ffffff', padding: '4rem 0 3.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span
              style={{
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.75rem',
              }}
            >
              Connect with SMEC
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.15 }}>
              Contact Us & Campus Location
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.6 }}>
              Have questions regarding engineering admissions, academic courses, campus visits, or fee payments? Our administration and admission counselors are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column: Contact Form & Info Cards */}
      <section className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
          }}
          className="md-grid-cols-1"
        >
          {/* Left: Contact & Enquiry Form */}
          <div className="card-white" style={{ padding: '2.5rem', borderRadius: '24px' }}>
            {!isSubmitted ? (
              <>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                  Send an Inquiry
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
                  Fill out the form below and our admissions team will respond within 24 business hours.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98401 XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Target Department</label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="form-select"
                      >
                        <option value="Admissions Office">Admissions Office (TNEA 1110)</option>
                        <option value="Principal Office">Principal Office & Academics</option>
                        <option value="Training & Placement Cell">Training & Placement Cell</option>
                        <option value="Accounts & Fee Office">Accounts & Fee Section</option>
                        <option value="Hostel & Transport Desk">Hostel & Transport Desk</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Enquiry regarding B.E. Computer Science admission cutoff"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Details *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your inquiry or question in detail..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ gap: '0.65rem', fontWeight: 700 }}
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#d1fae5',
                    color: '#065f46',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                  Inquiry Received!
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{name}</strong>. Your message regarding <em>"{subject}"</em> has been dispatched to the <strong>{department}</strong>. A staff representative will contact you shortly at {phone} or {email}.
                </p>
                <button onClick={handleReset} className="btn btn-primary">
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right: Contact Information Cards & Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Main Campus Card */}
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building size={20} color="#0284c7" />
                <span>Sri Muthukumaran Engineering College</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: '#475569' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <MapPin size={22} color="#0a3a7b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Campus Address:</strong>
                    <div style={{ color: '#64748b', marginTop: '2px' }}>
                      Chikkarayapuram, Near Mangadu, Kundrathur Road, Chennai, Tamil Nadu - 600069
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Phone size={20} color="#0a3a7b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>General Inquiries / Reception:</strong>
                    <div style={{ color: '#0a3a7b', fontWeight: 600, marginTop: '2px' }}>
                      +91 44 2478 0002 / 0003 / 0004
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Mail size={20} color="#0a3a7b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Official Email:</strong>
                    <div style={{ color: '#0284c7', fontWeight: 600, marginTop: '2px' }}>
                      principal@smec.ac.in • info@smec.ac.in
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Clock size={20} color="#0a3a7b" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Administrative Office Hours:</strong>
                    <div style={{ color: '#64748b', marginTop: '2px' }}>
                      Monday – Saturday: 08:30 AM to 04:30 PM (Closed on Government Holidays)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Hotlines */}
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1rem' }}>
                Key Department Hotlines
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#475569' }}>Admissions Hotline (TNEA 1110)</span>
                  <strong style={{ color: '#0a3a7b' }}>+91 94441 55000</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#475569' }}>Placement & Corporate Relations</span>
                  <strong style={{ color: '#0a3a7b' }}>+91 44 2478 1190</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: '#475569' }}>Hostel Warden (Boys & Girls)</span>
                  <strong style={{ color: '#0a3a7b' }}>+91 98408 77123</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#475569' }}>Transport & Bus Routes Incharge</span>
                  <strong style={{ color: '#0a3a7b' }}>+91 98402 33410</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Style Location Section */}
      <section className="container">
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ padding: '1.75rem 2rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Campus Map & Navigation
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Located just 3 km from Mangadu Kamakshi Amman Temple & 15 minutes from Porur Junction
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Sri+Muthukumaran+Engineering+College+Mangadu+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.4rem' }}
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Interactive Map Visual Mockup with actual coordinates & pin */}
          <div
            style={{
              height: '380px',
              backgroundColor: '#e2e8f0',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <iframe
              title="SMEC Chennai Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=Sri%20Muthukumaran%20Engineering%20College%20Mangadu%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
            />
          </div>
        </div>
      </section>

    </div>
  );
};
