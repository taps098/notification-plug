import CombineReduces from "./reducers/CombineReducer";
import {createStore} from "redux";

 const store = createStore(CombineReduces);

export default store;