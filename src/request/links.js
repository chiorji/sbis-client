export const links = [
  { id: 'check-result', label: 'Check Result', to: '/result?page=validate' },
  { id: 'contact', label: 'Contact', to: '/#contacts' },
  { id: 'academics', label: 'Academics', to: '/academics' },
  { id: 'gallery', label: 'Gallery', to: '/gallery' },
  { id: 'staff', label: 'Staff Portal', to: '/login' }
];

export const adminLinks = [
  { id: 'overview', label: 'Overview', to: '/dashboard', icon: 'overview' },
  { id: 'students', label: 'Student List', to: '/dashboard/students', icon: 'studentList' },
  { id: 'check', label: 'New Result Entry', to: '/dashboard/results', icon: 'addResult' },
  { id: 'publish', label: 'Publish Result', to: '/dashboard/results/publish', icon: 'publishResult' }
];

export const superUserLinks = [
  { id: 'register', label: 'Register Student', to: '/dashboard/students/admission', icon: 'addStudent' },
  { id: 'stafflist', label: 'Staff List', to: '/dashboard/staff', icon: 'staffList' },
  { id: 'addstaff', label: 'Add New Staff', to: '/dashboard/staff/add', icon: 'addStaff' },
  { id: 'subcreate', label: 'Add Subject', to: '/dashboard/subjects/new', icon: 'createSubject' },
  { id: 'subjects', label: 'Subjects', to: '/dashboard/subjects', icon: 'subjects' },
  { id: 'genPin', label: 'Scratch Card', to: '/dashboard/results/pin', icon: 'generatePin' }
];
