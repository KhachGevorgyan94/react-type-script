import {createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {IUserData, IUserModel} from "../../../models/user.model";

const baseURL = 'https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d'

export const UserApi = createApi({
    reducerPath: 'UserApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: 'usersX'
            }),
            providesTags: result => ['Users']
        }),

        addUser: build.mutation({
            query: (data: IUserModel) => ({
                url: 'usersX',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: build.mutation({
            query: (id: string) => ({
                url: `usersX/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: build.mutation({
            query: (data: IUserModel) => {
                let currentId = data._id
                delete data._id
                return {
                    url: `usersX/${currentId}`,
                    method: 'PUT',
                    body: data
                }
            },
            invalidatesTags: ['Users']
        })
    })
})