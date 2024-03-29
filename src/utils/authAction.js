import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch(process.env.REACT_APP_BASE_URL+"/user/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const res = await response.json();
            if (res.status === 200) {
                localStorage.setItem("userToken", res.body.token);
                return res;
            }
            throw new Error(res.message);
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)