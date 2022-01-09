import React from "react";
import { ProfileNotification } from "../components/profile/profile-notification";

export const NotificationHOC = () => {
  return (
    <section className="container mt-32 ">
      <h2 className="title-section mb-24"> الإشعارات</h2>

      <div className="container-section ">
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
        <ProfileNotification />
      </div>
    </section>
  );
};
