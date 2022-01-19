import React from "react";
import { ChatForm } from "../components/chat/chat-form";
import { ChatNotification } from "../components/chat/chat-notification";
import { ChatSearch } from "../components/chat/chat-search";
import { Chatmessage } from "../components/chat/message";

export const Chathoc = () => {
  return (
    <section className="container">
      <h2 className="title-section mb-24 mt-32">المحادثات</h2>
      <div className="row chat">
        <div className="col-lg-3  col-md-3 col-sm-12  chat__right ">
          <ChatSearch />
          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/man.jpg"}
            unseenMes={0}
            status={"online"}
          />
          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/man2.png"}
            unseenMes={3}
            status={"online"}
          />
          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/man2.png"}
            unseenMes={5}
            status={"online"}
          />
          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/man2.png"}
            unseenMes={1}
            status={"online"}
          />

          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/man.jpg"}
            unseenMes={0}
            status={"online"}
          />
          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/man.jpg"}
            unseenMes={0}
            status={"online"}
          />
          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/man.jpg"}
            unseenMes={9}
            status={"online"}
          />
          <ChatNotification
            name={"محمد سمير"}
            message="الغرفة كويسة ونظيفة عايز احجزها بعد إذنك بكام الليلة"
            imageurl={"/man.jpg"}
            unseenMes={5}
            status={"online"}
          />
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12  chat__left">
          <div className="chat__left__user">
            <h3>محمد سمير</h3>
          </div>
          <section className="chat__left__message">
            <Chatmessage
              imageSrc={"/man2.png"}
              time={"10.35PM"}
              message={"مرحبا"}
              messageChatClass="receiver"
            />
            <Chatmessage
              imageSrc={"/man.jpg"}
              time={"1.30PM"}
              message={"مرحبا"}
              messageChatClass="sender"
            />
            <Chatmessage
              imageSrc={"/man2.png"}
              time={"10.35PM"}
              message={
                "لو سمحت كنت عايز أجر الغرفة بتاعتك 5 أيام ممكن تفاصيل أكتر ؟"
              }
              messageChatClass="receiver"
            />
            <Chatmessage
              imageSrc={"/man.jpg"}
              time={"1.30PM"}
              message={"تمام هبعتلك صور ليها أكتر تتفرج عليها"}
              messageChatClass="sender"
            />

            <Chatmessage
              imageSrc={"/man2.png"}
              time={"10.35PM"}
              message={
                "لو سمحت كنت عايز أجر الغرفة بتاعتك 5 أيام ممكن تفاصيل أكتر ؟"
              }
              messageChatClass="receiver"
            />
          </section>
          <ChatForm />
        </div>
      </div>
    </section>
  );
};
