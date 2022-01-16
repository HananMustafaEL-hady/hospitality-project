import React from "react";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ChatNotification } from "../../chat/chat-notification";
import Link from "next/link";
import { ProfileDropdown } from "./nav-dropdown/profile-dropdown";
import { ChatNotificationDropdown } from "./nav-dropdown/chat-notification-dropdown";
import { NotificationDropdown } from "./nav-dropdown/notification-dropdown";
import { AuthNav } from "./auth-nav";
import { parseCookies } from "nookies";
import { UnauthNav } from "./unauth-nav";

export const LayoutNavbar = () => {
  const { token } = parseCookies();
  console.log(token);
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
          {token ? <AuthNav /> : <UnauthNav />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
