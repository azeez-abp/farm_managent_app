import {createSlice, PayloadAction} from '@reduxjs/toolkit'
 
interface iState{
   value:number,
}

const initialState:iState  = {
    value:0,
}
// createSlice is a function that return an object
const counterSlice  = createSlice({ //Action createtor
    name:'counter',
    initialState,
    reducers: {// update state for all case define
        //Imme make it immutable
        increamental :(state)=>{
            state.value++;
        }
        ,
        amountAdd:(state,action:PayloadAction<number>)=>{
             state.value += action.payload
        }
    }

})
console.log(counterSlice)

export const {increamental}  = counterSlice.actions ////change the state
export default counterSlice.reducer //// store the state in store