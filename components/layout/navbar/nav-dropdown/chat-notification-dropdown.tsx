import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { ChatNotification } from "../../../chat/chat-notification";
export const ChatNotificationDropdown = () => {
  return (
    <NavDropdown
      className="pt-2"
      title={
        <i className="fas fa-comment-dots i__Notification">
          {" "}
          <span>3</span>
        </i>
      }
      id="navbarScrollingDropdownChat"
    >
      <Link href={"/chat"}>
        <a className="dropdown-item dropdown-item-Notification">
          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/room.png"}
            unseenMes={5}
            status={"online"}
          />
        </a>
      </Link>

      <NavDropdown.Item href="#action4" className="dropdown-item-Notification">
        <ChatNotification
          name={"محمد عبد القادر"}
          message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
          imageurl={"/man.jpg"}
          unseenMes={5}
          status={"online"}
        />
      </NavDropdown.Item>
      <NavDropdown.Item href="#action5" className="dropdown-item-Notification">
        <ChatNotification
          name={"مي محمد"}
          message="ممكن صور اكثر للغرفة و هل ستكون متاحة في اوقات اخري  "
          imageurl={"/women.jpg"}
          unseenMes={5}
          status={"offline"}
        />
      </NavDropdown.Item>
    </NavDropdown>
  );
};
