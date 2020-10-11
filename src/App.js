/**
 * @author Tapaswini
 *
 */
import React from 'react';
import styles from './App.module.css';
import Notifications from "./Notifications/Notifications";
import data from "./data";
import 'antd/dist/antd.css';
import {findById, findIndex} from "./helpers/arrayHelpers";
import {connect} from 'react-redux';
import {SHOW_NOTIFICATION, MARK_READ, MARK_ALL_READ, MARK_UNREAD} from './reducers/NotificationReducer';




class App extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   showNotification: false,
    //   notifications: data || [],
    // };
  }

  showHandler = () => {
    this.setState({
      showNotification: !this.props.showNotification
    })
  }

  // handleMarkRead = (id) => {
  //   const allNotifications = [...this.state.notifications];
  //   let item = {...findById(allNotifications, id)}
  //
  //   item.status = "read";
  //
  //   debugger
  //
  //   let index = findIndex(allNotifications, id);
  //
  //   allNotifications[index] = item;
  //
  //
  //   this.setState({
  //     notifications: allNotifications
  //   })
  // }

  // handleMarkAllRead = () => {
  //
  // }

  render() {
    console.log('checking',this.props);
    const notifications = this.props.notification_store.notifications;
    const unread_notifications = notifications.filter((item) => item.status === 'unread');
    return (
        <div className="App">
          <div className={styles.NotificationIcon} onClick={this.props.toggle} style={{background: unread_notifications.length ? 'rgb(31, 143, 251)' : '#9c9c9c'}}>
            <p>{unread_notifications.length}</p>
          </div>
          <div>
            <Notifications
              show={this.props.notification_store.showNotification}
              notifications={notifications}
              unread_count={unread_notifications.length}
              handleMarkedRead={this.props.markAsRead}
              handleMarkedUnread={this.props.markAsUnread}
              handleMarkAllRead = {this.props.markAllRead}
            />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (store) =>{
  // debugger;
  // console.log('store: ', store );
  return store;
}

const mapDispatchStateToProps = (dispatch) => {
  return{
    toggle : () => {dispatch({type:SHOW_NOTIFICATION})},
    markAllRead : () => {dispatch({type:MARK_ALL_READ})},
    markAsRead: (id) => {dispatch({type:MARK_READ, payload: id})},
    markAsUnread: (id) => {dispatch({type:MARK_UNREAD, payload: id})}
  }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(App);
