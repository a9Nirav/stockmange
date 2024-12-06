import React from 'react';
// import CompanyMasterForm from './CompanyMasterForm'
import { CRow, CCol, CFormInput, CForm, CFormLabel, CButtonGroup } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCloudUpload, cilPencil, cilSearch, cilTrash } from '@coreui/icons';
import { useEffect, useState } from 'react'

import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { GetCompanyMaster, toggleCompanyStatus, updateCompnayMaster } from '../../../features/compnayMasterSlice';
import CompanyMasterModal from './CompanyMasterModal';
// import ExportBtn from '../../../ButtonGroups/ExportBtn';
import * as XLSX from "xlsx";
import { useUserContext } from '../../../features/UserProvider';
import { toast } from 'react-toastify';




function CompanyMaster() {


    const { userId } = useUserContext();
    console.log("done")

    const dispatch = useDispatch();
    const { CompnayDatas, loading } = useSelector((state) => state.companyMaster);

    // useEffect(() => {
    //     // const data = { UserId: "10" }; // Payload with UserId
    //     dispatch(GetCompanyMaster(data));
    // }, [dispatch]);


    // add 
    useEffect(() => {
        if (userId) {
            const data = { userId }
            const ans = dispatch(GetCompanyMaster({ userId, data }))
            console.log(ans)
        }
        else {
            console.log("user id is missing ")
        }
    }, [userId, dispatch])


    // delete 

    const handleToggle = async (company) => {
        const payload = { data: company, userId }; // Pass the current company data and userId
        const result = await dispatch(toggleCompanyStatus(payload));

        if (toggleCompanyStatus.fulfilled.match(result)) {
            toast.success(
                `Company status updated to ${!company.isActive ? "Active" : "Inactive"
                } successfully!`
            );
        } else {
            toast.error("Failed to update company status");
            console.error("Error details:", result.payload);
        }
    };









    // State for search input
    const [searchData, setSearchData] = useState("");

    // Filtered data based on search query
    // const filteredData = CompnayDatas.filter((ele) =>
    //     ele.Name.toLowerCase().includes(searchData.toLowerCase())
    //     // ele.email.toLowerCase().includes(searchData.toLowerCase()) ||
    //     // ele.phone.toLowerCase().includes(searchData.toLowerCase()) ||
    //     // ele.gst.toLowerCase().includes(searchData.toLowerCase()) ||
    //     // ele.pincode.toString().includes(searchData)
    // );


    // const [currentPage, setCurrentPage] = useState(1); // Current page number
    // const rowsPerPage = 5; // Rows per page

    // Calculate the data to display based on the current page
    // const indexOfLastRow = currentPage * rowsPerPage;
    // const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    // const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    // Change page
    // const totalPages = Math.ceil(filteredData.length / rowsPerPage);



    // const handlePrevPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };

    // const handleNextPage = () => {
    //     if (currentPage < totalPages) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };






    // modal 

    const [id, setId] = useState();
    const [showPopup, setShowPopup] = useState(false)




    // const deleteCompnayMaster1=(ele)=>{
    //     dispatch(deleteCompnayMaster(ele.id))
    // }


    // delete
    // const deleteCompnayMaster1 = (ele) => {
    //     if (window.confirm(`Are you sure you want to delete "${ele.name}"?`)) {
    //         if (ele && ele.id) {
    //             dispatch(deleteCompnayMaster(ele.id));
    //         } else {
    //             console.error("Invalid company data for deletion:", ele);
    //         }
    //     }
    // };

    // new 





    // export
    const handleExport = () => {
        if (loading) {
            alert("Data is still loading, please wait...");
            return;
        }

        if (!CompnayDatas || CompnayDatas.length === 0) {
            alert("No data available to export!");
            return;
        }

        // Create a worksheet
        const worksheet = XLSX.utils.json_to_sheet(CompnayDatas);

        // Create a workbook and append the worksheet
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "CompanyData");

        // Trigger a download of the Excel file
        XLSX.writeFile(workbook, "CompanyData.xlsx");
    };






    return (
        <>

            {showPopup && <CompanyMasterModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}

            {/* vendor list  */}



            <div className="">
                <Link to="/master/CompanyMasterForm">
                    <CButton color="success  text-white ms-2 ">+ Company</CButton>
                </Link>
            </div>

            <div className="mt-4 d-flex justify-content-between">
                <div className="">
                    <h3 className='d-inline' >  Company List </h3>
                    <span className=''>({CompnayDatas.length})</span>
                </div>
                <div className="d-flex">

                    <CFormInput
                        type="search"
                        placeholder="Search..."
                        onChange={(e) => setSearchData(e.target.value)}


                        className="me-2"
                    />

                    <CButton onClick={handleExport} color="success d-flex justify-content-center align-self-center text-white py-1 ">
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
                            <CTableHeaderCell>GST </CTableHeaderCell>
                            <CTableHeaderCell>State</CTableHeaderCell>
                            <CTableHeaderCell className='text-center'>Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>


                    <CTableBody>


                        {CompnayDatas && CompnayDatas.length > 0 ? (
                            CompnayDatas.map((ele, index) => (
                                <CTableRow key={ele.id}>
                                    <CTableDataCell>{index + 1}</CTableDataCell>
                                    <CTableDataCell>{ele.name}</CTableDataCell>
                                    <CTableDataCell>{ele.email}</CTableDataCell>
                                    <CTableDataCell>{ele.mobile}</CTableDataCell>
                                    <CTableDataCell>{ele.gstNumber}</CTableDataCell>
                                    <CTableDataCell>{ele.state}</CTableDataCell>
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
                                                color={ele.isActive ? "warning" : "danger"}
                                                className="me-1 w-50 text-white"
                                                onClick={() => handleToggle(ele)} // Pass the company object here
                                            >
                                                {/* <CIcon icon={cilTrash} className="me-1" /> */}
                                                {ele.isActive ? "Active" : "Not Active"}
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
                {/* Pagination Controls */}
                {/* <div className="d-flex justify-content-between align-items-center mt-3">
                    <CButton disabled={currentPage === 1} onClick={handlePrevPage}>
                        Previous
                    </CButton>
                    <span>Page {currentPage} of {totalPages}</span>
                    <CButton disabled={currentPage === totalPages} onClick={handleNextPage}>
                        Next
                    </CButton>
                </div> */}

                {/* <CompanyMasterModal/> */}
            </div>






        </>
    )
}

export default CompanyMaster