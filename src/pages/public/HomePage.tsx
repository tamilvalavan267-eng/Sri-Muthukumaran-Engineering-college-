import React from 'react';
import { useApp } from '../../context/AppContext';
import { ImageSlider } from '../../components/ImageSlider';
import {
  GraduationCap,
  Award,
  Users,
  Building,
  Cpu,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  Briefcase,
  ChevronRight,
  TrendingUp,
  MapPin,
  Calendar,
  Bell,
  Star,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const {
    setActiveNav,
    setIsLoginModalOpen,
    setSelectedApplyModalCourse,
    announcements,
    courses,
    facilities,
    setSelectedFacilityModal,
  } = useApp();

  const heroSlides = [
    {
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80',
      title: 'Empowering Students. Building the Future.',
      subtitle: 'Sri Muthukumaran Engineering College — Learn, Innovate, Achieve.',
      badge: 'NAAC Accredited • 25+ Years of Legacy',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
      title: 'World-Class Advanced Engineering Laboratories',
      subtitle: 'AI Research Hub, Robotics Workstations, and High Performance Computing Sandbox.',
      badge: 'Cut-Edge Infrastructure',
    },
    {
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80',
      title: 'Central Digital Knowledge Hub & Library',
      subtitle: 'Over 55,000 volumes, IEEE digital repositories, and quiet study zones.',
      badge: 'Academic Excellence',
    },
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
      title: '96.8% Placement Record with Global Tech Giants',
      subtitle: 'TCS, Zoho, Cognizant, Wipro, Hyundai, HCL Technologies, and leading product firms.',
      badge: 'Corporate Readiness',
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
      title: 'Vibrant Campus Life & Cultural Extravaganza',
      subtitle: 'Experience Tarang cultural fest, sports leagues, technical symposia, and coding clubs.',
      badge: 'Holistic Student Growth',
    },
  ];

  const recruiters = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Zoho', 'HCL Tech',
    'Amazon', 'Accenture', 'Tech Mahindra', 'L&T Technology', 'Hyundai', 'Renault Nissan'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      
      {/* 1. Live Announcement Ticker */}
      <div style={{ backgroundColor: '#ebf3fe', borderBottom: '1px solid #bfdbfe', padding: '0.6rem 0' }}>
        <div className="container flex items-center gap-3">
          <div className="badge badge-blue flex items-center gap-1" style={{ flexShrink: 0 }}>
            <Bell size={13} />
            <span>Latest News</span>
          </div>
          <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
            <div style={{ display: 'inline-block', animation: 'marquee 25s linear infinite', color: '#0a3a7b', fontSize: '0.88rem', fontWeight: 600 }}>
              {announcements.map((a, i) => (
                <span key={i} style={{ marginRight: '3rem' }}>
                  📌 <strong>{a.title}</strong> — {a.content.substring(0, 75)}...
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Section with Carousel & Animated Counters */}
      <section className="container">
        <div style={{ position: 'relative' }}>
          
          {/* Main Hero Slider */}
          <ImageSlider slides={heroSlides} height="560px" autoPlayInterval={6000} />

          {/* Quick CTA Floating Overlay on Desktop */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              maxWidth: '620px',
              zIndex: 3,
            }}
            className="md-hide"
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#0a3a7b',
                padding: '6px 16px',
                borderRadius: '9999px',
                fontSize: '0.825rem',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={16} color="#d97706" />
              <span>Affiliated to Anna University • AICTE Approved</span>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', marginTop: '1.75rem' }}>
              <button
                onClick={() => setSelectedApplyModalCourse('Computer Science and Engineering')}
                className="btn btn-accent btn-lg"
                style={{ fontWeight: 800, gap: '0.65rem' }}
              >
                <span>Apply Now 2026-27</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="btn btn-outline-white btn-lg"
                style={{ fontWeight: 700 }}
              >
                <span>Student Portal</span>
              </button>
              <button
                onClick={() => setActiveNav('about')}
                className="btn btn-outline-white btn-lg"
              >
                Explore College
              </button>
            </div>
          </div>

        </div>

        {/* Floating Animated Statistics Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 15px 35px -5px rgba(10, 58, 123, 0.12)',
            border: '1px solid var(--border-light)',
            padding: '2rem 1.5rem',
            marginTop: '-45px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1.5rem',
              textAlign: 'center',
            }}
            className="md-grid-cols-1"
          >
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0a3a7b', lineHeight: 1 }}>
                25+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', marginTop: '0.35rem' }}>
                Years of Academic Excellence
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0284c7', lineHeight: 1 }}>
                10+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', marginTop: '0.35rem' }}>
                Engineering Departments
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0a3a7b', lineHeight: 1 }}>
                5,000+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', marginTop: '0.35rem' }}>
                Thriving Student Scholars
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0284c7', lineHeight: 1 }}>
                200+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', marginTop: '0.35rem' }}>
                Distinguished Ph.D. Faculty
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#059669', lineHeight: 1 }}>
                50+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', marginTop: '0.35rem' }}>
                Advanced Labs & Facilities
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 3. Welcome & Institutional Overview */}
      <section className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="md-grid-cols-1"
        >
          <div>
            <span className="section-tag">About Institution</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              Sri Muthukumaran Engineering College
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Established in 1996 under the dynamic visionary leadership of <strong>Thiru A.N. Radhakrishnan</strong>, Sri Muthukumaran Engineering College (SMEC) is situated on a sprawling 35-acre serene campus in Chikkarayapuram, near Mangadu, Chennai.
            </p>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Accredited with an <strong>'A' Grade by NAAC</strong> and permanently affiliated with Anna University, SMEC has consistently produced university gold medalists, passionate patent holders, and industry-ready engineering professionals who thrive in multinational companies worldwide.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }} className="md-grid-cols-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={20} color="#10b981" />
                <span style={{ fontWeight: 600, color: '#1e293b' }}>Outcome-Based Education (OBE)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={20} color="#10b981" />
                <span style={{ fontWeight: 600, color: '#1e293b' }}>Active Placement & Training Cell</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={20} color="#10b981" />
                <span style={{ fontWeight: 600, color: '#1e293b' }}>Smart Air-Conditioned Auditoriums</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={20} color="#10b981" />
                <span style={{ fontWeight: 600, color: '#1e293b' }}>Fleet of 45+ Transport Buses</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => setActiveNav('about')} className="btn btn-primary">
                <span>Read Full Institutional Profile</span>
                <ChevronRight size={16} />
              </button>
              <button onClick={() => setActiveNav('contact')} className="btn btn-secondary">
                Locate Campus & Map
              </button>
            </div>
          </div>

          {/* Right Image Grid / Highlight Card */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -10px rgba(10, 58, 123, 0.25)',
                border: '4px solid #ffffff',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                alt="Students graduating at SMEC Chennai"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Floating Trust Card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '25px',
                backgroundColor: '#ffffff',
                padding: '1.25rem 1.75rem',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#fef3c7',
                  color: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Award size={26} />
              </div>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b' }}>
                  NAAC 'A' Grade
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                  Government Certified Quality Assurance
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Academic Programs (B.E. / B.Tech.) */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">UG & PG Programs</span>
            <h2 className="section-title">Academic Courses Offered</h2>
            <p className="section-desc">
              Comprehensive industry-aligned engineering curriculums designed to instill analytical rigor, technical competence, and leadership skills.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.75rem',
            }}
            className="lg-grid-cols-2 md-grid-cols-1"
          >
            {courses.slice(0, 6).map((course) => (
              <div
                key={course.id}
                className="card-white"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  borderRadius: '16px',
                }}
              >
                <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={course.image}
                    alt={course.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(10, 58, 123, 0.9)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    {course.degree}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      color: '#0f172a',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {course.intake} Seats
                  </div>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                    {course.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.25rem', flex: 1 }}>
                    {course.description.substring(0, 110)}...
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>Duration</span>
                      <strong style={{ fontSize: '0.85rem', color: '#334155' }}>{course.duration}</strong>
                    </div>
                    <button
                      onClick={() => setSelectedApplyModalCourse(course.name)}
                      className="btn btn-primary btn-sm"
                    >
                      <span>Apply Now</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => setActiveNav('admissions')}
              className="btn btn-secondary btn-lg"
            >
              <span>View All 7 Engineering Departments & Syllabus</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Campus Facilities Preview with Interactive Modals */}
      <section className="container">
        <div className="section-header">
          <span className="section-tag">World-Class Infrastructure</span>
          <h2 className="section-title">Campus Facilities & Technology Centers</h2>
          <p className="section-desc">
            Explore 14 specialized facilities designed to provide hands-on experience and a vibrant, holistic collegiate environment.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
          className="lg-grid-cols-2 md-grid-cols-1"
        >
          {facilities.slice(0, 8).map((fac) => (
            <div
              key={fac.id}
              className="card-white"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '160px', position: 'relative' }}>
                <img
                  src={fac.images[0]}
                  alt={fac.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    color: '#0a3a7b',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                  }}
                >
                  {fac.category}
                </span>
              </div>
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a3a7b', marginBottom: '0.45rem' }}>
                  {fac.title}
                </h4>
                <p style={{ fontSize: '0.825rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>
                  {fac.shortDesc}
                </p>
                <button
                  onClick={() => setSelectedFacilityModal(fac)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  View Details & Photos
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button onClick={() => setActiveNav('facilities')} className="btn btn-primary">
            <span>Explore All 14 Campus Facilities</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 6. Placement Records & Recruiters */}
      <section style={{ backgroundColor: '#071f3d', color: '#ffffff', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span
              style={{
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'inline-block',
                marginBottom: '0.75rem',
              }}
            >
              Career Success
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Top Recruiters & 96.8% Placement Record
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Our dedicated Centre for Corporate Relations trains students from the 1st year in algorithmic coding, communication skills, and mock interviews.
            </p>
          </div>

          {/* Placement Highlight Counters */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              marginBottom: '3.5rem',
              textAlign: 'center',
            }}
            className="md-grid-cols-1"
          >
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#38bdf8' }}>₹ 18 LPA</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>Highest Salary Package</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#4ade80' }}>650+</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>Placement Offers 2025-26</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fbbf24' }}>100+</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>Recruiting Companies Visited</div>
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f472b6' }}>₹ 5.8 LPA</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '0.25rem' }}>Average Package Offered</div>
            </div>
          </div>

          {/* Recruiter Logos / Badges Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '1rem',
            }}
            className="md-grid-cols-2"
          >
            {recruiters.map((company, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  letterSpacing: '0.04em',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {company}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Student Experience & Testimonials */}
      <section className="container">
        <div className="section-header">
          <span className="section-tag">Student Voices</span>
          <h2 className="section-title">Life at Sri Muthukumaran Campus</h2>
          <p className="section-desc">
            Hear from our students and alumni about their academic experience, mentorship, and career readiness.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.75rem',
          }}
          className="md-grid-cols-1"
        >
          <div className="card-white" style={{ padding: '1.75rem', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem', color: '#f59e0b' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              "The faculty support in the AI lab at SMEC gave me the confidence to publish our deep learning research paper and secure a 12 LPA software development role at Zoho."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Priya S."
                style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong style={{ display: 'block', color: '#0a3a7b', fontSize: '0.95rem' }}>Priya S.</strong>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>B.E. CSE (Batch 2021-25) • Placed at Zoho</span>
              </div>
            </div>
          </div>

          <div className="card-white" style={{ padding: '1.75rem', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem', color: '#f59e0b' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              "The practical mechanical workshops, CNC milling machines, and SAE Go-Kart racing team gave me real engineering experience that helped me crack Hyundai R&D interviews."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Karthik M."
                style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong style={{ display: 'block', color: '#0a3a7b', fontSize: '0.95rem' }}>Karthik M.</strong>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>B.E. Mech (Batch 2020-24) • Hyundai R&D</span>
              </div>
            </div>
          </div>

          <div className="card-white" style={{ padding: '1.75rem', borderRadius: '16px' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem', color: '#f59e0b' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" />
              ))}
            </div>
            <p style={{ fontStyle: 'italic', color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              "The Student Information Management Portal is incredible! My parents can check my attendance, internal marks, and pay college fees easily online from anywhere."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80"
                alt="Vignesh R."
                style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong style={{ display: 'block', color: '#0a3a7b', fontSize: '0.95rem' }}>Vignesh R.</strong>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>B.E. CSE III Year • Student Ambassador</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #0a3a7b 0%, #1d61b6 100%)',
            borderRadius: '24px',
            padding: '3.5rem 2.5rem',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px -10px rgba(10, 58, 123, 0.35)',
          }}
          className="md-flex-col"
        >
          <div style={{ maxWidth: '650px' }}>
            <span
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '0.85rem',
              }}
            >
              Admissions 2026 - 2027 Open
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Ready to Join Sri Muthukumaran Engineering College?
            </h2>
            <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Counseling Code: <strong>1110</strong>. Reserve your counseling seat or schedule a personalized campus tour with our admission advisors today.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <button
              onClick={() => setSelectedApplyModalCourse('Computer Science and Engineering')}
              className="btn btn-accent btn-lg"
              style={{ fontWeight: 800, padding: '1rem 2rem' }}
            >
              <span>Apply Online for Admission</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="btn btn-outline-white"
              style={{ width: '100%' }}
            >
              Sign In to Student SIMS Portal
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
