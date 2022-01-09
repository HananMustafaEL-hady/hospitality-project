import React from "react";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ChatNotification } from "../../chat/chat-notification";
import Link from "next/link";
import { ProfileDropdown } from "./nav-dropdown/profile-dropdown";
import { ChatNotificationDropdown } from "./nav-dropdown/chat-notification-dropdown";
import { NotificationDropdown } from "./nav-dropdown/notification-dropdown";
export const LayoutNavbar = () => {
  return (
    <Navbar expand="lg" className="nav-layout">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a>
              <Image src="/logo.png" width={40} height={40} />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
            <Nav.Link>
              <Link href={"/room/add"}>
                <span className="add-room">إضافة غرفة +</span>
              </Link>
            </Nav.Link>

            <ChatNotificationDropdown />
            <NotificationDropdown />
            <ProfileDropdown />
            <Link href={"/profile"}>
              <a>
                <Image
                  src="/profile.png"
                  width={50}
                  height={50}
                  className="rounded-circle cursor-pointer"
                />
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
