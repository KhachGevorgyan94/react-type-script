import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

export const PostApi = createApi({
    reducerPath: 'PostApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL
    }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => ({
                url: '/todos',
            })
        }),
        deletePost: build.mutation({
            query: (id:string) => ({
                url: '/todo',
                method: 'DELETE',
            })
        })
    })
})


export const {
    useGetProductsQuery,
} = PostApi;