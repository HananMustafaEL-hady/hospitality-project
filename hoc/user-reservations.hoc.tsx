import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RoomsCard } from "../components/room/rooms-card";
import { Room } from "../models/Rooms";
import Image from "next/image";
interface Props {
  Rooms: [Room];
}

export const UserReservationsHOC: React.FC<Props> = ({ Rooms }) => {
  const [state, sethandleSelect] = useState(0);

  return (
    <section className="container mt-32">
      <Tabs id="left-tabs-example" onSelect={(index) => sethandleSelect(index)}>
        <div className=" container  ">
          <div className="row">
            <h2 className="col-lg-3 col-sm-12 title-section"> حجوزاتي</h2>
            {state == 1 && (
              <div className="col-lg-8 col-sm-12 user-reservations">
                <div className="d-flex">
                  <div className="user-reservations__warning">
                    <div className="user-reservations__warning__image-container">
                      <img src="/alertwarning.png" />
                    </div>
                  </div>
                  <p>يجب الدفع قبل المدة المحددة حتى لا يتم إلغاء الحجز</p>
                </div>
              </div>
            )}
          </div>
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
              <RoomsCard
                Rooms={Rooms}
                roomscol={4}
                urllink="/profile/reservations"
              />
            </TabPanel>
            <TabPanel>
              <RoomsCard
                Rooms={Rooms}
                roomscol={4}
                urllink="/profile/reservations"
              />
            </TabPanel>
            <TabPanel>
              <RoomsCard
                Rooms={Rooms}
                roomscol={4}
                urllink="/profile/reservations"
              />
            </TabPanel>{" "}
            <TabPanel>
              <RoomsCard
                Rooms={Rooms}
                roomscol={4}
                urllink="/profile/reservations"
              />
            </TabPanel>{" "}
            <TabPanel>
              <RoomsCard
                Rooms={Rooms}
                roomscol={4}
                urllink="/profile/reservations"
              />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
};
