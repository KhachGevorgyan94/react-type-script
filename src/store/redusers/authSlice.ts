import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserData} from "../../models/user.model";

interface IAuthSlice {
    userData: IUserData | null,
    token: string,
    permissions: [],
    toDoList: []
}


const initialState: IAuthSlice = {
    userData: null,
    token: '',
    permissions: [],
    toDoList: []
}


export const authSlice = createSlice({
    initialState, // initialState: initialState,
    name: 'AuthSlice',
    reducers: {
        setTokenData(state, action: PayloadAction<string>) {
            state.token = action.payload
        },
        setUserData(state, action: PayloadAction<IUserData>) {
            state.userData = action.payload
        }


    },
    // extraReducers:{
    //
    // }

})
export const {setTokenData, setUserData} = authSlice.actions

export default authSlice.reducer