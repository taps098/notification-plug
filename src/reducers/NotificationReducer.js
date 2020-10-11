import data from "../data";
import {produce} from "immer";
import {find} from 'lodash';

const initial_store = {
  showNotification: false,
  notifications: data || [],
};

export const MARK_READ = 'MARK_READ';
export const MARK_UNREAD = 'MARK_UNREAD';
export const MARK_ALL_READ = 'MARK_ALL_READ';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';


const NotificationReducer = (store = initial_store, action) => {
  const new_store = {...store};
    switch (action.type){
      case MARK_READ:
        return produce(store, (draft) => {
          let item = find(draft.notifications, (item) => item.id === action.payload)
          item.status = 'read';
        })
      case MARK_UNREAD:
        return produce(store, (draft) => {
          let item = find(draft.notifications, (item) => item.id === action.payload)
          item.status = 'unread';
        })
      case MARK_ALL_READ:
        return produce(store, (draft) => {
          draft.notifications.forEach((item) => {
            item.status = 'read';
          });
        })
      case SHOW_NOTIFICATION:
        return produce(store, (draft) => {
          draft.showNotification = !draft.showNotification;
        })
      default:
        return store;
    }
}
export default NotificationReducer;