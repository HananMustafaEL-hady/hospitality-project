import React from "react";
import Image from "next/image";

interface Props {
  imageSrc: string;
  time: string;
  message: string;
  messageChatClass: string;
}
export const Chatmessage: React.FC<Props> = ({
  imageSrc,
  time,
  message,
  messageChatClass,
}) => {
  return (
    <div className={`chat__${messageChatClass}`}>
      <div>
        <img
          src={imageSrc}
          className="chat__image"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/avatar.png";
          }}
        />
        <p className="chat__time">{time}</p>
      </div>
      <div className={`chat__${messageChatClass}__message`}>{message}</div>
    </div>
  );
};
