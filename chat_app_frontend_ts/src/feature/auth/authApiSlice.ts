
import { apiSlice } from "../../api/auth";

export const authApiSlice  = apiSlice.injectEndpoints({
    endpoints:builder=>({
        login:builder.mutation({
            query: credentials=>({
                uri:'/api/v1/user/auth',
                method: 'POST',
                body: {...credentials}
            })
        })
    })
})
//console.log(authApiSlice)
export const {useLoginMutation} = authApiSlice