import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  AcceptedRequest,
  RejectedRequest,
} from "../../../api/Incoming-request.api";
import { Booking } from "../../../models/bookings.model";
import { RequestDetails } from "../../reservation/request";
import { RoomDetails } from "../../room/room-details";
import { ImagesSwiper } from "../../swiper";
import { ProfileCard } from "../../user/profile-card";
import { DeletedRejectedModal } from "./cancel-request";
interface Props {
  booking: Booking;
}
export const ProviderBooking: React.FC<Props> = ({ booking }) => {
  const [state, sethandleSelect] = useState(0);
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);

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
            {state == 1 && (
              <ProfileCard
                owner={booking?.room?.owner}
                provider={booking.provider}
              />
            )}
          </div>
          <div className="col-lg-8 col-sm-12  section-edit-info-left">
            <TabPanel>
              <section className="container-section">
                <RequestDetails booking={booking} />
              </section>

              <div className="d-flex justify-content-center mt-32">
                {booking.status == "PENDING" ? (
                  <button
                    className="btn btn-primary btn-md ml-16"
                    onClick={() => AcceptedRequest(booking._id)}
                  >
                    موافق
                  </button>
                ) : (
                  ""
                )}
                {booking.status == "PENDING" ||
                booking.status == "bookingsAccepted" ||
                booking.status == "ACCEPTED" ? (
                  <button
                    className="btn btn-outline-primary btn-md"
                    onClick={() => setDeleteModalShow(true)}
                  >
                    إلغاء
                  </button>
                ) : (
                  ""
                )}
              </div>
            </TabPanel>
            <TabPanel classID="container-section">
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
      <DeletedRejectedModal
        handleShow={setDeleteModalShow}
        show={deleteModalShow}
        bookingid={booking._id}
      />
    </section>
  );
};
