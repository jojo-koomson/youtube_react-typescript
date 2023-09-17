// NotificationIcon.js
import React, { useState } from 'react';
import './Notification.scss';
import { images } from '../../constants';

const NotificationIcon = () => {
  const [notificationCount, setNotificationCount] = useState(9);

  const handleNotificationClick = () => {
    // Handle click event (e.g., show notifications)
  };

  return (
    <div className="notification-icon" onClick={handleNotificationClick}>
      <img src={images.Notification} alt="Notification Icon" width={30} height={30}/>
      {notificationCount > 0 && (
        <span className="badge">{notificationCount}</span>
      )}
    </div>
  );
};

export default NotificationIcon;
