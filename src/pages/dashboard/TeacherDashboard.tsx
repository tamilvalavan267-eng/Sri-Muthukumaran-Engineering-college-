import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StudentBiodataView } from './StudentBiodataView';
import {
  UserCheck,
  FileSpreadsheet,
  Users,
  Calendar,
  Bell,
  Save,
  RotateCcw,
  CheckCircle2,
  PlusCircle,
  Briefcase,
  Award,
  BookOpen,
} from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const {
    students,
    activeDashboardTab,
    setActiveDashboardTab,
    timetable,
    attendance,
    marks,
    saveAttendance,
    saveMarks,
    addAnnouncement,
    showToast,
  } = useApp();

  // Class Selection Filters
  const [selectedDept, setSelectedDept] = useState('Computer Science and Engineering');
  const [selectedYear, setSelectedYear] = useState('3');
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedSubject, setSelectedSubject] = useState('CS8601');
  const [attendanceDate, setAttendanceDate] = useState(() => new Date().toISOString().split('T')[0]);

  // Attendance roster state
  const [attendanceRoster, setAttendanceRoster] = useState<{ [id: string]: 'Present' | 'Absent' | 'Leave' | 'OD' }>({
    STUDENT001: 'Present',
    STUDENT002: 'Present',
    STUDENT003: 'Present',
    STUDENT004: 'Present',
  });

  const handleAttendanceToggle = (studentId: string, status: 'Present' | 'Absent' | 'Leave' | 'OD') => {
    setAttendanceRoster((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleMarkAllPresent = () => {
    const updated: { [id: string]: 'Present' } = {};
    students.forEach((s) => (updated[s.id] = 'Present'));
    setAttendanceRoster(updated);
    showToast('All students marked Present for current period.', 'info');
  };

  const handleSaveAttendance = () => {
    const records = Object.keys(attendanceRoster).map((id) => ({
      studentId: id,
      status: attendanceRoster[id],
    }));
    saveAttendance(selectedSubject, records);
  };

  // Marks Entry State
  const [marksExamType, setMarksExamType] = useState<'internal1' | 'internal2' | 'modelExam' | 'practical'>('internal1');
  const [enteredMarks, setEnteredMarks] = useState<{ [id: string]: number }>({
    STUDENT001: 46,
    STUDENT002: 48,
    STUDENT003: 42,
    STUDENT004: 40,
  });

  const handleMarkChange = (studentId: string, val: number) => {
    setEnteredMarks((prev) => ({ ...prev, [studentId]: val }));
  };

  const handleSaveMarks = () => {
    const marksData = Object.keys(enteredMarks).map((id) => ({
      studentId: id,
      marks: enteredMarks[id],
    }));
    saveMarks(selectedSubject, marksExamType, marksData);
  };

  // New Announcement Form State
  const [newAnnTitle, setNewAnnTitle] = useState('');
  const [newAnnContent, setNewAnnContent] = useState('');
  const [newAnnCategory, setNewAnnCategory] = useState<'Academic' | 'Exam' | 'Event' | 'Fees' | 'Placement'>('Academic');
  const [newAnnUrgency, setNewAnnUrgency] = useState<'Normal' | 'Important' | 'Urgent'>('Normal');

  const handleCreateAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnnTitle || !newAnnContent) return;
    addAnnouncement({
      title: newAnnTitle,
      content: newAnnContent,
      category: newAnnCategory,
      urgency: newAnnUrgency,
      targetRole: ['student', 'parent'],
      author: 'Dr. S. Kabilan (HOD - CSE)',
    });
    setNewAnnTitle('');
    setNewAnnContent('');
  };

  // Filter students for selected department
  const filteredStudents = students.filter(
    (s) => s.department === selectedDept && String(s.year) === selectedYear && s.section === selectedSection
  );
  const displayStudents = filteredStudents.length > 0 ? filteredStudents : students;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* 1. Teacher Welcome Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0a3a7b 0%, #1e5bb8 100%)',
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
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Faculty"
            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3.5px solid #ffffff' }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Dr. S. Kabilan, M.E., Ph.D.
              </h2>
              <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
                Associate Professor & HOD i/c
              </span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#bae6fd' }}>
              Department of Computer Science and Engineering • Faculty ID: <strong>TEACHER001</strong>
            </div>
            <div style={{ fontSize: '0.825rem', color: '#e2e8f0', marginTop: '2px' }}>
              Specialization: Artificial Intelligence, Deep Learning & Distributed Systems
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => setActiveDashboardTab('attendance-entry')}
            className="btn btn-accent btn-sm"
            style={{ fontWeight: 700 }}
          >
            Mark Attendance
          </button>
          <button
            onClick={() => setActiveDashboardTab('marks-entry')}
            className="btn btn-outline-white btn-sm"
          >
            Enter Marks
          </button>
        </div>
      </div>

      {/* 2. OVERVIEW TAB */}
      {activeDashboardTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Top Faculty KPIs */}
          <div className="grid grid-cols-4 gap-6 lg-grid-cols-2 md-grid-cols-1">
            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #0a3a7b' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Assigned Courses</span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0a3a7b' }}>2 Subjects</div>
              <div style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 600, marginTop: '4px' }}>CS8601 & CS8611 Lab</div>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #059669' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Total Students Enrolled</span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0a3a7b' }}>68 Scholars</div>
              <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '4px' }}>III Year CSE - Sec A</div>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #f59e0b' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Average Class Attendance</span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0a3a7b' }}>91.4%</div>
              <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '4px' }}>Above benchmark</div>
            </div>

            <div className="card-white" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '5px solid #8b5cf6' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Internal Assessment 1</span>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0a3a7b' }}>100% Evaluated</div>
              <div style={{ fontSize: '0.78rem', color: '#6b21a8', fontWeight: 600, marginTop: '4px' }}>Model Exam Upcoming</div>
            </div>
          </div>

          {/* Quick Shortcuts Grid */}
          <div className="grid grid-cols-2 gap-6 md-grid-cols-1">
            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserCheck size={20} color="#0284c7" />
                <span>Quick Period Attendance Entry</span>
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Take daily attendance for III Year CSE - Section A. Toggling Present/Absent updates the student's live ledger and parent dashboard immediately.
              </p>
              <button
                onClick={() => setActiveDashboardTab('attendance-entry')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Open Class Attendance Roster
              </button>
            </div>

            <div className="card-white" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileSpreadsheet size={20} color="#0284c7" />
                <span>Internal & Model Marks Entry</span>
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Enter or revise marks for Internal 1, Internal 2, Model Exam, or Lab Practicals. Anna University normalized GPA updates instantly.
              </p>
              <button
                onClick={() => setActiveDashboardTab('marks-entry')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Open Marks Ledger
              </button>
            </div>
          </div>

        </div>
      )}

      {/* 3. ATTENDANCE ENTRY TAB */}
      {activeDashboardTab === 'attendance-entry' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Class Attendance Entry System
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Marking attendance updates student logs and alerts parents in real time.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handleMarkAllPresent}
                className="btn btn-secondary btn-sm"
              >
                Mark All Present
              </button>
              <button
                onClick={handleSaveAttendance}
                className="btn btn-primary btn-sm"
                style={{ gap: '0.4rem', fontWeight: 700 }}
              >
                <Save size={16} />
                <span>Save & Sync Attendance</span>
              </button>
            </div>
          </div>

          {/* Selectors Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1rem',
              backgroundColor: '#f8fafc',
              padding: '1.25rem',
              borderRadius: '14px',
              border: '1px solid var(--border-light)',
              marginBottom: '1.75rem',
            }}
            className="md-grid-cols-2"
          >
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Department</label>
              <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} className="form-select">
                <option value="Computer Science and Engineering">Computer Science (CSE)</option>
                <option value="Information Technology">Information Tech (IT)</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Year & Sem</label>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="form-select">
                <option value="3">III Year / Sem 6</option>
                <option value="4">IV Year / Sem 8</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Section</label>
              <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)} className="form-select">
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Subject Code</label>
              <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="form-select">
                <option value="CS8601">CS8601 - AI & Machine Learning</option>
                <option value="CS8602">CS8602 - Cloud Computing</option>
                <option value="CS8611">CS8611 - AI & Data Science Lab</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Date</label>
              <input
                type="date"
                value={attendanceDate}
                onChange={(e) => setAttendanceDate(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          {/* Student Attendance List */}
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Reg Number</th>
                  <th>Current Att %</th>
                  <th style={{ textAlign: 'center' }}>Mark Status</th>
                </tr>
              </thead>
              <tbody>
                {displayStudents.map((st) => {
                  const currentStatus = attendanceRoster[st.id] || 'Present';
                  return (
                    <tr key={st.id}>
                      <td><strong>{st.id}</strong></td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <img
                            src={st.photo}
                            alt={st.name}
                            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                          />
                          <span>{st.name}</span>
                        </div>
                      </td>
                      <td>{st.registerNumber}</td>
                      <td>
                        <span style={{ color: '#059669', fontWeight: 700 }}>88.5%</span>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', gap: '0.35rem' }}>
                          <button
                            type="button"
                            onClick={() => handleAttendanceToggle(st.id, 'Present')}
                            style={{
                              padding: '4px 12px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              backgroundColor: currentStatus === 'Present' ? '#10b981' : '#f1f5f9',
                              color: currentStatus === 'Present' ? '#ffffff' : '#475569',
                              border: 'none',
                            }}
                          >
                            Present
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAttendanceToggle(st.id, 'Absent')}
                            style={{
                              padding: '4px 12px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              backgroundColor: currentStatus === 'Absent' ? '#ef4444' : '#f1f5f9',
                              color: currentStatus === 'Absent' ? '#ffffff' : '#475569',
                              border: 'none',
                            }}
                          >
                            Absent
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAttendanceToggle(st.id, 'Leave')}
                            style={{
                              padding: '4px 12px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              backgroundColor: currentStatus === 'Leave' ? '#f59e0b' : '#f1f5f9',
                              color: currentStatus === 'Leave' ? '#ffffff' : '#475569',
                              border: 'none',
                            }}
                          >
                            Leave
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAttendanceToggle(st.id, 'OD')}
                            style={{
                              padding: '4px 12px',
                              borderRadius: '6px',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              backgroundColor: currentStatus === 'OD' ? '#3b82f6' : '#f1f5f9',
                              color: currentStatus === 'OD' ? '#ffffff' : '#475569',
                              border: 'none',
                            }}
                          >
                            OD
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <button
              onClick={handleSaveAttendance}
              className="btn btn-primary btn-lg"
              style={{ gap: '0.5rem', fontWeight: 800 }}
            >
              <Save size={18} />
              <span>Save Class Attendance</span>
            </button>
          </div>

        </div>
      )}

      {/* 4. MARKS ENTRY TAB */}
      {activeDashboardTab === 'marks-entry' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a3a7b', margin: 0 }}>
                Continuous Internal Assessment & Marks Entry
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                Enter evaluation scores for the selected assessment. Scores calculate internal weightage automatically.
              </p>
            </div>

            <button
              onClick={handleSaveMarks}
              className="btn btn-primary"
              style={{ gap: '0.4rem', fontWeight: 700 }}
            >
              <Save size={16} />
              <span>Save & Publish Marks</span>
            </button>
          </div>

          {/* Selectors Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              backgroundColor: '#f8fafc',
              padding: '1.25rem',
              borderRadius: '14px',
              border: '1px solid var(--border-light)',
              marginBottom: '1.75rem',
            }}
            className="md-grid-cols-2"
          >
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Course / Subject</label>
              <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="form-select">
                <option value="CS8601">CS8601 - AI & Machine Learning</option>
                <option value="CS8602">CS8602 - Cloud Computing</option>
                <option value="CS8611">CS8611 - AI & Data Science Lab</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Examination Type</label>
              <select
                value={marksExamType}
                onChange={(e) => setMarksExamType(e.target.value as any)}
                className="form-select"
              >
                <option value="internal1">Internal Assessment 1 (Max 50)</option>
                <option value="internal2">Internal Assessment 2 (Max 50)</option>
                <option value="modelExam">Model Exam (Max 100)</option>
                <option value="practical">Practical Exam (Max 100)</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Class Section</label>
              <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)} className="form-select">
                <option value="A">Section A (Room LH-302)</option>
                <option value="B">Section B</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontSize: '0.78rem' }}>Maximum Marks</label>
              <div style={{ padding: '0.65rem', backgroundColor: '#e2e8f0', borderRadius: '8px', fontWeight: 800, color: '#0a3a7b' }}>
                {marksExamType === 'internal1' || marksExamType === 'internal2' ? '50 Marks' : '100 Marks'}
              </div>
            </div>
          </div>

          {/* Student Marks Entry Table */}
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Reg Number</th>
                  <th>Entered Score</th>
                  <th>Percentage %</th>
                  <th>Calculated Grade</th>
                </tr>
              </thead>
              <tbody>
                {displayStudents.map((st) => {
                  const maxMarks = marksExamType === 'internal1' || marksExamType === 'internal2' ? 50 : 100;
                  const currentScore = enteredMarks[st.id] ?? (maxMarks === 50 ? 44 : 88);
                  const pct = Math.round((currentScore / maxMarks) * 100);
                  const grade = pct >= 90 ? 'O' : pct >= 80 ? 'A+' : pct >= 70 ? 'A' : pct >= 60 ? 'B+' : 'B';

                  return (
                    <tr key={st.id}>
                      <td><strong>{st.id}</strong></td>
                      <td>{st.name}</td>
                      <td>{st.registerNumber}</td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          max={maxMarks}
                          value={currentScore}
                          onChange={(e) => handleMarkChange(st.id, Number(e.target.value))}
                          style={{
                            width: '100px',
                            padding: '0.4rem 0.65rem',
                            borderRadius: '8px',
                            border: '1.5px solid #0284c7',
                            fontWeight: 800,
                            color: '#0a3a7b',
                            fontSize: '1rem',
                          }}
                        />
                        <span style={{ fontSize: '0.78rem', color: '#64748b', marginLeft: '6px' }}>
                          / {maxMarks}
                        </span>
                      </td>
                      <td>
                        <strong style={{ color: pct >= 50 ? '#059669' : '#dc2626' }}>{pct}%</strong>
                      </td>
                      <td>
                        <span className="badge badge-blue">{grade}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
            <button
              onClick={handleSaveMarks}
              className="btn btn-primary btn-lg"
              style={{ gap: '0.5rem', fontWeight: 800 }}
            >
              <Save size={18} />
              <span>Save & Publish Marks</span>
            </button>
          </div>

        </div>
      )}

      {/* 5. STUDENT ROSTER & BIODATA TAB */}
      {activeDashboardTab === 'students-list' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.5rem' }}>
            Class Enrolment Roster - III Year CSE Section A
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Register No</th>
                  <th>CGPA</th>
                  <th>Attendance</th>
                  <th>Parent Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((st) => (
                  <tr key={st.id}>
                    <td><strong>{st.id}</strong></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <img src={st.photo} alt={st.name} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
                        <span>{st.name}</span>
                      </div>
                    </td>
                    <td>{st.registerNumber}</td>
                    <td><strong style={{ color: '#059669' }}>{st.cgpa}</strong></td>
                    <td>88.5%</td>
                    <td>{st.parent.phone} ({st.parent.fatherName})</td>
                    <td>
                      <button
                        onClick={() => alert(`Student: ${st.name}\nEmail: ${st.email}\nPhone: ${st.phone}\nParent: ${st.parent.fatherName} (${st.parent.phone})`)}
                        className="btn btn-secondary btn-sm"
                      >
                        View Info
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. TEACHER TIMETABLE TAB */}
      {activeDashboardTab === 'timetable' && (
        <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.5rem' }}>
            Faculty Lecture & Lab Schedule - Dr. S. Kabilan
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Time Slot</th>
                  <th>Subject</th>
                  <th>Class / Section</th>
                  <th>Venue</th>
                  <th>Session Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monday</strong></td>
                  <td>08:45 AM - 09:40 AM</td>
                  <td>CS8601 - AI & Machine Learning</td>
                  <td>III Year CSE - Sec A</td>
                  <td>LH-302</td>
                  <td><span className="badge badge-blue">Lecture</span></td>
                </tr>
                <tr>
                  <td><strong>Monday</strong></td>
                  <td>01:25 PM - 03:15 PM</td>
                  <td>CS8611 - AI & Data Science Lab</td>
                  <td>III Year CSE - Sec A</td>
                  <td>Lab-4 (Block B)</td>
                  <td><span className="badge badge-green">Lab</span></td>
                </tr>
                <tr>
                  <td><strong>Tuesday</strong></td>
                  <td>09:40 AM - 10:35 AM</td>
                  <td>CS8601 - AI & Machine Learning</td>
                  <td>III Year CSE - Sec A</td>
                  <td>LH-302</td>
                  <td><span className="badge badge-blue">Lecture</span></td>
                </tr>
                <tr>
                  <td><strong>Wednesday</strong></td>
                  <td>10:50 AM - 11:45 AM</td>
                  <td>CS8601 - AI & Machine Learning</td>
                  <td>III Year CSE - Sec A</td>
                  <td>LH-302</td>
                  <td><span className="badge badge-gold">Tutorial</span></td>
                </tr>
                <tr>
                  <td><strong>Thursday</strong></td>
                  <td>10:50 AM - 11:45 AM</td>
                  <td>CS8601 - AI & Machine Learning</td>
                  <td>III Year CSE - Sec A</td>
                  <td>LH-302</td>
                  <td><span className="badge badge-blue">Lecture</span></td>
                </tr>
                <tr>
                  <td><strong>Friday</strong></td>
                  <td>08:45 AM - 09:40 AM</td>
                  <td>CS8601 - AI & Machine Learning</td>
                  <td>III Year CSE - Sec A</td>
                  <td>LH-302</td>
                  <td><span className="badge badge-blue">Lecture</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 7. CLASS ANNOUNCEMENTS TAB */}
      {activeDashboardTab === 'notifications' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card-white" style={{ padding: '2rem', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a3a7b', marginBottom: '1.25rem' }}>
              Broadcast Class Notice or Assignment
            </h3>
            <form onSubmit={handleCreateAnnouncement} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="grid grid-cols-3 gap-4 md-grid-cols-1">
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Notice Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI Lab Mini-Project Submission Deadline"
                    value={newAnnTitle}
                    onChange={(e) => setNewAnnTitle(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Category</label>
                  <select
                    value={newAnnCategory}
                    onChange={(e) => setNewAnnCategory(e.target.value as any)}
                    className="form-select"
                  >
                    <option value="Academic">Academic</option>
                    <option value="Exam">Exam</option>
                    <option value="Event">Event</option>
                    <option value="Placement">Placement</option>
                  </select>
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Urgency</label>
                  <select
                    value={newAnnUrgency}
                    onChange={(e) => setNewAnnUrgency(e.target.value as any)}
                    className="form-select"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Important">Important</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Notice Details / Announcement Message</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Type announcement details visible to students and parents..."
                  value={newAnnContent}
                  onChange={(e) => setNewAnnContent(e.target.value)}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="btn btn-primary" style={{ gap: '0.4rem' }}>
                  <PlusCircle size={16} />
                  <span>Publish Notice to Portal</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
