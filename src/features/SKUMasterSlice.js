import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




// crate SKU master 


export const createSKUMaster = createAsyncThunk(
    "createSKUMaster",
    async ({ data, userId }, { rejectWithValue }) => {
        try {
            // Combine SKUdata and userId into a single payload
            const payload = { ...data, userId };

            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_AddUpdateTextbookDetails",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload), // Send updated payload with UserId
                }
            );

            if (!response.ok) {
                // Attempt to extract server error details, if available
                const errorData = await response.json();
                throw new Error(errorData?.message || "Failed to create SKU Master");
            }

            const result = await response.json();
            return result; // Return the result if the request is successful
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);







// get reda sku master 
// export const GetSKUMaster = createAsyncThunk(
//     "GetSKUMaster",
//     async (data, { rejectWithValue }) => {
//         try {
//             // Manually add UserId: "10" to the data object
//             const payload = { ...data, UserId: "10" };

//             const response = await fetch(
//                 "http://localhost:5213/API/SMS/SMS_GetTextbookMasterDetails",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(payload), // Send updated payload with UserId
//                 }
//             );

//             if (!response.ok) {
//                 throw new Error("Failed to Create Vendor");
//             }

//             const result = await response.json();
//             return result; // Return the result if the request is successful
//         } catch (error) {
//             return rejectWithValue(error.message); // Use error.message to correctly pass the error
//         }
//     }
// );


// Read new 
export const GetSKUMaster = createAsyncThunk(
    "GetSKUMaster",
    async ({ userId, data }, { rejectWithValue }) => {
        try {
            // Include UserId in the payload
            const payload = { ...data,  userId};

            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_GetTextbookMasterDetails",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload), // Send updated payload with UserId
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch SKU master details");
            }

            const result = await response.json();
            return result; // Return the result if the request is successful
        } catch (error) {
            return rejectWithValue(error.message); // Use error.message to correctly pass the error
        }
    }
);








export const SKUMasterDetail = createSlice({
    name: "SKUMasterDetail",
    initialState: {
        SKUDatas: [],
        loading: false,
        error: null,


    },


    extraReducers: (builder) => {
        builder
            .addCase(createSKUMaster.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createSKUMaster.fulfilled, (state, action) => {
                state.loading = false;
                // state.CompnayDatas.push(action.payload);
                state.SKUDatas.push(action.payload);
            })
            .addCase(createSKUMaster.rejected, (state, action) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(GetSKUMaster.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(GetSKUMaster.fulfilled,(state,action)=>{
                state.loading= false;
                state.SKUDatas = action.payload.data
            })
            .addCase(GetSKUMaster.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.payload
            })
          
           




    }


})



export default SKUMasterDetail.reducer;