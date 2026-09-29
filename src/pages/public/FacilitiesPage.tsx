import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  Clock,
  User,
  ArrowRight,
  Filter,
  CheckCircle2,
} from 'lucide-react';

export const FacilitiesPage: React.FC = () => {
  const { facilities, setSelectedFacilityModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Infrastructure', 'Campus Life', 'Career & Health'];

  const filteredFacilities =
    selectedCategory === 'All'
      ? facilities
      : facilities.filter((f) => f.category === selectedCategory);

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
              World-Class Infrastructure
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.15 }}>
              Campus Facilities & Infrastructure
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.15rem', lineHeight: 1.6 }}>
              A sprawling 35-acre state-of-the-art campus featuring modern engineering workshops, high-performance computing centers, central digital library, sports arenas, and student amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Interactive Directory */}
      <section className="container">
        
        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
            backgroundColor: '#ffffff',
            padding: '0.65rem 1rem',
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600, marginRight: '0.5rem' }}>
            <Filter size={16} />
            <span>Filter By:</span>
          </div>

          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: active ? 700 : 500,
                  backgroundColor: active ? '#0a3a7b' : '#f1f5f9',
                  color: active ? '#ffffff' : '#334155',
                  transition: 'all 0.2s ease',
                  border: 'none',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 14 Facility Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="lg-grid-cols-2 md-grid-cols-1"
        >
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="card-white"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image with Category Badge */}
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={fac.images[0]}
                  alt={fac.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(10, 58, 123, 0.9)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  {fac.category}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    color: '#0f172a',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                  }}
                >
                  {fac.images.length} Photos
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.65rem' }}>
                  {fac.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                  {fac.shortDesc}
                </p>

                {/* Specs Snippet */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  {fac.specs.slice(0, 2).map((s, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#334155' }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <button
                  onClick={() => setSelectedFacilityModal(fac)}
                  className="btn btn-primary"
                  style={{ width: '100%', gap: '0.5rem' }}
                >
                  <span>View Details & Photo Slideshow</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Facilities Highlight Ribbon */}
      <section className="container">
        <div
          style={{
            backgroundColor: '#ebf3fe',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '1.5px solid #bfdbfe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="md-flex-col gap-4"
        >
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.35rem' }}>
              Want to Experience the Campus in Person?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>
              Schedule a guided campus walk with our student ambassadors and department heads.
            </p>
          </div>
          <button
            onClick={() => alert('Campus Visit Desk: Please call +91 44 2478 0002 or visit between 9 AM to 4 PM, Monday to Saturday.')}
            className="btn btn-primary"
          >
            Schedule Campus Visit
          </button>
        </div>
      </section>

    </div>
  );
};
