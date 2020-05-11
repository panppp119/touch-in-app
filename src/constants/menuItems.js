const menuItems = [
  { name: 'Dashboard', path: '/' },
  {
    name: 'Profile',
    path: '/profile',
    subMenu: [
      { name: 'Overview', path: '/overview' },
      { name: 'History', path: '/history' },
    ],
  },
  {
    name: 'Check-In',
    path: '/checkin',
    subMenu: [
      { name: 'Check-In', path: '/' },
      { name: 'Rules', path: '/rules' },
    ],
  },
  { name: 'Report', path: '/report' },
  {
    name: 'Operation Tools',
    path: '/operation_tools',
    subMenu: [
      { name: 'Users', path: '/users' },
      { name: 'Projects', path: '/projects' },
      { name: 'Check-In Type', path: '/checkin_type' },
    ],
  },
]

export default menuItems
