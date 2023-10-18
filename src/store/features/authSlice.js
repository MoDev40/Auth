import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import BASE_URL from '../baseUrl'
import Cookies from 'js-cookie'

const setToken = (token)=>{
    Cookies.set("token",token,{expires:1})
}

const authSlice = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
    }),

    endpoints:(builder)=>({
                //? SignUp post request 

                signUp:builder.mutation({
                    query:(newUser)=>({
                        url:"signup",
                        method:"POST",
                        body:{
                            name:newUser.name,
                            email:newUser.email,
                            password:newUser.password
                        }
                    })
                }),
        
                //* Login post request
        
                logIn:builder.mutation({
                    query:(existUser)=>({
                        url:"login",
                        method:"POST",
                        body:{
                            email:existUser.email,
                            password:existUser.password
                        }
                    }),

                    onQueryStarted: async (arg,{queryFulfilled})=>{
                        try{
                            const result = await queryFulfilled;
                            setToken(result.data.token)
                        }catch(error){
                            console.log({error});
                        }
                    }
                })
    })
})

export const {useLogInMutation,useSignUpMutation} = authSlice

export default authSlice