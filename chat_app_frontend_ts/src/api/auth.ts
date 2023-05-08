import {createApi, fetchBaseQuery,BaseQueryApi} from '@reduxjs/toolkit/query/react'
import { setCredentials,logOut } from '../feature/auth/authSlice'


const baseQuery   = fetchBaseQuery({
    baseUrl:"http://127.0.0.1:8000/api/v1/user/auth",
    credentials:'include',
    prepareHeaders:(Headers,{getState})=>{
        const token  = getState()?.auth?.token
        if(token){
            Headers.set("authorization","Bearer "+token)
        
        }
        Headers.set('Access-Control-Allow-Origin','*')

        return Headers
    }
    
})


const baseQueryWithReauth  = async (args:string,api:BaseQueryApi,extraOption:object)=>{
    let result    = await baseQuery(args,api,extraOption);
    if(result?.error?.status === 403){

         const resfreshResult  = await baseQuery('/api/user/reateNewToken',api,extraOption)

         if(resfreshResult?.data){
            const user  = api.getState().auth.user

            api.dispatch(setCredentials({...resfreshResult.data,user}))
            result  = await baseQuery(args,api,extraOption)
         }else{
            api.dispatch(logOut({}))
         }

    }
    return result
}


export const apiSlice  = createApi({
    baseQuery:baseQueryWithReauth,
    endpoints:builder=>({}),
})

//createApi().injectEndpoints()