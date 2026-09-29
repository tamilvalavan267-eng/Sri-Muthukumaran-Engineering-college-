# Build a Demo Website and Student Portal for Sri Muthukumaran Engineering College

## Goal

Build a complete, working, professional, modern, responsive demo website for **Sri Muthukumaran Engineering College**. It should look like a real engineering college portal combined with a modern Student Information Management System, not a basic template or static mockup.

This is a demo/prototype, so use realistic sample data wherever a backend or database would normally be needed. The site must be fully navigable, and every major button must work within the demo.

**Priorities, in order:**
1. Professional UI/UX
2. Modern animations
3. Easy navigation
4. Mobile responsiveness
5. Working demo interactions
6. Image slideshows
7. Role-based dashboards
8. Realistic demo data
9. Clean typography
10. Premium visual appearance

**Focus areas:**
- **Public website:** College → Courses → Facilities → Admissions → Gallery → Contact → Fee Payment
- **Private portal:** Students → Parents → Teachers → Admin → Attendance → Marks → Timetable → Fees → Biodata → Reports

---

## Technical Requirements

- React and TypeScript
- Modern CSS/Tailwind if supported
- Responsive, reusable, component-based code with proper routing
- Form validation
- Local/mock data layer, with local storage where useful
- Changes made by teachers or admin during the demo must show up immediately in the relevant dashboards during the current session
- Keep the code clean and avoid unnecessary complexity

**Reusable components:** Navbar, Footer, Cards, Buttons, Modals, Image sliders, Tables, Charts, Dashboard sidebar, Login forms, Notifications, Profile sections.

---

## 1. Overall Design

- Modern, professional, trustworthy engineering-college style
- Premium blue and white palette, with light blue shades and subtle gradients as secondary colors
- White backgrounds with blue sections
- Glassmorphism where appropriate
- Rounded cards, soft shadows, clean spacing, professional typography
- Responsive on desktop, tablet, and mobile
- Smooth scrolling, micro-interactions on buttons and cards, smooth page transitions
- Scroll reveal animations, hover animations, animated counters
- Image carousel/slideshow sections
- Sticky navigation bar, mobile hamburger menu, loading animation
- It should feel like a premium college management website, not a simple template

## 2. Header / Navigation

A modern sticky header containing:
- College logo placeholder + "Sri Muthukumaran Engineering College"
- Navigation: Home, About Us, Facilities, Admissions, Gallery, Fee Payment, Contact, Login
- A prominent **Student Portal / Login** button
- The navbar becomes slightly transparent and blurred on scroll

## 3. Home Page

**Hero section**
- Large full-width college campus image/video-style background with a blue overlay
- Heading: "Empowering Students. Building the Future."
- Subheading: "Sri Muthukumaran Engineering College — Learn, Innovate, Achieve."
- Buttons: Explore College, Student Portal, Apply Now
- Smooth entrance animations
- Floating animated statistics with animated number counters:
  - 25+ Years of Excellence
  - 10+ Departments
  - 5000+ Students
  - 200+ Faculty
  - 50+ Facilities / Labs

**Hero image slider**
- Automatic slideshow with multiple college/campus/engineering images: Campus, Classrooms, Laboratories, Library, Students, Events
- Previous/next buttons and slide indicators

## 4. About Us Page

A detailed page with professional cards and image sections, covering:
- About the institution
- Vision
- Mission
- Principal's message
- Chairman/Management message
- Academic excellence
- Student development
- Placement focus

Include an image slideshow showing: College campus, Principal, Students, Faculty, Academic activities. Add scroll animations.

## 5. Facilities Page

Modern page with interactive cards for:
- Advanced Computer Labs
- Engineering Laboratories
- Central Library
- Smart Classrooms
- Auditorium
- Seminar Hall
- Sports Facilities
- Cafeteria
- Transportation
- Hostel
- Wi-Fi Campus
- Placement & Training Centre
- Innovation / Research Centre
- Medical Facilities

Each card has an image, title, short description, and a **View Details** button. Clicking opens an animated detail modal/page. Each major facility shows multiple images as a slideshow/gallery.

## 6. Admissions Page

**Admission process:** 1. Enquiry → 2. Application → 3. Document Verification → 4. Counselling → 5. Admission Confirmation

**Courses (sample engineering departments):**
- Computer Science and Engineering
- Information Technology
- Electronics and Communication Engineering
- Electrical and Electronics Engineering
- Mechanical Engineering
- Civil Engineering
- Artificial Intelligence and Data Science

Each course shows a course image, duration, eligibility, overview, and an Apply button. Add an animated "Apply Now" CTA.

## 7. Fee Payment Page

A modern fee payment interface for demo purposes.

**Inputs/selections:** Student ID, Student Name, Department, Academic Year, Semester, Fee Type (Tuition Fee, Hostel Fee, Transport Fee, Examination Fee, Other Fees)

**Display:** Total Fee, Paid Amount, Pending Amount, Payment Status

**Payment methods:** UPI, Card, Net Banking

Do NOT perform real transactions. After clicking **Pay Now**, show a simulated successful payment confirmation with Transaction ID, Date, Amount, and Payment Status.

## 8. Gallery Page

**Categories:** Campus, Events, Cultural, Sports, Labs, Students, Faculty, Workshops, Placements

- Modern masonry/grid layout
- Clicking an image opens a fullscreen lightbox with the image, caption, and previous/next buttons
- Automatic slideshow sections as well
- Use many images so the site feels visually rich

## 9. Contact Page

- College address, phone number, email, working hours
- Google Maps-style location section
- Contact form: Name, Email, Phone, Subject, Message, Submit. After submission, show a modern success notification
- Additional contacts: Admissions, Administration, Placement
- Use sample/demo contact information if exact details are unavailable

## 10. Login System (Most Important)

A modern login page with four roles: **Student, Parent, Teacher/Staff, Main Admin**. Use role-selection cards or tabs before login. Show a small **Demo Login Credentials** section so the site can be tested:

| Role | ID | Password |
|---|---|---|
| Student | STUDENT001 | student123 |
| Parent | PARENT001 | parent123 |
| Teacher | TEACHER001 | teacher123 |
| Admin | ADMIN001 | admin123 |

After successful login, redirect to the appropriate dashboard.

## 11. Student Dashboard

**Header info:** Profile photo, name, Student ID, Department, Year, Semester, Section

**Cards:**
- **Attendance:** overall percentage, subject-wise attendance, Present/Absent/Leave, with progress circles/bars
- **Marks:** internal, assignment, practical, and semester marks, plus subject-wise performance, shown with charts
- **Timetable:** weekly grid, Monday to Saturday. Columns: Time, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
- **Fees:** total fees, paid, pending, payment history
- **Profile / Biodata:** personal information, date of birth, gender, blood group, parent information, address, contact details, academic information
- **Notifications:** sample items such as internal exam schedule, holiday announcement, assignment deadline, fee reminder, college event

## 12. Parent Dashboard

Read-only access. Parents can VIEW but NOT edit marks or attendance. Show:
- Student profile
- Attendance
- Subject-wise marks
- Exam results
- Timetable
- Fee details
- Payment history
- Notifications
- Academic performance charts
- A **Contact Faculty** section

## 13. Teacher / Staff Dashboard

Teachers can INPUT and UPDATE:

**Attendance**
- Select Department, Year, Section, Subject, Date
- Show student list: Student ID | Student Name | Present/Absent
- Mark Present, Absent, or Leave
- **Save Attendance** button

**Marks Entry**
- Select Department, Year, Section, Subject, Exam Type
- Show: Student ID | Student Name | Marks
- Teacher enters marks
- Buttons: Save, Update, Reset

**Also:**
- **Timetable:** view their own timetable
- **Student Information:** view student biodata and academic information
- **Notifications:** create a demo announcement

## 14. Main Admin Dashboard

The most powerful dashboard.

**Animated statistics:** Total Students, Total Teachers, Total Departments, Today's Attendance, Pending Fees, Upcoming Exams

**Management sections:**
- **Student Management:** Add, Edit, View, Delete, Search
- **Teacher Management:** Add, Edit, View
- **Attendance Management:** View attendance, Modify attendance, Attendance reports
- **Marks Management:** View marks, Modify marks, Generate performance reports
- **Fees Management:** View payments, Pending fees, Payment history
- **Timetable Management:** View timetable, Add/edit timetable
- **Announcements:** Create, Edit, Delete
- **Gallery Management:** Add images, Remove images, Create gallery categories

## 15. Student Biodata Page

A dedicated student profile page with sample/demo information:
- **Personal Details:** Student ID, Full Name, Date of Birth, Gender, Blood Group, Aadhaar/ID placeholder, Phone, Email
- **Parent Details:** Father's Name, Mother's Name, Parent Contact, Occupation
- **Academic Details:** Department, Year, Semester, Section, Admission Year
- **Address:** Door Number, Street, City, District, State, Pincode

## 16. Dashboard Sidebar

A modern sidebar for all authenticated dashboards, with items that change by role:

- **Student:** Dashboard, Profile, Attendance, Marks, Timetable, Fees, Notifications, Logout
- **Parent:** Dashboard, Student Profile, Attendance, Marks, Timetable, Fees, Notifications, Logout
- **Teacher:** Dashboard, Students, Attendance Entry, Marks Entry, Timetable, Notifications, Logout
- **Admin:** Dashboard, Students, Teachers, Departments, Attendance, Marks, Fees, Timetable, Gallery, Announcements, Reports, Settings, Logout

## 17. Reports and Charts

Attractive, animated-on-load charts, for example: Attendance percentage, Subject performance, Semester performance, Fee collection, Department student count.

Use bar charts, line charts, doughnut/pie charts, and progress indicators.

## 18. Animations

Modern but not overloaded, smooth and professional:
- Fade-in, slide-up, slide-left/right, scale-in
- Hover elevation, button micro-interactions
- Animated counters
- Smooth page transitions, scroll reveal
- Image zoom on hover
- Carousel animations, modal animations
- Dashboard card animations, progress bar animations

## 19. Images

Images are very important. Use multiple high-quality images throughout, and every major page should have visual content. Use image sliders/carousels for: Campus, Facilities, Labs, Library, Events, Sports, Students, Faculty, Workshops, Cultural events, Placements.

If actual college photographs are unavailable, use suitable professional demo college/engineering campus images, structured so they can easily be replaced later. Do not repeat the same image everywhere.

## 20. Responsive Design

Must work properly on desktop, laptop, tablet, Android phone, and iPhone. Mobile navigation uses a hamburger menu. Dashboard tables should become horizontally scrollable or transform into mobile-friendly cards.

## 21. Demo Data

Create realistic sample data for Students, Parents, Teachers, Departments, Marks, Attendance, Timetable, Fees, and Notifications. The demo should feel like an actual working college management system. If no full backend is available, use local storage or a lightweight mock data layer so the demo stays interactive.

## 22. Required Demo Workflows

Make sure all of these work end to end:

- **Student:** Login → Student Dashboard → View Attendance → View Marks → View Timetable → View Fees → View Biodata
- **Parent:** Login → Parent Dashboard → View Student Information → View Attendance → View Marks → View Fees
- **Teacher:** Login → Teacher Dashboard → Select Student/Class → Enter Attendance → Save → Enter Marks → Save
- **Admin:** Login → Admin Dashboard → Manage Students → Manage Teachers → Manage Attendance → Manage Marks → Manage Fees → Manage Timetable → Manage Gallery → Manage Announcements

## 23. Footer

A professional footer containing:
- College logo/name
- **Quick Links:** About, Admissions, Facilities, Gallery, Contact
- **Student Portal:** Student Login, Parent Login, Teacher Login, Admin Login
- Contact information
- Social media icons
- Copyright: "© 2026 Sri Muthukumaran Engineering College. All Rights Reserved."

## 24. Final Quality Bar

The result should look like a real professional engineering college website combined with a modern Student Information Management System, with consistent blue-and-white branding throughout. Generate the complete working website, not only a static UI mockup.

---

I kept every requirement, list, and credential from your original and only changed the structure and wording. If you'd like, I can also make a shorter version for a tool with a length limit, or start building the site from this prompt.