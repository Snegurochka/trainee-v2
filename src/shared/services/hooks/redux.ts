import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../app/services/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();