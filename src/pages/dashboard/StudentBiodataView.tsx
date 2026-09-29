import React from 'react';
import { StudentBiodata } from '../../types';
import {
  User,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Printer,
  Calendar,
  Shield,
  Award,
  CreditCard,
} from 'lucide-react';

interface StudentBiodataViewProps {
  student: StudentBiodata;
  canEdit?: boolean;
}

export const StudentBiodataView: React.FC<StudentBiodataViewProps> = ({ student }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Top Action Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
            Official Student Profile & Biodata
          </h3>
          <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Permanent Academic Record • Anna University Register No: {student.registerNumber}
          </span>
        </div>
        <button
          onClick={() => window.print()}
          className="btn btn-secondary btn-sm"
          style={{ gap: '0.4rem' }}
        >
          <Printer size={15} />
          <span>Print / Export Profile</span>
        </button>
      </div>

      {/* College Identity Card Representation */}
      <div
        style={{
          maxWidth: '520px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #0a3a7b 0%, #1d61b6 100%)',
          borderRadius: '20px',
          padding: '1.75rem',
          color: '#ffffff',
          boxShadow: '0 15px 35px -5px rgba(10, 58, 123, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Watermark */}
        <GraduationCap
          size={180}
          color="rgba(255, 255, 255, 0.04)"
          style={{ position: 'absolute', right: '-30px', bottom: '-30px', pointerEvents: 'none' }}
        />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', paddingBottom: '0.85rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#ffffff', color: '#0a3a7b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 }}>SRI MUTHUKUMARAN</div>
              <div style={{ fontSize: '0.68rem', color: '#bae6fd', fontWeight: 700, letterSpacing: '0.04em' }}>ENGINEERING COLLEGE</div>
            </div>
          </div>
          <div style={{ fontSize: '0.7rem', backgroundColor: 'rgba(255,255,255,0.15)', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
            STUDENT ID CARD
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <img
            src={student.photo}
            alt={student.name}
            style={{ width: '90px', height: '110px', borderRadius: '10px', objectFit: 'cover', border: '3px solid #ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              {student.name}
            </h4>
            <div style={{ fontSize: '0.8rem', color: '#fef3c7', fontWeight: 700 }}>
              {student.department}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#e2e8f0' }}>
              ID: <strong>{student.id}</strong> • Reg: {student.registerNumber}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#e2e8f0' }}>
              Batch: {student.batch} • Blood: {student.bloodGroup}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#93c5fd' }}>
              Valid Thru: June 2027
            </div>
          </div>
        </div>
      </div>

      {/* 4 Structured Information Sections */}
      <div className="grid grid-cols-2 gap-6 md-grid-cols-1">
        
        {/* 1. Personal Details */}
        <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <User size={18} color="#0284c7" />
            <span>1. Personal Information</span>
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.88rem' }}>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Full Name</span>
              <strong style={{ color: '#0f172a' }}>{student.name}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Student ID / Reg No</span>
              <strong>{student.id} / {student.registerNumber}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Date of Birth</span>
              <strong>{student.dob}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Gender</span>
              <strong>{student.gender}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Blood Group</span>
              <strong style={{ color: '#dc2626' }}>{student.bloodGroup}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Aadhaar Number</span>
              <strong>{student.aadhaarNo}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Student Mobile</span>
              <strong>{student.phone}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>College Email</span>
              <strong style={{ color: '#0284c7' }}>{student.email}</strong>
            </div>
          </div>
        </div>

        {/* 2. Academic Information */}
        <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <GraduationCap size={18} color="#0284c7" />
            <span>2. Academic Enrolment Details</span>
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.88rem' }}>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Department</span>
              <strong style={{ color: '#0f172a' }}>{student.department} ({student.departmentCode})</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Degree Program</span>
              <strong>B.E. Full-Time 4 Years</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Current Year / Semester</span>
              <strong>III Year / Semester 6</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Class Section</span>
              <strong>Section {student.section}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Cumulative CGPA</span>
              <strong style={{ color: '#059669', fontSize: '1.05rem' }}>{student.cgpa} / 10.0</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Class Rank</span>
              <strong>Rank {student.rank} in Dept</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Admission Quota</span>
              <strong>{student.quota}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Faculty Mentor</span>
              <strong>{student.mentor}</strong>
            </div>
          </div>
        </div>

        {/* 3. Parent / Guardian Details */}
        <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={18} color="#0284c7" />
            <span>3. Parent & Family Details</span>
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.88rem' }}>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Father's Name</span>
              <strong style={{ color: '#0f172a' }}>{student.parent.fatherName}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Mother's Name</span>
              <strong>{student.parent.motherName}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Primary Parent Mobile</span>
              <strong style={{ color: '#0a3a7b' }}>{student.parent.phone}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Alternate Contact</span>
              <strong>{student.parent.altPhone}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Parent Occupation</span>
              <strong>{student.parent.occupation}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Parent Email</span>
              <strong>{student.parent.email}</strong>
            </div>
          </div>
        </div>

        {/* 4. Address Details */}
        <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={18} color="#0284c7" />
            <span>4. Residential & Communication Address</span>
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#334155' }}>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Door & Street</span>
              <strong>{student.address.doorNo}, {student.address.street}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Area / Locality</span>
              <strong>{student.address.area}</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>City</span>
                <strong>{student.address.city}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>District</span>
                <strong>{student.address.district}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>Pincode</span>
                <strong>{student.address.pincode}</strong>
              </div>
            </div>
            <div>
              <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>State & Country</span>
              <strong>{student.address.state}, India</strong>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
