import React from "react";
import styles from './Notifications.module.css';
import {Button, Tooltip} from 'antd';
import {CheckCircleTwoTone, ExclamationOutlined} from '@ant-design/icons';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }
  openLink = (link) => {
    window.open(link, '_blank');
  }

  render() {

    const mapping = this.props.notifications.map(item => {
      console.log("NOtification > Item > ", item);
      return (
        <div key = {item.id} onClick = {() => this.openLink(item.url)} className={styles.notificationItem} style={{borderColor : item.status === 'unread' ? 'rgb(31 143 251)' : '#d2d2d2'}}>
          <div className={styles.headingReadButton}>
            <div style={{fontSize: '15px', fontWeight: 'bold'}}>{item.title}</div>
            <div>
              {item.status === 'unread' ?
                <Tooltip title="Mark As Read">
                  <Button type="primary" shape="circle" onClick={(e) => {e.stopPropagation(); this.props.handleMarkedRead(item.id)}} icon={<CheckCircleTwoTone/>}
                          size='small'/>
                </Tooltip>
                :
                <Tooltip title="Mark As Unread">
                  <Button type="default" shape="circle" onClick={(e) =>{e.stopPropagation(); this.props.handleMarkedUnread(item.id)}} icon={<ExclamationOutlined/>}
                          size='small'/>
                </Tooltip>
              }


            </div>
          </div>
          <div>{item.details}</div>
        </div>
      );
    })

    let handleAllMarkedRead = this.props.handleMarkAllRead;
    return (
      <div className={styles.NotificationBox} style={{display: this.props.show ? 'block' : 'none'}}>
        <header className={styles.headerPart}>
          <div>
            <h1 className={styles.heading}>Notifications ({this.props.unread_count})</h1>
          </div>
        </header>
        <div className={styles.notifications}>
          {mapping}
        </div>
        <div className={styles.footer}>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            handleAllMarkedRead();
          }}>Mark All Read</a>
        </div>
      </div>
    );
  }
}

export default Notifications;