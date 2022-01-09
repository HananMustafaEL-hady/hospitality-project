import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RoomsCard } from "../components/room/rooms-card";
import { Room } from "../models/Rooms";
import Image from "next/image";
import { RoomRequestsCardS } from "../components/room/rooms-card/Incoming-request-cards";
interface Props {
  Rooms: [Room];
}

export const IncomingRequestsHOC: React.FC<Props> = ({ Rooms }) => {
  return (
    <section className="container mt-32">
      <Tabs id="left-tabs-example">
        <div className="container">
          <h2 className="col-lg-3 col-sm-12 title-section"> الطلبات الواردة</h2>
        </div>
        <div className="row mt-32">
          <div className="col-lg-3 col-sm-12">
            <TabList className="container-section section-edit-info-right section-edit-info-right__reservation p-0">
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14  m-0"> قيد الإنتظار</h2>
              </Tab>
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14 m-0 "> موافق عليها</h2>
              </Tab>{" "}
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14 m-0 "> مكتملة</h2>
              </Tab>{" "}
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14 m-0 "> ملغية</h2>
              </Tab>{" "}
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14 m-0 "> منتهية</h2>
              </Tab>
            </TabList>
          </div>
          <div className="col-lg-8 col-sm-12  section-edit-info-left">
            <TabPanel>
              <RoomRequestsCardS Rooms={Rooms} />
            </TabPanel>
            <TabPanel>
              <RoomRequestsCardS Rooms={Rooms} />
            </TabPanel>
            <TabPanel>
              <RoomRequestsCardS Rooms={Rooms} />
            </TabPanel>{" "}
            <TabPanel>
              <RoomRequestsCardS Rooms={Rooms} />
            </TabPanel>{" "}
            <TabPanel>
              <RoomRequestsCardS Rooms={Rooms} />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
};
