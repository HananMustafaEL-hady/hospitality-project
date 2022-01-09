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
          <p>تم الموافقة علي طلبك لحجز الغرفة ....</p>
          <p>12:43 am</p>
        </a>
      </Link>

      <NavDropdown.Divider />

      <NavDropdown.Item href="#action4">
        <p>تم الموافقة علي طلبك لحجز الغرفة ....</p>
        <p>12:43 am</p>
      </NavDropdown.Item>

      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">
        <p>تم الموافقة علي طلبك لحجز الغرفة ....</p>
        <p>12:43 am</p>
      </NavDropdown.Item>
    </NavDropdown>
  );
};
