import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Modal } from './Modal';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Calculator,
  CheckCircle2,
  Printer,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export const AdmissionApplyModal: React.FC = () => {
  const { selectedApplyModalCourse, setSelectedApplyModalCourse, courses, submitAdmissionApplication } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('2008-05-15');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [address, setAddress] = useState('');

  const [qualifyingExam, setQualifyingExam] = useState<'HSC (+2 Academic)' | 'HSC (+2 Vocational)' | 'Diploma (Lateral Entry)'>('HSC (+2 Academic)');
  const [hscSchool, setHscSchool] = useState('');
  const [mathsMarks, setMathsMarks] = useState<number>(90);
  const [physicsMarks, setPhysicsMarks] = useState<number>(85);
  const [chemistryMarks, setChemistryMarks] = useState<number>(88);

  const [preferredCourse, setPreferredCourse] = useState(selectedApplyModalCourse || 'Computer Science and Engineering');
  const [secondChoiceCourse, setSecondChoiceCourse] = useState('Information Technology');
  const [quota, setQuota] = useState<'Counseling (TNEA)' | 'Management Quota'>('Counseling (TNEA)');

  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);

  // Auto-update preferred course if opened from a specific course button
  React.useEffect(() => {
    if (selectedApplyModalCourse) {
      setPreferredCourse(selectedApplyModalCourse);
    }
  }, [selectedApplyModalCourse]);

  // Calculate Anna University Engineering Cutoff (Maths + Physics/2 + Chemistry/2)
  const cutoff = Number((Number(mathsMarks) + Number(physicsMarks) / 2 + Number(chemistryMarks) / 2).toFixed(2));

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !parentName) {
      alert('Please fill in all mandatory personal details.');
      return;
    }
    setStep(2);
  };

  const handleNextStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const appId = submitAdmissionApplication({
      fullName,
      gender,
      dob,
      email,
      phone,
      parentName,
      parentPhone,
      address,
      qualifyingExam,
      hscSchool,
      mathsMarks: Number(mathsMarks),
      physicsMarks: Number(physicsMarks),
      chemistryMarks: Number(chemistryMarks),
      cutoff,
      preferredCourse,
      secondChoiceCourse,
      quota,
    });

    setSubmittedAppId(appId);
    setStep(4);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    setSelectedApplyModalCourse(null);
    setStep(1);
    setSubmittedAppId(null);
  };

  if (!selectedApplyModalCourse && step !== 4) return null;

  return (
    <Modal
      isOpen={!!selectedApplyModalCourse || step === 4}
      onClose={handleClose}
      title="B.E. / B.Tech. Admission Application 2026 - 2027"
      maxWidth="750px"
    >
      <div>
        
        {/* Stepper Header (Steps 1 to 3) */}
        {step < 4 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
              backgroundColor: '#f1f5f9',
              padding: '0.75rem 1rem',
              borderRadius: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: step === 1 ? 700 : 500, color: step === 1 ? '#0a3a7b' : '#64748b' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: step >= 1 ? '#0a3a7b' : '#cbd5e1', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>1</span>
              <span>Personal Details</span>
            </div>
            <ChevronRight size={16} color="#94a3b8" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: step === 2 ? 700 : 500, color: step === 2 ? '#0a3a7b' : '#64748b' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: step >= 2 ? '#0a3a7b' : '#cbd5e1', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>2</span>
              <span>HSC & Cutoff</span>
            </div>
            <ChevronRight size={16} color="#94a3b8" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: step === 3 ? 700 : 500, color: step === 3 ? '#0a3a7b' : '#64748b' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: step >= 3 ? '#0a3a7b' : '#cbd5e1', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>3</span>
              <span>Course & Quota</span>
            </div>
          </div>
        )}

        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <form onSubmit={handleNextStep1} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
              <div className="form-group">
                <label className="form-label">Full Name of Candidate *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vignesh R."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Gender *</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-select">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
              <div className="form-group">
                <label className="form-label">Date of Birth *</label>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Candidate Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98401 XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
              <div className="form-group">
                <label className="form-label">Candidate Email ID *</label>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Father / Guardian's Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Parent Name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
              <div className="form-group">
                <label className="form-label">Parent's Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 94441 XXXXX"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Communication Address</label>
                <input
                  type="text"
                  placeholder="Door No, Street, City, Pincode"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
              <button type="button" onClick={handleClose} className="btn btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <span>Continue to Academic Marks</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Academic Background & Cutoff Calculation */}
        {step === 2 && (
          <form onSubmit={handleNextStep2} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
              <div className="form-group">
                <label className="form-label">Qualifying Examination *</label>
                <select
                  value={qualifyingExam}
                  onChange={(e) => setQualifyingExam(e.target.value as any)}
                  className="form-select"
                >
                  <option value="HSC (+2 Academic)">HSC (+2 Academic - State Board / CBSE / ICSE)</option>
                  <option value="HSC (+2 Vocational)">HSC (+2 Vocational)</option>
                  <option value="Diploma (Lateral Entry)">Diploma (Lateral Entry to 2nd Year)</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">School / Polytechnic Institute Name</label>
                <input
                  type="text"
                  placeholder="e.g. Govt Higher Secondary School"
                  value={hscSchool}
                  onChange={(e) => setHscSchool(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#0a3a7b', fontWeight: 700 }}>
                <Calculator size={18} />
                <span>Enter +2 Core Subject Marks (out of 100) for Engineering Cutoff</span>
              </div>
              <div className="grid grid-cols-3 gap-4 md-grid-cols-1">
                <div className="form-group">
                  <label className="form-label">Mathematics (/100)</label>
                  <input
                    type="number"
                    min="35"
                    max="100"
                    required
                    value={mathsMarks}
                    onChange={(e) => setMathsMarks(Number(e.target.value))}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Physics (/100)</label>
                  <input
                    type="number"
                    min="35"
                    max="100"
                    required
                    value={physicsMarks}
                    onChange={(e) => setPhysicsMarks(Number(e.target.value))}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Chemistry (/100)</label>
                  <input
                    type="number"
                    min="35"
                    max="100"
                    required
                    value={chemistryMarks}
                    onChange={(e) => setChemistryMarks(Number(e.target.value))}
                    className="form-input"
                  />
                </div>
              </div>

              {/* Real-time Cutoff Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#ebf3fe',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '10px',
                  border: '1.5px solid #bfdbfe',
                  marginTop: '0.5rem',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#1e40af', fontWeight: 700, textTransform: 'uppercase' }}>
                    Calculated TNEA Engineering Cutoff:
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b' }}>
                    {cutoff} / 200.00
                  </div>
                </div>
                <div className="badge badge-green" style={{ fontSize: '0.85rem', padding: '0.35rem 0.85rem' }}>
                  Eligible for Direct Merit Admission
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <button type="button" onClick={() => setStep(1)} className="btn btn-secondary">
                Back
              </button>
              <button type="submit" className="btn btn-primary">
                <span>Continue to Department Selection</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Course & Quota Selection */}
        {step === 3 && (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Preferred Branch of Study (First Choice) *</label>
              <select
                value={preferredCourse}
                onChange={(e) => setPreferredCourse(e.target.value)}
                className="form-select"
                required
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.degree} {c.name} (Code: {c.code}) - {c.intake} Seats
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Secondary Branch (Alternative Choice)</label>
              <select
                value={secondChoiceCourse}
                onChange={(e) => setSecondChoiceCourse(e.target.value)}
                className="form-select"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.degree} {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Seat Quota Category *</label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="quota"
                    checked={quota === 'Counseling (TNEA)'}
                    onChange={() => setQuota('Counseling (TNEA)')}
                  />
                  <span>Anna University Counseling (TNEA Code 1110)</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="quota"
                    checked={quota === 'Management Quota'}
                    onChange={() => setQuota('Management Quota')}
                  />
                  <span>College Management / NRI Quota</span>
                </label>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#fef3c7',
                border: '1px solid #fde68a',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                fontSize: '0.85rem',
                color: '#92400e',
              }}
            >
              <strong>Note:</strong> Applying online reserves your counseling token and assigns a dedicated admission officer for document verification at Sri Muthukumaran Engineering College campus.
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <button type="button" onClick={() => setStep(2)} className="btn btn-secondary">
                Back
              </button>
              <button type="submit" className="btn btn-accent" style={{ padding: '0.75rem 1.75rem', fontWeight: 700 }}>
                <Sparkles size={18} />
                <span>Submit Application & Generate Token</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Success Confirmation Slip */}
        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
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
              Application Successfully Registered!
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
              Thank you for applying to Sri Muthukumaran Engineering College for the academic session 2026 - 2027.
            </p>

            {/* Official Confirmation Card */}
            <div
              style={{
                border: '2px dashed #93c5fd',
                borderRadius: '16px',
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                textAlign: 'left',
                maxWidth: '560px',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GraduationCap size={20} color="#0a3a7b" />
                  <strong style={{ color: '#0a3a7b' }}>SMEC Chennai - Admissions Cell</strong>
                </div>
                <span className="badge badge-blue">Verified Online Token</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', fontSize: '0.9rem' }}>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Application Number</span>
                  <strong style={{ color: '#0a3a7b', fontSize: '1.1rem' }}>{submittedAppId}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Applicant Name</span>
                  <strong>{fullName}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Selected Branch</span>
                  <strong>{preferredCourse}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Calculated Cutoff</span>
                  <strong style={{ color: '#059669' }}>{cutoff} / 200</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Quota Selected</span>
                  <strong>{quota}</strong>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Counseling Venue</span>
                  <strong>SMEC Admin Block, Mangadu</strong>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button
                onClick={() => window.print()}
                className="btn btn-secondary"
                style={{ gap: '0.5rem' }}
              >
                <Printer size={16} />
                <span>Print Application Slip</span>
              </button>
              <button
                onClick={handleClose}
                className="btn btn-primary"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </Modal>
  );
};
