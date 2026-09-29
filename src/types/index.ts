export type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
  department?: string;
  studentId?: string; // For parents and students
}

export interface StudentBiodata {
  id: string;
  registerNumber: string;
  name: string;
  department: string;
  departmentCode: string;
  year: number;
  semester: number;
  section: string;
  batch: string;
  dob: string;
  gender: 'Male' | 'Female' | 'Other';
  bloodGroup: string;
  email: string;
  phone: string;
  aadhaarNo: string;
  admissionYear: number;
  quota: 'Government (TNEA)' | 'Management';
  photo: string;
  cgpa: number;
  rank: number;
  mentor: string;
  parent: {
    fatherName: string;
    motherName: string;
    guardianName?: string;
    phone: string;
    altPhone: string;
    email: string;
    occupation: string;
    annualIncome: string;
  };
  address: {
    doorNo: string;
    street: string;
    area: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
  };
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  department: string;
  departmentCode: string;
  email: string;
  phone: string;
  qualification: string;
  experienceYears: number;
  specialization: string;
  photo: string;
  assignedSubjects: string[];
}

export interface AttendanceItem {
  subjectCode: string;
  subjectName: string;
  facultyName: string;
  totalHours: number;
  attendedHours: number;
  percentage: number;
  status: 'Eligible' | 'Borderline' | 'Shortage';
}

export interface DailyAttendanceRecord {
  date: string;
  department: string;
  year: number;
  section: string;
  subjectCode: string;
  records: {
    studentId: string;
    studentName: string;
    status: 'Present' | 'Absent' | 'Leave' | 'OD';
  }[];
}

export interface SubjectMark {
  subjectCode: string;
  subjectName: string;
  credits: number;
  internal1: number; // Max 50
  internal2: number; // Max 50
  modelExam: number; // Max 100
  practical?: number; // Max 100 if lab
  semesterGrade?: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'RA';
  totalInternalNormalized: number; // Max 20 or 40
  status: 'Passed' | 'Distinction' | 'Needs Improvement';
}

export interface TimetableSlot {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  timeSlot: string; // e.g. "08:45 AM - 09:40 AM"
  subjectCode: string;
  subjectName: string;
  facultyName: string;
  roomNo: string;
  type: 'Lecture' | 'Lab' | 'Tutorial' | 'Library / Seminar';
}

export interface FeeTransaction {
  transactionId: string;
  date: string;
  amount: number;
  feeType: string;
  paymentMethod: 'UPI' | 'Card' | 'Net Banking' | 'Cash / DD';
  status: 'Success' | 'Pending' | 'Failed';
  receiptNo: string;
}

export interface StudentFeeSummary {
  studentId: string;
  studentName: string;
  department: string;
  academicYear: string;
  semester: number;
  tuitionFee: number;
  hostelFee: number;
  transportFee: number;
  examFee: number;
  specialLabFee: number;
  totalFee: number;
  paidAmount: number;
  pendingAmount: number;
  dueDate: string;
  status: 'Paid' | 'Partial' | 'Pending';
  history: FeeTransaction[];
}

export interface Facility {
  id: string;
  title: string;
  category: 'Academic' | 'Infrastructure' | 'Campus Life' | 'Career & Health';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  images: string[];
  specs: string[];
  equipment: string[];
  timing: string;
  incharge: string;
  capacity?: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  degree: 'B.E.' | 'B.Tech.' | 'M.E.' | 'M.B.A.';
  department: string;
  duration: string;
  intake: number;
  eligibility: string;
  description: string;
  careers: string[];
  feePerYear: number;
  image: string;
  highlights: string[];
  hodName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Labs' | 'Cultural' | 'Sports' | 'Events' | 'Placements';
  imageUrl: string;
  caption: string;
  date: string;
  eventYear: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Academic' | 'Exam' | 'Event' | 'Fees' | 'Placement';
  urgency: 'Normal' | 'Important' | 'Urgent';
  targetRole: UserRole[] | 'all';
  author: string;
}

export interface AdmissionApplication {
  id: string;
  fullName: string;
  gender: string;
  dob: string;
  email: string;
  phone: string;
  parentName: string;
  parentPhone: string;
  address: string;
  qualifyingExam: 'HSC (+2 Academic)' | 'HSC (+2 Vocational)' | 'Diploma (Lateral Entry)';
  hscSchool: string;
  mathsMarks: number;
  physicsMarks: number;
  chemistryMarks: number;
  cutoff: number;
  preferredCourse: string;
  secondChoiceCourse: string;
  quota: 'Counseling (TNEA)' | 'Management Quota';
  submissionDate: string;
  status: 'Submitted' | 'Verified' | 'Admitted';
}
