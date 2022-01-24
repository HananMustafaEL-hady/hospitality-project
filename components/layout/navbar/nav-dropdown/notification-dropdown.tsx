import React from "react";
import Image from "next/image";
import { NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useNotificationsCount } from "../../../../hook/notifications.hook";
import { NotificationMessage } from "./notification-message";
export const NotificationDropdown = () => {
  const { count, isLoading, error } = useNotificationsCount();

  return (
    <NavDropdown
      className="pt-2"
      title={
        <i className="far  fa-bell i__Notification">
          <span>{count ? (count > 90 ? `+90` : count) : 0}</span>
        </i>
      }
      id="navbarScrollingDropdownChat"
    >
      <NotificationMessage />
    </NavDropdown>
  );
};
