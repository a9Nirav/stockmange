import React, { useEffect } from 'react'
import './VendorMaster.css'
import { CRow, CCol, CFormInput, CForm, CFormLabel, CButtonGroup } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCloudUpload, cilPencil, cilSearch, cilTrash } from '@coreui/icons'
import { useState } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";
import { Link } from 'react-router-dom'
import { GetVendorData, deleteVendorMaster } from '../../../features/vendorMasterSlice'
import { useDispatch, useSelector } from 'react-redux';
import VendorMasterModel from './VendorMasterModal'




function VendorMaster() {
    const dispatch = useDispatch()
    // const {Vendordatas,loading} = useSelector((state)=>state.VendorMaster)
    const { Vendordatas, loading } = useSelector((state) => state.VendorMaster)

    // useEffect(() => {
    //     dispatch(GetVendorData())
    //     console.log(Vendordatas)

    // }, [])

    useEffect(() => {
        const data = { UserId: "10" }; // Replace with the actual payload
        dispatch(GetVendorData(Vendordatas));
      }, []);


    // delete
    const deleteVendorMaster1 = (ele) => {
        if (window.confirm(`Are you sure you want to delete "${ele.VendorName}"?`)) {
            if (ele && ele.id) {
                dispatch(deleteVendorMaster(ele.id));
            } else {
                console.error("Invalid company data for deletion:", ele);
            }
        }
    };
    


    // Modal 
    const [id, setId] = useState();
    const [showPopup, setShowPopup] = useState(false)









    return (
        <>


            {showPopup && <VendorMasterModel id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}


            {/* VendorMaster form  */}




            <div className="">
                <Link to="/master/VendorForm">
                    <CButton color="success  text-white ms-2 ">+ Vender</CButton>
                </Link>
            </div>




            {/* vendor list  */}

            <div className="mt-4 d-flex justify-content-between">
                <h3 className=''>  Vendor List</h3>
                <div className="d-flex">

                    <CFormInput
                        type="search"
                        placeholder="Search..."


                        className="me-2"
                    />

                    <CButton color="success d-flex justify-content-center align-self-center text-white py-1">
                        <CIcon icon={cilCloudUpload} className='me-2 align-self-center' />Export</CButton>

                </div>
            </div>

            <div className=''>
                {/* <h3 className="mb-4">Vendor List</h3> */}
                <CTable hover responsive className='mt-4 '>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell>#</CTableHeaderCell>
                            <CTableHeaderCell>Vendor Code</CTableHeaderCell>
                            <CTableHeaderCell>Vendor Name</CTableHeaderCell>
                            <CTableHeaderCell>Vendor Email</CTableHeaderCell>
                            <CTableHeaderCell>Vendor Phone</CTableHeaderCell>
                            

                            <CTableHeaderCell>Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>


                    <CTableBody>


                        {Vendordatas.map((ele, index) => (
                            <CTableRow key={ele.id}>
                                <CTableDataCell>{index + 1}</CTableDataCell>
                                <CTableDataCell>{ele.vendorCode}</CTableDataCell>
                                <CTableDataCell>{ele.vendorName}</CTableDataCell>
                                <CTableDataCell>{ele.vendorEmailId}</CTableDataCell>
                                <CTableDataCell>{ele.mobileNo}</CTableDataCell>


                                <CTableDataCell className='' >
                                    <div className="d-flex  align-self-center h-100">
                                        <Link to={`/master/VendorForm/edit/${ele.id}`}>
                                            <CButton color="success d-flex justify-content-center align-self-center text-white me-1 py-1">
                                                <CIcon icon={cilPencil} className="me-2 align-self-center" />
                                                Edit
                                            </CButton>
                                        </Link>

                                        <CButton onClick={() => [setId(ele.id), setShowPopup(true)]} color="primary d-flex justify-content-center align-self-center me-1 py-1">
                                            <CIcon icon={cilSearch} className='me-2 align-self-center' />
                                            View
                                        </CButton>

                                        {/* <CButton onClick={()=>{dispatch(deleteCompnayMaster(ele.id))}} color="danger d-flex justify-content-center align-self-center me-1 text-white py-1">
                                        <CIcon icon={cilTrash} className='me-1 align-self-center' />
                                        DEL
                                    </CButton> */}
                                        <CButton onClick={() => deleteVendorMaster1(ele)} color="danger d-flex justify-content-center align-self-center me-1 text-white py-1">
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

export default VendorMaster