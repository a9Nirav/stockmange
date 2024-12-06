import React, { useEffect } from 'react'

import { CRow, CCol, CFormInput, CForm, CFormLabel, CButtonGroup } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCloudUpload, cilPencil, cilSearch, cilTrash } from '@coreui/icons'
import { useState } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";
import { Link } from 'react-router-dom';
import { GetSKUMaster } from '../../../features/SKUMasterSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useUserContext } from '../../../features/UserProvider';

function SKUMaster() {

    const { userId } = useUserContext();

    const dispatch = useDispatch()
    const { SKUDatas } = useSelector((state) => state.SKUMaster)

    // useEffect(()=>{
    //     const data = {userId};
    //     dispatch(GetSKUMaster(SKUDatas))
    //     console.log(SKUDatas)
    // },[])

    useEffect(() => {
       
        if (userId) {
            const data = { userId }; // Include userId in the payload
         const ans =   dispatch(GetSKUMaster({ userId, data }));
         console.log(ans)
         
        } else {
            console.error("User ID is missing");
        }
    }, [userId, dispatch]);







    return (
        <>
          

            <div className="">
                <Link to="/master/SKUMasterForm">
                    <CButton color="success  text-white ms-2 ">+ SKU</CButton>
                </Link>
            </div>


            {/* sku list  */}

            <div className="mt-4 d-flex justify-content-between">
                <h3 className=''>  SKU List</h3>
                <div className="d-flex">

                    <CFormInput
                        type="search"
                        placeholder="Search..."


                        className="me-2"
                    />

                    <CButton color="success d-flex justify-content-center align-self-center">
                        <CIcon icon={cilCloudUpload} className='me-2 align-self-center' />Export</CButton>

                </div>
            </div>

            <div>
                {/* <h3 className="mb-4">Vendor List</h3> */}
                <CTable hover responsive className='mt-4 ' >
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell>#</CTableHeaderCell>
                            <CTableHeaderCell>Name</CTableHeaderCell>
                            <CTableHeaderCell>Code</CTableHeaderCell>
                            <CTableHeaderCell>Category</CTableHeaderCell>
                            <CTableHeaderCell>EAN Code</CTableHeaderCell>
                            <CTableHeaderCell>Cost(Rs.)</CTableHeaderCell>
                            <CTableHeaderCell>Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>

                        {SKUDatas && SKUDatas.length > 0 ? (
                            SKUDatas.map((ele, index) => (
                                <CTableRow key={ele.id}>
                                    <CTableDataCell>{index + 1}</CTableDataCell>
                                    <CTableDataCell>{ele.textbookName}</CTableDataCell>
                                    <CTableDataCell>{ele.itemCode}</CTableDataCell>
                                    <CTableDataCell>{ele.category}</CTableDataCell>
                                    <CTableDataCell>{ele.eanCode}</CTableDataCell>
                                    <CTableDataCell>{ele.costPrice}</CTableDataCell>
                                    <CTableDataCell className='d-flex  '>

                                        <CButton color="success d-flex justify-content-center align-self-center me-1 py-1">
                                            <CIcon icon={cilPencil} className='me-2 align-self-center' />
                                            Edit
                                        </CButton>

                                        <CButton color="primary d-flex justify-content-center align-self-center me-1 py-1">
                                            <CIcon icon={cilSearch} className='me-2 align-self-center' />
                                            View
                                        </CButton>

                                        <CButton color="danger d-flex justify-content-center align-self-center me-1 text-white py-1">
                                            <CIcon icon={cilTrash} className='me-1 align-self-center' />
                                            DEL
                                        </CButton>

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

export default SKUMaster