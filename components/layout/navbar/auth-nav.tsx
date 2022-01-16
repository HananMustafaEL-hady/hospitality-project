import Link from "next/link";
import React from "react";
import { Nav } from "react-bootstrap";
import { ChatNotificationDropdown } from "./nav-dropdown/chat-notification-dropdown";
import { NotificationDropdown } from "./nav-dropdown/notification-dropdown";
import { ProfileDropdown } from "./nav-dropdown/profile-dropdown";
import Image from "next/image";
import { BlurImage } from "../../blurimage";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";

export const AuthNav = () => {
  const user = useSelector((state: RootState) => state.auth);
  console.log(user);
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
      <Link href={"/profile"}>
        <a>
          {/* {user ? (
            <BlurImage
              image={user?.profileImage}
              classimage="rounded-circle cursor-pointer"
            />
          ) : (
            ""
          )} */}
        </a>
      </Link>
    </Nav>
  );
};
