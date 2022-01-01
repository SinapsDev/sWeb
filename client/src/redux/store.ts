import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { UserReducer } from "./reducers/user/UserReducer";

const reducers = combineReducers({
    user: UserReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSIONCOMPOSE__ || compose;

const store = createStore(
  reducers ,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
export default store;

export type StoreType = ReturnType<typeof reducers>;
export const useReduxState: TypedUseSelectorHook<StoreType> = useSelector;