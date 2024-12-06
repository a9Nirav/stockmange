import { configureStore } from '@reduxjs/toolkit';
import CompnayMasterReducer from './features/compnayMasterSlice'; // Update with the correct path
import uiReducer from './features/uiSlice';
import dataExportReducer from "./features/dataExportSlice";
import vendorMasterReducer from "./features/vendorMasterSlice";
import UserMasterReducer from "./features/UserMasterSlice";
import SKUMasterReducer from "./features/SKUMasterSlice";
import LoginReducer from "./features/LoginSlice";


// The old reducer
const initialState = {
  sidebarShow: true,
  theme: 'light',
};

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest };
//     default:
//       return state;
//   }
// };



// Create the store with both reducers
const store = configureStore({
  reducer: {
    ui: uiReducer, // Old reducer added here
    companyMaster: CompnayMasterReducer, // New slice reducer
    dataExport: dataExportReducer,
    VendorMaster: vendorMasterReducer,
    UserMaster: UserMasterReducer,
    SKUMaster:SKUMasterReducer,
    Login:LoginReducer,



  },
});

export default store;
