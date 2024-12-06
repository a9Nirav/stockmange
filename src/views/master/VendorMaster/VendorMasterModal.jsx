import React from 'react';
import { useSelector } from "react-redux";
import "../CompanyMaster/CompanyMaster.css";
import { CRow, CCol, CFormLabel } from '@coreui/react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";

function VendorMasterModel({ id, setShowPopup }) {
    const allusers = useSelector((state) => state.VendorMaster.Vendordatas) || [];
    const singleUser = allusers.filter((ele) => ele.id === id);
    console.log(singleUser)
    return (
        <>
           <div className="modalBackground">
            <div className="modalContainer">
            <div className="d-flex justify-content-end">
              
                    <button className='close-btn' onClick={() => setShowPopup(false)}>x</button>
                </div>
                {singleUser[0] ? (
                    <>

                  
                      
                           
                        <CTable hover responsive className='mt-4 px-2' bordered>
                            <CTableHead>
                                <CTableRow color="info">
                                    <CTableHeaderCell style={{width:"30%"}}>Particular </CTableHeaderCell>
                                    <CTableHeaderCell style={{width:"70%"}}>Value</CTableHeaderCell>

                                </CTableRow>
                            </CTableHead>


                            <CTableBody>
                            <CTableRow className=''>
                                    <CTableDataCell>Vendor Code :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].vendorCode}</CTableDataCell>
                                </CTableRow>

                                <CTableRow className=''color="info">
                                    <CTableDataCell>Vendor Name :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].vendorName}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className='' >
                                    <CTableDataCell>Vendor Phone :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].mobileNo}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className=''color="info">
                                    <CTableDataCell>Vendor Email :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].vendorEmailId}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className=''>
                                    <CTableDataCell>Vendor Contact Person :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].contactPerson}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className='' color="info">
                                    <CTableDataCell> Contact Person Phone:- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].contactPersonMobileNo}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className='' >
                                    <CTableDataCell>Vendor GST :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].gstNumber}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className='' color="info">
                                    <CTableDataCell>Vendor Address 1 :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].address1}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className=''>
                                    <CTableDataCell>Vendor Address 2 :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].address2}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className='' color="info">
                                    <CTableDataCell>Vendor State :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].state}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className=''>
                                    <CTableDataCell>Vendor PIN CODE :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].pincode}</CTableDataCell>
                                </CTableRow>


                            </CTableBody>
                        </CTable>


                    </>
                ) : (
                    <p>User not found</p>
                )}
                   <div className="d-flex justify-content-center">
                    <button className='bg-danger text-white border-0 rounded px-2 fs-5' onClick={() => setShowPopup(false)}>Close</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default VendorMasterModel;