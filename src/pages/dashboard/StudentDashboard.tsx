import React from 'react';
import { useApp } from '../../context/AppContext';
import { StudentBiodataView } from './StudentBiodataView';
import {
  UserCheck,
  BarChart3,
  Calendar,
  CreditCard,
  Bell,
  User,
  GraduationCap,
  Award,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  FileText,
  Download,
  Receipt,
} from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const {
    students,
    selectedStudentId,
    activeDashboardTab,
    setActiveDashboardTab,
    attendance,
    marks,
    timetable,
    fees,
    announcements,
    setActiveNav,
  } = useApp();

  const student = students.find((s) => s.id === selectedStudentId) || students[0];

  // Calculate overall attendance percentage
  const totalConducted = attendance.reduce((acc, curr) => acc + curr.totalHours, 0);
  const totalAttended = attendance.reduce((acc, curr) => acc + curr.attendedHours, 0);
  const overallAttendancePct = totalConducted > 0 ? Number(((totalAttended / totalConducted) * 100).toFixed(1)) : 88.5;

  // Group timetable by day
  const days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];

  const timeSlots = [
    '08:45 AM - 09:40 AM',
    '09:40 AM - 10:35 AM',
    '10:50 AM - 11:45 AM',
    '11:45 AM - 12:40 PM',
    '01:25 PM - 03:15 PM',
    '03:15 PM - 04:00 PM',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* 1. Student Header Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0a3a7b 0%, #1d61b6 100%)',
          borderRadius: '24px',
          padding: '2rem 2.25rem',
          color: '#ffffff',
          boxShadow: '0 15px 30px -5px rgba(10, 58, 123, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <img
            src={student.photo}
            alt={student.name}
            style={{ width: '84px', height: '84px', borderRadius: '50%', objectFit: 'cover', border: '3.5px solid #ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                {student.name}
              </h2>
              <span style={{ backgroundColor: '#22c55e', color: '#ffffff', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '9999px', fontWeight: 700 }}>
                Active Scholar
              </span>
            </div>
            <div style={{ fontSize: '0.95rem', color: '#bae6fd', fontWeight: 600 }}>
              {student.department} • III Year / Semester {student.semester} • Section {student.section}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '4px' }}>
              Student ID: <strong>{student.id}</strong> • Anna Univ Reg: <strong>{student.registerNumber}</strong>
            </div>
          </div>
        </div>

        {/* Quick Quick Badges */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', padding: '0.85rem 1.25rem', borderRadius: '16px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: '#cbd5e1', display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Cumulative CGPA</span>
            <strong style={{ fontSize: '1.5rem', color: '#fef3c7' }}>{student.cgpa}</strong>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', padding: '0.85rem 1.25rem', borderRadius: '16px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: '#cbd5e1', display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Overall Attendance</span>
            <strong style={{ fontSize: '1.5rem', color: overallAttendancePct >= 75 ? '#86efac' : '#fca5a5' }}>
              {overallAttendancePct}%
            </strong>
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW TAB: Comprehensive Multi-Card Snapshot */}
      {activeDashboardTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Top 4 KPI Metrics */}
          <div className="grid grid-cols-4 gap-6 lg-grid-cols-2 md-grid-cols-1">
            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #0284c7' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Attendance Status</span>
                <UserCheck size={20} color="#0284c7" />
              </div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0a3a7b' }}>
                {overallAttendancePct}%
              </div>
              <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '4px' }}>
                ✓ Eligible for Anna Univ Exam
              </div>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #10b981' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Department Rank</span>
                <Award size={20} color="#10b981" />
              </div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0a3a7b' }}>
                #{student.rank} <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500 }}>of 180</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '4px' }}>
                Top 5% Merit Cohort
              </div>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Pending College Fees</span>
                <CreditCard size={20} color="#f59e0b" />
              </div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: fees.pendingAmount > 0 ? '#b45309' : '#059669' }}>
                ₹ {fees.pendingAmount.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#b45309', fontWeight: 600, marginTop: '4px' }}>
                {fees.pendingAmount > 0 ? `Due Date: ${fees.dueDate}` : 'All Clear / Settled'}
              </div>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #8b5cf6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Registered Credits</span>
                <GraduationCap size={20} color="#8b5cf6" />
              </div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0a3a7b' }}>
                24 <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500 }}>Credits</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#6b21a8', fontWeight: 600, marginTop: '4px' }}>
                6 Theory + 2 Labs
              </div>
            </div>
          </div>

          {/* Attendance Meter & Academic Chart Grid */}
          <div className="grid grid-cols-2 gap-6 md-grid-cols-1">
            
            {/* Subject Attendance Breakdown */}
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                  Subject-Wise Attendance
                </h4>
                <button onClick={() => setActiveDashboardTab('attendance')} style={{ fontSize: '0.825rem', color: '#0284c7', fontWeight: 700 }}>
                  View All ↗
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {attendance.slice(0, 4).map((att) => (
                  <div key={att.subjectCode}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, color: '#1e293b' }}>
                        {att.subjectCode} - {att.subjectName}
                      </span>
                      <strong style={{ color: att.percentage >= 75 ? '#059669' : '#dc2626' }}>
                        {att.percentage}% ({att.attendedHours}/{att.totalHours} hrs)
                      </strong>
                    </div>
                    {/* Progress Bar */}
                    <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${Math.min(att.percentage, 100)}%`,
                          backgroundColor: att.percentage >= 85 ? '#10b981' : att.percentage >= 75 ? '#3b82f6' : '#ef4444',
                          borderRadius: '4px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Internal Exam Performance Chart */}
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                  Internal Exam Grades & Normalized Marks
                </h4>
                <button onClick={() => setActiveDashboardTab('marks')} style={{ fontSize: '0.825rem', color: '#0284c7', fontWeight: 700 }}>
                  Detailed Results ↗
                </button>
              </div>

              {/* Visual Performance Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
                {marks.slice(0, 4).map((m) => (
                  <div key={m.subjectCode} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '80px', fontSize: '0.85rem', fontWeight: 700, color: '#0a3a7b' }}>
                      {m.subjectCode}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748b', marginBottom: '2px' }}>
                        <span>I1: {m.internal1}/50 • I2: {m.internal2}/50</span>
                        <strong style={{ color: '#0a3a7b' }}>Grade: {m.semesterGrade || 'O'}</strong>
                      </div>
                      <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                          style={{
                            height: '100%',
                            width: `${(m.modelExam / 100) * 100}%`,
                            background: 'linear-gradient(90deg, #0284c7 0%, #10b981 100%)',
                            borderRadius: '4px',
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ width: '45px', textAlign: 'right', fontWeight: 800, fontSize: '0.85rem', color: '#059669' }}>
                      {m.modelExam}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Notice & Timetable Preview */}
          <div className="grid grid-cols-2 gap-6 md-grid-cols-1">
            
            {/* Latest Announcements */}
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bell size={18} color="#0284c7" />
                  <span>College Circulars & Notices</span>
                </h4>
                <button onClick={() => setActiveDashboardTab('notifications')} style={{ fontSize: '0.825rem', color: '#0284c7', fontWeight: 700 }}>
                  All Circulars
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {announcements.slice(0, 3).map((ann) => (
                  <div
                    key={ann.id}
                    style={{
                      border: '1px solid var(--border-light)',
                      borderRadius: '12px',
                      padding: '0.85rem 1rem',
                      backgroundColor: '#f8fafc',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span className={`badge ${ann.urgency === 'Urgent' ? 'badge-red' : ann.urgency === 'Important' ? 'badge-gold' : 'badge-blue'}`} style={{ fontSize: '0.68rem' }}>
                        {ann.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{ann.date}</span>
                    </div>
                    <strong style={{ fontSize: '0.88rem', color: '#0f172a', display: 'block', marginBottom: '2px' }}>
                      {ann.title}
                    </strong>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                      {ann.content.substring(0, 100)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Fee Settlement Banner */}
            <div
              className="card-white"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: '6px solid #0a3a7b',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                    Fee Payment Status
                  </h4>
                  <span className={`badge ${fees.pendingAmount === 0 ? 'badge-green' : 'badge-gold'}`}>
                    {fees.status}
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.25rem' }}>
                  Academic Year: <strong>{fees.academicYear}</strong> • Semester {fees.semester}
                </p>

                <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Paid So Far</span>
                    <strong style={{ color: '#059669', fontSize: '1.2rem' }}>₹ {fees.paidAmount.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Pending Balance</span>
                    <strong style={{ color: fees.pendingAmount > 0 ? '#dc2626' : '#059669', fontSize: '1.2rem' }}>
                      ₹ {fees.pendingAmount.toLocaleString()}
                    </strong>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setActiveNav('fees')}
                  className="btn btn-primary"
                  style={{ flex: 1, gap: '0.4rem' }}
                >
                  <CreditCard size={16} />
                  <span>Pay Balance Online</span>
                </button>
                <button
                  onClick={() => setActiveDashboardTab('fees')}
                  className="btn btn-secondary"
                >
                  View Receipts
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 3. ATTENDANCE TAB */}
      {activeDashboardTab === 'attendance' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Subject-Wise Attendance Ledger
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Minimum 75% required to sit for Anna University End-Semester Theory/Lab Examinations
              </p>
            </div>
            <div className="badge badge-green" style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}>
              Overall Cumulative: {overallAttendancePct}%
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Subject Title</th>
                  <th>Faculty Incharge</th>
                  <th>Total Hours</th>
                  <th>Attended</th>
                  <th>Percentage</th>
                  <th>Eligibility Status</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((item) => (
                  <tr key={item.subjectCode}>
                    <td><strong>{item.subjectCode}</strong></td>
                    <td>{item.subjectName}</td>
                    <td>{item.facultyName}</td>
                    <td>{item.totalHours} hrs</td>
                    <td><strong style={{ color: '#059669' }}>{item.attendedHours}</strong> hrs</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '80px', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${Math.min(item.percentage, 100)}%`, backgroundColor: item.percentage >= 75 ? '#10b981' : '#ef4444' }} />
                        </div>
                        <strong style={{ color: item.percentage >= 75 ? '#059669' : '#dc2626' }}>
                          {item.percentage}%
                        </strong>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${item.status === 'Eligible' ? 'badge-green' : 'badge-red'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. MARKS TAB */}
      {activeDashboardTab === 'marks' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Continuous Internal Assessment & Semester Marks
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Evaluation based on Anna University Autonomous Grading Schema (O, A+, A, B+, B, RA)
              </p>
            </div>
            <button onClick={() => window.print()} className="btn btn-secondary btn-sm" style={{ gap: '0.35rem' }}>
              <Download size={14} />
              <span>Export Grade Sheet</span>
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Subject</th>
                  <th>Credits</th>
                  <th>Internal 1 (/50)</th>
                  <th>Internal 2 (/50)</th>
                  <th>Model (/100)</th>
                  <th>Lab Practical</th>
                  <th>Internal Weightage</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {marks.map((m) => (
                  <tr key={m.subjectCode}>
                    <td><strong>{m.subjectCode}</strong></td>
                    <td>{m.subjectName}</td>
                    <td>{m.credits}</td>
                    <td>{m.internal1} / 50</td>
                    <td>{m.internal2} / 50</td>
                    <td><strong>{m.modelExam}</strong> / 100</td>
                    <td>{m.practical ? `${m.practical} / 100` : '—'}</td>
                    <td>
                      <strong style={{ color: '#0a3a7b' }}>{m.totalInternalNormalized} / 20</strong>
                    </td>
                    <td>
                      <span className="badge badge-blue" style={{ fontSize: '0.85rem' }}>
                        {m.semesterGrade || 'A+'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. TIMETABLE TAB */}
      {activeDashboardTab === 'timetable' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Weekly Class Timetable (Monday to Saturday)
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Class: III Year CSE - Section A • Lecture Hall: LH-302 (Block B)
              </p>
            </div>
            <span className="badge badge-blue">Odd/Even Semester Schedule</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th style={{ minWidth: '150px' }}>Time Slot</th>
                  {days.map((day) => (
                    <th key={day} style={{ minWidth: '130px', textAlign: 'center' }}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 700, color: '#0a3a7b', backgroundColor: '#f8fafc', whiteSpace: 'nowrap' }}>
                      {time}
                    </td>
                    {days.map((day) => {
                      const slot = timetable.find((s) => s.day === day && s.timeSlot === time);
                      return (
                        <td key={day} style={{ verticalAlign: 'top', padding: '0.65rem' }}>
                          {slot ? (
                            <div
                              style={{
                                backgroundColor: slot.type === 'Lab' ? '#dbeafe' : slot.type === 'Tutorial' ? '#fef3c7' : '#f1f5f9',
                                border: slot.type === 'Lab' ? '1px solid #93c5fd' : '1px solid #e2e8f0',
                                borderRadius: '8px',
                                padding: '6px 8px',
                                textAlign: 'left',
                                fontSize: '0.78rem',
                              }}
                            >
                              <strong style={{ display: 'block', color: '#0a3a7b' }}>{slot.subjectCode}</strong>
                              <div style={{ color: '#1e293b', fontWeight: 600 }}>{slot.subjectName}</div>
                              <div style={{ color: '#64748b', fontSize: '0.7rem' }}>{slot.roomNo}</div>
                            </div>
                          ) : (
                            <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. FEES TAB */}
      {activeDashboardTab === 'fees' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                  Student Fee Ledger & E-Receipts
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                  Academic Session: {fees.academicYear} • Tuition, Transport, Exam & Amenities
                </p>
              </div>
              <button
                onClick={() => setActiveNav('fees')}
                className="btn btn-primary"
                style={{ gap: '0.5rem' }}
              >
                <CreditCard size={16} />
                <span>Pay Pending Dues Online</span>
              </button>
            </div>

            {/* Status Breakdown Cards */}
            <div className="grid grid-cols-3 gap-6 md-grid-cols-1" style={{ marginBottom: '2rem' }}>
              <div style={{ backgroundColor: '#ebf3fe', padding: '1.5rem', borderRadius: '16px', border: '1.5px solid #bfdbfe' }}>
                <span style={{ fontSize: '0.8rem', color: '#1e40af', fontWeight: 700, textTransform: 'uppercase' }}>Total Assessed Fee</span>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0a3a7b', marginTop: '4px' }}>
                  ₹ {fees.totalFee.toLocaleString()}
                </div>
              </div>
              <div style={{ backgroundColor: '#d1fae5', padding: '1.5rem', borderRadius: '16px', border: '1.5px solid #a7f3d0' }}>
                <span style={{ fontSize: '0.8rem', color: '#065f46', fontWeight: 700, textTransform: 'uppercase' }}>Amount Settled</span>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#059669', marginTop: '4px' }}>
                  ₹ {fees.paidAmount.toLocaleString()}
                </div>
              </div>
              <div style={{ backgroundColor: fees.pendingAmount > 0 ? '#fee2e2' : '#d1fae5', padding: '1.5rem', borderRadius: '16px', border: fees.pendingAmount > 0 ? '1.5px solid #fecaca' : '1.5px solid #a7f3d0' }}>
                <span style={{ fontSize: '0.8rem', color: fees.pendingAmount > 0 ? '#991b1b' : '#065f46', fontWeight: 700, textTransform: 'uppercase' }}>Remaining Due</span>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: fees.pendingAmount > 0 ? '#dc2626' : '#059669', marginTop: '4px' }}>
                  ₹ {fees.pendingAmount.toLocaleString()}
                </div>
              </div>
            </div>

            {/* History Table */}
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1rem' }}>
              Official Transaction & Payment History
            </h4>
            <div style={{ overflowX: 'auto' }}>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Transaction ID</th>
                    <th>Fee Component</th>
                    <th>Payment Mode</th>
                    <th>Receipt No</th>
                    <th>Amount Paid</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.history.map((txn, i) => (
                    <tr key={i}>
                      <td>{txn.date}</td>
                      <td><strong>{txn.transactionId}</strong></td>
                      <td>{txn.feeType}</td>
                      <td>{txn.paymentMethod}</td>
                      <td><span style={{ color: '#0284c7', fontWeight: 600 }}>{txn.receiptNo}</span></td>
                      <td><strong style={{ color: '#059669' }}>₹ {txn.amount.toLocaleString()}</strong></td>
                      <td><span className="badge badge-green">Success</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}

      {/* 7. BIODATA TAB */}
      {activeDashboardTab === 'biodata' && (
        <StudentBiodataView student={student} />
      )}

      {/* 8. NOTIFICATIONS TAB */}
      {activeDashboardTab === 'notifications' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Campus Circulars & Official Announcements
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Published by Office of Principal, Dean (Academics), and Controller of Examinations
              </p>
            </div>
            <span className="badge badge-blue">Semester Live Feed</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {announcements.map((ann) => (
              <div
                key={ann.id}
                style={{
                  border: '1px solid var(--border-light)',
                  borderRadius: '14px',
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`badge ${ann.urgency === 'Urgent' ? 'badge-red' : ann.urgency === 'Important' ? 'badge-gold' : 'badge-blue'}`}>
                      {ann.urgency}
                    </span>
                    <span className="badge badge-blue">{ann.category}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Published: <strong>{ann.date}</strong> by {ann.author}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.45rem' }}>
                  {ann.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {ann.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
