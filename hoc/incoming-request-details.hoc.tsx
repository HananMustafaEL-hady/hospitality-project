import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RequestDetails } from "../components/reservation/request";
import { RoomDetails } from "../components/room/room-details";
import { RoomDetailsSwiper } from "../components/room/room-images-slider";
import { ProfileCard } from "../components/user/profile-card";

export const IncomingRequestDetailsHOC = () => {
  const [state, sethandleSelect] = useState(0);
  return (
    <section className="container mt-32">
      <Tabs id="left-tabs-example" onSelect={(index) => sethandleSelect(index)}>
        <div className="row mt-32">
          <div className="col-lg-3 col-sm-12 ">
            <TabList className="container-section section-edit-info-right p-0">
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14  m-0"> تفاصيل الطلب</h2>
              </Tab>
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14 m-0 "> تفاصيل الغرفة</h2>
              </Tab>
            </TabList>
            {/* {state == 1 && <ProfileCard />} */}
          </div>
          <div className="col-lg-8 col-sm-12  section-edit-info-left">
            <TabPanel>
              <section className="container-section">
                <RequestDetails />
              </section>
              <div className="d-flex justify-content-center mt-32">
                <button className="btn btn-primary btn-md ml-16">موافق</button>
                <button className="btn btn-outline-primary btn-md">
                  إلغاء
                </button>
              </div>
            </TabPanel>
            <TabPanel classID="container-section">
              <RoomDetailsSwiper />
              <section className="px-32">
                {/* <RoomDetails hasReservationSection={false} /> */}
              </section>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
};
