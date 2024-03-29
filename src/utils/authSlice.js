import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from './authAction'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null;

const initialState = {
    loading: false,
    userFirstName: null,
    userLastName: null,
    userToken: userToken,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout : (state) => {
            localStorage.removeItem('userToken') //deletes token from storage
            state.loading = false
            state.userFirstName = null
            state.userLastName = null
            state.userToken = null
            state.error = null
            state.success = false
        },
        setCredentials: (state, {payload}) => {
            state.userFirstName = payload.body.firstName
            state.userLastName = payload.body.lastName
        },
        updateCredentials: (state, {payload}) => {
            state.userFirstName = payload.body.firstName
            state.userLastName = payload.body.lastName
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userLogin.fulfilled, (state, {payload}) => {
                state.loading = false
                state.userToken = payload.body.token
                state.success = true
            })
            .addCase(userLogin.rejected, (state, {error}) => {
                state.loading = false
                state.error = error.message
            })
    },
})

export const {logout, setCredentials, updateCredentials} = authSlice.actions
export default authSlice.reducer;