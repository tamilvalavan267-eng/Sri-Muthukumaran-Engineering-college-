import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StudentBiodataView } from './StudentBiodataView';
import {
  Users,
  UserCheck,
  BarChart3,
  Calendar,
  CreditCard,
  Bell,
  Mail,
  Send,
  CheckCircle2,
  AlertTriangle,
  Award,
  Phone,
} from 'lucide-react';

export const ParentDashboard: React.FC = () => {
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
    showToast,
  } = useApp();

  const student = students.find((s) => s.id === selectedStudentId) || students[0];

  // Contact Faculty Form state
  const [facultyRecipient, setFacultyRecipient] = useState('Dr. S. Kabilan (HOD - CSE)');
  const [parentSubject, setParentSubject] = useState('');
  const [parentMessage, setParentMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMessageSent(true);
    showToast(`Inquiry message sent to ${facultyRecipient}. You will receive a response on your phone/email.`, 'success');
  };

  const totalConducted = attendance.reduce((acc, curr) => acc + curr.totalHours, 0);
  const totalAttended = attendance.reduce((acc, curr) => acc + curr.attendedHours, 0);
  const overallAttendancePct = totalConducted > 0 ? Number(((totalAttended / totalConducted) * 100).toFixed(1)) : 88.5;

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
      
      {/* 1. Parent Welcome Banner & Ward Summary */}
      <div
        style={{
          background: 'linear-gradient(135deg, #07244c 0%, #0a3a7b 100%)',
          borderRadius: '24px',
          padding: '2rem 2.25rem',
          color: '#ffffff',
          boxShadow: '0 15px 30px -5px rgba(7, 36, 76, 0.3)',
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
            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #38bdf8' }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Monitoring Ward: {student.name}
              </h2>
              <span className="badge badge-blue" style={{ fontSize: '0.72rem' }}>
                Read-Only Parent Mode
              </span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#bae6fd' }}>
              Father: <strong>{student.parent.fatherName}</strong> • Phone: {student.parent.phone}
            </div>
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '2px' }}>
              {student.department} • III Year / Sem 6 (Section {student.section}) • Reg No: {student.registerNumber}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem 1.25rem', borderRadius: '14px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: '#cbd5e1', display: 'block', textTransform: 'uppercase' }}>Ward Attendance</span>
            <strong style={{ fontSize: '1.4rem', color: overallAttendancePct >= 75 ? '#86efac' : '#fca5a5' }}>
              {overallAttendancePct}%
            </strong>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem 1.25rem', borderRadius: '14px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: '#cbd5e1', display: 'block', textTransform: 'uppercase' }}>Current CGPA</span>
            <strong style={{ fontSize: '1.4rem', color: '#fef3c7' }}>
              {student.cgpa}
            </strong>
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW TAB: Parent Performance Hub */}
      {activeDashboardTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Quick Notice for Parents */}
          <div
            style={{
              backgroundColor: '#ebf3fe',
              border: '1.5px solid #bfdbfe',
              borderRadius: '16px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#0a3a7b', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={20} />
              </div>
              <div>
                <strong style={{ color: '#0a3a7b', fontSize: '1rem', display: 'block' }}>Parent-Teacher Feedback Status</strong>
                <span style={{ color: '#475569', fontSize: '0.85rem' }}>
                  Mentor <strong>{student.mentor}</strong> reports good practical aptitude and consistent class attendance.
                </span>
              </div>
            </div>
            <button
              onClick={() => setActiveDashboardTab('contact-faculty')}
              className="btn btn-primary btn-sm"
            >
              Message Mentor
            </button>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-3 gap-6 md-grid-cols-1">
            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #0284c7' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                Class Attendance Record
              </span>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0a3a7b' }}>
                {overallAttendancePct}%
              </div>
              <p style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '4px' }}>
                ✓ Satisfies 75% minimum Anna University requirement
              </p>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #10b981' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                Cumulative CGPA Grade
              </span>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0a3a7b' }}>
                {student.cgpa} <span style={{ fontSize: '1rem', color: '#64748b' }}>/ 10</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '4px' }}>
                Distinction Candidate (Rank #{student.rank})
              </p>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #f59e0b' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                Fee Balance
              </span>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: fees.pendingAmount > 0 ? '#b45309' : '#059669' }}>
                ₹ {fees.pendingAmount.toLocaleString()}
              </div>
              <div style={{ marginTop: '4px' }}>
                {fees.pendingAmount > 0 ? (
                  <button onClick={() => setActiveNav('fees')} style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 700 }}>
                    Pay Online Now ↗
                  </button>
                ) : (
                  <span style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 700 }}>Fully Cleared</span>
                )}
              </div>
            </div>
          </div>

          {/* Academic Marks & Attendance Overview */}
          <div className="grid grid-cols-2 gap-6 md-grid-cols-1">
            {/* Subject Marks */}
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                  Subject Marks & Internal Assessments
                </h4>
                <button onClick={() => setActiveDashboardTab('marks')} style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: 700 }}>
                  View All
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {marks.map((m) => (
                  <div key={m.subjectCode} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', fontSize: '0.85rem' }}>
                    <div>
                      <strong style={{ color: '#0f172a' }}>{m.subjectName}</strong>
                      <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Code: {m.subjectCode} • Model: {m.modelExam}/100</div>
                    </div>
                    <span className="badge badge-blue">
                      Grade: {m.semesterGrade || 'A+'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance Progress Bars */}
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                  Subject Attendance Tracking
                </h4>
                <button onClick={() => setActiveDashboardTab('attendance')} style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: 700 }}>
                  Details
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
                {attendance.map((a) => (
                  <div key={a.subjectCode}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', marginBottom: '3px' }}>
                      <span style={{ fontWeight: 600, color: '#334155' }}>{a.subjectName}</span>
                      <strong style={{ color: a.percentage >= 75 ? '#059669' : '#dc2626' }}>{a.percentage}%</strong>
                    </div>
                    <div style={{ height: '7px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${Math.min(a.percentage, 100)}%`, backgroundColor: a.percentage >= 75 ? '#10b981' : '#ef4444' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* 3. BIODATA TAB */}
      {activeDashboardTab === 'biodata' && (
        <StudentBiodataView student={student} />
      )}

      {/* 4. ATTENDANCE TAB */}
      {activeDashboardTab === 'attendance' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.5rem' }}>
            Ward Subject Attendance Ledger (Read-Only)
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Faculty Incharge</th>
                  <th>Hours Conducted</th>
                  <th>Hours Attended</th>
                  <th>Percentage</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendance.map((att) => (
                  <tr key={att.subjectCode}>
                    <td><strong>{att.subjectCode}</strong> - {att.subjectName}</td>
                    <td>{att.facultyName}</td>
                    <td>{att.totalHours} hrs</td>
                    <td><strong style={{ color: '#059669' }}>{att.attendedHours}</strong> hrs</td>
                    <td><strong style={{ color: att.percentage >= 75 ? '#059669' : '#dc2626' }}>{att.percentage}%</strong></td>
                    <td><span className={`badge ${att.status === 'Eligible' ? 'badge-green' : 'badge-red'}`}>{att.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. MARKS TAB */}
      {activeDashboardTab === 'marks' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.5rem' }}>
            Ward Academic Results & Examination Performance
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Internal 1 (/50)</th>
                  <th>Internal 2 (/50)</th>
                  <th>Model Exam (/100)</th>
                  <th>Lab Practical</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {marks.map((m) => (
                  <tr key={m.subjectCode}>
                    <td><strong>{m.subjectCode}</strong> - {m.subjectName}</td>
                    <td>{m.internal1} / 50</td>
                    <td>{m.internal2} / 50</td>
                    <td><strong>{m.modelExam}</strong> / 100</td>
                    <td>{m.practical ? `${m.practical} / 100` : '—'}</td>
                    <td><span className="badge badge-blue">{m.semesterGrade || 'O'}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. TIMETABLE TAB */}
      {activeDashboardTab === 'timetable' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.5rem' }}>
            Ward's Weekly Academic Timetable
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th style={{ minWidth: '150px' }}>Time</th>
                  {days.map((d) => (
                    <th key={d} style={{ minWidth: '120px', textAlign: 'center' }}>{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 700, color: '#0a3a7b', backgroundColor: '#f8fafc' }}>{time}</td>
                    {days.map((day) => {
                      const slot = timetable.find((s) => s.day === day && s.timeSlot === time);
                      return (
                        <td key={day} style={{ fontSize: '0.78rem', padding: '0.65rem' }}>
                          {slot ? (
                            <div style={{ backgroundColor: '#ebf3fe', padding: '4px', borderRadius: '6px' }}>
                              <strong>{slot.subjectCode}</strong>
                              <div>{slot.roomNo}</div>
                            </div>
                          ) : '—'}
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

      {/* 7. FEES TAB */}
      {activeDashboardTab === 'fees' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
              Ward College Fee Details & Settlement History
            </h3>
            <button onClick={() => setActiveNav('fees')} className="btn btn-primary btn-sm">
              Pay Remaining Balance
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 md-grid-cols-1" style={{ marginBottom: '1.5rem' }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Total Assessed</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a3a7b' }}>₹ {fees.totalFee.toLocaleString()}</div>
            </div>
            <div style={{ backgroundColor: '#d1fae5', padding: '1.25rem', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.8rem', color: '#065f46' }}>Total Settled</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#059669' }}>₹ {fees.paidAmount.toLocaleString()}</div>
            </div>
            <div style={{ backgroundColor: fees.pendingAmount > 0 ? '#fee2e2' : '#d1fae5', padding: '1.25rem', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.8rem', color: fees.pendingAmount > 0 ? '#991b1b' : '#065f46' }}>Pending Balance</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: fees.pendingAmount > 0 ? '#dc2626' : '#059669' }}>
                ₹ {fees.pendingAmount.toLocaleString()}
              </div>
            </div>
          </div>

          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a3a7b', marginBottom: '1rem' }}>
            Official Receipt History
          </h4>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Receipt No</th>
                <th>Fee Type</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {fees.history.map((h, i) => (
                <tr key={i}>
                  <td>{h.date}</td>
                  <td><strong style={{ color: '#0284c7' }}>{h.receiptNo}</strong></td>
                  <td>{h.feeType}</td>
                  <td>{h.paymentMethod}</td>
                  <td><strong style={{ color: '#059669' }}>₹ {h.amount.toLocaleString()}</strong></td>
                  <td><span className="badge badge-green">Paid</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 8. NOTIFICATIONS TAB */}
      {activeDashboardTab === 'notifications' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.5rem' }}>
            Official Circulars for Parents
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {announcements.map((ann) => (
              <div key={ann.id} style={{ border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.25rem', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span className="badge badge-blue">{ann.category}</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{ann.date}</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '4px' }}>{ann.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0 }}>{ann.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9. CONTACT FACULTY TAB */}
      {activeDashboardTab === 'contact-faculty' && (
        <div className="card-white" style={{ padding: '2.5rem', borderRadius: '20px', maxWidth: '750px' }}>
          {!isMessageSent ? (
            <>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                Contact Faculty Mentor or Department Head
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Communicate directly with your ward's faculty mentor or class advisor regarding academic progress, attendance queries, or fee considerations.
              </p>

              <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Select Faculty Member</label>
                  <select
                    value={facultyRecipient}
                    onChange={(e) => setFacultyRecipient(e.target.value)}
                    className="form-select"
                  >
                    <option value="Dr. S. Kabilan (HOD - CSE & Class Mentor)">Dr. S. Kabilan (HOD - CSE & Class Mentor)</option>
                    <option value="Prof. Meenakshi Sundaram (Class Advisor)">Prof. Meenakshi Sundaram (Class Advisor)</option>
                    <option value="Dr. K. Soundararajan (Principal)">Dr. K. Soundararajan (Principal)</option>
                    <option value="Accounts & Finance Officer">Accounts & Finance Officer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Query regarding upcoming campus placement training"
                    value={parentSubject}
                    onChange={(e) => setParentSubject(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message / Query</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    value={parentMessage}
                    onChange={(e) => setParentMessage(e.target.value)}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ gap: '0.5rem' }}>
                  <Send size={18} />
                  <span>Send Message to Faculty</span>
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#d1fae5', color: '#065f46', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '0.5rem' }}>
                Message Dispatched!
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Your message has been delivered to <strong>{facultyRecipient}</strong>. You will receive an SMS and email notification upon reply.
              </p>
              <button onClick={() => setIsMessageSent(false)} className="btn btn-secondary">
                Send Another Message
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
