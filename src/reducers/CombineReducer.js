import {combineReducers} from 'redux';
// import Notifications from "../Notifications/Notifications";
import NotificationReducer from "./NotificationReducer";

const CombineReduces = combineReducers({
  notification_store : NotificationReducer,
})

export default CombineReduces;