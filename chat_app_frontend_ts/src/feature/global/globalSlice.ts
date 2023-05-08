import {createSlice} from '@reduxjs/toolkit'

const globalSlice   = createSlice({
    name:"global",
    initialState:{mode:"dark"},
    reducers:{ ///reducer functions that chage state
       setMode: (state :any)=>{
        state.mode = state.mode==='light'? 'dark':'light'
       }

    }
})


export const {setMode}  = globalSlice.actions
export default  globalSlice.reducer