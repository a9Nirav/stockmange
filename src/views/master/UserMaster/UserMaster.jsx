import React from 'react'
import { CRow, CCol, CFormInput, CForm, CFormLabel, CButtonGroup } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCloudUpload, cilPencil, cilSearch, cilTrash } from '@coreui/icons'
import { useState, useEffect } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserMaster } from '../../../features/UserMasterSlice';


function UserMaster() {
  const dispatch = useDispatch();
  const { UserDatas, loading, error } = useSelector((state) => state.UserMaster);

  useEffect(() => {
    console.log("UserDatas in Component:", UserDatas);
}, [UserDatas]);



  useEffect(() => {
    const data = { UserId: "10" }; // Replace with the actual payload
    dispatch(GetUserMaster(data));
  }, [dispatch]);



  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!UserDatas.length) return <div>No data available</div>;


  return (
    <>
 

      {/* <UserForm/> */}

      <div className="">
        <Link to="/master/UserForm">
          <CButton color="success  text-white ms-2 ">+ User</CButton>
        </Link>
      </div>

      {/* User list  */}

      <div className="mt-4 d-flex justify-content-between">
        <h3 className=''>  User List</h3>
        <div className="d-flex">

          <CFormInput
            type="search"
            placeholder="Search..."


            className="me-2"
          />

          <CButton color="success d-flex justify-content-center align-self-center text-white py-1 ">
            <CIcon icon={cilCloudUpload} className='me-2 align-self-center text-white' />
            Export
          </CButton>


        </div>
      </div>

      <div>
        {/* <h3 className="mb-4">Vendor List</h3> */}
        <CTable hover responsive className='mt-4 '>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
              <CTableHeaderCell>Phone</CTableHeaderCell>
              <CTableHeaderCell>Join Date</CTableHeaderCell>
              <CTableHeaderCell>EmployeeId</CTableHeaderCell>
              <CTableHeaderCell className='text-center'>Action</CTableHeaderCell>

            </CTableRow>
          </CTableHead>


          <CTableBody>


            {UserDatas && UserDatas.length > 0 ? (
              UserDatas.map((ele, index) => (
                <CTableRow key={ele.employeeId}>
                  <CTableDataCell>{index + 1}</CTableDataCell>
                  <CTableDataCell>{ele.firstName}</CTableDataCell>
                  <CTableDataCell>{ele.emailId}</CTableDataCell>
                  <CTableDataCell>{ele.mobileNo}</CTableDataCell>
                  <CTableDataCell>{ele.joinedDate}</CTableDataCell>
                  <CTableDataCell>{ele.employeeId}</CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex justify-content-center align-items-center text-white">
                      <Link to={`/master/CompanyMasterForm/edit/${ele.id}`}>
                        <CButton color="success text-white" className="me-1">
                          <CIcon icon={cilPencil} className="me-2" />
                          Edit
                        </CButton>
                      </Link>
                      <CButton
                        color="primary"
                        className="me-1"
                        onClick={() => [setId(ele.id), setShowPopup(true)]}
                      >
                        <CIcon icon={cilSearch} className="me-2" />
                        View
                      </CButton>
                      <CButton
                        color="danger text-white"
                        className="me-1"
                        onClick={() => deleteCompnayMaster1(ele)}
                      >
                        <CIcon icon={cilTrash} className="me-1" />
                        DEL
                      </CButton>
                    </div>
                  </CTableDataCell>
                </CTableRow>
              ))
            ) : (
              <CTableRow>
                <CTableDataCell colSpan={7} className="text-center">
                  No data available
                </CTableDataCell>
              </CTableRow>
            )}

          </CTableBody>
        </CTable>
      </div>
    </>
  )
}

export default UserMaster