import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NotificationToast } from './components/NotificationToast';
import { FacilityDetailModal } from './components/FacilityDetailModal';
import { AdmissionApplyModal } from './components/AdmissionApplyModal';
import { LoginModal } from './pages/auth/LoginModal';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { FacilitiesPage } from './pages/public/FacilitiesPage';
import { AdmissionsPage } from './pages/public/AdmissionsPage';
import { FeePaymentPage } from './pages/public/FeePaymentPage';
import { GalleryPage } from './pages/public/GalleryPage';
import { ContactPage } from './pages/public/ContactPage';

// Auth & Dashboard Pages
import { LoginPage } from './pages/auth/LoginPage';
import { DashboardLayout } from './pages/dashboard/DashboardLayout';
import { StudentDashboard } from './pages/dashboard/StudentDashboard';
import { ParentDashboard } from './pages/dashboard/ParentDashboard';
import { TeacherDashboard } from './pages/dashboard/TeacherDashboard';
import { AdminDashboard } from './pages/dashboard/AdminDashboard';

const MainRouter: React.FC = () => {
  const { activeNav, currentUser } = useApp();

  // If user is inside portal
  if (activeNav === 'portal') {
    if (!currentUser) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <LoginPage />
          </main>
          <Footer />
        </div>
      );
    }

    // Authenticated Dashboard Layout
    return (
      <DashboardLayout>
        {currentUser.role === 'student' && <StudentDashboard />}
        {currentUser.role === 'parent' && <ParentDashboard />}
        {currentUser.role === 'teacher' && <TeacherDashboard />}
        {currentUser.role === 'admin' && <AdminDashboard />}
      </DashboardLayout>
    );
  }

  // Public Website Pages
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {activeNav === 'home' && <HomePage />}
        {activeNav === 'about' && <AboutPage />}
        {activeNav === 'facilities' && <FacilitiesPage />}
        {activeNav === 'admissions' && <AdmissionsPage />}
        {activeNav === 'fees' && <FeePaymentPage />}
        {activeNav === 'gallery' && <GalleryPage />}
        {activeNav === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainRouter />
      {/* Global Interactive Overlays */}
      <FacilityDetailModal />
      <AdmissionApplyModal />
      <LoginModal />
      <NotificationToast />
    </AppProvider>
  );
}

export default App;
