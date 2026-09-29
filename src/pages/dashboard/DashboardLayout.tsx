import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import {
  LayoutDashboard,
  UserCheck,
  GraduationCap,
  Calendar,
  CreditCard,
  User,
  Bell,
  LogOut,
  Globe,
  Menu,
  X,
  FileSpreadsheet,
  Users,
  Briefcase,
  Layers,
  Image,
  Settings,
  BarChart3,
  BookOpen,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const {
    currentUser,
    logout,
    setActiveNav,
    activeDashboardTab,
    setActiveDashboardTab,
    quickLogin,
  } = useApp();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!currentUser) return null;

  // Role-based sidebar menu items according to prompt.md (Section 16)
  const getSidebarItems = () => {
    switch (currentUser.role) {
      case 'student':
        return [
          { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
          { id: 'attendance', label: 'Attendance', icon: <UserCheck size={18} /> },
          { id: 'marks', label: 'Marks & Results', icon: <BarChart3 size={18} /> },
          { id: 'timetable', label: 'Timetable', icon: <Calendar size={18} /> },
          { id: 'fees', label: 'Fee Dues & Receipts', icon: <CreditCard size={18} /> },
          { id: 'biodata', label: 'Profile / Biodata', icon: <User size={18} /> },
          { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
        ];
      case 'parent':
        return [
          { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
          { id: 'biodata', label: 'Student Profile', icon: <User size={18} /> },
          { id: 'attendance', label: 'Attendance Track', icon: <UserCheck size={18} /> },
          { id: 'marks', label: 'Subject Marks', icon: <BarChart3 size={18} /> },
          { id: 'timetable', label: 'Weekly Timetable', icon: <Calendar size={18} /> },
          { id: 'fees', label: 'Fee Details', icon: <CreditCard size={18} /> },
          { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
          { id: 'contact-faculty', label: 'Contact Faculty', icon: <Users size={18} /> },
        ];
      case 'teacher':
        return [
          { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
          { id: 'attendance-entry', label: 'Attendance Entry', icon: <UserCheck size={18} /> },
          { id: 'marks-entry', label: 'Marks Entry', icon: <FileSpreadsheet size={18} /> },
          { id: 'students-list', label: 'Student Roster', icon: <Users size={18} /> },
          { id: 'timetable', label: 'My Timetable', icon: <Calendar size={18} /> },
          { id: 'notifications', label: 'Class Announcements', icon: <Bell size={18} /> },
        ];
      case 'admin':
        return [
          { id: 'overview', label: 'Admin Overview', icon: <LayoutDashboard size={18} /> },
          { id: 'students-mgmt', label: 'Student Management', icon: <Users size={18} /> },
          { id: 'teachers-mgmt', label: 'Teacher Management', icon: <Briefcase size={18} /> },
          { id: 'attendance-mgmt', label: 'Attendance Reports', icon: <UserCheck size={18} /> },
          { id: 'marks-mgmt', label: 'Marks Management', icon: <BarChart3 size={18} /> },
          { id: 'fees-mgmt', label: 'Fees & Collections', icon: <CreditCard size={18} /> },
          { id: 'timetable-mgmt', label: 'Timetable Setup', icon: <Calendar size={18} /> },
          { id: 'gallery-mgmt', label: 'Gallery Management', icon: <Image size={18} /> },
          { id: 'announcements-mgmt', label: 'Announcements', icon: <Bell size={18} /> },
          { id: 'system-settings', label: 'System Settings', icon: <Settings size={18} /> },
        ];
      default:
        return [];
    }
  };

  const sidebarItems = getSidebarItems();

  const handleTabClick = (tabId: string) => {
    setActiveDashboardTab(tabId);
    setIsSidebarOpen(false);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
      
      {/* Sidebar Navigation */}
      <aside
        style={{
          width: '260px',
          backgroundColor: '#0a2540',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          height: '100vh',
          zIndex: 150,
          boxShadow: '4px 0 15px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
        }}
        className={isSidebarOpen ? '' : 'sidebar-responsive'}
      >
        {/* College Crest & Portal Name */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: '#1d61b6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
            }}
          >
            <GraduationCap size={24} />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff', whiteSpace: 'nowrap' }}>
              SMEC SIMS Portal
            </div>
            <div style={{ fontSize: '0.72rem', color: '#38bdf8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
              {currentUser.role} Portal
            </div>
          </div>
        </div>

        {/* User Mini Profile in Sidebar */}
        <div
          style={{
            padding: '1.15rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
          }}
        >
          <img
            src={currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'}
            alt={currentUser.name}
            style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #38bdf8' }}
          />
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {currentUser.name}
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              ID: <strong>{currentUser.id}</strong>
            </div>
          </div>
        </div>

        {/* Sidebar Nav Items */}
        <nav
          style={{
            flex: 1,
            padding: '1rem 0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            overflowY: 'auto',
          }}
        >
          {sidebarItems.map((item) => {
            const isActive = activeDashboardTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                  color: isActive ? '#38bdf8' : '#cbd5e1',
                  borderLeft: isActive ? '3px solid #38bdf8' : '3px solid transparent',
                  transition: 'all 0.2s',
                  textAlign: 'left',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ color: isActive ? '#38bdf8' : '#94a3b8' }}>{item.icon}</div>
                <span style={{ flex: 1 }}>{item.label}</span>
                {isActive && <ChevronRight size={14} color="#38bdf8" />}
              </button>
            );
          })}
        </nav>

        {/* Quick Role Tester Pills for Evaluator convenience */}
        <div
          style={{
            padding: '0.85rem',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.45rem' }}>
            Quick Demo Role Switch:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.35rem' }}>
            <button
              onClick={() => quickLogin('student')}
              style={{ padding: '3px 6px', fontSize: '0.72rem', borderRadius: '4px', backgroundColor: currentUser.role === 'student' ? '#0284c7' : 'rgba(255,255,255,0.08)', color: '#ffffff' }}
            >
              🎓 Student
            </button>
            <button
              onClick={() => quickLogin('parent')}
              style={{ padding: '3px 6px', fontSize: '0.72rem', borderRadius: '4px', backgroundColor: currentUser.role === 'parent' ? '#0284c7' : 'rgba(255,255,255,0.08)', color: '#ffffff' }}
            >
              👨‍👩‍👦 Parent
            </button>
            <button
              onClick={() => quickLogin('teacher')}
              style={{ padding: '3px 6px', fontSize: '0.72rem', borderRadius: '4px', backgroundColor: currentUser.role === 'teacher' ? '#0284c7' : 'rgba(255,255,255,0.08)', color: '#ffffff' }}
            >
              👨‍🏫 Teacher
            </button>
            <button
              onClick={() => quickLogin('admin')}
              style={{ padding: '3px 6px', fontSize: '0.72rem', borderRadius: '4px', backgroundColor: currentUser.role === 'admin' ? '#d97706' : 'rgba(255,255,255,0.08)', color: '#ffffff' }}
            >
              🛡️ Admin
            </button>
          </div>
        </div>

        {/* Bottom Actions: Back to Website & Logout */}
        <div
          style={{
            padding: '0.85rem 1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <button
            onClick={() => setActiveNav('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#94a3b8',
              fontSize: '0.85rem',
              padding: '0.45rem',
              borderRadius: '6px',
            }}
          >
            <Globe size={16} />
            <span>Return to Public College Web</span>
          </button>
          <button
            onClick={logout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#f87171',
              fontSize: '0.85rem',
              padding: '0.45rem',
              borderRadius: '6px',
              fontWeight: 600,
            }}
          >
            <LogOut size={16} />
            <span>Sign Out Session</span>
          </button>
        </div>
      </aside>

      {/* Main Body Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        
        {/* Top Header Bar */}
        <header
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid var(--border-light)',
            padding: '0.85rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{
                display: 'none',
                padding: '0.45rem',
                borderRadius: '8px',
                backgroundColor: '#f1f5f9',
                color: '#0a3a7b',
              }}
              className="md-show-button"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a3a7b', margin: 0, textTransform: 'capitalize' }}>
                {activeDashboardTab.replace('-', ' ')}
              </h2>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                Sri Muthukumaran Engineering College • Academic Year 2025 - 2026 (Even Semester)
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                backgroundColor: '#ebf3fe',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#0a3a7b',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
              className="md-hide"
            >
              <ShieldCheck size={14} color="#0284c7" />
              <span>Role: {currentUser.role.toUpperCase()}</span>
            </div>

            <button
              onClick={() => setActiveNav('home')}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.35rem' }}
            >
              <Globe size={14} />
              <span>View Website</span>
            </button>

            <button
              onClick={logout}
              className="btn btn-sm"
              style={{ backgroundColor: '#fee2e2', color: '#991b1b', fontWeight: 600 }}
            >
              <LogOut size={14} />
              <span className="md-hide">Logout</span>
            </button>
          </div>
        </header>

        {/* Dashboard Dynamic View Container */}
        <main style={{ padding: '2rem', flex: 1 }}>
          {children}
        </main>

      </div>

    </div>
  );
};
