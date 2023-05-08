import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../feature/counter/counter-slice'
import postSlice from '../feature/post/postSlice';
import authSlice from '../feature/auth/authSlice';
import { apiSlice } from '../api/auth';
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import globalSlice from '../feature/global/globalSlice';

export const store  = configureStore({
    reducer:{
        counter :counterSlice,
        postSlice,
        authSlice,
        globalSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:curryGetDefaultMiddleware=>curryGetDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true   
})

export type AppDispatch  = typeof store.dispatch;
export type RootState  = ReturnType<typeof store.getState>//get me typeof store.getState
