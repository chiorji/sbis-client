export const links = [
  {id: 'check-result', label: 'Check Result', to: '/result?page=validate'},
  {id: 'contact', label: 'Contact', to: '/#contacts'},
  {id: 'academics', label: 'Academics', to: '/academics'},
  {id: 'gallery', label: 'Gallery', to: '/gallery'},
  {id: 'staff', label: 'Staff Portal', to: '/login'}
];

export const adminLinks = [
  {id: 'overview', label: 'Overview', to: '/dashboard'},
  {id: 'students', label: 'Student List', to: '/dashboard/students'},
  {id: 'register', label: 'Register Student', to: '/dashboard/register'},
  {id: 'check', label: 'New Result Entry', to: '/dashboard/result-entry'}
];


export const superUserLinks = [
  {id: 'addstaff', label: 'Add New Staff', to: '/dashboard/add-new-staff'},
  {id: 'stafflist', label: 'Staff List', to: '/dashboard/staff-list'},
  {id: 'bannedstaff', label: 'Banned Staff', to: '/dashboard/banned-staff'}
];
