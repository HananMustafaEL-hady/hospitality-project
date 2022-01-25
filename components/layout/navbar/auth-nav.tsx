import Link from "next/link";
import React from "react";
import { Nav } from "react-bootstrap";
import { ChatNotificationDropdown } from "./nav-dropdown/chat-notification-dropdown";
import { NotificationDropdown } from "./nav-dropdown/notification-dropdown";
import { ProfileDropdown } from "./nav-dropdown/profile-dropdown";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../../slices/auth.slices";
export const AuthNav = () => {
  const user = useSelector(useCurrentUser);

  return (
    <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
      {" "}
      <Nav.Link>
        <Link href={"/room/add"}>
          <a className="add-room">
            <i className="far fa-plus"></i> {"  "}
            <span>إضافة غرفة </span>
          </a>
        </Link>
      </Nav.Link>
      <ChatNotificationDropdown />
      <NotificationDropdown />
      <ProfileDropdown />
      <Link href={`/profile/${user?._id}`}>
        <a>
          <img
            src={user?.profileImage?.original}
            alt=""
            className="rounded-circle cursor-pointer user-title__img"
          />
        </a>
      </Link>
    </Nav>
  );
};
