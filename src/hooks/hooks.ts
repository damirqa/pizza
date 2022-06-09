import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ReduxDispatch, ReduxRootState } from "../redux/store";

export const useTypedDispatch = () => useDispatch<ReduxDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxRootState> =
  useSelector;
