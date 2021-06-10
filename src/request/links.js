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
  { id: 'check', label: 'New Result Entry', to: '/dashboard/results/entry', icon: 'addResult' },
  { id: 'publish', label: 'Publish Result', to: '/dashboard/results/publish', icon: 'publishResult' }
];

export const superUserLinks = [
  { id: 'register', label: 'Register Student', to: '/dashboard/register', icon: 'addStudent' },
  { id: 'stafflist', label: 'Staff List', to: '/dashboard/staff/details', icon: 'staffList' },
  { id: 'addstaff', label: 'Add New Staff', to: '/dashboard/staff/details/add', icon: 'addStaff' },
  { id: 'subcreate', label: 'Create Subject', to: '/dashboard/subjects/create', icon: 'createSubject' },
  { id: 'subjects', label: 'Subjects', to: '/dashboard/subjects', icon: 'subjects' },
  { id: 'genPin', label: 'Generate Pin', to: '/dashboard/results/pin', icon: 'generatePin' }
];
