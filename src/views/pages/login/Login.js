import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { GetLogin } from '../../../features/LoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useUserContext} from '../../../features/UserProvider'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const [loginData, setLoginData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getLogindata = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })

  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("login done")
  //   const result = await dispatch(GetLogin(loginData))

  //   console.log("login done")
  //   navigate("/master/SKUMaster")
  // }
  const { setUserId } = useUserContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(GetLogin(loginData));
 
    console.log(result.payload.errorDescription)

    if (GetLogin.fulfilled.match(result)) {

      // toast.success(result.fulfilled)
      setUserId(loginData.UserId);
      console.log(loginData.UserId);
      
    

      toast.success(result.payload.errorDescription)
      // console.errorDescription("login",result.payload)
      navigate("/master/UserMaster");
    } else {
      // Display error from result.payload
      console.error("unable to connect to server try again later", result.payload);
      toast.error(result.payload)
    }
  };




  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="UserId"
                        placeholder="User ID"
                        required


                        onChange={getLogindata}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                         type={showPassword ? "text" : "password"}
                        name="Password"
                        placeholder="Password"
                        required


                        onChange={getLogindata}
                      />
                      <CInputGroupText onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </CInputGroupText>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>

                        <CButton color="primary" className="px-4" type="submit" >
                          Login

                        </CButton>
                        {/* <Link to="/master/UserMaster" className="btn btn-primary">Log IN </Link> */}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                  {/* {error && <p className="text-danger">{error}</p>} */}

                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
