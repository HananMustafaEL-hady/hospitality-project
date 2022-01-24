import { Data } from "@react-google-maps/api";
import dayjs from "dayjs";
import React from "react";
import { Booking } from "../../../models/bookings.model";
import { BookingStatus } from "../booking-status";
interface Props {
  booking: Booking;
}
export const RequestDetails: React.FC<Props> = ({ booking }) => {
  console.log("from booking request", booking);
  const getDiffDays = (date1: string, date2: string) => {
    var endDate = new Date(date2);
    var startDate = new Date(date1);
    console.log(endDate, startDate);
    var Difference_In_Time = endDate.getTime() - startDate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  };

  const diffdays = Math.ceil(getDiffDays(booking.startDate, booking.endDate));
  const totalPrice = diffdays * booking.room.nightPrice;
  console.log(diffdays);
  console.log();
  return (
    <section className="p-32 d-flex justify-content-center flex-column ">
      <div>
        <h3 className="title-section line-34 mb-16">{booking?.room?.name}</h3>
        <ul className="RequestDetails">
          <li>
            <h4>الحالة</h4>
            <BookingStatus status={booking.status} />
          </li>
          <li>
            <h4>عدد الافراد</h4>
            <div className="room-details__user-icon">
              <i className="fas fa-user"></i>
              <span> {booking?.room?.capacity} </span>
            </div>{" "}
          </li>
          <li>
            <h4>من تاريخ</h4>
            <p className="title-subsection">
              {dayjs(booking.createdAt).format("DD MMMM")}
            </p>
          </li>
          <li>
            <h4>الي تاريخ</h4>
            <p className="title-subsection">
              {" "}
              {dayjs(booking.endDate).format("DD MMMM")}
            </p>
          </li>
          <li>
            <h4>السعر الإجمالي</h4>
            <p className="RequestDetails__totalPrice">{totalPrice} L.E</p>
          </li>
        </ul>
        <div>
          <h4 className="title-subsection-18 f-bold">ملاحظات</h4>
          <p className="title-subsection-18 ">{booking?.notes}</p>
        </div>
      </div>
    </section>
  );
};
