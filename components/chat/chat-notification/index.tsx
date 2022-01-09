import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
interface Props {
  name: string;
  message: string;
  imageurl: string;
  unseenMes: Number;
  status: string;
}

export const ChatNotification: React.FC<Props> = ({
  name,
  message,
  imageurl,
  unseenMes,
  status,
}) => {
  return (
    <div className="Notification">
      <div className="Notification__image">
        <div className={status == "online" ? "active" : "offline"}></div>
        <Image src={imageurl} layout="fill" />
      </div>
      <div className="Notification__message">
        <span>{name}</span>
        {message.length >= 35 ? (
          <p>{message.substring(1, 35)}...</p>
        ) : (
          <p>{message}</p>
        )}
      </div>

      <div className="Notification__unseenMes">
        {unseenMes ? <p>{unseenMes}</p> : ""}
      </div>
    </div>
  );
};
