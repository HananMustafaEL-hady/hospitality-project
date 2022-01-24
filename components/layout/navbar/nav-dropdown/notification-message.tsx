import React, { Fragment } from "react";
import Image from "next/image";
import { NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useNotificationsMessages } from "../../../../hook/notifications.hook";
import { LoadingSpinner } from "../../../spinner";
import { ProfileNotificationMessage } from "../../../profile/profile-notification/notification-message.tsx";
import dayjs from "dayjs";

export const NotificationMessage = () => {
  const { notificationPage, isLoading, error } = useNotificationsMessages(1);

  if (isLoading) return <LoadingSpinner color={"green"} loading={isLoading} />;

  return (
    <div className="dropdown-menu-notification">
      <Link href={"/profile/notification"}>
        <a className="dropdown-item">
          <h3 className="font-14">
            {notificationPage?.data[notificationPage.data.length - 1].text}
          </h3>
          <span className="notification__date font-14">
            {" "}
            {dayjs(
              notificationPage?.data[notificationPage.data.length - 1].createdAt
            ).format("hh A")}
          </span>
        </a>
      </Link>

      <NavDropdown.Divider />
      <Link href={"/profile/notification"}>
        <a className="dropdown-item">
          <h3 className="font-14">
            {" "}
            {notificationPage?.data[notificationPage.data.length - 2].text}
          </h3>
          <span className="notification__date font-14">
            {" "}
            {dayjs(
              notificationPage?.data[notificationPage.data.length - 2].createdAt
            ).format("hh A")}{" "}
          </span>
        </a>
      </Link>

      <NavDropdown.Divider />
      {/* <Link href={"/profile/notification"}>
        <a className="dropdown-item">
          <h3 className="font-14">
            {" "}
            {notificationPage?.data[notificationPage.data.length - 3]?.text}
          </h3>
          <span className="notification__date font-14">
            {" "}
            {dayjs(
              notificationPage?.data[notificationPage.data.length - 3]?.createdAt
            ).format("hh A")}
          </span>
        </a>
      </Link> */}
    </div>
  );
};
