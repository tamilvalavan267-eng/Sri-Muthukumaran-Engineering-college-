import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface SlideItem {
  url: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

interface ImageSliderProps {
  slides: SlideItem[];
  autoPlayInterval?: number; // ms
  height?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
  overlayGradient?: boolean;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  autoPlayInterval = 5000,
  height = '500px',
  showIndicators = true,
  showArrows = true,
  overlayGradient = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, slides.length, autoPlayInterval]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        borderRadius: '16px',
        backgroundColor: '#0b192c',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 6s linear',
              transform: isActive ? 'scale(1.04)' : 'scale(1)',
            }}
          >
            <img
              src={slide.url}
              alt={slide.title || `Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              loading="lazy"
            />

            {/* Gradient Overlay */}
            {overlayGradient && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(10, 37, 75, 0.35) 0%, rgba(7, 24, 52, 0.85) 100%)',
                }}
              />
            )}

            {/* Caption / Title Content */}
            {(slide.title || slide.subtitle || slide.badge) && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '40px',
                  right: '40px',
                  zIndex: 2,
                  color: '#ffffff',
                }}
              >
                {slide.badge && (
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(2, 132, 199, 0.9)',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {slide.badge}
                  </span>
                )}
                {slide.title && (
                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      marginBottom: '6px',
                      color: '#ffffff',
                      textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    {slide.title}
                  </h3>
                )}
                {slide.subtitle && (
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#e2e8f0',
                      maxWidth: '650px',
                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                    }}
                  >
                    {slide.subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '16px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              border: 'none',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '16px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              border: 'none',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.45)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showIndicators && slides.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '24px',
            zIndex: 10,
            display: 'flex',
            gap: '8px',
          }}
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: idx === currentIndex ? '#38bdf8' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                transition: 'all 0.3s ease',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
