import React, { useContext } from 'react';
import { CRow, CCol, CFormInput, CForm, CFormLabel, CFormCheck } from '@coreui/react';
import { CButton } from "@coreui/react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCompanyMaster, updateCompnayMaster } from '../../../features/compnayMasterSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { useUserContext } from '../../../features/UserProvider';


function CompanyMasterForm() {

    const { userId } = useUserContext();
    console.log(userId)


    const [selectedFile, setSelectedFile] = useState(null);

    const [compnayData, setCompnayData] = useState({})
   

 
    



    const dispatch = useDispatch();
    const navigate = useNavigate();

    // edit 
    const { id } = useParams();
    const { CompnayDatas, loading } = useSelector((state) => state.companyMaster);



  


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log("Selected file:", file);
    };






    const handleButtonClick = () => {
        document.getElementById("file-input").click();
    };




    useEffect(() => {
        if (id) {
            // Find the company data based on the id
            const company = CompnayDatas.find((ele) => ele.id === parseInt(id));
            console.log(company)

            if(company){
              
            }
    
           
        }
    }, [id,CompnayDatas]);

    // useEffect(() => {
    //     // If editing, prefill form with the data for the given ID
    //     if (id) {
           

    //         const existingCompany = CompnayDatas.find((company) => company.id === parseInt(id));
    //         if (existingCompany) {
    //             setCompnayData(existingCompany);
    //         }
    //     }

    // }, [id, CompnayDatas]);

    




    
    const getCompnaydata = (e) => {
        setCompnayData({ ...compnayData, [e.target.name]: e.target.value })
       
        console.log(setCompnayData)

    }

   

    const handleSubmit = async(e)=>{
       
    
        e.preventDefault();
        

        console.log("submit compnay data",CompnayDatas)
        const payload = {data:compnayData,userId}
        const result = await dispatch(createCompanyMaster(payload))

        if(createCompanyMaster.fulfilled.match(result)){
            toast.success('Compnay data submitted successfully!');
          
            navigate("/master/CompanyMaster");


        }
        else{
            toast.error("Failed to submit Compnay data. Please try again.")
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     console.log("submit company data", compnayData);
    
    //     const payload = { data: compnayData, userId };
    
    //     let result;
    //     if (id) {
    //         // If there's an id, it's an update
    //         result = await dispatch(updateCompnayMaster(payload));
    //     } else {
    //         // If no id, it's a create
    //         result = await dispatch(createCompanyMaster(payload));
    //     }
    
    //     if (createCompanyMaster.fulfilled.match(result) || updateCompnayMaster.fulfilled.match(result)) {
    //         toast.success('Company data submitted successfully!');
    //         navigate("/master/CompanyMaster");
    //     } else {
    //         toast.error("Failed to submit Company data. Please try again.");
    //     }
    // };
    


    










    






 



  


    return (
        <>

            <div className="">
                <Link to="/master/CompanyMaster">
                    <CButton color="success  text-white ms-2 ">View List</CButton>
                </Link>
            </div>


            <div className="d-flex justify-content-between mt-3">


                <h3 className="mb-4">{id ? "Edit Company Master" : "Company Master Form"}</h3>

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

            {/* Compnay Master form start  */}






            <CForm onSubmit={handleSubmit}>
                <CRow className="mb-3">

                    <CCol md={6}>
                        <CFormLabel>Company Name</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Name"
                            placeholder="Enter Company Name"
                            value={compnayData.name || ""}
                            onChange={getCompnaydata}
                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>Company Email</CFormLabel>
                        <CFormInput
                            type="email"
                            name="Email"
                            placeholder="Enter email address"
                            value={compnayData.email}
                            onChange={getCompnaydata}
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
                            value={compnayData.gstNumber}
                            onChange={getCompnaydata}
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>Company Phone</CFormLabel>
                        <CFormInput
                            type="tel"
                            name="Mobile"
                            placeholder="Enter phone number"
                            value={compnayData.mobile}
                            onChange={getCompnaydata}
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
                            value={compnayData.adress1}
                            onChange={getCompnaydata}
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>Address</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Address2"
                            placeholder="Enter Address 2"
                            value={compnayData.adress2}
                            onChange={getCompnaydata}
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
                            value={compnayData.city}
                            onChange={getCompnaydata}
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>PIN CODE</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Pincode"
                            placeholder="Enter PIN Code"
                            value={compnayData.pincode}
                            onChange={getCompnaydata}
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
                            value={compnayData.state}
                            onChange={getCompnaydata}
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel>Country</CFormLabel>
                        <CFormInput
                            type="text"
                            name="Country"
                            placeholder="Enter Country"
                            value={compnayData.country}
                            onChange={getCompnaydata}
                        />
                    </CCol>

                </CRow>

                <CRow className="mb-3">
                    <CCol md={6} className='d-flex '>
                        <CFormCheck type="radio" name="flexRadioDefault" value="1" id="flexRadioDefault1" label="Active" className='me-2' />
                        <CFormCheck type="radio" name="flexRadioDefault" value="0" id="flexRadioDefault2" label="Not Active" defaultChecked />

                    </CCol>

                    {/* <CCol md={6}>
                        <CFormLabel>Id</CFormLabel>
                        <CFormInput
                            type="number"
                            name="UserID"
                            placeholder="Enter Company Name"
                            value={compnayData.Id}
                            onChange={getCompnaydata}
                            required
                        />
                    </CCol> */}


                </CRow>
                <div className="d-flex justify-content-center">
                    <CButton type="submit" color="primary">
                        {id ? "Update" : "Submit"}
                    </CButton>
                </div>
            </CForm>
        </>
    )
}

export default CompanyMasterForm