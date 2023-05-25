import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
    }),
  endpoints: (builder) => ({   
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "user/register",
        method: "POST",
            headers: {
           "Content-type":"application/json"
       }, body:userData
      }),
    }),
      loginUser: builder.mutation({
      query: (userCredentials) => ({
        url: "user/login",
        method: "POST",
            headers: {
           "Content-type":"application/json"
       }, body:userCredentials
      }),
        }),
    }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authAPI;
export default authAPI;