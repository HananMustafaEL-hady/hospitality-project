import dayjs from "dayjs";
import React from "react";
import { NotificationProps } from "../../../../models/notification.model";
interface props {
  notification: NotificationProps;
}
export const ProfileNotificationMessage: React.FC<props> = ({
  notification,
}) => {
  return (
    <div className="notification">
      <h3 className="notification__message">{notification.text}</h3>
      <span className="notification__date">
        {dayjs(notification.createdAt).format("MMM ddd hh A")}
      </span>
    </div>
  );
};
