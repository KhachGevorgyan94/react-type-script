import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios/index";

export const fetchProductDatta = createAsyncThunk(
    "AuthSlice/fetchProductDatta",
    async () => {
        //const { apiClient } = extra;
        const response = await axios.get(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/productH`);
        return response.data;
    }
);