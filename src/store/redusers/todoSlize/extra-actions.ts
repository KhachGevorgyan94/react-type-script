import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IToDoItem} from "../../../models/user.model";


export const addToDoList = createAsyncThunk(
    'toDoSlice/addToDoList',
    async (data:IToDoItem)=>{
        const result = await axios.post('https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDolistK', data)
        return result.data
    }

)
export const getToDoList = createAsyncThunk(
    'toDoSlice/getToDoList',
    async ()=>{
        const result = await axios.get('https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDolistK')
        return result.data
    }

)













