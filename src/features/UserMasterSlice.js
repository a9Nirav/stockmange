import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// crate User master 
export const createUserMaster = createAsyncThunk(
    "createUserMaster",
    async (data, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_CreateUpdateEmployeeDetails",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
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


// read user data 
export const GetUserMaster = createAsyncThunk(
    "GetUserMaster",
    async (__, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5213/API/SMS/SMS_GetEmployeeDetails", {
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



export const UserMasterDetail = createSlice({
    name: "UserMasterDetail",
    initialState: {
        UserDatas: [],
        loading: false,
        error: null,


    },


    extraReducers: (builder) => {
        builder
            .addCase(createUserMaster.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUserMaster.fulfilled, (state, action) => {
                state.loading = false;
                // state.CompnayDatas.push(action.payload);
                state.error = action.payload || "An error occurred";
            })
            .addCase(createUserMaster.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(GetUserMaster.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetUserMaster.fulfilled, (state, action) => {
                state.loading = false;
                state.UserDatas = action.payload.data; // Ensure the payload structure matches
            })
            .addCase(GetUserMaster.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });




    }


})



export default UserMasterDetail.reducer;