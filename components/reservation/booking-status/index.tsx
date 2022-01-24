import React from "react";
interface props {
  status: string;
}
export const BookingStatus: React.FC<props> = ({ status }) => {
  console.log(status);
  if (status == "EXPIRED")
    return (
      <div className="bg-secondary  RequestDetails__status ">
        <span className="text-white">منتهي</span>
      </div>
    );

  // if (status == "REJECTED")
  //   return (
  //     <div className="bg-secondary  RequestDetails__status ">
  //       <span className="text-white">مرفوض</span>
  //     </div>
  //   );

  if (status == "REJECTED")
    return (
      <div className="bg-danger  RequestDetails__status ">
        <span className="text-white">ملغي</span>
      </div>
    );

  if (status == "completed")
    return (
      <div className="bg-primary  RequestDetails__status ">
        <span className="text-white">مكتمل</span>
      </div>
    );
  if (status == "Accepted" || status == "ACCEPTED")
    return (
      <div className="bg-primary  RequestDetails__status ">
        <span className="text-white">موافق</span>
      </div>
    );
  if (status == "PENDING")
    return (
      <div className="bg-warning  RequestDetails__status ">
        <span className="text-white">قيد الإنتظار</span>
      </div>
    );
  else return <div></div>;
};
