import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cibBuzzfeed,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [

  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },

  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },


  // all master 

  {
    component: CNavGroup,
    name: 'Master',
    to: '/master',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        name: 'UserMaster',
        to: '/master/UserMaster',
      },
      {
        component: CNavItem,
        name: 'VendorMaster',
        to: '/master/VendorMaster',
      },
      {
        component: CNavItem,
        name: 'SchoolMaster',
        to: '/master/SchoolMaster',
      },
      {
        component: CNavItem,
        name: 'SKUMaster',
        to: '/master/SKUMaster',
      },
      {
        component: CNavItem,
        name: 'CompanyMaster',
        to: '/master/CompanyMaster',
      },

    ],
  },



  // All Transactions

  {
    component: CNavGroup,
    name: 'Transaction',
    to: '/master',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        name: 'Purchase Order',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'GRN',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Dispatch List Generation',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Kitting',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Picking',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Loading',
        to: '/',
      },

    ],
  },


  // all Report
  
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/master',
    icon: <CIcon icon={cibBuzzfeed} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        name: 'Sales Reports',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Current Stock Report',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Daily dispatch details',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Order Pending',
        to: '/',
      },
     

    ],
  },

  // Utility
  {
    component: CNavGroup,
    name: 'Utility',
    to: '/master',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        name: 'Backup Database',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Restore Database',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Daily dispatch details',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Access Rights',
        to: '/',
      },
     

    ],
  },








  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },



  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Logoin/Logout',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      // {
      //   component: CNavItem,
      //   name: 'Register',
      //   to: '/register',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Error 404',
      //   to: '/404',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Error 500',
      //   to: '/500',
      // },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
