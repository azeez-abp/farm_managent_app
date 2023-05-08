import {createSlice} from  '@reduxjs/toolkit';
///1. create the component slice
/// 2. add it to the storew
let data:{name:string}[] 
 const postSlice   = createSlice({
    name:"post",
    initialState:{n:'n'},
    reducers:{
       post_:(state, action:PayloadAction<number>)=>{
         
            state  = {...state}
       }
           
    }

 
})

export const getData  = (state:any)=>state.post_
export const {post_}  = postSlice.actions
export default postSlice.reducer