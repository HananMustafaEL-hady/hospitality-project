import React from "react";
import Image from "next/image";
import { NavDropdown } from "react-bootstrap";
import Link from "next/link";
export const NotificationDropdown = () => {
  return (
    <NavDropdown
      className="pt-2"
      title={
        <i className="far  fa-bell i__Notification">
          <span>4</span>
        </i>
      }
      id="navbarScrollingDropdownChat"
    >
      {/* <NavDropdown.Item> */}
      <Link href={"/profile/notification"}>
        <a className="dropdown-item">
          <h3 className="font-14">تم الموافقة علي طلبك لحجز الغرفة ....</h3>
          <span className="notification__date font-14">12:43 am</span>
        </a>
      </Link>

      <NavDropdown.Divider />
      <Link href={"/profile/notification"}>
        <a className="dropdown-item">
          <h3 className="font-14">تم الموافقة علي طلبك لحجز الغرفة ....</h3>
          <span className="notification__date font-14">12:43 am</span>
        </a>
      </Link>

      <NavDropdown.Divider />
      <Link href={"/profile/notification"}>
        <a className="dropdown-item">
          <h3 className="font-14">تم الموافقة علي طلبك لحجز الغرفة ....</h3>
          <span className="notification__date font-14">12:43 am</span>
        </a>
      </Link>
    </NavDropdown>
  );
};
