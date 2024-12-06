import React from 'react'
import { CRow, CCol, CFormInput, CForm, CFormLabel } from '@coreui/react'
import { CButton } from "@coreui/react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {createSKUMaster} from '../../../features/SKUMasterSlice'
import { useUserContext } from '../../../features/UserProvider';
import { toast } from 'react-toastify';



function SKUMasterForm() {

    const { userId } = useUserContext();
    console.log(userId)
    
    const [SKUdata, setSKUData] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const getSKUData = (e)=>{
        setSKUData({...SKUdata,[e.target.name]:e.target.value})
        // console.log(SKUdata)

    }

    
    // old method 
    //  const handleSubmit =  (e)=>{
    //     e.preventDefault();

    //     if(userId){
    //         const data = {userId}
    //         dispatch(createSKUMaster({SKUdata,data}))
    //     }
    //     else{
    //         console.log("no")
    //     }

    //     // console.log("submit sku data", SKUdata)
    //     // dispatch(createSKUMaster(SKUdata,userId))
    //     navigate("/master/SKUMaster")
       

    //  }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log("submit sku data", SKUdata);
    
        // Pass the required payload as an object
        const payload = { data: SKUdata, userId };
    
        const result = await dispatch(createSKUMaster(payload));

        if (result.type === 'createSKUMaster/fulfilled'){
            toast.success('User data submitted successfully!');
            setSKUData({});
            navigate("/master/SKUMaster")
        }
        else{
            toast.error("Failed to submit SKU data. Please try again.")
        }
    
        // if (createSKUMaster.fulfilled.match(result)) {
        //     console.log("SKU creation successful:", result.payload);
        //     navigate("/master/SKUMaster")
        //     // Optionally show a success message using toast or other UI updates
        // } else {
        //     console.error("SKU creation failed:", result.payload);
        //     // Optionally handle the error with toast or alert
        // }
    };
    


  








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
                <Link to="/master/SKUMaster">
                    <CButton color="success  text-white ms-2 ">+ SKU list</CButton>
                </Link>
            </div>

            <div className="d-flex justify-content-between mt-3">


                <h3 className="mb-4">SKU Master Form</h3>

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
                        <CFormLabel htmlFor="Itemcode">Item Name</CFormLabel>

                        <CFormInput
                            type="text"
                            id=""
                            name="TextbookName"
                            placeholder="Enter Item Name"
                            onChange={getSKUData}

                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="itemCode">Item Code</CFormLabel>

                        <CFormInput
                            type="text"
                            id=""
                            name="ItemCode"
                            placeholder="Enter Item Code"
                            onChange={getSKUData}

                            required
                        />
                    </CCol>


                </CRow>

                <CRow className='mb-3'>
                    <CCol md={6}>
                        <CFormLabel htmlFor="Category">Category</CFormLabel>

                        <CFormInput
                            type="text"
                            id=""
                            name="Category"
                            placeholder="Enter Category"
                            onChange={getSKUData}

                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="EANcode">EAN Code</CFormLabel>
                        <CFormInput
                            type="text"
                            id=""
                            name="EANcode"
                            placeholder="Enter EAN Code"
                            onChange={getSKUData}

                            required
                        />
                    </CCol>

                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="vendorName">Cost Price</CFormLabel>
                        <CFormInput
                            type="number"
                            id=""
                            name="CostPrice"
                            placeholder="Enter Cost Price"
                            onChange={getSKUData}

                            required
                        />
                    </CCol>
                    <CCol md={6}>
                        <CFormLabel htmlFor="MRP"> MRP</CFormLabel>
                        <CFormInput
                            type="number"
                            id=""
                            name="MRP"
                            placeholder="Enter MRP"
                            onChange={getSKUData}

                        />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol md={6}>
                        <CFormLabel htmlFor="RetailPrice">Retail Price</CFormLabel>
                        <CFormInput
                            type="text"
                            id=""
                            name="RetailPrice"
                            placeholder="Enter Retail Price"
                            onChange={getSKUData}

                        />
                    </CCol>

                    <CCol md={6}>
                        <CFormLabel htmlFor="SalesTax">Sales Tax</CFormLabel>
                        <CFormInput
                            type="number"
                            id=""
                            name="SalesTax"
                            placeholder="Enter Sales Tax"
                            onChange={getSKUData}

                        />
                    </CCol>

                </CRow>

                <CRow className='mb-3'>
                    <CCol md={6}>
                        <CFormLabel htmlFor="Purchase Tax">Purchase Tax</CFormLabel>
                        <CFormInput
                            type="number"
                            id=""
                            name="PurchaseTax"
                            placeholder="Enter Purchase Tax"
                            onChange={getSKUData}

                        />
                    </CCol>


                </CRow>


                <div className="d-flex justify-conten-center">
                    <CButton type="submit" color="primary">
                        Submit
                    </CButton>
                </div>
            </CForm>
        </>
    )
}

export default SKUMasterForm
