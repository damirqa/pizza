import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ReduxDispatch, ReduxRootState } from "../redux/store";

export const useReduxDispatch = () => useDispatch<ReduxDispatch>();
export const useReduxSelector: TypedUseSelectorHook<ReduxRootState> =
  useSelector;
