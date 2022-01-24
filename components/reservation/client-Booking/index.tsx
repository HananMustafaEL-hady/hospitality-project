import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Booking } from "../../../models/bookings.model";
import { RequestDetails } from "../../reservation/request";
import { RoomDetails } from "../../room/room-details";
import { ImagesSwiper } from "../../swiper";
import { ProfileCard } from "../../user/profile-card";
interface Props {
  booking: Booking;
}
export const ClientBooking: React.FC<Props> = ({ booking }) => {
  console.log(booking);
  const [state, sethandleSelect] = useState(0);

  return (
    <section className="container mt-32">
      <Tabs id="left-tabs-example" onSelect={(index) => sethandleSelect(index)}>
        <div className="row mt-32">
          <div className="col-lg-3 col-sm-12 ">
            <TabList className="container-section section-edit-info-right p-0">
              <Tab selectedClassName="tab-selected">
                <h2 className="font-14  m-0"> تفاصيل الطلب</h2>
              </Tab>
              <Tab selectedClassName="tab-selected ">
                <h2 className="font-14 m-0 "> تفاصيل الغرفة</h2>
              </Tab>
            </TabList>
            {state == 1 && (
              <ProfileCard
                owner={booking?.room?.owner}
                provider={booking.provider}
              />
            )}
          </div>
          <div className="col-lg-9 col-sm-12 container-section section-edit-info-left">
            <TabPanel>
              <RequestDetails booking={booking} />
            </TabPanel>
            <TabPanel>
              <ImagesSwiper images={booking?.room?.images} />
              <section className="px-32">
                <RoomDetails
                  hasReservationSection={false}
                  hasCapacitySection={false}
                  room={booking?.room}
                />
              </section>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
};
