import React from 'react';
import { useApp } from '../context/AppContext';
import { Modal } from './Modal';
import { ImageSlider } from './ImageSlider';
import {
  Clock,
  User,
  Users,
  CheckCircle2,
  Cpu,
  Wrench,
  BookOpen,
  Presentation,
  Building2,
  Trophy,
  Utensils,
  Bus,
  Home,
  Wifi,
  Briefcase,
  Lightbulb,
  HeartPulse,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={24} color="#0284c7" />,
  Wrench: <Wrench size={24} color="#0284c7" />,
  BookOpen: <BookOpen size={24} color="#0284c7" />,
  Presentation: <Presentation size={24} color="#0284c7" />,
  Building2: <Building2 size={24} color="#0284c7" />,
  Users: <Users size={24} color="#0284c7" />,
  Trophy: <Trophy size={24} color="#0284c7" />,
  Utensils: <Utensils size={24} color="#0284c7" />,
  Bus: <Bus size={24} color="#0284c7" />,
  Home: <Home size={24} color="#0284c7" />,
  Wifi: <Wifi size={24} color="#0284c7" />,
  Briefcase: <Briefcase size={24} color="#0284c7" />,
  Lightbulb: <Lightbulb size={24} color="#0284c7" />,
  HeartPulse: <HeartPulse size={24} color="#0284c7" />,
};

export const FacilityDetailModal: React.FC = () => {
  const { selectedFacilityModal, setSelectedFacilityModal } = useApp();

  if (!selectedFacilityModal) return null;

  const slides = selectedFacilityModal.images.map((img) => ({
    url: img,
    title: selectedFacilityModal.title,
    subtitle: selectedFacilityModal.shortDesc,
    badge: selectedFacilityModal.category,
  }));

  return (
    <Modal
      isOpen={!!selectedFacilityModal}
      onClose={() => setSelectedFacilityModal(null)}
      title={selectedFacilityModal.title}
      maxWidth="850px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Slideshow of facility images */}
        <ImageSlider slides={slides} height="320px" autoPlayInterval={4000} />

        {/* Quick Highlights Info Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            backgroundColor: '#f8fafc',
            padding: '1rem',
            borderRadius: '12px',
            border: '1px solid var(--border-light)',
          }}
          className="md-grid-cols-1"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Clock size={20} color="#0a3a7b" />
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Operating Hours</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{selectedFacilityModal.timing}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <User size={20} color="#0a3a7b" />
            <div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Faculty In-Charge</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{selectedFacilityModal.incharge}</div>
            </div>
          </div>
          {selectedFacilityModal.capacity && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Users size={20} color="#0a3a7b" />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Capacity / Scale</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{selectedFacilityModal.capacity}</div>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a3a7b', marginBottom: '0.5rem' }}>
            About This Facility
          </h4>
          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65 }}>
            {selectedFacilityModal.fullDesc}
          </p>
        </div>

        {/* Key Specifications & Features */}
        <div>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a3a7b', marginBottom: '0.75rem' }}>
            Key Specifications & Infrastructure
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }} className="md-grid-cols-1">
            {selectedFacilityModal.specs.map((spec, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Equipment / Hardware inventory */}
        {selectedFacilityModal.equipment && selectedFacilityModal.equipment.length > 0 && (
          <div
            style={{
              backgroundColor: '#ebf3fe',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1px solid #bfdbfe',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
              {iconMap[selectedFacilityModal.iconName] || <Cpu size={20} color="#0284c7" />}
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a3a7b', margin: 0 }}>
                Equipment & Major Setups
              </h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {selectedFacilityModal.equipment.map((item, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: '#075985',
                    border: '1px solid #bae6fd',
                  }}
                >
                  • {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '0.5rem' }}>
          <button
            onClick={() => setSelectedFacilityModal(null)}
            className="btn btn-secondary"
          >
            Close Details
          </button>
        </div>

      </div>
    </Modal>
  );
};
