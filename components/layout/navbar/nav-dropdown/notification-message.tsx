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

  if (isLoading)
    return (
      <div className="d-flex justify-content-cemter mt-1">
        <LoadingSpinner color={"blue"} loading={isLoading} />;
      </div>
    );

  return (
    <div className="dropdown-menu-notification">
      {notificationPage?.data.map((item, index) => {
        return (
          <Fragment>
            <Link href={"/profile/notification"}>
              <a className="dropdown-item">
                <h3 className="font-14">{item.text}</h3>
                <span className="notification__date font-14">
                  {" "}
                  {dayjs(item.createdAt).format("hh A")}
                </span>
              </a>
            </Link>

            <NavDropdown.Divider />
          </Fragment>
        );
      })}
      <div className=" d-flex justify-content-center mt-1">
        <Link href={"/profile/notification"}>
          <a className="btn  btn-primary">مشاهدة المزيد</a>
        </Link>
      </div>
    </div>
  );
};
