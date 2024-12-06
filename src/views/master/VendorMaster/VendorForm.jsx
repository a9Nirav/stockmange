import React from 'react'
import { CRow, CCol, CFormInput, CForm, CFormLabel } from '@coreui/react'
import { CButton } from "@coreui/react";
import { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createVendorMaster, updateVendorMaster } from '../../../features/vendorMasterSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function VendorForm() {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log("Selected file:", file);
    };



    const handleButtonClick = () => {
        document.getElementById("file-input").click();
    };

    

    // createvendor 
    const [vendorData, setvendorData] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // edit 
    const { id } = useParams();
    const { Vendordatas, loading } = useSelector((state) => state.VendorMaster)

    useEffect(() => {
        // If editing, prefill form with the data for the given ID
        if (id) {
            const existingVendor = Vendordatas.find((vendor) => vendor.id === id);
            if (existingVendor) {
                setvendorData(existingVendor);
            }
        }
    }, [id, Vendordatas]);









    const getVendorData = (e) => {
        setvendorData({ ...vendorData, [e.target.name]: e.target.value })

    }


    // new 2 dec 
    // const handleSubmit = async (e) => {

    //     e.preventDefault();

    //     console.log("Submitting User data:", Vendordatas);

    //     // Dispatch the form data to Redux
    //     const result = await dispatch(createVendorMaster(Vendordatas));

    //     // Show toast notification
    //     if (result.type === 'createVendorMaster/fulfilled') {
    //         toast.success('User data submitted successfully!');
    //         setvendorData({});
    //         navigate("/master/UserMaster")

    //     } else {
    //         toast.error('Failed to submit company data. Please try again.');
    //     }
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let result;
            if (id) {
                // Update existing data
                result = await dispatch(updateVendorMaster({ ...vendorData, id }));
            } else {
                // Create new data
                result = await dispatch(createVendorMaster(vendorData));
            }


            // Check if the operation was successful
            if (result?.type?.endsWith("/fulfilled")) {
                toast.success(
                    id
                        ? "Company data updated successfully!"
                        : "Company data submitted successfully!"
                );

                if (!id) {
                    // Reset form data
                    setvendorData({});
                }

                navigate("/master/VendorMaster");
            } else {
                toast.error(
                    id
                        ? "Failed to update company data. Please try again."
                        : "Failed to submit company data. Please try again."
                );
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An unexpected error occurred. Please try again.");
        }
    };

    


    // old method 

    //    const handleSubmit = async (e) => {

    //         e.preventDefault();

    //         console.log("Submitting company data:", vendorData);

    //         // Dispatch the form data to Redux
    //         const result = await dispatch(createVendorMaster(vendorData));

    //         // Show toast notification
    //         if (result.type.endsWith('/fulfilled')) {
    //             toast.success('Vendor data submitted successfully!');
    //             setvendorData({}); // Reset the form
    //             navigate("/master/VendorMaster")
    //         } else {
    //             toast.error('Failed to submit vendor data. Please try again.');
    //         }
    //     };






    return (


        <>

            <div className="">
                <Link to="/master/VendorMaster">
                    <CButton color="success  text-white ms-2 ">+ Vender List</CButton>
                </Link>
            </div>

            <div className="mt-4 d-flex justify-content-between">


                <h3 className="mb-4">{id ? "Edit Vendor data" : "Vendor Master Form"} </h3>

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

            <CForm onSubmit={handleSubmit}>

                <CRow className="mb-3 ">
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Supplier Code</CFormLabel>

                        <CFormInput
                            type="text"
                            id=""
                            name="VendorCode"
                            placeholder="Enter Supplier Code"
                            // value={vendorData.VendorCode}
                            onChange={getVendorData}

                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Supplier Name</CFormLabel>

                        <CFormInput
                            type="text"
                            id=""
                            name="VendorName"
                            // value={vendorData.VendorName}
                            placeholder="Enter Supplier Name"
                            onChange={getVendorData}

                            required
                        />
                    </CCol>


                </CRow>

                <CRow className='mb-3'>

                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Supplier Phone</CFormLabel>
                        <CFormInput
                            type="tel"
                            id="phone"
                            name="MobileNo"
                            placeholder="Enter phone number"
                            onChange={getVendorData}
                            // value={vendorData.VendorPhone}


                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Supplier Email</CFormLabel>
                        <CFormInput
                            type="email"
                            id="email"
                            name="VendorEmailId"
                            placeholder="Enter email address"
                            onChange={getVendorData}
                            // value={vendorData.VendorEmail}

                            required
                        />
                    </CCol>

                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Contact  Person</CFormLabel>

                        <CFormInput
                            type="text"
                            id=""
                            name="ContactPerson"
                            placeholder="Enter Contact Person"
                            onChange={getVendorData}
                            // value={vendorData.ContactPerson}


                            required
                        />
                    </CCol>

                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Contact  Person Phone</CFormLabel>

                        <CFormInput
                            type="text"
                            id=""
                            name="ContactPersonMobileNo"
                            placeholder="Enter Contact Person Phone"
                            onChange={getVendorData}
                            // value={vendorData.ContactPerson}


                            required
                        />
                    </CCol>


                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Address 1</CFormLabel>
                        <CFormInput
                            type="text"
                            id=""
                            name="Address1"
                            placeholder="Enter Address 2"
                            onChange={getVendorData}
                            // value={vendorData.Address}

                        />
                    </CCol>

                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Address 2</CFormLabel>
                        <CFormInput
                            type="text"
                            id=""
                            name="Address2"
                            placeholder="Enter Address 1"
                            onChange={getVendorData}
                            // value={vendorData.Address}

                        />
                    </CCol>

                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">PIN CODE </CFormLabel>
                        <CFormInput
                            type="text"
                            id=""
                            name="Pincode"
                            placeholder="Enter PIN CODE"
                            onChange={getVendorData}
                            // value={vendorData.Pincode}

                        />
                    </CCol>

                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">State</CFormLabel>
                        <CFormInput
                            type="text"
                            id=""
                            name="State"
                            placeholder="Enter State"
                            onChange={getVendorData}
                            // value={vendorData.State}

                        />
                    </CCol>

                </CRow>
                <CRow className="mb-3">

                <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">City</CFormLabel>
                        <CFormInput
                            type="text"
                            id=""
                            name="City"
                            placeholder="Enter City"
                            onChange={getVendorData}
                            // value={vendorData.City}

                        />
                    </CCol>


                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName"> GST Number</CFormLabel>
                        <CFormInput
                            type="text"
                            id=""
                            name="GstNumber"
                            placeholder="Enter GST number"
                            onChange={getVendorData}
                            // value={vendorData.Gst}

                        />
                    </CCol>


                </CRow>
                <div className="d-flex justify-conten-center">
                    <CButton type="submit" color="primary">
                        {id ? "Update" : "Submit"}
                    </CButton>
                </div>
            </CForm>
        </>
    )
}

export default VendorForm