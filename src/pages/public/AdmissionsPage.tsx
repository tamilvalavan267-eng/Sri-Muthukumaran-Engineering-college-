import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Download,
  Calendar,
  DollarSign,
  Briefcase,
  HelpCircle,
  FileText,
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const { courses, setSelectedApplyModalCourse } = useApp();

  const admissionSteps = [
    { step: 1, title: 'Enquiry & Counseling', desc: 'Visit campus or submit an online query to receive guidance from our faculty academic counselors.' },
    { step: 2, title: 'Application Submission', desc: 'Complete the online application form with 10th and 12th marks or Diploma grades.' },
    { step: 3, title: 'Document Verification', desc: 'Present mark sheets, Community certificate, Transfer Certificate (TC), and Aadhaar copy.' },
    { step: 4, title: 'Counseling & Allotment', desc: 'Seat allocation through Anna University TNEA Single Window Counseling (Code: 1110) or Management Quota.' },
    { step: 5, title: 'Admission Confirmation', desc: 'Pay initial enrollment fees, receive student ID and welcome kit, and join orientation.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ backgroundColor: '#071f3d', color: '#ffffff', padding: '4rem 0 3.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
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
              Admissions 2026 - 2027 Open • TNEA Code 1110
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.15 }}>
              Undergraduate & Postgraduate Admissions
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.6 }}>
              Join one of Chennai's premier engineering institutions accredited with NAAC 'A' Grade. Learn under Anna University curriculum with world-class labs and guaranteed placement support.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Admission Journey Flow */}
      <section className="container">
        <div className="section-header">
          <span className="section-tag">Admission Workflow</span>
          <h2 className="section-title">5 Steps to Join SMEC Chennai</h2>
          <p className="section-desc">
            A transparent, streamlined admission procedure for B.E. / B.Tech. aspiring engineers.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
          }}
          className="lg-grid-cols-2 md-grid-cols-1"
        >
          {admissionSteps.map((item) => (
            <div
              key={item.step}
              className="card-white"
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#0a3a7b',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  marginBottom: '1rem',
                }}
              >
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, flex: 1 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Course Offerings & Department Cards */}
      <section className="container">
        <div className="section-header">
          <span className="section-tag">Degree Programs</span>
          <h2 className="section-title">Engineering Departments & Specializations</h2>
          <p className="section-desc">
            Choose your engineering branch tailored for high-growth tech careers and research.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {courses.map((course) => (
            <div
              key={course.id}
              className="card-white md-grid-cols-1"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '320px 1fr',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Course Image & Badges */}
              <div style={{ position: 'relative', minHeight: '260px' }}>
                <img
                  src={course.image}
                  alt={course.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(10, 58, 123, 0.92)',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  {course.degree} • {course.code}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#0f172a',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  Annual Intake: {course.intake} Seats
                </div>
              </div>

              {/* Course Content */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                        {course.name}
                      </h3>
                      <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 600 }}>
                        {course.department}
                      </span>
                    </div>
                    <div className="badge badge-green" style={{ fontSize: '0.8rem' }}>
                      Duration: {course.duration}
                    </div>
                  </div>

                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {course.description}
                  </p>

                  {/* Eligibility & Highlights */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }} className="md-grid-cols-1">
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                        Eligibility Criteria
                      </div>
                      <div style={{ fontSize: '0.825rem', color: '#334155', lineHeight: 1.4 }}>
                        {course.eligibility}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                        Curriculum Highlights
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {course.highlights.map((h, i) => (
                          <span key={i} style={{ backgroundColor: '#ebf3fe', color: '#0a3a7b', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer / Apply Action */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                  <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    HOD: <strong>{course.hodName}</strong>
                  </div>
                  <button
                    onClick={() => setSelectedApplyModalCourse(course.name)}
                    className="btn btn-primary"
                    style={{ gap: '0.5rem', fontWeight: 700 }}
                  >
                    <span>Apply for {course.code}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarships & Financial Assistance */}
      <section className="container">
        <div
          style={{
            backgroundColor: '#fef3c7',
            border: '1.5px solid #fde68a',
            borderRadius: '24px',
            padding: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Sparkles size={24} color="#d97706" />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#92400e', margin: 0 }}>
              Merit Scholarships & Government Concessions
            </h3>
          </div>
          <p style={{ color: '#78350f', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Sri Muthukumaran Engineering College offers generous merit scholarships to promote academic excellence:
          </p>
          <div className="grid grid-cols-3 gap-4 md-grid-cols-1">
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: '12px' }}>
              <strong style={{ color: '#0a3a7b', display: 'block', fontSize: '1.1rem' }}>100% Tuition Waiver</strong>
              <span style={{ fontSize: '0.85rem', color: '#475569' }}>For students securing HSC engineering cutoff above 190 / 200.</span>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: '12px' }}>
              <strong style={{ color: '#0a3a7b', display: 'block', fontSize: '1.1rem' }}>50% Merit Concession</strong>
              <span style={{ fontSize: '0.85rem', color: '#475569' }}>For cutoff between 180 and 189.9.</span>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: '12px' }}>
              <strong style={{ color: '#0a3a7b', display: 'block', fontSize: '1.1rem' }}>Government Schemes</strong>
              <span style={{ fontSize: '0.85rem', color: '#475569' }}>First Graduate Concession, Post-Matric SC/ST & BC/MBC Scholarships.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
