import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import {
  GraduationCap,
  Users,
  Briefcase,
  Shield,
  KeyRound,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login, quickLogin, setActiveNav } = useApp();

  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [username, setUsername] = useState('STUDENT001');
  const [password, setPassword] = useState('student123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    if (role === 'student') {
      setUsername('STUDENT001');
      setPassword('student123');
    } else if (role === 'parent') {
      setUsername('PARENT001');
      setPassword('parent123');
    } else if (role === 'teacher') {
      setUsername('TEACHER001');
      setPassword('teacher123');
    } else if (role === 'admin') {
      setUsername('ADMIN001');
      setPassword('admin123');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login(selectedRole, username, password);
      setIsLoading(false);
    }, 400);
  };

  const roles = [
    { id: 'student' as UserRole, label: 'Student', icon: <GraduationCap size={22} />, desc: 'Attendance, Grades, Biodata' },
    { id: 'parent' as UserRole, label: 'Parent', icon: <Users size={22} />, desc: 'Ward Progress & Receipts' },
    { id: 'teacher' as UserRole, label: 'Teacher', icon: <Briefcase size={22} />, desc: 'Attendance & Mark Entry' },
    { id: 'admin' as UserRole, label: 'Admin', icon: <Shield size={22} />, desc: 'Institute Operations & Data' },
  ];

  return (
    <div
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.25rem',
        backgroundColor: '#f1f5f9',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 45px -10px rgba(10, 58, 123, 0.15)',
          border: '1px solid var(--border-light)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0a3a7b 0%, #1d61b6 100%)',
            padding: '2rem',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              backgroundColor: '#ffffff',
              color: '#0a3a7b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <GraduationCap size={32} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            SMEC SIMS Portal
          </h2>
          <p style={{ color: '#bae6fd', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
            Student Information Management System • Sri Muthukumaran Engineering College
          </p>
        </div>

        <div style={{ padding: '2rem' }}>
          
          {/* Role Selection Tabs */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '0.65rem' }}>
              Choose Your Login Role
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {roles.map((r) => {
                const active = selectedRole === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleRoleSelect(r.id)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.85rem 0.35rem',
                      borderRadius: '12px',
                      border: active ? '2px solid #0a3a7b' : '1.5px solid #e2e8f0',
                      backgroundColor: active ? '#ebf3fe' : '#ffffff',
                      color: active ? '#0a3a7b' : '#64748b',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ marginBottom: '4px', color: active ? '#0a3a7b' : '#64748b' }}>
                      {r.icon}
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: active ? 700 : 600 }}>{r.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick 1-Click Demo Testing Credentials */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0a3a7b', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={14} color="#f59e0b" />
                <span>Quick 1-Click Demo Login</span>
              </span>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Pre-configured</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => quickLogin('student')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '0.5rem 0.65rem',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>🎓 <strong>Student</strong> (STUDENT001)</span>
                <span style={{ color: '#0284c7', fontWeight: 700 }}>Test ↗</span>
              </button>
              <button
                type="button"
                onClick={() => quickLogin('parent')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '0.5rem 0.65rem',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>👨‍👩‍👦 <strong>Parent</strong> (PARENT001)</span>
                <span style={{ color: '#0284c7', fontWeight: 700 }}>Test ↗</span>
              </button>
              <button
                type="button"
                onClick={() => quickLogin('teacher')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '0.5rem 0.65rem',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>👨‍🏫 <strong>Teacher</strong> (TEACHER001)</span>
                <span style={{ color: '#0284c7', fontWeight: 700 }}>Test ↗</span>
              </button>
              <button
                type="button"
                onClick={() => quickLogin('admin')}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '0.5rem 0.65rem',
                  fontSize: '0.78rem',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>🛡️ <strong>Admin</strong> (ADMIN001)</span>
                <span style={{ color: '#f59e0b', fontWeight: 700 }}>Test ↗</span>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">
                {selectedRole === 'student' ? 'Student ID' : selectedRole === 'parent' ? 'Parent User ID' : selectedRole === 'teacher' ? 'Faculty ID' : 'Admin ID'}
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ paddingLeft: '38px' }}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div style={{ position: 'relative' }}>
                <KeyRound size={18} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingLeft: '38px', paddingRight: '40px' }}
                  className="form-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', fontWeight: 800, marginTop: '0.5rem' }}
            >
              {isLoading ? 'Verifying...' : `Sign In to ${selectedRole.toUpperCase()} Dashboard`}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};
