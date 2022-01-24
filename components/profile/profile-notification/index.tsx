import React from "react";
import { NotificationProps } from "../../../models/notification.model";
import { ProfileNotificationMessage } from "./notification-message.tsx";
interface props {
  notifications: [NotificationProps];
}
export const ProfileNotifications: React.FC<props> = ({ notifications }) => {
  console.log(notifications);
  return (
    <div className="container-section ">
      {notifications.map((item, index) => {
        return <ProfileNotificationMessage notification={item} />;
      })}
    </div>
  );
};
