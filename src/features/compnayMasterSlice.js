import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// crate compnay master 
export const createCompanyMaster = createAsyncThunk(
    "createUser",
    async ({ data, userId }, { rejectWithValue }) => {
        try {
            const payload = { ...data, userId };
            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_AddUpdateCompanyDetails",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to create user");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// get (read) compnay Master
export const GetCompanyMaster = createAsyncThunk(
    "GetCompanyMaster",
    async ({ userId, data }, { rejectWithValue }) => {
        try {
            const payload = { ...data,  userId};
            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_GetCompanyMasterDetails",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch company data");
            }

            const result = await response.json();
            console.log("API Response:", result);

            if (result.response.errorCode !== "200") {
                throw new Error(result.response.errorDescription);
            }

            return result.data; // Extracting only the data array
        } catch (error) {
            console.error("Error fetching company data:", error.message);
            return rejectWithValue(error.message);
        }
    }
);






//update action
export const updateCompnayMaster = createAsyncThunk(
    "updateCompnayMaster",
    async ({id,userId}, { rejectWithValue }) => {
        const payload = {id,userId}
        try {
            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_AddUpdateCompanyDetails/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({payload}),
                }
            );

            

            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(`API Error: ${JSON.stringify(errorDetails)}`);
            }

            const result = await response.json();
            console.log("Company updated:", result);
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);




// compnay is active ,not active 

export const toggleCompanyStatus = createAsyncThunk(
    "toggleCompanyStatus",
    async ({ data, userId }, { rejectWithValue }) => {
        try {
            const updatedData = { ...data, isActive: !data.isActive, userId }; // Toggle isActive
            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_AddUpdateCompanyDetails",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData), // Send updated payload
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update company status");
            }

            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message || "Something went wrong");
        }
    }
);











export const CompnayMasterDetail = createSlice({
    name: "CompnayMasterDetail",
    initialState: {
        CompnayDatas: [],
        loading: false,
        error: null,
        

    },
    extraReducers: (builder) => {
        builder
            .addCase(createCompanyMaster.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCompanyMaster.fulfilled, (state, action) => {
                state.loading = false;
                state.CompnayDatas.push(action.payload);
            })
            .addCase(createCompanyMaster.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(GetCompanyMaster.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetCompanyMaster.fulfilled, (state, action) => {
                state.loading = false;
                state.loading = false;
                state.CompnayDatas = action.payload;
                
            })
            .addCase(GetCompanyMaster.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(toggleCompanyStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(toggleCompanyStatus.fulfilled, (state, action) => {
                state.loading = false;
                const updatedCompany = action.payload;
                state.CompnayDatas = state.CompnayDatas.map((company) =>
                    company.id === updatedCompany.id ? updatedCompany : company
                ); // Update the state with the new data
            })

            


            .addCase(toggleCompanyStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateCompnayMaster.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // .addCase(updateCompnayMaster.fulfilled, (state, action) => {
            //     state.loading = false;
            //     // Update the company data in the state
            //     state.CompnayDatas = state.CompnayDatas.map((ele) =>
            //         ele.id === action.payload.id ? action.payload  : ele
            //     );
            // })
            // .addCase(updateCompnayMaster.fulfilled, (state, action) => {
            //     state.loading = false;
            
            //     const index = state.CompnayDatas.findIndex(
            //         (ele) => ele.id === action.payload.id
            //     );
            
            //     if (index !== -1) {
            //         state.CompnayDatas[index] = action.payload; // Replace the object
            //     }
            // })
            .addCase(updateCompnayMaster.fulfilled, (state, action) => {
                state.loading = false;
                // Update the company data in the state
                state.CompnayDatas = state.CompnayDatas.map((ele) =>
                    ele.id === action.payload.id ? { ...ele, ...action.payload } : ele
                );
            })
            
            .addCase(updateCompnayMaster.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }


})


export default CompnayMasterDetail.reducer;