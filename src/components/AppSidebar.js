import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { toggleUnfoldable, setSidebarVisibility } from '../features/uiSlice'; // Adjust path if needed

import { AppSidebarNav } from './AppSidebarNav'



// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  // const dispatch = useDispatch()
  // const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  // const sidebarShow = useSelector((state) => state.sidebarShow)

  const dispatch = useDispatch();
  const sidebarUnfoldable = useSelector((state) => state.ui.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.ui.sidebarShow);

  return (
    // <CSidebar
    //   className="border-end"
    //   colorScheme="dark"
    //   position="fixed"
    //   unfoldable={unfoldable}
    //   visible={sidebarShow}
    //   onVisibleChange={(visible) => {
    //     dispatch({ type: 'set', sidebarShow: visible })
    //   }}
    // >
    //   <CSidebarHeader className="border-bottom">
    //     <CSidebarBrand to="/">
    //    logo
    //     </CSidebarBrand>
    //     <CCloseButton
    //       className="d-lg-none"
    //       dark
    //       onClick={() => dispatch({ type: 'set', sidebarShow: false })}
    //     />
    //   </CSidebarHeader>
    //   <AppSidebarNav items={navigation} />
    //   <CSidebarFooter className="border-top d-none d-lg-flex">
    //     <CSidebarToggler
    //       onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
    //     />
    //   </CSidebarFooter>
    // </CSidebar>

    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={sidebarUnfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => dispatch(setSidebarVisibility(visible))}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">Logo</CSidebarBrand>
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler onClick={() => dispatch(toggleUnfoldable())} />
      </CSidebarFooter>
    </CSidebar>


  )
}

export default React.memo(AppSidebar)
