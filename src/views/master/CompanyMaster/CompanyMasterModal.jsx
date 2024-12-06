// import React from 'react'
// import { useSelector } from "react-redux";
// import "./CompanyMaster.css"





// const CompanyMasterModal =({ id, setShowPopup })=> {

//     const allusers = useSelector((state) => state.companyMaster.CompnayDatas);
//     const singleUser = allusers.filter((ele) => ele.id === id);
//     console.log("singleuser", singleUser);

//   return (
//    <>

// <div className="modalBackground">
//       <div className="modalContainer">
//         <button onClick={()=>setShowPopup(false)}>x</button>
//         <h2>{singleUser[0].name}</h2>
//         <h2>{singleUser[0].email}</h2>
//         <h2>{singleUser[0].Phone}</h2>
//         <h2>{singleUser[0].gst}</h2>
//       </div>
//     </div> 
//    </>
//   )
// }   

// export default CompanyMasterModal;



import React from 'react';
import { useSelector } from "react-redux";
import "./CompanyMaster.css";
import { CRow, CCol, CFormLabel } from '@coreui/react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";

const CompanyMasterModal = ({ id, setShowPopup }) => {
    const allusers = useSelector((state) => state.companyMaster.CompnayDatas) || [];
    const singleUser = allusers.filter((ele) => ele.id === id);

    // console.log("All users:", allusers);
    // console.log("ID to find:", id);
    // console.log("Filtered user:", singleUser);

    return (
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
                                    <CTableHeaderCell style={{ width: "30%" }}>Particular </CTableHeaderCell>
                                    <CTableHeaderCell style={{ width: "70%" }}>Value</CTableHeaderCell>

                                </CTableRow>
                            </CTableHead>


                            <CTableBody>


                                <CTableRow className=''>
                                    <CTableDataCell>Compnay Name :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].name}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className='' color="info">
                                    <CTableDataCell>Compnay Phone :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].mobile}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className=''>
                                    <CTableDataCell>Compnay Email :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].email}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className='' color="info">
                                    <CTableDataCell>Compnay GST :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].gstNumber}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className=''>
                                    <CTableDataCell>Compnay Address :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].address1}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className='' color="info">
                                    <CTableDataCell>Compnay State :- </CTableDataCell>
                                    <CTableDataCell>{singleUser[0].state}</CTableDataCell>
                                </CTableRow>
                                <CTableRow className=''>
                                    <CTableDataCell>Compnay PIN CODE :- </CTableDataCell>
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
    );
};

export default CompanyMasterModal;
