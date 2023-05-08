import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import { RootState,AppDispatch } from "./store";

export const AppUseDispatch  =  ()=>useDispatch<AppDispatch>();
export const useAppSelector :TypedUseSelectorHook<RootState> = useSelector;