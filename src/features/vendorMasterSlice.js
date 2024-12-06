import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



// create vendor data 
// export const createVendorMaster = createAsyncThunk(
//     "createVendor",
//     async (data,{rejectWithValue})=>{
//         try{
//             const response =await fetch (
//                 "http://localhost:5213/API/SMS/SMS_CreateUpdateVendorDetails",
//                 {
//                     method:"POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(data),

//                 }
//             );
//             if(!response.ok){
//                 throw new Error("Failed to Create Vendor")
//             }
//             const result = await response.json();
//             // console.log("verndordata",result)
//             return result
//         } catch(error){
//             return rejectWithValue(error.massage)
//         }

//     }
// )

// new 
export const createVendorMaster = createAsyncThunk(
    "createVendor",
    async (data, { rejectWithValue }) => {
        try {
            // Manually add UserId: "10" to the data object
            const payload = { ...data, UserId: "10" };

            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_CreateUpdateVendorDetails",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload), // Send updated payload with UserId
                }
            );

            if (!response.ok) {
                throw new Error("Failed to Create Vendor");
            }

            const result = await response.json();
            return result; // Return the result if the request is successful
        } catch (error) {
            return rejectWithValue(error.message); // Use error.message to correctly pass the error
        }
    }
);


// get (read) vendor data 

export const GetVendorData = createAsyncThunk(
    "GetVendorData",
    async (__, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5213/API/SMS/SMS_GetVendorDetails", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({UserId:"10"}),
            });
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            const result = await response.json();
            console.log("API Response:", result); // Log API response
            return result;
        } catch (error) {
            console.error("API Error:", error);
            return rejectWithValue(error.message);
        }
    }
);

// update action 
export const updateVendorMaster = createAsyncThunk(
    "updateVendorMaster",
    async (data,{rejectWithValue})=>{
        console.log("updateVendor",data)
        const response = await fetch(
            `https://673ae9bc339a4ce44519af97.mockapi.io/vendor/${data.id}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }

        );
        try{
            const result = await response.json();
            return result;
        } catch(error){
            return rejectWithValue(error);
        }
        
    }

);


// delete action 

// export const deleteVendorMaster = createAsyncThunk(
//     "createAsyncThunk",
//     async (id , {rejectWithValue})=>{
//         const response = await fetch(
//             `https://673ae9bc339a4ce44519af97.mockapi.io/vendor/${id}`,
//             { method: "DELETE" }
//         );

//         try{
//             const result = await await response.json();
//             console.log(result)
//         } catch (error){
//             return rejectWithValue(error);
//         }
//     }
// )


export const deleteVendorMaster = createAsyncThunk(
    "deleteVendorMaster",
    async (id, { rejectWithValue }) => {
        const response = await fetch(
            `https://673ae9bc339a4ce44519af97.mockapi.io/vendor/${id}`,
            { method: "DELETE" }
        );

        try {
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);




export const VendorMasterDetail = createSlice({
    name: "VendorMasterDetail",
    initialState:{
        Vendordatas:[],
        loading:false,
        error:null,
    },

    extraReducers:(builder)=>{
        builder
        .addCase(createVendorMaster.pending, (state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(createVendorMaster.fulfilled, (state, action) => {
            state.loading = false;
            // state.Vendordatas = action.payload; // Assuming action.payload contains the 'data' you're expecting.
            // state.error = null; // No error since the request was successful.
            state.Vendordatas.push(action.payload);
        })
        .addCase(createVendorMaster.rejected,(state)=>{
            state.loading= true;
            state.error = null;
        })
        .addCase(GetVendorData.pending, (state)=>{
            state.loading= true;
            state.error = null;
        })
        .addCase(GetVendorData.fulfilled,(state,action)=>{
            state.loading= false;
            state.Vendordatas = action.payload.data
        })
        .addCase(GetVendorData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
        .addCase(updateVendorMaster.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(updateVendorMaster.fulfilled, (state, action) => {
            state.loading = false;
            state.Vendordatas = state.Vendordatas.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            )
            // state.data = state.data.map((ele) =>
            //     ele.id === action.payload.id ? action.payload : ele
            // );  
        })
        .addCase(updateVendorMaster.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;

        })
        .addCase(deleteVendorMaster.pending,(state)=>{
            state.loading= true;
            state.error = null;
        })
        .addCase(deleteVendorMaster.fulfilled,(state,action)=>{
            state.loading = false;
            const { id } = action.payload
            if (id){

                state.Vendordatas = state.Vendordatas.filter((ele) => ele.id !== id)
            }
        })
        .addCase(deleteVendorMaster.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

    }

})




export default VendorMasterDetail.reducer;