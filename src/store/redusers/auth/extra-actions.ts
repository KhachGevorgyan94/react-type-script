import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProductDatta = createAsyncThunk(
    "AuthSlice/addTodoList",
    async () => {
        //const { apiClient } = extra;
        const response = await axios.post(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/productH`,);
        return response.data;
    }
);
//
//
//
//
// export const getToDoList = createAsyncThunk(
//     'AuthSlice/gettoDoList',
//     async ()=>{
//         const result = await axios.get('')
//         return
//     }
// )
