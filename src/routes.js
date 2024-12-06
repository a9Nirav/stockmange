import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


// All Master 
const UserMaster = React.lazy(() => import('./views/master/UserMaster/UserMaster'))
const VendorMaster = React.lazy(() => import('./views/master/VendorMaster/VendorMaster'))
const SchoolMaster = React.lazy(() => import('./views/master/SchoolMaster/SchoolMaster'))
const SKUMaster = React.lazy(() => import('./views/master/SKUMaster/SKUMaster'))
const CompanyMaster = React.lazy(() => import('./views/master/CompanyMaster/CompanyMaster'))

const LoginPage = React.lazy(() => import('./views/pages/login/Login'))




// All Forms 
const CompanyMasterForm = React.lazy(() => import('./views/master/CompanyMaster/CompanyMasterForm'))
const VendorForm = React.lazy(() => import('./views/master/VendorMaster/VendorForm'))
const UserForm = React.lazy(() => import('./views/master/UserMaster/UserForm'))
const SchoolForm = React.lazy(() => import('./views/master/SchoolMaster/SchoolForm'))
const SKUMasterForm = React.lazy(() => import('./views/master/SKUMaster/SKUMasterForm'))



// Demo
const DemoPage = React.lazy(() => import('./views/pages/Demo'))











const Charts = React.lazy(() => import('./views/charts/Charts'))







// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // { path: '/dashboard', name: 'LoginPage', element: LoginPage },





  // { path: '/master', name: 'master', element: master, exact: true },
  { path: '/master/UserMaster', name: 'UserMaster', element: UserMaster },
  { path: '/master/VendorMaster', name: 'VendorMaster', element: VendorMaster },
  { path: '/master/SchoolMaster', name: 'SchoolMaster', element: SchoolMaster },
  { path: '/master/SKUMaster', name: 'SKUMaster', element: SKUMaster },
  { path: '/master/CompanyMaster', name: 'CompanyMaster', element: CompanyMaster },



  { path: '/master/CompanyMasterForm', name: 'CompanyMasterForm', element: CompanyMasterForm },
  { path: '/master/CompanyMasterForm/edit/:id', name: 'CompanyMasterForm', element: CompanyMasterForm },
  // { path: '/master/CompanyMaster/edit/:id', name: 'CompanyMasterFormEdit', element: CompanyMasterFormEdit },


  // vender form 
  { path: '/master/VendorForm', name: 'VendorForm', element:VendorForm },
  { path: '/master/VendorForm/edit/:id', name: 'VendorForm', element: VendorForm },


  // userform 
  { path: '/master/UserForm', name: 'UserForm', element:UserForm  },

  // SchoolForm
  { path: '/master/SchoolForm', name: 'SchoolForm', element:SchoolForm  },

  // sku master form 
  { path: '/master/SKUMasterForm', name: 'SKUMasterForm', element:SKUMasterForm  },






 
  { path: '/charts', name: 'Charts', element: Charts },


  { path: '/DemoPage', name: 'DemoPage', element: DemoPage },





  // { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
