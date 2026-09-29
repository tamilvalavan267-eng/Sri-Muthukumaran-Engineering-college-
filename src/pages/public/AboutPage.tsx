import React from 'react';
import { useApp } from '../../context/AppContext';
import { ImageSlider } from '../../components/ImageSlider';
import {
  Award,
  Eye,
  Target,
  GraduationCap,
  Quote,
  CheckCircle2,
  Calendar,
  Building,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setActiveNav, setSelectedApplyModalCourse } = useApp();

  const aboutSlides = [
    {
      url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80',
      title: 'Sri Muthukumaran Engineering College Campus',
      subtitle: 'Spread across 35 picturesque acres in Chikkarayapuram, Chennai.',
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80',
      title: 'Dynamic Pedagogical Excellence',
      subtitle: 'Smart interactive classrooms blending hybrid tech and hands-on lab work.',
    },
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80',
      title: 'Student Empowerment & Industry Exposure',
      subtitle: 'Regular corporate visits, hackathons, and global alumni mentorship.',
    },
    {
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80',
      title: 'Distinguished Faculty Scholars',
      subtitle: 'Over 200 dedicated teaching professionals with vast research publications.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ backgroundColor: '#071f3d', color: '#ffffff', padding: '4rem 0 3.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
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
              Institutional Heritage & Vision
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.15 }}>
              About Sri Muthukumaran Engineering College
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.6 }}>
              Founded in 1996 with a steadfast dedication to impart high-caliber technical education, cultivate creative engineering intellect, and foster societal values.
            </p>
          </div>
        </div>
      </section>

      {/* Image Slideshow of Campus Life */}
      <section className="container">
        <ImageSlider slides={aboutSlides} height="420px" autoPlayInterval={5000} />
      </section>

      {/* Institutional Overview & Heritage */}
      <section className="container">
        <div className="grid grid-cols-2 gap-8 items-center md-grid-cols-1">
          <div>
            <span className="section-tag">Legacy of 25+ Years</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              Pioneering Technical Education in Chennai
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong>Sri Muthukumaran Engineering College (SMEC)</strong> was established under the aegis of the Sri Muthukumaran Educational Trust. Located in Chikkarayapuram, near Mangadu, Chennai, the institution offers an idyllic, pollution-free atmosphere conducive to intensive academic learning, scientific inquiry, and technological development.
            </p>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              The college is approved by the <strong>All India Council for Technical Education (AICTE), New Delhi</strong>, affiliated with <strong>Anna University, Chennai</strong>, and accredited by <strong>NAAC with an 'A' Grade</strong>. With over two decades of educational service, SMEC stands as a premier seat of learning in Tamil Nadu.
            </p>
            <div className="flex items-center gap-3">
              <div className="badge badge-blue" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                <ShieldCheck size={16} />
                <span>NAAC 'A' Grade Certified</span>
              </div>
              <div className="badge badge-gold" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                <Award size={16} />
                <span>Anna University Permanent Affiliation</span>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid var(--border-light)',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a3a7b' }}>
              Key Institutional Milestones
            </h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#0a3a7b', color: '#ffffff', fontWeight: 800, padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem' }}>1996</div>
              <div>
                <strong style={{ color: '#1e293b' }}>Inception of College</strong>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Founded with 3 foundational engineering branches and 180 students.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#0284c7', color: '#ffffff', fontWeight: 800, padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem' }}>2004</div>
              <div>
                <strong style={{ color: '#1e293b' }}>Expansion to PG & Research</strong>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Introduction of M.E. programs and MBA business management school.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#0a3a7b', color: '#ffffff', fontWeight: 800, padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem' }}>2018</div>
              <div>
                <strong style={{ color: '#1e293b' }}>NAAC 'A' Grade Accreditation</strong>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Accredited by National Assessment & Accreditation Council for high academic benchmarks.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#059669', color: '#ffffff', fontWeight: 800, padding: '4px 10px', borderRadius: '8px', fontSize: '0.85rem' }}>2022+</div>
              <div>
                <strong style={{ color: '#1e293b' }}>Artificial Intelligence & Data Science</strong>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Establishment of Centre of Excellence in AI, Cloud Computing, and Robotics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Guiding Principles</span>
            <h2 className="section-title">Vision & Mission</h2>
            <p className="section-desc">
              The foundational pillars that direct all educational endeavors, community engagement, and technological research at SMEC.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md-grid-cols-1">
            {/* Vision */}
            <div
              className="card-white"
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                borderLeft: '6px solid #0a3a7b',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: '#ebf3fe',
                  color: '#0a3a7b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.85rem' }}>
                Our Vision
              </h3>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>
                To emerge as an institution of international repute by providing transformative technical education, cultivating research and entrepreneurial mindsets, and producing socially conscientious engineers who contribute to national progress and global development.
              </p>
            </div>

            {/* Mission */}
            <div
              className="card-white"
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                borderLeft: '6px solid #0284c7',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: '#e0f2fe',
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.85rem' }}>
                Our Mission
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#475569', fontSize: '0.98rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Deliver rigorous, student-centric pedagogy aligned with current industry standards and evolving technologies.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Foster innovation, intellectual property creation, and interdisciplinary research through modern laboratories.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Nurture holistic character, leadership ethics, and environmental responsibility among aspiring engineers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages: Chairman & Principal */}
      <section className="container">
        <div className="section-header">
          <span className="section-tag">Leadership Insights</span>
          <h2 className="section-title">Messages from the Management & Principal</h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md-grid-cols-1">
          {/* Chairman Message */}
          <div
            className="card-white"
            style={{
              padding: '2.25rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="Chairman Thiru A.N. Radhakrishnan"
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b' }}>
                    Thiru A.N. Radhakrishnan, M.A., D.Co-op.
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 600 }}>
                    Chairman & Managing Trustee
                  </span>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <Quote size={28} color="#bfdbfe" style={{ position: 'absolute', top: '-10px', left: '-10px', opacity: 0.5 }} />
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                  "At Sri Muthukumaran Engineering College, we believe that education is the supreme instrument of societal emancipation and technological progress. Over the past 25 years, our ambition has been to provide world-class infrastructure and affordable technical education to all deserving students, regardless of economic background. I welcome you to experience an inspiring journey of personal and professional transformation."
                </p>
              </div>
            </div>
          </div>

          {/* Principal Message */}
          <div
            className="card-white"
            style={{
              padding: '2.25rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                  alt="Principal Dr. K. Soundararajan"
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b' }}>
                    Dr. K. Soundararajan, M.E., Ph.D.
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 600 }}>
                    Principal & Academic Head
                  </span>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <Quote size={28} color="#bfdbfe" style={{ position: 'absolute', top: '-10px', left: '-10px', opacity: 0.5 }} />
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                  "Engineers are the architects of the modern civilization. Our curriculum at SMEC combines Anna University's rigorous syllabus with practical hackathons, industry internships, and entrepreneurship bootcamps. Our dedicated faculty mentors walk alongside each student to ignite their curiosity and mold them into versatile problem solvers ready for tomorrow's world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Excellence & Placement Focus */}
      <section className="container">
        <div
          style={{
            backgroundColor: '#ebf3fe',
            borderRadius: '24px',
            padding: '3rem',
            border: '1.5px solid #bfdbfe',
          }}
        >
          <div className="grid grid-cols-3 gap-6 md-grid-cols-1">
            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#0a3a7b', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <GraduationCap size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                Academic Excellence
              </h4>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Consistently among the top Anna University affiliated institutions in Chennai with over 85 university rank holders and gold medals in undergraduate engineering.
              </p>
            </div>

            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#0284c7', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Users size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                Student Development
              </h4>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Holistic student clubs: IEEE Student Branch, Coding Arena, NSS, Rotaract, Tamil Mandram, SAE Collegiate Club, and national-level sports contingents.
              </p>
            </div>

            <div>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#059669', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Compass size={24} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                Placement Focus
              </h4>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Over 100+ tier-1 companies recruit from SMEC every year, supported by dedicated training modules in soft skills, full-stack coding, and aptitude.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ textAlign: 'center' }}>
        <button
          onClick={() => setSelectedApplyModalCourse('Computer Science and Engineering')}
          className="btn btn-primary btn-lg"
          style={{ gap: '0.65rem' }}
        >
          <span>Apply for B.E. / B.Tech. Admission 2026</span>
          <ArrowRight size={18} />
        </button>
      </section>

    </div>
  );
};
