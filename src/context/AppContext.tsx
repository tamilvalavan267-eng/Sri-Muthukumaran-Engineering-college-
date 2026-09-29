import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  UserRole,
  StudentBiodata,
  Teacher,
  AttendanceItem,
  SubjectMark,
  TimetableSlot,
  StudentFeeSummary,
  Facility,
  Course,
  GalleryItem,
  Announcement,
  AdmissionApplication,
  FeeTransaction,
} from '../types';
import {
  INITIAL_STUDENTS,
  INITIAL_TEACHERS,
  INITIAL_ATTENDANCE,
  INITIAL_MARKS,
  INITIAL_TIMETABLE,
  INITIAL_FEES,
  INITIAL_FACILITIES,
  INITIAL_COURSES,
  INITIAL_GALLERY,
  INITIAL_ANNOUNCEMENTS,
} from '../data/mockData';

export type NavPage = 'home' | 'about' | 'facilities' | 'admissions' | 'fees' | 'gallery' | 'contact' | 'portal';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface AppContextType {
  currentUser: User | null;
  activeNav: NavPage;
  setActiveNav: (nav: NavPage) => void;
  activeDashboardTab: string;
  setActiveDashboardTab: (tab: string) => void;
  selectedStudentId: string;
  setSelectedStudentId: (id: string) => void;
  login: (role: UserRole, id: string, pass: string) => boolean;
  quickLogin: (role: UserRole) => void;
  logout: () => void;

  // Live Data
  students: StudentBiodata[];
  teachers: Teacher[];
  attendance: AttendanceItem[];
  marks: SubjectMark[];
  timetable: TimetableSlot[];
  fees: StudentFeeSummary;
  facilities: Facility[];
  courses: Course[];
  gallery: GalleryItem[];
  announcements: Announcement[];
  applications: AdmissionApplication[];

  // Mutations
  saveAttendance: (subjectCode: string, records: { studentId: string; status: 'Present' | 'Absent' | 'Leave' | 'OD' }[]) => void;
  saveMarks: (subjectCode: string, examType: 'internal1' | 'internal2' | 'modelExam' | 'practical', marksData: { studentId: string; marks: number }[]) => void;
  processFeePayment: (data: { studentId: string; feeType: string; amount: number; paymentMethod: 'UPI' | 'Card' | 'Net Banking' }) => FeeTransaction;
  addStudent: (student: Omit<StudentBiodata, 'id'>) => void;
  updateStudent: (id: string, updated: Partial<StudentBiodata>) => void;
  deleteStudent: (id: string) => void;
  addTeacher: (teacher: Omit<Teacher, 'id'>) => void;
  updateTeacher: (id: string, updated: Partial<Teacher>) => void;
  addAnnouncement: (announcement: Omit<Announcement, 'id' | 'date'>) => void;
  deleteAnnouncement: (id: string) => void;
  addGalleryItem: (item: Omit<GalleryItem, 'id' | 'date'>) => void;
  deleteGalleryItem: (id: string) => void;
  submitAdmissionApplication: (app: Omit<AdmissionApplication, 'id' | 'submissionDate' | 'status'>) => string;

  // Modals & Feedback
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
  selectedFacilityModal: Facility | null;
  setSelectedFacilityModal: (f: Facility | null) => void;
  selectedApplyModalCourse: string | null;
  setSelectedApplyModalCourse: (c: string | null) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  resetAllDataToDefault: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & User Session
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('smec_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeNav, setActiveNavState] = useState<NavPage>(() => {
    return currentUser ? 'portal' : 'home';
  });

  const [activeDashboardTab, setActiveDashboardTab] = useState<string>('overview');
  const [selectedStudentId, setSelectedStudentId] = useState<string>('STUDENT001');

  // Modals
  const [selectedFacilityModal, setSelectedFacilityModal] = useState<Facility | null>(null);
  const [selectedApplyModalCourse, setSelectedApplyModalCourse] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const setActiveNav = (nav: NavPage) => {
    setActiveNavState(nav);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Persistent Collections in LocalStorage
  const [students, setStudents] = useState<StudentBiodata[]>(() => {
    const saved = localStorage.getItem('smec_students');
    return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
  });

  const [teachers, setTeachers] = useState<Teacher[]>(() => {
    const saved = localStorage.getItem('smec_teachers');
    return saved ? JSON.parse(saved) : INITIAL_TEACHERS;
  });

  const [attendance, setAttendance] = useState<AttendanceItem[]>(() => {
    const saved = localStorage.getItem('smec_attendance');
    return saved ? JSON.parse(saved) : INITIAL_ATTENDANCE;
  });

  const [marks, setMarks] = useState<SubjectMark[]>(() => {
    const saved = localStorage.getItem('smec_marks');
    return saved ? JSON.parse(saved) : INITIAL_MARKS;
  });

  const [timetable] = useState<TimetableSlot[]>(INITIAL_TIMETABLE);

  const [fees, setFees] = useState<StudentFeeSummary>(() => {
    const saved = localStorage.getItem('smec_fees');
    return saved ? JSON.parse(saved) : INITIAL_FEES;
  });

  const [facilities] = useState<Facility[]>(INITIAL_FACILITIES);
  const [courses] = useState<Course[]>(INITIAL_COURSES);

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('smec_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem('smec_announcements');
    return saved ? JSON.parse(saved) : INITIAL_ANNOUNCEMENTS;
  });

  const [applications, setApplications] = useState<AdmissionApplication[]>(() => {
    const saved = localStorage.getItem('smec_applications');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync to LocalStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('smec_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('smec_user');
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('smec_students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('smec_teachers', JSON.stringify(teachers));
  }, [teachers]);

  useEffect(() => {
    localStorage.setItem('smec_attendance', JSON.stringify(attendance));
  }, [attendance]);

  useEffect(() => {
    localStorage.setItem('smec_marks', JSON.stringify(marks));
  }, [marks]);

  useEffect(() => {
    localStorage.setItem('smec_fees', JSON.stringify(fees));
  }, [fees]);

  useEffect(() => {
    localStorage.setItem('smec_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('smec_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('smec_applications', JSON.stringify(applications));
  }, [applications]);

  // Auth Functions
  const login = (role: UserRole, id: string, pass: string): boolean => {
    const cleanId = id.trim().toUpperCase();
    const cleanPass = pass.trim();

    if (role === 'student') {
      const studentMatch = students.find((s) => s.id.toUpperCase() === cleanId) || (cleanId === 'STUDENT001' ? students[0] : null);
      if (cleanId === 'STUDENT001' && cleanPass === 'student123' && studentMatch) {
        const user: User = {
          id: studentMatch.id,
          name: studentMatch.name,
          role: 'student',
          email: studentMatch.email,
          avatar: studentMatch.photo,
          department: studentMatch.department,
          studentId: studentMatch.id,
        };
        setCurrentUser(user);
        setSelectedStudentId(studentMatch.id);
        setActiveNav('portal');
        setActiveDashboardTab('overview');
        showToast(`Welcome back, ${studentMatch.name}!`, 'success');
        return true;
      }
    } else if (role === 'parent') {
      if (cleanId === 'PARENT001' && cleanPass === 'parent123') {
        const student = students[0];
        const user: User = {
          id: 'PARENT001',
          name: `${student.parent.fatherName} (Parent)`,
          role: 'parent',
          email: student.parent.email,
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
          studentId: student.id,
        };
        setCurrentUser(user);
        setSelectedStudentId(student.id);
        setActiveNav('portal');
        setActiveDashboardTab('overview');
        showToast(`Welcome, Mr. ${student.parent.fatherName}. Monitoring ${student.name}`, 'success');
        return true;
      }
    } else if (role === 'teacher') {
      const teacher = teachers.find((t) => t.id.toUpperCase() === cleanId) || teachers[0];
      if (cleanId === 'TEACHER001' && cleanPass === 'teacher123') {
        const user: User = {
          id: teacher.id,
          name: teacher.name,
          role: 'teacher',
          email: teacher.email,
          avatar: teacher.photo,
          department: teacher.department,
        };
        setCurrentUser(user);
        setActiveNav('portal');
        setActiveDashboardTab('overview');
        showToast(`Welcome, ${teacher.name}! Faculty Portal active.`, 'success');
        return true;
      }
    } else if (role === 'admin') {
      if (cleanId === 'ADMIN001' && cleanPass === 'admin123') {
        const user: User = {
          id: 'ADMIN001',
          name: 'College Administrator (Dean / Office)',
          role: 'admin',
          email: 'admin.office@smec.ac.in',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        };
        setCurrentUser(user);
        setActiveNav('portal');
        setActiveDashboardTab('overview');
        showToast('Administrator privileges granted.', 'success');
        return true;
      }
    }

    showToast('Invalid credentials. Check the demo login table.', 'error');
    return false;
  };

  const quickLogin = (role: UserRole) => {
    if (role === 'student') login('student', 'STUDENT001', 'student123');
    if (role === 'parent') login('parent', 'PARENT001', 'parent123');
    if (role === 'teacher') login('teacher', 'TEACHER001', 'teacher123');
    if (role === 'admin') login('admin', 'ADMIN001', 'admin123');
    setIsLoginModalOpen(false);
  };

  const logout = () => {
    setCurrentUser(null);
    setActiveNav('home');
    showToast('Logged out successfully.', 'info');
  };

  // Data Mutations
  const saveAttendance = (
    subjectCode: string,
    records: { studentId: string; status: 'Present' | 'Absent' | 'Leave' | 'OD' }[]
  ) => {
    // Update the subject attendance for the active demo student
    setAttendance((prev) =>
      prev.map((item) => {
        if (item.subjectCode === subjectCode) {
          const studentRecord = records.find((r) => r.studentId === 'STUDENT001');
          const isPresent = studentRecord?.status === 'Present' || studentRecord?.status === 'OD';
          const newTotal = item.totalHours + 1;
          const newAttended = isPresent ? item.attendedHours + 1 : item.attendedHours;
          const newPercentage = Number(((newAttended / newTotal) * 100).toFixed(1));
          return {
            ...item,
            totalHours: newTotal,
            attendedHours: newAttended,
            percentage: newPercentage,
            status: newPercentage >= 75 ? 'Eligible' : newPercentage >= 65 ? 'Borderline' : 'Shortage',
          };
        }
        return item;
      })
    );
    showToast(`Attendance for ${subjectCode} saved and synced across all portals!`, 'success');
  };

  const saveMarks = (
    subjectCode: string,
    examType: 'internal1' | 'internal2' | 'modelExam' | 'practical',
    marksData: { studentId: string; marks: number }[]
  ) => {
    const studentMarkObj = marksData.find((m) => m.studentId === 'STUDENT001');
    if (studentMarkObj) {
      setMarks((prev) =>
        prev.map((item) => {
          if (item.subjectCode === subjectCode) {
            const updated = { ...item, [examType]: studentMarkObj.marks };
            const i1Norm = (updated.internal1 / 50) * 10;
            const i2Norm = (updated.internal2 / 50) * 10;
            const modelNorm = (updated.modelExam / 100) * 20;
            const totalNorm = Number((i1Norm + i2Norm + modelNorm).toFixed(1));
            updated.totalInternalNormalized = totalNorm;
            updated.status = totalNorm >= 32 ? 'Distinction' : totalNorm >= 20 ? 'Passed' : 'Needs Improvement';
            return updated;
          }
          return item;
        })
      );
    }
    showToast(`Marks for ${subjectCode} (${examType.toUpperCase()}) updated immediately!`, 'success');
  };

  const processFeePayment = (data: {
    studentId: string;
    feeType: string;
    amount: number;
    paymentMethod: 'UPI' | 'Card' | 'Net Banking';
  }): FeeTransaction => {
    const txnId = `TXN-SMEC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const recNo = `REC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const today = new Date().toISOString().split('T')[0];

    const newTxn: FeeTransaction = {
      transactionId: txnId,
      date: today,
      amount: data.amount,
      feeType: data.feeType,
      paymentMethod: data.paymentMethod,
      status: 'Success',
      receiptNo: recNo,
    };

    setFees((prev) => {
      const newPaid = prev.paidAmount + data.amount;
      const newPending = Math.max(0, prev.totalFee - newPaid);
      return {
        ...prev,
        paidAmount: newPaid,
        pendingAmount: newPending,
        status: newPending === 0 ? 'Paid' : 'Partial',
        history: [newTxn, ...prev.history],
      };
    });

    showToast(`Payment of ₹${data.amount.toLocaleString()} processed successfully! Receipt: ${recNo}`, 'success');
    return newTxn;
  };

  const addStudent = (studentData: Omit<StudentBiodata, 'id'>) => {
    const newId = `STUDENT${String(students.length + 1).padStart(3, '0')}`;
    const newStudent: StudentBiodata = { ...studentData, id: newId };
    setStudents((prev) => [newStudent, ...prev]);
    showToast(`Student ${newStudent.name} (${newId}) enrolled successfully!`, 'success');
  };

  const updateStudent = (id: string, updated: Partial<StudentBiodata>) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, ...updated } : s)));
    showToast(`Student ${id} details updated.`, 'info');
  };

  const deleteStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    showToast(`Student ${id} record removed.`, 'warning');
  };

  const addTeacher = (teacherData: Omit<Teacher, 'id'>) => {
    const newId = `TEACHER${String(teachers.length + 1).padStart(3, '0')}`;
    const newTeacher: Teacher = { ...teacherData, id: newId };
    setTeachers((prev) => [...prev, newTeacher]);
    showToast(`Faculty ${newTeacher.name} appointed successfully!`, 'success');
  };

  const updateTeacher = (id: string, updated: Partial<Teacher>) => {
    setTeachers((prev) => prev.map((t) => (t.id === id ? { ...t, ...updated } : t)));
    showToast(`Teacher ${id} profile updated.`, 'info');
  };

  const addAnnouncement = (data: Omit<Announcement, 'id' | 'date'>) => {
    const newAnn: Announcement = {
      ...data,
      id: `ann-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
    };
    setAnnouncements((prev) => [newAnn, ...prev]);
    showToast('New announcement broadcasted to portals.', 'success');
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    showToast('Announcement removed.', 'info');
  };

  const addGalleryItem = (data: Omit<GalleryItem, 'id' | 'date'>) => {
    const newItem: GalleryItem = {
      ...data,
      id: `gal-${Date.now()}`,
      date: 'March 2026',
    };
    setGallery((prev) => [newItem, ...prev]);
    showToast('Photo added to college gallery.', 'success');
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
    showToast('Photo removed from gallery.', 'info');
  };

  const submitAdmissionApplication = (data: Omit<AdmissionApplication, 'id' | 'submissionDate' | 'status'>): string => {
    const appId = `SMEC-ADM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApp: AdmissionApplication = {
      ...data,
      id: appId,
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'Submitted',
    };
    setApplications((prev) => [newApp, ...prev]);
    showToast(`Admission Application #${appId} submitted successfully!`, 'success');
    return appId;
  };

  const resetAllDataToDefault = () => {
    localStorage.clear();
    setStudents(INITIAL_STUDENTS);
    setTeachers(INITIAL_TEACHERS);
    setAttendance(INITIAL_ATTENDANCE);
    setMarks(INITIAL_MARKS);
    setFees(INITIAL_FEES);
    setGallery(INITIAL_GALLERY);
    setAnnouncements(INITIAL_ANNOUNCEMENTS);
    setApplications([]);
    showToast('Demo data reset to initial default state.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        activeNav,
        setActiveNav,
        activeDashboardTab,
        setActiveDashboardTab,
        selectedStudentId,
        setSelectedStudentId,
        login,
        quickLogin,
        logout,
        students,
        teachers,
        attendance,
        marks,
        timetable,
        fees,
        facilities,
        courses,
        gallery,
        announcements,
        applications,
        saveAttendance,
        saveMarks,
        processFeePayment,
        addStudent,
        updateStudent,
        deleteStudent,
        addTeacher,
        updateTeacher,
        addAnnouncement,
        deleteAnnouncement,
        addGalleryItem,
        deleteGalleryItem,
        submitAdmissionApplication,
        toasts,
        showToast,
        removeToast,
        selectedFacilityModal,
        setSelectedFacilityModal,
        selectedApplyModalCourse,
        setSelectedApplyModalCourse,
        isLoginModalOpen,
        setIsLoginModalOpen,
        resetAllDataToDefault,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
