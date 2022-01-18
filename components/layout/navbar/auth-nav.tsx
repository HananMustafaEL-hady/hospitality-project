import Link from "next/link";
import React from "react";
import { Nav } from "react-bootstrap";
import { ChatNotificationDropdown } from "./nav-dropdown/chat-notification-dropdown";
import { NotificationDropdown } from "./nav-dropdown/notification-dropdown";
import { ProfileDropdown } from "./nav-dropdown/profile-dropdown";
import { BlurImage } from "../../blurimage";
import useCurrentUser from "../../../hook/select-current-user.hook";

export const AuthNav = () => {
  const { user } = useCurrentUser();

  return (
    <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
      {" "}
      <Nav.Link>
        <Link href={"/room/add"}>
          <a className="add-room">
            <span>إضافة غرفة </span>
            <i className="fas fa-plus"></i>
          </a>
        </Link>
      </Nav.Link>
      <ChatNotificationDropdown />
      <NotificationDropdown />
      <ProfileDropdown />
      <Link href={`/profile/${user?.id}`}>
        <a>
          {/* {user ? (
            <BlurImage
              image={user.profileImage}
              classimage="rounded-circle cursor-pointer"
            />
          ) : (
            ""
          )} */}
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
