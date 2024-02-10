import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IToDoItem} from "../../../models/user.model";
import {addToDoList, getToDoList} from "./extra-actions";


interface IInitialState {
    list: IToDoItem[],
    loader: boolean
}

const initialState: IInitialState = {
    list: [],
    loader: false
}


const toDoSlize = createSlice({
    name: 'toDoSlice',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(addToDoList.pending, (state) => {
            state.loader = true
        })
        builder.addCase(addToDoList.fulfilled, (state, action)=>{
            state.loader = false
        })
        builder.addCase(getToDoList.pending, (state) => {
            state.loader = true
        })
        builder.addCase(getToDoList.fulfilled, (state, action)=>{
            state.loader = false
            state.list = action.payload
        })
    }
})


export default toDoSlize.reducer