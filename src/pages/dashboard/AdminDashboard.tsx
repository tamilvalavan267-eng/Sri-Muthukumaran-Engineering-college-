import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StudentBiodata, Teacher, Announcement, GalleryItem } from '../../types';
import { Modal } from '../../components/Modal';
import { StudentBiodataView } from './StudentBiodataView';
import {
  Users,
  Briefcase,
  Building,
  UserCheck,
  CreditCard,
  Calendar,
  Image,
  Bell,
  Settings,
  Search,
  Plus,
  Trash2,
  Edit,
  Eye,
  RotateCcw,
  CheckCircle2,
  Download,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    students,
    teachers,
    courses,
    fees,
    gallery,
    announcements,
    activeDashboardTab,
    setActiveDashboardTab,
    addStudent,
    deleteStudent,
    addTeacher,
    addAnnouncement,
    deleteAnnouncement,
    addGalleryItem,
    deleteGalleryItem,
    resetAllDataToDefault,
    showToast,
  } = useApp();

  // Search & Filter state
  const [studentSearch, setStudentSearch] = useState('');
  const [selectedStudentForView, setSelectedStudentForView] = useState<StudentBiodata | null>(null);

  // Add Student Modal State
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentReg, setNewStudentReg] = useState('312321104088');
  const [newStudentDept, setNewStudentDept] = useState('Computer Science and Engineering');
  const [newStudentYear, setNewStudentYear] = useState<number>(3);
  const [newStudentSection, setNewStudentSection] = useState('A');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const [newStudentPhone, setNewStudentPhone] = useState('+91 98401 99999');
  const [newStudentParent, setNewStudentParent] = useState('');
  const [newStudentCgpa, setNewStudentCgpa] = useState<number>(8.5);

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    addStudent({
      registerNumber: newStudentReg,
      name: newStudentName,
      department: newStudentDept,
      departmentCode: 'CSE',
      year: newStudentYear,
      semester: newStudentYear * 2,
      section: newStudentSection,
      batch: '2023 - 2027',
      dob: '2005-06-15',
      gender: 'Male',
      bloodGroup: 'O+ Positive',
      email: newStudentEmail || `${newStudentName.toLowerCase().replace(/\s+/g, '.')}@smec.ac.in`,
      phone: newStudentPhone,
      aadhaarNo: 'XXXX-XXXX-9912',
      admissionYear: 2023,
      quota: 'Government (TNEA)',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      cgpa: newStudentCgpa,
      rank: 5,
      mentor: 'Dr. S. Kabilan, M.E., Ph.D.',
      parent: {
        fatherName: newStudentParent || 'Guardian Name',
        motherName: 'Mother Name',
        phone: '+91 94440 88888',
        altPhone: '+91 98400 77777',
        email: 'parent@gmail.com',
        occupation: 'Service / Business',
        annualIncome: '₹ 6,00,000 / annum',
      },
      address: {
        doorNo: '12',
        street: 'College Road',
        area: 'Mangadu',
        city: 'Chennai',
        district: 'Kanchipuram',
        state: 'Tamil Nadu',
        pincode: '600069',
      },
    });

    setIsAddStudentOpen(false);
    setNewStudentName('');
  };

  // Add Faculty Modal State
  const [isAddTeacherOpen, setIsAddTeacherOpen] = useState(false);
  const [newTeacherName, setNewTeacherName] = useState('');
  const [newTeacherDept, setNewTeacherDept] = useState('Computer Science and Engineering');
  const [newTeacherDesig, setNewTeacherDesig] = useState('Assistant Professor');
  const [newTeacherQual, setNewTeacherQual] = useState('B.E., M.Tech. (Anna Univ)');
  const [newTeacherEmail, setNewTeacherEmail] = useState('');

  const handleCreateTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    addTeacher({
      name: newTeacherName,
      designation: newTeacherDesig,
      department: newTeacherDept,
      departmentCode: 'CSE',
      email: newTeacherEmail || `${newTeacherName.toLowerCase().replace(/\s+/g, '.')}@smec.ac.in`,
      phone: '+91 98402 11223',
      qualification: newTeacherQual,
      experienceYears: 6,
      specialization: 'Cloud & System Design',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      assignedSubjects: ['CS8601 - AI', 'CS8602 - Cloud'],
    });
    setIsAddTeacherOpen(false);
    setNewTeacherName('');
  };

  // Add Announcement
  const [annTitle, setAnnTitle] = useState('');
  const [annContent, setAnnContent] = useState('');
  const [annCategory, setAnnCategory] = useState<'Academic' | 'Exam' | 'Event' | 'Fees' | 'Placement'>('Academic');
  const [annUrgency, setAnnUrgency] = useState<'Normal' | 'Important' | 'Urgent'>('Important');

  const handlePostAnn = (e: React.FormEvent) => {
    e.preventDefault();
    addAnnouncement({
      title: annTitle,
      content: annContent,
      category: annCategory,
      urgency: annUrgency,
      targetRole: 'all',
      author: 'Principal / Admin Office',
    });
    setAnnTitle('');
    setAnnContent('');
  };

  // Add Gallery photo
  const [isAddPhotoOpen, setIsAddPhotoOpen] = useState(false);
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80');
  const [photoCategory, setPhotoCategory] = useState<'Campus' | 'Labs' | 'Cultural' | 'Sports' | 'Events' | 'Placements'>('Campus');
  const [photoCaption, setPhotoCaption] = useState('');

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    addGalleryItem({
      title: photoTitle,
      category: photoCategory,
      imageUrl: photoUrl,
      caption: photoCaption || photoTitle,
      eventYear: '2026',
    });
    setIsAddPhotoOpen(false);
    setPhotoTitle('');
    setPhotoCaption('');
  };

  // Filter students
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.id.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.registerNumber.includes(studentSearch) ||
      s.department.toLowerCase().includes(studentSearch.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* 1. Admin Header Summary */}
      <div
        style={{
          background: 'linear-gradient(135deg, #071f3d 0%, #0a3a7b 100%)',
          borderRadius: '24px',
          padding: '2rem 2.25rem',
          color: '#ffffff',
          boxShadow: '0 15px 30px -5px rgba(7, 31, 61, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: '#d97706',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(217, 119, 6, 0.4)',
            }}
          >
            <Shield size={36} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Institutional Administrator Portal
              </h2>
              <span className="badge badge-gold">Master Control</span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
              Sri Muthukumaran Engineering College • Autonomous Information Management Console
            </div>
          </div>
        </div>

        {/* Global Reset Button for evaluator convenience */}
        <button
          onClick={resetAllDataToDefault}
          className="btn btn-sm"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', gap: '0.4rem', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <RotateCcw size={14} />
          <span>Reset Demo Data</span>
        </button>
      </div>

      {/* 2. OVERVIEW TAB: Animated Statistics */}
      {activeDashboardTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Top 6 KPI Counter Cards */}
          <div className="grid grid-cols-3 gap-6 lg-grid-cols-2 md-grid-cols-1">
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px', borderLeft: '5px solid #0a3a7b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Total Students Enrolled</span>
                <Users size={22} color="#0a3a7b" />
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0a3a7b' }}>
                5,240 <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500 }}>Students</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '4px' }}>
                ↑ 8.4% increase from 2024
              </div>
            </div>

            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px', borderLeft: '5px solid #0284c7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Teaching Faculty</span>
                <Briefcase size={22} color="#0284c7" />
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0284c7' }}>
                248 <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500 }}>Professors</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 600, marginTop: '4px' }}>
                1:15 Student-Faculty Ratio
              </div>
            </div>

            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px', borderLeft: '5px solid #10b981' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Today's Overall Attendance</span>
                <UserCheck size={22} color="#10b981" />
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#059669' }}>
                92.4%
              </div>
              <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '4px' }}>
                4,842 scholars present
              </div>
            </div>

            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px', borderLeft: '5px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Fees Collected (Even Sem)</span>
                <CreditCard size={22} color="#f59e0b" />
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#b45309' }}>
                ₹ 4.82 Cr
              </div>
              <div style={{ fontSize: '0.78rem', color: '#b45309', fontWeight: 600, marginTop: '4px' }}>
                88% collection progress
              </div>
            </div>

            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px', borderLeft: '5px solid #ef4444' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Pending Fee Arrears</span>
                <CreditCard size={22} color="#ef4444" />
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#dc2626' }}>
                ₹ 38.5 L
              </div>
              <div style={{ fontSize: '0.78rem', color: '#dc2626', fontWeight: 600, marginTop: '4px' }}>
                Settlement due April 15
              </div>
            </div>

            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '18px', borderLeft: '5px solid #8b5cf6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Active Departments</span>
                <Building size={22} color="#8b5cf6" />
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#0a3a7b' }}>
                10 Depts
              </div>
              <div style={{ fontSize: '0.78rem', color: '#6b21a8', fontWeight: 600, marginTop: '4px' }}>
                7 UG + 3 PG Programs
              </div>
            </div>
          </div>

          {/* Quick Management Shortcuts */}
          <div className="grid grid-cols-3 gap-6 md-grid-cols-1">
            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                Student Admissions
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
                Search, enrol, update, or remove student academic records across all 7 departments.
              </p>
              <button onClick={() => setActiveDashboardTab('students-mgmt')} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                Manage Students
              </button>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                Faculty Appointments
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
                View professor roster, assign class subjects, and manage designations.
              </p>
              <button onClick={() => setActiveDashboardTab('teachers-mgmt')} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                Manage Faculty
              </button>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                Campus Announcements
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
                Publish exam circulars, fee deadlines, or holiday notices across all portals.
              </p>
              <button onClick={() => setActiveDashboardTab('announcements-mgmt')} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                Manage Circulars
              </button>
            </div>
          </div>

        </div>
      )}

      {/* 3. STUDENT MANAGEMENT TAB */}
      {activeDashboardTab === 'students-mgmt' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Student Registry & Enrolment Management
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Total Enrolled in System: <strong>{students.length}</strong> scholars
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ position: 'relative' }}>
                <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search student or ID..."
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  className="form-input"
                  style={{ width: '220px', paddingLeft: '36px', padding: '0.45rem 0.75rem 0.45rem 36px' }}
                />
              </div>

              <button
                onClick={() => setIsAddStudentOpen(true)}
                className="btn btn-primary btn-sm"
                style={{ gap: '0.4rem', fontWeight: 700 }}
              >
                <Plus size={16} />
                <span>Enrol New Student</span>
              </button>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Register No</th>
                  <th>Department</th>
                  <th>Year / Sem</th>
                  <th>CGPA</th>
                  <th>Parent Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((st) => (
                  <tr key={st.id}>
                    <td><strong>{st.id}</strong></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <img src={st.photo} alt={st.name} style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }} />
                        <span style={{ fontWeight: 600, color: '#0f172a' }}>{st.name}</span>
                      </div>
                    </td>
                    <td>{st.registerNumber}</td>
                    <td>{st.departmentCode}</td>
                    <td>Yr {st.year} / Sem {st.semester} ({st.section})</td>
                    <td><strong style={{ color: '#059669' }}>{st.cgpa}</strong></td>
                    <td>{st.parent.phone}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          onClick={() => setSelectedStudentForView(st)}
                          title="View Biodata"
                          style={{ padding: '4px 8px', borderRadius: '6px', backgroundColor: '#ebf3fe', color: '#0a3a7b' }}
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Remove student ${st.name} (${st.id}) from registry?`)) {
                              deleteStudent(st.id);
                            }
                          }}
                          title="Delete Student"
                          style={{ padding: '4px 8px', borderRadius: '6px', backgroundColor: '#fee2e2', color: '#dc2626' }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* 4. TEACHER MANAGEMENT TAB */}
      {activeDashboardTab === 'teachers-mgmt' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Faculty Directory & Teaching Appointments
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Managing academic faculty and department course assignments
              </p>
            </div>

            <button
              onClick={() => setIsAddTeacherOpen(true)}
              className="btn btn-primary btn-sm"
              style={{ gap: '0.4rem', fontWeight: 700 }}
            >
              <Plus size={16} />
              <span>Add New Faculty</span>
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Faculty ID</th>
                  <th>Faculty Name</th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Qualification</th>
                  <th>Experience</th>
                  <th>Contact Email</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((t) => (
                  <tr key={t.id}>
                    <td><strong>{t.id}</strong></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <img src={t.photo} alt={t.name} style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }} />
                        <span style={{ fontWeight: 600 }}>{t.name}</span>
                      </div>
                    </td>
                    <td>{t.designation}</td>
                    <td>{t.department}</td>
                    <td>{t.qualification}</td>
                    <td>{t.experienceYears} Years</td>
                    <td><a href={`mailto:${t.email}`} style={{ color: '#0284c7' }}>{t.email}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. FEES MANAGEMENT TAB */}
      {activeDashboardTab === 'fees-mgmt' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                College Fee Collection & Institutional Ledger
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Comprehensive tracking of tuition, transport, exam, and hostel fee transactions
              </p>
            </div>
            <button onClick={() => window.print()} className="btn btn-secondary btn-sm" style={{ gap: '0.4rem' }}>
              <Download size={15} />
              <span>Export Audit Sheet</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 md-grid-cols-1" style={{ marginBottom: '2rem' }}>
            <div style={{ backgroundColor: '#ebf3fe', padding: '1.5rem', borderRadius: '16px' }}>
              <span style={{ fontSize: '0.8rem', color: '#1e40af', fontWeight: 700 }}>Total Fee Assessed</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0a3a7b', marginTop: '4px' }}>
                ₹ {fees.totalFee.toLocaleString()}
              </div>
            </div>
            <div style={{ backgroundColor: '#d1fae5', padding: '1.5rem', borderRadius: '16px' }}>
              <span style={{ fontSize: '0.8rem', color: '#065f46', fontWeight: 700 }}>Amount Realized</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#059669', marginTop: '4px' }}>
                ₹ {fees.paidAmount.toLocaleString()}
              </div>
            </div>
            <div style={{ backgroundColor: '#fee2e2', padding: '1.5rem', borderRadius: '16px' }}>
              <span style={{ fontSize: '0.8rem', color: '#991b1b', fontWeight: 700 }}>Outstanding Balance</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#dc2626', marginTop: '4px' }}>
                ₹ {fees.pendingAmount.toLocaleString()}
              </div>
            </div>
          </div>

          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1rem' }}>
            Audit Record of Electronic Receipts
          </h4>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Txn ID</th>
                <th>Receipt No</th>
                <th>Category</th>
                <th>Mode</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {fees.history.map((tx, idx) => (
                <tr key={idx}>
                  <td>{tx.date}</td>
                  <td><strong>{tx.transactionId}</strong></td>
                  <td><span style={{ color: '#0284c7', fontWeight: 600 }}>{tx.receiptNo}</span></td>
                  <td>{tx.feeType}</td>
                  <td>{tx.paymentMethod}</td>
                  <td><strong style={{ color: '#059669' }}>₹ {tx.amount.toLocaleString()}</strong></td>
                  <td><span className="badge badge-green">Success</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 6. ANNOUNCEMENTS MANAGEMENT TAB */}
      {activeDashboardTab === 'announcements-mgmt' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Post New Announcement */}
          <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.25rem' }}>
              Publish College-Wide Broadcast
            </h3>

            <form onSubmit={handlePostAnn} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="grid grid-cols-3 gap-4 md-grid-cols-1">
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Circular Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. End Semester Exam Hall Ticket Distribution"
                    value={annTitle}
                    onChange={(e) => setAnnTitle(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Category</label>
                  <select
                    value={annCategory}
                    onChange={(e) => setAnnCategory(e.target.value as any)}
                    className="form-select"
                  >
                    <option value="Exam">Exam</option>
                    <option value="Academic">Academic</option>
                    <option value="Fees">Fees</option>
                    <option value="Placement">Placement</option>
                    <option value="Event">Event</option>
                  </select>
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Priority</label>
                  <select
                    value={annUrgency}
                    onChange={(e) => setAnnUrgency(e.target.value as any)}
                    className="form-select"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Important">Important</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Circular Content</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Full text of the circular..."
                  value={annContent}
                  onChange={(e) => setAnnContent(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="btn btn-primary" style={{ gap: '0.4rem' }}>
                  <Plus size={16} />
                  <span>Publish Notice</span>
                </button>
              </div>
            </form>
          </div>

          {/* Manage Existing Announcements */}
          <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1rem' }}>
              Active Published Circulars
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {announcements.map((a) => (
                <div
                  key={a.id}
                  style={{
                    border: '1px solid var(--border-light)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '4px' }}>
                      <span className={`badge ${a.urgency === 'Urgent' ? 'badge-red' : a.urgency === 'Important' ? 'badge-gold' : 'badge-blue'}`}>
                        {a.urgency}
                      </span>
                      <span className="badge badge-blue">{a.category}</span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{a.date}</span>
                    </div>
                    <strong style={{ fontSize: '1rem', color: '#0a3a7b', display: 'block', marginBottom: '4px' }}>
                      {a.title}
                    </strong>
                    <p style={{ fontSize: '0.85rem', color: '#475569', margin: 0 }}>
                      {a.content}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteAnnouncement(a.id)}
                    style={{
                      padding: '6px',
                      borderRadius: '8px',
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      border: 'none',
                    }}
                    title="Delete Notice"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* 7. GALLERY MANAGEMENT TAB */}
      {activeDashboardTab === 'gallery-mgmt' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Campus Photo Gallery Manager
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Add or remove photos visible on the public college gallery page
              </p>
            </div>

            <button
              onClick={() => setIsAddPhotoOpen(true)}
              className="btn btn-primary btn-sm"
              style={{ gap: '0.4rem', fontWeight: 700 }}
            >
              <Plus size={16} />
              <span>Upload New Photo</span>
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem',
            }}
            className="lg-grid-cols-2 md-grid-cols-1"
          >
            {gallery.map((img) => (
              <div
                key={img.id}
                style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#ffffff',
                }}
              >
                <div style={{ height: '150px' }}>
                  <img src={img.imageUrl} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '0.85rem' }}>
                  <div className="badge badge-blue" style={{ fontSize: '0.68rem', marginBottom: '4px' }}>
                    {img.category}
                  </div>
                  <strong style={{ fontSize: '0.85rem', color: '#0a3a7b', display: 'block', lineHeight: 1.3 }}>
                    {img.title}
                  </strong>
                </div>
                <button
                  onClick={() => deleteGalleryItem(img.id)}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(239, 68, 68, 0.9)',
                    color: '#ffffff',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="Remove Photo"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8. SYSTEM SETTINGS TAB */}
      {activeDashboardTab === 'system-settings' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px', maxWidth: '700px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.25rem' }}>
            System Settings & Demo Sandbox Control
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
              <strong style={{ display: 'block', color: '#0a3a7b', marginBottom: '4px' }}>
                Academic Session
              </strong>
              <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                Current Semester: <strong>Even Semester (2025 - 2026)</strong>
              </div>
              <button onClick={() => alert('Academic session toggled successfully.')} className="btn btn-secondary btn-sm">
                Toggle to Odd Semester
              </button>
            </div>

            <div>
              <strong style={{ display: 'block', color: '#dc2626', marginBottom: '4px' }}>
                Reset All Local Storage Demo Data
              </strong>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                Restores initial students (STUDENT001 Vignesh, etc.), faculty, fee ledgers, and attendance states.
              </p>
              <button
                onClick={resetAllDataToDefault}
                className="btn btn-sm"
                style={{ backgroundColor: '#fee2e2', color: '#dc2626', fontWeight: 700, gap: '0.4rem' }}
              >
                <RotateCcw size={15} />
                <span>Reset to Clean Demo State</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Enrol New Student */}
      <Modal
        isOpen={isAddStudentOpen}
        onClose={() => setIsAddStudentOpen(false)}
        title="Enrol New Student to SMEC"
        maxWidth="620px"
      >
        <form onSubmit={handleCreateStudent} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Full Name of Student *</label>
              <input
                type="text"
                required
                placeholder="e.g. Anandha Kumar"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Register Number *</label>
              <input
                type="text"
                required
                value={newStudentReg}
                onChange={(e) => setNewStudentReg(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Department *</label>
              <select
                value={newStudentDept}
                onChange={(e) => setNewStudentDept(e.target.value)}
                className="form-select"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Year & Section</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select value={newStudentYear} onChange={(e) => setNewStudentYear(Number(e.target.value))} className="form-select">
                  <option value={1}>1st Year</option>
                  <option value={2}>2nd Year</option>
                  <option value={3}>3rd Year</option>
                  <option value={4}>4th Year</option>
                </select>
                <select value={newStudentSection} onChange={(e) => setNewStudentSection(e.target.value)} className="form-select">
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Parent / Father Name</label>
              <input
                type="text"
                placeholder="Father Name"
                value={newStudentParent}
                onChange={(e) => setNewStudentParent(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Initial CGPA</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={newStudentCgpa}
                onChange={(e) => setNewStudentCgpa(Number(e.target.value))}
                className="form-input"
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => setIsAddStudentOpen(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save & Enrol Student
            </button>
          </div>
        </form>
      </Modal>

      {/* MODAL: Add New Teacher */}
      <Modal
        isOpen={isAddTeacherOpen}
        onClose={() => setIsAddTeacherOpen(false)}
        title="Appoint New Faculty Member"
        maxWidth="600px"
      >
        <form onSubmit={handleCreateTeacher} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Full Name of Faculty *</label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. R. Vasanth"
              value={newTeacherName}
              onChange={(e) => setNewTeacherName(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 md-grid-cols-1">
            <div className="form-group">
              <label className="form-label">Designation</label>
              <select value={newTeacherDesig} onChange={(e) => setNewTeacherDesig(e.target.value)} className="form-select">
                <option>Assistant Professor</option>
                <option>Associate Professor</option>
                <option>Professor & HOD</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Department</label>
              <select value={newTeacherDept} onChange={(e) => setNewTeacherDept(e.target.value)} className="form-select">
                {courses.map((c) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Qualifications</label>
            <input
              type="text"
              value={newTeacherQual}
              onChange={(e) => setNewTeacherQual(e.target.value)}
              className="form-input"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => setIsAddTeacherOpen(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Appoint Faculty
            </button>
          </div>
        </form>
      </Modal>

      {/* MODAL: View Student Biodata from Admin */}
      {selectedStudentForView && (
        <Modal
          isOpen={!!selectedStudentForView}
          onClose={() => setSelectedStudentForView(null)}
          title={`Student File: ${selectedStudentForView.name} (${selectedStudentForView.id})`}
          maxWidth="850px"
        >
          <StudentBiodataView student={selectedStudentForView} />
        </Modal>
      )}

      {/* MODAL: Upload Photo */}
      <Modal
        isOpen={isAddPhotoOpen}
        onClose={() => setIsAddPhotoOpen(false)}
        title="Add Photo to College Gallery"
        maxWidth="550px"
      >
        <form onSubmit={handleAddPhoto} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Photo Title</label>
            <input
              type="text"
              required
              placeholder="e.g. National Robotics Championship Winners"
              value={photoTitle}
              onChange={(e) => setPhotoTitle(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              value={photoCategory}
              onChange={(e) => setPhotoCategory(e.target.value as any)}
              className="form-select"
            >
              <option value="Campus">Campus</option>
              <option value="Labs">Labs</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Events">Events</option>
              <option value="Placements">Placements</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              type="url"
              required
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Caption / Description</label>
            <input
              type="text"
              placeholder="Brief explanation of event..."
              value={photoCaption}
              onChange={(e) => setPhotoCaption(e.target.value)}
              className="form-input"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => setIsAddPhotoOpen(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Publish to Gallery
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
};
