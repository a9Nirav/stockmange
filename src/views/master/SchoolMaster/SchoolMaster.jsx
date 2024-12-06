import React from 'react'
import { CRow, CCol, CFormInput, CForm, CFormLabel, CButtonGroup } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCloudUpload, cilPencil, cilSearch, cilTrash } from '@coreui/icons'
import { useState } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";
import { Link } from 'react-router-dom';


function SchoolMaster() {

    const vendors = [
        { id: 1, name: "Vendor Nirav", email: "vendorA@example.com", phone: "1234567890", gstNumber: "GST001hfeirhifeurhi" },
        { id: 2, name: "Vendor Rajvaja", email: "vendorB@example.com", phone: "0987654321", gstNumber: "GST00hfeirhifeurhi2" },
        { id: 3, name: "Vendor Vivek v", email: "vendorC@example.com", phone: "1122334455", gstNumber: "GST00hfeirhifeurhi3" },
    ];

    const handleEdit = (id) => {
        console.log(`Edit vendor with ID: ${id}`);
    };

    const handleView = (id) => {
        console.log(`View vendor with ID: ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Delete vendor with ID: ${id}`);
    };
    return (
        <>
            {/* school form  */}

            <div className="">
                <Link to="/master/SchoolForm">
                    <CButton color="success  text-white ms-2 ">+ School Master</CButton>
                </Link>
            </div>



            <div className="mt-4 d-flex justify-content-between">
                <h3 className=''>  School List</h3>
                <div className="d-flex">

                    <CFormInput
                        type="search"
                        placeholder="Search..."


                        className="me-2"
                    />



                    <CButton color="success d-flex justify-content-center align-self-center text-white">
                        <CIcon icon={cilCloudUpload} className='me-2 align-self-center' />Export</CButton>

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

                            <CTableHeaderCell>Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>


                    <CTableBody>


                        {vendors.map((ele, index) => (
                            <CTableRow key={ele.id}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{ele.name}</CTableDataCell>
                                <CTableDataCell>{ele.email}</CTableDataCell>
                                <CTableDataCell>{ele.phone}</CTableDataCell>


                                <CTableDataCell className='' >
                                    <div className="d-flex  align-self-center h-100">
                                        <Link to={""}>
                                            <CButton color="success d-flex justify-content-center align-self-center text-white me-1 py-1">
                                                <CIcon icon={cilPencil} className="me-2 align-self-center" />
                                                Edit
                                            </CButton>
                                        </Link>

                                        <CButton o color="primary d-flex justify-content-center align-self-center me-1 py-1">
                                            <CIcon icon={cilSearch} className='me-2 align-self-center' />
                                            View
                                        </CButton>

                                        {/* <CButton onClick={()=>{dispatch(deleteCompnayMaster(ele.id))}} color="danger d-flex justify-content-center align-self-center me-1 text-white py-1">
                                        <CIcon icon={cilTrash} className='me-1 align-self-center' />
                                        DEL
                                    </CButton> */}
                                        <CButton color="danger d-flex justify-content-center align-self-center me-1 text-white py-1">
                                            <CIcon icon={cilTrash} className='me-1 align-self-center' />
                                            DEL
                                        </CButton>

                                    </div>



                                </CTableDataCell>
                            </CTableRow>
                        ))}
                    </CTableBody>
                </CTable>
            </div>
        </>
    )
}

export default SchoolMaster