import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import BASE_URL from "../baseUrl";
import { getToken } from "../../lib/token";
const userSlice = createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        prepareHeaders:(headers)=>{
            const token = getToken()
            if(token){
                headers.set("authorization",`Bearer ${token}`)
            }
            return headers
        }
    }),

    endpoints:(builder)=>({
        getUser:builder.query({
            query:()=>{
                return{
                    url:"users/user",
                    method:"GET"
                }
            },
        })
    })


})

export const {useGetUserQuery} = userSlice
export default userSlice