import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import { Modal } from '../../components/Modal';
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
} from 'lucide-react';

export const LoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, login, quickLogin } = useApp();

  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [username, setUsername] = useState('STUDENT001');
  const [password, setPassword] = useState('student123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // When role changes, pre-populate default demo credentials
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
      const ok = login(selectedRole, username, password);
      setIsLoading(false);
      if (ok) {
        setIsLoginModalOpen(false);
      }
    }, 400);
  };

  const roles = [
    { id: 'student' as UserRole, label: 'Student', icon: <GraduationCap size={20} />, desc: 'Attendance, Marks, Biodata' },
    { id: 'parent' as UserRole, label: 'Parent', icon: <Users size={20} />, desc: 'Ward Progress & Fee Receipts' },
    { id: 'teacher' as UserRole, label: 'Teacher', icon: <Briefcase size={20} />, desc: 'Mark Entry & Class Attendance' },
    { id: 'admin' as UserRole, label: 'Admin', icon: <Shield size={20} />, desc: 'Institute Operations & Data' },
  ];

  return (
    <Modal
      isOpen={isLoginModalOpen}
      onClose={() => setIsLoginModalOpen(false)}
      title="SMEC Unified Portal Login"
      maxWidth="580px"
    >
      <div>
        {/* Role Selection Tabs */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.65rem' }}>
            Select Your Role
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
                    padding: '0.75rem 0.35rem',
                    borderRadius: '12px',
                    border: active ? '2px solid #0a3a7b' : '1.5px solid #e2e8f0',
                    backgroundColor: active ? '#ebf3fe' : '#ffffff',
                    color: active ? '#0a3a7b' : '#64748b',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ marginBottom: '0.35rem', color: active ? '#0a3a7b' : '#64748b' }}>
                    {r.icon}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: active ? 700 : 600 }}>{r.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Credentials Quick-Fill Table */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '0.85rem 1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0a3a7b', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={14} color="#f59e0b" />
              <span>1-Click Quick Demo Sign-In</span>
            </span>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Instant testing</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => quickLogin('student')}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '0.45rem 0.65rem',
                fontSize: '0.78rem',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>🎓 <strong>Student</strong> (STUDENT001)</span>
              <span style={{ color: '#0284c7', fontWeight: 600 }}>Test ↗</span>
            </button>
            <button
              type="button"
              onClick={() => quickLogin('parent')}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '0.45rem 0.65rem',
                fontSize: '0.78rem',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>👨‍👩‍👦 <strong>Parent</strong> (PARENT001)</span>
              <span style={{ color: '#0284c7', fontWeight: 600 }}>Test ↗</span>
            </button>
            <button
              type="button"
              onClick={() => quickLogin('teacher')}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '0.45rem 0.65rem',
                fontSize: '0.78rem',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>👨‍🏫 <strong>Teacher</strong> (TEACHER001)</span>
              <span style={{ color: '#0284c7', fontWeight: 600 }}>Test ↗</span>
            </button>
            <button
              type="button"
              onClick={() => quickLogin('admin')}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '0.45rem 0.65rem',
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

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">
              {selectedRole === 'student' ? 'Student ID / Reg No' : selectedRole === 'parent' ? 'Parent User ID' : selectedRole === 'teacher' ? 'Faculty ID' : 'Admin ID'}
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
                placeholder="Enter ID"
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
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8',
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b' }}>
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </label>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('For demo, use default passwords: student123, parent123, teacher123, admin123'); }} style={{ color: '#0284c7' }}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
          >
            {isLoading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to {selectedRole.toUpperCase()} Dashboard</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

      </div>
    </Modal>
  );
};
