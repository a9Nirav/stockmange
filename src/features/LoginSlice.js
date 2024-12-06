import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const GetLogin = createAsyncThunk(
    "GetLogin",
    async (data, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "http://localhost:5213/API/SMS/SMS_AuthenticateUser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();

            if (result.errorCode !== "200") {
                // Reject with a detailed error message
                return rejectWithValue(result.errorDescription || "Login failed");
            }

            return result; // Successful response
        } catch  {
            return rejectWithValue( "unable to connect to server try again later");
        }
    }
);





export const LoginDetail = createSlice({
    name: "LoginDetail",
    initialState: {
        loginDatas: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(GetLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.loginDatas = action.payload;
                state.error = null;
            })
            .addCase(GetLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },



})

export default LoginDetail.reducer;