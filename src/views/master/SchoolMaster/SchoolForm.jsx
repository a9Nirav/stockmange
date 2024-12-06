import React from 'react'
import { CRow, CCol, CFormInput, CForm, CFormLabel } from '@coreui/react'
import { CFormCheck } from "@coreui/react";

import { CButton } from "@coreui/react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SchoolForm() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log("Selected file:", file);
    };

    const handleButtonClick = () => {
        document.getElementById("file-input").click();
    };


    return (
        <>

            <div className="">
                <Link to="/master/SchoolMaster">
                    <CButton color="success  text-white ms-2 ">+ School Master</CButton>
                </Link>
            </div>

            <div className="mt-4 d-flex justify-content-between">




                <h3 className="mb-4">School Master Form</h3>

                <div>
                    <input
                        id="file-input"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                    <CButton color="primary" onClick={handleButtonClick}>
                        Import File
                    </CButton>
                    {selectedFile && (
                        <p>
                            Selected File: <strong>{selectedFile.name}</strong>
                        </p>
                    )}
                </div>
            </div>

            {/* form start  */}

            <CForm >

                <CRow className="mb-3">

                    <CCol md={6}>
                        <CFormLabel>School Name</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Name"
                            placeholder="Enter School Name"
                          value=""
                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>School Email</CFormLabel>
                        <CFormInput
                            type="email"
                            name="Email"
                            placeholder="Enter email address"
                           value=""
                            required
                        />
                    </CCol>

                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel>GST Number</CFormLabel>
                        <CFormInput
                            type="text"
                            name="GstNumber"
                            placeholder="Enter GST number"
                           value=""
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>Company Phone</CFormLabel>
                        <CFormInput
                            type="tel"
                            name="Mobile"
                            placeholder="Enter phone number"
                            value=""
                            required
                        />
                    </CCol>

                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel>Address</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Address1"
                            placeholder="Enter Address 1"
                           value=""
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>Address</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Address2"
                            placeholder="Enter Address 2"
                           value=""
                        />
                    </CCol>

                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel>City</CFormLabel>
                        <CFormInput
                            type="text"
                            name="City"
                            placeholder="Enter Address"
                            value=""
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>PIN CODE</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Pincode"
                            placeholder="Enter PIN Code"
                            value=""
                         
                        />
                    </CCol>

                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel>State</CFormLabel>
                        <CFormInput
                            type="text"
                            name="State"
                            placeholder="Enter State"
                            value=""
                          
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>Country</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Country"
                            placeholder="Enter Country"
                            value=""
                           
                        />
                    </CCol>

                </CRow>


                <div className="d-flex justify-conten-center mt-4">
                    <CButton type="submit" color="primary">
                        Submit
                    </CButton>
                </div>
            </CForm>
        </>
    )
}

export default SchoolForm