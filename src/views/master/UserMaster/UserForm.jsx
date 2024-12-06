import React from 'react'
import { CRow, CCol, CFormInput, CForm, CFormLabel, CFormCheck, CInputGroup, CInputGroupText } from '@coreui/react'
import { CButton } from "@coreui/react";
import { Link } from 'react-router-dom';
import { createUserMaster } from '../../../features/UserMasterSlice'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";



function UserForm() {
    const [showPassword, setShowPassword] = useState(false);
    
   
    // const [confirmPassword,setConfirmPassword] = useState("");
    // const [errorMessage, setErrorMessage] = useState("");


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [UserData, setUserData] = useState({})
    const getUserdata = (e) => {
        setUserData({ ...UserData, [e.target.name]: e.target.value })
        

    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("UserData being submitted:", UserData);
    //     dispatch(createUserMaster(UserData));
    //     navigate("/master/UserMaster");

    // };

    const handleSubmit = async (e) => {


        e.preventDefault();

        console.log("Submitting User data:", UserData);

        // Dispatch the form data to Redux
        const result = await dispatch(createUserMaster(UserData));

        // Show toast notification
        if (result.type === 'createUserMaster/fulfilled') {
            toast.success('User data submitted successfully!');
            setUserData({});
            navigate("/master/UserMaster")

        } else {
            toast.error('Failed to submit company data. Please try again.');
        }
    };


    return (
        <>

            <div className="">
                <Link to="/master/UserMaster">
                    <CButton color="success  text-white ms-2 ">View List</CButton>
                </Link>
            </div>



            <div className="">

                <h3 className='mt-4'>User Master Form</h3>
            </div>

            <CForm onSubmit={handleSubmit}>

                <CRow className=" mb-3 gy-3">
                    {/* <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Frist Name</CFormLabel>

                        <CFormInput
                            type="text"
                        
                            name="FirstName"
                            placeholder="Enter vendor name"
                            onChange={getUserdata}

                            required
                        />
                    </CCol> */}
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Frist Name</CFormLabel>

                        <CFormInput
                            type="text"

                            name="FirstName"
                            placeholder="Enter Frist"
                            onChange={getUserdata}

                            required
                        />
                    </CCol>

                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Last Name</CFormLabel>

                        <CFormInput
                            type="text"

                            name="LastName"
                            placeholder="Enter Last name"
                            onChange={getUserdata}

                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Employee Id</CFormLabel>
                        <CFormInput
                            type="Text"

                            name="EmployeeId"
                            placeholder="Enter Employee Id"
                            onChange={getUserdata}

                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">User Email</CFormLabel>
                        <CFormInput
                            type="email"
                            id="email"
                            name="EmailId"
                            placeholder="Enter email address"
                            onChange={getUserdata}

                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Password</CFormLabel>
                        <CInputGroup>
                            <CFormInput
                                type={showPassword ? "text" : "password"}
                                name="Password"
                                placeholder="xxxxx"
                                onChange={getUserdata}
                            />
                            <CInputGroupText onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </CInputGroupText>
                        </CInputGroup>
                    </CCol>

                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">User Phone</CFormLabel>
                        <CFormInput
                            type="tel"
                            id="phone"
                            name="MobileNo"
                            placeholder="Enter phone number"
                            onChange={getUserdata}

                            required
                        />
                    </CCol>



                </CRow>
                <CRow className="mb-3">


                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Confirm Password</CFormLabel>
                        <CInputGroup>
                            <CFormInput
                                type={showPassword ? "text" : "password"}
                                name="a"
                                placeholder="xxxxx"
                            // onChange={getUserdata}
                            />
                            <CInputGroupText onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </CInputGroupText>
                        </CInputGroup>
                    </CCol>

                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Join Date</CFormLabel>
                        <CFormInput
                            type="text"

                            name="JoinedDate"
                            placeholder="Enter Join Date"
                            onChange={getUserdata}

                        />
                    </CCol>




                </CRow>
                <CRow className="mb-3">
                    <CCol md={6} className="d-flex mt-4 gap-3">
                        <CFormCheck
                            type="radio"
                            name="RoleId"
                            value="1"
                            id="flexRadioDefault1"
                            label="Admin"
                            onChange={getUserdata}
                            className={UserData.RoleId === "1" ? "text-primary fw-bold" : ""}
                            
                           
                        />
                        <CFormCheck
                            type="radio"
                            name="RoleId"
                            value="2"
                            id="flexRadioDefault2"
                            label="Manager"
                            onChange={getUserdata}
                            className={UserData.RoleId === "2" ? "text-primary fw-bold" : ""}
                        />
                        <CFormCheck
                            type="radio"
                            name="RoleId"
                            value="0"
                            id="flexRadioDefault3"
                            label="User"

                            onChange={getUserdata}
                            className={UserData.RoleId === "0" ? "text-primary fw-bold" : ""}
                        />

                    </CCol>

                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">User Id</CFormLabel>
                        <CFormInput
                            type="text"

                            name="UserId"
                            placeholder="User Id"
                            onChange={getUserdata}

                        />
                    </CCol>








                </CRow>

                <div className="d-flex justify-conten-center ">
                    <CButton type="submit" color="primary">
                        Submit
                    </CButton>
                </div>
            </CForm>
        </>
    )
}

export default UserForm