import {createSlice,PayloadAction,CaseReducer} from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const authSlice  = createSlice({
    name:"auth",
    initialState:{},
    reducers :{
        setCredentials:(state:any,action:PayloadAction<{user:any,accessToken:string,refreshToken:string}>)=>{
            //we take some data from action 
            // this data is set into state\]
            state.user  = action.payload.user
            state.accessToken  = action.payload.accessToken
            state.refreshToken  = action.payload.refreshToken

        },  

        logOut: (state:any,action)=>{
             state.user = null,
             state.refreshToken = null,
             state.accessToken = null
        }  
    }

})


export default authSlice.reducer   ///store in store
export const getAuthdata  = (state:any)=>state.auth    ////return data from  store use useSelector
export const {setCredentials,logOut} = authSlice.actions  /// perform action on the data in store use useDispatch



